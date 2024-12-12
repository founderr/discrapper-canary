var i,
    a = r(47120);
var s = r(442837),
    o = r(570140),
    l = r(276444),
    u = r(937579),
    c = r(769415),
    d = r(594174),
    f = r(74538),
    _ = r(78839),
    h = r(474936);
function p(e, n, r) {
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
let m = 172800000,
    g = 600000,
    E = {
        userOffersLastFetchedAtDate: void 0,
        userAnnualOfferLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1
    },
    v = E;
function I() {
    v.isFetching = !0;
}
function T(e) {
    let { userTrialOffer: n } = e;
    null != n ? (v.userTrialOffers[n.trial_id] = n) : N(), (v.userOffersLastFetchedAtDate = Date.now()), (v.isFetching = !1);
}
function b(e) {
    let { userTrialOffer: n, userDiscount: r, userDiscountOffer: i } = e;
    null == n && null == r && null == i && N(), null != n ? ((v.userTrialOffers[n.trial_id] = n), (v.userDiscountOffers = {})) : null != r ? ((v.userDiscountOffers[r.discount_id] = r), (v.userTrialOffers = {})) : null != i && ((v.userDiscountOffers[i.discount_id] = i), (v.userTrialOffers = {})), (v.userOffersLastFetchedAtDate = Date.now()), (v.isFetching = !1);
}
function y() {
    N(), (v.userOffersLastFetchedAtDate = Date.now()), (v.isFetching = !1);
}
function S(e) {
    let { userTrialOffer: n } = e;
    null != n ? (v.userTrialOffers[n.trial_id] = n) : (v.userTrialOffers = {}), (v.userOffersLastFetchedAtDate = Date.now());
}
function A(e) {
    let { userTrialOffer: n, userDiscount: r, userDiscountOffer: i } = e;
    null != n ? (v.userTrialOffers[n.trial_id] = n) : (v.userTrialOffers = {}), null != r ? (v.userDiscountOffers[r.discount_id] = r) : null != i ? (v.userDiscountOffers[i.discount_id] = i) : (v.userDiscountOffers = {}), (v.userOffersLastFetchedAtDate = Date.now());
}
function N() {
    (v.userTrialOffers = {}), (v.userDiscountOffers = {}), (v.userOffersLastFetchedAtDate = void 0), (v.userAnnualOfferLastFetchedAtDate = void 0), (v.isFetching = !1);
}
let C = () => !0;
function R() {
    return null != _.ZP.getPremiumTypeSubscription() && ((v.userDiscountOffers = {}), (v.userTrialOffers = {}), !0);
}
function O() {
    let e = d.default.getCurrentUser();
    !(0, f.I5)(e) && Object.keys(v.userDiscountOffers).length > 0 && (0, u.T)('UserOfferStore', void 0, !0);
}
function D() {
    var e;
    let n = null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
    if (null == n) return !1;
    let r = Object.entries(l.Z.getRelevantReferralTrialOffers())
        .map((e) => {
            let [n, r] = e;
            return r;
        })
        .filter((e) => e.user_id === n);
    if (r.length > 0) {
        let e = r[0];
        return (v.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class L extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        (v = null != e ? e : E), this.waitFor(d.default), this.syncWith([d.default], C), this.syncWith([_.ZP], R), this.syncWith([l.Z], D);
    }
    getUserTrialOffer(e) {
        if (null !== e) return v.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return v.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let n of e) if (null != v.userTrialOffers[n]) return n;
        return null;
    }
    hasFetchedOffer() {
        return null != v.userOffersLastFetchedAtDate;
    }
    shouldFetchOffer() {
        var e;
        let n = v.userOffersLastFetchedAtDate,
            r = null !== (e = v.isFetching) && void 0 !== e && e;
        return null == n ? !r : !r && Date.now() - m > n;
    }
    shouldFetchReferralOffer(e) {
        var n;
        let r = v.userOffersLastFetchedAtDate,
            i = null !== (n = v.isFetching) && void 0 !== n && n;
        if (null == r) return !i;
        let a = Date.now() - g > r,
            s = (null != e ? e : 0) > r;
        return !i && (a || s);
    }
    shouldFetchAnnualOffer() {
        let e = v.userAnnualOfferLastFetchedAtDate;
        return null == e || Date.now() - m > e;
    }
    getAlmostExpiringTrialOffers(e) {
        let n = Object.values(h.nG).map((e) => e.id),
            r = d.default.getCurrentUser();
        return (0, f.I5)(r) ? [] : Object.values(v.userTrialOffers).filter((r) => n.includes(r.trial_id) && null != r.expires_at && null != r.subscription_trial && e.includes(r.subscription_trial.sku_id) && Date.parse(r.expires_at) < Date.now() + (r.trial_id === h.jz && c.Z.getCurrentConfig({ location: 'UserOfferStore.getAlmostExpiringTrialOffers' }).enabled ? h.FL : h.ff));
    }
    getAcknowledgedOffers(e) {
        let n = d.default.getCurrentUser();
        return (0, f.I5)(n) ? [] : Object.values(v.userTrialOffers).filter((n) => e.includes(n.trial_id) && null != n.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        var e;
        let n = d.default.getCurrentUser();
        return (0, f.I5)(n) ? [] : Object.values(null !== (e = v.userDiscountOffers) && void 0 !== e ? e : {}).filter((e) => null == e.expires_at && !h.ee.includes(e.discount_id));
    }
    getUnacknowledgedOffers(e) {
        let n = d.default.getCurrentUser();
        return (0, f.I5)(n) ? [] : Object.values(v.userTrialOffers).filter((n) => e.includes(n.trial_id) && null == n.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(v.userTrialOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(v.userDiscountOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    getReferrer(e) {
        var n;
        return null == e ? null : null === (n = v.userTrialOffers[e]) || void 0 === n ? void 0 : n.referrer;
    }
    getState() {
        return v;
    }
    forceReset() {
        N();
    }
}
p(L, 'displayName', 'UserOfferStore'),
    p(L, 'persistKey', 'UserOfferStore'),
    p(L, 'migrations', [
        (e) => {
            let n = null == e ? void 0 : e.userDiscounts;
            if (null != n)
                return {
                    ...e,
                    userDiscountOffers: n
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
    (n.Z = new L(o.Z, {
        BILLING_USER_OFFER_FETCH_START: I,
        BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: T,
        BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: S,
        BILLING_USER_OFFER_FETCH_SUCCESS: b,
        BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: A,
        BILLING_USER_OFFER_FETCH_FAIL: y,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: O,
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: O,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: O,
        LOGOUT: N
    }));
