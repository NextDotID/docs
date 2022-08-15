---
id: rs-intro
title: Introduction
sidebar_position: 1
---

`RelationService` search other third-party "identity <-> identity"
relation creation / query service, and aggregate the results into one
query.

## Data source (Upstreams) {#upstreams}

- [ProofService](../proof-service/ps-intro)
- [Keybase](https://keybase.io)
- [SybilList](https://github.com/Uniswap/sybil-list/blob/master/verified.json)
- [RSS3](https://rss3.io/network/api.html)
- [KNN3](https://docs.knn3.xyz/graphql)
- [CyberConnect](https://cyberconnect.me)
- ETH Leaderboard
- TheGraph for
  - [ENS](https://thegraph.com/hosted-service/subgraph/ensdomains/ens)

## Features

### Structured query response

"[Vertex-Edge](https://en.wikipedia.org/wiki/Graph_database)" style
response for users to recreate the whole identity relation tree within 1 query.

### [GraphQL API](./rs-graphql)

What you get is what you request. Construct your own query to meet
your need.

### Query from an `identity` or web3 asset

Start a query by giving one of the following qeury conditions:

- `platform` - `identity`, or
- `blockchain` - `nft_type` - `contract_address` (optional) - `nft_id`

### Stateless {#stateless}

Every identity / relation data is fetched when first requested.

No unrecoverable data in DB (which means whole DB can be rebuilt)[^1].

[^1]: For now. We may add some RelationService-only data records in the future. Stay tuned.

## Getting Started

- Check [System Architecture](./rs-system) for how RelationService fetch / provide data.
- Check [GraphQL](./rs-graphql) for how to use it.
