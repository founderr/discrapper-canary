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
  p = n("467292"),
  I = n("622839"),
  S = n("145131"),
  N = n("599110"),
  P = n("719923"),
  T = n("635357"),
  C = n("642906"),
  A = n("605886"),
  O = n("286350"),
  h = n("102492"),
  R = n("376641"),
  M = n("49111"),
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
  } = (0, C.usePaymentContext)(), {
    isGift: er,
    selectedGiftStyle: ea,
    customGiftMessage: el,
    emojiConfetti: ei,
    soundEffect: eu,
    giftRecipient: ec
  } = (0, T.useGiftContext)(), eo = null == K ? void 0 : K.id, ed = (0, h.checkNoPaymentTrialEnabled)(U, V.paymentSourceId, eo), ef = (0, i.useStateFromStores)([E.default], () => E.default.popupCallbackCalled), {
    analyticsLocations: em
  } = (0, o.default)(), e_ = null != q ? Q[q] : null, [eE, ep] = r.useState(ed), [eI, eS] = r.useState(!1), {
    hasEntitlements: eN
  } = (0, m.useSubscriptionEntitlements)(eo, er), eP = (0, P.isPrepaidPaymentSource)(V.paymentSourceId), eT = eN || ed, eC = (0, d.useIsPrepaidPaymentPastDue)(), eA = null, eO = null;
  if (X === M.PurchaseTypes.ONE_TIME) {
    var eh;
    l(null != $, "SKU must be selected for one-time purchases"), l(null != (eA = null !== (eh = ee[$]) && void 0 !== eh ? eh : null), "SKU must exist and be fetched.");
    let e = et[$],
      t = null != q ? q : I.NO_PAYMENT_SOURCE;
    eO = null != e ? e[t] : null
  }
  let eR = async () => {
    await (0, A.purchaseProduct)({
      setPurchaseState: n,
      setHasAcceptedTerms: z,
      setIsSubmitting: ep,
      setPurchaseError: J,
      hasRedirectURL: eI,
      setHasRedirectURL: eS,
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
      isPrepaidPaymentPastDue: eC,
      openInvoiceId: Y,
      premiumSubscription: t,
      onNext: x,
      metadata: H,
      sku: eA,
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
        n(O.PurchaseState.FAIL), j(e), N.default.track(M.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...G,
          payment_error_code: null == e ? void 0 : e.code,
          payment_source_id: q,
          payment_source_type: null == e_ ? void 0 : e_.type,
          duration_ms: Date.now() - D
        })
      } finally {
        ep(!1), (0, c.resetPaymentIntentId)()
      } else k === p.PurchaseTokenAuthState.SUCCESS && await eR()
    };
    e()
  }, [ef]), r.useEffect(() => {
    ed && !er && null == t && eR()
  }, [ed, er, t]);
  let eM = null != Y || X === M.PurchaseTypes.ONE_TIME && !er;
  return ed ? null : (0, s.jsxs)(u.ModalFooter, {
    align: S.default.Align.CENTER,
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
      makePurchase: eR,
      needsPaymentSource: null == e_ && !eT
    }), (0, s.jsx)(R.default, {}), w && !eM ? (0, s.jsx)("div", {
      className: g.back,
      children: (0, s.jsx)(f.default, {
        onClick: a
      })
    }) : null]
  })
}