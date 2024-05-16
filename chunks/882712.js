"use strict";
n.r(t), n.d(t, {
  PurchaseTokenAuthState: function() {
    return l
  }
});
var r, u, i, a, l, o, s = n("442837"),
  E = n("570140"),
  S = n("128069"),
  _ = n("38618");
(r = l || (l = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.PENDING = 1] = "PENDING", r[r.SUCCESS = 2] = "SUCCESS", r[r.ERROR = 3] = "ERROR";
let d = 0,
  c = null,
  A = null;

function T(e) {
  let {
    error: t
  } = e, n = t instanceof S.default ? t : new S.default(t);
  _.default.isConnected() && n.code === S.default.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (d = 1)
}

function f() {
  d = 0, c = null, A = null
}
class I extends(o = s.default.Store) {
  get purchaseTokenAuthState() {
    return d
  }
  get purchaseTokenHash() {
    return c
  }
  get expiresAt() {
    return A
  }
}
a = "PurchaseTokenAuthStore", (i = "displayName") in(u = I) ? Object.defineProperty(u, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[i] = a, t.default = new I(E.default, {
  SKU_PURCHASE_FAIL: T,
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: T,
  USER_PAYMENT_CLIENT_ADD: function(e) {
    d = 2, c = e.purchaseTokenHash, A = e.expiresAt
  },
  BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: f,
  BILLING_SUBSCRIPTION_UPDATE_START: f,
  PAYMENT_AUTHENTICATION_CLEAR_ERROR: f,
  PREMIUM_PAYMENT_ERROR_CLEAR: f,
  PREMIUM_PAYMENT_MODAL_CLOSE: f,
  PREMIUM_PAYMENT_MODAL_OPEN: f,
  PREMIUM_PAYMENT_SUBSCRIBE_START: f,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: f,
  PREMIUM_PAYMENT_UPDATE_SUCCESS: f,
  SKU_PURCHASE_MODAL_CLOSE: f,
  SKU_PURCHASE_MODAL_OPEN: f,
  SKU_PURCHASE_START: f,
  SKU_PURCHASE_SUCCESS: f,
  LIGHTNING_CHECKOUT_OPEN: f,
  LIGHTNING_CHECKOUT_CLOSE: f
})