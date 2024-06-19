var s, i, l, a, r = n(442837),
  o = n(570140),
  c = n(70956),
  u = n(709054),
  d = n(314897),
  E = n(699516);
let _ = 180 * c.Z.Millis.DAY,
  I = !1;
class T extends(a = r.ZP.Store) {
  initialize() {
    this.waitFor(E.Z, d.default)
  }
  isEligible() {
    return I
  }
}
l = "PremiumPromoStore", (i = "displayName") in(s = T) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new T(o.Z, {
  CONNECTION_OPEN: function() {
    return I !== (I = E.Z.getFriendIDs().length >= 10 && u.default.extractTimestamp(d.default.getId()) < Date.now() - _)
  }
})