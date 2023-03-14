"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[8222],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),y=a,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(1163),a=(r(9496),r(9613));r(8378);const i={id:"ps-intro",title:"Introduction",sidebar_position:1},o=void 0,s={unversionedId:"proof-service/ps-intro",id:"proof-service/ps-intro",title:"Introduction",description:"ProofService provides a DID service to build a connection between",source:"@site/docs/proof-service/intro.md",sourceDirName:"proof-service",slug:"/proof-service/ps-intro",permalink:"/proof-service/ps-intro",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/proof-service/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ps-intro",title:"Introduction",sidebar_position:1},sidebar:"docs",previous:{title:"Product & System Architecture",permalink:"/core-concepts/architecture"},next:{title:"Glossary",permalink:"/proof-service/ps-glossary"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Two-way binding",id:"two-way-binding",level:3},{value:"Publicly verifiable",id:"publicly-verifiable",level:3},{value:"Blockchain-like anti-falsifying mechanism",id:"blockchain-like-anti-falsifying-mechanism",level:3},{value:"Downgrading detection",id:"downgrading-detection",level:3},{value:"Arweave backup",id:"arweave-backup",level:3},{value:"Design goal",id:"design-goal",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ProofService")," provides a DID service to build a connection between\nasymmetric cryptography (currently elliptic curve) and other identity\nprovider (other asymmetric cryptography ID, Web2.0 identity provider,\netc)."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("h3",{id:"two-way-binding"},"Two-way binding"),(0,a.kt)("p",null,"Missing proof material will make this binding status\n",(0,a.kt)("a",{parentName:"p",href:"ps-glossary#glossary-downgrade"},"downgraded"),"."),(0,a.kt)("h3",{id:"publicly-verifiable"},"Publicly verifiable"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"ps-glossary#glossary-proof-post"},"Proof post")," should be anonymously\naccessible. Any user / service / program can verify this binding\nwithout much cost."),(0,a.kt)("h3",{id:"blockchain-like-anti-falsifying-mechanism"},"Blockchain-like anti-falsifying mechanism"),(0,a.kt)("p",null,"Every changes made by user are\n",(0,a.kt)("a",{parentName:"p",href:"ps-glossary#glossary-proof-chain"},"chained")," and signed by user's\n",(0,a.kt)("a",{parentName:"p",href:"ps-glossary#glossary-avatar"},"avatar"),"."),(0,a.kt)("h3",{id:"downgrading-detection"},"Downgrading detection"),(0,a.kt)("p",null,"ProofService will tell user a record is\n",(0,a.kt)("a",{parentName:"p",href:"ps-glossary#glossary-downgrade"},"invalid")," right now, if queried user\ndeletes his / her ",(0,a.kt)("a",{parentName:"p",href:"ps-glossary#glossary-proof-post"},"proof post")," after\nsuccessfully creating a ",(0,a.kt)("a",{parentName:"p",href:"ps-glossary#glossary-binding"},"binding"),"."),(0,a.kt)("p",null,"We encourage user to keep their proof materials as long as they can,\nto let other people / program re-validate them later."),(0,a.kt)("h3",{id:"arweave-backup"},"Arweave backup"),(0,a.kt)("p",null,"Each ",(0,a.kt)("a",{parentName:"p",href:"ps-glossary#glossary-proof-chain"},"ProofChain")," is backed up onto\nArweave to let the whole system become more neutral."),(0,a.kt)("h2",{id:"design-goal"},"Design goal"),(0,a.kt)("p",null,'ProofService is designed to prove "An\n',(0,a.kt)("a",{parentName:"p",href:"ps-glossary#glossary-identity"},"Identity")," and an\n",(0,a.kt)("a",{parentName:"p",href:"ps-glossary#glossary-avatar"},"Avatar"),' are held by a same person".'),(0,a.kt)("p",null,"Separate this assertion into 2 parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'"I" hold this ',(0,a.kt)("a",{parentName:"li",href:"ps-glossary#glossary-avatar"},"Avatar")," right now."),(0,a.kt)("li",{parentName:"ol"},'"I" hold this ',(0,a.kt)("a",{parentName:"li",href:"ps-glossary#glossary-identity"},"identity")," right now.")),(0,a.kt)("p",null,"The ability of ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),' is equivalent to "Generate a signature using secret key of this Persona".'),(0,a.kt)("p",null,"The ability of ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),' is equivalent to "Make an action using this identity".'),(0,a.kt)("p",null,"To reach ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," at the same time, we're using ",(0,a.kt)("a",{parentName:"p",href:"ps-glossary#glossary-proof-post"},"Proof post")," mechanism:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Let user publicly post a "specific content" using ',(0,a.kt)("a",{parentName:"li",href:"ps-glossary#glossary-identity"},"identity")," on target ",(0,a.kt)("a",{parentName:"li",href:"ps-glossary#glossary-platform"},"platform"),"."),(0,a.kt)("li",{parentName:"ol"},'The "specific content" is a signature generated by ',(0,a.kt)("a",{parentName:"li",href:"ps-glossary#glossary-avatar"},"Avatar"),"."),(0,a.kt)("li",{parentName:"ol"},"ProofService server (and other users who want to verify this\nbinding later) reads this public post, extracts signature from post\ncontent, and verifies this signature.")))}u.isMDXComponent=!0},8378:(e,t,r)=>{r(9496)}}]);