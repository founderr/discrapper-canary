"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
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
  d = n("160913"),
  m = n("311821"),
  f = n("459965"),
  p = n("858987"),
  _ = n("975060"),
  S = n("882712"),
  I = n("855775"),
  E = n("285952"),
  P = n("626135"),
  T = n("669079"),
  N = n("74538"),
  h = n("987209"),
  x = n("598"),
  v = n("632580"),
  A = n("45572"),
  C = n("919778"),
  g = n("612853"),
  y = n("981631"),
  M = n("525087");

function b(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: a,
    onNext: b,
    legalTermsNodeRef: R,
    flashLegalTerms: O,
    invoiceError: L,
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
  } = (0, x.usePaymentContext)(), {
    isGift: el,
    selectedGiftStyle: er,
    customGiftMessage: eu,
    emojiConfetti: eo,
    soundEffect: ec,
    giftRecipient: ed
  } = (0, h.useGiftContext)(), em = (0, T.getGiftExperience)(ed), ef = {};
  ef.gift_style = er, em === T.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (l()(null != ed, "Gift recipient must be set at purchase review step for these gift options."), ef.recipient_id = ed.id, ef.custom_message = eu, ef.emoji_id = null == eo ? void 0 : eo.id, ef.emoji_name = null == eo ? void 0 : eo.surrogates, ef.sound_id = null == ec ? void 0 : ec.soundId);
  let ep = null == Z ? void 0 : Z.id,
    e_ = (0, C.checkNoPaymentTrialEnabled)(F, z.paymentSourceId, ep),
    eS = (0, r.useStateFromStores)([_.default], () => _.default.popupCallbackCalled),
    {
      analyticsLocations: eI
    } = (0, c.default)(),
    eE = null != Q ? $[Q] : null,
    [eP, eT] = s.useState(e_),
    [eN, eh] = s.useState(!1),
    {
      hasEntitlements: ex
    } = (0, f.useSubscriptionEntitlements)(ep, el),
    ev = (0, N.isPrepaidPaymentSource)(z.paymentSourceId),
    eA = ex || e_,
    eC = (0, d.useIsPrepaidPaymentPastDue)(),
    eg = null,
    ey = null;
  if (q === y.PurchaseTypes.ONE_TIME) {
    var eM;
    l()(null != ee, "SKU must be selected for one-time purchases"), eg = null !== (eM = et[ee]) && void 0 !== eM ? eM : null, l()(null != eg, "SKU must exist and be fetched.");
    let e = en[ee],
      t = null != Q ? Q : I.NO_PAYMENT_SOURCE;
    ey = null != e ? e[t] : null
  }
  let eb = async () => {
    await (0, v.purchaseProduct)({
      setPurchaseState: n,
      setHasAcceptedTerms: J,
      setIsSubmitting: eT,
      setPurchaseError: X,
      hasRedirectURL: eN,
      setHasRedirectURL: eh,
      isGift: el,
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
      onNext: b,
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
      if (!0 === eS) try {
        if (null == _.default.redirectedPaymentId) return;
        await (0, o.redirectedPaymentSucceeded)(_.default.redirectedPaymentId), n(A.PurchaseState.COMPLETED), b()
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
      } else k === S.PurchaseTokenAuthState.SUCCESS && await eb()
    })()
  }, [eS]), s.useEffect(() => {
    e_ && !el && null == t && eb()
  }, [e_, el, t]);
  let eR = null != H || q === y.PurchaseTypes.ONE_TIME && !el;
  return e_ ? null : (0, i.jsxs)(u.ModalFooter, {
    align: E.default.Align.CENTER,
    children: [(0, i.jsx)(p.default, {
      legalTermsNodeRef: R,
      invoiceError: L,
      planError: j,
      disablePurchase: K,
      flashLegalTerms: O,
      isSubmitting: eP,
      premiumSubscription: t,
      isGift: el,
      planGroup: w,
      isPrepaid: ev,
      isTrial: V,
      makePurchase: eb,
      needsPaymentSource: null == eE && !eA
    }), (0, i.jsx)(g.default, {}), Y && !eR ? (0, i.jsx)("div", {
      className: M.back,
      children: (0, i.jsx)(m.default, {
        onClick: a
      })
    }) : null]
  })
}