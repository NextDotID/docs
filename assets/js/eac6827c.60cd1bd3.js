"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[1818],{1692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"core-concepts/proof-service/ps-intro","title":"Introduction","description":"ProofService offers a DID service that establishes a bridge between the Avatar and identity providers from both web2 platforms (like Twitter, Discord, etc.) and web3 identities (such as Ethereum and Bitcoin wallet addresses). This aims to provide users with a holistic, publicly verifiable identity graph. Simultaneously, users maintain the autonomy to manage their digital identities. In the end, the avatar and these identities combine to form an identity graph as below:","source":"@site/docs/core-concepts/proof-service/intro.md","sourceDirName":"core-concepts/proof-service","slug":"/core-concepts/proof-service/ps-intro","permalink":"/core-concepts/proof-service/ps-intro","draft":false,"unlisted":false,"editUrl":"https://github.com/nextdotid/docs/edit/main/docs/core-concepts/proof-service/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"ps-intro","title":"Introduction","sidebar_position":1},"sidebar":"docs","previous":{"title":"Importing Universal Profiles","permalink":"/getting-started/importing-universal-profiles"},"next":{"title":"Web3 Auth, Auth Service","permalink":"/core-concepts/proof-service/as-intro"}}');var o=n(5105),r=n(3881);const a={id:"ps-intro",title:"Introduction",sidebar_position:1},s=void 0,c={},d=[{value:"How to build the connection",id:"how-to-build-the-connection",level:2},{value:"Work Flow",id:"work-flow",level:3},{value:"Data Structure",id:"data-structure",level:3},{value:"Proof",id:"proof",level:4},{value:"Proofchain",id:"proofchain",level:4},{value:"Data Location",id:"data-location",level:3},{value:"Supported Platform",id:"supported-platform",level:2},{value:"How to contribute",id:"how-to-contribute",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ProofService"})," offers a DID service that establishes a bridge between the Avatar and identity providers from both web2 platforms (like Twitter, Discord, etc.) and web3 identities (such as Ethereum and Bitcoin wallet addresses). This aims to provide users with a holistic, publicly verifiable identity graph. Simultaneously, users maintain the autonomy to manage their digital identities. In the end, the avatar and these identities combine to form an identity graph as below:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(7137).A+"",width:"2422",height:"1715"})}),"\n",(0,o.jsx)(t.h2,{id:"how-to-build-the-connection",children:"How to build the connection"}),"\n",(0,o.jsx)(t.h3,{id:"work-flow",children:"Work Flow"}),"\n",(0,o.jsxs)(t.p,{children:["Use Twitter platform as an example to explain how to use ",(0,o.jsx)(t.code,{children:"ProofService"})," to build a bi-directional binding between a Twitter account and an avatar:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Construct a SignaturePayload with the necessary information, which is defined as:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Struct SignaturePayload {\n    action: Action,  // create/delete, refer to bind/unbind\n    created_at: number, // timestamp\n    platform: Platform;\n    identity: string;\n    prev :null | string, //the previous create/delete operation signature related to this avatar\n    uuid: string //unique_id for the operation\n}\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"Sign the payload with the private key of the avatar"}),"\n",(0,o.jsx)(t.li,{children:"Post the signed payload with that Twitter account"}),"\n",(0,o.jsxs)(t.li,{children:["Callback ProofService and give back the location(the url) of the tweet that contains the signature. ",(0,o.jsx)(t.code,{children:"ProofService"})," records the binding after passing the signature verification. In this scenario, it would get the signature from the link, check the validation, and also check the Twitter account that posts the tweet is matched with the identity in signature_payload."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Basically, the generic idea is to prove that the Avatar and another identity belong to the same owner. The first and second step proves the ownership of the avatar through the signature, and a public post on twitter to prove the ownership of that Twitter account."}),"\n",(0,o.jsx)(t.h3,{id:"data-structure",children:"Data Structure"}),"\n",(0,o.jsxs)(t.p,{children:["After the binding, ProofService will use a blockchain-like model called ProofChain to record of ",(0,o.jsx)(t.code,{children:"Avatar <-> Identity"})," connection(we called Proof) and save it in both the ProofService side and upload it to Arweave. The definitions of the proof and proofchain are as the followings."]}),"\n",(0,o.jsx)(t.h4,{id:"proof",children:"Proof"}),"\n",(0,o.jsxs)(t.p,{children:["The definition of the proof contains all the necessary information between the connection of ",(0,o.jsx)(t.code,{children:"Avatar <-> Identity"}),", contains the operation type that is binding or dismiss, which platform and identity, timestamp, signature by the avatar...\nThe structure is definied as:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'type Signature = string;\n\n// All available chain modification actions\nenum Action {\n    Create = "create",\n    Delete = "delete",\n}\n\n// All supported platforms, detail at: https://github.com/NextDotID/proof_server#which-platform-can-i-prove\nenum Platform {\n    Twitter = "twitter",\n    Keybase = "keybase",\n    ...\n}\n\n// Each proof in the proof chain\ninterface Proof {\n    // If this is genesis link, leave it null; else, it equals\n    // previous link\'s signature. Worked as a pointer.\n    prev: Signature | null;\n\n    avatar: String;\n    action: Action;\n    platform: Platform;\n    identity: string;\n\n    // if action === Action.create, it shouldn\'t be empty(except ethereum); else, left null\n    proof_location: string | null;\n\n    // UNIX timestamp (unit: second)\n    created_at: number;\n\n    // An UUID of this link, works as a global identifier.\n    uuid: string;\n\n    // See the definition above\n    signature_payload: SignaturePayload;\n\n    // Signature of this link made by avatar.\n    signature: Signature;\n}\n'})}),"\n",(0,o.jsx)(t.h4,{id:"proofchain",children:"Proofchain"}),"\n",(0,o.jsxs)(t.p,{children:["Since the definition of Proof struct contains a field ",(0,o.jsx)(t.code,{children:"prev"}),", all the Proof records under the same specific avatar will combine as a ProofChain.The definition is like the following:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'const VERSION = "1";\n\ninterface ProofChain {\n    version: VERSION;\n    avatar: string\n    //check the definition of `Proof` above.\n    proofs: Proof[];\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["There is an API provided by ",(0,o.jsx)(t.code,{children:"ProofSerive"})," to get the ProofChain of an avatar:\n(link-to-proof-chain-api)"]}),"\n",(0,o.jsx)(t.h3,{id:"data-location",children:"Data Location"}),"\n",(0,o.jsxs)(t.p,{children:["From day one, the connection data in Proof Service to public so that everyone can access it via API or Arweave.\n",(0,o.jsx)(t.a,{href:"/rest-api/kvservice-api",children:"API docs"}),"\n",(0,o.jsx)(t.a,{href:"https://viewblock.io/arweave/tx/wvzDhXgcglrUWob9CUjTfJ6tj322eCWDKI2bVtU_cx4",children:"An example of data in Arweave"})]}),"\n",(0,o.jsxs)(t.p,{children:["Noted that the APIs in the docs contain the API to help bind ",(0,o.jsx)(t.code,{children:"Avatar <-> Identity"}),", like ",(0,o.jsx)(t.code,{children:"POST /v1/proof/payload"})," or ",(0,o.jsx)(t.code,{children:"POST /v1/proof"}),", but also serval APIs to query the state of the ",(0,o.jsx)(t.a,{href:"https://github.com/NextDotID/proof_server/blob/develop/docs/api.apib#L160",children:"proofs"})," and ",(0,o.jsx)(t.a,{href:"https://github.com/NextDotID/proof_server/blob/develop/docs/api.apib#L285",children:"the proofchain under an avatar"}),".\nThe Arweave example contains the single Proof record and based on the mechanism of Arweave, can keep getting the previous record until Genesis one."]}),"\n",(0,o.jsx)(t.h2,{id:"supported-platform",children:"Supported Platform"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/NextDotID/proof_server#supported",children:"Supported Platform"})}),"\n",(0,o.jsx)(t.h2,{id:"how-to-contribute",children:"How to contribute"}),"\n",(0,o.jsx)(t.p,{children:"As an open-source project, we welcome all interested developers to contribute and build with us, especially integrating more platform identity. What you need to do is:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Checkout our repository on ",(0,o.jsx)(t.a,{href:"https://github.com/NextDotID/proof_server",children:"GitHub"})]}),"\n",(0,o.jsx)(t.li,{children:"Open an issue and give the idea"}),"\n",(0,o.jsx)(t.li,{children:"Coding and submitting the merge request"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},3881:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(8101);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}},7137:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/avatar-diagram-ed9b76208873c99d320131960efdbc02.png"}}]);