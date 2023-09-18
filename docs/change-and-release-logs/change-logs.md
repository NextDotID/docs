---
id: change-log
title: Changelog
sidebar_position: 1
---

## Proof Service

### Changelog 2023-09-06 by [@Nyk Ma]([https://github.com/nykma](https://github.com/nykma))

### New Features

- Added support platforms:
    - [Slack](https://github.com/NextDotID/proof_server/commit/66a3974879b2bed0e148a33dbed3d0a9b4e53d18)
- [Introduced proof expiration mechanism: proof will be revalidated only if the record is outdated](https://github.com/NextDotID/proof_server/commit/b121a1855100d37142f92b383ea5c2bb6134c55f). 
- [Display current runtime information in the /healthz endpoint]((https://github.com/NextDotID/proof_server/commit/bcbc3bd3e7b62cf87fcf97bf1af5db62a620d408)).

### Updates

- [Updated code related to Slack integration](https://github.com/NextDotID/proof_server/commit/66a3974879b2bed0e148a33dbed3d0a9b4e53d18). 
- [Split read and write database connections](https://github.com/NextDotID/proof_server/commit/9e82cacdd9e187abacbd397069c120ab97cd1476)
- [`Platform::Twitter` : Record the numeric ID of Twitter users (in `AltID` field)](https://github.com/NextDotID/proof_server/commit/c4962f661c478b20dab858fd8116472b16cd3104)
- [`Platform::Twitter` : Use twitter’s GraphQL API for Twitter binding validation](https://github.com/NextDotID/proof_server/commit/1e347de2dde2c3a5db091082d73a585d430fc3c4)
- [`Platform::Twitter` : Retry several times when calling twitter GraphQL API](https://github.com/NextDotID/proof_server/commit/fb0e97d8170f3cb71cd846fab56d0dfcc8ddc389)
    - To overcome temporarily request fails
- [`GET /v1/proof` : now shows 40 records per page](https://github.com/NextDotID/proof_server/commit/f894b6c6c9bb4d81585608b84d945a832c8073cb)

### Fixes

- Fix some issue with headless browser function
- Disable auto migration in Lambda environment to boost cold start duration when a new lambda instance starts

## Relation Service

### Changelog 2023-09-06 by [@Zella Zhong]([https://github.com/ZhongFuze](https://github.com/ZhongFuze))

Switched GraphDB Engine to TigerGraph
    - Why: To handle rising data volumes and enable advanced analytics capabilities.
    - Impact: Improved query performance by 70%, added new query functionalities, and optimized data fetching.
    - Features:
        - [GSQL migrations and [tdb] configuration]((https://github.com/NextDotID/relation_server/pull/105/commits/61895f0ccf00d6a595caaaa91a34dab785c3d501)).
        - New query functionalities like [`neighbors()`]((https://github.com/NextDotID/relation_server/pull/105/commits/319d93605457bacb6cac44e44475f35f0dc69359)), [`neighbors_with_source()`]((https://github.com/NextDotID/relation_server/pull/105/commits/d166c76ef0b0abb539631daefed2fad29c4a55d9)), [`domain()`]((https://github.com/NextDotID/relation_server/pull/105/commits/f4b3fa21d7714524ea9600466e53a69f28d054df)), etc.

    - Action Required: Users may need to update configurations and be aware of deprecated ArangoDB-related code.

### New Features
• **GSQL Client Tweaks**: [Optimized GSQL interactions for faster migrations and queries](https://github.com/NextDotID/relation_server/pull/105/commits/f99e5a26a360811a2cc16a296d0d84656f88f178). 
• **Delete Vertex and Edge Method**: [Added for handling outdated data](https://github.com/NextDotID/relation_server/pull/105/commits/a5ce35a05ab402d0a2bfa3023135ce8008a69d74). 



### Improvements
- Fetch All Procedure: [Enhanced to support parallel querying and timeout settings](https://github.com/NextDotID/relation_server/pull/105/commits/e7282c9c068f7aa192985439e5554ec880a343c5).
- Access Management: [Improved security for graph and tokens](https://github.com/NextDotID/relation_server/pull/105/commits/cabd96d91945c810f1757d2b1141224e8870acfc).
- Data Sources: Expanded and updated DataSource enum.
  - [Farcaster](https://github.com/NextDotID/relation_server/pull/91) 
  - [UnstoppableDomains](https://github.com/NextDotID/relation_server/pull/86)
  - [SpaceID](https://github.com/NextDotID/relation_server/pull/93) 
  - [Dotbit](https://github.com/NextDotID/relation_server/pull/89) 

### Bug Fixes
- [Fixed issues with **`naive_datetime`** serialization](https://github.com/NextDotID/relation_server/pull/105/commits/e435a5839b6014598ffd9ebf22b0e2708879060b) and [URL encoding]((https://github.com/NextDotID/relation_server/pull/105/commits/bca19bc042c98a712c814f23ed230a2c5868f1df)).

### Removals
- [Deprecated all ArangoDB-related code]((https://github.com/NextDotID/relation_server/pull/105/commits/4bd6c534f9513d672d6f87f90096e5b7a468ec6d)). 

## Infrastructure & Maintenance
- Updated dependencies and configurations.
- Merged changes into the `graphdb/tigergraph` branch and set up CI.
