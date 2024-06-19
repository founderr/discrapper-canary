var s, i, l, a, r = n(442837),
  o = n(570140),
  c = n(592125),
  u = n(757266),
  d = n(375954);
let E = null;
class _ extends(a = r.ZP.Store) {
  initialize() {
    this.waitFor(c.Z, u.Z, d.Z)
  }
  getApps() {
    return E
  }
}
l = "AuthorizedAppsStore", (i = "displayName") in(s = _) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new _(o.Z, {
  USER_AUTHORIZED_APPS_UPDATE: function(e) {
    E = e.apps
  }
})