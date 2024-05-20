"use strict";
n.r(t), n.d(t, {
  clearPurchaseError: function() {
    return p
  },
  fetchPublishedSKU: function() {
    return I
  },
  fetchPurchasePreview: function() {
    return P
  },
  fetchSKU: function() {
    return T
  },
  fetchTestSKUsForApplication: function() {
    return C
  },
  grantChannelBranchEntitlement: function() {
    return R
  },
  purchaseSKU: function() {
    return U
  },
  resendPaymentVerificationEmail: function() {
    return M
  },
  showPurchaseConfirmationStep: function() {
    return h
  },
  updateSKUPaymentIsGift: function() {
    return O
  }
}), n("411104");
var r = n("544891"),
  u = n("570140"),
  i = n("881052"),
  a = n("128069"),
  l = n("34756"),
  o = n("115130"),
  s = n("55563"),
  E = n("695103"),
  S = n("122289"),
  d = n("823379"),
  _ = n("936101"),
  c = n("73346"),
  A = n("355467"),
  f = n("981631");
async function T(e) {
  if (null == s.default.get(e)) {
    u.default.dispatch({
      type: "SKU_FETCH_START",
      skuId: e
    });
    try {
      let t = await (0, c.httpGetWithCountryCodeQuery)(f.Endpoints.STORE_SKU(e));
      u.default.dispatch({
        type: "SKU_FETCH_SUCCESS",
        sku: t.body
      })
    } catch (t) {
      throw u.default.dispatch({
        type: "SKU_FETCH_FAIL",
        skuId: e
      }), new l.default("Failed to fetch SKU ".concat(e))
    }
  }
}
async function I(e, t) {
  if (null == s.default.get(t)) {
    u.default.dispatch({
      type: "SKU_FETCH_START",
      skuId: t
    });
    try {
      let n = E.default.inTestModeForApplication(e) || o.default.inDevModeForApplication(e),
        r = await (0, c.httpGetWithCountryCodeQuery)(n ? f.Endpoints.STORE_SKU(t) : f.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(t));
      u.default.dispatch({
        type: "SKU_FETCH_SUCCESS",
        sku: n ? r.body : r.body.sku
      }), !n && u.default.dispatch({
        type: "STORE_LISTING_FETCH_SUCCESS",
        storeListing: r.body
      })
    } catch (e) {
      throw u.default.dispatch({
        type: "SKU_FETCH_FAIL",
        skuId: t
      }), new l.default("Failed to fetch SKU ".concat(t))
    }
  }
}
async function C(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  if (!(E.default.inTestModeForApplication(e) || o.default.inDevModeForApplication(e)) && t) throw Error("this should only be used in test mode");
  let n = (await (0, c.httpGetWithCountryCodeQuery)(f.Endpoints.APPLICATION_SKUS(e))).body;
  return u.default.dispatch({
    type: "SKUS_FETCH_SUCCESS",
    skus: n
  }), n
}
async function P(e, t, n, r) {
  let i;
  let a = {
    payment_source_id: n,
    gift: null == r ? void 0 : r.isGift
  };
  (E.default.inTestModeForApplication(e) || o.default.inDevModeForApplication(e)) && (a.test_mode = !0), u.default.dispatch({
    type: "SKU_PURCHASE_PREVIEW_FETCH",
    skuId: t
  });
  try {
    i = await (0, c.httpGetWithCountryCodeQuery)({
      url: f.Endpoints.STORE_SKU_PURCHASE(t),
      query: a,
      oldFormErrors: !0
    }), u.default.dispatch({
      type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
      skuId: t,
      paymentSourceId: n,
      price: i.body
    })
  } catch (e) {
    u.default.dispatch({
      type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
      skuId: t
    })
  }
  return i
}
async function R(e, t, n) {
  u.default.dispatch({
    type: "SKU_PURCHASE_START",
    applicationId: e,
    skuId: n
  });
  try {
    let e = await r.HTTP.post({
      url: f.Endpoints.CHANNEL_ENTITLEMENT_GRANT(t),
      oldFormErrors: !0
    });
    return u.default.dispatch({
      type: "SKU_PURCHASE_SUCCESS",
      skuId: n,
      entitlements: e.body,
      libraryApplications: []
    }), e.body
  } catch (r) {
    let t = new i.BillingError(r);
    throw u.default.dispatch({
      type: "SKU_PURCHASE_FAIL",
      applicationId: e,
      skuId: n,
      error: t
    }), t
  }
}
let N = {
  isGift: !1
};
async function U(e, t, n) {
  let {
    paymentSource: l,
    expectedAmount: s,
    expectedCurrency: c,
    analyticsLoadId: T,
    isGift: I,
    giftInfoOptions: C,
    subscriptionPlanId: P,
    loadId: R,
    countryCode: U
  } = {
    ...N,
    ...n
  };
  u.default.wait(() => {
    u.default.dispatch({
      type: "SKU_PURCHASE_START",
      applicationId: e,
      skuId: t
    })
  });
  let M = E.default.inTestModeForApplication(e) || o.default.inDevModeForApplication(e);
  try {
    let e = {
      gift: I,
      sku_subscription_plan_id: P,
      gateway_checkout_context: await (0, S.createGatewayCheckoutContext)(l),
      load_id: R
    };
    if (M) e.test_mode = !0;
    else {
      if (null != l && (e.payment_source_id = l.id, e.payment_source_token = await (0, A.createPaymentSourceToken)(l), f.ADYEN_PAYMENT_SOURCES.has(l.type))) {
        let t = await (0, A.popupBridgeState)(l.type);
        e.return_url = (0, r.getAPIBaseURL)() + f.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(l.type, null != t ? t : "", "success")
      }
      null != s && (e.expected_amount = s), null != c && (e.expected_currency = c), e.gift_info_options = C, null != U && (e.country_code = U), e.purchase_token = (0, _.getPurchaseToken)()
    }
    let n = await r.HTTP.post({
      url: f.Endpoints.STORE_SKU_PURCHASE(t),
      body: e,
      context: {
        load_id: T
      },
      oldFormErrors: !0
    });
    return u.default.dispatch({
      type: "SKU_PURCHASE_SUCCESS",
      skuId: t,
      libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(d.isNotNullish) : [],
      entitlements: n.body.entitlements,
      giftCode: n.body.gift_code
    }), {
      ...n.body,
      redirectConfirmation: !1
    }
  } catch (r) {
    let n = r instanceof i.BillingError ? r : new i.BillingError(r);
    if ((n.code === a.ErrorCodes.CONFIRMATION_REQUIRED || n.code === a.ErrorCodes.AUTHENTICATION_REQUIRED) && u.default.dispatch({
        type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
        skuId: t,
        isGift: I
      }), n.code !== a.ErrorCodes.CONFIRMATION_REQUIRED) throw u.default.dispatch({
      type: "SKU_PURCHASE_FAIL",
      applicationId: e,
      skuId: t,
      error: n
    }), n;
    if (!r.body.payment_id) throw (0, A.dispatchConfirmationError)("payment id cannot be null on redirected confirmations.");
    return (0, A.handleConfirmation)(r.body, l)
  }
}
async function M() {
  try {
    let e = {
      purchase_token: (0, _.getPurchaseToken)()
    };
    return {
      ...(await r.HTTP.post({
        url: f.Endpoints.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
        body: e,
        oldFormErrors: !0
      })).body
    }
  } catch (e) {
    throw e instanceof i.BillingError ? e : new i.BillingError(e)
  }
}

function p() {
  u.default.dispatch({
    type: "SKU_PURCHASE_CLEAR_ERROR"
  })
}

function h() {
  u.default.wait(() => u.default.dispatch({
    type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP"
  }))
}

function O(e) {
  u.default.dispatch({
    type: "SKU_PURCHASE_UPDATE_IS_GIFT",
    isGift: e
  })
}