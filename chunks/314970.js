"use strict";
var n = r("911718"),
  o = r("214401"),
  i = o(n("String.prototype.indexOf"));
t.exports = function(t, e) {
  var r = n(t, !!e);
  return "function" == typeof r && i(t, ".prototype.") > -1 ? o(r) : r
}