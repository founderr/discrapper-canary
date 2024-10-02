var r,
    i = n(47120);
var a = n(653041);
var o = n(392711),
    s = n.n(o),
    l = n(913527),
    u = n.n(l),
    c = n(442837),
    d = n(570140),
    _ = n(353926),
    E = n(814443),
    f = n(480294),
    h = n(699516),
    p = n(709054),
    m = n(522558),
    I = n(581025),
    T = n(981631);
function g(e, t, n) {
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
let S = 5,
    A = 15,
    v = 7,
    N = 604800000,
    O = 1209600000;
function R() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null
    };
}
let C = R(),
    y = [],
    L = new Set(),
    b = {},
    D = null;
function M(e, t) {
    let n = new Date(),
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - v);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + v), n > i && n < a;
}
function P(e) {
    return !M(e, e.getFullYear()) && M(e, new Date().getFullYear());
}
function U() {
    if (null != D) {
        z(D);
        return;
    }
    if ((G(), !f.Z.hasConsented(T.pjP.PERSONALIZATION))) return;
    let { enabled: e } = I.G.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 }),
        { enabled: t } = m.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore updateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!!(e || t)) {
        for (let e of p.default.keys(h.Z.getRelationships())) {
            if (y.length >= A) break;
            let t = h.Z.getSince(e),
                n = E.Z.getUserAffinity(e);
            if (h.Z.getRelationshipType(e) === T.OGo.FRIEND && null != n && n.affinity > 0 && null != t) {
                let n = new Date(t);
                P(n) && (y.push(e), (b[e] = { friendsSince: n }));
            }
        }
        y.sort((e, t) => {
            let n = E.Z.getUserAffinity(e),
                r = E.Z.getUserAffinity(t),
                i = null != n ? n.affinity : 0;
            return (null != r ? r.affinity : 0) - i;
        }),
            (L = new Set(y.slice(0, S)));
    }
}
function w(e) {
    return Math.round(u()().diff(e, 'years', !0));
}
function x() {
    return Array.from(L).some((e) => !C.lastShownFriendsListGiftIntents.includes(e));
}
function G() {
    (y.length = 0), L.clear(), (b = {});
}
function k() {
    G();
}
function B() {
    (C = R()), G();
}
function F() {
    C.lastShownFriendsListGiftIntents = Array.from(L);
}
function Z(e) {
    let { recipientUserId: t } = e;
    C.messageGiftIntentLastShownMap[t] = Date.now();
}
function V() {
    C.friendsTabBadgeLastDismissedTime = Date.now();
}
function H() {
    for (let e in C.messageGiftIntentLastShownMap) {
        let t = C.messageGiftIntentLastShownMap[e];
        Date.now() - t > O && delete C.messageGiftIntentLastShownMap[e];
    }
}
function Y() {
    C.lastShownFriendsListGiftIntents = [];
}
function j() {
    C.messageGiftIntentLastShownMap = {};
}
function W() {
    C.friendsTabBadgeLastDismissedTime = null;
}
function K(e) {
    let { total: t } = e;
    if (null == t) {
        (D = null), U();
        return;
    }
    z(t);
}
function z(e) {
    G();
    let { enabled: t } = m.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore generateFriendAnniversaries' }, { autoTrackExposure: !1 });
    if (!t) return;
    D = e;
    let n = h.Z.getFriendIDs();
    s()
        .sampleSize(n, e)
        .forEach((e) => {
            let t = h.Z.getSince(e);
            if (null != t) {
                let n = new Date(t);
                y.push(e), (b[e] = { friendsSince: n });
            }
        }),
        (L = new Set(y.slice(0, S)));
}
class q extends (r = c.ZP.PersistedStore) {
    initialize(e) {
        (C = R()), null != e && ((C.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime), (C.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents)), (C.messageGiftIntentLastShownMap = { ...e.messageGiftIntentLastShownMap })), this.syncWith([h.Z, E.Z, f.Z, _.Z], U), H();
    }
    getState() {
        return C;
    }
    getFriendAnniversaries() {
        return y;
    }
    isTopAffinityFriendAnniversary(e) {
        let { userId: t } = e,
            { enabled: n } = m.w.getCurrentConfig({ location: 'PremiumGiftingIntentStore isTopAffinityFriendAnniversary' }, { autoTrackExposure: !1 });
        return !!n && L.has(t);
    }
    canShowFriendsTabBadge() {
        var e;
        let t = null !== (e = C.friendsTabBadgeLastDismissedTime) && void 0 !== e ? e : 0;
        return !(Date.now() - t <= N) && x();
    }
    getFriendAnniversaryYears(e) {
        let t = b[e];
        return null == t ? 0 : w(t.friendsSince);
    }
    isGiftIntentMessageInCooldown(e) {
        return null != C.messageGiftIntentLastShownMap[e];
    }
    getDevToolTotalFriendAnniversaries() {
        return D;
    }
}
g(q, 'displayName', 'PremiumGiftingIntentStore'),
    g(q, 'persistKey', 'PremiumGiftingIntentStore'),
    g(q, 'migrations', [
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
    (t.Z = new q(d.Z, {
        CONNECTION_OPEN: k,
        LOGOUT: B,
        MESSAGE_GIFT_INTENT_SHOWN: Z,
        FRIENDS_LIST_GIFT_INTENTS_SHOWN: F,
        FRIENDS_TAB_BADGE_DISMISS: V,
        DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: Y,
        DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: j,
        DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET: W,
        DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: K
    }));
