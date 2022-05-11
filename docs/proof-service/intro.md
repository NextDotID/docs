---
id: ps-intro
title: Introduction
sidebar_position: 1
---

`ProofService` provides a DID service to build a connection between
asymmetric cryptography (currently elliptic curve) and other identity
provider (other asymmetric cryptography ID, Web2.0 identity provider,
etc).

## Feature

### Two-way bidning

Missing proof material will make this binding status
[downgraded](ps-glossary#glossary-downgrade).

### Publicly verifiable

[Proof post](ps-glossary#glossary-proof-post) should be anonymously
accessible. Any user / service / program can verify this binding
without much cost.

## Design goal

ProofService is designed to prove "An
[Identity](ps-glossary#glossary-identity) and a
[Persona](ps-glossary#glossary-persona) is held by same person".

Let's take this assertion into 2 parts:

1. "I" hold this Persona.
2. "I" hold this identity.

`1` equals "Generate a signature using secret key of this Persona".

`2` equals "Make an action using this identity".

Here we reach `1` and `2` with [Proof post](ps-glossary#glossary-proof-post) mechanism.
