# observ-increment [![Build Status](https://travis-ci.org/bendrucker/observ-increment.svg?branch=master)](https://travis-ci.org/bendrucker/observ-increment) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/observ-increment.svg)](https://greenkeeper.io/)

> Increment an observable


## Install

```
$ npm install --save observ-increment
```


## Usage

```js
var increment = require('observ-increment')
var observable = require('observ')(0)
increment(observable)
observable()
//=> 1
```

## API

#### `increment(observable, [amount])` -> `undefined`

##### observable

*Required*  
Type: `function`

An [observable](https://github.com/raynos/observ).

##### amount

Type: `number`  
Default: `1`

The amount by which to increment the observable.


## License

MIT © [Ben Drucker](http://bendrucker.me)
