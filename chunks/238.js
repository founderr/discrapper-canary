n.d(t, {
    N: function () {
        return r;
    }
});
var r,
    i,
    a = n(47120);
var o = n(442837),
    s = n(570140),
    l = n(331065),
    u = n(55563),
    c = n(551428);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = new Map(),
    E = new Map();
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.FAILED = 3)] = 'FAILED');
})(r || (r = {}));
let f = new l.Z({
    subscriptions: [],
    otps: []
});
function h(e) {
    let { applicationId: t, layout: n } = e;
    _.set(t, l.Z.createFromServer(n)), E.delete(t);
}
function p(e) {
    let { applicationId: t } = e;
    E.set(t, 3);
}
function m(e) {
    let { applicationId: t } = e;
    E.set(t, 1);
}
class I extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.Z);
    }
    hasStorefront(e) {
        return _.has(e);
    }
    getStoreLayout(e) {
        var t;
        return null !== (t = _.get(e)) && void 0 !== t ? t : f;
    }
    getFetchStatus(e) {
        var t;
        return _.has(e) ? 2 : null !== (t = E.get(e)) && void 0 !== t ? t : 0;
    }
}
d(I, 'displayName', 'ApplicationStoreDirectoryStore'),
    (t.Z = new I(s.Z, {
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: h,
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: p,
        APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: m
    }));
