"use strict";
n.r(t), n.d(t, {
  PaymentModalReviewStep: function() {
    return y
  }
}), n("47120"), n("411104");
var i = n("735250"),
  s = n("470079"),
  a = n("512722"),
  r = n.n(a),
  l = n("330726"),
  u = n("711459"),
  o = n("104494"),
  c = n("639119"),
  d = n("716534"),
  m = n("664891"),
  f = n("911367"),
  p = n("669079"),
  _ = n("987209"),
  S = n("598"),
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
      trialFooterMessageOverride: R,
      reviewWarningMessage: b,
      planGroup: L,
      openInvoiceId: O,
      analyticsData: j,
      analyticsLocation: G,
      referralTrialOfferId: D,
      initialPlanId: U,
      subscriptionTier: F,
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
      setEntitlementsGranted: er,
      startedPaymentFlowWithPaymentSourcesRef: el,
      invoicePreview: eu
    } = (0, S.usePaymentContext)(),
    {
      isGift: eo,
      giftMessage: ec,
      giftRecipient: ed
    } = (0, _.useGiftContext)();
  r()(null != et, "Step should be set");
  let em = s.useRef(null),
    [ef, ep] = (0, l.default)(!1, 500);
  (0, f.useFetchProfileEffects)();
  let e_ = null !== (n = null != M ? M : D) && void 0 !== n ? n : null,
    eS = null != e_ && (!ei || (0, A.SubscriptionTrials)[e_].skus.includes(X)) ? e_ : null,
    eI = (0, c.usePremiumTrialOffer)(D),
    eE = (0, o.usePremiumDiscountOffer)(),
    eP = {
      user_trial_offer_id: null == eI ? void 0 : eI.id
    };
  s.useEffect(() => {
    null != Z && null != em.current && em.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [Z]);
  let eT = s.useCallback((e, t) => {
      k(e), null != t && er(t), y(I.Step.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [y, k, er]),
    eN = null != Y ? K[Y] : null,
    eh = null != J && A.MULTI_MONTH_PLANS.has(J.id) && null != eN && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(eN) ? Error(g.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
    ev = s.useRef(null),
    [ex, eA] = s.useState(null),
    eC = !eo && null != eI && null != X && (0, A.SubscriptionTrials)[eI.trial_id].skus.includes(X),
    eg = null == eE ? void 0 : null === (t = eE.discount) || void 0 === t ? void 0 : t.plan_ids,
    ey = !eo && null != eE && null != eg && null != J && eg.includes(J.id),
    eM = eo && (0, p.shouldShowCustomGiftExperience)(ed),
    eR = null == U && null == F && ea === C.PurchaseTypes.SUBSCRIPTION,
    eb = (0, T.inOneStepSubscriptionCheckout)({
      isTrial: eC,
      isGift: eo,
      selectedSkuId: X,
      startedPaymentFlowWithPaymentSources: el.current
    }),
    eL = eo && ea === C.PurchaseTypes.ONE_TIME,
    eO = eL || (eb ? eR && ei : ei),
    ej = s.useCallback(() => {
      if (eb) {
        y(I.Step.SKU_SELECT);
        return
      }
      return eL ? y(I.Step.GIFT_CUSTOMIZATION) : y(I.Step.PLAN_SELECT)
    }, [y, eb, eL]),
    eG = !1;
  return ea === C.PurchaseTypes.ONE_TIME ? a = (0, i.jsx)(N.default, {
    hasLegalTermsFlash: ef,
    legalTermsNodeRef: ev,
    onPaymentSourceChange: e => Q(null != e ? e.id : null),
    handlePaymentSourceAdd: () => y(I.Step.ADD_PAYMENT_STEPS)
  }) : (eG = eo ? null == eu : null != eN && ea === C.PurchaseTypes.SUBSCRIPTION && eC && !eN.canRedeemTrial(), null == B || eo ? (r()(null != J, "Expected plan to be selected"), a = (0, i.jsx)(d.default, {
    selectedPlanId: J.id,
    paymentSources: K,
    onPaymentSourceChange: e => Q(null != e ? e.id : null),
    priceOptions: V,
    currencies: W,
    onCurrencyChange: e => q(e),
    handlePaymentSourceAdd: () => y(I.Step.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: es,
    legalTermsNodeRef: ev,
    hasLegalTermsFlash: ef,
    trialId: eS,
    trialFooterMessageOverride: R,
    reviewWarningMessage: b,
    purchaseState: en,
    referralTrialOfferId: D,
    isTrial: eC || null != M && null != R,
    isDiscount: ey,
    handleClose: w
  })) : (r()(null != J, "Expected plan to be selected"), a = (0, i.jsx)(m.default, {
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
    legalTermsNodeRef: ev,
    hasLegalTermsFlash: ef,
    onInvoiceError: e => eA(e),
    planGroup: L,
    currencies: W,
    onCurrencyChange: e => q(e),
    hasOpenInvoice: null != O,
    purchaseState: en,
    handleClose: w
  }))), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E.GiftNote, {
      giftMessage: ec
    }), !eM && (0, i.jsx)(h.default, {
      isEligibleForTrial: eC
    }), (0, i.jsxs)(x.PaymentPortalBody, {
      children: [(0, i.jsx)(P.default, {}), a]
    }), (0, i.jsx)(x.PaymentPortalFooter, {
      children: (0, i.jsx)(v.default, {
        premiumSubscription: null != B ? B : null,
        setPurchaseState: $,
        onBack: ej,
        onNext: eT,
        onPurchaseError: e => ee(e),
        legalTermsNodeRef: ev,
        flashLegalTerms: () => ep(!0),
        invoiceError: ex,
        planError: eh,
        analyticsLocation: G,
        baseAnalyticsData: j,
        flowStartTime: H.startTime,
        trialId: eS,
        planGroup: L,
        purchaseTokenAuthState: z,
        openInvoiceId: O,
        backButtonEligible: eO,
        metadata: eP,
        isTrial: eC,
        disablePurchase: eG
      })
    })]
  })
}