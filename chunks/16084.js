"use strict";
n.r(e), n.d(e, {
  clearPurchaseError: function() {
    return I
  },
  fetchPublishedSKU: function() {
    return C
  },
  fetchPurchasePreview: function() {
    return U
  },
  fetchSKU: function() {
    return S
  },
  fetchTestSKUsForApplication: function() {
    return y
  },
  purchaseSKU: function() {
    return A
  },
  resendPaymentVerificationEmail: function() {
    return R
  }
}), n("411104");
var i = n("544891"),
  r = n("570140"),
  o = n("881052"),
  a = n("128069"),
  l = n("34756"),
  d = n("115130"),
  u = n("55563"),
  c = n("695103"),
  s = n("122289"),
  f = n("823379"),
  p = n("936101"),
  _ = n("73346"),
  E = n("355467"),
  h = n("981631");
async function S(t) {
  if (null == u.default.get(t)) {
    r.default.dispatch({
      type: "SKU_FETCH_START",
      skuId: t
    });
    try {
      let e = await (0, _.httpGetWithCountryCodeQuery)(h.Endpoints.STORE_SKU(t));
      r.default.dispatch({
        type: "SKU_FETCH_SUCCESS",
        sku: e.body
      })
    } catch (e) {
      throw r.default.dispatch({
        type: "SKU_FETCH_FAIL",
        skuId: t
      }), new l.default("Failed to fetch SKU ".concat(t))
    }
  }
}
async function C(t, e) {
  if (null == u.default.get(e)) {
    r.default.dispatch({
      type: "SKU_FETCH_START",
      skuId: e
    });
    try {
      let n = c.default.inTestModeForApplication(t) || d.default.inDevModeForApplication(t),
        i = await (0, _.httpGetWithCountryCodeQuery)(n ? h.Endpoints.STORE_SKU(e) : h.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e));
      r.default.dispatch({
        type: "SKU_FETCH_SUCCESS",
        sku: n ? i.body : i.body.sku
      }), !n && r.default.dispatch({
        type: "STORE_LISTING_FETCH_SUCCESS",
        storeListing: i.body
      })
    } catch (t) {
      throw r.default.dispatch({
        type: "SKU_FETCH_FAIL",
        skuId: e
      }), new l.default("Failed to fetch SKU ".concat(e))
    }
  }
}
async function y(t) {
  let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  if (!(c.default.inTestModeForApplication(t) || d.default.inDevModeForApplication(t)) && e) throw Error("this should only be used in test mode");
  let n = (await (0, _.httpGetWithCountryCodeQuery)(h.Endpoints.APPLICATION_SKUS(t))).body;
  return r.default.dispatch({
    type: "SKUS_FETCH_SUCCESS",
    skus: n
  }), n
}
async function U(t, e, n, i) {
  let l;
  let u = {
    payment_source_id: n,
    gift: null == i ? void 0 : i.isGift
  };
  (c.default.inTestModeForApplication(t) || d.default.inDevModeForApplication(t)) && (u.test_mode = !0), r.default.dispatch({
    type: "SKU_PURCHASE_PREVIEW_FETCH",
    skuId: e
  });
  try {
    l = await (0, _.httpGetWithCountryCodeQuery)({
      url: h.Endpoints.STORE_SKU_PURCHASE(e),
      query: u,
      oldFormErrors: !0
    }), r.default.dispatch({
      type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
      skuId: e,
      paymentSourceId: n,
      price: l.body
    })
  } catch (n) {
    r.default.dispatch({
      type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
      skuId: e
    });
    let t = n instanceof o.BillingError ? n : new o.BillingError(n);
    if (t.code === a.ErrorCodes.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === a.ErrorCodes.BILLING_BUNDLE_PARTIALLY_OWNED) throw t
  }
  return l
}
let T = {
  isGift: !1
};
async function A(t, e, n) {
  let {
    paymentSource: l,
    expectedAmount: u,
    expectedCurrency: _,
    analyticsLoadId: S,
    isGift: C,
    giftInfoOptions: y,
    subscriptionPlanId: U,
    loadId: A,
    countryCode: R
  } = {
    ...T,
    ...n
  };
  r.default.wait(() => {
    r.default.dispatch({
      type: "SKU_PURCHASE_START",
      applicationId: t,
      skuId: e
    })
  });
  let I = c.default.inTestModeForApplication(t) || d.default.inDevModeForApplication(t);
  try {
    let t = {
      gift: C,
      sku_subscription_plan_id: U,
      gateway_checkout_context: await (0, s.createGatewayCheckoutContext)(l),
      load_id: A
    };
    if (I) t.test_mode = !0;
    else {
      if (null != l && (t.payment_source_id = l.id, t.payment_source_token = await (0, E.createPaymentSourceToken)(l), h.ADYEN_PAYMENT_SOURCES.has(l.type))) {
        let e = await (0, E.popupBridgeState)(l.type);
        t.return_url = (0, i.getAPIBaseURL)() + h.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(l.type, null != e ? e : "", "success")
      }
      null != u && (t.expected_amount = u), null != _ && (t.expected_currency = _), t.gift_info_options = y, null != R && (t.country_code = R), t.purchase_token = (0, p.getPurchaseToken)()
    }
    let n = await i.HTTP.post({
      url: h.Endpoints.STORE_SKU_PURCHASE(e),
      body: t,
      context: {
        load_id: S
      },
      oldFormErrors: !0
    });
    return r.default.dispatch({
      type: "SKU_PURCHASE_SUCCESS",
      skuId: e,
      libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(f.isNotNullish) : [],
      entitlements: n.body.entitlements,
      giftCode: n.body.gift_code
    }), {
      ...n.body,
      redirectConfirmation: !1
    }
  } catch (i) {
    let n = i instanceof o.BillingError ? i : new o.BillingError(i);
    if ((n.code === a.ErrorCodes.CONFIRMATION_REQUIRED || n.code === a.ErrorCodes.AUTHENTICATION_REQUIRED) && r.default.dispatch({
        type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
        skuId: e,
        isGift: C
      }), n.code !== a.ErrorCodes.CONFIRMATION_REQUIRED) throw r.default.dispatch({
      type: "SKU_PURCHASE_FAIL",
      applicationId: t,
      skuId: e,
      error: n
    }), n;
    if (!i.body.payment_id) throw (0, E.dispatchConfirmationError)("payment id cannot be null on redirected confirmations.");
    return (0, E.handleConfirmation)(i.body, l)
  }
}
async function R() {
  try {
    let t = {
      purchase_token: (0, p.getPurchaseToken)()
    };
    return {
      ...(await i.HTTP.post({
        url: h.Endpoints.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
        body: t,
        oldFormErrors: !0
      })).body
    }
  } catch (t) {
    throw t instanceof o.BillingError ? t : new o.BillingError(t)
  }
}

function I() {
  r.default.dispatch({
    type: "SKU_PURCHASE_CLEAR_ERROR"
  })
}