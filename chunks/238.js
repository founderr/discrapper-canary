"use strict";
i.r(t), i.d(t, {
  ApplicationStoreDirectoryFetchStatus: function() {
    return n
  }
}), i("47120");
var n, l, a, s, o, r, u = i("442837"),
  c = i("570140"),
  d = i("55563"),
  p = i("551428");
let C = new Map,
  f = new Map;
(a = n || (n = {}))[a.NONE = 0] = "NONE", a[a.FETCHING = 1] = "FETCHING", a[a.FETCHED = 2] = "FETCHED", a[a.FAILED = 3] = "FAILED";
let S = {
  subscriptions: [],
  otps: []
};
class h extends(l = u.default.Store) {
  initialize() {
    this.waitFor(d.default, p.default)
  }
  hasStorefront(e) {
    return C.has(e)
  }
  getStoreLayout(e) {
    var t;
    return null !== (t = C.get(e)) && void 0 !== t ? t : S
  }
  getFetchStatus(e) {
    var t;
    return C.has(e) ? 2 : null !== (t = f.get(e)) && void 0 !== t ? t : 0
  }
}
r = "ApplicationStoreDirectoryStore", (o = "displayName") in(s = h) ? Object.defineProperty(s, o, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = r, t.default = new h(c.default, {
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      listings: i
    } = e;
    C.set(t, i), f.delete(t)
  },
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function(e) {
    let {
      applicationId: t
    } = e;
    f.set(t, 3)
  },
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function(e) {
    let {
      applicationId: t
    } = e;
    f.set(t, 1)
  }
})