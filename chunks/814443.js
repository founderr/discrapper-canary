var i,
    a = r(47120);
var s = r(442837),
    o = r(570140),
    l = r(699516);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = 86400000,
    d = !1,
    f = Object.freeze({
        userAffinities: [],
        affinityUserIds: new Set(),
        lastFetched: 0
    }),
    _ = Object.freeze({
        userAffinitiesMap: new Map(),
        affinityUserIds: new Set()
    }),
    h = { ...f },
    p = { ..._ };
function m() {
    (h = { ...f }), (p = { ..._ });
}
function g() {
    d = !1;
}
function E() {
    d = !0;
}
function v(e) {
    var n;
    let { affinities: r } = e;
    (h.userAffinities = null !== (n = r.user_affinities) && void 0 !== n ? n : []), (h.lastFetched = Date.now()), I(), (d = !1);
}
function I() {
    let e = new Map(
            h.userAffinities
                .filter((e) => {
                    let { user_id: n } = e;
                    return !l.Z.isBlockedOrIgnored(n);
                })
                .map((e) => [e.user_id, e])
        ),
        n = new Set(e.keys());
    p = {
        userAffinitiesMap: e,
        affinityUserIds: n
    };
}
class T extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(l.Z), null != e && ((h.userAffinities = e.userAffinities), (h.lastFetched = e.lastFetched), I()), this.syncWith([l.Z], I);
    }
    needsRefresh() {
        return !d && Date.now() - h.lastFetched > c;
    }
    getFetching() {
        return d;
    }
    getState() {
        return h;
    }
    getUserAffinities() {
        return h.userAffinities;
    }
    getUserAffinitiesMap() {
        return p.userAffinitiesMap;
    }
    getUserAffinity(e) {
        return p.userAffinitiesMap.get(e);
    }
    getUserAffinitiesUserIds() {
        return p.affinityUserIds;
    }
}
u(T, 'displayName', 'UserAffinitiesStore'),
    u(T, 'persistKey', 'UserAffinitiesStore'),
    u(T, 'migrations', [(e) => null]),
    (n.Z = new T(o.Z, {
        LOAD_USER_AFFINITIES_SUCCESS: v,
        LOAD_USER_AFFINITIES: E,
        LOAD_USER_AFFINITIES_FAILURE: g,
        LOGOUT: m
    }));
