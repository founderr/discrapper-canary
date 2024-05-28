"use strict";
n.r(t), n.d(t, {
  purchaseProduct: function() {
    return I
  }
}), n("47120");
var i = n("512722"),
  l = n.n(i),
  s = n("570140"),
  a = n("355467"),
  r = n("976255"),
  u = n("366939"),
  o = n("16084"),
  c = n("255078"),
  d = n("626135"),
  m = n("74538"),
  p = n("45572"),
  f = n("981631"),
  S = n("474936");
async function I(e) {
  let {
    setPurchaseState: t,
    setHasAcceptedTerms: n,
    setIsSubmitting: i,
    setPurchaseError: I,
    hasRedirectURL: _,
    setHasRedirectURL: P,
    isGift: E,
    baseAnalyticsData: T,
    analyticsLocation: v,
    analyticsLocations: h,
    flowStartTime: N,
    subscriptionPlan: x,
    planGroup: A,
    trialId: y,
    priceOptions: C,
    paymentSource: R,
    isPrepaidPaymentPastDue: b,
    openInvoiceId: g,
    premiumSubscription: O,
    onNext: M,
    metadata: L,
    sku: j,
    skuPricePreview: G,
    purchaseType: U,
    referralCode: D,
    loadId: w,
    giftInfoOptions: F,
    invoicePreview: B
  } = e;
  t(p.PurchaseState.PURCHASING), n(!0), i(!0), s.default.wait(r.clearError), I(null);
  try {
    let e, n, i;
    if (d.default.track(f.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
        ...T,
        subtotal: null == B ? void 0 : B.subtotal,
        tax: null == B ? void 0 : B.tax,
        expected_amount: null == B ? void 0 : B.total,
        expected_currency: null == B ? void 0 : B.currency,
        duration_ms: Date.now() - N
      }), _) return;
    if (U === f.PurchaseTypes.ONE_TIME) l()(null != j, "SKU must exist and be fetched."), l()(null != G, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(j.applicationId, j.id, {
      expectedAmount: G.amount,
      expectedCurrency: G.currency,
      isGift: E,
      paymentSource: R,
      loadId: w,
      giftInfoOptions: F
    });
    else if (l()(null != x, "Missing subscriptionPlan"), E) {
      l()(null != B, "Missing invoicePreview");
      let t = B.total,
        n = B.currency;
      e = await (0, o.purchaseSKU)(S.PREMIUM_SUBSCRIPTION_APPLICATION, x.skuId, {
        expectedAmount: t,
        expectedCurrency: n,
        paymentSource: R,
        subscriptionPlanId: x.id,
        isGift: !0,
        loadId: w,
        giftInfoOptions: F
      })
    } else if (b && null != g && null != R && null != O) e = f.PREPAID_PAYMENT_SOURCES.has(R.type) ? await (0, a.payInvoiceManually)(O, g, R, C.currency) : await (0, a.updateSubscription)(O, {
      paymentSource: R,
      currency: C.currency
    }, h, v, w);
    else if (null != O) {
      let t = (0, m.getItemsWithUpsertedPlanIdForGroup)(O, x.id, 1, new Set(A)),
        n = {
          paymentSource: R,
          currency: C.currency
        };
      O.status === f.SubscriptionStatusTypes.PAUSED ? n.status = f.SubscriptionStatusTypes.ACTIVE : n.items = t, e = await (0, a.updateSubscription)(O, n, h, v, w)
    } else e = await (0, u.subscribe)({
      planId: x.id,
      currency: C.currency,
      paymentSource: R,
      trialId: y,
      metadata: L,
      referralCode: D,
      loadId: w
    });
    if (e.redirectConfirmation) {
      P(null != e.redirectURL);
      return
    }
    t(p.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? c.default.createFromServer(e.subscription) : null : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0), M(n, i)
  } catch (e) {
    t(p.PurchaseState.FAIL), I(e), d.default.track(f.AnalyticEvents.PAYMENT_FLOW_FAILED, {
      ...T,
      payment_error_code: null == e ? void 0 : e.code,
      payment_source_id: null == R ? void 0 : R.id,
      payment_source_type: null == R ? void 0 : R.type,
      duration_ms: Date.now() - N
    })
  } finally {
    !_ && i(!1)
  }
}