---
title: Glossary
---
## Avatar {#glossary-avatar}

Avatar is the core of user ID network in ProofService.

All other [Identities](./glossary#glossary-identity) (Web2.0 account, blockchain wallet etc.) are **only**
binded with Avatar.

> For now, Avatar is elliptic curve keypair using `secp256k1` curve.

## Identity {#glossary-identity}

Accounts / Identities on other [Platform](#glossary-platform) which is
binded with [Avatar](#glossary-avatar).

For example, `@my_twitter` on `twitter` platform, `my_github` on `github` platform.

> See [Supported platforms](ps-platforms-supported) for more info.

## Platform {#glossary-platform}

[Identity](#glossary-identity) provider.

> e.g. Twitter, GitHub, Facebook, Ethereum, etc.

> See [Supported platforms](ps-platforms-supported) for more info.

## Proof post {#glossary-proof-post}

To prove "I have this [identity](#glossary-identity)", user needs to
takes an action: use this [identity](#glossary-identity) to post an
accessible, specified content, which is called *Proof post*.

For `platform: "twitter"`, proof post should be a public visible tweet.

For `platform: "github"`, a public visible `Gist`.

> Proof post shapes different on different [platform](#glossary-platform).
>
> See [Supported platforms](ps-platforms-supported) for more info.

:::tip If [Identity](#glossary-identity) is cryptography ID
Cryptography ID (e.g. blockchain wallet) don't need to put a proof
post somewhere, since sigature generating itself can already prove
that user owns its private key.

:::

:::caution If Proof post is deleted by user
See [Downgrade](#glossary-downgrade)。
:::

## Binding (Link) {#glossary-link}

After ProofService validates [Proof post](#glossary-proof-post) on
server side, a binding record of "[Avatar](#glossary-avatar) <->
[Identity](#glossary-identity)" will be saved into [Proof
Chain](#glossary-proof-chain).

<details>
<summary>Struct of Link</summary>

:::caution Note

Code below is only a reference of Link, not specific
implementation in ProofService or API structure.

:::

```typescript title="link.d.ts"
// assert(signature.match(/0x[a-f0-9]{144}/))
// Sample:
// 0x3046022100881328457aa312135c37e1ddf8a129717274ce3f389c176936f5cb44edf04fc4022100be183139154d108ce2e5d6ba16678b0dbeb3b7d70caac2b00b2dad8f81e87790
type Signature = string;

// All available chain modification actions
enum Action {
    Create = "create",
    Delete = "delete",
}

// All supported platforms,
enum Platform {
    Twitter = "twitter",
    Keybase = "keybase",
}

// Each link in the proof chain
interface Link {
    // If this is genesis link, leave it null; else, it equals
    // previous link's signature. Worked as a pointer.
    prev: Signature | null;
    action: Action;
    platform: Platform;
    identity: string;
    // if method === Method.Add, then it must be a string; else, left null
    proof_location: string | null;
    // UNIX timestamp (unit: second)
    created_at: number;
    // An UUID of this link, works as a global identifier.
    uuid: string;
    // Signature of this link made by avatar.
    signature: Signature;
}
```

</details>

## Proof Chain {#glossary-proof-chain}

Each [Link](#glossary-link) under the same [Avatar](#glossary-avatar) is chained into a link:

- Each [Link](#glossary-link) has a signature of
  [Avatar](#glossary-avatar).
- Every [Link](#glossary-link) (except the first one under this
  [Avatar](#glossary-avatar)) has its previous
  [Link](#glossary-link)'s signature.

So to ensure that ProofService server cannot falsify any of the record
in the chain without Avatar-provided signature.

> Proof Chain mechanism is not picky of storage media. But we will put
> it in Arweave / IPFS in the future, anyway.

:::caution TBD
There will be an API to export the whole Proof Chain of a Avatar.
:::

<details>
<summary>Struct of Proof Chain</summary>

:::caution Note

Code below is only a reference of Proof Chain, not specific
implementation in ProofService or API structure.

:::

```typescript title="chain.d.ts"
const VERSION = "1";

// assert(public_key.match(/^0x[a-f0-9]{130}$/))
// Sample:
// 0x0428b73a2b67a88a47edb15bed5c73a199e24287bb12997c54239e9e6815e24a3032a502d58afe3f36a54f2f7606022907f358d0dd58939cffa0a845c5043ce038
type PublicKey = string;

interface Chain {
    version: VERSION;
    avatar: {
        public_key: PublicKey,
        curve: "secp256k1",
    };
    // See definition of `Link` above.
    links: Link[];
}
```

</details>


## Downgrade {#glossary-downgrade}

:::caution WIP
👷‍♀️👷 Work in progress, will be ready SOON™️.
:::

ProofService server will periodically check the validity of [Proof post](#glossary-proof-post).

If [Proof post](#glossary-proof-post) becomes invalid, this binding
record will be marked as `"is_valid": false` (with reason) in
[Query API](api#proof-query).

> e.g. User deletes [Proof tweet](#glossary-proof-post) after creating
> a [Link](#glossary-link), but doesn't [inform](api#proof-add)
> ProofService to delete this link (aka unbind).

> ProofService still won't (and can't) do anything to [Proof
> Chain](#glossary-proof-chain) even downgraded.
>
> All ProofService can do is to return `"is_valid": false` in [Query
> API](api#proof-query).

How to handle this downgraded relationship is entirely up to applications which use ProofService.

> e.g. show a ⚠️ to user, low priority when presenting, or just omit it.
