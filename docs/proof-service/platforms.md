---
id: ps-platforms-supported
title: Platform supported
---

> Check [Glossary](ps-glossary) first.

# `Platforms`

## Twitter

:::success ONLINE
- Staging
- Production
:::

| `platform` | `identity`                       | `proof_location`                       |
|------------|----------------------------------|----------------------------------------|
| `twitter`  | `twitter_username` (without `@`) | Proof tweet ID (`1415362679095635970`) |

## Keybase

:::success ONLINE
- Staging
- Production
:::

| `platform` | `identity`         | `proof_location` |
|------------|--------------------|------------------|
| `keybase`  | `keybase_username` | N/A              |

Proof post is located in
`https://your_identity.keybase.pub/NextID/COMPRESSED_PUBKEY_HEX.txt`,
so no `proof_location` needed.

## Ethereum

:::success ONLINE
- Staging
- Production
:::

| `platform` | `identity`                   | `proof_location` |
|------------|------------------------------|------------------|
| `ethereum` | Wallet address `0x123AbC...` | N/A              |

Two-way signatures are created from avatar sk and wallet sk, so no proof post needed.

## GitHub

:::success ONLINE
- Staging
- Production
:::

| `platform` | `identity`        | `proof_location`                              |
|------------|-------------------|-----------------------------------------------|
| `github`   | `github_username` | Public visible Gist ID `a6dddd2811af21b671fd` |

> Gist given should contains `0xPUBKEY_COMRESSED_HEX.json` file

## Discord

:::caution STAGING
- Staging
:::

| `platform` | `identity`      | `proof_location`                                                   |
|------------|-----------------|--------------------------------------------------------------------|
| `discord`  | `UserName#0000` | message link (`https://discord.com/channels/DIGITS/DIGITS/DIGITS`) |

> More info will be filled here when production is online (e.g. where to send proof post).

## DotBit

:::success ONLINE
- Production
- Staging
:::

| `platform` | `identity`      | `proof_location`                                                   |
|------------|-----------------|--------------------------------------------------------------------|
| `dotbit`   | `address.bit`   | N/A                                                                |

Create a Profile record with key `nextid` and value `0x${COMPRESSED_PERSONA_PUBKEY_IN_HEX}:${SIGNATURE_IN_BASE64}`.

## Solana

:::success ONLINE
- Production
- Staging
:::

| `platform` | `identity`                   | `proof_location` |
|------------|------------------------------|------------------|
| `solana`   | Wallet address `AbCdEfG12...`| N/A              |

Two-way signatures are created from avatar sk and wallet sk, so no proof post needed.

## Minds

:::caution STAGING
- Staging
:::

| `platform` | `identity`                                     | `proof_location`                                              |
|------------|------------------------------------------------|---------------------------------------------------------------|
| `minds`    | `USERNAME` in `https://www.minds.com/USERNAME` | newsfeed ID (in `https://www.minds/com/newsfeed/LONG_DIGITS`) |

Guide user to send a public-visible proof post, and copy post link
(like `https://www.minds/com/newsfeed/LONG_DIGITS`).

Send `LONG_DIGITS` to ProofService server to validate.

## DNS

:::caution STAGING
- Staging
:::

| `platform` | `identity`                     | `proof_location` |
|------------|--------------------------------|------------------|
| `dns`      | `domain-to-verify.example.com` | N/A              |

Guide user to set proof post content in `TXT domain-to-verify.example.com`.

ProofService server will use [DoH](https://en.wikipedia.org/wiki/DNS_over_HTTPS) to fetch and verify.
