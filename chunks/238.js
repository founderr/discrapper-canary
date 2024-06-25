t.d(n, {
  N: function() {
    return i
  }
}), t(47120);
var i, a, r, o, l, s, c = t(442837),
  d = t(570140),
  u = t(55563),
  _ = t(551428);
let p = new Map,
  m = new Map;
(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.FAILED = 3] = "FAILED";
let I = {
  subscriptions: [],
  otps: []
};
class f extends(a = c.ZP.Store) {
  initialize() {
    this.waitFor(u.Z, _.Z)
  }
  hasStorefront(e) {
    return p.has(e)
  }
  getStoreLayout(e) {
    var n;
    return null !== (n = p.get(e)) && void 0 !== n ? n : I
  }
  getFetchStatus(e) {
    var n;
    return p.has(e) ? 2 : null !== (n = m.get(e)) && void 0 !== n ? n : 0
  }
}
s = "ApplicationStoreDirectoryStore", (l = "displayName") in(o = f) ? Object.defineProperty(o, l, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[l] = s, n.Z = new f(d.Z, {
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function(e) {
    let {
      applicationId: n,
      listings: t
    } = e;
    p.set(n, t), m.delete(n)
  },
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function(e) {
    let {
      applicationId: n
    } = e;
    m.set(n, 3)
  },
  APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function(e) {
    let {
      applicationId: n
    } = e;
    m.set(n, 1)
  }
})