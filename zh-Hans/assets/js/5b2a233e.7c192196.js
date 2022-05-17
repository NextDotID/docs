"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[9863],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94653:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(62848),i=r(79213),o=(r(59496),r(49613)),a=["components"],c={id:"intro",slug:"/",title:"Next.ID \u7b80\u4ecb",sidebar_position:1},l="Next.ID \u7b80\u4ecb",s={unversionedId:"intro",id:"intro",title:"Next.ID \u7b80\u4ecb",description:"Next.ID \u662f\u4e0b\u4e00\u4ee3\u5c5e\u4e8e\u7528\u6237\u7684\u53bb\u4e2d\u5fc3\u5316\u7f51\u7edc\u3002\u76ee\u524d\u5728 Next.ID \u751f\u6001\u7cfb\u7edf\u4e2d\u5b9e\u73b0\u4e86\u4e09\u4e2a\u7ec4\u4ef6\uff1a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/zh-Hans/",draft:!1,editUrl:"https://github.com/nextdotid/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",slug:"/",title:"Next.ID \u7b80\u4ecb",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u7b80\u4ecb",permalink:"/zh-Hans/proof-service/ps-intro"}},u={},p=[{value:"ProofService",id:"proofservice",level:2},{value:"KVService",id:"kvservice",level:2},{value:"RelationService",id:"relationservice",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nextid-\u7b80\u4ecb"},"Next.ID \u7b80\u4ecb"),(0,o.kt)("p",null,"Next.ID \u662f\u4e0b\u4e00\u4ee3\u5c5e\u4e8e\u7528\u6237\u7684\u53bb\u4e2d\u5fc3\u5316\u7f51\u7edc\u3002\u76ee\u524d\u5728 Next.ID \u751f\u6001\u7cfb\u7edf\u4e2d\u5b9e\u73b0\u4e86\u4e09\u4e2a\u7ec4\u4ef6\uff1a"),(0,o.kt)("h2",{id:"proofservice"},(0,o.kt)("a",{parentName:"h2",href:"/zh-Hans/proof-service/ps-intro"},"ProofService")),(0,o.kt)("p",null,"\u4e00\u4e2a DID \u670d\u52a1\uff0c\u65e8\u5728\u8fde\u63a5\u4e24\u4e2a\u8eab\u4efd / \u793e\u4ea4\u670d\u52a1\uff0c\u521b\u5efa\u53cc\u5411\u3001\u516c\u5f00\u3001\u53ef\u9a8c\u8bc1\u3001\u9632\u7be1\u6539\u7684\u5bc6\u7801\u5b66\u7ed1\u5b9a\u5173\u7cfb\u3002"),(0,o.kt)("h2",{id:"kvservice"},(0,o.kt)("a",{parentName:"h2",href:"/zh-Hans/kv-service/kv-intro"},"KVService")),(0,o.kt)("p",null,"\u4ee5 ProofService \u7ed1\u5b9a\u8bb0\u5f55\u4e3a\u540d\u5b57\u7a7a\u95f4\u7684\u7b80\u5355\u7ed3\u6784\u5b58\u50a8\u670d\u52a1\uff0c\u6709\u9274\u6743\u3001\u5386\u53f2\u8bb0\u5f55\u3001\u9632\u7be1\u6539\u3001\u53ef\u9a8c\u8bc1\u3002"),(0,o.kt)("h2",{id:"relationservice"},(0,o.kt)("a",{parentName:"h2",href:"/zh-Hans/relation-service/intro"},"RelationService")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"TBD")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Work in progress."))),(0,o.kt)("p",null,"\u805a\u5408\u5e02\u9762\u4e0a\u4f17\u591a DID / \u8eab\u4efd\u7ed1\u5b9a / \u8eab\u4efd\u67e5\u8be2\u670d\u52a1\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u7edf\u4e00\u7684\u641c\u7d22\u63a5\u53e3\u3002"))}f.isMDXComponent=!0}}]);