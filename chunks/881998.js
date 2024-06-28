"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(592125),
  _ = n(757266),
  c = n(375954);
let d = null;
class E extends(o = a.ZP.Store) {
  initialize() {
    this.waitFor(u.Z, _.Z, c.Z)
  }
  getApps() {
    return d
  }
}
s = "AuthorizedAppsStore", (r = "displayName") in(i = E) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new E(l.Z, {
  USER_AUTHORIZED_APPS_UPDATE: function(e) {
    d = e.apps
  }
})