"use strict";
var r = n("37549"),
  i = r("%Math.abs%"),
  o = r("%Math.floor%"),
  s = n("303571"),
  a = n("979332");
e.exports = function(e) {
  if ("number" != typeof e || s(e) || !a(e)) return !1;
  var t = i(e);
  return o(t) === t
}