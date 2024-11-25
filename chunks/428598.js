let r;
n(47120);
var o,
    i = n(442837),
    a = n(570140),
    s = n(699516),
    l = n(496232);
function c(e, t, n) {
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
let d = !1,
    u = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    p = { ...u };
function f() {
    r = new Map(p.userAffinities.filter((e) => !s.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class h extends (o = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), null != e && ((p.userAffinities = e.userAffinities), (p.lastFetched = e.lastFetched), f()), this.syncWith([s.Z], f);
    }
    shouldFetch() {
        if (!d) return Date.now() - p.lastFetched > l.K;
    }
    isFetching() {
        return d;
    }
    getUserAffinities() {
        return p.userAffinities;
    }
    getUserAffinity(e) {
        return r.get(e);
    }
    getState() {
        return p;
    }
}
c(h, 'displayName', 'UserAffinitiesStoreV2'),
    c(h, 'persistKey', 'UserAffinitiesStoreV2'),
    (t.Z = new h(a.Z, {
        LOAD_USER_AFFINITIES_V2: function () {
            d = !0;
        },
        LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (p.lastFetched = Date.now()), (d = !1), (p.userAffinities = t), f();
        },
        LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            d = !1;
        },
        LOGOUT: function () {
            (p = { ...u }), (r = new Map()), (d = !1);
        }
    }));
