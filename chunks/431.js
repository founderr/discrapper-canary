n(47120);
var r,
    i = n(442837),
    a = n(570140),
    s = n(276444),
    o = n(937579),
    l = n(769415),
    u = n(594174),
    c = n(74538),
    d = n(78839),
    f = n(474936);
function _(e, t, n) {
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
let p = {
        userOffersLastFetchedAtDate: void 0,
        userAnnualOfferLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1
    },
    h = p;
function m() {
    (h.userTrialOffers = {}), (h.userDiscountOffers = {}), (h.userOffersLastFetchedAtDate = void 0), (h.userAnnualOfferLastFetchedAtDate = void 0), (h.isFetching = !1);
}
let g = () => !0;
function E() {
    return null != d.ZP.getPremiumTypeSubscription() && ((h.userDiscountOffers = {}), (h.userTrialOffers = {}), !0);
}
function v() {
    let e = u.default.getCurrentUser();
    !(0, c.I5)(e) && Object.keys(h.userDiscountOffers).length > 0 && (0, o.T)('UserOfferStore', !0);
}
function b() {
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
        return (h.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class I extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (h = null != e ? e : p), this.waitFor(u.default), this.syncWith([u.default], g), this.syncWith([d.ZP], E), this.syncWith([s.Z], b);
    }
    getUserTrialOffer(e) {
        if (null !== e) return h.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return h.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != h.userTrialOffers[t]) return t;
        return null;
    }
    hasFetchedOffer() {
        return null != h.userOffersLastFetchedAtDate;
    }
    shouldFetchOffer() {
        var e;
        let t = h.userOffersLastFetchedAtDate,
            n = null !== (e = h.isFetching) && void 0 !== e && e;
        return null == t ? !n : !n && Date.now() - 172800000 > t;
    }
    shouldFetchAnnualOffer() {
        let e = h.userAnnualOfferLastFetchedAtDate;
        return null == e || Date.now() - 172800000 > e;
    }
    getAlmostExpiringTrialOffers(e) {
        let t = Object.values(f.nG).map((e) => e.id),
            n = u.default.getCurrentUser();
        return (0, c.I5)(n) ? [] : Object.values(h.userTrialOffers).filter((n) => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + (n.trial_id === f.jz && l.Z.getCurrentConfig({ location: 'UserOfferStore.getAlmostExpiringTrialOffers' }).enabled ? f.FL : f.ff));
    }
    getAcknowledgedOffers(e) {
        let t = u.default.getCurrentUser();
        return (0, c.I5)(t) ? [] : Object.values(h.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        var e;
        let t = u.default.getCurrentUser();
        return (0, c.I5)(t) ? [] : Object.values(null !== (e = h.userDiscountOffers) && void 0 !== e ? e : {}).filter((e) => null == e.expires_at && !f.ee.includes(e.discount_id));
    }
    getUnacknowledgedOffers(e) {
        let t = u.default.getCurrentUser();
        return (0, c.I5)(t) ? [] : Object.values(h.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(h.userTrialOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(h.userDiscountOffers).some((e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    getReferrer(e) {
        var t;
        return null == e ? null : null === (t = h.userTrialOffers[e]) || void 0 === t ? void 0 : t.referrer;
    }
    getState() {
        return h;
    }
    forceReset() {
        m();
    }
}
_(I, 'displayName', 'UserOfferStore'),
    _(I, 'persistKey', 'UserOfferStore'),
    _(I, 'migrations', [
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
    (t.Z = new I(a.Z, {
        BILLING_USER_OFFER_FETCH_START: function () {
            h.isFetching = !0;
        },
        BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function (e) {
            let { userTrialOffer: t } = e;
            null != t ? (h.userTrialOffers[t.trial_id] = t) : m(), (h.userOffersLastFetchedAtDate = Date.now()), (h.isFetching = !1);
        },
        BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
            let { userTrialOffer: t } = e;
            null != t ? (h.userTrialOffers[t.trial_id] = t) : (h.userTrialOffers = {}), (h.userOffersLastFetchedAtDate = Date.now());
        },
        BILLING_USER_OFFER_FETCH_SUCCESS: function (e) {
            let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
            null == t && null == n && null == r && m(), null != t ? ((h.userTrialOffers[t.trial_id] = t), (h.userDiscountOffers = {})) : null != n ? ((h.userDiscountOffers[n.discount_id] = n), (h.userTrialOffers = {})) : null != r && ((h.userDiscountOffers[r.discount_id] = r), (h.userTrialOffers = {})), (h.userOffersLastFetchedAtDate = Date.now()), (h.isFetching = !1);
        },
        BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
            let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
            null != t ? (h.userTrialOffers[t.trial_id] = t) : (h.userTrialOffers = {}), null != n ? (h.userDiscountOffers[n.discount_id] = n) : null != r ? (h.userDiscountOffers[r.discount_id] = r) : (h.userDiscountOffers = {}), (h.userOffersLastFetchedAtDate = Date.now());
        },
        BILLING_USER_OFFER_FETCH_FAIL: function () {
            m(), (h.userOffersLastFetchedAtDate = Date.now()), (h.isFetching = !1);
        },
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: v,
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: v,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: v,
        LOGOUT: m
    }));
