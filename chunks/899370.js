var s, r, i, a, o = n(973361),
  l = n(442837),
  c = n(570140),
  u = n(358085),
  d = n(723359);
let h = null,
  E = "underage";
class _ extends(a = l.ZP.Store) {
  isUnderageAnonymous() {
    if (u.isPlatformEmbedded) {
      if (null != h && h + d.k0 > Date.now()) return !0
    } else return null != o.parse(document.cookie)[E];
    return !1
  }
}
i = "AgeGateStore", (r = "displayName") in(s = _) ? Object.defineProperty(s, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = i, t.Z = new _(c.Z, {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
    h = Date.now();
    document.cookie = "".concat(E, "=1;path=/")
  },
  LOGIN_SUCCESS: function() {
    h = null;
    document.cookie = "".concat(E, "=1;path=/;max-age=0")
  }
})