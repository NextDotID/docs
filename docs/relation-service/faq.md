---
id: rs-faq
title: FAQ
sidebar_position: 4
---

## Does RelationService related with blockchain / contract / NFT?

Yes, and no.

Yes, RelationService will collect "on-chain asset" <-> "ethereum identity" relation.

No, we are not a relation provider like [ENS](https://ens.domains) or
[Lens](https://lens.dev) which is based on NFT on a specific chain.

RelationService is only a relation aggregator, which does not yield a
new relation[^1]. There's no need to provide a "token"-like stuff by us.

Treat RelationService as a search engine.

## Should I use the "[official](rs-graphql#entrypoint)" instance in my production environment?

[Our server](rs-graphql#entrypoint) is a great start for you to
discover the possibility of RelationService.

Meanwhile, if you gradually rely more and more on this service, we suggest
you to host one by your own:

- RelationService is [stateless](rs-intro#stateless).
- Database migration between versions will be (and should be)
  performed smoothly.

[^1]: For now.
