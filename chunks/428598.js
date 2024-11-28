n(47120);
var i,
    r = n(442837),
    o = n(570140),
    a = n(699516),
    l = n(496232);
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
let u = new Map(),
    c = !1,
    f = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    s = { ...f };
function _() {
    u = new Map(s.userAffinities.filter((e) => !a.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class h extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.Z), null != e && ((s.userAffinities = e.userAffinities), (s.lastFetched = e.lastFetched), _()), this.syncWith([a.Z], _);
    }
    shouldFetch() {
        if (!c) return Date.now() - s.lastFetched > l.K;
    }
    isFetching() {
        return c;
    }
    getUserAffinities() {
        return s.userAffinities;
    }
    getUserAffinitiesMap() {
        return u;
    }
    compare(e, t) {
        var n, i, r, o;
        return (null !== (r = null === (n = u.get(t)) || void 0 === n ? void 0 : n.communicationProbability) && void 0 !== r ? r : 0) - (null !== (o = null === (i = u.get(e)) || void 0 === i ? void 0 : i.communicationProbability) && void 0 !== o ? o : 0);
    }
    getUserAffinity(e) {
        return u.get(e);
    }
    getState() {
        return s;
    }
}
d(h, 'displayName', 'UserAffinitiesStoreV2'),
    d(h, 'persistKey', 'UserAffinitiesStoreV2'),
    (t.Z = new h(o.Z, {
        LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
        },
        LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (s.lastFetched = Date.now()), (c = !1), (s.userAffinities = t), _();
        },
        LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
        },
        LOGOUT: function () {
            (s = { ...f }), (u = new Map()), (c = !1);
        }
    }));
