var r, s, i, a, o = n(973361),
  l = n(442837),
  c = n(570140),
  u = n(358085),
  d = n(723359);
let h = null,
  _ = "underage";
class p extends(a = l.ZP.Store) {
  isUnderageAnonymous() {
    if (u.isPlatformEmbedded) {
      if (null != h && h + d.k0 > Date.now()) return !0
    } else return null != o.parse(document.cookie)[_];
    return !1
  }
}
i = "AgeGateStore", (s = "displayName") in(r = p) ? Object.defineProperty(r, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = i, t.Z = new p(c.Z, {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
    h = Date.now();
    document.cookie = "".concat(_, "=1;path=/")
  },
  LOGIN_SUCCESS: function() {
    h = null;
    document.cookie = "".concat(_, "=1;path=/;max-age=0")
  }
})