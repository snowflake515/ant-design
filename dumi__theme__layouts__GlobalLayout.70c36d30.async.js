"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1032],{49313:function(te,B,e){e.d(B,{Z:function(){return N},f:function(){return u}});var z=e(667294),u=z.createContext(!1);function N(){return z.useContext(u)}},438746:function(te,B,e){e.d(B,{Z:function(){return v}});var z=e(97857),u=e.n(z),N=e(952677),T=e.n(N),x=e(805574),L=e.n(x),M=e(830084),V=e(667294),I=e(302559);function F(D){return D.replace("-cn","").replace(/\/$/,"")}function v(){var D=(0,M.TH)(),K=D.search,G=(0,I.Z)(),b=L()(G,2),i=b[1],c=V.useCallback(function(d,n){var a=F(d);if(i==="cn"&&(a="".concat(a,"-cn")),K&&(a="".concat(a).concat(K)),n){var s;T()(n)==="object"?s=n[i]:s=n,a="".concat(a,"#").concat(s)}return a},[i,K]);return u()(u()({},D),{},{pathname:F(D.pathname),getLink:c})}},562925:function(te,B,e){e.r(B),e.d(B,{default:function(){return se}});var z=e(97857),u=e.n(z),N=e(805574),T=e.n(N),x=e(667294),L=e(205768),M=e(368655),V=e(359020),I=e(965516),F=e(682582),v=e(830084),D=e(49313),K=e(217187),G=e(438746),b=e(719632),i=e.n(b),c=e(569980),d=e(193045),n=e(614137),a=e(65630),s=e(468839),P=e(122366),U=e(15009),t=e.n(U),r=e(899289),g=e.n(r),p=e(693399),h=`
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

.dark::view-transition-old(root) {
  z-index: 1;
}

.dark::view-transition-new(root) {
  z-index: 999;
}

::view-transition-old(root) {
  z-index: 999;
}

::view-transition-new(root) {
  z-index: 1;
}
`,Y=function(){var f=I.Z.useToken(),m=f.token.colorBgElevated,l=(0,x.useRef)({colorBgElevated:m}),C=function(E,O){(0,p.updateCSS)(`
    * {
    transition: none !important;
  }
    `,"disable-transition"),document.documentElement.animate({clipPath:O?i()(E).reverse():E},{duration:500,easing:"ease-in",pseudoElement:O?"::view-transition-old(root)":"::view-transition-new(root)"}).addEventListener("finish",function(){(0,p.removeCSS)("disable-transition")})},R=function(E,O){if(E&&typeof document.startViewTransition=="function"){var Z=E.clientX,y=E.clientY,_=Math.hypot(Math.max(Z,innerWidth-Z),Math.max(y,innerHeight-y));(0,p.updateCSS)(`
    [data-prefers-color='dark'] {
      color-scheme: light !important;
    }
    
    [data-prefers-color='light'] {
      color-scheme: dark !important;
    }
    `,"color-scheme"),document.startViewTransition(g()(t()().mark(function W(){var A;return t()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(m!==l.current.colorBgElevated){j.next=5;break}return j.next=3,new Promise(function(le){setTimeout(le,1e3/60)});case 3:j.next=0;break;case 5:A=document.documentElement,A.classList.remove(O?"dark":"light"),A.classList.add(O?"light":"dark");case 8:case"end":return j.stop()}},W)}))).ready.then(function(){var W=["circle(0px at ".concat(Z,"px ").concat(y,"px)"),"circle(".concat(_,"px at ").concat(Z,"px ").concat(y,"px)")];(0,p.removeCSS)("color-scheme"),C(W,O)})}};return(0,x.useEffect)(function(){typeof document.startViewTransition=="function"&&(0,p.updateCSS)(h,"view-transition-style")},[]),(0,x.useEffect)(function(){m!==l.current.colorBgElevated&&(l.current.colorBgElevated=m)},[m]),R},X=Y,Q=e(373638),ue=e(316165),o=e(785893),de=function(f){var m=x.useCallback(function(){return(0,o.jsx)("svg",u()(u()({width:20,height:20,viewBox:"0 0 24 24",fill:"currentColor"},f),{},{children:(0,o.jsx)("g",{fillRule:"evenodd",children:(0,o.jsx)("g",{fillRule:"nonzero",children:(0,o.jsx)("path",{d:"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"})})})}))},[f]);return(0,o.jsx)(ue.Z,u()({component:m},f))},ne=de,fe=function(f){var m=f.value,l=m===void 0?["light"]:m,C=f.onChange,R=(0,a.Fg)(),S=(0,v.TH)(),E=S.pathname,O=S.search,Z=l.includes("happy-work"),y=l.includes("dark"),_=X();return(0,o.jsxs)(n.Z.Group,{trigger:"click",icon:(0,o.jsx)(ne,{}),"aria-label":"Theme Switcher",badge:{dot:!0},style:{zIndex:1010},children:[(0,o.jsx)(v.rU,{to:(0,Q.J1)("/theme-editor",(0,Q.KE)(E),O),style:{display:"block",marginBottom:R.margin},children:(0,o.jsx)(n.Z,{icon:(0,o.jsx)(c.Z,{}),tooltip:(0,o.jsx)(v._H,{id:"app.footer.theme"})})}),(0,o.jsx)(n.Z,{icon:(0,o.jsx)(s.Z,{}),type:y?"primary":"default",onClick:function(A){_(A,y),C(y?l.filter(function(q){return q!=="dark"}):[].concat(i()(l),["dark"]))},tooltip:(0,o.jsx)(v._H,{id:"app.theme.switch.dark"})}),(0,o.jsx)(n.Z,{icon:(0,o.jsx)(P.Z,{}),type:l.includes("compact")?"primary":"default",onClick:function(){l.includes("compact")?C(l.filter(function(A){return A!=="compact"})):C([].concat(i()(l),["compact"]))},tooltip:(0,o.jsx)(v._H,{id:"app.theme.switch.compact"})}),(0,o.jsx)(n.Z,{badge:{dot:!0},icon:(0,o.jsx)(d.Z,{}),type:Z?"primary":"default",onClick:function(){C(Z?l.filter(function(A){return A!=="happy-work"}):[].concat(i()(l),["happy-work"]))},tooltip:(0,o.jsx)(v._H,{id:Z?"app.theme.switch.happy-work.off":"app.theme.switch.happy-work.on"})})]})},re=fe,me=e(513769),ve=e.n(me),oe=e(879348),k=["children","theme"],w=function(f){var m=f.children,l=f.theme,C=ve()(f,k),R=(0,x.useContext)(oe.ZP.ConfigContext),S=R.getPrefixCls,E=R.iconPrefixCls,O=S(),Z=I.Z.useToken(),y=Z.token;return x.useEffect(function(){oe.ZP.config({theme:l})},[l]),(0,o.jsx)(a.f6,u()(u()({},C),{},{theme:l,customToken:{headerHeight:64,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:y.colorFillTertiary,antCls:".".concat(O),iconCls:".".concat(E),marginFarXS:y.marginXXL/6*7,marginFarSM:y.marginXXL/3*5,marginFar:y.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40},children:m}))},he=w,ae=e(438199),ie=768,ge=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return f.map(function(m){return m==="dark"?I.Z.darkAlgorithm:m==="compact"?I.Z.compactAlgorithm:I.Z.defaultAlgorithm})},pe=function(){var f=(0,v.pC)(),m=(0,G.Z)(),l=m.pathname,C=(0,v.lr)(),R=T()(C,2),S=R[0],E=R[1],O=(0,v.OI)(),Z=T()(O,3),y=Z[2],_=(0,K.Z)({isMobile:!1,direction:"ltr",theme:[]}),W=T()(_,2),A=W[0],q=A.theme,j=q===void 0?[]:q,le=A.direction,Ce=A.isMobile,Se=W[1],ce=(0,x.useCallback)(function(H){Se(function(xe){return u()(u()({},xe),H)});var ee=S.toString(),J=S;Object.entries(H).forEach(function(xe){var Me=T()(xe,2),Pe=Me[0],Ee=Me[1];if(Pe==="direction"&&(Ee==="rtl"?J.set("direction","rtl"):J.delete("direction")),Pe==="theme"){var Ae=Ee.filter(function(Ie){return Ie!=="light"});J=(0,v.fW)(u()(u()({},J),{},{theme:Ae})),y(Ae.includes("dark")?"dark":"light")}}),J.toString()!==ee&&E(J)},[S,E]),ye=function(){ce({isMobile:window.innerWidth<ie})};(0,x.useEffect)(function(){var H=S.getAll("theme"),ee=S.get("direction");return Se({theme:H,direction:ee==="rtl"?"rtl":"ltr"}),ye(),y(H.includes("dark")?"dark":"light"),window.addEventListener("resize",ye),function(){window.removeEventListener("resize",ye)}},[]);var Le=(0,x.useMemo)(function(){return{direction:le,updateSiteConfig:ce,theme:j,isMobile:Ce}},[Ce,le,ce,j]),De=x.useState(function(){return(0,L.createCache)()}),Oe=T()(De,1),je=Oe[0];(0,v.vj)(function(){var H=(0,L.extractStyle)(je,!0);return(0,o.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:H}})}),(0,v.vj)(function(){return(0,o.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,V.$Z)()}})});var Ze=l.startsWith("/~demos"),Te=f;return Ze||(Te=(0,o.jsxs)(F.Z,{children:[f,(0,o.jsx)(re,{value:j,onChange:function(ee){return ce({theme:ee})}})]})),(0,o.jsx)(D.f.Provider,{value:j.includes("dark"),children:(0,o.jsx)(L.StyleProvider,{cache:je,linters:[L.logicalPropertiesLinter,L.legacyNotSelectorLinter,L.parentSelectorLinter],children:(0,o.jsx)(ae.Z.Provider,{value:Le,children:(0,o.jsx)(he,{theme:{algorithm:ge(j),token:{motion:!j.includes("motion-off")}},children:(0,o.jsx)(M.R,{disabled:!j.includes("happy-work"),children:Te})})})})})},se=pe},373638:function(te,B,e){e.d(B,{J1:function(){return F},Is:function(){return b},Fy:function(){return D},KE:function(){return I},qE:function(){return v}});var z=e(661227),u=e(805574),N=e(97857),T=e(385564),x=e(842348),L=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),M={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":L?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function V(i,c,d,n){var a=i.map(function(t){return t.meta}).filter(function(t){return!t.skip}),s=[],P=function(r,g){return(r.order||0)-(g.order||0)};a.sort(P).forEach(function(t){if(t.category&&(t.category=t.category[c]||t.category),t.type&&(t.type=t.type[c]||t.type),t!=null&&t.title&&(t.title=t.title[c]||t.title),!t.category){s.push(t);return}if(t.category==="Components"&&t.type){var r=s.find(function(h){return(h==null?void 0:h.title)===t.type});r||(r={type:"type",title:t.type,children:[],order:n[t.type]},s.push(r)),r.children=r.children||[],r.children.push(t);return}var g=s.find(function(h){return(h==null?void 0:h.title)===t.category});if(g||(g={type:"category",title:t.category,children:[],order:d[t.category]},s.push(g)),g.children=g.children||[],t.type){var p=g.children.filter(function(h){return(h==null?void 0:h.title)===t.type})[0];p||(p={type:"type",title:t.type,children:[],order:n[t.type]},g.children.push(p)),p.children=p.children||[],p.children.push(t)}else g.children.push(t)});function U(t){return t.sort(P).map(function(r){return r.children?_objectSpread(_objectSpread({},r),{},{children:U(r.children)}):r})}return U(s)}function I(i){return/-cn\/?$/.test(i)}function F(i,c,d,n){var a=i.startsWith("/")?i:"/".concat(i),s;if(c?a==="/"?s="/index-cn":a.endsWith("/")?s=a.replace(/\/$/,"-cn/"):(s="".concat(a,"-cn"),s=s.replace(/(-cn)+/,"-cn")):s=/\/?index-cn/.test(a)?"/":a.replace("-cn",""),n){var P=n[c?"zhCN":"enUS"];s+="#".concat(P)}return{pathname:s,search:d}}function v(i){var c="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",d=new Image,n,a=function(P){n||(n=!0,d.src="",i(P))};return d.onload=function(){return a("responded")},d.onerror=function(){return a("error")},d.src=c,setTimeout(function(){return a("timeout")},1500)}function D(){var i="test",c=window.localStorage;try{return c.setItem(i,"1"),c.removeItem(i),!0}catch(d){return!1}}function K(i){return new Promise(function(c,d){var n=document.createElement("script");n.type="text/javascript",n.src=i,n.onload=c,n.onerror=d,document.head.appendChild(n)})}function G(i){var c=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(i))return"";var d=flattenDeep(i.filter(function(n){if(Array.isArray(n)){var a=_slicedToArray(n,1),s=a[0];return s==="p"}return!1}).map(function(n){var a=flatten(n),s=_toArray(a),P=s[0],U=s.slice(1),t=U.filter(function(r){return typeof r=="string"&&!c.includes(r)}).join("");return[P,t]})).find(function(n){return n&&typeof n=="string"&&!c.includes(n)});return d}var b=function(){return M}},682582:function(te,B,e){e.d(B,{Z:function(){return U}});var z=e(97857),u=e.n(z),N=e(805574),T=e.n(N),x=e(294184),L=e.n(x),M=e(667294),V=e(73287),I=e(215570),F=e(578898),v=e(890887),D=M.createContext({}),K=M.createContext({message:{},notification:{},modal:{}}),G=K,b=e(9783),i=e.n(b),c=e(141035),d=function(r){var g=r.componentCls,p=r.colorText,h=r.fontSize,Y=r.lineHeight,X=r.fontFamily;return i()({},g,{color:p,fontSize:h,lineHeight:Y,fontFamily:X})},n=(0,c.Z)("App",function(t){return[d(t)]}),a=e(785893),s=function(){return M.useContext(G)},P=function(r){var g=r.prefixCls,p=r.children,h=r.className,Y=r.rootClassName,X=r.message,Q=r.notification,ue=r.style,o=(0,M.useContext)(V.E_),de=o.getPrefixCls,ne=de("app",g),fe=n(ne),re=T()(fe,2),me=re[0],ve=re[1],oe=L()(ve,ne,h,Y),k=(0,M.useContext)(D),w=M.useMemo(function(){return{message:u()(u()({},k.message),X),notification:u()(u()({},k.notification),Q)}},[X,Q,k.message,k.notification]),he=(0,I.Z)(w.message),ae=T()(he,2),ie=ae[0],ge=ae[1],pe=(0,v.Z)(w.notification),se=T()(pe,2),$=se[0],f=se[1],m=(0,F.Z)(),l=T()(m,2),C=l[0],R=l[1],S=M.useMemo(function(){return{message:ie,notification:$,modal:C}},[ie,$,C]);return me((0,a.jsx)(G.Provider,{value:S,children:(0,a.jsx)(D.Provider,{value:w,children:(0,a.jsxs)("div",{className:oe,style:ue,children:[R,ge,f,p]})})}))};P.useApp=s;var U=P}}]);
