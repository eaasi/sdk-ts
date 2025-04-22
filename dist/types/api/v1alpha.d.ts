export type paths = {
    "/admin/build-info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Fetch server build information */
        get: operations["AdminService_GetBuildInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: {
        /** Server build information */
        "eaasi.admin.v1alpha.BuildInfo": {
            /** Git branch the server was built from */
            branch?: string;
            /** Git commit of the server build */
            commit?: string;
            /** Version tag of the server build */
            version?: string;
        };
        "google.protobuf.Any": {
            "@type"?: string;
        } & {
            [key: string]: unknown;
        };
        "google.rpc.Status": {
            /** Format: int32 */
            code?: number;
            details?: components["schemas"]["google.protobuf.Any"][];
            message?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type BuildInfo = components['schemas']['eaasi.admin.v1alpha.BuildInfo'];
export type ProtobufAny = components['schemas']['google.protobuf.Any'];
export type RpcStatus = components['schemas']['google.rpc.Status'];
export type $defs = Record<string, never>;
export interface operations {
    AdminService_GetBuildInfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["eaasi.admin.v1alpha.BuildInfo"];
                };
            };
            /** @description An unexpected error response. */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["google.rpc.Status"];
                };
            };
        };
    };
}
export declare enum ApiPaths {
    AdminService_GetBuildInfo = "/admin/build-info"
}
//# sourceMappingURL=v1alpha.d.ts.map