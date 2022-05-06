---
id: ps-intro
title: 简介
tags:
- proof_service
sidebar_position: 1
---

ProofService 提供将各类平台上的身份与非对称密钥 (Persona) 创建关联关系的服务。

## 特色

### 双向关联

一方证明材料的缺失会让此关联关系[降级](ps-glossary#glossary-downgrade)。

### 公开可验证

[Proof post](ps-glossary#glossary-proof-post) 必须尽可能以公开形式发布
（也就是可匿名访问）。任何用户使用简单工具（甚至手动）即可检查绑定有效
性。

## 设计简述

ProofService 在设计上用来证明命题“某 [Identity](ps-glossary#glossary-identity) 和 [Persona](ps-glossary#glossary-persona) 在某个时刻被同一个人持有”。

将这个命题拆成两部分：

1. ”我”持有这个 Persona
2. “我”持有这个 Identity

`1` 等价于“使用 Persona 的私钥生成签名”的能力。

`2` 等价于“使用该 Identity 发布任意内容”的能力。
