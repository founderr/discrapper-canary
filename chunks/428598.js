let n;
r(47120);
var o,
    i = r(442837),
    a = r(570140),
    s = r(699516),
    c = r(496232);
function l(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
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
    n = new Map(f.userAffinities.filter((e) => !s.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class h extends (o = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), null != e && ((f.userAffinities = e.userAffinities), (f.lastFetched = e.lastFetched), p()), this.syncWith([s.Z], p);
    }
    shouldFetch() {
        if (!d) return Date.now() - f.lastFetched > c.K;
    }
    isFetching() {
        return d;
    }
    getUserAffinities() {
        return f.userAffinities;
    }
    getUserAffinity(e) {
        return n.get(e);
    }
    getState() {
        return f;
    }
}
l(h, 'displayName', 'UserAffinitiesStoreV2'),
    l(h, 'persistKey', 'UserAffinitiesStoreV2'),
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
            (f = { ...u }), (n = new Map()), (d = !1);
        }
    }));
