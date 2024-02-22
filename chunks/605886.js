"use strict";
n.r(t), n.d(t, {
  purchaseProduct: function() {
    return N
  }
}), n("70102"), n("222007");
var s = n("627445"),
  r = n.n(s),
  a = n("913144"),
  l = n("850068"),
  i = n("112679"),
  u = n("596523"),
  c = n("465527"),
  o = n("388290"),
  d = n("599110"),
  f = n("745279"),
  m = n("659632"),
  _ = n("719923"),
  E = n("286350"),
  I = n("49111"),
  p = n("646718");
async function N(e) {
  let {
    setPurchaseState: t,
    setHasAcceptedTerms: n,
    setIsSubmitting: s,
    setPurchaseError: N,
    hasRedirectURL: S,
    setHasRedirectURL: P,
    isGift: T,
    giftStyle: A,
    baseAnalyticsData: C,
    analyticsLocation: O,
    analyticsLocations: h,
    flowStartTime: R,
    subscriptionPlan: M,
    planGroup: g,
    trialId: x,
    priceOptions: v,
    paymentSource: y,
    isPrepaidPaymentPastDue: L,
    openInvoiceId: b,
    premiumSubscription: j,
    onNext: G,
    metadata: D,
    sku: U,
    skuPricePreview: B,
    purchaseType: F,
    referralCode: k,
    loadId: Y,
    giftRecipient: w,
    customMessage: H,
    emojiConfetti: W,
    soundEffect: Z
  } = e;
  t(E.PurchaseState.PURCHASING), n(!0), s(!0), a.default.wait(i.clearError), N(null);
  try {
    let e, n, s;
    if (d.default.track(I.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
        ...C,
        duration_ms: Date.now() - R
      }), S) return;
    let a = (0, m.getGiftExperience)(w),
      i = a === m.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD;
    if (F === I.PurchaseTypes.ONE_TIME) r(null != U, "SKU must exist and be fetched."), r(null != B, "SKUPricePreview must exist."), e = await (0, c.purchaseSKU)(U.applicationId, U.id, {
      expectedAmount: B.amount,
      expectedCurrency: B.currency,
      isGift: T,
      paymentSource: y,
      loadId: Y,
      giftStyle: A,
      recipientId: a !== m.GiftExperience.DEFAULT ? null == w ? void 0 : w.id : void 0,
      customMessage: i ? H : void 0,
      emojiConfetti: i ? W : void 0,
      soundEffect: i ? Z : void 0
    });
    else if (r(null != M, "Missing subscriptionPlan"), T) {
      let t = (0, _.getPrice)(M.id, !1, !0, v);
      if ("usd" === t.currency && (null == y ? void 0 : y.type) === I.PaymentSourceTypes.GCASH) {
        var K;
        let e = Error("Invalid USD currency for GCash");
        (0, f.captureBillingException)(e, {
          tags: {
            paymentSourceId: null !== (K = null == y ? void 0 : y.id) && void 0 !== K ? K : "",
            subscriptionPlanId: M.id,
            priceOptions: JSON.stringify(v)
          }
        })
      }
      e = await (0, c.purchaseSKU)(p.PREMIUM_SUBSCRIPTION_APPLICATION, M.skuId, {
        expectedAmount: t.amount,
        expectedCurrency: t.currency,
        paymentSource: y,
        subscriptionPlanId: M.id,
        isGift: !0,
        giftStyle: A,
        loadId: Y,
        recipientId: a !== m.GiftExperience.DEFAULT ? null == w ? void 0 : w.id : void 0,
        customMessage: i ? H : void 0,
        emojiConfetti: i ? W : void 0,
        soundEffect: i ? Z : void 0
      })
    } else e = L && null != b && null != y && null != j ? I.PREPAID_PAYMENT_SOURCES.has(y.type) ? await (0, l.payInvoiceManually)(j, b, y, v.currency) : await (0, l.updateSubscription)(j, {
      paymentSource: y,
      currency: v.currency
    }, h, O, Y) : null != j ? await (0, l.updateSubscription)(j, {
      items: (0, _.getItemsWithUpsertedPlanIdForGroup)(j, M.id, 1, new Set(g)),
      paymentSource: y,
      currency: v.currency
    }, h, O, Y) : await (0, u.subscribe)({
      planId: M.id,
      currency: v.currency,
      paymentSource: y,
      trialId: x,
      metadata: D,
      referralCode: k,
      loadId: Y
    });
    if (e.redirectConfirmation) {
      P(null != e.redirectURL);
      return
    }
    t(E.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? o.default.createFromServer(e.subscription) : null : "entitlements" in e && (s = null != e.entitlements ? e.entitlements : void 0), G(n, s)
  } catch (e) {
    t(E.PurchaseState.FAIL), N(e), d.default.track(I.AnalyticEvents.PAYMENT_FLOW_FAILED, {
      ...C,
      payment_error_code: null == e ? void 0 : e.code,
      payment_source_id: null == y ? void 0 : y.id,
      payment_source_type: null == y ? void 0 : y.type,
      duration_ms: Date.now() - R
    })
  } finally {
    !S && s(!1)
  }
}