# FAQs

## **How Do I Generate an [Avatar](https://docs.next.id/proof-service/ps-glossary#glossary-avatar)?**

As explained in our **[glossary](https://docs.next.id/proof-service/ps-glossary#glossary-avatar)**, an Avatar is technically equivalent to an Ethereum wallet. Both use the **`secp256k1`** elliptic curve for their asymmetric key pairs.

To generate and manage an Avatar, you can follow the same procedures as you would for generating and managing Ethereum wallets. Look for an **`secp256k1`** SDK compatible with your project's programming language.

### **Key Specifications:**

- **Secret Key**: Should be 32 bytes in length.
- **Public Key**: Comes in two formats:
    - **Uncompressed**: 65 bytes, starts with **`0x04`**.
    - **Compressed**: 33 bytes, starts with either **`0x02`** or **`0x03`** (most commonly **`0x02`**).

## **How Do I Resolve a "Bad Signature" Error in POST /v1/proof?**

If you encounter a "bad signature" error during a POST request to **`/v1/proof`**, consider the following troubleshooting steps:

### **1. Validate `created_at` and `uuid`**

Ensure that the **`created_at`** and **`uuid`** parameters in your POST request match those returned by the **`/v1/proof/payload`** endpoint.

### **2. Use Ethereum Personal Sign**

Confirm you are using the Ethereum Personal Sign method for signature generation, as this is required for successful API validation.

### **3. Verify Wallet SDK and RPC Method**

If your DApp employs a wallet SDK (e.g., MetaMask), ensure you are using the correct RPC method for signature generation.

## **How Can I Contribute to ProofService and What Platforms Are Supported?**

We welcome contributions from various platforms, provided they meet the following criteria:

### **1. User-Specified Content Posting**

The identity on the target platform must have the capability to post content as specified by the user.

### **2. Public Readability**

Once posted, the content should be publicly accessible and readable by anyone—be it a human or a program—at any time.

### **3. Signature Encoding and Extraction**

The platform must support a mechanism to both encode a signature into the content and extract it later.

### **4. Content-Type Considerations**

The extraction mechanism may vary depending on the type of content. For instance, if the platform only supports image-based posts, you'll need to develop a method to encode the signature into the image and ensure it can be extracted later.

## **How Do I Resolve a "Public Key Mismatch" Error in POST /v1/kv?**

Verify **`dataToSign.length`.** Ensure that the length of the **`dataToSign`** parameter in your request matches the expected length as specified in the API documentation or previous steps.

## **Is KVService Dependent on an Existing Persona or Binding on ProofService?**

No, KVService does not require an existing Persona or binding on ProofService. You can use KVService as a storage solution for any **`secp256k1`** key pair by setting the platform to **`nextid`** and the identity to your public key (**`0xPUBLIC_KEY`**), without any dependency on ProofService.

### **Recommended Use Case**

However, we recommend specifying the platform and identity for more precise storage for data associated with specific accounts. For example, if your DApp allows users to set different NFT avatars for Twitter and GitHub, it's advisable to specify the platform and identity rather than using a generic public key.

## **Is RelationService Connected to Blockchain, Contracts, or NFTs?**

### **Partially, Yes and No**

**Yes**: RelationService does collect relationships between "on-chain assets" and "Ethereum identities."

**No**: Unlike ENS or Lens, which are based on NFTs on specific blockchains, RelationService is not a relation provider.

### **Role Clarification**

RelationService serves as a relation aggregator and does not create new relationships. Consequently, we do no need to issue any "token-like" entities.

## **Should I Use the "Official" Instance of RelationService in My Production Environment?**

### **For Initial Exploration**

Our official server is an excellent starting point for exploring the capabilities of RelationService.

### **For Long-Term Use**

However, as your dependency on this service grows, we recommend hosting your own instance for the following reasons:

- **Statelessness**: RelationService is designed to be stateless, offering flexibility in deployment.
- **Smooth Migration**: Database migrations between different versions are designed to be smooth and hassle-free.