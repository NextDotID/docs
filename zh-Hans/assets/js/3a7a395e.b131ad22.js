"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[1676],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),k=n,v=u["".concat(s,".").concat(k)]||u[k]||d[k]||i;return a?r.createElement(v,o(o({ref:t},c),{},{components:a})):r.createElement(v,o({ref:t},c))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3508:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(1163),n=(a(9496),a(9613));a(8378);const i={id:"kv-intro",title:"Introduction",sidebar_position:1},o=void 0,l={unversionedId:"kv-service/kv-intro",id:"kv-service/kv-intro",title:"Introduction",description:"KVService is designed to save/read user data in a traceable and",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/kv-service/intro.md",sourceDirName:"kv-service",slug:"/kv-service/kv-intro",permalink:"/zh-Hans/kv-service/kv-intro",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/kv-service/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"kv-intro",title:"Introduction",sidebar_position:1},sidebar:"docs",previous:{title:"FAQ",permalink:"/zh-Hans/proof-service/ps-faq"},next:{title:"FAQ",permalink:"/zh-Hans/kv-service/kv-faq"}},s={},p=[{value:"Feature",id:"feature",level:2},{value:"Free data structure",id:"free-data-structure",level:3},{value:"Verifiable records",id:"verifiable-records",level:3},{value:"Brief of design",id:"brief-of-design",level:2},{value:"Use case",id:"use-case",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Write data",id:"write-data",level:3},{value:"Query data",id:"query-data",level:3},{value:"Conventions",id:"conventions",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"KVService is designed to save/read user data in a traceable and\ndecentralized way."),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("h3",{id:"free-data-structure"},"Free data structure"),(0,n.kt)("p",null,"KVService can store any valid ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON")," ",(0,n.kt)("inlineCode",{parentName:"p"},"object")," data."),(0,n.kt)("h3",{id:"verifiable-records"},"Verifiable records"),(0,n.kt)("p",null,"KVService use the same design of\n",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/proof-service/ps-intro"},"ProofService"),"'s ",(0,n.kt)("a",{parentName:"p",href:"/zh-Hans/proof-service/ps-glossary#glossary-proof-chain"},"signature\nchain")," to ensure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Traceable: all changes are approved by user and cannot be falsified\nby third parties."),(0,n.kt)("li",{parentName:"ul"},"Decentralized: The user has the full right to dispose the data.")),(0,n.kt)("admonition",{title:"WIP",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"KVService will provide API for signature chain export. Anyone can\nverify each changes, and restore the final data status.")),(0,n.kt)("h2",{id:"brief-of-design"},"Brief of design"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Every user has ",(0,n.kt)("inlineCode",{parentName:"p"},"N + 1")," namespaces\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh-Hans/proof-service/ps-glossary#glossary-avatar"},"Avatar")," itself has a namespace (",(0,n.kt)("inlineCode",{parentName:"li"},'platform == "nextid" && identity == "0xAVATAR_PUBLIC_KEY"'),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"There's no limitation that ",(0,n.kt)("a",{parentName:"li",href:"/zh-Hans/proof-service/ps-glossary#glossary-avatar"},"Avatar")," should be used in ",(0,n.kt)("a",{parentName:"li",href:"/zh-Hans/proof-service/ps-intro"},"ProofService")," once."))),(0,n.kt)("li",{parentName:"ul"},"Each ",(0,n.kt)("a",{parentName:"li",href:"/zh-Hans/proof-service/ps-glossary#glossary-link"},"binding record")," (in ",(0,n.kt)("a",{parentName:"li",href:"/zh-Hans/proof-service/ps-intro"},"ProofService"),") of each ",(0,n.kt)("a",{parentName:"li",href:"/zh-Hans/proof-service/ps-glossary#glossary-avatar"},"Avatar")," has a namespace.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Value of ",(0,n.kt)("inlineCode",{parentName:"li"},"platform")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"identity")," are the same as ",(0,n.kt)("a",{parentName:"li",href:"/zh-Hans/proof-service/ps-platforms-supported"},"definition")," in ProofService."))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/rest-api/kvservice-api#query"},"Query data"),": public, only need to specify ",(0,n.kt)("inlineCode",{parentName:"p"},"avatar"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/rest-api/kvservice-api#payload"},"Write data"),": A patch followed ",(0,n.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7396"},"RFC 7396")," standard."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"A glimpse of RFC7396"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},'// Assume data is:\n{\n  "a": {\n    "b": [2, 3, 4, "test"]\n  },\n  "c": "Hello"\n}\n// If this patch is submitted:\n{ "a": { "b": null, "new_key": true }, "c": "KVService" }\n// Then data will become:\n{\n  "a": {\n    "new_key": true\n  },\n  "c": "KVService"\n}\n// Notice: nedted modification of Array value is not supported.\n//         Replace the whole Array with new value instead.\n'))))),(0,n.kt)("h2",{id:"use-case"},"Use case"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Web3 apps need to save user configurations",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"e.g. profile (name, avatar link, bio, etc.), NFT showcase (hide/show, order, etc.) or wallet address priority.")))),(0,n.kt)("h2",{id:"workflow"},"Workflow"),(0,n.kt)("h3",{id:"write-data"},"Write data"),(0,n.kt)("mermaid",{value:"sequenceDiagram\n    autonumber\n    actor U as User\n    participant A as Application\n    participant KS as KVService\n\n    U ->> A : (Start a modification request)\n    A ->> KS : POST /v1/kv/payload\n    KS --\x3e> A : sign_payload\n    A ->> U : avatar.eth_avatarlSign(sign_payload)\n    U --\x3e> A : Signature Sp\n    A ->> KS : POST /v1/kv\n    note right of A : With uuid and created_at from \u2462\n    KS --\x3e> A : Success\n    A --\x3e> U : Success"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"APIs mentioned:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/rest-api/kvservice-api#payload"},"POST /v1/kv/payload")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/rest-api/kvservice-api#patch"},"POST /v1/kv")))),(0,n.kt)("h3",{id:"query-data"},"Query data"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/rest-api/kvservice-api#query"},"GET /v1/kv"),"."),(0,n.kt)("h2",{id:"conventions"},"Conventions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Each app should use their "package name" as their own namespace, to ensure other apps are not infected by your modification.'),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"For example, my app is ",(0,n.kt)("inlineCode",{parentName:"p"},"io.mask.web3-profile-plugin"),","),(0,n.kt)("p",{parentName:"blockquote"},"Then I should make all my modification under ",(0,n.kt)("inlineCode",{parentName:"p"},'{ "io.mask.web3-profile-plugin": .... }')," key."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Theoretically, there is no size limitation for data. FairUse\u2122\ufe0f, please."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"If you want to store data bigger than string, consider ",(0,n.kt)("a",{parentName:"p",href:"https://www.arweave.org"},"Arweave"),".")))))}d.isMDXComponent=!0},8378:(e,t,a)=>{a(9496)}}]);