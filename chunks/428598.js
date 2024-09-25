let i;
n(47120);
var r,
    a = n(442837),
    o = n(570140),
    d = n(699516),
    f = n(496232);
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
let l = !1,
    s = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    u = { ...s };
function _() {
    i = new Map(u.userAffinities.filter((e) => !d.Z.isBlocked(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class h extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(d.Z), null != e && ((u.userAffinities = e.userAffinities), (u.lastFetched = e.lastFetched), _()), this.syncWith([d.Z], _);
    }
    shouldFetch() {
        if (!l) return Date.now() - u.lastFetched > f.K;
    }
    isFetching() {
        return l;
    }
    getUserAffinities() {
        return u.userAffinities;
    }
    getUserAffinity(e) {
        return i.get(e);
    }
    getState() {
        return u;
    }
}
c(h, 'displayName', 'UserAffinitiesStoreV2'),
    c(h, 'persistKey', 'UserAffinitiesStoreV2'),
    (t.Z = new h(o.Z, {
        LOAD_USER_AFFINITIES_V2: function () {
            l = !0;
        },
        LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (u.lastFetched = Date.now()), (l = !1), (u.userAffinities = t), _();
        },
        LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            l = !1;
        },
        LOGOUT: function () {
            (u = { ...s }), (i = new Map()), (l = !1);
        }
    }));
