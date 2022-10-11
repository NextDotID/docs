---
id: kv-use-cases
title: Use Cases
sidebar_position: 7
---

KVService works as a general key-value store. It can be used in many different scenarios. This page lists some of the use cases.

## KVService as a persistence storage

You can use KVService to store the data that needs cross-session persistence.

For example, you can store the user's avatar, nick name, bio, show/hide status of NFT list, or order of these contents, under your web3 app's scenarios.

Using KVservices gives you some benefits:

- The change made by user is verifiable by other user / applications, aka platform-independent. No one (except the user himself) can change the data without a valid signature.
- The data is stored in a decentralized way, no matter where this data is actually stored. User always has a choice to move their data to other (or self-hosted) platforms.
  > The actual "migration" function is still under development.
