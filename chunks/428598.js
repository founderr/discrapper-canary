let n;
i(47120);
var r,
    s = i(442837),
    o = i(570140),
    a = i(699516),
    l = i(496232);
function c(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
let u = !1,
    d = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    p = { ...d };
function h() {
    n = new Map(p.userAffinities.filter((e) => !a.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class b extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.Z), null != e && ((p.userAffinities = e.userAffinities), (p.lastFetched = e.lastFetched), h()), this.syncWith([a.Z], h);
    }
    shouldFetch() {
        if (!u) return Date.now() - p.lastFetched > l.K;
    }
    isFetching() {
        return u;
    }
    getUserAffinities() {
        return p.userAffinities;
    }
    getUserAffinity(e) {
        return n.get(e);
    }
    getState() {
        return p;
    }
}
c(b, 'displayName', 'UserAffinitiesStoreV2'),
    c(b, 'persistKey', 'UserAffinitiesStoreV2'),
    (t.Z = new b(o.Z, {
        LOAD_USER_AFFINITIES_V2: function () {
            u = !0;
        },
        LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (p.lastFetched = Date.now()), (u = !1), (p.userAffinities = t), h();
        },
        LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            u = !1;
        },
        LOGOUT: function () {
            (p = { ...d }), (n = new Map()), (u = !1);
        }
    }));
