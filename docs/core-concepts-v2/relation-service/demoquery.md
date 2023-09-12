Query an identityGraph

```graphql
query findOneIdentity {
  identity(platform: "twitter", identity: "suji_yan") {
    status
    uuid
    displayName
    createdAt
    addedAt
    updatedAt
    # Here we perform a 5-depth deep search for this identity's "neighbor".
    neighborWithTraversal(depth: 5) {
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

Query the NFT Assets that Owned by an identity



Query Neighbors ...


