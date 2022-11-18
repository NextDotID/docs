---
id: as-intro
title: Introduction
sidebar_position: 1
---

`AuthService` is a self-hosted service that provides authentication and authorization for web app/dApp.

## Getting Started

**Pre-requisites**:

- A [subkey](#subkey) signed by your Avatar.
- [OAuth Apps](#oauth-apps) applied for your Auth Service to verify your identity.
- A *server* that your devices could access. Note that you don't really need a VPS, but an `IP:PORT` that browsers could redirect you to.

We're using Docker to simplify deployment. You can also run it without Docker, but you'll need to compile the binary yourself.

### Subkey {#subkey}

Subkey is a key pair signed by your Avatar. It is meant to be used for authentication purposes without saving your primary Avatar key pair on server, which is a dangerous action. Now we support **Secp256k1** key pair *only*, but more curves will be supported in the future.

Run the following command with [generate_subkey.py](https://github.com/nextdotid/auth_server/blob/develop/build/generate_subkey.py) to generate a new subkey and sign it with your Avatar private key:

```bash
pip install base58 eth_keys # skip if installed
python ./build/generate_subkey.py
```

Subkey is randomly generated so that you can regenerate and use a new subkey at any time.

### OAuth Apps {#oauth-apps}

Currently supported OAuth apps:

- [Discord](https://discord.com/developers/)
- [Twitter](https://developer.twitter.com/en/portal/dashboard)
- [GitHub](https://github.com/settings/developers)

Take **Discord** as an example, you need to apply for an OAuth App to get a `CLIENT_ID` and `CLIENT_SECRET`. You can find the guide [here](https://discord.com/developers/docs/topics/oauth2).

**Callback URL**/**Redirect URL** is the URL that your browser will be redirected to in order to continue AuthService authentication process. It should be your AuthServer's address, suffixed with `/signin-${platform}`, e.g. `https://localhost:5050/signin-discord`.

### Configuration

Once you have your subkey signed and OAuth applications, you can start to configure your AuthServer.

Configure `appsettings.Production.json` with your secrets as following:

```js
{
  "Avatars": [
    {
      "Avatar": "0x1145141919810...",
      "Subkey": {
        "PrivateKey": "0xbadbadbad...",
        "CertificationSignature": "aBcDEFGHij123456..."
      }
    }
  ],
  "Discord": {
    "ClientID": "123456789012345678",
    "ClientSecret": "123456789012345678"
  },
  "Twitter": {
    "ClientID": "aBcDEFG...",
    "ClientSecret": "Hij123456..."
  }
  // ...
}
```

Note that AuthServer supports multiple Avatars, so you can add more Avatars to the `Avatars` array.

### Deployment

Firstly, you need to build the Docker image:

```bash
docker build -t authserver -f ./src/AuthServer.Server/Dockerfile .
```

Run the following command to run it once, replace `/path/to/appsettings.Production.json` with your own configuration file path.

```bash
docker run --rm -p 80:80 -v /path/to/appsettings.Production.json:/app/appsettings.Production.json authserver
```