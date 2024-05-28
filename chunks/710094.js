"use strict";
n.r(t), n.d(t, {
  PaymentModalReviewStep: function() {
    return M
  }
}), n("47120"), n("411104");
var i = n("735250"),
  l = n("470079"),
  s = n("512722"),
  a = n.n(s),
  r = n("330726"),
  u = n("711459"),
  o = n("424082"),
  c = n("104494"),
  d = n("639119"),
  m = n("716534"),
  p = n("664891"),
  f = n("230927"),
  S = n("911367"),
  I = n("669079"),
  _ = n("987209"),
  P = n("598"),
  E = n("409813"),
  T = n("45572"),
  v = n("809144"),
  h = n("698708"),
  N = n("614223"),
  x = n("481595"),
  A = n("51499"),
  y = n("678334"),
  C = n("614277"),
  R = n("981631"),
  b = n("474936"),
  g = n("231338"),
  O = n("689938");

function M(e) {
  var t, n;
  let s, {
      handleStepChange: M,
      trialId: L,
      trialFooterMessageOverride: j,
      reviewWarningMessage: G,
      planGroup: U,
      openInvoiceId: D,
      analyticsData: w,
      analyticsLocation: F,
      referralTrialOfferId: B,
      initialPlanId: H,
      subscriptionTier: k,
      handleClose: W
    } = e,
    {
      activeSubscription: Y,
      setUpdatedSubscription: K,
      contextMetadata: V,
      currencies: z,
      paymentSourceId: Z,
      paymentSources: X,
      priceOptions: J,
      purchaseError: q,
      purchaseTokenAuthState: Q,
      selectedPlan: $,
      selectedSkuId: ee,
      setCurrency: et,
      setPaymentSourceId: en,
      setPurchaseState: ei,
      setPurchaseError: el,
      step: es,
      purchaseState: ea,
      isPremium: er,
      setHasAcceptedTerms: eu,
      purchaseType: eo,
      setEntitlementsGranted: ec,
      startedPaymentFlowWithPaymentSourcesRef: ed,
      invoicePreview: em,
      setAnnualDiscountInvoicePreview: ep
    } = (0, P.usePaymentContext)(),
    {
      isGift: ef,
      giftMessage: eS,
      giftRecipient: eI
    } = (0, _.useGiftContext)();
  a()(null != es, "Step should be set");
  let e_ = l.useRef(null),
    [eP, eE] = (0, r.default)(!1, 500);
  (0, S.useFetchProfileEffects)();
  let eT = null !== (n = null != L ? L : B) && void 0 !== n ? n : null,
    ev = null != eT && (!er || (0, b.SubscriptionTrials)[eT].skus.includes(ee)) ? eT : null,
    eh = (0, d.usePremiumTrialOffer)(B);
  (0, o.useAnnualDiscountExperiment)("PaymentModalReviewStep", null == eh);
  let eN = (0, c.usePremiumDiscountOffer)(),
    ex = {
      user_trial_offer_id: null == eh ? void 0 : eh.id
    };
  l.useEffect(() => {
    null != q && null != e_.current && e_.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [q]);
  let eA = l.useCallback((e, t) => {
      K(e), null != t && ec(t), M(E.Step.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: t
        }
      })
    }, [M, K, ec]),
    ey = null != Z ? X[Z] : null,
    eC = null != $ && b.MULTI_MONTH_PLANS.has($.id) && null != ey && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(ey) ? Error(O.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
    eR = l.useRef(null),
    [eb, eg] = l.useState(null),
    eO = !ef && null != eh && null != ee && (0, b.SubscriptionTrials)[eh.trial_id].skus.includes(ee),
    eM = null == eN ? void 0 : null === (t = eN.discount) || void 0 === t ? void 0 : t.plan_ids,
    eL = !ef && null != eN && null != eM && null != $ && eM.includes($.id),
    ej = ea === T.PurchaseState.PURCHASING || ea === T.PurchaseState.COMPLETED || (null == Y ? void 0 : Y.status) === R.SubscriptionStatusTypes.PAUSED || null != D,
    {
      annualInvoicePreview: eG
    } = (0, f.useGetAnnualDiscountInvoicePreview)({
      priceOptions: J,
      preventFetch: ej,
      selectedSkuId: ee,
      isGift: ef,
      planGroup: U,
      activeSubscription: Y
    });
  null != eG && ep(eG);
  let eU = ef && (0, I.shouldShowCustomGiftExperience)(eI),
    eD = null == H && null == k && eo === g.PurchaseTypes.SUBSCRIPTION,
    ew = (0, N.inOneStepSubscriptionCheckout)({
      isTrial: eO,
      isGift: ef,
      selectedSkuId: ee,
      startedPaymentFlowWithPaymentSources: ed.current
    }),
    eF = ef && eo === g.PurchaseTypes.ONE_TIME,
    eB = eF || (ew ? eD && er : er),
    eH = l.useCallback(() => {
      if (ew) {
        M(E.Step.SKU_SELECT);
        return
      }
      return eF ? M(E.Step.GIFT_CUSTOMIZATION) : M(E.Step.PLAN_SELECT)
    }, [M, ew, eF]),
    ek = !1;
  return eo === g.PurchaseTypes.ONE_TIME ? s = (0, i.jsx)(x.default, {
    hasLegalTermsFlash: eP,
    legalTermsNodeRef: eR,
    onPaymentSourceChange: e => en(null != e ? e.id : null),
    handlePaymentSourceAdd: () => M(E.Step.ADD_PAYMENT_STEPS)
  }) : (ek = ef ? null == em : null != ey && eo === g.PurchaseTypes.SUBSCRIPTION && eO && !ey.canRedeemTrial(), null == Y || ef ? (a()(null != $, "Expected plan to be selected"), s = (0, i.jsx)(m.default, {
    selectedPlanId: $.id,
    paymentSources: X,
    onPaymentSourceChange: e => en(null != e ? e.id : null),
    priceOptions: J,
    currencies: z,
    onCurrencyChange: e => et(e),
    handlePaymentSourceAdd: () => M(E.Step.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: eu,
    legalTermsNodeRef: eR,
    hasLegalTermsFlash: eP,
    trialId: ev,
    trialFooterMessageOverride: j,
    reviewWarningMessage: G,
    purchaseState: ea,
    referralTrialOfferId: B,
    isTrial: eO || null != L && null != j,
    isDiscount: eL,
    handleClose: W
  })) : (a()(null != $, "Expected plan to be selected"), s = (0, i.jsx)(p.default, {
    premiumSubscription: Y,
    paymentSources: X,
    priceOptions: J,
    onPaymentSourceChange: e => {
      en(null != e ? e.id : null)
    },
    onPaymentSourceAdd: () => {
      M(E.Step.ADD_PAYMENT_STEPS)
    },
    planId: $.id,
    setHasAcceptedTerms: eu,
    legalTermsNodeRef: eR,
    hasLegalTermsFlash: eP,
    onInvoiceError: e => eg(e),
    planGroup: U,
    currencies: z,
    onCurrencyChange: e => et(e),
    hasOpenInvoice: null != D,
    purchaseState: ea,
    handleClose: W
  }))), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(v.GiftNote, {
      giftMessage: eS
    }), !eU && (0, i.jsx)(A.default, {
      isEligibleForTrial: eO
    }), (0, i.jsxs)(C.PaymentPortalBody, {
      children: [(0, i.jsx)(h.default, {}), s]
    }), (0, i.jsx)(C.PaymentPortalFooter, {
      children: (0, i.jsx)(y.default, {
        premiumSubscription: null != Y ? Y : null,
        setPurchaseState: ei,
        onBack: eH,
        onNext: eA,
        onPurchaseError: e => el(e),
        legalTermsNodeRef: eR,
        flashLegalTerms: () => eE(!0),
        invoiceError: eb,
        planError: eC,
        analyticsLocation: F,
        baseAnalyticsData: w,
        flowStartTime: V.startTime,
        trialId: ev,
        planGroup: U,
        purchaseTokenAuthState: Q,
        openInvoiceId: D,
        backButtonEligible: eB,
        metadata: ex,
        isTrial: eO,
        disablePurchase: ek
      })
    })]
  })
}