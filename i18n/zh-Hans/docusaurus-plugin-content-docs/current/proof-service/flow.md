---
id: ps-flow
title: Flow
tags:
- proof_service
sidebar_position: 2.5
---

# Flow of typical scenario

> Use this with [Glossary](ps-glossary)

## Create a [Link](ps-glossary#glossary-link) {#create}

```mermaid
sequenceDiagram
    autonumber
    actor U as User
    participant A as Application
    participant PS as ProofService
    participant P as Platform

    U ->>+ A : Start a binding with platform, identity
    A ->>+ PS : POST /v1/proof/payload
    PS -->>- A : sign_payload, post_content
    A ->>- U : avatar.eth_avatarlSign(sign_payload)
    U -->> A : Signature Sp
    A -->> A : Inject Sp into post_content
    A -->>+ U : Show to user how to do proof post with post_content
    U ->>+ P : Publish proof post
    P -->>- U : Link / ID of Proof post
    U ->>- A : Link / ID of Proof post
    A ->>+ PS : POST /v1/proof
    note right of A : With uuid and created_at from ③
    PS ->>+ P : Request for proof post
    P -->>- PS : Returns content of Proof post
    PS -->> PS : Validate Proof post content
    PS -->>- A : Link created successfully
    A -->> U : Success
```
<details>
<summary>See also</summary>

- [POST /v1/proof/payload](api#proof-payload)
- [POST /v1/proof](api#proof-add)

</details>

### Create an Ethereum Link {#ethereum}

> This procedure is for `platform == "ethereum"`.

```mermaid
sequenceDiagram
    autonumber
    actor U as User
    participant W as Wallet
    participant A as Application
    participant PS as ProofService

    U ->>+ A : platform: ethereum, identity: 0xWALLET_ADDRESS
    A ->> PS : POST /v1/proof/payload
    PS -->> A : sign_payload
    A ->> U : avatar.eth_avatarlSign(sign_payload)
    U -->> A : Signature Sp
    A ->> W : wallet.eth_personalSign(sign_payload)
    W -->> A : Signature Sw
    A ->> PS : POST /v1/proof
    note right of A : extra: Sp and Sw
    note right of A : With uuid and created_at from ③
    PS -->> PS : Verify Sp and Sw
    PS -->> A : Link created successfully
    A -->>- U : Success
```

<details><summary>See also</summary>

- [POST /v1/proof/payload](api#proof-payload)
- [POST /v1/proof](api#proof-add)
- `identity` wallet address matches `0x[0-9a-f]{40}`。
- No need to publish this sigature somewhere, because:
  - The ability of generating this sig is equals to the ownership of secret key.
  - No one can falsify it, except the secret key owner.

</details>

## Delete a link

Link deletion is also a link.

```mermaid
sequenceDiagram
    autonumber
    actor U as User
    participant A as Application
    participant PS as ProofService

    U ->> A : Platform and Identity to perform deletion
    A ->>+ PS : POST /v1/proof/payload
    note right of A: action: delete
    PS -->>- A : sign_payload
    A ->> U : avatar.eth_avatarlSign(sign_payload)
    U -->> A : Signature Sp
    A ->>+ PS : POST /v1/proof
    note right of A: action: delete
    note right of A: extra: Sp
    PS -->> PS : Verify Sp
    PS -->>- A : Success
    A -->> U : Success

```

<details><summary>See also</summary>

- Application can guide user to delete [Proof post](ps-glossary#glossary-proof-post) on specific platform (if any) later.

</details>

## Query

Check [GET /v1/proof](api#proof-query).
