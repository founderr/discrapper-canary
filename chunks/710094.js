"use strict";
n.r(t), n.d(t, {
  PaymentModalReviewStep: function() {
    return y
  }
}), n("47120"), n("411104");
var i = n("735250"),
  s = n("470079"),
  a = n("512722"),
  l = n.n(a),
  r = n("330726"),
  u = n("711459"),
  o = n("104494"),
  c = n("639119"),
  d = n("716534"),
  m = n("664891"),
  f = n("911367"),
  p = n("669079"),
  S = n("987209"),
  _ = n("598"),
  I = n("409813"),
  E = n("809144"),
  P = n("698708"),
  T = n("614223"),
  N = n("481595"),
  h = n("51499"),
  v = n("678334"),
  x = n("614277"),
  A = n("474936"),
  C = n("231338"),
  g = n("689938");

function y(e) {
  var t, n;
  let a, {
      handleStepChange: y,
      trialId: M,
      trialFooterMessageOverride: b,
      reviewWarningMessage: R,
      planGroup: O,
      openInvoiceId: L,
      analyticsData: j,
      analyticsLocation: G,
      referralTrialOfferId: D,
      initialPlanId: F,
      subscriptionTier: U,
      handleClose: w
    } = e,
    {
      activeSubscription: B,
      setUpdatedSubscription: k,
      contextMetadata: H,
      currencies: W,
      paymentSourceId: Y,
      paymentSources: K,
      priceOptions: V,
      purchaseError: Z,
      purchaseTokenAuthState: z,
      selectedPlan: J,
      selectedSkuId: X,
      setCurrency: q,
      setPaymentSourceId: Q,
      setPurchaseState: $,
      setPurchaseError: ee,
      step: et,
      purchaseState: en,
      isPremium: ei,
      setHasAcceptedTerms: es,
      purchaseType: ea,
      setEntitlementsGranted: el,
      startedPaymentFlowWithPaymentSourcesRef: er
    } = (0, _.usePaymentContext)(),
    {
      isGift: eu,
      giftMessage: eo,
      giftRecipient: ec
    } = (0, S.useGiftContext)();
  l()(null != et, "Step should be set");
  let ed = s.useRef(null),
    [em, ef] = (0, r.default)(!1, 500);
  (0, f.useFetchProfileEffects)();
  let ep = null !== (n = null != M ? M : D) && void 0 !== n ? n : null,
    eS = null != ep && (!ei || (0, A.SubscriptionTrials)[ep].skus.includes(X)) ? ep : null,
    e_ = (0, c.usePremiumTrialOffer)(D),
    eI = (0, o.usePremiumDiscountOffer)(),
    eE = {
      user_trial_offer_id: null == e_ ? void 0 : e_.id
    };
  s.useEffect(() => {
    null != Z && null != ed.current && ed.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [Z]);
  let eP = s.useCallback((e, t) => {
      k(e), null != t && el(t), y(I.Step.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [y, k, el]),
    eT = null != Y ? K[Y] : null,
    eN = null != J && A.MULTI_MONTH_PLANS.has(J.id) && null != eT && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(eT) ? Error(g.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
    eh = s.useRef(null),
    [ev, ex] = s.useState(null),
    eA = !eu && null != e_ && null != X && (0, A.SubscriptionTrials)[e_.trial_id].skus.includes(X),
    eC = null == eI ? void 0 : null === (t = eI.discount) || void 0 === t ? void 0 : t.plan_ids,
    eg = !eu && null != eI && null != eC && null != J && eC.includes(J.id),
    ey = eu && (0, p.shouldShowCustomGiftExperience)(ec),
    eM = null == F && null == U && ea === C.PurchaseTypes.SUBSCRIPTION,
    eb = (0, T.inOneStepSubscriptionCheckout)({
      isTrial: eA,
      isGift: eu,
      selectedSkuId: X,
      startedPaymentFlowWithPaymentSources: er.current
    }),
    eR = eu && ea === C.PurchaseTypes.ONE_TIME,
    eO = eR || (eb ? eM && ei : ei),
    eL = s.useCallback(() => {
      if (eb) {
        y(I.Step.SKU_SELECT);
        return
      }
      return eR ? y(I.Step.GIFT_CUSTOMIZATION) : y(I.Step.PLAN_SELECT)
    }, [y, eb, eR]);
  return ea === C.PurchaseTypes.ONE_TIME ? a = (0, i.jsx)(N.default, {
    hasLegalTermsFlash: em,
    legalTermsNodeRef: eh,
    onPaymentSourceChange: e => Q(null != e ? e.id : null),
    handlePaymentSourceAdd: () => y(I.Step.ADD_PAYMENT_STEPS)
  }) : null == B || eu ? (l()(null != J, "Expected plan to be selected"), a = (0, i.jsx)(d.default, {
    selectedPlanId: J.id,
    paymentSources: K,
    onPaymentSourceChange: e => Q(null != e ? e.id : null),
    priceOptions: V,
    currencies: W,
    onCurrencyChange: e => q(e),
    handlePaymentSourceAdd: () => y(I.Step.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: es,
    legalTermsNodeRef: eh,
    hasLegalTermsFlash: em,
    trialId: eS,
    trialFooterMessageOverride: b,
    reviewWarningMessage: R,
    purchaseState: en,
    referralTrialOfferId: D,
    isTrial: eA || null != M && null != b,
    isDiscount: eg,
    handleClose: w
  })) : (l()(null != J, "Expected plan to be selected"), a = (0, i.jsx)(m.default, {
    premiumSubscription: B,
    paymentSources: K,
    priceOptions: V,
    onPaymentSourceChange: e => {
      Q(null != e ? e.id : null)
    },
    onPaymentSourceAdd: () => {
      y(I.Step.ADD_PAYMENT_STEPS)
    },
    planId: J.id,
    setHasAcceptedTerms: es,
    legalTermsNodeRef: eh,
    hasLegalTermsFlash: em,
    onInvoiceError: e => ex(e),
    planGroup: O,
    currencies: W,
    onCurrencyChange: e => q(e),
    hasOpenInvoice: null != L,
    purchaseState: en,
    handleClose: w
  })), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E.GiftNote, {
      giftMessage: eo
    }), !ey && (0, i.jsx)(h.default, {
      isEligibleForTrial: eA
    }), (0, i.jsxs)(x.PaymentPortalBody, {
      children: [(0, i.jsx)(P.default, {}), a]
    }), (0, i.jsx)(x.PaymentPortalFooter, {
      children: (0, i.jsx)(v.default, {
        premiumSubscription: null != B ? B : null,
        setPurchaseState: $,
        onBack: eL,
        onNext: eP,
        onPurchaseError: e => ee(e),
        legalTermsNodeRef: eh,
        flashLegalTerms: () => ef(!0),
        invoiceError: ev,
        planError: eN,
        analyticsLocation: G,
        baseAnalyticsData: j,
        flowStartTime: H.startTime,
        trialId: eS,
        planGroup: O,
        purchaseTokenAuthState: z,
        openInvoiceId: L,
        backButtonEligible: eO,
        metadata: eE,
        isTrial: eA,
        disablePurchase: null != eT && ea === C.PurchaseTypes.SUBSCRIPTION && eA && !eT.canRedeemTrial()
      })
    })]
  })
}