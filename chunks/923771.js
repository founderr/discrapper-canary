"use strict";
var n = "undefined" != typeof Symbol && Symbol,
  o = r("391938");
t.exports = function() {
  return "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && o()
}