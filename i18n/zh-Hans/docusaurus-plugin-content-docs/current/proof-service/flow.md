---
id: ps-flow
title: 流程
tags:
- proof_service
sidebar_position: 2.5
---

# 流程

> 请搭配 [名词表](ps-glossary)

## 创建绑定 {#create}

```mermaid
sequenceDiagram
    autonumber
    actor U as User
    participant A as Application
    participant PS as ProofService
    participant P as Platform

    U ->>+ A : 指定 Platform 和 Identity 发起创建绑定
    A ->>+ PS : POST /v1/proof/payload
    PS -->>- A : sign_payload 和 post_content
    A ->>- U : persona.eth_personalSign(sign_payload)
    U -->> A : 签名结果 Sp
    A -->> A : 将 Sp 注入 post_content
    A -->>+ U : 向用户展示 post_content 和 Proof post 发布流程
    U ->>+ P : 发布 Proof post
    P -->>- U : Proof post 的链接 / ID 等
    U ->>- A : Proof post 的链接 / ID 等
    A ->>+ PS : POST /v1/proof
    note right of A : 带上 ③ 的 uuid 和 created_at
    PS ->>+ P : 请求 proof post 内容
    P -->>- PS : 返回 Proof post 内容
    PS -->> PS : 验证 Proof post 内容是否匹配本请求
    PS -->>- A : 成功创建绑定
    A -->> U : 成功
```
<details>
<summary>补充</summary>

- [POST /v1/proof/payload](api#proof-payload)
- [POST /v1/proof](api#proof-add)

</details>

### 创建（以太坊） {#ethereum}

> 当 `platform == "ethereum"` 时使用此流程。

```mermaid
sequenceDiagram
    autonumber
    actor U as User
    participant W as Wallet
    participant A as Application
    participant PS as ProofService

    U ->>+ A : platform: ethereum, identity: 钱包地址
    A ->> PS : POST /v1/proof/payload
    PS -->> A : sign_payload
    A ->> U : persona.eth_personalSign(sign_payload)
    U -->> A : 签名结果 Sp
    A ->> W : wallet.eth_personalSign(sign_payload)
    W -->> A : 签名结果 Sw
    A ->> PS : POST /v1/proof
    note right of A : extra: Sp 和 Sw
    note right of A : 带上 ③ 的 uuid 和 created_at
    PS -->> PS : 检查两个签名
    PS -->> A : 成功
    A -->>- U : 成功
```

<details><summary>补充</summary>

- [POST /v1/proof/payload](api#proof-payload)
- [POST /v1/proof](api#proof-add)
- `identity` 固定是钱包地址 `0x[0-9a-f]{40}`。
- 不需要将签名发表到什么公开平台上，因为
  - 服务器无法伪造它
  - 用户能生成签名，也就意味着用户拥有这个私钥

</details>

## 删除身份绑定

```mermaid
sequenceDiagram
    autonumber
    actor U as User
    participant A as Application
    participant PS as ProofService

    U ->> A : 指定 Platform 和 Identity 发起删除绑定
    A ->>+ PS : POST /v1/proof/payload
    note right of A: action: delete
    PS -->>- A : sign_payload
    A ->> U : persona.eth_personalSign(sign_payload)
    U -->> A : 签名结果 Sp
    A ->>+ PS : POST /v1/proof
    note right of A: action: delete
    note right of A: extra: Sp
    PS -->> PS : 检查签名
    PS -->>- A : Success
    A -->> U : Success

```

<details><summary>补充</summary>

- Application 可事后引导用户在对应 platform 里删除 proof post。

</details>

## 查询

请直接查看 [GET /v1/proof](api#proof-query) 文档。
