# TypeScript SDK for EAASI

This repository contains the TypeScript SDK for the EAASI platform, auto-generated from the [EAASI API specification](https://github.com/eaasi/api-specs).

## Installation

Add this package as a dependency to your project:

```console
$ npm install --save "github:eaasi/sdk-ts#<version>"
```

It is highly recommended to enable the following TypeScript compiler option in your `tsconfig.json`
(refer to the upstream [docs](https://openapi-ts.dev/advanced#enable-nouncheckedindexedaccess-in-tsconfig) for more details):

```json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true
  }
}
```

## Getting Started

This SDK uses the type-safe [`openapi-fetch`](https://openapi-ts.dev/openapi-fetch) client that is configured to pull in the OpenAPI schema for the EAASI API.
More information about how that works can be found in the upstream [documentation](https://openapi-ts.dev/openapi-fetch/#basic-usage).

### Basic Usage

```ts
import { createClientV1alpha } from "@eaasi/sdk-ts";

const client = createClientV1alpha({ baseUrl: "http://localhost:8080/api/v1alpha" });

const {
  data, // only present if 2XX response
  error, // only present if 4XX or 5XX response
} = await client.GET("/admin/build-info");

if (!error) {
  console.log("Build version: " + data.version);
}
```

## License

This SDK is distributed under the terms of the [Apache-2.0](./LICENSE) license.

Copyright (c) 2025 Yale University (unless otherwise noted).
