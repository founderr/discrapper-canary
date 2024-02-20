"use strict";
var n = {
    foo: {}
  },
  o = Object;
t.exports = function() {
  return ({
    __proto__: n
  }).foo === n.foo && !(({
    __proto__: null
  }) instanceof o)
}