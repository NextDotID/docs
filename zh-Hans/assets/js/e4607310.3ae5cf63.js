"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[4761],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4743:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(1163),a=(r(9496),r(9613));r(8378);const i={id:"rs-intro",title:"Introduction",sidebar_position:1},o=void 0,l={unversionedId:"relation-service/rs-intro",id:"relation-service/rs-intro",title:"Introduction",description:'RelationService search other third-party "identity  identity"',source:"@site/docs/relation-service/intro.md",sourceDirName:"relation-service",slug:"/relation-service/rs-intro",permalink:"/zh-Hans/relation-service/rs-intro",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/relation-service/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"rs-intro",title:"Introduction",sidebar_position:1},sidebar:"docs",previous:{title:"FAQ",permalink:"/zh-Hans/kv-service/kv-faq"},next:{title:"System Architecture",permalink:"/zh-Hans/relation-service/rs-system"}},s={},p=[{value:"Data source (Upstreams)",id:"upstreams",level:2},{value:"Features",id:"features",level:2},{value:"Structured query response",id:"structured-query-response",level:3},{value:"GraphQL API",id:"graphql-api",level:3},{value:"Query from an <code>identity</code> or web3 asset",id:"query-from-an-identity-or-web3-asset",level:3},{value:"Stateless",id:"stateless",level:3},{value:"Getting Started",id:"getting-started",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RelationService"),' search other third-party "identity <-> identity"\nrelation creation / query service, and aggregate the results into one\nquery.'),(0,a.kt)("h2",{id:"upstreams"},"Data source (Upstreams)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../proof-service/ps-intro"},"ProofService")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://keybase.io"},"Keybase")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Uniswap/sybil-list/blob/master/verified.json"},"SybilList")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rss3.io/network/api.html"},"RSS3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.knn3.xyz/graphql"},"KNN3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cyberconnect.me"},"CyberConnect")),(0,a.kt)("li",{parentName:"ul"},"ETH Leaderboard"),(0,a.kt)("li",{parentName:"ul"},"TheGraph for",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thegraph.com/hosted-service/subgraph/ensdomains/ens"},"ENS"))))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("h3",{id:"structured-query-response"},"Structured query response"),(0,a.kt)("p",null,'"',(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Graph_database"},"Vertex-Edge"),'" style\nresponse for users to recreate the whole identity relation tree within 1 query.'),(0,a.kt)("h3",{id:"graphql-api"},(0,a.kt)("a",{parentName:"h3",href:"./rs-graphql"},"GraphQL API")),(0,a.kt)("p",null,"What you get is what you request. Construct your own query to meet\nyour need."),(0,a.kt)("h3",{id:"query-from-an-identity-or-web3-asset"},"Query from an ",(0,a.kt)("inlineCode",{parentName:"h3"},"identity")," or web3 asset"),(0,a.kt)("p",null,"Start a query by giving one of the following qeury conditions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"platform")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"identity"),", or"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blockchain")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"nft_type")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"contract_address")," (optional) - ",(0,a.kt)("inlineCode",{parentName:"li"},"nft_id"))),(0,a.kt)("h3",{id:"stateless"},"Stateless"),(0,a.kt)("p",null,"Every identity / relation data is fetched when first requested."),(0,a.kt)("p",null,"No unrecoverable data in DB (which means whole DB can be rebuilt)",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check ",(0,a.kt)("a",{parentName:"li",href:"./rs-system"},"System Architecture")," for how RelationService fetch / provide data."),(0,a.kt)("li",{parentName:"ul"},"Check ",(0,a.kt)("a",{parentName:"li",href:"./rs-graphql"},"GraphQL")," for how to use it.")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"For now. We may add some RelationService-only data records in the future. Stay tuned.",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},8378:(e,t,r)=>{r(9496)}}]);