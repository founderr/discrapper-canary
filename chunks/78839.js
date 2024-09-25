n.d(t, {
    sE: function () {
        return P;
    }
});
var r,
    i = n(653041);
var a = n(47120);
var o = n(442837),
    s = n(570140),
    l = n(710845),
    u = n(301766),
    c = n(255078),
    d = n(314897),
    _ = n(122289),
    E = n(981631),
    f = n(474936);
function h(e, t, n) {
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
let p = null,
    m = null,
    I = null,
    T = null,
    g = null,
    S = !1,
    A = !1,
    v = null,
    N = !1,
    O = new l.Z('SubscriptionStore');
function R(e) {
    let { subscriptions: t } = e,
        n = {},
        r = {},
        i = [],
        a = [],
        o = d.default.getId();
    t.forEach((e) => {
        if (e.user_id !== o && !A) {
            O.log('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, _.g9)('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: o,
                        subscriptionId: e.id,
                        subscriptionUserId: e.user_id
                    }
                }),
                (A = !0);
            return;
        }
        let t = c.Q.createFromServer(e);
        (n[t.id] = t), M(t) && ((r[t.id] = t), t.type === E.NYc.GUILD && t.status !== E.O0b.ENDED && i.push(t), t.type === E.NYc.APPLICATION && t.status !== E.O0b.ENDED && a.push(t));
    }),
        (p = n),
        (m = r),
        (T = i),
        (g = a);
}
function C(e) {
    let { activeSubscriptions: t, record: n } = e,
        r = t.findIndex((e) => e.id === n.id);
    if (-1 === r) return [n, ...t];
    {
        let e = [...t];
        return M(n) && n.status !== E.O0b.ENDED ? (e[r] = n) : e.splice(r, 1), e;
    }
}
function y(e) {
    let { subscription: t } = e,
        n = c.Q.createFromServer(t);
    (p = {
        ...p,
        [n.id]: n
    }),
        M(n) &&
            (m = {
                ...m,
                [n.id]: n
            }),
        null != T &&
            n.type === E.NYc.GUILD &&
            (T = C({
                activeSubscriptions: T,
                record: n
            })),
        null != g &&
            n.type === E.NYc.APPLICATION &&
            (T = C({
                activeSubscriptions: g,
                record: n
            }));
}
function b(e) {
    let { subscription: t } = e;
    if (((S = !0), null != t)) {
        let e = d.default.getId();
        if (t.user_id !== e && !A) {
            O.log('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, _.g9)('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: t.id,
                        subscriptionUserId: t.user_id
                    }
                }),
                (S = !1),
                (A = !0);
            return;
        }
        I = c.Q.createFromServer(t);
    }
}
function L(e) {
    let { subscription: t } = e;
    if (((N = !0), null != t)) {
        let e = d.default.getId();
        if (t.user_id !== e && !A) {
            O.log('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, _.g9)('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: t.id,
                        subscriptionUserId: t.user_id
                    }
                }),
                (N = !1),
                (A = !0);
            return;
        }
        v = c.Q.createFromServer(t);
    }
}
function D() {
    (p = null), (m = null), (I = null), (T = null), (g = null), (S = !1), (A = !1), (v = null), (N = !1);
}
function M(e) {
    return e.status !== E.O0b.UNPAID;
}
function P(e) {
    let t = d.default.getId();
    return e.userId === t;
}
function U(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = n ? m : p;
    if (null == r) return null;
    for (let n in r) {
        let i = r[n];
        if (!P(i)) {
            if (!A) {
                let e = d.default.getId();
                O.log('user id mismatch between logged in user and SubscriptionStore user'),
                    (0, _.g9)('user id mismatch between logged in user and SubscriptionStore user', {
                        extra: {
                            authUserId: e,
                            subscriptionId: i.id,
                            subscriptionUserId: i.userId
                        }
                    }),
                    (A = !0);
            }
            break;
        }
        if (i.type === e && (null == t || t(i))) return i;
    }
    return null;
}
class w extends (r = o.ZP.Store) {
    hasFetchedSubscriptions() {
        return null != p;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return S;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return N;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return U(E.NYc.PREMIUM, (e) => !(0, u.Q0)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return U(E.NYc.PREMIUM, void 0, e);
    }
    inReverseTrial() {
        let e = U(E.NYc.PREMIUM, void 0, !0);
        return !!(null != e && null != e.trialId && f.h8.includes(e.trialId)) && null == e.paymentSourceId;
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? m : p;
    }
    getSubscriptionById(e) {
        var t;
        return null !== (t = null == p ? void 0 : p[e]) && void 0 !== t ? t : void 0;
    }
    getActiveGuildSubscriptions() {
        return T;
    }
    getActiveApplicationSubscriptions() {
        return g;
    }
    getSubscriptionForPlanIds(e) {
        var t;
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = new Set(e),
            i = n ? m : p;
        return null == i ? null : null !== (t = Object.values(i).find((e) => e.items.some((e) => r.has(e.planId)))) && void 0 !== t ? t : null;
    }
    getMostRecentPremiumTypeSubscription() {
        return I;
    }
    getPreviousPremiumTypeSubscription() {
        return v;
    }
}
h(w, 'displayName', 'SubscriptionStore'),
    (t.ZP = new w(s.Z, {
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: R,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: y,
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: b,
        BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: L,
        BILLING_SUBSCRIPTION_RESET: D,
        LOGOUT: D
    }));
