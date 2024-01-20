"use strict";
var r = n("37549"),
  i = r("%String%"),
  o = r("%TypeError%");
e.exports = function(e) {
  if ("symbol" == typeof e) throw new o("Cannot convert a Symbol value to a string");
  return i(e)
}