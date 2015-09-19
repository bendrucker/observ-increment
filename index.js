'use strict'

var assertObserv = require('assert-observ')
var assert = require('assert-ok')

module.exports = function observIncrement (observable, increment) {
  assertObserv(observable)
  if (increment == null) increment = 1
  assert(typeof increment === 'number', 'expected number increment')

  observable.set(observable() + increment)
}
