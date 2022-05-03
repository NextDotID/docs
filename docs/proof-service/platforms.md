---
id: ps-platforms-supported
title: Platform supported
---

> Check [Glossary](ps-glossary) first.

# `Platform`s

## Twitter

:::success ONLINE
- Staging
- Production
:::

| `platform` | `identity`         | `proof_location`                       |
|------------|--------------------|----------------------------------------|
| `twitter`  | `twitter_username` | Proof tweet ID (`1415362679095635970`) |

## Keybase

:::success ONLINE
- Staging
- Production
:::

| `platform` | `identity`         | `proof_location`                       |
|------------|--------------------|----------------------------------------|
| `keybase`  | `keybase_username` | N/A (use `https://your_identity.keybase.pub/NextID/COMPRESSED_PUBKEY_HEX.txt`) |

## Ethereum

:::success ONLINE
- Staging
- Production
:::

| `platform` | `identity`                   | `proof_location`                                               |
|------------|------------------------------|----------------------------------------------------------------|
| `ethereum` | Wallet address `0x123AbC...` | N/A (Two-way signatures created from persona sk and wallet sk) |

## Github

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
