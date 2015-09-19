'use strict'

var test = require('tape')
var Observ = require('observ')
var increment = require('./')

test(function (t) {
  var observable = Observ(0)
  increment(observable)
  t.equal(observable(), 1)
  increment(observable, 5)
  t.equal(observable(), 6)
  t.end()
})
