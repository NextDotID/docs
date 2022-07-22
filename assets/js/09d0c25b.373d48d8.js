"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[6244],{49613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,v=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(v,a(a({ref:t},l),{},{components:n})):r.createElement(v,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(62081),o=(n(59496),n(49613));const i={id:"kv-faq",title:"FAQ",sidebar_position:5},a=void 0,c={unversionedId:"kv-service/kv-faq",id:"kv-service/kv-faq",title:"FAQ",description:"I got public key mismatch error in POST /v1/kv",source:"@site/docs/kv-service/faq.md",sourceDirName:"kv-service",slug:"/kv-service/kv-faq",permalink:"/kv-service/kv-faq",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/kv-service/faq.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"kv-faq",title:"FAQ",sidebar_position:5}},p={},s=[{value:"I got <code>public key mismatch</code> error in <code>POST /v1/kv</code>",id:"bad-signature",level:2},{value:"Does KVService rely on an existed Persona / binding on ProofService?",id:"does-kvservice-rely-on-an-existed-persona--binding-on-proofservice",level:2}],l={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bad-signature"},"I got ",(0,o.kt)("inlineCode",{parentName:"h2"},"public key mismatch")," error in ",(0,o.kt)("inlineCode",{parentName:"h2"},"POST /v1/kv")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/proof-service/ps-faq#bad-signature"},"ProofService FAQ"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Double check ",(0,o.kt)("inlineCode",{parentName:"p"},"dataToSign.length")," part.")),(0,o.kt)("h2",{id:"does-kvservice-rely-on-an-existed-persona--binding-on-proofservice"},"Does KVService rely on an existed Persona / binding on ProofService?"),(0,o.kt)("p",null,"Not really! You can use this as a storage for every secp256k1 keypair\n(",(0,o.kt)("inlineCode",{parentName:"p"},'platform == nextid && identity == "0xPUBLIC_KEY"'),") without even\nusing it on ProofService."),(0,o.kt)("p",null,"But, if you want to save data related to a specific account, we still\nencourage you to put it under precise ",(0,o.kt)("inlineCode",{parentName:"p"},"platform")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"identity"),"."),(0,o.kt)("p",null,"A typical case is, your DApp allows user to set different NFT avatar\non Twitter and Github. In this case, ",(0,o.kt)("inlineCode",{parentName:"p"},"platform")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"identity")," should\nbe specified (instead of being put under an ambiguous persona pubkey)."))}u.isMDXComponent=!0}}]);