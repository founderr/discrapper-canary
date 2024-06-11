"use strict";
n.r(t);
var r = n("548015"),
  i = n("463619"),
  a = n("286134"),
  o = r.default ? r.default.toStringTag : void 0;
t.default = function(e) {
  return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? (0, i.default)(e) : (0, a.default)(e)
}