"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("512722"),
  l = n.n(a),
  r = n("442837"),
  u = n("481060"),
  o = n("355467"),
  c = n("906732"),
  d = n("374649"),
  m = n("160913"),
  f = n("311821"),
  p = n("459965"),
  S = n("858987"),
  _ = n("975060"),
  I = n("882712"),
  E = n("855775"),
  P = n("285952"),
  T = n("626135"),
  N = n("669079"),
  h = n("74538"),
  v = n("987209"),
  x = n("598"),
  A = n("632580"),
  C = n("45572"),
  g = n("919778"),
  y = n("612853"),
  M = n("981631"),
  b = n("525087");

function R(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: a,
    onNext: R,
    legalTermsNodeRef: O,
    flashLegalTerms: L,
    invoiceError: j,
    planError: G,
    onPurchaseError: D,
    baseAnalyticsData: F,
    flowStartTime: U,
    trialId: w,
    planGroup: B,
    analyticsLocation: k,
    purchaseTokenAuthState: H,
    openInvoiceId: W,
    metadata: Y,
    backButtonEligible: K,
    disablePurchase: V,
    isTrial: Z = !1
  } = e, {
    selectedPlan: z,
    priceOptions: J,
    setHasAcceptedTerms: X,
    setPurchaseError: q,
    purchaseType: Q,
    paymentSourceId: $,
    paymentSources: ee,
    selectedSkuId: et,
    skusById: en,
    skuPricePreviewsById: ei,
    referralCode: es,
    contextMetadata: ea
  } = (0, x.usePaymentContext)(), {
    isGift: el,
    selectedGiftStyle: er,
    customGiftMessage: eu,
    emojiConfetti: eo,
    soundEffect: ec,
    giftRecipient: ed
  } = (0, v.useGiftContext)(), em = (0, N.getGiftExperience)(ed), ef = {};
  ef.gift_style = er, em === N.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (l()(null != ed, "Gift recipient must be set at purchase review step for these gift options."), ef.recipient_id = ed.id, ef.custom_message = eu, ef.emoji_id = null == eo ? void 0 : eo.id, ef.emoji_name = null == eo ? void 0 : eo.surrogates, ef.sound_id = null == ec ? void 0 : ec.soundId);
  let ep = null == z ? void 0 : z.id,
    eS = (0, g.checkNoPaymentTrialEnabled)(w, J.paymentSourceId, ep),
    e_ = (0, r.useStateFromStores)([_.default], () => _.default.popupCallbackCalled),
    {
      analyticsLocations: eI
    } = (0, c.default)(),
    eE = null != $ ? ee[$] : null,
    [eP, eT] = s.useState(eS),
    [eN, eh] = s.useState(!1),
    {
      hasEntitlements: ev
    } = (0, p.useSubscriptionEntitlements)(ep, el),
    ex = (0, h.isPrepaidPaymentSource)(J.paymentSourceId),
    eA = ev || eS,
    eC = (0, m.useIsPrepaidPaymentPastDue)(),
    [eg, ey] = (0, d.useOneTimePurchaseInvoicePreview)({
      paymentSourceId: J.paymentSourceId,
      skuId: et,
      subscriptionPlanId: ep,
      preventFetch: !1
    }),
    eM = null,
    eb = null;
  if (Q === M.PurchaseTypes.ONE_TIME) {
    var eR;
    l()(null != et, "SKU must be selected for one-time purchases"), eM = null !== (eR = en[et]) && void 0 !== eR ? eR : null, l()(null != eM, "SKU must exist and be fetched.");
    let e = ei[et],
      t = null != $ ? $ : E.NO_PAYMENT_SOURCE;
    eb = null != e ? e[t] : null
  }
  let eO = async () => {
    await (0, A.purchaseProduct)({
      setPurchaseState: n,
      setHasAcceptedTerms: X,
      setIsSubmitting: eT,
      setPurchaseError: q,
      hasRedirectURL: eN,
      setHasRedirectURL: eh,
      isGift: el,
      baseAnalyticsData: F,
      analyticsLocation: k,
      analyticsLocations: eI,
      flowStartTime: U,
      subscriptionPlan: z,
      planGroup: B,
      trialId: w,
      priceOptions: J,
      paymentSource: eE,
      isPrepaidPaymentPastDue: eC,
      openInvoiceId: W,
      premiumSubscription: t,
      onNext: R,
      metadata: Y,
      sku: eM,
      skuPricePreview: eb,
      purchaseType: Q,
      referralCode: es,
      loadId: ea.loadId,
      giftInfoOptions: ef,
      invoicePreview: eg
    })
  };
  s.useEffect(() => {
    (async () => {
      if (!0 === e_) try {
        if (null == _.default.redirectedPaymentId) return;
        await (0, o.redirectedPaymentSucceeded)(_.default.redirectedPaymentId), n(C.PurchaseState.COMPLETED), R()
      } catch (e) {
        n(C.PurchaseState.FAIL), D(e), T.default.track(M.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...F,
          payment_error_code: null == e ? void 0 : e.code,
          payment_source_id: $,
          payment_source_type: null == eE ? void 0 : eE.type,
          duration_ms: Date.now() - U
        })
      } finally {
        eT(!1), (0, o.resetPaymentIntentId)()
      } else H === I.PurchaseTokenAuthState.SUCCESS && await eO()
    })()
  }, [e_]), s.useEffect(() => {
    eS && !el && null == t && eO()
  }, [eS, el, t]);
  let eL = null != W || Q === M.PurchaseTypes.ONE_TIME && !el;
  return eS ? null : (0, i.jsxs)(u.ModalFooter, {
    align: P.default.Align.CENTER,
    children: [(0, i.jsx)(S.default, {
      legalTermsNodeRef: O,
      invoiceError: j,
      planError: G,
      disablePurchase: V,
      flashLegalTerms: L,
      isSubmitting: eP,
      premiumSubscription: t,
      isGift: el,
      planGroup: B,
      isPrepaid: ex,
      isTrial: Z,
      makePurchase: eO,
      needsPaymentSource: null == eE && !eA
    }), (0, i.jsx)(y.default, {}), K && !eL ? (0, i.jsx)("div", {
      className: b.back,
      children: (0, i.jsx)(f.default, {
        onClick: a
      })
    }) : null]
  })
}