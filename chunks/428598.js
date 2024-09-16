let i;
t(47120);
var r,
    l = t(442837),
    o = t(570140),
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
function E() {
    i = new Map(_.userAffinities.filter((e) => !u.Z.isBlocked(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class f extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(u.Z), null != e && ((_.userAffinities = e.userAffinities), (_.lastFetched = e.lastFetched), E()), this.syncWith([u.Z], E);
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
        return i.get(e);
    }
    getState() {
        return _;
    }
}
a(f, 'displayName', 'UserAffinitiesStoreV2'),
    a(f, 'persistKey', 'UserAffinitiesStoreV2'),
    (n.Z = new f(o.Z, {
        LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
        },
        LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: n } = e;
            (_.lastFetched = Date.now()), (c = !1), (_.userAffinities = n), E();
        },
        LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
        },
        LOGOUT: function () {
            (_ = { ...d }), (i = new Map()), (c = !1);
        }
    }));
