"use strict";
n.r(t);
var s, l, a, i, r = n("442837"),
  o = n("570140"),
  u = n("70956"),
  d = n("709054"),
  c = n("314897"),
  f = n("699516");
let E = 180 * u.default.Millis.DAY,
  _ = !1;
class m extends(i = r.default.Store) {
  initialize() {
    this.waitFor(f.default, c.default)
  }
  isEligible() {
    return _
  }
}
a = "PremiumPromoStore", (l = "displayName") in(s = m) ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a, t.default = new m(o.default, {
  CONNECTION_OPEN: function() {
    return _ !== (_ = f.default.getFriendIDs().length >= 10 && d.default.extractTimestamp(c.default.getId()) < Date.now() - E)
  }
})