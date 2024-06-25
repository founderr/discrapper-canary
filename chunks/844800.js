var s, r, i, l, a = n(442837),
  o = n(570140);
let u = !1,
  c = null,
  d = null;
class E extends(l = a.ZP.Store) {
  getState() {
    return {
      verifySuccess: u,
      verifyErrors: c,
      redirectGuildId: d
    }
  }
}
i = "HubEmailVerificationStore", (r = "displayName") in(s = E) ? Object.defineProperty(s, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = i, t.Z = new E(o.Z, {
  HUB_VERIFY_EMAIL_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    u = !0, c = null, d = t
  },
  HUB_VERIFY_EMAIL_FAILURE: function(e) {
    let {
      errors: t
    } = e;
    u = !1, c = t
  }
})