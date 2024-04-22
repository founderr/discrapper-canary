"use strict";
n.r(t), n.d(t, {
  purchaseProduct: function() {
    return _
  }
}), n("47120");
var i = n("512722"),
  s = n.n(i),
  l = n("570140"),
  r = n("355467"),
  a = n("976255"),
  u = n("366939"),
  o = n("16084"),
  c = n("255078"),
  d = n("626135"),
  m = n("74538"),
  f = n("45572"),
  p = n("981631"),
  I = n("474936");
async function _(e) {
  let {
    setPurchaseState: t,
    setHasAcceptedTerms: n,
    setIsSubmitting: i,
    setPurchaseError: _,
    hasRedirectURL: S,
    setHasRedirectURL: P,
    isGift: E,
    baseAnalyticsData: T,
    analyticsLocation: v,
    analyticsLocations: N,
    flowStartTime: h,
    subscriptionPlan: x,
    planGroup: A,
    trialId: y,
    priceOptions: g,
    paymentSource: C,
    isPrepaidPaymentPastDue: M,
    openInvoiceId: R,
    premiumSubscription: b,
    onNext: L,
    metadata: O,
    sku: j,
    skuPricePreview: G,
    purchaseType: D,
    referralCode: U,
    loadId: w,
    giftInfoOptions: F,
    invoicePreview: B
  } = e;
  t(f.PurchaseState.PURCHASING), n(!0), i(!0), l.default.wait(a.clearError), _(null);
  try {
    let e, n, i;
    if (d.default.track(p.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
        ...T,
        subtotal: null == B ? void 0 : B.subtotal,
        tax: null == B ? void 0 : B.tax,
        expected_amount: null == B ? void 0 : B.total,
        expected_currency: null == B ? void 0 : B.currency,
        duration_ms: Date.now() - h
      }), S) return;
    if (D === p.PurchaseTypes.ONE_TIME) s()(null != j, "SKU must exist and be fetched."), s()(null != G, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(j.applicationId, j.id, {
      expectedAmount: G.amount,
      expectedCurrency: G.currency,
      isGift: E,
      paymentSource: C,
      loadId: w,
      giftInfoOptions: F
    });
    else if (s()(null != x, "Missing subscriptionPlan"), E) {
      s()(null != B, "Missing invoicePreview");
      let t = B.total,
        n = B.currency;
      e = await (0, o.purchaseSKU)(I.PREMIUM_SUBSCRIPTION_APPLICATION, x.skuId, {
        expectedAmount: t,
        expectedCurrency: n,
        paymentSource: C,
        subscriptionPlanId: x.id,
        isGift: !0,
        loadId: w,
        giftInfoOptions: F
      })
    } else if (M && null != R && null != C && null != b) e = p.PREPAID_PAYMENT_SOURCES.has(C.type) ? await (0, r.payInvoiceManually)(b, R, C, g.currency) : await (0, r.updateSubscription)(b, {
      paymentSource: C,
      currency: g.currency
    }, N, v, w);
    else if (null != b) {
      let t = (0, m.getItemsWithUpsertedPlanIdForGroup)(b, x.id, 1, new Set(A)),
        n = {
          paymentSource: C,
          currency: g.currency
        };
      b.status === p.SubscriptionStatusTypes.PAUSED ? n.status = p.SubscriptionStatusTypes.ACTIVE : n.items = t, e = await (0, r.updateSubscription)(b, n, N, v, w)
    } else e = await (0, u.subscribe)({
      planId: x.id,
      currency: g.currency,
      paymentSource: C,
      trialId: y,
      metadata: O,
      referralCode: U,
      loadId: w
    });
    if (e.redirectConfirmation) {
      P(null != e.redirectURL);
      return
    }
    t(f.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? c.default.createFromServer(e.subscription) : null : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0), L(n, i)
  } catch (e) {
    t(f.PurchaseState.FAIL), _(e), d.default.track(p.AnalyticEvents.PAYMENT_FLOW_FAILED, {
      ...T,
      payment_error_code: null == e ? void 0 : e.code,
      payment_source_id: null == C ? void 0 : C.id,
      payment_source_type: null == C ? void 0 : C.type,
      duration_ms: Date.now() - h
    })
  } finally {
    !S && i(!1)
  }
}