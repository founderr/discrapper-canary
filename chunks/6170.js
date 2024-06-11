"use strict";
n.r(t);
var r = n("583738"),
  i = n("508977"),
  a = n("678529");
t.default = function(e) {
  var t = (0, i.default)(e);
  return 1 == t.length && t[0][2] ? (0, a.default)(t[0][0], t[0][1]) : function(n) {
    return n === e || (0, r.default)(n, e, t)
  }
}