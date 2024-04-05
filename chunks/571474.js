"use strict";
n.r(t);
var s, a, l, i, r = n("442837"),
  o = n("570140"),
  u = n("70956"),
  d = n("709054"),
  c = n("314897"),
  E = n("699516");
let f = 180 * u.default.Millis.DAY,
  _ = !1;
class T extends(i = r.default.Store) {
  initialize() {
    this.waitFor(E.default, c.default)
  }
  isEligible() {
    return _
  }
}
l = "PremiumPromoStore", (a = "displayName") in(s = T) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new T(o.default, {
  CONNECTION_OPEN: function() {
    return _ !== (_ = E.default.getFriendIDs().length >= 10 && d.default.extractTimestamp(c.default.getId()) < Date.now() - f)
  }
})