import * as React from 'react';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import InfoCircleFilled from '@ant-design/icons/InfoCircleFilled';
import classNames from 'classnames';

import { getTransitionName } from '../_util/motion';
import warning from '../_util/warning';
import type { ThemeConfig } from '../config-provider';
import ConfigProvider from '../config-provider';
import { useLocale } from '../locale';
import CancelBtn from './components/ConfirmCancelBtn';
import OkBtn from './components/ConfirmOkBtn';
import type { ModalContextProps } from './context';
import { ModalContextProvider } from './context';
import type { ModalFuncProps, ModalLocale } from './interface';
import Dialog from './Modal';
import ConfirmCmp from './style/confirmCmp';

export interface ConfirmDialogProps extends ModalFuncProps {
  prefixCls: string;
  afterClose?: () => void;
  close?: (...args: any[]) => void;
  /**
   * `close` prop support `...args` that pass to the developer
   * that we can not break this.
   * Provider `onClose` for internal usage
   */
  onConfirm?: (confirmed: boolean) => void;
  autoFocusButton?: null | 'ok' | 'cancel';
  rootPrefixCls?: string;
  iconPrefixCls?: string;
  theme?: ThemeConfig;

  /** @private Internal Usage. Do not override this */
  locale?: ModalLocale;

  /**
   * Do not throw if is await mode
   */
  isSilent?: () => boolean;
}

export function ConfirmContent(
  props: ConfirmDialogProps & {
    confirmPrefixCls: string;
  },
) {
  const {
    prefixCls,
    icon,
    okText,
    cancelText,
    confirmPrefixCls,
    type,
    okCancel,
    footer,
    // Legacy for static function usage
    locale: staticLocale,
    ...resetProps
  } = props;

  warning(
    !(typeof icon === 'string' && icon.length > 2),
    'Modal',
    `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`,
  );

  // Icon
  let mergedIcon: React.ReactNode = icon;

  // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon
  if (!icon && icon !== null) {
    switch (type) {
      case 'info':
        mergedIcon = <InfoCircleFilled />;
        break;

      case 'success':
        mergedIcon = <CheckCircleFilled />;
        break;

      case 'error':
        mergedIcon = <CloseCircleFilled />;
        break;

      default:
        mergedIcon = <ExclamationCircleFilled />;
    }
  }

  // 默认为 true，保持向下兼容
  const mergedOkCancel = okCancel ?? type === 'confirm';

  const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';

  const [locale] = useLocale('Modal');

  const mergedLocale = staticLocale || locale;

  // ================== Locale Text ==================
  const okTextLocale = okText || (mergedOkCancel ? mergedLocale?.okText : mergedLocale?.justOkText);
  const cancelTextLocale = cancelText || mergedLocale?.cancelText;

  // ================= Context Value =================
  const btnCtxValue: ModalContextProps = {
    autoFocusButton,
    cancelTextLocale,
    okTextLocale,
    mergedOkCancel,
    ...resetProps,
  };
  const btnCtxValueMemo = React.useMemo(() => btnCtxValue, [...Object.values(btnCtxValue)]);

  // ====================== Footer Origin Node ======================
  const footerOriginNode = (
    <>
      <CancelBtn />
      <OkBtn />
    </>
  );

  const hasTitle = props.title !== undefined && props.title !== null;

  const bodyCls = `${confirmPrefixCls}-body`;

  return (
    <div className={`${confirmPrefixCls}-body-wrapper`}>
      <div
        className={classNames(bodyCls, {
          [`${bodyCls}-has-title`]: hasTitle,
        })}
      >
        {mergedIcon}
        <div className={`${confirmPrefixCls}-paragraph`}>
          {hasTitle && <span className={`${confirmPrefixCls}-title`}>{props.title}</span>}
          <div className={`${confirmPrefixCls}-content`}>{props.content}</div>
        </div>
      </div>

      {footer === undefined || typeof footer === 'function' ? (
        <ModalContextProvider value={btnCtxValueMemo}>
          <div className={`${confirmPrefixCls}-btns`}>
            {typeof footer === 'function'
              ? footer(footerOriginNode, {
                  OkBtn,
                  CancelBtn,
                })
              : footerOriginNode}
          </div>
        </ModalContextProvider>
      ) : (
        footer
      )}

      <ConfirmCmp prefixCls={prefixCls} />
    </div>
  );
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = (props) => {
  const {
    close,
    zIndex,
    afterClose,
    visible,
    open,
    keyboard,
    centered,
    getContainer,
    maskStyle,
    direction,
    prefixCls,
    wrapClassName,
    rootPrefixCls,
    iconPrefixCls,
    theme,
    bodyStyle,
    closable = false,
    closeIcon,
    modalRender,
    focusTriggerAfterClose,
    onConfirm,
  } = props;

  if (process.env.NODE_ENV !== 'production') {
    warning(
      visible === undefined,
      'Modal',
      `\`visible\` is deprecated, please use \`open\` instead.`,
    );
  }

  const confirmPrefixCls = `${prefixCls}-confirm`;

  const width = props.width || 416;
  const style = props.style || {};
  const mask = props.mask === undefined ? true : props.mask;
  // 默认为 false，保持旧版默认行为
  const maskClosable = props.maskClosable === undefined ? false : props.maskClosable;

  const classString = classNames(
    confirmPrefixCls,
    `${confirmPrefixCls}-${props.type}`,
    { [`${confirmPrefixCls}-rtl`]: direction === 'rtl' },
    props.className,
  );

  return (
    <ConfigProvider
      prefixCls={rootPrefixCls}
      iconPrefixCls={iconPrefixCls}
      direction={direction}
      theme={theme}
    >
      <Dialog
        prefixCls={prefixCls}
        className={classString}
        wrapClassName={classNames(
          { [`${confirmPrefixCls}-centered`]: !!props.centered },
          wrapClassName,
        )}
        onCancel={() => {
          close?.({ triggerCancel: true });
          onConfirm?.(false);
        }}
        open={open}
        title=""
        footer={null}
        transitionName={getTransitionName(rootPrefixCls || '', 'zoom', props.transitionName)}
        maskTransitionName={getTransitionName(
          rootPrefixCls || '',
          'fade',
          props.maskTransitionName,
        )}
        mask={mask}
        maskClosable={maskClosable}
        maskStyle={maskStyle}
        style={style}
        bodyStyle={bodyStyle}
        width={width}
        zIndex={zIndex}
        afterClose={afterClose}
        keyboard={keyboard}
        centered={centered}
        getContainer={getContainer}
        closable={closable}
        closeIcon={closeIcon}
        modalRender={modalRender}
        focusTriggerAfterClose={focusTriggerAfterClose}
      >
        <ConfirmContent {...props} confirmPrefixCls={confirmPrefixCls} />
      </Dialog>
    </ConfigProvider>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ConfirmDialog.displayName = 'ConfirmDialog';
}

export default ConfirmDialog;
