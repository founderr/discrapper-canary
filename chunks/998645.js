"use strict";
var r = n("812095"),
  i = n("37549"),
  o = n("179056"),
  s = r("RegExp.prototype.exec"),
  a = i("%TypeError%");
e.exports = function(e) {
  if (!o(e)) throw new a("`regex` must be a RegExp");
  return function(t) {
    return null !== s(e, t)
  }
}