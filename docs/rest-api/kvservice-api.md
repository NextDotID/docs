---
title: KVService API
---

### Entrypoint {#entrypoint}

| Online | Environment | Entrypoint                        | Healthcheck                               |
| ------ | ----------- | --------------------------------- | ----------------------------------------- |
| ✅      | Staging     | https://kv-service.nextnext.id | https://kv-service.nextnext.id/healthz |
| ✅      | Production  | https://kv-service.next.id     | https://kv-service.next.id/healthz     |


### Structure

All requests and responses should be `Content-Type: application/json`.

### About struct patching

We choose [RFC 7396](https://www.rfc-editor.org/rfc/rfc7396) standard for
KV modifying.

Client should choose a lib which implements this.

e.g.
[json-merge-patch](https://github.com/pierreinglebert/json-merge-patch)
for JavaScript, [json-patch](https://github.com/idubrov/json-patch)
for Rust.

## Group KV

### Get current KV of a avatar [GET /v1/kv] {#query}

+ Request (application/json)

    + Parameters

        - avatar (string, required) - Avatar public key (hexstring started with `0x`).

    + Example

        `GET /v1/kv?avatar=0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575`

+ Response 200 (application/json)

  + Attributes (object)

     + avatar (string, required) - Avatar public key (uncompressed hexstring started with `0x`).
     + proofs (array[object], required) - All proofs belong to this avatar
          + platform (string, required) - Platform (incl. `nextid`, which means public key itself).
          + identity (string, required) - Identity.
          + content (object, required) - KV-pair of this entry.

  + Body
    ```json
        {
          "avatar": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",
          "proofs": [{
            "platform": "nextid",
            "identity": "0x04c7cacde73.....",
            "content": {
              "this": "is",
              "a": ["sample", "kv", "content"]
            }
          }, {
            "platform": "twitter",
            "identity": "yeiwb",
            "content": {
              "twitter": "only",
              "kv": ["content", "goes", "here"]
            }
          }]
        }
    ```

+ Response 404 (application/json)

Persona not found (no KV was ever created).

### Get signature payload for updating [POST /v1/kv/payload] {#payload}

> Make sure to save order-aware struct in `[]` value.

+ Request (application/json)

  + Attributes (object)

    + avatar (string, required) - Avatar public key (both comressed / uncompressed and with/without `0x` are OK).
    + platform (string, required) - Platform (incl. `nextid`, which means public key itself).
    + identity (string, required) - Identity.
    + patch (object, required) - Patch to current data

  + Body

    ```json
    {
          "avatar": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",
          "platform": "nextid",
          "identity": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",
          "patch": {
              "this": "is",
              "a": "sample",
              "structure": ["it", "could", "be", "anything"],
              "key": {
                "to": {
                  "delete": null
                }
              }
            }
        }
    ```

+ Response 200 (application/json)

  + Attributes (body)

    + uuid (string, required) - UUID for this patch action. Send this UUID in `POST /v1/kv` as-is.
    + created_at (number, required) - Creation timestamp of this request. Send this in `POST /v1/kv` as-is.
    + sign_payload (string, required) - String to sign to.

  + Body

    ```json
        {
          "uuid": "40c13c92-31e5-40d1-aebb-143d8e5b9c5e",
          "created_at": 1646983606,
          "sign_payload": "{\"action\":\"kv\",\"created_at\":1646983606,\"patch\":{\"a\":\"sample\",\"key_to_delete\":null,\"structure\":[\"it\",\"could\",\"be\",\"anything\"],\"this\":\"is\"},\"prev\":null,\"uuid\":\"40c13c92-31e5-40d1-aebb-143d8e5b9c5e\"}"
        }
    ```

### Apply a patch [POST /v1/kv] {#patch}

+ Request (application/json)

  + Attributes (object)

    + avatar (string, required) - Avatar public key (hexstring, both comressed / uncompressed are OK).
    + platform (string, required) - Platform (incl. `nextid`, which means public key itself).
    + identity (string, required) - Identity.
    + uuid (string, required) - UUID given by `POST /v1/kv/payload`.
    + created_at (number, required) - Creation timestamp given by `POST /v1/kv/payload`.
    + signature (string, required) - Signature of this request. Base64-ed.
    + patch (object, required) - Patch content

  + Body
    ```json
        {
          "avatar": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",
          "platform": "nextid",
          "identity": "0x04c7cacde73af939c35d527b34e0556ea84bab27e6c0ed7c6c59be70f6d2db59c206b23529977117dc8a5d61fa848f94950422b79d1c142bcf623862e49f9e6575",
          "uuid": "40c13c92-31e5-40d1-aebb-143d8e5b9c5e",
          "created_at": 1646983606,
          "signature": "BASE64_SIGNATURE_HERE",
          "patch": {
              "this": "is",
              "a": "sample",
              "structure": ["it", "could", "be", "any", "JSON"],
              "key": {
                "to": {
                  "delete": null
                }
              }
            }
        }
    ```
+ Response 201 (application/json)

  Created successfully. Response is same as `GET /v1/kv`.
