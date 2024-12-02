var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(622999);
let c = '',
    d = null,
    f = '',
    _ = null,
    p = !1,
    h = null,
    m = '',
    g = '',
    E = '',
    v = '',
    I = '',
    T = '',
    b = '',
    S = '',
    y = !1,
    A = null,
    N = null,
    C = null,
    R = null;
function O() {
    (_ = null), (c = ''), (d = null), (f = ''), (p = !1), (h = null), (m = 'US'), (g = ''), (E = ''), (v = ''), (I = ''), (T = ''), (b = ''), (S = ''), (y = !1), (A = null), (N = null), (C = null), (R = null);
}
function D(e) {
    (g = e.name), (m = e.country), (v = e.line1), (I = e.line2), (T = e.city), (b = e.postalCode), (S = e.state), (E = e.email);
}
function L() {
    A = null;
}
function x(e) {
    let { error: t } = e;
    A = t;
}
class w extends (s = o.ZP.Store) {
    get stripePaymentMethod() {
        return _;
    }
    get popupCallbackCalled() {
        return C;
    }
    get braintreeEmail() {
        return c;
    }
    get braintreeNonce() {
        return d;
    }
    get venmoUsername() {
        return f;
    }
    get redirectedPaymentId() {
        return N;
    }
    get adyenPaymentData() {
        return h;
    }
    get redirectedPaymentSourceId() {
        return R;
    }
    getCreditCardInfo() {
        return { name: g };
    }
    get isCardInfoValid() {
        return p;
    }
    getBillingAddressInfo() {
        return {
            name: g,
            email: E,
            country: m,
            line1: v,
            line2: I,
            city: T,
            postalCode: b,
            state: S
        };
    }
    get isBillingAddressInfoValid() {
        return y;
    }
    get error() {
        return A;
    }
}
(a = 'NewPaymentSourceStore'),
    (i = 'displayName') in (r = w)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new w(l.Z, {
        NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function (e) {
            let { stripePaymentMethod: t } = e;
            if (null == t) {
                O();
                return;
            }
            _ = t;
            let { billingAddressInfo: n } = u.az(_);
            D(n);
        },
        NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
            let { info: t, isValid: n } = e;
            (g = t.name), (p = n);
        },
        NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
            let { info: t, isValid: n } = e;
            null != t.name && '' !== t.name && (g = t.name), (m = t.country), (g = t.name), (v = t.line1), (I = t.line2), (T = t.city), (b = t.postalCode), (S = t.state), (E = t.email), (y = n);
        },
        BRAINTREE_TOKENIZE_PAYPAL_START: function () {
            (c = ''), (d = null);
        },
        BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
            let { email: t, nonce: n, billingAddress: r } = e;
            (c = t), (d = n), D(r), (y = m.length > 0);
        },
        BRAINTREE_TOKENIZE_VENMO_START: function () {
            (f = ''), (d = null);
        },
        BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
            let { username: t, nonce: n } = e;
            (f = t), (d = n);
        },
        ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
            let { data: t } = e;
            h = t;
        },
        BILLING_PAYMENT_SOURCE_CREATE_START: L,
        MODAL_POP: L,
        NEW_PAYMENT_SOURCE_CLEAR_ERROR: L,
        BILLING_PAYMENT_SOURCE_CREATE_FAIL: x,
        STRIPE_TOKEN_FAILURE: x,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: O,
        LOGOUT: O,
        BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
            let { query: t } = e;
            (null == t ? void 0 : t.payment_id) != null ? ((C = !0), (N = t.payment_id)) : (null == t ? void 0 : t.payment_source_id) != null && ((C = !0), (R = t.payment_source_id));
        },
        RESET_PAYMENT_ID: function () {
            (C = !1), (N = null);
        }
    }));
