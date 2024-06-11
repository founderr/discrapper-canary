"use strict";
n.r(t);
var r = n("593007"),
  i = n("382855"),
  a = n("675717"),
  o = n("526389"),
  s = /^\[object .+?Constructor\]$/,
  u = Object.prototype,
  c = Function.prototype.toString,
  l = u.hasOwnProperty,
  d = RegExp("^" + c.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
t.default = function(e) {
  return !(!(0, a.default)(e) || (0, i.default)(e)) && ((0, r.default)(e) ? d : s).test((0, o.default)(e))
}