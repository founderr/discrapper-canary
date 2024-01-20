"use strict";
var r = n("37549"),
  i = n("178404"),
  o = r("%TypeError%");
e.exports = function(e) {
  if ("number" != typeof e && "bigint" != typeof e) throw new o("argument must be a Number or a BigInt");
  var t = e < 0 ? -i(-e) : i(e);
  return 0 === t ? 0 : t
}