"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[8222],{9613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1741:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(5443),o=r(3010),i=(r(9496),r(9613)),a=["components"],s={id:"ps-intro",title:"Introduction",sidebar_position:1},l=void 0,p={unversionedId:"proof-service/ps-intro",id:"proof-service/ps-intro",title:"Introduction",description:"ProofService provides a DID service to build a connection between",source:"@site/docs/proof-service/intro.md",sourceDirName:"proof-service",slug:"/proof-service/ps-intro",permalink:"/proof-service/ps-intro",draft:!1,editUrl:"https://github.com/nextdotid/docs/docs/proof-service/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ps-intro",title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Next.ID Overview",permalink:"/"},next:{title:"Glossary",permalink:"/proof-service/ps-glossary"}},c={},u=[{value:"Feature",id:"feature",level:2},{value:"Two-way binding",id:"two-way-binding",level:3},{value:"Publicly verifiable",id:"publicly-verifiable",level:3},{value:"Design goal",id:"design-goal",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ProofService")," provides a DID service to build a connection between\nasymmetric cryptography (currently elliptic curve) and other identity\nprovider (other asymmetric cryptography ID, Web2.0 identity provider,\netc)."),(0,i.kt)("h2",{id:"feature"},"Feature"),(0,i.kt)("h3",{id:"two-way-binding"},"Two-way binding"),(0,i.kt)("p",null,"Missing proof material will make this binding status\n",(0,i.kt)("a",{parentName:"p",href:"ps-glossary#glossary-downgrade"},"downgraded"),"."),(0,i.kt)("h3",{id:"publicly-verifiable"},"Publicly verifiable"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"ps-glossary#glossary-proof-post"},"Proof post")," should be anonymously\naccessible. Any user / service / program can verify this binding\nwithout much cost."),(0,i.kt)("h2",{id:"design-goal"},"Design goal"),(0,i.kt)("p",null,'ProofService is designed to prove "An\n',(0,i.kt)("a",{parentName:"p",href:"ps-glossary#glossary-identity"},"Identity")," and a\n",(0,i.kt)("a",{parentName:"p",href:"ps-glossary#glossary-persona"},"Persona"),' is held by same person".'),(0,i.kt)("p",null,"Let's take this assertion into 2 parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'"I" hold this Persona.'),(0,i.kt)("li",{parentName:"ol"},'"I" hold this identity.')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1"),' equals "Generate a signature using secret key of this Persona".'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"2"),' equals "Make an action using this identity".'),(0,i.kt)("p",null,"Here we reach ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," with ",(0,i.kt)("a",{parentName:"p",href:"ps-glossary#glossary-proof-post"},"Proof post")," mechanism."))}f.isMDXComponent=!0}}]);