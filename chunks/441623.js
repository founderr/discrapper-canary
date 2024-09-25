var r,
    i = n(47120);
var a = n(653041);
var o = n(913527),
    s = n.n(o),
    l = n(442837),
    u = n(570140),
    c = n(353926),
    d = n(814443),
    _ = n(480294),
    E = n(699516),
    f = n(709054),
    h = n(522558),
    p = n(581025),
    m = n(981631);
function I(e, t, n) {
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
let T = 5;
function g(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - 7);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + 7), n > i && n < a;
}
function S(e) {
    return !g(e, e.getFullYear()) && g(e, new Date().getFullYear());
}
let A = [],
    v = new Set(),
    N = {};
function O() {
    (A.length = 0), v.clear(), (N = {});
}
function R() {
    if ((O(), !_.Z.hasConsented(m.pjP.PERSONALIZATION))) return;
    let { enabled: e } = p.G.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 }),
        { enabled: t } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!(e || t)) return;
    let n = E.Z.getRelationships();
    f.default.keys(n).forEach((e) => {
        let t = E.Z.getSince(e),
            n = d.Z.getUserAffinity(e);
        if (E.Z.getRelationshipType(e) === m.OGo.FRIEND && null != n && n.affinity > 0 && null != t) {
            let n = new Date(t);
            S(n) && (A.push(e), (N[e] = { friendsSince: n }));
        }
    }),
        A.sort((e, t) => {
            let n = d.Z.getUserAffinity(e),
                r = d.Z.getUserAffinity(t),
                i = null != n ? n.affinity : 0;
            return (null != r ? r.affinity : 0) - i;
        }),
        (v = new Set(A.slice(0, T)));
}
function C() {
    O();
}
function y() {
    O();
}
function b(e) {
    return Math.round(s()().diff(e, 'years', !0));
}
class L extends (r = l.ZP.Store) {
    initialize() {
        this.syncWith([E.Z, d.Z, _.Z, c.Z], R);
    }
    getFriendAnniversaries() {
        return A;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary' }, { autoTrackExposure: !1 });
        return !!n && v.has(t);
    }
    getFriendAnniversaryYears(e) {
        let t = N[e];
        return null == t ? 0 : b(t.friendsSince);
    }
}
I(L, 'displayName', 'PremiumGiftingIntentStore'),
    (t.Z = new L(u.Z, {
        CONNECTION_OPEN: C,
        LOGOUT: y
    }));
