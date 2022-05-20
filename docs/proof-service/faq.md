---
id: ps-faq
title: FAQ
sidebar_position: 5
---

## I got `"bad signature"` error in `POST /v1/proof` {#bad-signature}

1. Check if `created_at` and `uuid` is the same as `POST /v1/proof/payload` result.
2. Check if you're using Ethereum Personal Sign.
   - If your DApp is using wallet SDK (e.g. MetaMask), make sure
     you're using correct signature RPC method.
   - If you're inventing Personal Sign by your own:
     - In pseudo-code, `personal_sign` is:
     ```javascript
     sign(keccak256("\x19Ethereum Signed Message:\n" + dataToSign.length + dataToSign)))
     ```
     - Make sure `dataToSign.length` is length of bytes (`Buffer`
       length in some language), not UTF-8 [code
       point](https://en.wikipedia.org/wiki/Code_point) length.
       ```go
       assert.Equal(3, len("🐎")) // Not 1
       ```
     - Signature should be 64-bytes long.

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
