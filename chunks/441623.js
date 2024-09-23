n(47120), n(653041);
var r,
    i,
    a,
    s,
    o = n(913527),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(353926),
    _ = n(814443),
    E = n(480294),
    f = n(699516),
    h = n(709054),
    p = n(522558),
    I = n(581025),
    m = n(981631);
function T(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - 7);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + 7), n > i && n < a;
}
let S = [],
    g = new Set(),
    A = {};
function N() {
    (S.length = 0), g.clear(), (A = {});
}
function O() {
    if ((N(), !E.Z.hasConsented(m.pjP.PERSONALIZATION))) return;
    let { enabled: e } = I.G.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 }),
        { enabled: t } = p.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!(e || t)) return;
    let n = f.Z.getRelationships();
    h.default.keys(n).forEach((e) => {
        let t = f.Z.getSince(e),
            n = _.Z.getUserAffinity(e);
        if (f.Z.getRelationshipType(e) === m.OGo.FRIEND && null != n && n.affinity > 0 && null != t) {
            var r;
            let n = new Date(t);
            if (!T((r = n), r.getFullYear()) && T(r, new Date().getFullYear())) S.push(e), (A[e] = { friendsSince: n });
        }
    }),
        S.sort((e, t) => {
            let n = _.Z.getUserAffinity(e),
                r = _.Z.getUserAffinity(t),
                i = null != n ? n.affinity : 0;
            return (null != r ? r.affinity : 0) - i;
        }),
        (g = new Set(S.slice(0, 5)));
}
class R extends (r = u.ZP.Store) {
    initialize() {
        this.syncWith([f.Z, _.Z, E.Z, d.Z], O);
    }
    getFriendAnniversaries() {
        return S;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = p.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary' }, { autoTrackExposure: !1 });
        return !!n && g.has(t);
    }
    getFriendAnniversaryYears(e) {
        var t;
        let n = A[e];
        if (null == n) return 0;
        return (t = n.friendsSince), Math.round(l()().diff(t, 'years', !0));
    }
}
(s = 'PremiumGiftingIntentStore'),
    (a = 'displayName') in (i = R)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new R(c.Z, {
        CONNECTION_OPEN: function () {
            N();
        },
        LOGOUT: function () {
            N();
        }
    }));
