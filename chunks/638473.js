"use strict";
n.r(t);
var r = n("809948"),
  i = n("670097");
t.default = function(e, t) {
  var n = -1,
    a = (0, i.default)(e) ? Array(e.length) : [];
  return (0, r.default)(e, function(e, r, i) {
    a[++n] = t(e, r, i)
  }), a
}