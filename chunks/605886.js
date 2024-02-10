"use strict";
n.r(t), n.d(t, {
  purchaseProduct: function() {
    return P
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
  p = n("49111"),
  I = n("646718"),
  S = n("782340");
async function P(e) {
  let {
    setPurchaseState: t,
    setHasAcceptedTerms: n,
    setIsSubmitting: s,
    setPurchaseError: P,
    hasRedirectURL: N,
    setHasRedirectURL: T,
    isGift: C,
    giftStyle: A,
    baseAnalyticsData: O,
    analyticsLocation: h,
    analyticsLocations: R,
    flowStartTime: g,
    subscriptionPlan: M,
    planGroup: x,
    trialId: v,
    priceOptions: y,
    paymentSource: L,
    isPrepaidPaymentPastDue: b,
    openInvoiceId: j,
    premiumSubscription: G,
    onNext: D,
    metadata: U,
    sku: B,
    skuPricePreview: F,
    purchaseType: k,
    referralCode: Y,
    loadId: w,
    giftRecipient: H,
    customMessage: W,
    emojiConfetti: Z,
    soundEffect: K
  } = e;
  t(E.PurchaseState.PURCHASING), n(!0), s(!0), a.default.wait(i.clearError), P(null);
  try {
    let e, n, s;
    if (d.default.track(p.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
        ...O,
        duration_ms: Date.now() - g
      }), N) return;
    let a = (0, m.getGiftExperience)(H),
      i = m.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has(a),
      P = m.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(a);
    if (k === p.PurchaseTypes.ONE_TIME) r(null != B, "SKU must exist and be fetched."), r(null != F, "SKUPricePreview must exist."), e = await (0, c.purchaseSKU)(B.applicationId, B.id, {
      expectedAmount: F.amount,
      expectedCurrency: F.currency,
      isGift: C,
      paymentSource: L,
      loadId: w,
      giftStyle: A,
      recipientId: a !== m.GiftExperience.DEFAULT ? null == H ? void 0 : H.id : void 0,
      customMessage: i ? W : void 0,
      emojiConfetti: P ? Z : void 0,
      soundEffect: P ? K : void 0
    });
    else if (r(null != M, "Missing subscriptionPlan"), C) {
      let t = (0, _.getPrice)(M.id, !1, !0, y);
      if ("usd" === t.currency && (null == L ? void 0 : L.type) === p.PaymentSourceTypes.GCASH) {
        var V;
        let e = Error("Invalid USD currency for GCash");
        (0, f.captureBillingException)(e, {
          tags: {
            paymentSourceId: null !== (V = null == L ? void 0 : L.id) && void 0 !== V ? V : "",
            subscriptionPlanId: M.id,
            priceOptions: JSON.stringify(y)
          }
        })
      }
      e = await (0, c.purchaseSKU)(I.PREMIUM_SUBSCRIPTION_APPLICATION, M.skuId, {
        expectedAmount: t.amount,
        expectedCurrency: t.currency,
        paymentSource: L,
        subscriptionPlanId: M.id,
        isGift: !0,
        giftStyle: A,
        loadId: w,
        recipientId: a !== m.GiftExperience.DEFAULT ? null == H ? void 0 : H.id : void 0,
        customMessage: i ? W : void 0,
        emojiConfetti: P ? Z : void 0,
        soundEffect: P ? K : void 0
      })
    } else e = b && null != j && null != L && null != G ? p.PREPAID_PAYMENT_SOURCES.has(L.type) ? await (0, l.payInvoiceManually)(G, j, L, y.currency) : await (0, l.updateSubscription)(G, {
      paymentSource: L,
      currency: y.currency
    }, R, h, w) : null != G ? await (0, l.updateSubscription)(G, {
      items: (0, _.getItemsWithUpsertedPlanIdForGroup)(G, M.id, 1, new Set(x)),
      paymentSource: L,
      currency: y.currency
    }, R, h, w) : await (0, u.subscribe)({
      planId: M.id,
      currency: y.currency,
      paymentSource: L,
      trialId: v,
      metadata: U,
      referralCode: Y,
      loadId: w
    });
    if (e.redirectConfirmation) {
      T(null != e.redirectURL);
      return
    }
    let z = {
      ...O,
      duration_ms: Date.now() - g,
      payment_source_type: null == L ? void 0 : L.type
    };
    C && (i && (z.is_custom_message_edited = W !== S.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE), P && (z.is_custom_emoji_sound_available = !0, null != Z && (z.emoji_name = Z.surrogates), null != K && (z.sound_id = K.soundId))), t(E.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? o.default.createFromServer(e.subscription) : null : "entitlements" in e && (s = null != e.entitlements ? e.entitlements : void 0), D(n, s)
  } catch (e) {
    t(E.PurchaseState.FAIL), P(e), d.default.track(p.AnalyticEvents.PAYMENT_FLOW_FAILED, {
      ...O,
      payment_error_code: null == e ? void 0 : e.code,
      payment_source_id: null == L ? void 0 : L.id,
      payment_source_type: null == L ? void 0 : L.type,
      duration_ms: Date.now() - g
    })
  } finally {
    !N && s(!1)
  }
}