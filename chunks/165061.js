"use strict";
n.r(t);
var r = n("110592");
t.default = function(e, t) {
  var n = (0, r.default)(this, e),
    i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this
}