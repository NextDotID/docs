---
id: rs-example
title: Query from Graph Database
sidebar_position: 3
---
Here are some query use cases for reference.

### Query an identity (w/ its relations to other identitites)
```graphql
query findOneIdentity {
  identity(platform: "twitter", identity: "suji_yan") {
    uuid
    platform
    identity
    displayName
    createdAt
    addedAt
    updatedAt
    # Here we perform a 3-depth deep search for this identity's "neighbor".
    neighborWithTraversal(depth: 5) {
      # neighbor returns is EdgeUnion, your should define every type of EdgeUnion's fields
      ... on ProofRecord {
        __typename
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
      ... on HoldRecord {
        __typename
        source
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
}
```

### Query a list of identities (w/ its relations to other identitites and their sources)
If you don't need to rebuild the relation graph, just want to get a list of nodes, or just want to know which upstream (sources) provides this connection info.

```graphql
query findOneIdentityWithSource {
  identity(platform: "twitter", identity: "suji_yan") {
    uuid
    platform
    identity
    displayName
    createdAt
    addedAt
    updatedAt
    # Here we perform a 3-depth deep search for this identity's "neighbor".
    neighbor(depth: 5) {
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
### Query an NFT (w/ its owner, owner's other NFTs, and owner's related identites)
:::info
`nft` field will possibly have value only when its parent identity is `platform: ethereum`.
:::
```graphql
query findOneNFTWithOwnerNeighbor {
  nft(chain: "ethereum", category: ENS, id: "sujiyan.eth") {
    owner {
      platform
      identity
      nft {
        category
        chain
        id
      }
      neighborWithTraversal(depth: 5) {
        ... on ProofRecord {
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
        ... on HoldRecord {
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
}
```
### Query the NFT Assets that Owned by an identity
```graphql
query findIdentityNFTAssets {
  identity(platform: "ethereum", identity: "0x934b510d4c9103e6a87aef13b816fb080286d649") {
    uuid
    platform
    identity
    displayName
    createdAt
    addedAt
    updatedAt
    nft {
      id
      category
      address
      chain
      source
    }
  }
}
```
### Query an identity (w/ its relations and potential NFTs)
```graphql
query findOneIdentityWithNFT {
  identity(platform: "twitter", identity: "suji_yan") {
    uuid
    platform
    identity
    displayName
    createdAt
    addedAt
    updatedAt
    neighbor(depth: 5) {
      sources
      identity {
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
