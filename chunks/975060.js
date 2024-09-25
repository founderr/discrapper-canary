var r,
    i = n(442837),
    a = n(570140),
    o = n(622999);
function s(e, t, n) {
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
let l = '',
    u = null,
    c = '',
    d = null,
    _ = !1,
    E = null,
    f = '',
    h = '',
    p = '',
    m = '',
    I = '',
    T = '',
    g = '',
    S = '',
    A = !1,
    v = null,
    N = null,
    O = null,
    R = null;
function C() {
    (d = null), (l = ''), (u = null), (c = ''), (_ = !1), (E = null), (f = 'US'), (h = ''), (p = ''), (m = ''), (I = ''), (T = ''), (g = ''), (S = ''), (A = !1), (v = null), (N = null), (O = null), (R = null);
}
function y(e) {
    (h = e.name), (f = e.country), (m = e.line1), (I = e.line2), (T = e.city), (g = e.postalCode), (S = e.state), (p = e.email);
}
function b(e) {
    let { stripePaymentMethod: t } = e;
    if (null == t) {
        C();
        return;
    }
    d = t;
    let { billingAddressInfo: n } = o.az(d);
    y(n);
}
function L() {
    (l = ''), (u = null);
}
function D(e) {
    let { email: t, nonce: n, billingAddress: r } = e;
    (l = t), (u = n), y(r), (A = f.length > 0);
}
function M() {
    (c = ''), (u = null);
}
function P(e) {
    let { username: t, nonce: n } = e;
    (c = t), (u = n);
}
function U(e) {
    let { info: t, isValid: n } = e;
    (h = t.name), (_ = n);
}
function w(e) {
    let { info: t, isValid: n } = e;
    null != t.name && '' !== t.name && (h = t.name), (f = t.country), (h = t.name), (m = t.line1), (I = t.line2), (T = t.city), (g = t.postalCode), (S = t.state), (p = t.email), (A = n);
}
function x(e) {
    let { data: t } = e;
    E = t;
}
function G() {
    v = null;
}
function k(e) {
    let { error: t } = e;
    v = t;
}
function B(e) {
    let { query: t } = e;
    (null == t ? void 0 : t.payment_id) != null ? ((O = !0), (N = t.payment_id)) : (null == t ? void 0 : t.payment_source_id) != null && ((O = !0), (R = t.payment_source_id));
}
function F() {
    (O = !1), (N = null);
}
class Z extends (r = i.ZP.Store) {
    get stripePaymentMethod() {
        return d;
    }
    get popupCallbackCalled() {
        return O;
    }
    get braintreeEmail() {
        return l;
    }
    get braintreeNonce() {
        return u;
    }
    get venmoUsername() {
        return c;
    }
    get redirectedPaymentId() {
        return N;
    }
    get adyenPaymentData() {
        return E;
    }
    get redirectedPaymentSourceId() {
        return R;
    }
    getCreditCardInfo() {
        return { name: h };
    }
    get isCardInfoValid() {
        return _;
    }
    getBillingAddressInfo() {
        return {
            name: h,
            email: p,
            country: f,
            line1: m,
            line2: I,
            city: T,
            postalCode: g,
            state: S
        };
    }
    get isBillingAddressInfoValid() {
        return A;
    }
    get error() {
        return v;
    }
}
s(Z, 'displayName', 'NewPaymentSourceStore'),
    (t.Z = new Z(a.Z, {
        NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: b,
        NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: U,
        NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: w,
        BRAINTREE_TOKENIZE_PAYPAL_START: L,
        BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: D,
        BRAINTREE_TOKENIZE_VENMO_START: M,
        BRAINTREE_TOKENIZE_VENMO_SUCCESS: P,
        ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: x,
        BILLING_PAYMENT_SOURCE_CREATE_START: G,
        MODAL_POP: G,
        NEW_PAYMENT_SOURCE_CLEAR_ERROR: G,
        BILLING_PAYMENT_SOURCE_CREATE_FAIL: k,
        STRIPE_TOKEN_FAILURE: k,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: C,
        LOGOUT: C,
        BILLING_POPUP_BRIDGE_CALLBACK: B,
        RESET_PAYMENT_ID: F
    }));
