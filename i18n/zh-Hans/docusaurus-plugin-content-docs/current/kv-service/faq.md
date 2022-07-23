---
id: kv-faq
title: FAQ
sidebar_position: 5
---

## I got `public key mismatch` error in `POST /v1/kv` {#bad-signature}

See [ProofService FAQ](../proof-service/faq.mdx#bad-signature).

> Double check `dataToSign.length` part.

## Does KVService rely on an existed Persona / binding on ProofService?

Not really! You can use this as a storage for every secp256k1 keypair
(`platform == nextid && identity == "0xPUBLIC_KEY"`) without even
using it on ProofService.

But, if you want to save data related to a specific account, we still
encourage you to put it under precise `platform` and `identity`.

A typical case is, your DApp allows user to set different NFT avatar
on Twitter and Github. In this case, `platform` and `identity` should
be specified (instead of being put under an ambiguous avatar pubkey).
