"use strict";
n.r(t);
var r = n("132889"),
  i = n("917173"),
  a = n("44661"),
  o = n("331653"),
  s = n("165061");

function u(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1])
  }
}
u.prototype.clear = r.default, u.prototype.delete = i.default, u.prototype.get = a.default, u.prototype.has = o.default, u.prototype.set = s.default, t.default = u