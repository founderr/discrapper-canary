"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("627445"),
  l = n.n(a),
  i = n("446674"),
  u = n("77078"),
  c = n("850068"),
  o = n("685665"),
  d = n("921149"),
  f = n("177998"),
  m = n("661128"),
  _ = n("868869"),
  E = n("926223"),
  I = n("467292"),
  p = n("622839"),
  N = n("145131"),
  S = n("599110"),
  P = n("719923"),
  T = n("635357"),
  A = n("642906"),
  C = n("605886"),
  O = n("286350"),
  h = n("102492"),
  M = n("376641"),
  R = n("49111"),
  g = n("252182");

function x(e) {
  let {
    premiumSubscription: t,
    setPurchaseState: n,
    onBack: a,
    onNext: x,
    legalTermsNodeRef: v,
    flashLegalTerms: y,
    invoiceError: L,
    planError: b,
    onPurchaseError: j,
    baseAnalyticsData: G,
    flowStartTime: D,
    trialId: U,
    planGroup: B,
    analyticsLocation: F,
    purchaseTokenAuthState: k,
    openInvoiceId: Y,
    metadata: H,
    backButtonEligible: w,
    disablePurchase: W,
    isTrial: Z = !1
  } = e, {
    selectedPlan: K,
    priceOptions: V,
    setHasAcceptedTerms: z,
    setPurchaseError: J,
    purchaseType: X,
    paymentSourceId: q,
    paymentSources: Q,
    selectedSkuId: $,
    skusById: ee,
    skuPricePreviewsById: et,
    referralCode: en,
    contextMetadata: es
  } = (0, A.usePaymentContext)(), {
    isGift: er,
    selectedGiftStyle: ea,
    customGiftMessage: el,
    emojiConfetti: ei,
    soundEffect: eu,
    giftRecipient: ec
  } = (0, T.useGiftContext)(), eo = null == K ? void 0 : K.id, ed = (0, h.checkNoPaymentTrialEnabled)(U, V.paymentSourceId, eo), ef = (0, i.useStateFromStores)([E.default], () => E.default.popupCallbackCalled), {
    analyticsLocations: em
  } = (0, o.default)(), e_ = null != q ? Q[q] : null, [eE, eI] = r.useState(ed), [ep, eN] = r.useState(!1), {
    hasEntitlements: eS
  } = (0, m.useSubscriptionEntitlements)(eo, er), eP = (0, P.isPrepaidPaymentSource)(V.paymentSourceId), eT = eS || ed, eA = (0, d.useIsPrepaidPaymentPastDue)(), eC = null, eO = null;
  if (X === R.PurchaseTypes.ONE_TIME) {
    var eh;
    l(null != $, "SKU must be selected for one-time purchases"), l(null != (eC = null !== (eh = ee[$]) && void 0 !== eh ? eh : null), "SKU must exist and be fetched.");
    let e = et[$],
      t = null != q ? q : p.NO_PAYMENT_SOURCE;
    eO = null != e ? e[t] : null
  }
  let eM = async () => {
    await (0, C.purchaseProduct)({
      setPurchaseState: n,
      setHasAcceptedTerms: z,
      setIsSubmitting: eI,
      setPurchaseError: J,
      hasRedirectURL: ep,
      setHasRedirectURL: eN,
      isGift: er,
      giftStyle: ea,
      baseAnalyticsData: G,
      analyticsLocation: F,
      analyticsLocations: em,
      flowStartTime: D,
      subscriptionPlan: K,
      planGroup: B,
      trialId: U,
      priceOptions: V,
      paymentSource: e_,
      isPrepaidPaymentPastDue: eA,
      openInvoiceId: Y,
      premiumSubscription: t,
      onNext: x,
      metadata: H,
      sku: eC,
      skuPricePreview: eO,
      purchaseType: X,
      referralCode: en,
      loadId: es.loadId,
      giftRecipient: ec,
      customMessage: el,
      emojiConfetti: ei,
      soundEffect: eu
    })
  };
  r.useEffect(() => {
    let e = async () => {
      if (!0 === ef) try {
        if (null == E.default.redirectedPaymentId) return;
        await (0, c.redirectedPaymentSucceeded)(E.default.redirectedPaymentId), n(O.PurchaseState.COMPLETED), x()
      } catch (e) {
        n(O.PurchaseState.FAIL), j(e), S.default.track(R.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...G,
          payment_error_code: null == e ? void 0 : e.code,
          payment_source_id: q,
          payment_source_type: null == e_ ? void 0 : e_.type,
          duration_ms: Date.now() - D
        })
      } finally {
        eI(!1), (0, c.resetPaymentIntentId)()
      } else k === I.PurchaseTokenAuthState.SUCCESS && await eM()
    };
    e()
  }, [ef]), r.useEffect(() => {
    ed && !er && null == t && eM()
  }, [ed, er, t]);
  let eR = null != Y || X === R.PurchaseTypes.ONE_TIME && !er;
  return ed ? null : (0, s.jsxs)(u.ModalFooter, {
    align: N.default.Align.CENTER,
    children: [(0, s.jsx)(_.default, {
      legalTermsNodeRef: v,
      invoiceError: L,
      planError: b,
      disablePurchase: W,
      flashLegalTerms: y,
      isSubmitting: eE,
      premiumSubscription: t,
      isGift: er,
      planGroup: B,
      isPrepaid: eP,
      isTrial: Z,
      makePurchase: eM,
      needsPaymentSource: null == e_ && !eT
    }), (0, s.jsx)(M.default, {}), w && !eR ? (0, s.jsx)("div", {
      className: g.back,
      children: (0, s.jsx)(f.default, {
        onClick: a
      })
    }) : null]
  })
}