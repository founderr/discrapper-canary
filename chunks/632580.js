"use strict";
n.r(t), n.d(t, {
  purchaseProduct: function() {
    return I
  }
}), n("411104"), n("47120");
var i = n("512722"),
  s = n.n(i),
  a = n("570140"),
  l = n("355467"),
  r = n("976255"),
  u = n("366939"),
  o = n("16084"),
  c = n("255078"),
  d = n("626135"),
  m = n("122289"),
  f = n("74538"),
  p = n("45572"),
  S = n("981631"),
  _ = n("474936");
async function I(e) {
  let {
    setPurchaseState: t,
    setHasAcceptedTerms: n,
    setIsSubmitting: i,
    setPurchaseError: I,
    hasRedirectURL: E,
    setHasRedirectURL: P,
    isGift: T,
    baseAnalyticsData: N,
    analyticsLocation: h,
    analyticsLocations: v,
    flowStartTime: x,
    subscriptionPlan: A,
    planGroup: C,
    trialId: g,
    priceOptions: y,
    paymentSource: M,
    isPrepaidPaymentPastDue: b,
    openInvoiceId: R,
    premiumSubscription: O,
    onNext: L,
    metadata: j,
    sku: G,
    skuPricePreview: D,
    purchaseType: F,
    referralCode: U,
    loadId: w,
    giftInfoOptions: B,
    invoicePreview: k
  } = e;
  t(p.PurchaseState.PURCHASING), n(!0), i(!0), a.default.wait(r.clearError), I(null);
  try {
    let e, n, i;
    if (d.default.track(S.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
        ...N,
        duration_ms: Date.now() - x
      }), E) return;
    if (F === S.PurchaseTypes.ONE_TIME) s()(null != G, "SKU must exist and be fetched."), s()(null != D, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(G.applicationId, G.id, {
      expectedAmount: D.amount,
      expectedCurrency: D.currency,
      isGift: T,
      paymentSource: M,
      loadId: w,
      giftInfoOptions: B
    });
    else if (s()(null != A, "Missing subscriptionPlan"), T) {
      var H, W;
      let t = (0, f.getPrice)(A.id, !1, !0, y);
      if ("usd" === t.currency && (null == M ? void 0 : M.type) === S.PaymentSourceTypes.GCASH) {
        let e = Error("Invalid USD currency for GCash");
        (0, m.captureBillingException)(e, {
          tags: {
            paymentSourceId: null !== (H = null == M ? void 0 : M.id) && void 0 !== H ? H : "",
            subscriptionPlanId: A.id,
            priceOptions: JSON.stringify(y)
          }
        })
      }
      let n = null !== (W = null == k ? void 0 : k.total) && void 0 !== W ? W : t.amount;
      e = await (0, o.purchaseSKU)(_.PREMIUM_SUBSCRIPTION_APPLICATION, A.skuId, {
        expectedAmount: n,
        expectedCurrency: t.currency,
        paymentSource: M,
        subscriptionPlanId: A.id,
        isGift: !0,
        loadId: w,
        giftInfoOptions: B
      })
    } else if (b && null != R && null != M && null != O) e = S.PREPAID_PAYMENT_SOURCES.has(M.type) ? await (0, l.payInvoiceManually)(O, R, M, y.currency) : await (0, l.updateSubscription)(O, {
      paymentSource: M,
      currency: y.currency
    }, v, h, w);
    else if (null != O) {
      let t = (0, f.getItemsWithUpsertedPlanIdForGroup)(O, A.id, 1, new Set(C)),
        n = {
          paymentSource: M,
          currency: y.currency
        };
      O.status === S.SubscriptionStatusTypes.PAUSED ? n.status = S.SubscriptionStatusTypes.ACTIVE : n.items = t, e = await (0, l.updateSubscription)(O, n, v, h, w)
    } else e = await (0, u.subscribe)({
      planId: A.id,
      currency: y.currency,
      paymentSource: M,
      trialId: g,
      metadata: j,
      referralCode: U,
      loadId: w
    });
    if (e.redirectConfirmation) {
      P(null != e.redirectURL);
      return
    }
    t(p.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? c.default.createFromServer(e.subscription) : null : "entitlements" in e && (i = null != e.entitlements ? e.entitlements : void 0), L(n, i)
  } catch (e) {
    t(p.PurchaseState.FAIL), I(e), d.default.track(S.AnalyticEvents.PAYMENT_FLOW_FAILED, {
      ...N,
      payment_error_code: null == e ? void 0 : e.code,
      payment_source_id: null == M ? void 0 : M.id,
      payment_source_type: null == M ? void 0 : M.type,
      duration_ms: Date.now() - x
    })
  } finally {
    !E && i(!1)
  }
}