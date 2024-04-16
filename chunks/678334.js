"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("512722"),
  r = n.n(a),
  l = n("442837"),
  u = n("481060"),
  o = n("355467"),
  c = n("906732"),
  d = n("160913"),
  m = n("311821"),
  f = n("459965"),
  p = n("858987"),
  S = n("975060"),
  _ = n("882712"),
  I = n("855775"),
  E = n("285952"),
  P = n("626135"),
  T = n("669079"),
  N = n("74538"),
  h = n("987209"),
  v = n("598"),
  x = n("632580"),
  A = n("45572"),
  C = n("919778"),
  g = n("612853"),
  y = n("981631"),
  M = n("525087");

function R(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: a,
    onNext: R,
    legalTermsNodeRef: b,
    flashLegalTerms: L,
    invoiceError: O,
    planError: j,
    onPurchaseError: G,
    baseAnalyticsData: D,
    flowStartTime: U,
    trialId: F,
    planGroup: w,
    analyticsLocation: B,
    purchaseTokenAuthState: k,
    openInvoiceId: H,
    metadata: W,
    backButtonEligible: Y,
    disablePurchase: K,
    isTrial: V = !1
  } = e, {
    selectedPlan: Z,
    priceOptions: z,
    setHasAcceptedTerms: J,
    setPurchaseError: X,
    purchaseType: q,
    paymentSourceId: Q,
    paymentSources: $,
    selectedSkuId: ee,
    skusById: et,
    skuPricePreviewsById: en,
    referralCode: ei,
    contextMetadata: es,
    invoicePreview: ea
  } = (0, v.usePaymentContext)(), {
    isGift: er,
    selectedGiftStyle: el,
    customGiftMessage: eu,
    emojiConfetti: eo,
    soundEffect: ec,
    giftRecipient: ed
  } = (0, h.useGiftContext)(), em = (0, T.getGiftExperience)(ed), ef = {};
  ef.gift_style = el, em === T.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (r()(null != ed, "Gift recipient must be set at purchase review step for these gift options."), ef.recipient_id = ed.id, ef.custom_message = eu, ef.emoji_id = null == eo ? void 0 : eo.id, ef.emoji_name = null == eo ? void 0 : eo.surrogates, ef.sound_id = null == ec ? void 0 : ec.soundId);
  let ep = null == Z ? void 0 : Z.id,
    eS = (0, C.checkNoPaymentTrialEnabled)(F, z.paymentSourceId, ep),
    e_ = (0, l.useStateFromStores)([S.default], () => S.default.popupCallbackCalled),
    {
      analyticsLocations: eI
    } = (0, c.default)(),
    eE = null != Q ? $[Q] : null,
    [eP, eT] = s.useState(eS),
    [eN, eh] = s.useState(!1),
    {
      hasEntitlements: ev
    } = (0, f.useSubscriptionEntitlements)(ep, er),
    ex = (0, N.isPrepaidPaymentSource)(z.paymentSourceId),
    eA = ev || eS,
    eC = (0, d.useIsPrepaidPaymentPastDue)(),
    eg = null,
    ey = null;
  if (q === y.PurchaseTypes.ONE_TIME) {
    var eM;
    r()(null != ee, "SKU must be selected for one-time purchases"), eg = null !== (eM = et[ee]) && void 0 !== eM ? eM : null, r()(null != eg, "SKU must exist and be fetched.");
    let e = en[ee],
      t = null != Q ? Q : I.NO_PAYMENT_SOURCE;
    ey = null != e ? e[t] : null
  }
  let eR = async () => {
    await (0, x.purchaseProduct)({
      setPurchaseState: n,
      setHasAcceptedTerms: J,
      setIsSubmitting: eT,
      setPurchaseError: X,
      hasRedirectURL: eN,
      setHasRedirectURL: eh,
      isGift: er,
      baseAnalyticsData: D,
      analyticsLocation: B,
      analyticsLocations: eI,
      flowStartTime: U,
      subscriptionPlan: Z,
      planGroup: w,
      trialId: F,
      priceOptions: z,
      paymentSource: eE,
      isPrepaidPaymentPastDue: eC,
      openInvoiceId: H,
      premiumSubscription: t,
      onNext: R,
      metadata: W,
      sku: eg,
      skuPricePreview: ey,
      purchaseType: q,
      referralCode: ei,
      loadId: es.loadId,
      giftInfoOptions: ef,
      invoicePreview: ea
    })
  };
  s.useEffect(() => {
    (async () => {
      if (!0 === e_) try {
        if (null == S.default.redirectedPaymentId) return;
        await (0, o.redirectedPaymentSucceeded)(S.default.redirectedPaymentId), n(A.PurchaseState.COMPLETED), R()
      } catch (e) {
        n(A.PurchaseState.FAIL), G(e), P.default.track(y.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...D,
          payment_error_code: null == e ? void 0 : e.code,
          payment_source_id: Q,
          payment_source_type: null == eE ? void 0 : eE.type,
          duration_ms: Date.now() - U
        })
      } finally {
        eT(!1), (0, o.resetPaymentIntentId)()
      } else k === _.PurchaseTokenAuthState.SUCCESS && await eR()
    })()
  }, [e_]), s.useEffect(() => {
    eS && !er && null == t && eR()
  }, [eS, er, t]);
  let eb = null != H || q === y.PurchaseTypes.ONE_TIME && !er;
  return eS ? null : (0, i.jsxs)(u.ModalFooter, {
    align: E.default.Align.CENTER,
    children: [(0, i.jsx)(p.default, {
      legalTermsNodeRef: b,
      invoiceError: O,
      planError: j,
      disablePurchase: K,
      flashLegalTerms: L,
      isSubmitting: eP,
      premiumSubscription: t,
      isGift: er,
      planGroup: w,
      isPrepaid: ex,
      isTrial: V,
      makePurchase: eR,
      needsPaymentSource: null == eE && !eA
    }), (0, i.jsx)(g.default, {}), Y && !eb ? (0, i.jsx)("div", {
      className: M.back,
      children: (0, i.jsx)(m.default, {
        onClick: a
      })
    }) : null]
  })
}