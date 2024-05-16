"use strict";
n.r(t), n("411104");
var r, u, i, a, l = n("442837"),
  o = n("570140"),
  s = n("366939"),
  E = n("16084"),
  S = n("128069"),
  d = n("122289"),
  _ = n("622999"),
  c = n("981631"),
  A = n("689938");
let f = !1,
  T = null,
  I = null;

function C() {
  f = !1, I = null
}

function P(e) {
  let {
    error: t
  } = e, {
    code: n,
    paymentId: r
  } = t;
  if (n !== S.default.ErrorCodes.AUTHENTICATION_REQUIRED) return f = !1, !1;
  !f && (f = !0, T = r, R(r))
}
async function R(e) {
  if (null == e) return;
  let {
    error: t
  } = await (0, _.authenticatePaymentIntentForPaymentId)(e);
  if (null != t) {
    o.default.dispatch({
      type: "PAYMENT_AUTHENTICATION_ERROR",
      error: new S.default(A.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR)
    });
    let e = Error(t);
    (0, d.captureBillingException)(e, {
      extra: {
        authenticationError: t
      }
    })
  }
}

function N(e) {
  let {
    payment: t
  } = e;
  if (!f || t.id !== T || ![c.PaymentStatusTypes.COMPLETED, c.PaymentStatusTypes.CANCELED].includes(t.status)) return !1;
  f = !1, I = null, T = null, o.default.wait(s.clearError), o.default.wait(E.clearPurchaseError)
}
class U extends(r = l.default.Store) {
  get isAwaitingAuthentication() {
    return f
  }
  get error() {
    return I
  }
  get awaitingPaymentId() {
    return T
  }
}
a = "PaymentAuthenticationStore", (i = "displayName") in(u = U) ? Object.defineProperty(u, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[i] = a, t.default = new U(o.default, {
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
  SKU_PURCHASE_SUCCESS: C,
  BILLING_SUBSCRIPTION_UPDATE_FAIL: P,
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: P,
  PREMIUM_PAYMENT_UPDATE_FAIL: P,
  SKU_PURCHASE_FAIL: P,
  GIFT_CODE_REDEEM_FAILURE: P,
  PAYMENT_AUTHENTICATION_ERROR: function(e) {
    let {
      error: t
    } = e;
    I = t, f = !1
  },
  PAYMENT_UPDATE: N,
  BILLING_PAYMENT_FETCH_SUCCESS: N,
  LIGHTNING_CHECKOUT_OPEN: C,
  LIGHTNING_CHECKOUT_CLOSE: C
})