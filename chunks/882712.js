"use strict";
n.r(t), n.d(t, {
  PurchaseTokenAuthState: function() {
    return l
  }
});
var r, u, i, a, l, o, s = n("442837"),
  E = n("570140"),
  S = n("128069"),
  d = n("38618");
(r = l || (l = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.PENDING = 1] = "PENDING", r[r.SUCCESS = 2] = "SUCCESS", r[r.ERROR = 3] = "ERROR";
let _ = 0,
  c = null,
  A = null;

function f(e) {
  let {
    error: t
  } = e, n = t instanceof S.default ? t : new S.default(t);
  d.default.isConnected() && n.code === S.default.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (_ = 1)
}

function T() {
  _ = 0, c = null, A = null
}
class I extends(o = s.default.Store) {
  get purchaseTokenAuthState() {
    return _
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
  SKU_PURCHASE_FAIL: f,
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: f,
  USER_PAYMENT_CLIENT_ADD: function(e) {
    _ = 2, c = e.purchaseTokenHash, A = e.expiresAt
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