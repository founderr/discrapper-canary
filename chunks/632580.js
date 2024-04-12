"use strict";
n.r(t), n.d(t, {
  purchaseProduct: function() {
    return S
  }
}), n("47120");
var i = n("512722"),
  s = n.n(i),
  a = n("570140"),
  r = n("355467"),
  l = n("976255"),
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
    analyticsLocations: h,
    flowStartTime: v,
    subscriptionPlan: x,
    planGroup: A,
    trialId: C,
    priceOptions: g,
    paymentSource: y,
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
  t(f.PurchaseState.PURCHASING), n(!0), i(!0), a.default.wait(l.clearError), S(null);
  try {
    let e, n, i;
    if (d.default.track(p.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
        ...T,
        duration_ms: Date.now() - v
      }), I) return;
    if (D === p.PurchaseTypes.ONE_TIME) s()(null != j, "SKU must exist and be fetched."), s()(null != G, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(j.applicationId, j.id, {
      expectedAmount: G.amount,
      expectedCurrency: G.currency,
      isGift: P,
      paymentSource: y,
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
        paymentSource: y,
        subscriptionPlanId: x.id,
        isGift: !0,
        loadId: F,
        giftInfoOptions: w
      })
    } else if (M && null != R && null != y && null != b) e = p.PREPAID_PAYMENT_SOURCES.has(y.type) ? await (0, r.payInvoiceManually)(b, R, y, g.currency) : await (0, r.updateSubscription)(b, {
      paymentSource: y,
      currency: g.currency
    }, h, N, F);
    else if (null != b) {
      let t = (0, m.getItemsWithUpsertedPlanIdForGroup)(b, x.id, 1, new Set(A)),
        n = {
          paymentSource: y,
          currency: g.currency
        };
      b.status === p.SubscriptionStatusTypes.PAUSED ? n.status = p.SubscriptionStatusTypes.ACTIVE : n.items = t, e = await (0, r.updateSubscription)(b, n, h, N, F)
    } else e = await (0, u.subscribe)({
      planId: x.id,
      currency: g.currency,
      paymentSource: y,
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
      payment_source_id: null == y ? void 0 : y.id,
      payment_source_type: null == y ? void 0 : y.type,
      duration_ms: Date.now() - v
    })
  } finally {
    !I && i(!1)
  }
}