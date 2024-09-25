var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(276444),
    l = n(937579),
    u = n(594174),
    c = n(74538),
    d = n(78839),
    _ = n(474936);
function E(e, t, n) {
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
let f = 172800000,
    h = {
        userOffersLastFetchedAtDate: void 0,
        userAnnualOfferLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1
    },
    p = h;
function m() {
    p.isFetching = !0;
}
function I(e) {
    let { userTrialOffer: t } = e;
    null != t ? (p.userTrialOffers[t.trial_id] = t) : v(), (p.userOffersLastFetchedAtDate = Date.now()), (p.isFetching = !1);
}
function T(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null == t && null == n && null == r && v(), null != t ? ((p.userTrialOffers[t.trial_id] = t), (p.userDiscountOffers = {})) : null != n ? ((p.userDiscountOffers[n.discount_id] = n), (p.userTrialOffers = {})) : null != r && ((p.userDiscountOffers[r.discount_id] = r), (p.userTrialOffers = {})), (p.userOffersLastFetchedAtDate = Date.now()), (p.isFetching = !1);
}
function g() {
    v(), (p.userOffersLastFetchedAtDate = Date.now()), (p.isFetching = !1);
}
function S(e) {
    let { userTrialOffer: t } = e;
    null != t ? (p.userTrialOffers[t.trial_id] = t) : (p.userTrialOffers = {}), (p.userOffersLastFetchedAtDate = Date.now());
}
function A(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null != t ? (p.userTrialOffers[t.trial_id] = t) : (p.userTrialOffers = {}), null != n ? (p.userDiscountOffers[n.discount_id] = n) : null != r ? (p.userDiscountOffers[r.discount_id] = r) : (p.userDiscountOffers = {}), (p.userOffersLastFetchedAtDate = Date.now());
}
function v() {
    (p.userTrialOffers = {}), (p.userDiscountOffers = {}), (p.userOffersLastFetchedAtDate = void 0), (p.userAnnualOfferLastFetchedAtDate = void 0), (p.isFetching = !1);
}
let N = () => !0;
function O() {
    return null != d.ZP.getPremiumTypeSubscription() && ((p.userDiscountOffers = {}), (p.userTrialOffers = {}), !0);
}
function R() {
    let e = u.default.getCurrentUser();
    !(0, c.I5)(e) && Object.keys(p.userDiscountOffers).length > 0 && (0, l.T)('UserOfferStore', !0);
}
function C() {
    var e;
    let t = null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
    if (null == t) return !1;
    let n = Object.entries(s.Z.getRelevantReferralTrialOffers())
        .map((e) => {
            let [t, n] = e;
            return n;
        })
        .filter((e) => e.user_id === t);
    if (n.length > 0) {
        let e = n[0];
        return (p.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class y extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        (p = null != e ? e : h), this.waitFor(u.default), this.syncWith([u.default], N), this.syncWith([d.ZP], O), this.syncWith([s.Z], C);
    }
    getUserTrialOffer(e) {
        if (null !== e) return p.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return p.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != p.userTrialOffers[t]) return t;
        return null;
    }
    hasFetchedOffer() {
        return null != p.userOffersLastFetchedAtDate;
    }
    shouldFetchOffer() {
        var e;
        let t = p.userOffersLastFetchedAtDate,
            n = null !== (e = p.isFetching) && void 0 !== e && e;
        return null == t ? !n : !n && Date.now() - f > t;
    }
    shouldFetchAnnualOffer() {
        let e = p.userAnnualOfferLastFetchedAtDate;
        return null == e || Date.now() - f > e;
    }
    getAlmostExpiringTrialOffers(e) {
        let t = Object.values(_.nG).map((e) => e.id),
            n = u.default.getCurrentUser();
        return (0, c.I5)(n) ? [] : Object.values(p.userTrialOffers).filter((n) => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + _.ff);
    }
    getAcknowledgedOffers(e) {
        let t = u.default.getCurrentUser();
        return (0, c.I5)(t) ? [] : Object.values(p.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        var e;
        let t = u.default.getCurrentUser();
        return (0, c.I5)(t) ? [] : Object.values(null !== (e = p.userDiscountOffers) && void 0 !== e ? e : {}).filter((e) => null == e.expires_at && !_.ee.includes(e.discount_id));
    }
    getUnacknowledgedOffers(e) {
        let t = u.default.getCurrentUser();
        return (0, c.I5)(t) ? [] : Object.values(p.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(p.userTrialOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(p.userDiscountOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    getReferrer(e) {
        var t;
        return null == e ? null : null === (t = p.userTrialOffers[e]) || void 0 === t ? void 0 : t.referrer;
    }
    getState() {
        return p;
    }
    forceReset() {
        v();
    }
}
E(y, 'displayName', 'UserOfferStore'),
    E(y, 'persistKey', 'UserOfferStore'),
    E(y, 'migrations', [
        (e) => {
            let t = null == e ? void 0 : e.userDiscounts;
            if (null != t)
                return {
                    ...e,
                    userDiscountOffers: t
                };
        },
        (e) => {
            if (null != e)
                return (null == e ? void 0 : e.userAnnualOfferLastFetchedAtDate) == null
                    ? {
                          ...e,
                          userAnnualOfferLastFetchedAtDate: void 0
                      }
                    : e;
        },
        (e) => {
            if (null != e)
                return (null == e ? void 0 : e.isFetching) == null
                    ? {
                          ...e,
                          isFetching: !1
                      }
                    : e;
        }
    ]),
    (t.Z = new y(o.Z, {
        BILLING_USER_OFFER_FETCH_START: m,
        BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: I,
        BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: S,
        BILLING_USER_OFFER_FETCH_SUCCESS: T,
        BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: A,
        BILLING_USER_OFFER_FETCH_FAIL: g,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: R,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: R,
        LOGOUT: v
    }));
