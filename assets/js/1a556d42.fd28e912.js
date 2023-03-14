"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[7827],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var i=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),s=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||a;return r?i.createElement(f,o(o({ref:t},c),{},{components:r})):i.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=r(1163),n=(r(9496),r(9613));r(8378);const a={id:"as-workflow",title:"Workflow",sidebar_position:2},o=void 0,l={unversionedId:"auth-service/as-workflow",id:"auth-service/as-workflow",title:"Workflow",description:"Sequence",source:"@site/docs/auth-service/workflow.md",sourceDirName:"auth-service",slug:"/auth-service/as-workflow",permalink:"/auth-service/as-workflow",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/auth-service/workflow.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"as-workflow",title:"Workflow",sidebar_position:2},sidebar:"docs",previous:{title:"Introduction",permalink:"/auth-service/as-intro"},next:{title:"Go",permalink:"/developer-guide/go"}},u={},s=[{value:"Sequence",id:"sequence",level:2},{value:"Auth with 3rd party",id:"auth-with-3rd-party",level:3},{value:"How AuthService authenticate you?",id:"how-authservice-authenticate-you",level:3},{value:"Authenticate with supported platforms",id:"authenticate-with-supported-platforms",level:4},{value:"Subkey generation",id:"subkey-generation",level:4},{value:"dApp callback",id:"dapp-callback",level:3},{value:"Parameters",id:"parameters",level:4}],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"sequence"},"Sequence"),(0,n.kt)("h3",{id:"auth-with-3rd-party"},"Auth with 3rd party"),(0,n.kt)("mermaid",{value:"sequenceDiagram\n    User->>dApp: 1. Click login with Next.ID\n    dApp->>Self-hosted AuthService: 2. Generate an AuthService URL to authenticate\n    Self-hosted AuthService->>+User: 3. Redirect to Authenticate prompt\n    User->>-Self-hosted AuthService: 4. Authenticate by supported platforms (incl. Twitter OAuth, ETH wallet sign)\n    Self-hosted AuthService->>User: 5. Redirect to Authorize prompt w/ scopes required\n    User->>Self-hosted AuthService: 6. Authorize and Consent\n    Self-hosted AuthService->>+User: 7. Redirect User to dApp page with signature signed by Avatar\n    User->>-dApp: 8. Access dApp callback URL with signature"}),(0,n.kt)("h3",{id:"how-authservice-authenticate-you"},"How AuthService authenticate you?"),(0,n.kt)("p",null,"When performing an authorization process, AuthService will send a request to ",(0,n.kt)("a",{parentName:"p",href:"../proof-service/ps-intro"},"ProofService")," to find if the authenticated identity on a 3rd party platform (e.g. Twitter ID) is bound to a Next.ID Avatar pre-configured on this AuthService."),(0,n.kt)("p",null,"If found, AuthService will generate a signature signed by a subkey derived from the Avatar and then redirect user to the dApp callback URL with the signature."),(0,n.kt)("h4",{id:"authenticate-with-supported-platforms"},"Authenticate with ",(0,n.kt)("a",{parentName:"h4",href:"as-intro#supported-platforms"},"supported platforms")),(0,n.kt)("p",null,"Supported platforms are pre-configured on self-hosted AuthService. For example, if user wants to authenticate with Twitter later, it needs to configure Twitter OAuth client ID and client secret."),(0,n.kt)("h4",{id:"subkey-generation"},"Subkey generation"),(0,n.kt)("p",null,"AuthService stores subkey in configuration instead of Avatar to protect the private key. The subkey needs to be signed by Avatar with format in eth_sign method: ",(0,n.kt)("inlineCode",{parentName:"p"},"Subkey certification signature: ${subkey_public_key_hex}"),"."),(0,n.kt)("p",null,"Check ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nextdotid/auth_server/blob/main/build/generate_subkey.py"},"helper script")," for more information."),(0,n.kt)("h3",{id:"dapp-callback"},"dApp callback"),(0,n.kt)("p",null,"After user redirected to the dApp callback URL, dApp needs to verify the signature. If the signature is valid, dApp can trust the authenticated identity."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"avatar")," (string, required): Avatar public key hex string."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"expired_at")," (string, required): UNIX timestamp."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"state")," (string, required): State string passed from dApp."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"subkey")," (string, required): Subkey public key hex string."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"subkey_cert_sig")," (string, required): Subkey certification signature signed by Avatar, encoded in Base58."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"sig")," (string, required): Signature of ",(0,n.kt)("inlineCode",{parentName:"li"},"avatar=${avatar}\\nredirect_uri={redirect_uri}\\nexpired_at=${expired_at}\\nstate=${state}")," singed by Subkey, encoded in Base58.")))}d.isMDXComponent=!0},8378:(e,t,r)=>{r(9496)}}]);