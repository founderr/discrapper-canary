"use strict";
var r = n("149384")(),
  a = n("314970")("Object.prototype.toString"),
  o = function(e) {
    return (!r || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === a(e)
  },
  i = function(e) {
    return !!o(e) || null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== a(e) && "[object Function]" === a(e.callee)
  },
  s = function() {
    return o(arguments)
  }();
o.isLegacyArguments = i, e.exports = s ? o : i