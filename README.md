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

## License

This SDK is distributed under the terms of the [Apache-2.0](./LICENSE) license.

Copyright (c) 2025 Yale University (unless otherwise noted).
