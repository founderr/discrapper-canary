"use strict";
n.r(t);
var r = n("675717"),
  i = n("880051"),
  a = n("597188"),
  o = Object.prototype.hasOwnProperty;
t.default = function(e) {
  if (!(0, r.default)(e)) return (0, a.default)(e);
  var t = (0, i.default)(e),
    n = [];
  for (var s in e) !("constructor" == s && (t || !o.call(e, s))) && n.push(s);
  return n
}