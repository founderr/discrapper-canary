"use strict";
n.r(t), n.d(t, {
  PurchaseTokenAuthState: function() {
    return a
  }
});
var r, u, i, l, a, o, s = n("442837"),
  E = n("570140"),
  S = n("128069"),
  _ = n("38618");
(r = a || (a = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.PENDING = 1] = "PENDING", r[r.SUCCESS = 2] = "SUCCESS", r[r.ERROR = 3] = "ERROR";
let d = 0,
  c = null,
  A = null;

function f(e) {
  let {
    error: t
  } = e, n = t instanceof S.default ? t : new S.default(t);
  _.default.isConnected() && n.code === S.default.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (d = 1)
}

function T() {
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
l = "PurchaseTokenAuthStore", (i = "displayName") in(u = I) ? Object.defineProperty(u, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[i] = l, t.default = new I(E.default, {
  SKU_PURCHASE_FAIL: f,
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: f,
  USER_PAYMENT_CLIENT_ADD: function(e) {
    d = 2, c = e.purchaseTokenHash, A = e.expiresAt
  },
  BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: T,
  BILLING_SUBSCRIPTION_UPDATE_START: T,
  PAYMENT_AUTHENTICATION_CLEAR_ERROR: T,
  PREMIUM_PAYMENT_ERROR_CLEAR: T,
  PREMIUM_PAYMENT_MODAL_CLOSE: T,
  PREMIUM_PAYMENT_MODAL_OPEN: T,
  PREMIUM_PAYMENT_SUBSCRIBE_START: T,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: T,
  PREMIUM_PAYMENT_UPDATE_SUCCESS: T,
  SKU_PURCHASE_MODAL_CLOSE: T,
  SKU_PURCHASE_MODAL_OPEN: T,
  SKU_PURCHASE_START: T,
  SKU_PURCHASE_SUCCESS: T,
  LIGHTNING_CHECKOUT_OPEN: T,
  LIGHTNING_CHECKOUT_CLOSE: T
})