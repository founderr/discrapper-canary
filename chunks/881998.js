var r, o, s, a, u = n(442837),
  i = n(570140),
  c = n(592125),
  l = n(757266),
  d = n(375954);
let f = null;
class E extends(a = u.ZP.Store) {
  initialize() {
this.waitFor(c.Z, l.Z, d.Z);
  }
  getApps() {
return f;
  }
}
s = 'AuthorizedAppsStore', (o = 'displayName') in(r = E) ? Object.defineProperty(r, o, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = s, t.Z = new E(i.Z, {
  USER_AUTHORIZED_APPS_UPDATE: function(e) {
f = e.apps;
  }
});