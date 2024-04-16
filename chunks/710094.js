"use strict";
n.r(t), n.d(t, {
  PaymentModalReviewStep: function() {
    return M
  }
}), n("47120"), n("411104");
var i = n("735250"),
  s = n("470079"),
  a = n("512722"),
  r = n.n(a),
  l = n("330726"),
  u = n("711459"),
  o = n("424082"),
  c = n("104494"),
  d = n("639119"),
  m = n("716534"),
  f = n("664891"),
  p = n("911367"),
  S = n("669079"),
  _ = n("987209"),
  I = n("598"),
  E = n("409813"),
  P = n("809144"),
  T = n("698708"),
  N = n("614223"),
  h = n("481595"),
  v = n("51499"),
  x = n("678334"),
  A = n("614277"),
  C = n("474936"),
  g = n("231338"),
  y = n("689938");

function M(e) {
  var t, n;
  let a, {
      handleStepChange: M,
      trialId: R,
      trialFooterMessageOverride: b,
      reviewWarningMessage: L,
      planGroup: O,
      openInvoiceId: j,
      analyticsData: G,
      analyticsLocation: D,
      referralTrialOfferId: U,
      initialPlanId: F,
      subscriptionTier: w,
      handleClose: B
    } = e,
    {
      activeSubscription: k,
      setUpdatedSubscription: H,
      contextMetadata: W,
      currencies: Y,
      paymentSourceId: K,
      paymentSources: V,
      priceOptions: Z,
      purchaseError: z,
      purchaseTokenAuthState: J,
      selectedPlan: X,
      selectedSkuId: q,
      setCurrency: Q,
      setPaymentSourceId: $,
      setPurchaseState: ee,
      setPurchaseError: et,
      step: en,
      purchaseState: ei,
      isPremium: es,
      setHasAcceptedTerms: ea,
      purchaseType: er,
      setEntitlementsGranted: el,
      startedPaymentFlowWithPaymentSourcesRef: eu,
      invoicePreview: eo
    } = (0, I.usePaymentContext)(),
    {
      isGift: ec,
      giftMessage: ed,
      giftRecipient: em
    } = (0, _.useGiftContext)();
  r()(null != en, "Step should be set");
  let ef = s.useRef(null),
    [ep, eS] = (0, l.default)(!1, 500);
  (0, p.useFetchProfileEffects)();
  let e_ = null !== (n = null != R ? R : U) && void 0 !== n ? n : null,
    eI = null != e_ && (!es || (0, C.SubscriptionTrials)[e_].skus.includes(q)) ? e_ : null;
  (0, o.useAnnualDiscountExperiment)("PaymentModalReviewStep", !0);
  let eE = (0, d.usePremiumTrialOffer)(U),
    eP = (0, c.usePremiumDiscountOffer)(),
    eT = {
      user_trial_offer_id: null == eE ? void 0 : eE.id
    };
  s.useEffect(() => {
    null != z && null != ef.current && ef.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [z]);
  let eN = s.useCallback((e, t) => {
      H(e), null != t && el(t), M(E.Step.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [M, H, el]),
    eh = null != K ? V[K] : null,
    ev = null != X && C.MULTI_MONTH_PLANS.has(X.id) && null != eh && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(eh) ? Error(y.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
    ex = s.useRef(null),
    [eA, eC] = s.useState(null),
    eg = !ec && null != eE && null != q && (0, C.SubscriptionTrials)[eE.trial_id].skus.includes(q),
    ey = null == eP ? void 0 : null === (t = eP.discount) || void 0 === t ? void 0 : t.plan_ids,
    eM = !ec && null != eP && null != ey && null != X && ey.includes(X.id),
    eR = ec && (0, S.shouldShowCustomGiftExperience)(em),
    eb = null == F && null == w && er === g.PurchaseTypes.SUBSCRIPTION,
    eL = (0, N.inOneStepSubscriptionCheckout)({
      isTrial: eg,
      isGift: ec,
      selectedSkuId: q,
      startedPaymentFlowWithPaymentSources: eu.current
    }),
    eO = ec && er === g.PurchaseTypes.ONE_TIME,
    ej = eO || (eL ? eb && es : es),
    eG = s.useCallback(() => {
      if (eL) {
        M(E.Step.SKU_SELECT);
        return
      }
      return eO ? M(E.Step.GIFT_CUSTOMIZATION) : M(E.Step.PLAN_SELECT)
    }, [M, eL, eO]),
    eD = !1;
  return er === g.PurchaseTypes.ONE_TIME ? a = (0, i.jsx)(h.default, {
    hasLegalTermsFlash: ep,
    legalTermsNodeRef: ex,
    onPaymentSourceChange: e => $(null != e ? e.id : null),
    handlePaymentSourceAdd: () => M(E.Step.ADD_PAYMENT_STEPS)
  }) : (eD = ec ? null == eo : null != eh && er === g.PurchaseTypes.SUBSCRIPTION && eg && !eh.canRedeemTrial(), null == k || ec ? (r()(null != X, "Expected plan to be selected"), a = (0, i.jsx)(m.default, {
    selectedPlanId: X.id,
    paymentSources: V,
    onPaymentSourceChange: e => $(null != e ? e.id : null),
    priceOptions: Z,
    currencies: Y,
    onCurrencyChange: e => Q(e),
    handlePaymentSourceAdd: () => M(E.Step.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: ea,
    legalTermsNodeRef: ex,
    hasLegalTermsFlash: ep,
    trialId: eI,
    trialFooterMessageOverride: b,
    reviewWarningMessage: L,
    purchaseState: ei,
    referralTrialOfferId: U,
    isTrial: eg || null != R && null != b,
    isDiscount: eM,
    handleClose: B
  })) : (r()(null != X, "Expected plan to be selected"), a = (0, i.jsx)(f.default, {
    premiumSubscription: k,
    paymentSources: V,
    priceOptions: Z,
    onPaymentSourceChange: e => {
      $(null != e ? e.id : null)
    },
    onPaymentSourceAdd: () => {
      M(E.Step.ADD_PAYMENT_STEPS)
    },
    planId: X.id,
    setHasAcceptedTerms: ea,
    legalTermsNodeRef: ex,
    hasLegalTermsFlash: ep,
    onInvoiceError: e => eC(e),
    planGroup: O,
    currencies: Y,
    onCurrencyChange: e => Q(e),
    hasOpenInvoice: null != j,
    purchaseState: ei,
    handleClose: B
  }))), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(P.GiftNote, {
      giftMessage: ed
    }), !eR && (0, i.jsx)(v.default, {
      isEligibleForTrial: eg
    }), (0, i.jsxs)(A.PaymentPortalBody, {
      children: [(0, i.jsx)(T.default, {}), a]
    }), (0, i.jsx)(A.PaymentPortalFooter, {
      children: (0, i.jsx)(x.default, {
        premiumSubscription: null != k ? k : null,
        setPurchaseState: ee,
        onBack: eG,
        onNext: eN,
        onPurchaseError: e => et(e),
        legalTermsNodeRef: ex,
        flashLegalTerms: () => eS(!0),
        invoiceError: eA,
        planError: ev,
        analyticsLocation: D,
        baseAnalyticsData: G,
        flowStartTime: W.startTime,
        trialId: eI,
        planGroup: O,
        purchaseTokenAuthState: J,
        openInvoiceId: j,
        backButtonEligible: ej,
        metadata: eT,
        isTrial: eg,
        disablePurchase: eD
      })
    })]
  })
}