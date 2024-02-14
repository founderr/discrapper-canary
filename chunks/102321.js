"use strict";

function n(t) {
  return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  })(t)
}
e("222007");
t.exports = function(t) {
  return null !== t && "object" === n(t)
}