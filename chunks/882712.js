n.d(t, {
    I: function () {
        return r;
    }
});
var r,
    i,
    a = n(442837),
    o = n(570140),
    s = n(128069),
    l = n(38618);
function u(e, t, n) {
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
!(function (e) {
    (e[(e.UNKNOWN = 0)] = 'UNKNOWN'), (e[(e.PENDING = 1)] = 'PENDING'), (e[(e.SUCCESS = 2)] = 'SUCCESS'), (e[(e.ERROR = 3)] = 'ERROR');
})(r || (r = {}));
let c = 0,
    d = null,
    _ = null;
function E(e) {
    let { error: t } = e,
        n = t instanceof s.ZP ? t : new s.ZP(t);
    l.Z.isConnected() && n.code === s.ZP.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (c = 1);
}
function f(e) {
    (c = 2), (d = e.purchaseTokenHash), (_ = e.expiresAt);
}
function h() {
    (c = 0), (d = null), (_ = null);
}
class p extends (i = a.ZP.Store) {
    get purchaseTokenAuthState() {
        return c;
    }
    get purchaseTokenHash() {
        return d;
    }
    get expiresAt() {
        return _;
    }
}
u(p, 'displayName', 'PurchaseTokenAuthStore'),
    (t.Z = new p(o.Z, {
        SKU_PURCHASE_FAIL: E,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: E,
        USER_PAYMENT_CLIENT_ADD: f,
        BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: h,
        BILLING_SUBSCRIPTION_UPDATE_START: h,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: h,
        PREMIUM_PAYMENT_ERROR_CLEAR: h,
        PREMIUM_PAYMENT_MODAL_CLOSE: h,
        PREMIUM_PAYMENT_MODAL_OPEN: h,
        PREMIUM_PAYMENT_SUBSCRIBE_START: h,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: h,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: h,
        SKU_PURCHASE_MODAL_CLOSE: h,
        SKU_PURCHASE_MODAL_OPEN: h,
        SKU_PURCHASE_START: h,
        SKU_PURCHASE_SUCCESS: h
    }));
