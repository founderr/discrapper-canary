let r;
n(47120);
var i,
    a = n(442837),
    o = n(570140),
    s = n(699516),
    d = n(496232);
function u(e, t, n) {
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
let c = !1,
    l = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    f = { ...l };
function _() {
    r = new Map(f.userAffinities.filter((e) => !s.Z.isBlocked(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class b extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), null != e && ((f.userAffinities = e.userAffinities), (f.lastFetched = e.lastFetched), _()), this.syncWith([s.Z], _);
    }
    shouldFetch() {
        if (!c) return Date.now() - f.lastFetched > d.K;
    }
    isFetching() {
        return c;
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
u(b, 'displayName', 'UserAffinitiesStoreV2'),
    u(b, 'persistKey', 'UserAffinitiesStoreV2'),
    (t.Z = new b(o.Z, {
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
            (f = { ...l }), (r = new Map()), (c = !1);
        }
    }));
