"use strict";
n.r(t), n.d(t, {
  purchaseProduct: function() {
    return S
  }
}), n("47120");
var i = n("512722"),
  s = n.n(i),
  a = n("570140"),
  l = n("355467"),
  r = n("976255"),
  u = n("366939"),
  o = n("16084"),
  c = n("255078"),
  d = n("626135"),
  m = n("74538"),
  f = n("45572"),
  p = n("981631"),
  _ = n("474936");
async function S(e) {
  let {
    setPurchaseState: t,
    setHasAcceptedTerms: n,
    setIsSubmitting: i,
    setPurchaseError: S,
    hasRedirectURL: I,
    setHasRedirectURL: E,
    isGift: P,
    baseAnalyticsData: T,
    analyticsLocation: N,
    analyticsLocations: v,
    flowStartTime: h,
    subscriptionPlan: x,
    planGroup: A,
    trialId: C,
    priceOptions: y,
    paymentSource: g,
    isPrepaidPaymentPastDue: M,
    openInvoiceId: R,
    premiumSubscription: b,
    onNext: L,
    metadata: O,
    sku: j,
    skuPricePreview: G,
    purchaseType: D,
    referralCode: U,
    loadId: F,
    giftInfoOptions: w,
    invoicePreview: B
  } = e;
  t(f.PurchaseState.PURCHASING), n(!0), i(!0), a.default.wait(r.clearError), S(null);
  try {
    let e, n, i;
    if (d.default.track(p.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
        ...T,
        duration_ms: Date.now() - h
      }), I) return;
    if (D === p.PurchaseTypes.ONE_TIME) s()(null != j, "SKU must exist and be fetched."), s()(null != G, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(j.applicationId, j.id, {
      expectedAmount: G.amount,
      expectedCurrency: G.currency,
      isGift: P,
      paymentSource: g,
      loadId: F,
      giftInfoOptions: w
    });
    else if (s()(null != x, "Missing subscriptionPlan"), P) {
      s()(null != B, "Missing invoicePreview");
      let t = B.total,
        n = B.currency;
      e = await (0, o.purchaseSKU)(_.PREMIUM_SUBSCRIPTION_APPLICATION, x.skuId, {
        expectedAmount: t,
        expectedCurrency: n,
        paymentSource: g,
        subscriptionPlanId: x.id,
        isGift: !0,
        loadId: F,
        giftInfoOptions: w
      })
    } else if (M && null != R && null != g && null != b) e = p.PREPAID_PAYMENT_SOURCES.has(g.type) ? await (0, l.payInvoiceManually)(b, R, g, y.currency) : await (0, l.updateSubscription)(b, {
      paymentSource: g,
      currency: y.currency
    }, v, N, F);
    else if (null != b) {
      let t = (0, m.getItemsWithUpsertedPlanIdForGroup)(b, x.id, 1, new Set(A)),
        n = {
          paymentSource: g,
          currency: y.currency
        };
      b.status === p.SubscriptionStatusTypes.PAUSED ? n.status = p.SubscriptionStatusTypes.ACTIVE : n.items = t, e = await (0, l.updateSubscription)(b, n, v, N, F)
    } else e = await (0, u.subscribe)({
      planId: x.id,
      currency: y.currency,
      paymentSource: g,
      trialId: C,
      metadata: O,
      referralCode: U,
      loadId: F
    });
    if (e.redirectConfirmation) {
      E(null != e.redirectURL);
      return
    }
    t(f.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? c.default.createFromServer(e.subscription) : null : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0), L(n, i)
  } catch (e) {
    t(f.PurchaseState.FAIL), S(e), d.default.track(p.AnalyticEvents.PAYMENT_FLOW_FAILED, {
      ...T,
      payment_error_code: null == e ? void 0 : e.code,
      payment_source_id: null == g ? void 0 : g.id,
      payment_source_type: null == g ? void 0 : g.type,
      duration_ms: Date.now() - h
    })
  } finally {
    !I && i(!1)
  }
}