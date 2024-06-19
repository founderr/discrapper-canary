n.d(t, {
  N: function() {
    return i
  }
}), n(47120);
var i, l, a, s, o, r, u = n(442837),
  c = n(570140),
  d = n(55563),
  C = n(551428);
let p = new Map,
  I = new Map;
(a = i || (i = {}))[a.NONE = 0] = "NONE", a[a.FETCHING = 1] = "FETCHING", a[a.FETCHED = 2] = "FETCHED", a[a.FAILED = 3] = "FAILED";
let T = {
  subscriptions: [],
  otps: []
};
class h extends(l = u.ZP.Store) {
  initialize() {
    this.waitFor(d.Z, C.Z)
  }
  hasStorefront(e) {
    return p.has(e)
  }
  getStoreLayout(e) {
    var t;
    return null !== (t = p.get(e)) && void 0 !== t ? t : T
  }
  getFetchStatus(e) {
    var t;
    return p.has(e) ? 2 : null !== (t = I.get(e)) && void 0 !== t ? t : 0
  }
}
r = "ApplicationStoreDirectoryStore", (o = "displayName") in(s = h) ? Object.defineProperty(s, o, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = r, t.Z = new h(c.Z, {
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      listings: n
    } = e;
    p.set(t, n), I.delete(t)
  },
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function(e) {
    let {
      applicationId: t
    } = e;
    I.set(t, 3)
  },
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function(e) {
    let {
      applicationId: t
    } = e;
    I.set(t, 1)
  }
})