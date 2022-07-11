---
title: Rust
---

## Proof Service

The core example of codes:

```toml title="Cargo.toml"
[dependencies]
libsecp256k1 = "0.7"
hex = "0.4"
sha3 = "0.10" # Keccak256
```

```rust title="src/main.rs"
use libsecp256k1::{SecretKey, Message};
use sha3::{Keccak256, Digest};

const SECRET_KEY: &str = "9DEBA3488458C0314E5FEF8920D3B117DD76415569CF270DB8FD864896C02732";
const SIGN_PAYLOAD: &str = "Test123123!";

fn main() {
    // Raw sign message
    let sign_payload: String = SIGN_PAYLOAD.to_string();
    // SecretKey instance
    let secret_key = SecretKey::parse_slice(hex::decode(SECRET_KEY).unwrap().as_slice()).unwrap();
    // Sign it
    let personal_signature = personal_sign(&sign_payload, &secret_key);
    // Verify it
    println!("Signature: 0x{}", hex::encode(personal_signature));
    // Signature: 0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d56401
}

/// `web3.eth.personal.sign()`
fn personal_sign(payload: &String, secret_key: &SecretKey) -> Vec<u8> {
    // Wrap personal.sign() required signature struct
    let personal_message = format!("\x19Ethereum Signed Message:\n{}{}", payload.len(), payload);
    // Keccak256 it into a digest.
    let mut hasher = Keccak256::default();
    hasher.update(personal_message);
    let digest: [u8; 32] = hasher.finalize().into();

    // Sign the digest.
    let (r_and_s, v) = libsecp256k1::sign(&Message::parse(&digest), secret_key);
    // Rebuild the sig into a [u8; 65]
    let mut signature: Vec<u8> = vec![];
    signature.extend_from_slice(&r_and_s.r.b32()); // r (32 bytes)
    signature.extend_from_slice(&r_and_s.s.b32()); // s (32 bytes)
    signature.push(v.serialize()); // v (1 byte)
    if signature.len() != 65 {
        panic!("Signature length is not 65 bytes");
    }
    signature
}
```