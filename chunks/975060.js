var E,
    r,
    u,
    i,
    S = n(442837),
    _ = n(570140),
    o = n(622999);
let A = '',
    l = null,
    a = '',
    T = null,
    I = !1,
    c = null,
    R = '',
    C = '',
    N = '',
    s = '',
    M = '',
    P = '',
    U = '',
    d = '',
    f = !1,
    O = null,
    L = null,
    p = null,
    G = null;
function Z() {
    (T = null), (A = ''), (l = null), (a = ''), (I = !1), (c = null), (R = 'US'), (C = ''), (N = ''), (s = ''), (M = ''), (P = ''), (U = ''), (d = ''), (f = !1), (O = null), (L = null), (p = null), (G = null);
}
function D(e) {
    (C = e.name), (R = e.country), (s = e.line1), (M = e.line2), (P = e.city), (U = e.postalCode), (d = e.state), (N = e.email);
}
function B() {
    O = null;
}
function F(e) {
    let { error: t } = e;
    O = t;
}
class K extends (i = S.ZP.Store) {
    get stripePaymentMethod() {
        return T;
    }
    get popupCallbackCalled() {
        return p;
    }
    get braintreeEmail() {
        return A;
    }
    get braintreeNonce() {
        return l;
    }
    get venmoUsername() {
        return a;
    }
    get redirectedPaymentId() {
        return L;
    }
    get adyenPaymentData() {
        return c;
    }
    get redirectedPaymentSourceId() {
        return G;
    }
    getCreditCardInfo() {
        return { name: C };
    }
    get isCardInfoValid() {
        return I;
    }
    getBillingAddressInfo() {
        return {
            name: C,
            email: N,
            country: R,
            line1: s,
            line2: M,
            city: P,
            postalCode: U,
            state: d
        };
    }
    get isBillingAddressInfoValid() {
        return f;
    }
    get error() {
        return O;
    }
}
(u = 'NewPaymentSourceStore'),
    (r = 'displayName') in (E = K)
        ? Object.defineProperty(E, r, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (E[r] = u),
    (t.Z = new K(_.Z, {
        NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function (e) {
            let { stripePaymentMethod: t } = e;
            if (null == t) {
                Z();
                return;
            }
            T = t;
            let { billingAddressInfo: n } = o.az(T);
            D(n);
        },
        NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
            let { info: t, isValid: n } = e;
            (C = t.name), (I = n);
        },
        NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
            let { info: t, isValid: n } = e;
            null != t.name && '' !== t.name && (C = t.name), (R = t.country), (C = t.name), (s = t.line1), (M = t.line2), (P = t.city), (U = t.postalCode), (d = t.state), (N = t.email), (f = n);
        },
        BRAINTREE_TOKENIZE_PAYPAL_START: function () {
            (A = ''), (l = null);
        },
        BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
            let { email: t, nonce: n, billingAddress: E } = e;
            (A = t), (l = n), D(E), (f = R.length > 0);
        },
        BRAINTREE_TOKENIZE_VENMO_START: function () {
            (a = ''), (l = null);
        },
        BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
            let { username: t, nonce: n } = e;
            (a = t), (l = n);
        },
        ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
            let { data: t } = e;
            c = t;
        },
        BILLING_PAYMENT_SOURCE_CREATE_START: B,
        MODAL_POP: B,
        NEW_PAYMENT_SOURCE_CLEAR_ERROR: B,
        BILLING_PAYMENT_SOURCE_CREATE_FAIL: F,
        STRIPE_TOKEN_FAILURE: F,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: Z,
        LOGOUT: Z,
        BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
            let { query: t } = e;
            (null == t ? void 0 : t.payment_id) != null ? ((p = !0), (L = t.payment_id)) : (null == t ? void 0 : t.payment_source_id) != null && ((p = !0), (G = t.payment_source_id));
        },
        RESET_PAYMENT_ID: function () {
            (p = !1), (L = null);
        }
    }));
