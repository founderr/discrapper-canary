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
    f = { ...u };
function p() {
    r = new Map(f.userAffinities.filter((e) => !s.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class h extends (o = i.ZP.PersistedStore) {
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
        return r.get(e);
    }
    getState() {
        return f;
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
            (f.lastFetched = Date.now()), (d = !1), (f.userAffinities = t), p();
        },
        LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            d = !1;
        },
        LOGOUT: function () {
            (f = { ...u }), (r = new Map()), (d = !1);
        }
    }));
