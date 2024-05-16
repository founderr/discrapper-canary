"use strict";
n.r(t);
var i, l, r, a, s = n("442837"),
  o = n("570140"),
  u = n("55563"),
  d = n("551428");
let c = {},
  f = {
    subscriptions: [],
    otps: []
  };
class p extends(a = s.default.Store) {
  initialize() {
    this.waitFor(u.default, d.default)
  }
  hasStorefront(e) {
    return !!c[e]
  }
  getStoreLayout(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t ? t : f
  }
}
r = "ApplicationStoreDirectoryStore", (l = "displayName") in(i = p) ? Object.defineProperty(i, l, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = r, t.default = new p(o.default, {
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      listings: n
    } = e;
    c[t] = n
  }
})