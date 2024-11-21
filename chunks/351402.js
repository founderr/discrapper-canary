let r, i, a, s;
var o,
    l,
    u,
    c,
    d = n(442837),
    f = n(570140),
    _ = n(542974),
    p = n(981631);
let h = !1,
    m = !1,
    g = !1,
    E = !1,
    v = !1,
    b = null,
    I = null,
    T = !1,
    S = !1;
function y() {
    h = !1;
}
function A() {
    r = void 0;
}
function N() {
    E = !1;
}
function C() {
    v = !0;
}
function R() {
    v = !1;
}
class O extends (c = d.ZP.Store) {
    get isBusy() {
        return h || m || v || g;
    }
    get isUpdatingPaymentSource() {
        return m;
    }
    get isRemovingPaymentSource() {
        return g;
    }
    get isSyncing() {
        return this.isPaymentSourceFetching || this.isSubscriptionFetching;
    }
    get isSubscriptionFetching() {
        return E;
    }
    get isPaymentSourceFetching() {
        return null != r;
    }
    get editSourceError() {
        return b;
    }
    get removeSourceError() {
        return I;
    }
    get ipCountryCodeLoaded() {
        return void 0 !== i;
    }
    get ipCountryCode() {
        return i;
    }
    get ipCountryCodeRequest() {
        return a;
    }
    get ipCountryCodeWithFallback() {
        return null != i ? i : p.OMz;
    }
    get ipCountryCodeHasError() {
        return T;
    }
    get paymentSourcesFetchRequest() {
        return r;
    }
    get localizedPricingPromo() {
        return s;
    }
    get localizedPricingPromoHasError() {
        return S;
    }
    get isLocalizedPromoEnabled() {
        return null != s;
    }
}
(u = 'BillingInfoStore'),
    (l = 'displayName') in (o = O)
        ? Object.defineProperty(o, l, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[l] = u),
    (t.Z = new O(f.Z, {
        BILLING_PAYMENT_SOURCE_CREATE_START: function () {
            h = !0;
        },
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: y,
        BILLING_PAYMENT_SOURCE_CREATE_FAIL: y,
        STRIPE_TOKEN_FAILURE: y,
        BILLING_PAYMENT_SOURCE_REMOVE_START: function () {
            g = !0;
        },
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function () {
            g = !1;
        },
        BILLING_PAYMENT_SOURCE_REMOVE_FAIL: function (e) {
            let { error: t } = e;
            (g = !1), (I = t);
        },
        BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: function () {
            I = null;
        },
        BILLING_PAYMENT_SOURCE_UPDATE_START: function () {
            m = !0;
        },
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: function () {
            m = !1;
        },
        BILLING_PAYMENT_SOURCE_UPDATE_FAIL: function (e) {
            let { error: t } = e;
            (m = !1), (b = t);
        },
        BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: function () {
            b = null;
        },
        BILLING_PAYMENT_SOURCES_FETCH_START: function (e) {
            let { request: t } = e;
            r = t;
        },
        BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: A,
        BILLING_PAYMENT_SOURCES_FETCH_FAIL: A,
        BILLING_SUBSCRIPTION_FETCH_START: function () {
            E = !0;
        },
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: N,
        BILLING_SUBSCRIPTION_FETCH_FAIL: N,
        BILLING_SUBSCRIPTION_UPDATE_START: C,
        BILLING_SUBSCRIPTION_CANCEL_START: C,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: R,
        BILLING_SUBSCRIPTION_UPDATE_FAIL: R,
        BILLING_SUBSCRIPTION_CANCEL_FAIL: R,
        BILLING_SUBSCRIPTION_CANCEL_SUCCESS: R,
        BILLING_IP_COUNTRY_CODE_FETCH_START: function (e) {
            let { request: t } = e;
            a = t;
        },
        BILLING_SET_IP_COUNTRY_CODE: function (e) {
            let { countryCode: t } = e;
            i = t;
        },
        BILLING_IP_COUNTRY_CODE_FAILURE: function () {
            (i = null), (T = !0);
        },
        BILLING_SET_LOCALIZED_PRICING_PROMO: function (e) {
            let { localizedPricingPromo: t } = e;
            s = _.U.createFromServer(t);
        },
        BILLING_LOCALIZED_PRICING_PROMO_FAILURE: function () {
            (s = null), (S = !0);
        },
        LOGOUT: function () {
            (r = void 0), (a = void 0), (i = void 0), (T = !1), (s = null), (I = null), (b = null);
        },
        CONNECTION_OPEN: (e) => {
            let { countryCode: t } = e;
            null != t && (i = t);
        }
    }));
