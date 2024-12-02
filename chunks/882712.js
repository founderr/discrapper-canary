n.d(t, {
    I: function () {
        return o;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140),
    d = n(128069),
    f = n(38618);
((r = o || (o = {}))[(r.UNKNOWN = 0)] = 'UNKNOWN'), (r[(r.PENDING = 1)] = 'PENDING'), (r[(r.SUCCESS = 2)] = 'SUCCESS'), (r[(r.ERROR = 3)] = 'ERROR');
let _ = 0,
    p = null,
    h = null;
function m(e) {
    let { error: t } = e,
        n = t instanceof d.ZP ? t : new d.ZP(t);
    f.Z.isConnected() && n.code === d.ZP.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (_ = 1);
}
function g() {
    (_ = 0), (p = null), (h = null);
}
class E extends (l = u.ZP.Store) {
    get purchaseTokenAuthState() {
        return _;
    }
    get purchaseTokenHash() {
        return p;
    }
    get expiresAt() {
        return h;
    }
}
(s = 'PurchaseTokenAuthStore'),
    (a = 'displayName') in (i = E)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new E(c.Z, {
        SKU_PURCHASE_FAIL: m,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: m,
        USER_PAYMENT_CLIENT_ADD: function (e) {
            (_ = 2), (p = e.purchaseTokenHash), (h = e.expiresAt);
        },
        BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: g,
        BILLING_SUBSCRIPTION_UPDATE_START: g,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: g,
        PREMIUM_PAYMENT_ERROR_CLEAR: g,
        PREMIUM_PAYMENT_MODAL_CLOSE: g,
        PREMIUM_PAYMENT_MODAL_OPEN: g,
        PREMIUM_PAYMENT_SUBSCRIBE_START: g,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: g,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: g,
        SKU_PURCHASE_MODAL_CLOSE: g,
        SKU_PURCHASE_MODAL_OPEN: g,
        SKU_PURCHASE_START: g,
        SKU_PURCHASE_SUCCESS: g
    }));
