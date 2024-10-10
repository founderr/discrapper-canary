n.d(t, {
    sE: function () {
        return y;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(710845),
    c = n(301766),
    d = n(255078),
    _ = n(314897),
    E = n(122289),
    f = n(981631),
    h = n(474936);
let p = null,
    I = null,
    m = null,
    T = null,
    S = null,
    g = !1,
    A = !1,
    N = null,
    R = !1,
    O = new u.Z('SubscriptionStore');
function v(e) {
    let { activeSubscriptions: t, record: n } = e,
        r = t.findIndex((e) => e.id === n.id);
    if (-1 === r) return [n, ...t];
    {
        let e = [...t];
        return L(n) && n.status !== f.O0b.ENDED ? (e[r] = n) : e.splice(r, 1), e;
    }
}
function C() {
    (p = null), (I = null), (m = null), (T = null), (S = null), (g = !1), (A = !1), (N = null), (R = !1);
}
function L(e) {
    return e.status !== f.O0b.UNPAID;
}
function y(e) {
    let t = _.default.getId();
    return e.userId === t;
}
function D(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = n ? I : p;
    if (null == r) return null;
    for (let n in r) {
        let i = r[n];
        if (!y(i)) {
            if (!A) {
                let e = _.default.getId();
                O.log('user id mismatch between logged in user and SubscriptionStore user'),
                    (0, E.g9)('user id mismatch between logged in user and SubscriptionStore user', {
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
class b extends (r = o.ZP.Store) {
    hasFetchedSubscriptions() {
        return null != p;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return g;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return R;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return D(f.NYc.PREMIUM, (e) => !(0, c.Q0)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return D(f.NYc.PREMIUM, void 0, e);
    }
    inReverseTrial() {
        let e = D(f.NYc.PREMIUM, void 0, !0);
        return !!(null != e && null != e.trialId && h.h8.includes(e.trialId)) && null == e.paymentSourceId;
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? I : p;
    }
    getSubscriptionById(e) {
        var t;
        return null !== (t = null == p ? void 0 : p[e]) && void 0 !== t ? t : void 0;
    }
    getActiveGuildSubscriptions() {
        return T;
    }
    getActiveApplicationSubscriptions() {
        return S;
    }
    getSubscriptionForPlanIds(e) {
        var t;
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = new Set(e),
            i = n ? I : p;
        return null == i ? null : null !== (t = Object.values(i).find((e) => e.items.some((e) => r.has(e.planId)))) && void 0 !== t ? t : null;
    }
    getMostRecentPremiumTypeSubscription() {
        return m;
    }
    getPreviousPremiumTypeSubscription() {
        return N;
    }
}
(s = 'SubscriptionStore'),
    (a = 'displayName') in (i = b)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.ZP = new b(l.Z, {
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
            let { subscriptions: t } = e,
                n = {},
                r = {},
                i = [],
                a = [],
                s = _.default.getId();
            t.forEach((e) => {
                if (e.user_id !== s && !A) {
                    O.log('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                        (0, E.g9)('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                            extra: {
                                authUserId: s,
                                subscriptionId: e.id,
                                subscriptionUserId: e.user_id
                            }
                        }),
                        (A = !0);
                    return;
                }
                let t = d.Q.createFromServer(e);
                (n[t.id] = t), L(t) && ((r[t.id] = t), t.type === f.NYc.GUILD && t.status !== f.O0b.ENDED && i.push(t), t.type === f.NYc.APPLICATION && t.status !== f.O0b.ENDED && a.push(t));
            }),
                (p = n),
                (I = r),
                (T = i),
                (S = a);
        },
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function (e) {
            let { subscription: t } = e,
                n = d.Q.createFromServer(t);
            (p = {
                ...p,
                [n.id]: n
            }),
                L(n) &&
                    (I = {
                        ...I,
                        [n.id]: n
                    }),
                null != T &&
                    n.type === f.NYc.GUILD &&
                    (T = v({
                        activeSubscriptions: T,
                        record: n
                    })),
                null != S &&
                    n.type === f.NYc.APPLICATION &&
                    (T = v({
                        activeSubscriptions: S,
                        record: n
                    }));
        },
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
            let { subscription: t } = e;
            if (((g = !0), null != t)) {
                let e = _.default.getId();
                if (t.user_id !== e && !A) {
                    O.log('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                        (0, E.g9)('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                            extra: {
                                authUserId: e,
                                subscriptionId: t.id,
                                subscriptionUserId: t.user_id
                            }
                        }),
                        (g = !1),
                        (A = !0);
                    return;
                }
                m = d.Q.createFromServer(t);
            }
        },
        BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
            let { subscription: t } = e;
            if (((R = !0), null != t)) {
                let e = _.default.getId();
                if (t.user_id !== e && !A) {
                    O.log('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                        (0, E.g9)('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                            extra: {
                                authUserId: e,
                                subscriptionId: t.id,
                                subscriptionUserId: t.user_id
                            }
                        }),
                        (R = !1),
                        (A = !0);
                    return;
                }
                N = d.Q.createFromServer(t);
            }
        },
        BILLING_SUBSCRIPTION_RESET: C,
        LOGOUT: C
    }));
