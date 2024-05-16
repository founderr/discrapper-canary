"use strict";
n.r(t), n.d(t, {
  clearPurchaseError: function() {
    return U
  },
  fetchPurchasePreview: function() {
    return C
  },
  fetchSKU: function() {
    return f
  },
  fetchTestSKUsForApplication: function() {
    return I
  },
  grantChannelBranchEntitlement: function() {
    return P
  },
  purchaseSKU: function() {
    return N
  },
  resendPaymentVerificationEmail: function() {
    return M
  },
  showPurchaseConfirmationStep: function() {
    return p
  },
  updateSKUPaymentIsGift: function() {
    return h
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
  _ = n("823379"),
  d = n("936101"),
  c = n("73346"),
  A = n("355467"),
  T = n("981631");
async function f(e, t) {
  if (null == s.default.get(t)) {
    u.default.dispatch({
      type: "SKU_FETCH_START",
      skuId: t
    });
    try {
      let n = E.default.inTestModeForApplication(e) || o.default.inDevModeForApplication(e),
        r = await (0, c.httpGetWithCountryCodeQuery)(n ? T.Endpoints.STORE_SKU(t) : T.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(t));
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
async function I(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  if (!(E.default.inTestModeForApplication(e) || o.default.inDevModeForApplication(e)) && t) throw Error("this should only be used in test mode");
  let n = (await (0, c.httpGetWithCountryCodeQuery)(T.Endpoints.APPLICATION_SKUS(e))).body;
  return u.default.dispatch({
    type: "SKUS_FETCH_SUCCESS",
    skus: n
  }), n
}
async function C(e, t, n, r) {
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
      url: T.Endpoints.STORE_SKU_PURCHASE(t),
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
async function P(e, t, n) {
  u.default.dispatch({
    type: "SKU_PURCHASE_START",
    applicationId: e,
    skuId: n
  });
  try {
    let e = await r.HTTP.post({
      url: T.Endpoints.CHANNEL_ENTITLEMENT_GRANT(t),
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
let R = {
  isGift: !1
};
async function N(e, t, n) {
  let {
    paymentSource: l,
    expectedAmount: s,
    expectedCurrency: c,
    analyticsLoadId: f,
    isGift: I,
    giftInfoOptions: C,
    subscriptionPlanId: P,
    loadId: N,
    countryCode: M
  } = {
    ...R,
    ...n
  };
  u.default.wait(() => {
    u.default.dispatch({
      type: "SKU_PURCHASE_START",
      applicationId: e,
      skuId: t
    })
  });
  let U = E.default.inTestModeForApplication(e) || o.default.inDevModeForApplication(e);
  try {
    let e = {
      gift: I,
      sku_subscription_plan_id: P,
      gateway_checkout_context: await (0, S.createGatewayCheckoutContext)(l),
      load_id: N
    };
    if (U) e.test_mode = !0;
    else {
      if (null != l && (e.payment_source_id = l.id, e.payment_source_token = await (0, A.createPaymentSourceToken)(l), T.ADYEN_PAYMENT_SOURCES.has(l.type))) {
        let t = await (0, A.popupBridgeState)(l.type);
        e.return_url = (0, r.getAPIBaseURL)() + T.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(l.type, null != t ? t : "", "success")
      }
      null != s && (e.expected_amount = s), null != c && (e.expected_currency = c), e.gift_info_options = C, null != M && (e.country_code = M), e.purchase_token = (0, d.getPurchaseToken)()
    }
    let n = await r.HTTP.post({
      url: T.Endpoints.STORE_SKU_PURCHASE(t),
      body: e,
      context: {
        load_id: f
      },
      oldFormErrors: !0
    });
    return u.default.dispatch({
      type: "SKU_PURCHASE_SUCCESS",
      skuId: t,
      libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(_.isNotNullish) : [],
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
      purchase_token: (0, d.getPurchaseToken)()
    };
    return {
      ...(await r.HTTP.post({
        url: T.Endpoints.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
        body: e,
        oldFormErrors: !0
      })).body
    }
  } catch (e) {
    throw e instanceof i.BillingError ? e : new i.BillingError(e)
  }
}

function U() {
  u.default.dispatch({
    type: "SKU_PURCHASE_CLEAR_ERROR"
  })
}

function p() {
  u.default.wait(() => u.default.dispatch({
    type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP"
  }))
}

function h(e) {
  u.default.dispatch({
    type: "SKU_PURCHASE_UPDATE_IS_GIFT",
    isGift: e
  })
}