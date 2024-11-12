n(47120);
var r,
    i = n(442837),
    a = n(570140),
    s = n(699516);
function o(e, t, n) {
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
    u = Object.freeze({
        userAffinities: [],
        affinityUserIds: new Set(),
        lastFetched: 0
    }),
    c = Object.freeze({
        userAffinitiesMap: new Map(),
        affinityUserIds: new Set()
    }),
    d = { ...u },
    f = { ...c };
function _() {
    let e = new Map(
            d.userAffinities
                .filter((e) => {
                    let { user_id: t } = e;
                    return !s.Z.isBlockedOrIgnored(t);
                })
                .map((e) => [e.user_id, e])
        ),
        t = new Set(e.keys());
    f = {
        userAffinitiesMap: e,
        affinityUserIds: t
    };
}
class p extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), null != e && ((d.userAffinities = e.userAffinities), (d.lastFetched = e.lastFetched), _()), this.syncWith([s.Z], _);
    }
    needsRefresh() {
        return !l && Date.now() - d.lastFetched > 86400000;
    }
    getFetching() {
        return l;
    }
    getState() {
        return d;
    }
    getUserAffinities() {
        return d.userAffinities;
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
o(p, 'displayName', 'UserAffinitiesStore'),
    o(p, 'persistKey', 'UserAffinitiesStore'),
    o(p, 'migrations', [(e) => null]),
    (t.Z = new p(a.Z, {
        LOAD_USER_AFFINITIES_SUCCESS: function (e) {
            var t;
            let { affinities: n } = e;
            (d.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : []), (d.lastFetched = Date.now()), _(), (l = !1);
        },
        LOAD_USER_AFFINITIES: function () {
            l = !0;
        },
        LOAD_USER_AFFINITIES_FAILURE: function () {
            l = !1;
        },
        LOGOUT: function () {
            (d = { ...u }), (f = { ...c });
        }
    }));
