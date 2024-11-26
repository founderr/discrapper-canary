let i;
n(47120);
var r,
    l = n(442837),
    o = n(570140),
    u = n(699516),
    a = n(496232);
function s(e, t, n) {
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
    d = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    f = { ...d };
function _() {
    i = new Map(f.userAffinities.filter((e) => !u.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class E extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(u.Z), null != e && ((f.userAffinities = e.userAffinities), (f.lastFetched = e.lastFetched), _()), this.syncWith([u.Z], _);
    }
    shouldFetch() {
        if (!c) return Date.now() - f.lastFetched > a.K;
    }
    isFetching() {
        return c;
    }
    getUserAffinities() {
        return f.userAffinities;
    }
    getUserAffinity(e) {
        return i.get(e);
    }
    getState() {
        return f;
    }
}
s(E, 'displayName', 'UserAffinitiesStoreV2'),
    s(E, 'persistKey', 'UserAffinitiesStoreV2'),
    (t.Z = new E(o.Z, {
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
            (f = { ...d }), (i = new Map()), (c = !1);
        }
    }));
