"use strict";
i.r(t);
var n, l, s, a, r = i("442837"),
  o = i("570140"),
  d = i("55563"),
  u = i("551428");
let c = {},
  p = {
    subscriptions: [],
    otps: []
  };
class f extends(a = r.default.Store) {
  initialize() {
    this.waitFor(d.default, u.default)
  }
  hasStorefront(e) {
    return !!c[e]
  }
  getStoreLayout(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t ? t : p
  }
}
s = "ApplicationStoreDirectoryStore", (l = "displayName") in(n = f) ? Object.defineProperty(n, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[l] = s, t.default = new f(o.default, {
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      listings: i
    } = e;
    c[t] = i
  }
})