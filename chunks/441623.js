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
let T = 5,
    g = 604800000;
function S() {
    return {
        lastShownFriendsListGiftIntents: new Set(),
        friendsTabBadgeLastDismissedTime: null
    };
}
let A = S(),
    v = [],
    N = new Set(),
    O = {};
function R(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - 7);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + 7), n > i && n < a;
}
function C(e) {
    return !R(e, e.getFullYear()) && R(e, new Date().getFullYear());
}
function y() {
    if ((D(), !_.Z.hasConsented(m.pjP.PERSONALIZATION))) return;
    let { enabled: e } = p.G.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 }),
        { enabled: t } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!(e || t)) return;
    let n = E.Z.getRelationships();
    f.default.keys(n).forEach((e) => {
        let t = E.Z.getSince(e),
            n = d.Z.getUserAffinity(e);
        if (E.Z.getRelationshipType(e) === m.OGo.FRIEND && null != n && n.affinity > 0 && null != t) {
            let n = new Date(t);
            C(n) && (v.push(e), (O[e] = { friendsSince: n }));
        }
    }),
        v.sort((e, t) => {
            let n = d.Z.getUserAffinity(e),
                r = d.Z.getUserAffinity(t),
                i = null != n ? n.affinity : 0;
            return (null != r ? r.affinity : 0) - i;
        }),
        (N = new Set(v.slice(0, T)));
}
function b(e) {
    return Math.round(s()().diff(e, 'years', !0));
}
function L() {
    return N.difference(A.lastShownFriendsListGiftIntents).size > 0;
}
function D() {
    (v.length = 0), N.clear(), (O = {});
}
function M() {
    D();
}
function P() {
    (A = S()), D();
}
function U() {
    A.lastShownFriendsListGiftIntents = new Set(N);
}
function w() {
    A.friendsTabBadgeLastDismissedTime = Date.now();
}
class x extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        (A = null != e ? e : S()), this.syncWith([E.Z, d.Z, _.Z, c.Z], y);
    }
    getState() {
        return A;
    }
    getFriendAnniversaries() {
        return v;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary' }, { autoTrackExposure: !1 });
        return !!n && N.has(t);
    }
    canShowFriendsTabBadge() {
        var e;
        let t = null !== (e = A.friendsTabBadgeLastDismissedTime) && void 0 !== e ? e : 0;
        return !(Date.now() - t <= g) && L();
    }
    getFriendAnniversaryYears(e) {
        let t = O[e];
        return null == t ? 0 : b(t.friendsSince);
    }
}
I(x, 'displayName', 'PremiumGiftingIntentStore'),
    I(x, 'persistKey', 'PremiumGiftingIntentStore'),
    (t.Z = new x(u.Z, {
        CONNECTION_OPEN: M,
        LOGOUT: P,
        GIFT_INTENTS_SHOWN: U,
        FRIENDS_TAB_BADGE_DISMISS: w
    }));
