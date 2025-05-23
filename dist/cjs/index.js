"use strict";
// SPDX-FileCopyrightText: 2025 Yale University
// SPDX-License-Identifier: Apache-2.0
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1alpha = void 0;
exports.createClientV1alpha = createClientV1alpha;
// Code is generated by the EAASI SDK-Generator:
// https://github.com/eaasi/sdk-generator
// DO NOT EDIT THIS FILE MANUALLY!
const openapi_fetch_1 = require("openapi-fetch");
/** Create new client for EAASI API v1alpha */
function createClientV1alpha(options) {
    return (0, openapi_fetch_1.default)(options);
}
// Re-export everything for advanced use-cases!
exports.v1alpha = require("./api/v1alpha.js");
__exportStar(require("openapi-fetch"), exports);
exports.default = openapi_fetch_1.default;
