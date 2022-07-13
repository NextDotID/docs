---
title: TypeScript
---

## Proof Service

> You could git clone and run this [TypeScript open demo](https://github.com/nextdotid/Signature-Generating-Sample/tree/main/typescript) as a help

The core example of codes:

```js title="package.json"
{
  "dependencies": {
    "ethereumjs-util": "^7.1.4"
  }
}
```

```typescript title="index.ts"
import { ecsign, toRpcSig, keccakFromString, BN } from 'ethereumjs-util';

async function personalSign(message: Buffer, privateKey: Buffer): Promise<Buffer> {
    const messageHash = keccakFromString(`\x19Ethereum Signed Message:\n${message.length}${message}`, 256)
    const signature = ecsign(messageHash, privateKey)
    return Buffer.from(toRpcSig(signature.v, signature.r, signature.s).slice(2), 'hex')
}

async function main() {
    // this message come from the return attribute "sign_payload" of everytime calling API: v1/proof/payload
    const message = Buffer.from('{\"action\":\"create\",\"created_at\":\"1656843378\",\"identity\":\"your_twitter_handle\",\"platform\":\"twitter\",\"prev\":\"KNyNFtvhlRVJh/oU6RryK2n+C2dja9aLQPjlv5VHMsQErZROojEmMAgmeEQVC094EOuHIYcv3lCYXf8d3zqDCQE=\",\"uuid\":\"353449e6-3a6f-4ac8-ae65-ba14bf466baf\"}', 'utf8');
	// ATTENTION! We intently replaced the last three digit of private key to be xxx.
	// Private key is everything and NEVER expose it to others or publicly
    const secretKey = Buffer.from('43c25fecc20e6b2a0d86c81a0202d125c0181deb9975d1170d80378c7e05bxxx', 'hex');
    const signature = await personalSign(message, secretKey);

    console.log(`Signature: 0x${signature.toString('hex')}`);
    // For demo ONLY
    // Signature: 0xf72fe6b00be411bd70ffe1b9bf322f18529ea10e9559dd26ba10387544849fc86d712709dfb709efc3dcc0a01b6f6b9ca98bd48fe780d58921f4926c6f2c0b871b

    console.log(`Signature(base64): ${signature.toString('base64')}`);
    // For demo ONLY
    // Signature(base64): 9y/msAvkEb1w/+G5vzIvGFKeoQ6VWd0muhA4dUSEn8htcScJ37cJ78PcwKAbb2ucqYvUj+eA1Ykh9JJsbywLhxs=
}

main();
```