"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[9502],{9613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(1163),o=(r(9496),r(9613));r(8378);const a={title:"TypeScript"},i=void 0,c={unversionedId:"developer-guide/typescript",id:"developer-guide/typescript",title:"TypeScript",description:"Proof Service",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/typescript.md",sourceDirName:"developer-guide",slug:"/developer-guide/typescript",permalink:"/zh-Hans/developer-guide/typescript",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/developer-guide/typescript.md",tags:[],version:"current",frontMatter:{title:"TypeScript"},sidebar:"docs",previous:{title:"Rust",permalink:"/zh-Hans/developer-guide/rust"},next:{title:"ProofService API",permalink:"/zh-Hans/rest-api/proofservice-api"}},s={},p=[{value:"Proof Service",id:"proof-service",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"proof-service"},"Proof Service"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You could git clone and run this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nextdotid/Signature-Generating-Sample/tree/main/typescript"},"TypeScript open demo")," as a help")),(0,o.kt)("p",null,"The core example of codes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="package.json"',title:'"package.json"'},'{\n  "dependencies": {\n    "ethereumjs-util": "^7.1.4"\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import { ecsign, toRpcSig, keccakFromString, BN } from \'ethereumjs-util\';\n\nasync function personalSign(message: Buffer, privateKey: Buffer): Promise<Buffer> {\n    const messageHash = keccakFromString(`\\x19Ethereum Signed Message:\\n${message.length}${message}`, 256)\n    const signature = ecsign(messageHash, privateKey)\n    return Buffer.from(toRpcSig(signature.v, signature.r, signature.s).slice(2), \'hex\')\n}\n\nasync function main() {\n    // this message come from the return attribute "sign_payload" of everytime calling API: v1/proof/payload\n    const message = Buffer.from(\'{\\"action\\":\\"create\\",\\"created_at\\":\\"1656843378\\",\\"identity\\":\\"your_twitter_handle\\",\\"platform\\":\\"twitter\\",\\"prev\\":\\"KNyNFtvhlRVJh/oU6RryK2n+C2dja9aLQPjlv5VHMsQErZROojEmMAgmeEQVC094EOuHIYcv3lCYXf8d3zqDCQE=\\",\\"uuid\\":\\"353449e6-3a6f-4ac8-ae65-ba14bf466baf\\"}\', \'utf8\');\n    // ATTENTION! We intently replaced the last three digit of private key to be xxx.\n    // Private key is everything and NEVER expose it to others or publicly\n    const secretKey = Buffer.from(\'43c25fecc20e6b2a0d86c81a0202d125c0181deb9975d1170d80378c7e05bxxx\', \'hex\');\n    const signature = await personalSign(message, secretKey);\n\n    console.log(`Signature: 0x${signature.toString(\'hex\')}`);\n    // For demo ONLY\n    // Signature: 0xf72fe6b00be411bd70ffe1b9bf322f18529ea10e9559dd26ba10387544849fc86d712709dfb709efc3dcc0a01b6f6b9ca98bd48fe780d58921f4926c6f2c0b871b\n\n    console.log(`Signature(base64): ${signature.toString(\'base64\')}`);\n    // For demo ONLY\n    // Signature(base64): 9y/msAvkEb1w/+G5vzIvGFKeoQ6VWd0muhA4dUSEn8htcScJ37cJ78PcwKAbb2ucqYvUj+eA1Ykh9JJsbywLhxs=\n}\n\nmain();\n')))}d.isMDXComponent=!0},8378:(e,t,r)=>{r(9496)}}]);