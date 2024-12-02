o(47120);
var r,
    n = o(442837),
    a = o(570140),
    i = o(699516),
    s = o(496232);
function d(e, t, o) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = o),
        e
    );
}
let l = new Map(),
    c = !1,
    u = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    f = { ...u };
function _() {
    l = new Map(f.userAffinities.filter((e) => !i.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class h extends (r = n.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(i.Z), null != e && ((f.userAffinities = e.userAffinities), (f.lastFetched = e.lastFetched), _()), this.syncWith([i.Z], _);
    }
    shouldFetch() {
        if (!c) return Date.now() - f.lastFetched > s.K;
    }
    isFetching() {
        return c;
    }
    getUserAffinities() {
        return f.userAffinities;
    }
    getUserAffinitiesMap() {
        return l;
    }
    compare(e, t) {
        var o, r, n, a;
        return (null !== (n = null === (o = l.get(t)) || void 0 === o ? void 0 : o.communicationProbability) && void 0 !== n ? n : 0) - (null !== (a = null === (r = l.get(e)) || void 0 === r ? void 0 : r.communicationProbability) && void 0 !== a ? a : 0);
    }
    getUserAffinity(e) {
        return l.get(e);
    }
    getState() {
        return f;
    }
}
d(h, 'displayName', 'UserAffinitiesStoreV2'),
    d(h, 'persistKey', 'UserAffinitiesStoreV2'),
    (t.Z = new h(a.Z, {
        LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
        },
        LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (f.lastFetched = Date.now()), (c = !1), (f.userAffinities = t), _();
        },
        LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
        },
        LOGOUT: function () {
            (f = { ...u }), (l = new Map()), (c = !1);
        }
    }));
