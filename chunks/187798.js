"use strict";
var n = r("149384")(),
  o = r("314970")("Object.prototype.toString"),
  i = function(t) {
    return (!n || !t || "object" != typeof t || !(Symbol.toStringTag in t)) && "[object Arguments]" === o(t)
  },
  a = function(t) {
    return !!i(t) || null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Array]" !== o(t) && "[object Function]" === o(t.callee)
  },
  u = function() {
    return i(arguments)
  }();
i.isLegacyArguments = a, t.exports = u ? i : a