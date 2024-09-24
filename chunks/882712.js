n.d(t, {
    I: function () {
        return S;
    }
});
var E,
    r,
    u,
    i,
    S,
    _,
    o = n(442837),
    A = n(570140),
    l = n(128069),
    a = n(38618);
((E = S || (S = {}))[(E.UNKNOWN = 0)] = 'UNKNOWN'), (E[(E.PENDING = 1)] = 'PENDING'), (E[(E.SUCCESS = 2)] = 'SUCCESS'), (E[(E.ERROR = 3)] = 'ERROR');
let T = 0,
    I = null,
    c = null;
function R(e) {
    let { error: t } = e,
        n = t instanceof l.ZP ? t : new l.ZP(t);
    a.Z.isConnected() && n.code === l.ZP.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (T = 1);
}
function C() {
    (T = 0), (I = null), (c = null);
}
class N extends (_ = o.ZP.Store) {
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
(i = 'PurchaseTokenAuthStore'),
    (u = 'displayName') in (r = N)
        ? Object.defineProperty(r, u, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[u] = i),
    (t.Z = new N(A.Z, {
        SKU_PURCHASE_FAIL: R,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: R,
        USER_PAYMENT_CLIENT_ADD: function (e) {
            (T = 2), (I = e.purchaseTokenHash), (c = e.expiresAt);
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
