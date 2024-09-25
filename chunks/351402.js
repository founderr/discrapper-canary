let r, i, a, o;
var s,
    l = n(442837),
    u = n(570140),
    c = n(542974),
    d = n(981631);
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
let E = !1,
    f = !1,
    h = !1,
    p = !1,
    m = !1,
    I = null,
    T = null,
    g = !1,
    S = !1;
function A() {
    (r = void 0), (a = void 0), (i = void 0), (g = !1), (o = null), (T = null), (I = null);
}
function v() {
    E = !0;
}
function N() {
    E = !1;
}
function O() {
    h = !0;
}
function R() {
    h = !1;
}
function C(e) {
    let { error: t } = e;
    (h = !1), (T = t);
}
function y() {
    T = null;
}
function b() {
    f = !0;
}
function L() {
    f = !1;
}
function D(e) {
    let { error: t } = e;
    (f = !1), (I = t);
}
function M() {
    I = null;
}
function P(e) {
    let { request: t } = e;
    r = t;
}
function U() {
    r = void 0;
}
function w() {
    p = !0;
}
function x() {
    p = !1;
}
function G() {
    m = !0;
}
function k() {
    m = !1;
}
function B(e) {
    let { request: t } = e;
    a = t;
}
function F(e) {
    let { countryCode: t } = e;
    i = t;
}
function Z() {
    (i = null), (g = !0);
}
function V(e) {
    let { localizedPricingPromo: t } = e;
    o = c.U.createFromServer(t);
}
function H() {
    (o = null), (S = !0);
}
let Y = (e) => {
    let { countryCode: t } = e;
    null != t && (i = t);
};
class j extends (s = l.ZP.Store) {
    get isBusy() {
        return E || f || m || h;
    }
    get isUpdatingPaymentSource() {
        return f;
    }
    get isRemovingPaymentSource() {
        return h;
    }
    get isSyncing() {
        return this.isPaymentSourceFetching || this.isSubscriptionFetching;
    }
    get isSubscriptionFetching() {
        return p;
    }
    get isPaymentSourceFetching() {
        return null != r;
    }
    get editSourceError() {
        return I;
    }
    get removeSourceError() {
        return T;
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
        return null != i ? i : d.OMz;
    }
    get ipCountryCodeHasError() {
        return g;
    }
    get paymentSourcesFetchRequest() {
        return r;
    }
    get localizedPricingPromo() {
        return o;
    }
    get localizedPricingPromoHasError() {
        return S;
    }
    get isLocalizedPromoEnabled() {
        return null != o;
    }
}
_(j, 'displayName', 'BillingInfoStore'),
    (t.Z = new j(u.Z, {
        BILLING_PAYMENT_SOURCE_CREATE_START: v,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: N,
        BILLING_PAYMENT_SOURCE_CREATE_FAIL: N,
        STRIPE_TOKEN_FAILURE: N,
        BILLING_PAYMENT_SOURCE_REMOVE_START: O,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: R,
        BILLING_PAYMENT_SOURCE_REMOVE_FAIL: C,
        BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: y,
        BILLING_PAYMENT_SOURCE_UPDATE_START: b,
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: L,
        BILLING_PAYMENT_SOURCE_UPDATE_FAIL: D,
        BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: M,
        BILLING_PAYMENT_SOURCES_FETCH_START: P,
        BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: U,
        BILLING_PAYMENT_SOURCES_FETCH_FAIL: U,
        BILLING_SUBSCRIPTION_FETCH_START: w,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: x,
        BILLING_SUBSCRIPTION_FETCH_FAIL: x,
        BILLING_SUBSCRIPTION_UPDATE_START: G,
        BILLING_SUBSCRIPTION_CANCEL_START: G,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: k,
        BILLING_SUBSCRIPTION_UPDATE_FAIL: k,
        BILLING_SUBSCRIPTION_CANCEL_FAIL: k,
        BILLING_SUBSCRIPTION_CANCEL_SUCCESS: k,
        BILLING_IP_COUNTRY_CODE_FETCH_START: B,
        BILLING_SET_IP_COUNTRY_CODE: F,
        BILLING_IP_COUNTRY_CODE_FAILURE: Z,
        BILLING_SET_LOCALIZED_PRICING_PROMO: V,
        BILLING_LOCALIZED_PRICING_PROMO_FAILURE: H,
        LOGOUT: A,
        CONNECTION_OPEN: Y
    }));
