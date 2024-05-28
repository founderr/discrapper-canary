"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var i = n("735250"),
  l = n("470079"),
  s = n("512722"),
  a = n.n(s),
  r = n("442837"),
  u = n("481060"),
  o = n("355467"),
  c = n("906732"),
  d = n("160913"),
  m = n("311821"),
  p = n("459965"),
  f = n("858987"),
  S = n("975060"),
  I = n("882712"),
  _ = n("855775"),
  P = n("285952"),
  E = n("626135"),
  T = n("669079"),
  v = n("74538"),
  h = n("987209"),
  N = n("598"),
  x = n("632580"),
  A = n("45572"),
  y = n("919778"),
  C = n("612853"),
  R = n("981631"),
  b = n("723663");

function g(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: s,
    onNext: g,
    legalTermsNodeRef: O,
    flashLegalTerms: M,
    invoiceError: L,
    planError: j,
    onPurchaseError: G,
    baseAnalyticsData: U,
    flowStartTime: D,
    trialId: w,
    planGroup: F,
    analyticsLocation: B,
    purchaseTokenAuthState: H,
    openInvoiceId: k,
    metadata: W,
    backButtonEligible: Y,
    disablePurchase: K,
    isTrial: V = !1
  } = e, {
    selectedPlan: z,
    priceOptions: Z,
    setHasAcceptedTerms: X,
    setPurchaseError: J,
    purchaseType: q,
    paymentSourceId: Q,
    paymentSources: $,
    selectedSkuId: ee,
    skusById: et,
    skuPricePreviewsById: en,
    referralCode: ei,
    contextMetadata: el,
    invoicePreview: es
  } = (0, N.usePaymentContext)(), {
    isGift: ea,
    selectedGiftStyle: er,
    customGiftMessage: eu,
    emojiConfetti: eo,
    soundEffect: ec,
    giftRecipient: ed
  } = (0, h.useGiftContext)(), em = (0, T.getGiftExperience)(ed), ep = {};
  ep.gift_style = er, em === T.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (a()(null != ed, "Gift recipient must be set at purchase review step for these gift options."), ep.recipient_id = ed.id, ep.custom_message = eu, ep.emoji_id = null == eo ? void 0 : eo.id, ep.emoji_name = (null == eo ? void 0 : eo.id) == null ? null == eo ? void 0 : eo.surrogates : void 0, ep.sound_id = null == ec ? void 0 : ec.soundId);
  let ef = null == z ? void 0 : z.id,
    eS = (0, y.checkNoPaymentTrialEnabled)(w, Z.paymentSourceId, ef),
    eI = (0, r.useStateFromStores)([S.default], () => S.default.popupCallbackCalled),
    {
      analyticsLocations: e_
    } = (0, c.default)(),
    eP = null != Q ? $[Q] : null,
    [eE, eT] = l.useState(eS),
    [ev, eh] = l.useState(!1),
    {
      hasEntitlements: eN
    } = (0, p.useSubscriptionEntitlements)(ef, ea),
    ex = (0, v.isPrepaidPaymentSource)(Z.paymentSourceId),
    eA = eN || eS,
    ey = (0, d.useIsPrepaidPaymentPastDue)(),
    eC = null,
    eR = null;
  if (q === R.PurchaseTypes.ONE_TIME) {
    var eb;
    a()(null != ee, "SKU must be selected for one-time purchases"), eC = null !== (eb = et[ee]) && void 0 !== eb ? eb : null, a()(null != eC, "SKU must exist and be fetched.");
    let e = en[ee],
      t = null != Q ? Q : _.NO_PAYMENT_SOURCE;
    eR = null != e ? e[t] : null
  }
  let eg = async () => {
    await (0, x.purchaseProduct)({
      setPurchaseState: n,
      setHasAcceptedTerms: X,
      setIsSubmitting: eT,
      setPurchaseError: J,
      hasRedirectURL: ev,
      setHasRedirectURL: eh,
      isGift: ea,
      baseAnalyticsData: U,
      analyticsLocation: B,
      analyticsLocations: e_,
      flowStartTime: D,
      subscriptionPlan: z,
      planGroup: F,
      trialId: w,
      priceOptions: Z,
      paymentSource: eP,
      isPrepaidPaymentPastDue: ey,
      openInvoiceId: k,
      premiumSubscription: t,
      onNext: g,
      metadata: W,
      sku: eC,
      skuPricePreview: eR,
      purchaseType: q,
      referralCode: ei,
      loadId: el.loadId,
      giftInfoOptions: ep,
      invoicePreview: es
    })
  };
  l.useEffect(() => {
    (async () => {
      if (!0 === eI) try {
        if (null == S.default.redirectedPaymentId) return;
        await (0, o.redirectedPaymentSucceeded)(S.default.redirectedPaymentId), n(A.PurchaseState.COMPLETED), g()
      } catch (e) {
        n(A.PurchaseState.FAIL), G(e), E.default.track(R.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...U,
          payment_error_code: null == e ? void 0 : e.code,
          payment_source_id: Q,
          payment_source_type: null == eP ? void 0 : eP.type,
          duration_ms: Date.now() - D
        })
      } finally {
        eT(!1), (0, o.resetPaymentIntentId)()
      } else H === I.PurchaseTokenAuthState.SUCCESS && await eg()
    })()
  }, [eI]), l.useEffect(() => {
    eS && !ea && null == t && eg()
  }, [eS, ea, t]);
  let eO = null != k || q === R.PurchaseTypes.ONE_TIME && !ea;
  return eS ? null : (0, i.jsxs)(u.ModalFooter, {
    align: P.default.Align.CENTER,
    children: [(0, i.jsx)(f.default, {
      legalTermsNodeRef: O,
      invoiceError: L,
      planError: j,
      disablePurchase: K,
      flashLegalTerms: M,
      isSubmitting: eE,
      premiumSubscription: t,
      isGift: ea,
      planGroup: F,
      isPrepaid: ex,
      isTrial: V,
      makePurchase: eg,
      needsPaymentSource: null == eP && !eA
    }), (0, i.jsx)(C.default, {}), Y && !eO ? (0, i.jsx)("div", {
      className: b.back,
      children: (0, i.jsx)(m.default, {
        onClick: s
      })
    }) : null]
  })
}