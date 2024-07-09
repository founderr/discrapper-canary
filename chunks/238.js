n.d(t, {
    N: function () {
        return i;
    }
}), n(47120);
var i, a, s, r, l, o, c = n(442837), d = n(570140), u = n(55563), _ = n(551428);
let E = new Map(), m = new Map();
(s = i || (i = {}))[s.NONE = 0] = 'NONE', s[s.FETCHING = 1] = 'FETCHING', s[s.FETCHED = 2] = 'FETCHED', s[s.FAILED = 3] = 'FAILED';
let I = {
    subscriptions: [],
    otps: []
};
class T extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, _.Z);
    }
    hasStorefront(e) {
        return E.has(e);
    }
    getStoreLayout(e) {
        var t;
        return null !== (t = E.get(e)) && void 0 !== t ? t : I;
    }
    getFetchStatus(e) {
        var t;
        return E.has(e) ? 2 : null !== (t = m.get(e)) && void 0 !== t ? t : 0;
    }
}
o = 'ApplicationStoreDirectoryStore', (l = 'displayName') in (r = T) ? Object.defineProperty(r, l, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[l] = o, t.Z = new T(d.Z, {
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS: function (e) {
        let {
            applicationId: t,
            listings: n
        } = e;
        E.set(t, n), m.delete(t);
    },
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED: function (e) {
        let {applicationId: t} = e;
        m.set(t, 3);
    },
    APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING: function (e) {
        let {applicationId: t} = e;
        m.set(t, 1);
    }
});
