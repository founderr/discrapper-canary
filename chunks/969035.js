"use strict";
var r = n("37549")("%TypeError%"),
  i = n("300344"),
  o = n("195893"),
  s = n("865435");
e.exports = function(e, t, n) {
  if ("Object" !== s(e)) throw new r("Assertion failed: Type(O) is not Object");
  if (!i(t)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
  return o(e, t, {
    "[[Configurable]]": !0,
    "[[Enumerable]]": !0,
    "[[Value]]": n,
    "[[Writable]]": !0
  })
}