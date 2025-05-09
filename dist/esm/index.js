// SPDX-FileCopyrightText: 2025 Yale University
// SPDX-License-Identifier: Apache-2.0
// Code is generated by the EAASI SDK-Generator:
// https://github.com/eaasi/sdk-generator
// DO NOT EDIT THIS FILE MANUALLY!
import createClient from "openapi-fetch";
/** Create new client for EAASI API v1alpha */
export function createClientV1alpha(options) {
    return createClient(options);
}
// Re-export everything for advanced use-cases!
export * as v1alpha from "./api/v1alpha.js";
export * from "openapi-fetch";
export default createClient;
