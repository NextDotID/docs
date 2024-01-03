---
id: rs-graphdb
title: GraphDB
sidebar_position: 2
---

As `RelationService` aims to build comprehensive personal identity graphs, incorporating both on-chain and off-chain data to provide a holistic view of an individual’s digital presence. The Graph Database is the most important technology behind, aiming to support a full range of identity queries and social use cases. 
Graph Databases focus on relationships between data, making them a better option when dealing with complex relationships between intertwined data stored in multiple tables.

## What is a graph database?
A graph database is a database that focuses on relationships, i.e. Something — is related to — Something else.

1. It is a class of NoSQL databases
2. Stores relationships, reflecting entity-to-entity relationships
3. Uses directional-based nodes to represent data, rather than rows and columns in a table
   
It looks like the below:
![](../../../static/img/hyper-multi-graph.png)

According to the Graph, there are some concept we need to know when we using the graph database to build the identity graph 
- **Vertices** represent entities or instances. In NextID, vertices usually represent an identity or smart contract that interact with some accounts  (e.g.Twitter account, Ethereum account, etc)
- **Edges** define the relationships between vertices. (Two identities proven to belong to the same one, the accounts that hold a NFT, the account who interact with a smart contract)
- **Neighbors** describe the other vertices that near to a vertex
- **Traversal** refers to the process of visiting each vertex in a graph with some conditions

## Graph Database in RelationService
In `RelationService`, we defined two type of `Vertices`
- **Identity**: e.g.Twitter account, Ethereum account
- **Contract**: a contract object on a specific chain
  
four type of `Edges`
- **Proof**: represent a bi-directional relation (e.g. a Twitter account and an Ethereum account that bonded in `ProofService`)
- **Hold**: usually represent Identity "hold" an asset (eg: an account hold a NFT)
- **Resolve**: refer to the relation between the domain service and account (eg: ENS)
- **Relation**: record static info between two identities

With Graph Databases, accessing related nodes becomes intuitive. Based on the data structure defined above, one can retrieve an individual identity graph, the accounts holding the same NFT collection, or those interacting with a particular smart contract by traversing the graph. Data can be extracted from the specified Edges and Vertices, tailored to your specific conditions.

[some query examples for reference](./exampleQuery.md)
