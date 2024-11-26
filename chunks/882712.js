n.d(e, {
    I: function () {
        return S;
    }
});
var r,
    E,
    i,
    u,
    S,
    o,
    _ = n(442837),
    l = n(570140),
    A = n(128069),
    a = n(38618);
((r = S || (S = {}))[(r.UNKNOWN = 0)] = 'UNKNOWN'), (r[(r.PENDING = 1)] = 'PENDING'), (r[(r.SUCCESS = 2)] = 'SUCCESS'), (r[(r.ERROR = 3)] = 'ERROR');
let T = 0,
    I = null,
    c = null;
function R(t) {
    let { error: e } = t,
        n = e instanceof A.ZP ? e : new A.ZP(e);
    a.Z.isConnected() && n.code === A.ZP.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (T = 1);
}
function C() {
    (T = 0), (I = null), (c = null);
}
class N extends (o = _.ZP.Store) {
    get purchaseTokenAuthState() {
        return T;
    }
    get purchaseTokenHash() {
        return I;
    }
    get expiresAt() {
        return c;
    }
}
(u = 'PurchaseTokenAuthStore'),
    (i = 'displayName') in (E = N)
        ? Object.defineProperty(E, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (E[i] = u),
    (e.Z = new N(l.Z, {
        SKU_PURCHASE_FAIL: R,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: R,
        USER_PAYMENT_CLIENT_ADD: function (t) {
            (T = 2), (I = t.purchaseTokenHash), (c = t.expiresAt);
        },
        BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: C,
        BILLING_SUBSCRIPTION_UPDATE_START: C,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: C,
        PREMIUM_PAYMENT_ERROR_CLEAR: C,
        PREMIUM_PAYMENT_MODAL_CLOSE: C,
        PREMIUM_PAYMENT_MODAL_OPEN: C,
        PREMIUM_PAYMENT_SUBSCRIBE_START: C,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: C,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: C,
        SKU_PURCHASE_MODAL_CLOSE: C,
        SKU_PURCHASE_MODAL_OPEN: C,
        SKU_PURCHASE_START: C,
        SKU_PURCHASE_SUCCESS: C
    }));
