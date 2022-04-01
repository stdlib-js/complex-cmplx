// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs";var s=t,n={float64:e,float32:r};var i=function(t,e,r){var i;if(arguments.length>2){if(i=n[r])return new i(t,e);throw new TypeError(s("invalid argument. Must provide a recognized data type. Value: `%s`.",r))}return new n.float64(t,e)};export{i as default};
//# sourceMappingURL=index.mjs.map
