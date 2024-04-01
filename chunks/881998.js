"use strict";
n.r(t);
var s, l, a, i, r = n("442837"),
  o = n("570140"),
  u = n("592125"),
  d = n("757266"),
  c = n("375954");
let E = null;
class f extends(i = r.default.Store) {
  initialize() {
    this.waitFor(u.default, d.default, c.default)
  }
  getApps() {
    return E
  }
}
a = "AuthorizedAppsStore", (l = "displayName") in(s = f) ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a, t.default = new f(o.default, {
  USER_AUTHORIZED_APPS_UPDATE: function(e) {
    E = e.apps
  }
})