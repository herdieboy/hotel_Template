"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250],{134:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(1530),o=n.useLayoutEffect,i=n.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},429:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},532:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(5163),o=r(8032),i=r(5474),a=o._(r(1530)),u=n._(r(2471)),l=n._(r(3633)),s=r(6056),f=r(429),c=r(1911);r(9653);let d=r(9054),p=n._(r(7356)),g=r(7419),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,n,o,i,a){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:u,width:l,decoding:s,className:f,style:c,fetchPriority:d,placeholder:p,loading:m,unoptimized:b,fill:v,onLoadRef:_,onLoadingCompleteRef:P,setBlurComplete:j,setShowAltText:E,sizesInput:O,onLoad:w,onError:S,...C}=e,x=(0,a.useCallback)(e=>{e&&(S&&(e.src=e.src),e.complete&&h(e,p,_,P,j,b,O))},[r,p,_,P,j,S,b,O]),M=(0,g.useMergedRef)(t,x);return(0,i.jsx)("img",{...C,...y(d),loading:m,width:l,height:u,decoding:s,"data-nimg":v?"fill":"1",className:f,style:c,sizes:o,srcSet:n,src:r,ref:M,onLoad:e=>{h(e.currentTarget,p,_,P,j,b,O)},onError:e=>{E(!0),"empty"!==p&&j(!0),S&&S(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,n),null):(0,i.jsx)(l.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(d.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),o=(0,a.useMemo)(()=>{var e;let t=m||n||f.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),o=t.deviceSizes.sort((e,t)=>e-t),i=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:o,qualities:i}},[n]),{onLoad:u,onLoadingComplete:l}=e,g=(0,a.useRef)(u);(0,a.useEffect)(()=>{g.current=u},[u]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[y,_]=(0,a.useState)(!1),[P,j]=(0,a.useState)(!1),{props:E,meta:O}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:y,showAltText:P});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{...E,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:j,sizesInput:e.sizes,ref:t}),O.priority?(0,i.jsx)(v,{isAppRouter:!r,imgAttributes:E}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},563:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(5163),o=r(5474),i=n._(r(1530)),a=r(3406),u=r(5592),l=r(9887),s=r(7419),f=r(1040),c=r(6898);r(9653);let d=r(5187);function p(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let g=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:g,children:m,prefetch:h=null,passHref:y,replace:b,shallow:v,scroll:_,onClick:P,onMouseEnter:j,onTouchStart:E,legacyBehavior:O=!1,...w}=e;r=m,O&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let S=i.default.useContext(u.AppRouterContext),C=!1!==h,x=null===h?l.PrefetchKind.AUTO:l.PrefetchKind.FULL,{href:M,as:R}=i.default.useMemo(()=>{let e=p(a);return{href:e,as:g?p(g):e}},[a,g]);O&&(n=i.default.Children.only(r));let I=O?n&&"object"==typeof n&&n.ref:t,k=i.default.useCallback(e=>(C&&null!==S&&(0,d.mountLinkInstance)(e,M,S,x),()=>{(0,d.unmountLinkInstance)(e)}),[C,M,S,x]),A={ref:(0,s.useMergedRef)(k,I),onClick(e){O||"function"!=typeof P||P(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&!function(e,t,r,n,o,a,u){let{nodeName:l}=e.currentTarget;!("A"===l.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),i.default.startTransition(()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,S,M,R,b,v,_)},onMouseEnter(e){O||"function"!=typeof j||j(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&C&&(0,d.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){O||"function"!=typeof E||E(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&C&&(0,d.onNavigationIntent)(e.currentTarget)}};return(0,f.isAbsoluteUrl)(R)?A.href=R:O&&!y&&("a"!==n.type||"href"in n.props)||(A.href=(0,c.addBasePath)(R)),O?i.default.cloneElement(n,A):(0,o.jsx)("a",{...w,...A,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},766:(e,t)=>{function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},1040:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return g},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return h},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return l},getLocationOrigin:function(){return a},getURL:function(){return u},isAbsoluteUrl:function(){return i},isResSent:function(){return s},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function u(){let{href:e}=window.location,t=a();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n)throw Object.defineProperty(Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class m extends Error{}class h extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},1911:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let n=r(5163)._(r(1530)),o=r(429),i=n.default.createContext(o.imageConfigDefault)},2625:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,u=n?40*n:t,l=o?40*o:r,s=u&&l?"viewBox='0 0 "+u+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3406:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return u},urlObjectKeys:function(){return a}});let n=r(8032)._(r(766)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,i=e.protocol||"",a=e.pathname||"",u=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let f=e.search||l&&"?"+l||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==s?(s="//"+(s||""),a&&"/"!==a[0]&&(a="/"+a)):s||(s=""),u&&"#"!==u[0]&&(u="#"+u),f&&"?"!==f[0]&&(f="?"+f),""+i+s+(a=a.replace(/[?#]/g,encodeURIComponent))+(f=f.replace("#","%23"))+u}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return i(e)}},3633:(e,t,r)=>{var n=r(544);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return d}});let o=r(5163),i=r(8032),a=r(5474),u=i._(r(1530)),l=o._(r(134)),s=r(9065),f=r(2305),c=r(7909);function d(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(9653);let g=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(d(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=g.length;e<t;e++){let t=g[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let o=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,u.default.cloneElement(e,t)}return u.default.cloneElement(e,{key:o})})}let h=function(e){let{children:t}=e,r=(0,u.useContext)(s.AmpStateContext),n=(0,u.useContext)(f.HeadManagerContext);return(0,a.jsx)(l.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6056:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(9653);let n=r(2625),o=r(429);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r,u;let l,s,f,{src:c,sizes:d,unoptimized:p=!1,priority:g=!1,loading:m,className:h,quality:y,width:b,height:v,fill:_=!1,style:P,overrideSrc:j,onLoad:E,onLoadingComplete:O,placeholder:w="empty",blurDataURL:S,fetchPriority:C,decoding:x="async",layout:M,objectFit:R,objectPosition:I,lazyBoundary:k,lazyRoot:A,...z}=e,{imgConf:N,showAltText:T,blurComplete:U,defaultLoader:D}=t,L=N||o.imageConfigDefault;if("allSizes"in L)l=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t),n=null==(r=L.qualities)?void 0:r.sort((e,t)=>e-t);l={...L,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===D)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let F=z.loader||D;delete z.loader,delete z.srcSet;let B="__next_img_default"in F;if(B){if("custom"===l.loader)throw Object.defineProperty(Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(M){"fill"===M&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(P={...P,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!d&&(d=t)}let W="",q=a(b),G=a(v);if((u=c)&&"object"==typeof u&&(i(u)||void 0!==u.src)){let e=i(c)?c.default:c;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(s=e.blurWidth,f=e.blurHeight,S=S||e.blurDataURL,W=e.src,!_){if(q||G){if(q&&!G){let t=q/e.width;G=Math.round(e.height*t)}else if(!q&&G){let t=G/e.height;q=Math.round(e.width*t)}}else q=e.width,G=e.height}}let K=!g&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:W)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,K=!1),l.unoptimized&&(p=!0),B&&!l.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(p=!0);let V=a(y),X=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:I}:{},T?{}:{color:"transparent"},P),H=U||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:q,heightInt:G,blurWidth:s,blurHeight:f,blurDataURL:S||"",objectFit:X.objectFit})+'")':'url("'+w+'")',J=H?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},Q=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,a),f=l.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:l.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:i,width:l[f]})}}({config:l,src:c,unoptimized:p,width:q,quality:V,sizes:d,loader:F});return{props:{...z,loading:K?"lazy":m,fetchPriority:C,width:q,height:G,decoding:x,className:h,style:{...X,...J},sizes:Q.sizes,srcSet:Q.srcSet,src:j||Q.src},meta:{unoptimized:p,priority:g,placeholder:w,fill:_}}}},7356:(e,t)=>{function r(e){var t;let{config:r,src:n,width:o,quality:i}=e,a=i||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+o+"&q="+a+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},7419:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(1530);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7909:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},9054:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(5163)._(r(1530)).default.createContext(null)},9065:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(5163)._(r(1530)).default.createContext({})}}]);