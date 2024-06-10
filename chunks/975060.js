"use strict";
n.r(t);
var r, u, i, l, a = n("442837"),
  o = n("570140"),
  s = n("622999");
let E = "",
  S = null,
  _ = "",
  d = null,
  c = !1,
  A = null,
  T = "",
  f = "",
  I = "",
  C = "",
  P = "",
  R = "",
  N = "",
  M = "",
  U = !1,
  h = null,
  p = null,
  L = null,
  O = null;

function m() {
  d = null, E = "", S = null, _ = "", c = !1, A = null, T = "US", f = "", I = "", C = "", P = "", R = "", N = "", M = "", U = !1, h = null, p = null, L = null, O = null
}

function F(e) {
  f = e.name, T = e.country, C = e.line1, P = e.line2, R = e.city, N = e.postalCode, M = e.state, I = e.email
}

function G() {
  h = null
}

function y(e) {
  let {
    error: t
  } = e;
  h = t
}
class B extends(l = a.default.Store) {
  get stripePaymentMethod() {
    return d
  }
  get popupCallbackCalled() {
    return L
  }
  get braintreeEmail() {
    return E
  }
  get braintreeNonce() {
    return S
  }
  get venmoUsername() {
    return _
  }
  get redirectedPaymentId() {
    return p
  }
  get adyenPaymentData() {
    return A
  }
  get redirectedPaymentSourceId() {
    return O
  }
  getCreditCardInfo() {
    return {
      name: f
    }
  }
  get isCardInfoValid() {
    return c
  }
  getBillingAddressInfo() {
    return {
      name: f,
      email: I,
      country: T,
      line1: C,
      line2: P,
      city: R,
      postalCode: N,
      state: M
    }
  }
  get isBillingAddressInfoValid() {
    return U
  }
  get error() {
    return h
  }
}
i = "NewPaymentSourceStore", (u = "displayName") in(r = B) ? Object.defineProperty(r, u, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[u] = i, t.default = new B(o.default, {
  NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function(e) {
    let {
      stripePaymentMethod: t
    } = e;
    if (null == t) {
      m();
      return
    }
    d = t;
    let {
      billingAddressInfo: n
    } = s.parseStripePaymentMethod(d);
    F(n)
  },
  NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function(e) {
    let {
      info: t,
      isValid: n
    } = e;
    f = t.name, c = n
  },
  NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function(e) {
    let {
      info: t,
      isValid: n
    } = e;
    null != t.name && "" !== t.name && (f = t.name), T = t.country, f = t.name, C = t.line1, P = t.line2, R = t.city, N = t.postalCode, M = t.state, I = t.email, U = n
  },
  BRAINTREE_TOKENIZE_PAYPAL_START: function() {
    E = "", S = null
  },
  BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function(e) {
    let {
      email: t,
      nonce: n,
      billingAddress: r
    } = e;
    E = t, S = n, F(r), U = T.length > 0
  },
  BRAINTREE_TOKENIZE_VENMO_START: function() {
    _ = "", S = null
  },
  BRAINTREE_TOKENIZE_VENMO_SUCCESS: function(e) {
    let {
      username: t,
      nonce: n
    } = e;
    _ = t, S = n
  },
  ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function(e) {
    let {
      data: t
    } = e;
    A = t
  },
  BILLING_PAYMENT_SOURCE_CREATE_START: G,
  MODAL_POP: G,
  NEW_PAYMENT_SOURCE_CLEAR_ERROR: G,
  BILLING_PAYMENT_SOURCE_CREATE_FAIL: y,
  STRIPE_TOKEN_FAILURE: y,
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: m,
  LOGOUT: m,
  BILLING_POPUP_BRIDGE_CALLBACK: function(e) {
    let {
      query: t
    } = e;
    (null == t ? void 0 : t.payment_id) != null ? (L = !0, p = t.payment_id) : (null == t ? void 0 : t.payment_source_id) != null && (L = !0, O = t.payment_source_id)
  },
  RESET_PAYMENT_ID: function() {
    L = !1, p = null
  }
})