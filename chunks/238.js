"use strict";
n.r(t);
var i, l, a, r, s = n("442837"),
  o = n("570140"),
  u = n("55563"),
  d = n("551428");
let c = {},
  p = {
    subscriptions: [],
    otps: []
  };
class f extends(r = s.default.Store) {
  initialize() {
    this.waitFor(u.default, d.default)
  }
  hasStorefront(e) {
    return !!c[e]
  }
  getStoreLayout(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t ? t : p
  }
}
a = "ApplicationStoreDirectoryStore", (l = "displayName") in(i = f) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, t.default = new f(o.default, {
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      listings: n
    } = e;
    c[t] = n
  }
})