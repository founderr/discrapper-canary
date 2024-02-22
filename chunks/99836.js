"use strict";
n.r(t), n.d(t, {
  PaymentModalReviewStep: function() {
    return N
  }
}), n("222007"), n("70102");
var i = n("37983"),
  r = n("884691"),
  a = n("627445"),
  l = n.n(a),
  s = n("612039"),
  u = n("916187"),
  o = n("154889"),
  c = n("917247"),
  d = n("527866"),
  p = n("826795"),
  m = n("659632"),
  S = n("635357"),
  f = n("642906"),
  P = n("85336"),
  I = n("310093"),
  h = n("367767"),
  E = n("176108"),
  T = n("298392"),
  v = n("153727"),
  y = n("39065"),
  x = n("650484"),
  _ = n("646718"),
  b = n("843455"),
  C = n("782340");

function N(e) {
  var t, n;
  let a, {
      handleStepChange: N,
      trialId: g,
      trialFooterMessageOverride: L,
      reviewWarningMessage: A,
      planGroup: j,
      openInvoiceId: M,
      analyticsData: R,
      analyticsLocation: w,
      referralTrialOfferId: O,
      initialPlanId: F,
      subscriptionTier: U,
      handleClose: G
    } = e,
    {
      activeSubscription: D,
      setUpdatedSubscription: B,
      contextMetadata: W,
      currencies: k,
      paymentSourceId: H,
      paymentSources: Y,
      priceOptions: V,
      purchaseError: z,
      purchaseTokenAuthState: Z,
      selectedPlan: K,
      selectedSkuId: Q,
      setCurrency: J,
      setPaymentSourceId: X,
      setPurchaseState: q,
      setPurchaseError: $,
      step: ee,
      purchaseState: et,
      isPremium: en,
      setHasAcceptedTerms: ei,
      purchaseType: er,
      setEntitlementsGranted: ea,
      startedPaymentFlowWithPaymentSourcesRef: el
    } = (0, f.usePaymentContext)(),
    {
      isGift: es,
      giftMessage: eu,
      giftRecipient: eo
    } = (0, S.useGiftContext)();
  l(null != ee, "Step should be set");
  let ec = r.useRef(null),
    [ed, ep] = (0, s.default)(!1, 500),
    em = null !== (n = null != g ? g : O) && void 0 !== n ? n : null,
    eS = null != em && (!en || (0, _.SubscriptionTrials)[em].skus.includes(Q)) ? em : null,
    ef = (0, c.usePremiumTrialOffer)(O),
    eP = (0, o.usePremiumDiscountOffer)(),
    eI = {
      user_trial_offer_id: null == ef ? void 0 : ef.id
    };
  r.useEffect(() => {
    null != z && null != ec.current && ec.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [z]);
  let eh = r.useCallback((e, t) => {
      B(e), null != t && ea(t), N(P.Step.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [N, B, ea]),
    eE = null != H ? Y[H] : null,
    eT = null != K && _.MULTI_MONTH_PLANS.has(K.id) && null != eE && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(eE) ? Error(C.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
    ev = r.useRef(null),
    [ey, ex] = r.useState(null),
    e_ = !es && null != ef && null != Q && (0, _.SubscriptionTrials)[ef.trial_id].skus.includes(Q),
    eb = null == eP ? void 0 : null === (t = eP.discount) || void 0 === t ? void 0 : t.plan_ids,
    eC = !es && null != eP && null != eb && null != K && eb.includes(K.id),
    eN = es && (0, m.shouldShowCustomGiftExperience)(eo),
    eg = null == F && null == U && er === b.PurchaseTypes.SUBSCRIPTION,
    eL = (0, E.inOneStepSubscriptionCheckout)({
      isTrial: e_,
      isGift: es,
      selectedSkuId: Q,
      startedPaymentFlowWithPaymentSources: el.current
    }),
    eA = es && er === b.PurchaseTypes.ONE_TIME,
    ej = eA || (eL ? eg && en : en),
    eM = r.useCallback(() => {
      if (eL) {
        N(P.Step.SKU_SELECT);
        return
      }
      return eA ? N(P.Step.GIFT_CUSTOMIZATION) : N(P.Step.PLAN_SELECT)
    }, [N, eL, eA]);
  return er === b.PurchaseTypes.ONE_TIME ? a = (0, i.jsx)(T.default, {
    hasLegalTermsFlash: ed,
    legalTermsNodeRef: ev,
    onPaymentSourceChange: e => X(null != e ? e.id : null),
    handlePaymentSourceAdd: () => N(P.Step.ADD_PAYMENT_STEPS)
  }) : null == D || es ? (l(null != K, "Expected plan to be selected"), a = (0, i.jsx)(d.default, {
    selectedPlanId: K.id,
    paymentSources: Y,
    onPaymentSourceChange: e => X(null != e ? e.id : null),
    priceOptions: V,
    currencies: k,
    onCurrencyChange: e => J(e),
    handlePaymentSourceAdd: () => N(P.Step.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: ei,
    legalTermsNodeRef: ev,
    hasLegalTermsFlash: ed,
    trialId: eS,
    trialFooterMessageOverride: L,
    reviewWarningMessage: A,
    purchaseState: et,
    referralTrialOfferId: O,
    isTrial: e_ || null != g && null != L,
    isDiscount: eC,
    handleClose: G
  })) : (l(null != K, "Expected plan to be selected"), a = (0, i.jsx)(p.default, {
    premiumSubscription: D,
    paymentSources: Y,
    priceOptions: V,
    onPaymentSourceChange: e => {
      X(null != e ? e.id : null)
    },
    onPaymentSourceAdd: () => {
      N(P.Step.ADD_PAYMENT_STEPS)
    },
    planId: K.id,
    setHasAcceptedTerms: ei,
    legalTermsNodeRef: ev,
    hasLegalTermsFlash: ed,
    onInvoiceError: e => ex(e),
    planGroup: j,
    currencies: k,
    onCurrencyChange: e => J(e),
    hasOpenInvoice: null != M,
    purchaseState: et,
    handleClose: G
  })), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(I.GiftNote, {
      giftMessage: eu
    }), !eN && (0, i.jsx)(v.default, {
      isEligibleForTrial: e_
    }), (0, i.jsxs)(x.PaymentPortalBody, {
      children: [(0, i.jsx)(h.default, {}), a]
    }), (0, i.jsx)(x.PaymentPortalFooter, {
      children: (0, i.jsx)(y.default, {
        premiumSubscription: null != D ? D : null,
        setPurchaseState: q,
        onBack: eM,
        onNext: eh,
        onPurchaseError: e => $(e),
        legalTermsNodeRef: ev,
        flashLegalTerms: () => ep(!0),
        invoiceError: ey,
        planError: eT,
        analyticsLocation: w,
        baseAnalyticsData: R,
        flowStartTime: W.startTime,
        trialId: eS,
        planGroup: j,
        purchaseTokenAuthState: Z,
        openInvoiceId: M,
        backButtonEligible: ej,
        metadata: eI,
        isTrial: e_,
        disablePurchase: null != eE && er === b.PurchaseTypes.SUBSCRIPTION && e_ && !eE.canRedeemTrial()
      })
    })]
  })
}