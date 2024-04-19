"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  l = n("512722"),
  r = n.n(l),
  a = n("442837"),
  u = n("481060"),
  o = n("355467"),
  c = n("906732"),
  d = n("160913"),
  m = n("311821"),
  f = n("459965"),
  p = n("858987"),
  I = n("975060"),
  S = n("882712"),
  _ = n("855775"),
  P = n("285952"),
  E = n("626135"),
  T = n("669079"),
  N = n("74538"),
  v = n("987209"),
  h = n("598"),
  x = n("632580"),
  A = n("45572"),
  y = n("919778"),
  g = n("612853"),
  C = n("981631"),
  M = n("525087");

function R(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: l,
    onNext: R,
    legalTermsNodeRef: b,
    flashLegalTerms: L,
    invoiceError: O,
    planError: j,
    onPurchaseError: G,
    baseAnalyticsData: D,
    flowStartTime: U,
    trialId: w,
    planGroup: F,
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
    invoicePreview: el
  } = (0, h.usePaymentContext)(), {
    isGift: er,
    selectedGiftStyle: ea,
    customGiftMessage: eu,
    emojiConfetti: eo,
    soundEffect: ec,
    giftRecipient: ed
  } = (0, v.useGiftContext)(), em = (0, T.getGiftExperience)(ed), ef = {};
  ef.gift_style = ea, em === T.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (r()(null != ed, "Gift recipient must be set at purchase review step for these gift options."), ef.recipient_id = ed.id, ef.custom_message = eu, ef.emoji_id = null == eo ? void 0 : eo.id, ef.emoji_name = null == eo ? void 0 : eo.surrogates, ef.sound_id = null == ec ? void 0 : ec.soundId);
  let ep = null == Z ? void 0 : Z.id,
    eI = (0, y.checkNoPaymentTrialEnabled)(w, z.paymentSourceId, ep),
    eS = (0, a.useStateFromStores)([I.default], () => I.default.popupCallbackCalled),
    {
      analyticsLocations: e_
    } = (0, c.default)(),
    eP = null != Q ? $[Q] : null,
    [eE, eT] = s.useState(eI),
    [eN, ev] = s.useState(!1),
    {
      hasEntitlements: eh
    } = (0, f.useSubscriptionEntitlements)(ep, er),
    ex = (0, N.isPrepaidPaymentSource)(z.paymentSourceId),
    eA = eh || eI,
    ey = (0, d.useIsPrepaidPaymentPastDue)(),
    eg = null,
    eC = null;
  if (q === C.PurchaseTypes.ONE_TIME) {
    var eM;
    r()(null != ee, "SKU must be selected for one-time purchases"), eg = null !== (eM = et[ee]) && void 0 !== eM ? eM : null, r()(null != eg, "SKU must exist and be fetched.");
    let e = en[ee],
      t = null != Q ? Q : _.NO_PAYMENT_SOURCE;
    eC = null != e ? e[t] : null
  }
  let eR = async () => {
    await (0, x.purchaseProduct)({
      setPurchaseState: n,
      setHasAcceptedTerms: J,
      setIsSubmitting: eT,
      setPurchaseError: X,
      hasRedirectURL: eN,
      setHasRedirectURL: ev,
      isGift: er,
      baseAnalyticsData: D,
      analyticsLocation: B,
      analyticsLocations: e_,
      flowStartTime: U,
      subscriptionPlan: Z,
      planGroup: F,
      trialId: w,
      priceOptions: z,
      paymentSource: eP,
      isPrepaidPaymentPastDue: ey,
      openInvoiceId: H,
      premiumSubscription: t,
      onNext: R,
      metadata: W,
      sku: eg,
      skuPricePreview: eC,
      purchaseType: q,
      referralCode: ei,
      loadId: es.loadId,
      giftInfoOptions: ef,
      invoicePreview: el
    })
  };
  s.useEffect(() => {
    (async () => {
      if (!0 === eS) try {
        if (null == I.default.redirectedPaymentId) return;
        await (0, o.redirectedPaymentSucceeded)(I.default.redirectedPaymentId), n(A.PurchaseState.COMPLETED), R()
      } catch (e) {
        n(A.PurchaseState.FAIL), G(e), E.default.track(C.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...D,
          payment_error_code: null == e ? void 0 : e.code,
          payment_source_id: Q,
          payment_source_type: null == eP ? void 0 : eP.type,
          duration_ms: Date.now() - U
        })
      } finally {
        eT(!1), (0, o.resetPaymentIntentId)()
      } else k === S.PurchaseTokenAuthState.SUCCESS && await eR()
    })()
  }, [eS]), s.useEffect(() => {
    eI && !er && null == t && eR()
  }, [eI, er, t]);
  let eb = null != H || q === C.PurchaseTypes.ONE_TIME && !er;
  return eI ? null : (0, i.jsxs)(u.ModalFooter, {
    align: P.default.Align.CENTER,
    children: [(0, i.jsx)(p.default, {
      legalTermsNodeRef: b,
      invoiceError: O,
      planError: j,
      disablePurchase: K,
      flashLegalTerms: L,
      isSubmitting: eE,
      premiumSubscription: t,
      isGift: er,
      planGroup: F,
      isPrepaid: ex,
      isTrial: V,
      makePurchase: eR,
      needsPaymentSource: null == eP && !eA
    }), (0, i.jsx)(g.default, {}), Y && !eb ? (0, i.jsx)("div", {
      className: M.back,
      children: (0, i.jsx)(m.default, {
        onClick: l
      })
    }) : null]
  })
}