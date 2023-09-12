---
id: kv-service
title: A Development Tool, KV Service
sidebar_position: 2
---
# Introduction
When building the NextID project, we found that we still need a place to keep some customized data in some cases. However, placing everything on the blockchain wasn't a reasonable choice. This led us to create the KV service as a user-friendly tool for storing some customized data. Through cryptographic verification, the KVService ensures that only the avatar's owner can manage (create and modify) its content, while allowing others to read it.

# How it works 
KVService can store any valid JSON object data. There are serval APIs for reading and writing the data. For writing,

## Work Flow
write work flow (current one)
                             
The generation signature and verification steps to guarantee the modification request is from the owner of Avatar.

### Design
- Each user has `1 + N` namespaces：
  - `Avatar` itself has a namespace (`platform == "nextid" && identity == "0xAVATAR_PUBLIC_KEY"`)
    - There's no limitation that `Avatar` should be used in [ProofService](../proof-service/intro.md) once.
  - Each binding record (in [ProofService](../proof-service/intro.md)) of each `Avatar` has a namespace.
    - Value of `platform` and `identity` are the same as definition in ProofService.
- [Query data](/rest-api/kvservice-api#query): public, only need to specify `avatar`.
- [Write data](/rest-api/kvservice-api#payload): A patch followed [RFC 7396](https://www.rfc-editor.org/rfc/rfc7396) standard.

  <details>
  <summary>A glimpse of RFC7396</summary>

  ```js
  // Assume current data is:
  {
    "a": {
      "b": [2, 3, 4, "test"]
    },
    "c": "Hello"
  }

  // If this patch is submitted:
  { "a": { "b": null, "new_key": true }, "c": "KVService" }

  // Then patched data will become:
  {
    "a": {
      "new_key": true
    },
    "c": "KVService"
  }
  // Notice: nested modification of Array value is not supported.
  //         Replace the whole Array with new value instead.
  ```
  </details>

## Notice
- Each app should use its "package name" as its own namespace, to ensure other apps are not infected by your modification.
  > For example, I as a developer, identify my app as `io.mask.web3-profile-plugin`,
  >
  > Then I should make the modifications under `{ "io.mask.web3-profile-plugin": .... }` key.

- Theoretically, there is no size limitation for data. FairUse™️, please.
  > If you want to store data bigger than a string can handle, consider [Arweave](https://www.arweave.org).

# Use Case
1. For Web3 apps 
   Need to save user configurations. For example profile (name, avatar link, bio, etc.), NFT showcase (hide/show, order, etc.), or wallet address priority.
2. For any users in Web3
   Need to save their personal data.
 
