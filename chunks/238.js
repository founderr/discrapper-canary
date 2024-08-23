t.d(n, {
    N: function () {
        return i;
    }
}),
    t(47120);
var i,
    a,
    r,
    o,
    s,
    l,
    c = t(442837),
    d = t(570140),
    u = t(331065),
    _ = t(55563),
    p = t(551428);
let m = new Map(),
    I = new Map();
((r = i || (i = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED'), (r[(r.FAILED = 3)] = 'FAILED');
let f = new u.Z({
    subscriptions: [],
    otps: []
});
class g extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, p.Z);
    }
    hasStorefront(e) {
        return m.has(e);
    }
    getStoreLayout(e) {
        var n;
        return null !== (n = m.get(e)) && void 0 !== n ? n : f;
    }
    getFetchStatus(e) {
        var n;
        return m.has(e) ? 2 : null !== (n = I.get(e)) && void 0 !== n ? n : 0;
    }
}
(l = 'ApplicationStoreDirectoryStore'),
    (s = 'displayName') in (o = g)
        ? Object.defineProperty(o, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[s] = l),
    (n.Z = new g(d.Z, {
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function (e) {
            let { applicationId: n, layout: t } = e;
            m.set(n, u.Z.createFromServer(t)), I.delete(n);
        },
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function (e) {
            let { applicationId: n } = e;
            I.set(n, 3);
        },
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function (e) {
            let { applicationId: n } = e;
            I.set(n, 1);
        }
    }));
