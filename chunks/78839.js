n.d(t, {
    sE: function () {
        return O;
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
    f = n(314897),
    _ = n(122289),
    p = n(981631),
    h = n(474936);
let m = null,
    g = null,
    E = null,
    v = null,
    I = null,
    T = !1,
    b = !1,
    S = null,
    y = !1,
    A = new u.Z('SubscriptionStore');
function N(e) {
    let { activeSubscriptions: t, record: n } = e,
        r = t.findIndex((e) => e.id === n.id);
    if (-1 === r) return [n, ...t];
    {
        let e = [...t];
        return R(n) && n.status !== p.O0b.ENDED ? (e[r] = n) : e.splice(r, 1), e;
    }
}
function C() {
    (m = null), (g = null), (E = null), (v = null), (I = null), (T = !1), (b = !1), (S = null), (y = !1);
}
function R(e) {
    return e.status !== p.O0b.UNPAID;
}
function O(e) {
    let t = f.default.getId();
    return e.userId === t;
}
function D(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = n ? g : m;
    if (null == r) return null;
    for (let n in r) {
        let i = r[n];
        if (!O(i)) {
            if (!b) {
                let e = f.default.getId();
                A.log('user id mismatch between logged in user and SubscriptionStore user'),
                    (0, _.g9)('user id mismatch between logged in user and SubscriptionStore user', {
                        extra: {
                            authUserId: e,
                            subscriptionId: i.id,
                            subscriptionUserId: i.userId
                        }
                    }),
                    (b = !0);
            }
            break;
        }
        if (i.type === e && (null == t || t(i))) return i;
    }
    return null;
}
class L extends (r = o.ZP.Store) {
    hasFetchedSubscriptions() {
        return null != m;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return T;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return y;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return D(p.NYc.PREMIUM, (e) => !(0, c.Q0)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return D(p.NYc.PREMIUM, void 0, e);
    }
    inReverseTrial() {
        let e = D(p.NYc.PREMIUM, void 0, !0);
        return !!(null != e && null != e.trialId && h.h8.includes(e.trialId)) && null == e.paymentSourceId;
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? g : m;
    }
    getSubscriptionById(e) {
        var t;
        return null !== (t = null == m ? void 0 : m[e]) && void 0 !== t ? t : void 0;
    }
    getActiveGuildSubscriptions() {
        return v;
    }
    getActiveApplicationSubscriptions() {
        return I;
    }
    getSubscriptionForPlanIds(e) {
        var t;
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = new Set(e),
            i = n ? g : m;
        return null == i ? null : null !== (t = Object.values(i).find((e) => e.items.some((e) => r.has(e.planId)))) && void 0 !== t ? t : null;
    }
    getMostRecentPremiumTypeSubscription() {
        return E;
    }
    getPreviousPremiumTypeSubscription() {
        return S;
    }
}
(s = 'SubscriptionStore'),
    (a = 'displayName') in (i = L)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.ZP = new L(l.Z, {
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
            let { subscriptions: t } = e,
                n = {},
                r = {},
                i = [],
                a = [],
                s = f.default.getId();
            t.forEach((e) => {
                if (e.user_id !== s && !b) {
                    A.log('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                        (0, _.g9)('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                            extra: {
                                authUserId: s,
                                subscriptionId: e.id,
                                subscriptionUserId: e.user_id
                            }
                        }),
                        (b = !0);
                    return;
                }
                let t = d.Q.createFromServer(e);
                (n[t.id] = t), R(t) && ((r[t.id] = t), t.type === p.NYc.GUILD && t.status !== p.O0b.ENDED && i.push(t), t.type === p.NYc.APPLICATION && t.status !== p.O0b.ENDED && a.push(t));
            }),
                (m = n),
                (g = r),
                (v = i),
                (I = a);
        },
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function (e) {
            let { subscription: t } = e,
                n = d.Q.createFromServer(t);
            (m = {
                ...m,
                [n.id]: n
            }),
                R(n) &&
                    (g = {
                        ...g,
                        [n.id]: n
                    }),
                null != v &&
                    n.type === p.NYc.GUILD &&
                    (v = N({
                        activeSubscriptions: v,
                        record: n
                    })),
                null != I &&
                    n.type === p.NYc.APPLICATION &&
                    (v = N({
                        activeSubscriptions: I,
                        record: n
                    }));
        },
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
            let { subscription: t } = e;
            if (((T = !0), null != t)) {
                let e = f.default.getId();
                if (t.user_id !== e && !b) {
                    A.log('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                        (0, _.g9)('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                            extra: {
                                authUserId: e,
                                subscriptionId: t.id,
                                subscriptionUserId: t.user_id
                            }
                        }),
                        (T = !1),
                        (b = !0);
                    return;
                }
                E = d.Q.createFromServer(t);
            }
        },
        BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
            let { subscription: t } = e;
            if (((y = !0), null != t)) {
                let e = f.default.getId();
                if (t.user_id !== e && !b) {
                    A.log('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                        (0, _.g9)('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                            extra: {
                                authUserId: e,
                                subscriptionId: t.id,
                                subscriptionUserId: t.user_id
                            }
                        }),
                        (y = !1),
                        (b = !0);
                    return;
                }
                S = d.Q.createFromServer(t);
            }
        },
        BILLING_SUBSCRIPTION_RESET: C,
        LOGOUT: C
    }));
