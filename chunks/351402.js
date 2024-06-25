"use strict";
let i, r, s, o;
var a, l, u, _, c = n(442837),
  d = n(570140),
  E = n(542974),
  I = n(981631);
let T = !1,
  h = !1,
  f = !1,
  S = !1,
  A = !1,
  N = null,
  m = null,
  O = !1,
  p = !1;

function R() {
  T = !1
}

function g() {
  i = void 0
}

function C() {
  S = !1
}

function v() {
  A = !0
}

function L() {
  A = !1
}
class D extends(_ = c.ZP.Store) {
  get isBusy() {
    return T || h || A || f
  }
  get isUpdatingPaymentSource() {
    return h
  }
  get isRemovingPaymentSource() {
    return f
  }
  get isSyncing() {
    return this.isPaymentSourceFetching || this.isSubscriptionFetching
  }
  get isSubscriptionFetching() {
    return S
  }
  get isPaymentSourceFetching() {
    return null != i
  }
  get editSourceError() {
    return N
  }
  get removeSourceError() {
    return m
  }
  get ipCountryCodeLoaded() {
    return void 0 !== r
  }
  get ipCountryCode() {
    return r
  }
  get ipCountryCodeRequest() {
    return s
  }
  get ipCountryCodeWithFallback() {
    return null != r ? r : I.OMz
  }
  get ipCountryCodeHasError() {
    return O
  }
  get paymentSourcesFetchRequest() {
    return i
  }
  get localizedPricingPromo() {
    return o
  }
  get localizedPricingPromoHasError() {
    return p
  }
  get isLocalizedPromoEnabled() {
    return null != o
  }
}
u = "BillingInfoStore", (l = "displayName") in(a = D) ? Object.defineProperty(a, l, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = u, t.Z = new D(d.Z, {
  BILLING_PAYMENT_SOURCE_CREATE_START: function() {
    T = !0
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
  BILLING_PAYMENT_SOURCE_CREATE_FAIL: R,
  STRIPE_TOKEN_FAILURE: R,
  BILLING_PAYMENT_SOURCE_REMOVE_START: function() {
    f = !0
  },
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function() {
    f = !1
  },
  BILLING_PAYMENT_SOURCE_REMOVE_FAIL: function(e) {
    let {
      error: t
    } = e;
    f = !1, m = t
  },
  BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: function() {
    m = null
  },
  BILLING_PAYMENT_SOURCE_UPDATE_START: function() {
    h = !0
  },
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: function() {
    h = !1
  },
  BILLING_PAYMENT_SOURCE_UPDATE_FAIL: function(e) {
    let {
      error: t
    } = e;
    h = !1, N = t
  },
  BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: function() {
    N = null
  },
  BILLING_PAYMENT_SOURCES_FETCH_START: function(e) {
    let {
      request: t
    } = e;
    i = t
  },
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: g,
  BILLING_PAYMENT_SOURCES_FETCH_FAIL: g,
  BILLING_SUBSCRIPTION_FETCH_START: function() {
    S = !0
  },
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: C,
  BILLING_SUBSCRIPTION_FETCH_FAIL: C,
  BILLING_SUBSCRIPTION_UPDATE_START: v,
  BILLING_SUBSCRIPTION_CANCEL_START: v,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: L,
  BILLING_SUBSCRIPTION_UPDATE_FAIL: L,
  BILLING_SUBSCRIPTION_CANCEL_FAIL: L,
  BILLING_SUBSCRIPTION_CANCEL_SUCCESS: L,
  BILLING_IP_COUNTRY_CODE_FETCH_START: function(e) {
    let {
      request: t
    } = e;
    s = t
  },
  BILLING_SET_IP_COUNTRY_CODE: function(e) {
    let {
      countryCode: t
    } = e;
    r = t
  },
  BILLING_IP_COUNTRY_CODE_FAILURE: function() {
    r = null, O = !0
  },
  BILLING_SET_LOCALIZED_PRICING_PROMO: function(e) {
    let {
      localizedPricingPromo: t
    } = e;
    o = E.U.createFromServer(t)
  },
  BILLING_LOCALIZED_PRICING_PROMO_FAILURE: function() {
    o = null, p = !0
  },
  LOGOUT: function() {
    i = void 0, s = void 0, r = void 0, O = !1, o = null, m = null, N = null
  },
  CONNECTION_OPEN: e => {
    let {
      countryCode: t
    } = e;
    null != t && (r = t)
  }
})