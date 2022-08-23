(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[3684],{86789:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(62081),o=(a(59496),a(49613)),r=a(55356);const i={id:"ps-glossary",title:"Glossary",sidebar_position:2},l="Glossary",s={unversionedId:"proof-service/ps-glossary",id:"proof-service/ps-glossary",title:"Glossary",description:"Avatar",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/proof-service/glossary.md",sourceDirName:"proof-service",slug:"/proof-service/ps-glossary",permalink:"/zh-Hans/proof-service/ps-glossary",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/proof-service/glossary.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"ps-glossary",title:"Glossary",sidebar_position:2}},p={},d=[{value:"Avatar",id:"glossary-avatar",level:2},{value:"Identity",id:"glossary-identity",level:2},{value:"Platform",id:"glossary-platform",level:2},{value:"Proof post",id:"glossary-proof-post",level:2},{value:"Binding (Link)",id:"glossary-link",level:2},{value:"Proof Chain",id:"glossary-proof-chain",level:2},{value:"Downgrade",id:"glossary-downgrade",level:2}],k={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"glossary"},"Glossary"),(0,o.kt)("h2",{id:"glossary-avatar"},"Avatar"),(0,o.kt)("p",null,"Persona is the core of user ID network in ProofService."),(0,o.kt)("p",null,"All other ",(0,o.kt)("a",{parentName:"p",href:"#glossary-identity"},"Identities")," (Web2.0 account, blockchain wallet etc.) are ",(0,o.kt)("strong",{parentName:"p"},"only"),"\nbinded with Persona."),(0,o.kt)(r.Mermaid,{config:{},chart:"flowchart LR\n\nTwitter <--\x3e|Proof Tweet|Persona\nPersona <--\x3e|Sign|EthereumWallet\nGithub <--\x3e|Public Gist|Persona\nPersona <--\x3e|Public Message|Discord",mdxType:"Mermaid"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For now, Persona is elliptic curve keypair using ",(0,o.kt)("inlineCode",{parentName:"p"},"secp256k1")," curve.")),(0,o.kt)("h2",{id:"glossary-identity"},"Identity"),(0,o.kt)("p",null,"Accounts / Identities on other ",(0,o.kt)("a",{parentName:"p",href:"#glossary-platform"},"Platform")," which is\nbinded with ",(0,o.kt)("a",{parentName:"p",href:"#glossary-avatar"},"Avatar"),"."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"@my_twitter")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"twitter")," platform, ",(0,o.kt)("inlineCode",{parentName:"p"},"my_github")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"github")," platform."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See ",(0,o.kt)("a",{parentName:"p",href:"ps-platforms-supported"},"Supported platforms")," for more info.")),(0,o.kt)("h2",{id:"glossary-platform"},"Platform"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#glossary-identity"},"Identity")," provider."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"e.g. Twitter, GitHub, Facebook, Ethereum, etc.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See ",(0,o.kt)("a",{parentName:"p",href:"ps-platforms-supported"},"Supported platforms")," for more info.")),(0,o.kt)("h2",{id:"glossary-proof-post"},"Proof post"),(0,o.kt)("p",null,'To prove "I have this ',(0,o.kt)("a",{parentName:"p",href:"#glossary-identity"},"identity"),'", user needs to\ntakes an action: use this ',(0,o.kt)("a",{parentName:"p",href:"#glossary-identity"},"identity")," to post an\naccessible, specified content, which is called ",(0,o.kt)("em",{parentName:"p"},"Proof post"),"."),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},'platform: "twitter"'),", proof post should be a public visible tweet."),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},'platform: "github"'),", a public visible ",(0,o.kt)("inlineCode",{parentName:"p"},"Gist"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Proof post shapes different on different ",(0,o.kt)("a",{parentName:"p",href:"#glossary-platform"},"platform"),"."),(0,o.kt)("p",{parentName:"blockquote"},"See ",(0,o.kt)("a",{parentName:"p",href:"ps-platforms-supported"},"Supported platforms")," for more info.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"If ",(0,o.kt)("a",{parentName:"mdxAdmonitionTitle",href:"#glossary-identity"},"Identity")," is cryptography ID"),(0,o.kt)("p",{parentName:"admonition"},"Cryptography ID (e.g. blockchain wallet) don't need to put a proof\npost somewhere, since sigature generating itself can already prove\nthat user owns its private key.")),(0,o.kt)("admonition",{title:"If Proof post is deleted by user",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"See ",(0,o.kt)("a",{parentName:"p",href:"#glossary-downgrade"},"Downgrade"),"\u3002")),(0,o.kt)("h2",{id:"glossary-link"},"Binding (Link)"),(0,o.kt)("p",null,"After ProofService validates ",(0,o.kt)("a",{parentName:"p",href:"#glossary-proof-post"},"Proof post"),' on\nserver side, a binding record of "',(0,o.kt)("a",{parentName:"p",href:"#glossary-avatar"},"Avatar")," <->\n",(0,o.kt)("a",{parentName:"p",href:"#glossary-identity"},"Identity"),'" will be saved into ',(0,o.kt)("a",{parentName:"p",href:"#glossary-proof-chain"},"Proof\nChain"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Struct of Link"),(0,o.kt)("admonition",{title:"Note",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Code below is only a reference of Link, not specific\nimplementation in ProofService or API structure.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="link.d.ts"',title:'"link.d.ts"'},'// assert(signature.match(/0x[a-f0-9]{144}/))\n// Sample:\n// 0x3046022100881328457aa312135c37e1ddf8a129717274ce3f389c176936f5cb44edf04fc4022100be183139154d108ce2e5d6ba16678b0dbeb3b7d70caac2b00b2dad8f81e87790\ntype Signature = string;\n\n// All available chain modification actions\nenum Action {\n    Create = "create",\n    Delete = "delete",\n}\n\n// All supported platforms,\nenum Platform {\n    Twitter = "twitter",\n    Keybase = "keybase",\n}\n\n// Each link in the proof chain\ninterface Link {\n    // If this is genesis link, leave it null; else, it equals\n    // previous link\'s signature. Worked as a pointer.\n    prev: Signature | null;\n    action: Action;\n    platform: Platform;\n    identity: string;\n    // if method === Method.Add, then it must be a string; else, left null\n    proof_location: string | null;\n    // UNIX timestamp (unit: second)\n    created_at: number;\n    // An UUID of this link, works as a global identifier.\n    uuid: string;\n    // Signature of this link made by avatar.\n    signature: Signature;\n}\n'))),(0,o.kt)("h2",{id:"glossary-proof-chain"},"Proof Chain"),(0,o.kt)("p",null,"Each ",(0,o.kt)("a",{parentName:"p",href:"#glossary-link"},"Link")," under the same ",(0,o.kt)("a",{parentName:"p",href:"#glossary-avatar"},"Avatar")," is chained into a link:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each ",(0,o.kt)("a",{parentName:"li",href:"#glossary-link"},"Link")," has a signature of\n",(0,o.kt)("a",{parentName:"li",href:"#glossary-avatar"},"Avatar"),"."),(0,o.kt)("li",{parentName:"ul"},"Every ",(0,o.kt)("a",{parentName:"li",href:"#glossary-link"},"Link")," (except the first one under this\n",(0,o.kt)("a",{parentName:"li",href:"#glossary-avatar"},"Avatar"),") has its previous\n",(0,o.kt)("a",{parentName:"li",href:"#glossary-link"},"Link"),"'s signature.")),(0,o.kt)("p",null,"So to ensure that ProofService server cannot falsify any of the record\nin the chain without Persona-provided signature."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Proof Chain mechanism is not picky of storage media. But we will put\nit in Arweave / IPFS in the future, anyway.")),(0,o.kt)("admonition",{title:"TBD",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"There will be an API to export the whole Proof Chain of a Persona.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Struct of Proof Chain"),(0,o.kt)("admonition",{title:"Note",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Code below is only a reference of Proof Chain, not specific\nimplementation in ProofService or API structure.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="chain.d.ts"',title:'"chain.d.ts"'},'const VERSION = "1";\n\n// assert(public_key.match(/^0x[a-f0-9]{130}$/))\n// Sample:\n// 0x0428b73a2b67a88a47edb15bed5c73a199e24287bb12997c54239e9e6815e24a3032a502d58afe3f36a54f2f7606022907f358d0dd58939cffa0a845c5043ce038\ntype PublicKey = string;\n\ninterface Chain {\n    version: VERSION;\n    avatar: {\n        public_key: PublicKey,\n        curve: "secp256k1",\n    };\n    // See definition of `Link` above.\n    links: Link[];\n}\n'))),(0,o.kt)("h2",{id:"glossary-downgrade"},"Downgrade"),(0,o.kt)("admonition",{title:"WIP",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udc77\u200d\u2640\ufe0f\ud83d\udc77 Work in progress, will be ready SOON\u2122\ufe0f.")),(0,o.kt)("p",null,"ProofService server will periodically check the validity of ",(0,o.kt)("a",{parentName:"p",href:"#glossary-proof-post"},"Proof post"),"."),(0,o.kt)("p",null,"If ",(0,o.kt)("a",{parentName:"p",href:"#glossary-proof-post"},"Proof post")," becomes invalid, this binding\nrecord will be marked as ",(0,o.kt)("inlineCode",{parentName:"p"},'"is_valid": false')," (with reason) in\n",(0,o.kt)("a",{parentName:"p",href:"api#proof-query"},"Query API"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"e.g. User deletes ",(0,o.kt)("a",{parentName:"p",href:"#glossary-proof-post"},"Proof tweet")," after creating\na ",(0,o.kt)("a",{parentName:"p",href:"#glossary-link"},"Link"),", but doesn't ",(0,o.kt)("a",{parentName:"p",href:"api#proof-add"},"inform"),"\nProofService to delete this link (aka unbind).")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ProofService still won't (and can't) do anything to ",(0,o.kt)("a",{parentName:"p",href:"#glossary-proof-chain"},"Proof\nChain")," even downgraded."),(0,o.kt)("p",{parentName:"blockquote"},"All ProofService can do is to return ",(0,o.kt)("inlineCode",{parentName:"p"},'"is_valid": false')," in ",(0,o.kt)("a",{parentName:"p",href:"api#proof-query"},"Query\nAPI"),".")),(0,o.kt)("p",null,"How to handle this downgraded relationship is entirely up to applications which use ProofService."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"e.g. show a \u26a0\ufe0f to user, low priority when presenting, or just omit it.")))}c.isMDXComponent=!0},37319:(e,t,a)=>{var n={"./locale":62642,"./locale.js":62642};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=37319}}]);