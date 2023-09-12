As `RelationService` aims to build comprehensive personal identity graphs, incorporating both on-chain and off-chain data to provide a holistic view of an individual’s digital presence.The Graph Database is the most important technology behind, aiming to supporting a full range of identity queries and social use cases. 
Graph Databases focus on relationships between data, making them a better option when dealing with complex relationships between intertwined data stored in multiple tables.

## What is a graph database?
A graph database is a database that focuses on relationships, i.e. Something — is related to — Something else

Looks like the following:
graph.jpg

1. It is a class of NoSQL databases
2. Stores relationships, reflecting entity-to-entity relationships
3. Uses directional-based nodes to represent data, rather than rows and columns in a table

## Graph Database in Next.ID
As using the graph database to build the identity graph in `RelationService`
`Vertices` represent entities or instances. In NextID, vertices usually represent an identity or smart contract that interact with some accounts  (e.g.Twitter account, Ethereum account, etc)
`Edges` define the relationships between vertices. (Two identities proven to belong to the same one, the accounts that hold a NFT, the account who interact with a smart contract)
`Neighbors` describe the other vertices that near to a vertex
`Traversal` refers to the process of visiting each vertex in a graph with some conditions

With Graph Databases, accessing related nodes is straightforward. It means no matter looking for a specific individual identity graph, the accounts that hold an NFT collection or interact with the same smart contract can be collected by traversing the graph.
