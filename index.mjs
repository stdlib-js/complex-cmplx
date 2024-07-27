// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-ctors@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";var e={float64:"complex128",float32:"complex64"},o=t(e.float64);function s(s,n,l){var m;if(arguments.length>2){if(m=t(e[l]))return new m(s,n);throw new TypeError(r("0Gd2Y",l))}return new o(s,n)}export{s as default};
//# sourceMappingURL=index.mjs.map
