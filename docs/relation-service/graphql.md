---
id: rs-graphql
title: GraphQL
sidebar_position: 3
---

> Check out [System Architecture](rs-system) first.

## Introduction

You can refer to many existed GraphQL tutorials, e.g.:
- [How to GraphQL](https://www.howtographql.com)
- [GraphQL guide](https://www.graphql.com/guides/)
- [GraphQL guide](https://graphql.cn/learn/) (in Chinese)

> TLDR: What you get is what you request from server.

## Entrypoint {#entrypoint}

| Environment | URL                                  | Online?    | Playground                                  |
|-------------|--------------------------------------|------------|---------------------------------------------|
| Staging     | https://relation-service.nextnext.id | ✅         | [Yes](https://relation-service.nextnext.id) |
| Production  | https://relation-service.next.id     | ❌ (SOON™) | [Yes](https://relation-service.next.id)     |

## General

### Use playground first

Check "Playground" column in [Entrypoint](#entrypoint) section. Open
it and play a little while before you integrate RelationService into
your own system.

The playground has many beneficial functions:

- Document (on the right side of the page): It is always aligned with
  current server's implementation, and we have written comments and
  explanations for every parameter. Things you need to notice are all
  appeared in comments so MAKE SURE YOU READ THE PLAYGROUND DOC BEFORE
  USE!
- Schema (on the right side of the page): Use it with a GraphQL code
  generator (such as
  [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator))
  will help you alot when composing your query.
- On-hover document
- Syntax error checking
- Code suggestion

### Query all data at once

Avoid multiple calling. If you have to do so to get something, it's
our fault. Fill an issue or submit a PR will help us a lot.

## Common use case

:::caution CHECK THE DOC
Paste it into [playground](#entrypoint) and check documents for each param!
:::

### Query an identity (w/ its relations to other identitites)

```graphql
query findOneIdentity {
  identity(platform: "twitter", identity: "yeiwb") {
    status
    uuid
    displayName
    createdAt
    addedAt
    updatedAt
    # Here we perform a 3-depth deep search for this identity's "neighbor".
    neighborWithTraversal(depth: 3) {
      source # Which upstream provides this connection info.
      from {
        uuid
        platform
        identity
        displayName
      }
      to {
        uuid
        platform
        identity
        displayName
      }
    }
  }
}
```

Then you have the ability to rebuild the whole relation tree with
`from` - `to` edges and `uuid` of each vertex.


### Query an identity (w/ its relations to other identitites and their sources)
If you don't need to rebuild the relation tree
just want to know which upstream provides this connection info.

```graphql
query findOneIdentityWithSource {
  identity(platform: "twitter", identity: "suji_yan") {
    status
    uuid
    displayName
    createdAt
    addedAt
    updatedAt
    # Here we perform a 3-depth deep search for this identity's "neighbor".
    neighbor(depth: 3) {
      sources # Which upstreams provide these connection infos.
      identity {
        uuid
        platform
        identity
        displayName
      }
    }
  }
}

```


### Query an identity (w/ its relations and potential NFTs)

```graphql
query findOneIdentityWithNFT {
  identity(platform: "twitter", identity: "yeiwb") {
    status
    uuid
    displayName
    createdAt
    addedAt
    updatedAt
    # Here we perform a 3-depth deep search for this identity's "neighbor".
    neighborWithTraversal(depth: 3) {
      source # Which upstream provides this connection info.
      from {
        uuid
        platform
        identity
        displayName
        nft {
          id
          category
          address
          chain
          source
        }
      }
      to {
        uuid
        platform
        identity
        displayName
        nft {
          id
          category
          address
          chain
          source
        }
      }
    }
  }
}
```

:::info
`nft` field will possibly have value only when its parent identity is `platform: ethereum`.
:::

### Query an NFT (w/ its owner, owner's other NFTs, and owner's related identites)

```graphql
query findOneNFTWithOwnerNeighbor {
  nft(chain: "ethereum", category: "ENS", id: "sujiyan.eth") {
    owner {
      platform
      identity
      nft {
        category
        chain
        id
      }
      neighborWithTraversal(depth: 3) {
        source
        from {
          platform
          identity
          uuid
        }
        to {
          platform
          identity
          uuid
        }
      }
    }
  }
}
```
