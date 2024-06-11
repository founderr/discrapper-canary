"use strict";
n.r(t);
var r = n("790215");
t.default = function(e, t) {
  var n = this.__data__,
    i = (0, r.default)(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
}