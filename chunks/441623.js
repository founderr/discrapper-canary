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
    g = 15,
    S = 7,
    A = 604800000,
    v = 1209600000;
function N() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null
    };
}
let O = N(),
    R = [],
    C = new Set(),
    y = {};
function L(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - S);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + S), n > i && n < a;
}
function b(e) {
    return !L(e, e.getFullYear()) && L(e, new Date().getFullYear());
}
function D() {
    if ((U(), !_.Z.hasConsented(m.pjP.PERSONALIZATION))) return;
    let { enabled: e } = p.G.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 }),
        { enabled: t } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!!(e || t)) {
        for (let e of f.default.keys(E.Z.getRelationships())) {
            if (R.length >= g) break;
            let t = E.Z.getSince(e),
                n = d.Z.getUserAffinity(e);
            if (E.Z.getRelationshipType(e) === m.OGo.FRIEND && null != n && n.affinity > 0 && null != t) {
                let n = new Date(t);
                b(n) && (R.push(e), (y[e] = { friendsSince: n }));
            }
        }
        R.sort((e, t) => {
            let n = d.Z.getUserAffinity(e),
                r = d.Z.getUserAffinity(t),
                i = null != n ? n.affinity : 0;
            return (null != r ? r.affinity : 0) - i;
        }),
            (C = new Set(R.slice(0, T)));
    }
}
function M(e) {
    return Math.round(s()().diff(e, 'years', !0));
}
function P() {
    return Array.from(C).some((e) => !O.lastShownFriendsListGiftIntents.includes(e));
}
function U() {
    (R.length = 0), C.clear(), (y = {});
}
function w() {
    U();
}
function x() {
    (O = N()), U();
}
function G() {
    O.lastShownFriendsListGiftIntents = Array.from(C);
}
function k(e) {
    let { recipientUserId: t } = e;
    O.messageGiftIntentLastShownMap[t] = Date.now();
}
function B() {
    O.friendsTabBadgeLastDismissedTime = Date.now();
}
function F() {
    for (let e in O.messageGiftIntentLastShownMap) {
        let t = O.messageGiftIntentLastShownMap[e];
        Date.now() - t > v && delete O.messageGiftIntentLastShownMap[e];
    }
}
class Z extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        (O = N()), null != e && ((O.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime), (O.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)), (O.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap })), this.syncWith([E.Z, d.Z, _.Z, c.Z], D), F();
    }
    getState() {
        return O;
    }
    getFriendAnniversaries() {
        return R;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = h.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary' }, { autoTrackExposure: !1 });
        return !!n && C.has(t);
    }
    canShowFriendsTabBadge() {
        var e;
        let t = null !== (e = O.friendsTabBadgeLastDismissedTime) && void 0 !== e ? e : 0;
        return !(Date.now() - t <= A) && P();
    }
    getFriendAnniversaryYears(e) {
        let t = y[e];
        return null == t ? 0 : M(t.friendsSince);
    }
    isGiftIntentMessageInCooldown(e) {
        return null != O.messageGiftIntentLastShownMap[e];
    }
}
I(Z, 'displayName', 'PremiumGiftingIntentStore'),
    I(Z, 'persistKey', 'PremiumGiftingIntentStore'),
    I(Z, 'migrations', [
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
    (t.Z = new Z(u.Z, {
        CONNECTION_OPEN: w,
        LOGOUT: x,
        MESSAGE_GIFT_INTENT_SHOWN: k,
        FRIENDS_LIST_GIFT_INTENTS_SHOWN: G,
        FRIENDS_TAB_BADGE_DISMISS: B
    }));
