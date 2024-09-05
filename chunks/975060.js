var i,
    r,
    u,
    l,
    o = n(442837),
    E = n(570140),
    a = n(622999);
let _ = '',
    S = null,
    s = '',
    A = null,
    c = !1,
    I = null,
    T = '',
    d = '',
    R = '',
    C = '',
    N = '',
    M = '',
    P = '',
    f = '',
    U = !1,
    L = null,
    O = null,
    h = null,
    p = null;
function m() {
    (A = null), (_ = ''), (S = null), (s = ''), (c = !1), (I = null), (T = 'US'), (d = ''), (R = ''), (C = ''), (N = ''), (M = ''), (P = ''), (f = ''), (U = !1), (L = null), (O = null), (h = null), (p = null);
}
function G(e) {
    (d = e.name), (T = e.country), (C = e.line1), (N = e.line2), (M = e.city), (P = e.postalCode), (f = e.state), (R = e.email);
}
function D() {
    L = null;
}
function Z(e) {
    let { error: t } = e;
    L = t;
}
class F extends (l = o.ZP.Store) {
    get stripePaymentMethod() {
        return A;
    }
    get popupCallbackCalled() {
        return h;
    }
    get braintreeEmail() {
        return _;
    }
    get braintreeNonce() {
        return S;
    }
    get venmoUsername() {
        return s;
    }
    get redirectedPaymentId() {
        return O;
    }
    get adyenPaymentData() {
        return I;
    }
    get redirectedPaymentSourceId() {
        return p;
    }
    getCreditCardInfo() {
        return { name: d };
    }
    get isCardInfoValid() {
        return c;
    }
    getBillingAddressInfo() {
        return {
            name: d,
            email: R,
            country: T,
            line1: C,
            line2: N,
            city: M,
            postalCode: P,
            state: f
        };
    }
    get isBillingAddressInfoValid() {
        return U;
    }
    get error() {
        return L;
    }
}
(u = 'NewPaymentSourceStore'),
    (r = 'displayName') in (i = F)
        ? Object.defineProperty(i, r, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = u),
    (t.Z = new F(E.Z, {
        NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function (e) {
            let { stripePaymentMethod: t } = e;
            if (null == t) {
                m();
                return;
            }
            A = t;
            let { billingAddressInfo: n } = a.az(A);
            G(n);
        },
        NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
            let { info: t, isValid: n } = e;
            (d = t.name), (c = n);
        },
        NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
            let { info: t, isValid: n } = e;
            null != t.name && '' !== t.name && (d = t.name), (T = t.country), (d = t.name), (C = t.line1), (N = t.line2), (M = t.city), (P = t.postalCode), (f = t.state), (R = t.email), (U = n);
        },
        BRAINTREE_TOKENIZE_PAYPAL_START: function () {
            (_ = ''), (S = null);
        },
        BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
            let { email: t, nonce: n, billingAddress: i } = e;
            (_ = t), (S = n), G(i), (U = T.length > 0);
        },
        BRAINTREE_TOKENIZE_VENMO_START: function () {
            (s = ''), (S = null);
        },
        BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
            let { username: t, nonce: n } = e;
            (s = t), (S = n);
        },
        ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
            let { data: t } = e;
            I = t;
        },
        BILLING_PAYMENT_SOURCE_CREATE_START: D,
        MODAL_POP: D,
        NEW_PAYMENT_SOURCE_CLEAR_ERROR: D,
        BILLING_PAYMENT_SOURCE_CREATE_FAIL: Z,
        STRIPE_TOKEN_FAILURE: Z,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: m,
        LOGOUT: m,
        BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
            let { query: t } = e;
            (null == t ? void 0 : t.payment_id) != null ? ((h = !0), (O = t.payment_id)) : (null == t ? void 0 : t.payment_source_id) != null && ((h = !0), (p = t.payment_source_id));
        },
        RESET_PAYMENT_ID: function () {
            (h = !1), (O = null);
        }
    }));
