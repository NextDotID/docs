---
id: rs-example
title: Query from Graph Database
sidebar_position: 3
---
Here are some query use cases for reference.

### Query Type

- `identities`: Fetch multiple identities based on platform and list of identity strings.
- `identity`: Fetch a single identity record based on platform and identity string.
- `domainAvailableSearch`: Fetch a list of domain with difference postfix on all platforms which has been taken or not.

## Schema Types and Fields

### `IdentityRecord` & `IdentityRecordSimplified`

**Represents detailed information about a single identity.**

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String!` | Unique identifier for the identity. |
| `identity` | `String!` | The string representation of the identity. |
| `platform` | `Platform!` | Platform type (e.g., `ethereum`, `ens`, `farcaster`, `lens` ). |
| `network` | `Network` | The network on which the identity exists on chain. |
| `primaryName` | `String` | Primary name associated with the identity. |
| `isPrimary` | `Boolean!` | Indicates if this is the primary identity. |
| `resolvedAddress` | `[Address!]!` | List of resolved addresses for this identity. |
| `ownerAddress` | `[Address!]!` | List of owner addresses for this identity. |
| `expiredAt` | `datetime` | Expiration date of the identity. |
| `profile` | `Profile` | Profile information associated with the identity. |
| `identityGraph` | `IdentityGraph` | Connections and relationships of the identity in graph format. Notice: `IdentityRecordSimplified` don’t have field `identityGraph` |

### `IdentityGraph`

**Represents relationships and connections for an identity.**

| Field | Type | Description |
| --- | --- | --- |
| `graphId` | `String!` | Unique identifier for the identity graph. |
| `vertices` | `[IdentityRecordSimplified!]!` | List of connected identities. |
| `edges` | `[IdentityConnection!]!` | Connections between the identities (edges in the graph). |

### `EdgeType`

**Represents relationships and connections for an identity.**

| Field | Type | Description |
| --- | --- | --- |
| `Hold` | `String!` | e.g. Address Hold Domain |
| `Resolve` | `String!` | e.g. A domain resolve to an address |
| `Reverse_Resolve` | `String!` | e.g. An address set reverse resolve to a domain, It can also be said to be `primary_name` |
| `Auth` | `String!` | e.g. OAuth account connections |
| `Proof` | `String!` |  |

---

## Example Queries

### Domain Available Search

```graphql
query SearchDomainAvailable {
  domainAvailableSearch(name: "blockchain") {
    platform
    name
    tld
    expiredAt
    availability
    status // taken/protected/available/unavailable
  }
}
```

### Single Identity Query

Fetches a specific ENS identity (e.g., `sujiyan.eth`) and includes identity connections through the `identityGraph` field.

```graphql
query FindIdentityWithIdentityGraph{
  identity(platform: ens, identity: "vitalik.eth") {
    id
    status
    aliases
    identity
    platform
    network
    isPrimary
    primaryName
    registeredAt
    managerAddress {
      address
      network
    }
    resolvedAddress {
      address
      network
    }
    ownerAddress {
      address
      network
    }
    updatedAt
    expiredAt
    profile {
      uid
      identity
      platform
      network
      address
      displayName
      avatar
      description
      texts
      contenthash
      addresses {
        address
        network
      }
      social {
        uid
        follower
        following
      }
    }
    identityGraph {
      graphId
      vertices {
        id
        status
        aliases
        identity
        platform
        network
        isPrimary
        primaryName
        registeredAt
        managerAddress {
          address
          network
        }
        resolvedAddress {
          address
          network
        }
        ownerAddress {
          address
          network
        }
        expiredAt
        profile {
          uid
          identity
          platform
          network
          address
          displayName
          avatar
          description
          texts
          addresses {
            address
            network
          }
          social {
            uid
            follower
            following
          }
        }
      }
      edges {
        source
        target
        dataSource
        edgeType
      }
    }
  }
}

```

### Batch Identity Query

Fetches multiple identities by `ids` (which id is unique in web3bio)and returns `IdentityRecordSimplified`.

### `ids` format

| `Platform` | identity | id |
| --- | --- | --- |
| ethereum | address | `ethereum,address` |
| ens | name.eth | `ens,name.eth` |
| farcaster | fname | `farcaster,fname` |
| farcaster | fid | `farcaster,#fid` |
| farcaster | address | `farcaster,address` |
| lens | handle.lens | `lens,handle.lens` |
| lens | profileId | `lens,#profileId` |
| lens | address | `lens,address` |
| clusters | name | `clusters,name` |
| basenames | name.base.eth | `basenames,name.base.eth` |
| solana | address | `solana,address` |
| sns | name | `sns,name.sol` |
| sns | address | `sns,address` |
| ... | ... | ... |

### Example

```graphql
query BatchQueryIdentities {
  identities(ids:[
    "ethereum,0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    "ens,vitalik.eth",
    "farcaster,dwr.eth",
    "lens,stani.lens",
    "sns,bonfida.sol",
    "ens,josh.box",
    "basenames,jesse.base.eth",
    "linea,joseph.linea.eth",
    "dotbit,firstbit.bit",
    "unstoppabledomains,matthew.crypto",
    "space_id,blockchain.bnb"
    // Add more identities here...
  ]
  ) {
    id
    status
    aliases
    identity
    platform
    network
    isPrimary
    primaryName
    registeredAt
    managerAddress {
      address
      network
    }
    resolvedAddress {
      address
      network
    }
    ownerAddress {
      address
      network
    }
    updatedAt
    expiredAt
    profile {
      uid
      identity
      platform
      network
      address
      displayName
      avatar
      description
      texts
      contenthash
      addresses {
        address
        network
      }
      social {
        uid
        follower
        following
      }
    }
  }
}
```

---

## Additional Notes for Developers

1. **Data Structures**: The `IdentityRecord` fields contain nested data structures, including addresses and social connections. Make sure to map these fields correctly in your frontend data models.
2. **Batch Queries**: The `identities` query allows for batch retrieval of identity records, which is efficient for displaying multiple identity profiles at once.
3. **Graph Data**: The `identityGraph` provides connection data (vertices and edges) that can be visualized as a network graph, offering insights into how identities are interrelated.
4. **Date Handling**: The `Date` field is in `bitint` format, so consider using date libraries for handling and formatting in the frontend.
