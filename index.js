'use strict'

module.exports = function observIncrement (observable, increment) {
  if (increment == null) increment = 1
  observable.set(observable() + increment)
}
