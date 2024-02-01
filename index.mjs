// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@v0.1.1-esm/index.mjs";var s={float64:e,float32:r};function n(e,r,n){var i;if(arguments.length>2){if(i=s[n])return new i(e,r);throw new TypeError(t("invalid argument. Must provide a recognized data type. Value: `%s`.",n))}return new s.float64(e,r)}export{n as default};
//# sourceMappingURL=index.mjs.map
