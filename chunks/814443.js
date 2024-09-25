var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(699516);
function l(e, t, n) {
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
let u = 86400000,
    c = !1,
    d = Object.freeze({
        userAffinities: [],
        affinityUserIds: new Set(),
        lastFetched: 0
    }),
    _ = Object.freeze({
        userAffinitiesMap: new Map(),
        affinityUserIds: new Set()
    }),
    E = { ...d },
    f = { ..._ };
function h() {
    (E = { ...d }), (f = { ..._ });
}
function p() {
    c = !1;
}
function m() {
    c = !0;
}
function I(e) {
    var t;
    let { affinities: n } = e;
    (E.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : []), (E.lastFetched = Date.now()), T(), (c = !1);
}
function T() {
    let e = new Map(
            E.userAffinities
                .filter((e) => {
                    let { user_id: t } = e;
                    return !s.Z.isBlocked(t);
                })
                .map((e) => [e.user_id, e])
        ),
        t = new Set(e.keys());
    f = {
        userAffinitiesMap: e,
        affinityUserIds: t
    };
}
class g extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), null != e && ((E.userAffinities = e.userAffinities), (E.lastFetched = e.lastFetched), T()), this.syncWith([s.Z], T);
    }
    needsRefresh() {
        return !c && Date.now() - E.lastFetched > u;
    }
    getFetching() {
        return c;
    }
    getState() {
        return E;
    }
    getUserAffinities() {
        return E.userAffinities;
    }
    getUserAffinitiesMap() {
        return f.userAffinitiesMap;
    }
    getUserAffinity(e) {
        return f.userAffinitiesMap.get(e);
    }
    getUserAffinitiesUserIds() {
        return f.affinityUserIds;
    }
}
l(g, 'displayName', 'UserAffinitiesStore'),
    l(g, 'persistKey', 'UserAffinitiesStore'),
    l(g, 'migrations', [(e) => null]),
    (t.Z = new g(o.Z, {
        LOAD_USER_AFFINITIES_SUCCESS: I,
        LOAD_USER_AFFINITIES: m,
        LOAD_USER_AFFINITIES_FAILURE: p,
        LOGOUT: h
    }));
