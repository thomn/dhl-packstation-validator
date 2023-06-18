# DHL Packstation validator
This package has been created to validate DHL packstation addresses and implement the DHL standards as defined per
DHL barcode standards version 3.1.

## Dependencies / Compatibility
* ES2015 import/export syntax is being used. The package comes with a `.babelrc` with a `transform-es2015-modules-commonjs` plugin definition.
* [String.padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) is being used. Please make sure you have the necessary polyfills if you want to support browsers which do not provide `String.padStart`.

## Installation
The package is hosted on [npm](https://www.npmjs.com/package/dhl-packstation-validator). You can install it via npm or yarn:
```bash
npm i --save dhl-packstation-validator
``` 

## Usage
### Postnummer Validation
To validate a postnummer string, you can call the static method `Postnummer.isValid(postnummer)`. It will validate
the given postnummer based on its format and the check digit and return the result as `boolean`.
