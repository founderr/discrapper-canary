"use strict";
n.r(t);
var r = n("220272"),
  i = n("383390"),
  a = n("119685"),
  o = n("366930"),
  s = n("949793");

function u(e) {
  var t = -1,
    n = null == e ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1])
  }
}
u.prototype.clear = r.default, u.prototype.delete = i.default, u.prototype.get = a.default, u.prototype.has = o.default, u.prototype.set = s.default, t.default = u