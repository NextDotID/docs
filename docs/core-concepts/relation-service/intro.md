---
id: rs-intro
title: Introduction
sidebar_position: 1
---

In the preceding chapter, we discussed how to construct an identity graph using `ProofService`. Besides ProofService, there are several other data sources both on-chain and off-chain offering similar connections.`RelationService` aggregates the existing identities from ProofService and the other protocol whose identities are bound to and in parallel to Next.ID, structure the identities with the graph database and finally provide to the public via GraphQL. Hope to open up a range of possibilities for integration with external protocols and build a more comprehensive identity graph.

`RelationService` aggregates and indexes the other third-party "identity <-> identity" connections from the data source to enrich the identity graph:
- [ProofService](../proof-service/ps-intro)
- [Keybase](https://keybase.io)
- [SybilList](https://github.com/Uniswap/sybil-list/blob/master/verified.json)
- [RSS3](https://rss3.io/network/api.html)
- [KNN3](https://docs.knn3.xyz/graphql)
- [CyberConnect](https://cyberconnect.me)
- [Lens](https://www.lens.dev/)
- [Farcaster](https://www.farcaster.xyz/)
- [SpaceID](https://space.id/)
- [Dotbit](https://www.did.id/)
- [unstoppabledomains](https://unstoppabledomains.com/)
- [TheGraph for ENS](https://thegraph.com/hosted-service/subgraph/ensdomains/ens)

Anyone can access the identity graph data via GraphQL of `RelationService`

| Environment | URL                                  | Online? | Playground                                  |
| ----------- | ------------------------------------ | ------- | ------------------------------------------- |
| Staging     | https://relation-service.nextnext.id | ✅       | [Yes](https://relation-service.nextnext.id) |
| Production  | https://relation-service.next.id     | ✅       | [Yes](https://relation-service.next.id)     |

Some common use cases for the reference, [Query from Graph Database.](rs-example)
