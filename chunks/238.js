n.d(t, {
    N: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140),
    d = n(331065),
    f = n(55563),
    _ = n(551428);
let p = new Map(),
    h = new Map();
((a = r || (r = {}))[(a.NONE = 0)] = 'NONE'), (a[(a.FETCHING = 1)] = 'FETCHING'), (a[(a.FETCHED = 2)] = 'FETCHED'), (a[(a.FAILED = 3)] = 'FAILED');
let m = new d.Z({
    subscriptions: [],
    otps: []
});
class g extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, _.Z);
    }
    hasStorefront(e) {
        return p.has(e);
    }
    getStoreLayout(e) {
        var t;
        return null !== (t = p.get(e)) && void 0 !== t ? t : m;
    }
    getFetchStatus(e) {
        var t;
        return p.has(e) ? 2 : null !== (t = h.get(e)) && void 0 !== t ? t : 0;
    }
}
(l = 'ApplicationStoreDirectoryStore'),
    (o = 'displayName') in (s = g)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new g(c.Z, {
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function (e) {
            let { applicationId: t, layout: n } = e;
            p.set(t, d.Z.createFromServer(n)), h.delete(t);
        },
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function (e) {
            let { applicationId: t } = e;
            h.set(t, 3);
        },
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function (e) {
            let { applicationId: t } = e;
            h.set(t, 1);
        }
    }));
