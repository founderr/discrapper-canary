"use strict";
var r = n("37549"),
  i = r("%Number%"),
  o = r("%RegExp%"),
  s = r("%TypeError%"),
  a = r("%parseInt%"),
  c = n("812095"),
  u = n("998645"),
  l = c("String.prototype.slice"),
  d = u(/^0b[01]+$/i),
  f = u(/^0o[0-7]+$/i),
  p = u(/^[-+]0x[0-9a-f]+$/i),
  h = u(new o("[\x85​￾]", "g")),
  v = n("418348"),
  g = n("865435");
e.exports = function e(t) {
  if ("String" !== g(t)) throw new s("Assertion failed: `argument` is not a String");
  if (d(t)) return i(a(l(t, 2), 2));
  if (f(t)) return i(a(l(t, 2), 8));
  if (h(t) || p(t)) return NaN;
  var n = v(t);
  return n !== t ? e(n) : i(t)
}