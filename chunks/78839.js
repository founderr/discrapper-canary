r.d(n, {
    sE: function () {
        return P;
    }
});
var i,
    a = r(653041);
var s = r(47120);
var o = r(442837),
    l = r(570140),
    u = r(710845),
    c = r(301766),
    d = r(255078),
    f = r(314897),
    _ = r(122289),
    h = r(981631),
    p = r(474936);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let g = null,
    E = null,
    v = null,
    I = null,
    T = null,
    b = !1,
    y = !1,
    S = null,
    A = !1,
    N = new u.Z('SubscriptionStore');
function C(e) {
    let { subscriptions: n } = e,
        r = {},
        i = {},
        a = [],
        s = [],
        o = f.default.getId();
    n.forEach((e) => {
        if (e.user_id !== o && !y) {
            N.log('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, _.g9)('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: o,
                        subscriptionId: e.id,
                        subscriptionUserId: e.user_id
                    }
                }),
                (y = !0);
            return;
        }
        let n = d.Q.createFromServer(e);
        (r[n.id] = n), w(n) && ((i[n.id] = n), n.type === h.NYc.GUILD && n.status !== h.O0b.ENDED && a.push(n), n.type === h.NYc.APPLICATION && n.status !== h.O0b.ENDED && s.push(n));
    }),
        (g = r),
        (E = i),
        (I = a),
        (T = s);
}
function R(e) {
    let { activeSubscriptions: n, record: r } = e,
        i = n.findIndex((e) => e.id === r.id);
    if (-1 === i) return [r, ...n];
    {
        let e = [...n];
        return w(r) && r.status !== h.O0b.ENDED ? (e[i] = r) : e.splice(i, 1), e;
    }
}
function O(e) {
    let { subscription: n } = e,
        r = d.Q.createFromServer(n);
    (g = {
        ...g,
        [r.id]: r
    }),
        w(r) &&
            (E = {
                ...E,
                [r.id]: r
            }),
        null != I &&
            r.type === h.NYc.GUILD &&
            (I = R({
                activeSubscriptions: I,
                record: r
            })),
        null != T &&
            r.type === h.NYc.APPLICATION &&
            (I = R({
                activeSubscriptions: T,
                record: r
            }));
}
function D(e) {
    let { subscription: n } = e;
    if (((b = !0), null != n)) {
        let e = f.default.getId();
        if (n.user_id !== e && !y) {
            N.log('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, _.g9)('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: n.id,
                        subscriptionUserId: n.user_id
                    }
                }),
                (b = !1),
                (y = !0);
            return;
        }
        v = d.Q.createFromServer(n);
    }
}
function L(e) {
    let { subscription: n } = e;
    if (((A = !0), null != n)) {
        let e = f.default.getId();
        if (n.user_id !== e && !y) {
            N.log('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'),
                (0, _.g9)('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: n.id,
                        subscriptionUserId: n.user_id
                    }
                }),
                (A = !1),
                (y = !0);
            return;
        }
        S = d.Q.createFromServer(n);
    }
}
function x() {
    (g = null), (E = null), (v = null), (I = null), (T = null), (b = !1), (y = !1), (S = null), (A = !1);
}
function w(e) {
    return e.status !== h.O0b.UNPAID;
}
function P(e) {
    let n = f.default.getId();
    return e.userId === n;
}
function M(e, n) {
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = r ? E : g;
    if (null == i) return null;
    for (let r in i) {
        let a = i[r];
        if (!P(a)) {
            if (!y) {
                let e = f.default.getId();
                N.log('user id mismatch between logged in user and SubscriptionStore user'),
                    (0, _.g9)('user id mismatch between logged in user and SubscriptionStore user', {
                        extra: {
                            authUserId: e,
                            subscriptionId: a.id,
                            subscriptionUserId: a.userId
                        }
                    }),
                    (y = !0);
            }
            break;
        }
        if (a.type === e && (null == n || n(a))) return a;
    }
    return null;
}
class k extends (i = o.ZP.Store) {
    hasFetchedSubscriptions() {
        return null != g;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return b;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return A;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return M(h.NYc.PREMIUM, (e) => !(0, c.Q0)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return M(h.NYc.PREMIUM, void 0, e);
    }
    inReverseTrial() {
        let e = M(h.NYc.PREMIUM, void 0, !0);
        return !!(null != e && null != e.trialId && p.h8.includes(e.trialId)) && null == e.paymentSourceId;
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? E : g;
    }
    getSubscriptionById(e) {
        var n;
        return null !== (n = null == g ? void 0 : g[e]) && void 0 !== n ? n : void 0;
    }
    getActiveGuildSubscriptions() {
        return I;
    }
    getActiveApplicationSubscriptions() {
        return T;
    }
    getSubscriptionForPlanIds(e) {
        var n;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = new Set(e),
            a = r ? E : g;
        return null == a ? null : null !== (n = Object.values(a).find((e) => e.items.some((e) => i.has(e.planId)))) && void 0 !== n ? n : null;
    }
    getMostRecentPremiumTypeSubscription() {
        return v;
    }
    getPreviousPremiumTypeSubscription() {
        return S;
    }
}
m(k, 'displayName', 'SubscriptionStore'),
    (n.ZP = new k(l.Z, {
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: C,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: O,
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: D,
        BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: L,
        BILLING_SUBSCRIPTION_RESET: x,
        LOGOUT: x
    }));
