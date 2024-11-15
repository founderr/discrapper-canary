let o;
t(47120);
var n,
    a = t(442837),
    i = t(570140),
    s = t(699516),
    l = t(496232);
function c(e, r, t) {
    return (
        r in e
            ? Object.defineProperty(e, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[r] = t),
        e
    );
}
let d = !1,
    u = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    f = { ...u };
function p() {
    o = new Map(f.userAffinities.filter((e) => !s.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class h extends (n = a.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), null != e && ((f.userAffinities = e.userAffinities), (f.lastFetched = e.lastFetched), p()), this.syncWith([s.Z], p);
    }
    shouldFetch() {
        if (!d) return Date.now() - f.lastFetched > l.K;
    }
    isFetching() {
        return d;
    }
    getUserAffinities() {
        return f.userAffinities;
    }
    getUserAffinity(e) {
        return o.get(e);
    }
    getState() {
        return f;
    }
}
c(h, 'displayName', 'UserAffinitiesStoreV2'),
    c(h, 'persistKey', 'UserAffinitiesStoreV2'),
    (r.Z = new h(i.Z, {
        LOAD_USER_AFFINITIES_V2: function () {
            d = !0;
        },
        LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: r } = e;
            (f.lastFetched = Date.now()), (d = !1), (f.userAffinities = r), p();
        },
        LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            d = !1;
        },
        LOGOUT: function () {
            (f = { ...u }), (o = new Map()), (d = !1);
        }
    }));
