/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

import Complex128 = require( '@stdlib/complex-float64-ctor' );
import Complex64 = require( '@stdlib/complex-float32-ctor' );

type Complex = Complex128 | Complex64;
type DataType = 'float64' | 'float32';

/**
* Creates a complex number.
*
* @param real - real component
* @param imag - imaginary component
* @param dtype - data type (default: 'float64')
* @returns complex number
*
* @example
* var z = complex( 5.0, 3.0, 'float64' );
* // returns <Complex128>
*/
declare function complex( real: number, imag: number, dtype?: DataType ): Complex;


// EXPORTS //

export = complex;
