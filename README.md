<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterLength

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an [iterator][mdn-iterator-protocol]'s length.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/iter-length
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var iterLength = require( '@stdlib/iter-length' );
```

#### iterLength( iterator )

Consumes an entire [iterator][mdn-iterator-protocol] and returns the number of [iterated][mdn-iterator-protocol] values (i.e., the [iterator][mdn-iterator-protocol] length).

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ 0, 0, 0, 0, 1 ] );

var len = iterLength( arr );
// returns 5
```

If a provided [`iterator`][mdn-iterator-protocol] does not return any [iterated][mdn-iterator-protocol] values, the function returns `0`.

```javascript
var iterEmpty = require( '@stdlib/iter-empty' );

var len = iterLength( iterEmpty() );
// returns 0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-iter-randu' );
var iterLength = require( '@stdlib/iter-length' );

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
    'iter': 100
};
var iter = randu( opts );

// Determine the iterator length:
var len = iterLength( iter );
// returns 100
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter/counter`][@stdlib/iter/counter]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively returns the number of iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-length.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-length

[test-image]: https://github.com/stdlib-js/iter-length/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-length/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-length/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-length?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-length.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-length/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-length/tree/deno
[umd-url]: https://github.com/stdlib-js/iter-length/tree/umd
[esm-url]: https://github.com/stdlib-js/iter-length/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-length/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/counter]: https://github.com/stdlib-js/iter-counter

<!-- </related-links> -->

</section>

<!-- /.links -->
