/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var randu = require( '@stdlib/random-iter-randu' );
var iterLength = require( './../lib' );

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
	'iter': 100
};
var iter = randu( opts );

// Determine the iterator length:
var len = iterLength( iter );
// returns 100

console.log( len );
