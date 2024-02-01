// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function e(e){var i;if(!t(e))throw new TypeError(r("invalid argument. Must provide an iterator. Value: `%s`.",e));for(i=0;;){if(e.next().done)return i;i+=1}}export{e as default};
//# sourceMappingURL=index.mjs.map
