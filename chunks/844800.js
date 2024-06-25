var s, i, r, a, l = n(442837),
  o = n(570140);
let c = !1,
  u = null,
  d = null;
class _ extends(a = l.ZP.Store) {
  getState() {
    return {
      verifySuccess: c,
      verifyErrors: u,
      redirectGuildId: d
    }
  }
}
r = "HubEmailVerificationStore", (i = "displayName") in(s = _) ? Object.defineProperty(s, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = r, t.Z = new _(o.Z, {
  HUB_VERIFY_EMAIL_SUCCESS: function(e) {
    let {
      guildId: t
    } = e;
    c = !0, u = null, d = t
  },
  HUB_VERIFY_EMAIL_FAILURE: function(e) {
    let {
      errors: t
    } = e;
    c = !1, u = t
  }
})