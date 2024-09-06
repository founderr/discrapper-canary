let r;
t(47120);
var i,
    o = t(442837),
    l = t(570140),
    u = t(699516),
    s = t(496232);
function a(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let c = !1,
    d = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    _ = { ...d };
function f() {
    r = new Map(_.userAffinities.filter((e) => !u.Z.isBlocked(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class E extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(u.Z), null != e && ((_.userAffinities = e.userAffinities), (_.lastFetched = e.lastFetched), f()), this.syncWith([u.Z], f);
    }
    shouldFetch() {
        if (!c) return Date.now() - _.lastFetched > s.K;
    }
    isFetching() {
        return c;
    }
    getUserAffinities() {
        return _.userAffinities;
    }
    getUserAffinity(e) {
        return r.get(e);
    }
    getState() {
        return _;
    }
}
a(E, 'displayName', 'UserAffinitiesStoreV2'),
    a(E, 'persistKey', 'UserAffinitiesStoreV2'),
    (n.Z = new E(l.Z, {
        LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
        },
        LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: n } = e;
            (_.lastFetched = Date.now()), (c = !1), (_.userAffinities = n), f();
        },
        LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
        },
        LOGOUT: function () {
            (_ = { ...d }), (r = new Map()), (c = !1);
        }
    }));
