var r,
    E,
    i,
    u,
    S = n(442837),
    o = n(570140),
    l = n(622999);
let _ = '',
    A = null,
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
    L = null,
    O = null,
    p = null,
    D = null;
function G() {
    (T = null), (_ = ''), (A = null), (a = ''), (I = !1), (c = null), (R = 'US'), (C = ''), (N = ''), (s = ''), (M = ''), (P = ''), (U = ''), (d = ''), (f = !1), (L = null), (O = null), (p = null), (D = null);
}
function Z(t) {
    (C = t.name), (R = t.country), (s = t.line1), (M = t.line2), (P = t.city), (U = t.postalCode), (d = t.state), (N = t.email);
}
function B() {
    L = null;
}
function F(t) {
    let { error: e } = t;
    L = e;
}
class K extends (u = S.ZP.Store) {
    get stripePaymentMethod() {
        return T;
    }
    get popupCallbackCalled() {
        return p;
    }
    get braintreeEmail() {
        return _;
    }
    get braintreeNonce() {
        return A;
    }
    get venmoUsername() {
        return a;
    }
    get redirectedPaymentId() {
        return O;
    }
    get adyenPaymentData() {
        return c;
    }
    get redirectedPaymentSourceId() {
        return D;
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
        return L;
    }
}
(i = 'NewPaymentSourceStore'),
    (E = 'displayName') in (r = K)
        ? Object.defineProperty(r, E, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[E] = i),
    (e.Z = new K(o.Z, {
        NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function (t) {
            let { stripePaymentMethod: e } = t;
            if (null == e) {
                G();
                return;
            }
            T = e;
            let { billingAddressInfo: n } = l.az(T);
            Z(n);
        },
        NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (t) {
            let { info: e, isValid: n } = t;
            (C = e.name), (I = n);
        },
        NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (t) {
            let { info: e, isValid: n } = t;
            null != e.name && '' !== e.name && (C = e.name), (R = e.country), (C = e.name), (s = e.line1), (M = e.line2), (P = e.city), (U = e.postalCode), (d = e.state), (N = e.email), (f = n);
        },
        BRAINTREE_TOKENIZE_PAYPAL_START: function () {
            (_ = ''), (A = null);
        },
        BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (t) {
            let { email: e, nonce: n, billingAddress: r } = t;
            (_ = e), (A = n), Z(r), (f = R.length > 0);
        },
        BRAINTREE_TOKENIZE_VENMO_START: function () {
            (a = ''), (A = null);
        },
        BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (t) {
            let { username: e, nonce: n } = t;
            (a = e), (A = n);
        },
        ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (t) {
            let { data: e } = t;
            c = e;
        },
        BILLING_PAYMENT_SOURCE_CREATE_START: B,
        MODAL_POP: B,
        NEW_PAYMENT_SOURCE_CLEAR_ERROR: B,
        BILLING_PAYMENT_SOURCE_CREATE_FAIL: F,
        STRIPE_TOKEN_FAILURE: F,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: G,
        LOGOUT: G,
        BILLING_POPUP_BRIDGE_CALLBACK: function (t) {
            let { query: e } = t;
            (null == e ? void 0 : e.payment_id) != null ? ((p = !0), (O = e.payment_id)) : (null == e ? void 0 : e.payment_source_id) != null && ((p = !0), (D = e.payment_source_id));
        },
        RESET_PAYMENT_ID: function () {
            (p = !1), (O = null);
        }
    }));
