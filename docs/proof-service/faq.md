---
id: ps-faq
title: FAQ
sidebar_position: 5
---

## How do I generate a [Persona](glossary.md#glossary-persona)?

As in [glossary](glossary.md#glossary-persona), technically, persona
is the same as Ethereum wallet: they're both `secp256k1` elliptic
curve asymmetric keypair.

So, generating and managing Persona should be the same as generating /
managing wallets. Search for an `secp256k1` SDK in your project's
programming language to generate one.

:::note
Basiclly,

- secret key should be 32-bytes long
- public key has 2 shapes:
  - Uncompressed(65-bytes, started with `0x04`), or
  - compressed(33-bytes, started with `0x02` or `0x03`, in most case `0x02`)
:::

## I got `"bad signature"` error in [`POST /v1/proof`](api.md#proof-add) {#bad-signature}

1. Check if `created_at` and `uuid` is the same as [`POST /v1/proof/payload`](api.md#proof-payload) result.
2. Check if you're using [Ethereum Personal Sign](https://github.com/ChainSafe/web3.js/blob/1.x/docs/web3-eth-personal.rst#sign).
   - If your DApp is using wallet SDK (e.g. MetaMask), make sure
     you're using correct signature RPC method.

:::tip How do I implement personal sign by myself?
- In pseudo-code, `personal_sign` is:
```javascript
sign(keccak256("\x19Ethereum Signed Message:\n" + dataToSign.length + dataToSign)))
```
- Make sure `dataToSign.length` is length of bytes (`Buffer`
  length in some language), not UTF-8 [code
  point](https://en.wikipedia.org/wiki/Code_point) length.
  ```go
  assert.Equal(4, len([]byte("🐎"))) // Not 1
  ```
- Signature should be 65-bytes long.

```elixir
<<r::binary-size(32), s::binary-size(32), v::binary-size(1)>> = signature_binary
# v should be 0x00 or 0x01 or 0x1B or 0x1C
```

Here's a test case.

```go
// Psuedo-code
// Given a signature payload
payload := "Test123123!"
// And a secret key
secret_key := "0x9deba3488458c0314e5fef8920d3b117dd76415569cf270db8fd864896c02732"
// The personal sign result should be
assert.Equal(
  "0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d56401",
  personal_sign(secret_key, payload).ToHexString()
)
```

:::
