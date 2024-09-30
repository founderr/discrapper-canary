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
    g = 7,
    S = 604800000,
    A = 1209600000;
function v() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null
    };
}
let N = v(),
    O = [],
    R = new Set(),
    C = {};
function y(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - g);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + g), n > i && n < a;
}
function L(e) {
    return !y(e, e.getFullYear()) && y(e, new Date().getFullYear());
}
function b() {
    if ((P(), !_.Z.hasConsented(m.pjP.PERSONALIZATION))) return;
    let { enabled: e } = p.G.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 }),
        { enabled: t } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!(e || t)) return;
    let n = E.Z.getRelationships();
    f.default.keys(n).forEach((e) => {
        let t = E.Z.getSince(e),
            n = d.Z.getUserAffinity(e);
        if (E.Z.getRelationshipType(e) === m.OGo.FRIEND && null != n && n.affinity > 0 && null != t) {
            let n = new Date(t);
            L(n) && (O.push(e), (C[e] = { friendsSince: n }));
        }
    }),
        O.sort((e, t) => {
            let n = d.Z.getUserAffinity(e),
                r = d.Z.getUserAffinity(t),
                i = null != n ? n.affinity : 0;
            return (null != r ? r.affinity : 0) - i;
        }),
        (R = new Set(O.slice(0, T)));
}
function D(e) {
    return Math.round(s()().diff(e, 'years', !0));
}
function M() {
    return Array.from(R).some((e) => !N.lastShownFriendsListGiftIntents.includes(e));
}
function P() {
    (O.length = 0), R.clear(), (C = {});
}
function U() {
    P();
}
function w() {
    (N = v()), P();
}
function x() {
    N.lastShownFriendsListGiftIntents = Array.from(R);
}
function G(e) {
    let { recipientUserId: t } = e;
    N.messageGiftIntentLastShownMap[t] = Date.now();
}
function k() {
    N.friendsTabBadgeLastDismissedTime = Date.now();
}
function B() {
    for (let e in N.messageGiftIntentLastShownMap) {
        let t = N.messageGiftIntentLastShownMap[e];
        Date.now() - t > A && delete N.messageGiftIntentLastShownMap[e];
    }
}
class F extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        (N = v()), null != e && ((N.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime), (N.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)), (N.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap })), this.syncWith([E.Z, d.Z, _.Z, c.Z], b), B();
    }
    getState() {
        return N;
    }
    getFriendAnniversaries() {
        return O;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary' }, { autoTrackExposure: !1 });
        return !!n && R.has(t);
    }
    canShowFriendsTabBadge() {
        var e;
        let t = null !== (e = N.friendsTabBadgeLastDismissedTime) && void 0 !== e ? e : 0;
        return !(Date.now() - t <= S) && M();
    }
    getFriendAnniversaryYears(e) {
        let t = C[e];
        return null == t ? 0 : D(t.friendsSince);
    }
    isGiftIntentMessageInCooldown(e) {
        return null != N.messageGiftIntentLastShownMap[e];
    }
}
I(F, 'displayName', 'PremiumGiftingIntentStore'),
    I(F, 'persistKey', 'PremiumGiftingIntentStore'),
    I(F, 'migrations', [
        (e) => {
            var t, n;
            return null == e
                ? e
                : {
                      friendsTabBadgeLastDismissedTime: null !== (t = e.friendsTabBadgeLastDismissedTime) && void 0 !== t ? t : null,
                      lastShownFriendsListGiftIntents: null !== (n = e.lastShownFriendsListGiftIntents) && void 0 !== n ? n : [],
                      messageGiftIntentLastShownMap: {}
                  };
        }
    ]),
    (t.Z = new F(u.Z, {
        CONNECTION_OPEN: U,
        LOGOUT: w,
        MESSAGE_GIFT_INTENT_SHOWN: G,
        FRIENDS_LIST_GIFT_INTENTS_SHOWN: x,
        FRIENDS_TAB_BADGE_DISMISS: k
    }));
