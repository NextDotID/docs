---
id: rs-intro
title: Introduction
sidebar_position: 1
---

In the preceding chapter, we discussed how to construct an identity graph using `ProofService`. Besides ProofService, there are several other data sources both on-chain and off-chain offering similar connections.`RelationService` aggregates the existing identities from ProofService and the other protocol whose identities are bound to and in parallel to Next.ID, structure the identities with the graph database and finally provide to the public via GraphQL. Hope to open up a range of possibilities for integration with external protocols and build a more comprehensive identity graph.

`RelationService` aggregates and indexes the other third-party `identity <-> identity` connections from the data source to enrich the identity graph:

- [ENS]
- [Farcaster]
- [Lens]
- [SNS]
- [Basenames]
- [LineaDomains]
- [BoxDomains]
- [3DNSDomains]
- [NameStone]
- [Nametag]
- [Clusters]
- [SpaceID]
- [Dotbit]
- [UnstoppableDomains]
- [GMGN]
- [EFPFollow]
- [Nostr]
- [Foundation]
- [Mirror]
- [Rarible]
- [Soundxyz]
- [ProofService]
- [Keybase]
- [RSS3]

Anyone can access the identity graph data via GraphQL of `RelationService`

| Environment | URL                                  | Online? | Playground                                  |
| ----------- | ------------------------------------ | ------- | ------------------------------------------- |
| Staging     | https://graph-staging.web3.bio/graphql | ✅       | [Yes](https://graph-staging.web3.bio/graphql) |
| Production  | https://graph.web3.bio/graphql     | ✅       | [Yes](https://graph.web3.bio/graphql)     |

```shell
npm install -g get-graphql-schema
get-graphql-schema https://graph.web3.bio/graphql > schema.graphql
```

Some common use cases for the reference, [Query from Graph Database.](rs-example)
