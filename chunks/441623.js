n(47120), n(653041);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(353926),
    c = n(814443),
    d = n(480294),
    _ = n(699516),
    E = n(709054),
    f = n(522558),
    h = n(581025),
    p = n(981631);
function I(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - 7);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + 7), n > i && n < a;
}
let m = [],
    T = {};
function S() {
    (m.length = 0), (T = {});
}
function g() {
    if ((S(), !d.Z.hasConsented(p.pjP.PERSONALIZATION))) return;
    let { enabled: e } = h.G.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 }),
        { enabled: t } = f.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!(e || t)) return;
    let n = _.Z.getRelationships();
    E.default.keys(n).forEach((e) => {
        let t = _.Z.getSince(e),
            n = c.Z.getUserAffinity(e);
        if (_.Z.getRelationshipType(e) === p.OGo.FRIEND && null != n && n.affinity > 0 && null != t) {
            var r;
            let n = new Date(t);
            if (!I((r = n), r.getFullYear()) && I(r, new Date().getFullYear())) m.push(e), (T[e] = { friendsSince: n });
        }
    }),
        m.sort((e, t) => {
            let n = c.Z.getUserAffinity(e),
                r = c.Z.getUserAffinity(t),
                i = null != n ? n.affinity : 0;
            return (null != r ? r.affinity : 0) - i;
        });
}
class A extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([_.Z, c.Z, d.Z, u.Z], g);
    }
    getFriendAnniversaries() {
        return m;
    }
}
(s = 'PremiumGiftingIntentStore'),
    (a = 'displayName') in (i = A)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new A(l.Z, {
        CONNECTION_OPEN: function () {
            S();
        },
        LOGOUT: function () {
            S();
        }
    }));
