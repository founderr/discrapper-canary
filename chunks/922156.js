var s, i, l, a, r = n(442837),
  o = n(570140),
  c = n(186901);
let u = null,
  d = [c.ff.REDISTRIBUTABLE_INSTALL_FAILED, c.ff.POST_INSTALL_FAILED, c.ff.POST_INSTALL_CANCELLED],
  E = [c.ff.APPLICATION_NOT_FOUND, c.ff.APPLICATION_LOAD_FAILED, c.ff.INTERRUPTED, c.ff.DESERIALIZATION_FAILED];
class _ extends(a = r.ZP.Store) {
  getLastError() {
    return u
  }
}
l = "DispatchApplicationErrorStore", (i = "displayName") in(s = _) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new _(o.Z, {
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    null != u && null != u.code && d.includes(u.code) && (u = null)
  },
  DISPATCH_APPLICATION_ERROR: function(e) {
    let {
      error: t
    } = e;
    u = null != t.code && E.includes(t.code) ? null : t
  }
})