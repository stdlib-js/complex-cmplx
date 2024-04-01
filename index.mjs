// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@v0.2.1-esm/index.mjs";var o={float64:e,float32:r};function s(e,r,s){var n;if(arguments.length>2){if(n=o[s])return new n(e,r);throw new TypeError(t("0Gd2Y",s))}return new o.float64(e,r)}export{s as default};
//# sourceMappingURL=index.mjs.map
