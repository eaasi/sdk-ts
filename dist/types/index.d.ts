import createClient from "openapi-fetch";
import type { Client, ClientOptions } from "openapi-fetch";
import type { paths as ApiV1alpha } from "./api/v1alpha.ts";
/** Create new client for EAASI API v1alpha */
export declare function createClientV1alpha(options: ClientOptions): Client<ApiV1alpha>;
export * as v1alpha from "./api/v1alpha.ts";
export * from "openapi-fetch";
export default createClient;
//# sourceMappingURL=index.d.ts.map