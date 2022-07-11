---
title: Go
---

## Proof Service

The core example of codes:

```go title="cmd/playground.go"
package main

import (
	"crypto/ecdsa"
	"fmt"

	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/crypto"
)

const (
	// ATTENTION! We intently replaced the last three digit of private key to be xxx.
	// Private key is everything and NEVER expose it to others or publicly
	SECRET_KEY   = "43c25fecc20e6b2a0d86c81a0202d125c0181deb9975d1170d80378c7e05bxxx"
	SIGN_PAYLOAD = "Test123123!"
)

func main() {
	sk, err := crypto.HexToECDSA(SECRET_KEY)
	if err != nil {
		panic(err)
	}

	sign, err := signPersonal([]byte(SIGN_PAYLOAD), sk)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Signature: %s\n", hexutil.Encode(sign))
	// Signature: 0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d56401
}

// signPersonal signs a payload using given secret key.
func signPersonal(payload []byte, sk *ecdsa.PrivateKey) (signature []byte, err error) {
	digest := signPersonalDigest(payload)
	signature, err = crypto.Sign(digest, sk)
	if err != nil {
		return nil, err
	}

	return signature, nil
}

// signPersonalDigest hashes the given payload with eth.personal.sign struct.
func signPersonalDigest(data []byte) []byte {
	messsage := fmt.Sprintf("\x19Ethereum Signed Message:\n%d%s", len(data), data)
	return crypto.Keccak256([]byte(messsage))
}
```