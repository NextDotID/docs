"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[8658],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7605),i=(n(9496),n(9613));n(8378);const r={id:"ps-intro",title:"Introduction",sidebar_position:1},a=void 0,l={unversionedId:"core-concepts/proof-service/ps-intro",id:"core-concepts/proof-service/ps-intro",title:"Introduction",description:"ProofService offers a DID service that establishes a bridge between the Avatar and identity providers from both web2 platforms (like Twitter, Discord, etc.) and web3 identities (such as Ethereum and Bitcoin wallet addresses). This aims to provide users with a holistic, publicly verifiable identity graph. Simultaneously, users maintain the autonomy to manage their digital identities. In the end, the avatar and these identities combine to form an identity graph as below:",source:"@site/docs/core-concepts/proof-service/intro.md",sourceDirName:"core-concepts/proof-service",slug:"/core-concepts/proof-service/ps-intro",permalink:"/core-concepts/proof-service/ps-intro",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/core-concepts/proof-service/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ps-intro",title:"Introduction",sidebar_position:1},sidebar:"docs",previous:{title:"Importing Universal Profiles",permalink:"/getting-started/importing-universal-profiles"},next:{title:"Web3 Auth, Auth Service",permalink:"/core-concepts/proof-service/as-intro"}},s={},c=[{value:"How to build the connection",id:"how-to-build-the-connection",level:2},{value:"Work Flow",id:"work-flow",level:3},{value:"Data Structure",id:"data-structure",level:3},{value:"Proof",id:"proof",level:4},{value:"Proofchain",id:"proofchain",level:4},{value:"Data Location",id:"data-location",level:3},{value:"Supported Platform",id:"supported-platform",level:2},{value:"How to contribute",id:"how-to-contribute",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ProofService")," offers a DID service that establishes a bridge between the Avatar and identity providers from both web2 platforms (like Twitter, Discord, etc.) and web3 identities (such as Ethereum and Bitcoin wallet addresses). This aims to provide users with a holistic, publicly verifiable identity graph. Simultaneously, users maintain the autonomy to manage their digital identities. In the end, the avatar and these identities combine to form an identity graph as below:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3150).Z,width:"2422",height:"1715"})),(0,i.kt)("h2",{id:"how-to-build-the-connection"},"How to build the connection"),(0,i.kt)("h3",{id:"work-flow"},"Work Flow"),(0,i.kt)("p",null,"Use Twitter platform as an example to explain how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ProofService")," to build a bi-directional binding between a Twitter account and an avatar:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Construct a SignaturePayload with the necessary information, which is defined as:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Struct SignaturePayload {\n    action: Action,  // create/delete, refer to bind/unbind\n    created_at: number, // timestamp \n    platform: Platform;\n    identity: string;\n    prev :null | string, //the previous create/delete operation signature related to this avatar\n    uuid: string //unique_id for the operation\n}\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Sign the payload with the private key of the avatar"),(0,i.kt)("li",{parentName:"ol"},"Post the signed payload with that Twitter account"),(0,i.kt)("li",{parentName:"ol"},"Callback ProofService and give back the location(the url) of the tweet that contains the signature. ",(0,i.kt)("inlineCode",{parentName:"li"},"ProofService")," records the binding after passing the signature verification. In this scenario, it would get the signature from the link, check the validation, and also check the Twitter account that posts the tweet is matched with the identity in signature_payload.")),(0,i.kt)("p",null,"Basically, the generic idea is to prove that the Avatar and another identity belong to the same owner. The first and second step proves the ownership of the avatar through the signature, and a public post on twitter to prove the ownership of that Twitter account."),(0,i.kt)("h3",{id:"data-structure"},"Data Structure"),(0,i.kt)("p",null,'After the binding, ProofService will use a blockchain-like model called ProofChain to record of "Avatar <-> Identity" connection(we called Proof) and save it in both the ProofService side and upload it to Arweave. The definitions of the proof and proofchain are as the followings.'),(0,i.kt)("h4",{id:"proof"},"Proof"),(0,i.kt)("p",null,'The definition of the proof contains all the necessary information between the connection of "Avatar <-> Identity", contains the operation type that is binding or dismiss, which platform and identity, timestamp, signature by the avatar...\nThe structure is definied as:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'type Signature = string;\n\n// All available chain modification actions\nenum Action {\n    Create = "create",\n    Delete = "delete",\n}\n\n// All supported platforms, detail at: https://github.com/NextDotID/proof_server#which-platform-can-i-prove\nenum Platform {\n    Twitter = "twitter",\n    Keybase = "keybase",\n    ...\n}\n\n// Each proof in the proof chain\ninterface Proof {\n    // If this is genesis link, leave it null; else, it equals\n    // previous link\'s signature. Worked as a pointer.\n    prev: Signature | null;\n    \n    avatar: String;\n    action: Action;\n    platform: Platform;\n    identity: string;\n    \n    // if action === Action.create, it shouldn\'t be empty(except ethereum); else, left null\n    proof_location: string | null;\n    \n    // UNIX timestamp (unit: second)\n    created_at: number;\n    \n    // An UUID of this link, works as a global identifier.\n    uuid: string;\n    \n    // See the definition above\n    signature_payload: SignaturePayload;\n    \n    // Signature of this link made by avatar.\n    signature: Signature;\n}\n')),(0,i.kt)("h4",{id:"proofchain"},"Proofchain"),(0,i.kt)("p",null,"Since the definition of Proof struct contains a field ",(0,i.kt)("inlineCode",{parentName:"p"},"prev"),", all the Proof records under the same specific avatar will combine as a ProofChain.The definition is like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'const VERSION = "1";\n\ninterface ProofChain {\n    version: VERSION;\n    avatar: string\n    //check the definition of `Proof` above.\n    proofs: Proof[];\n}\n')),(0,i.kt)("p",null,"There is an API provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"ProofSerive")," to get the ProofChain of an avatar:\n(link-to-proof-chain-api)"),(0,i.kt)("h3",{id:"data-location"},"Data Location"),(0,i.kt)("p",null,"From day one, the connection data in Proof Service to public so that everyone can access it via API or Arweave.\n",(0,i.kt)("a",{parentName:"p",href:"/rest-api/kvservice-api"},"API docs"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://viewblock.io/arweave/tx/wvzDhXgcglrUWob9CUjTfJ6tj322eCWDKI2bVtU_cx4"},"An example of data in Arweave")),(0,i.kt)("p",null,'Noted that the APIs in the docs contain the API to help bind "Avatar <-> Identity", like ',(0,i.kt)("inlineCode",{parentName:"p"},"POST /v1/proof/payload")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /v1/proof"),", but also serval APIs to query the state of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NextDotID/proof_server/blob/develop/docs/api.apib#L160"},"proofs")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NextDotID/proof_server/blob/develop/docs/api.apib#L285"},"the proofchain under an avatar"),".\nThe Arweave example contains the single Proof record and based on the mechanism of Arweave, can keep getting the previous record until Genesis one."),(0,i.kt)("h2",{id:"supported-platform"},"Supported Platform"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/NextDotID/proof_server#supported"},"Supported Platform")),(0,i.kt)("h2",{id:"how-to-contribute"},"How to contribute"),(0,i.kt)("p",null,"As an open-source project, we welcome all interested developers to contribute and build with us, especially integrating more platform identity. What you need to do is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Checkout our repository on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/NextDotID/proof_server"},"GitHub")),(0,i.kt)("li",{parentName:"ul"},"Open an issue and give the idea"),(0,i.kt)("li",{parentName:"ul"},"Coding and submitting the merge request")))}u.isMDXComponent=!0},3150:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/avatar-diagram-ed9b76208873c99d320131960efdbc02.png"},8378:(e,t,n)=>{n(9496)}}]);