"use strict";
var r = n("37549"),
  i = n("812095"),
  o = r("%TypeError%"),
  s = n("81109"),
  a = r("%Reflect.apply%", !0) || i("Function.prototype.apply");
e.exports = function(e, t) {
  var n = arguments.length > 2 ? arguments[2] : [];
  if (!s(n)) throw new o("Assertion failed: optional `argumentsList`, if provided, must be a List");
  return a(e, t, n)
}