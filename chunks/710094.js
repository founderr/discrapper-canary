s.d(n, {
  l: function() {
    return j
  }
}), s(47120), s(411104);
var l = s(735250),
  t = s(470079),
  i = s(512722),
  r = s.n(i),
  a = s(330726),
  c = s(711459),
  o = s(424082),
  u = s(104494),
  d = s(639119),
  _ = s(716534),
  m = s(664891),
  I = s(230927),
  E = s(911367),
  p = s(669079),
  N = s(987209),
  T = s(598),
  S = s(409813),
  x = s(45572),
  h = s(809144),
  P = s(698708),
  v = s(614223),
  A = s(481595),
  f = s(51499),
  M = s(678334),
  g = s(614277),
  C = s(981631),
  L = s(474936),
  R = s(231338),
  O = s(689938);

function j(e) {
  var n, s;
  let i, {
      handleStepChange: j,
      trialId: y,
      trialFooterMessageOverride: Z,
      reviewWarningMessage: b,
      planGroup: D,
      openInvoiceId: G,
      analyticsData: U,
      analyticsLocation: w,
      referralTrialOfferId: F,
      initialPlanId: B,
      subscriptionTier: H,
      handleClose: k
    } = e,
    {
      activeSubscription: W,
      setUpdatedSubscription: Y,
      contextMetadata: K,
      currencies: V,
      paymentSourceId: z,
      paymentSources: X,
      priceOptions: J,
      purchaseError: q,
      purchaseTokenAuthState: Q,
      selectedPlan: $,
      selectedSkuId: ee,
      setCurrency: en,
      setPaymentSourceId: es,
      setPurchaseState: el,
      setPurchaseError: et,
      step: ei,
      purchaseState: er,
      isPremium: ea,
      setHasAcceptedTerms: ec,
      purchaseType: eo,
      setEntitlementsGranted: eu,
      startedPaymentFlowWithPaymentSourcesRef: ed,
      invoicePreview: e_,
      setAnnualDiscountInvoicePreview: em
    } = (0, T.usePaymentContext)(),
    {
      isGift: eI,
      giftMessage: eE,
      giftRecipient: ep
    } = (0, N.wD)();
  r()(null != ei, "Step should be set");
  let eN = t.useRef(null),
    [eT, eS] = (0, a.Z)(!1, 500);
  (0, E.t)();
  let ex = null !== (s = null != y ? y : F) && void 0 !== s ? s : null,
    eh = null != ex && (!ea || L.nG[ex].skus.includes(ee)) ? ex : null,
    eP = (0, d.N)(F);
  (0, o.Uh)("PaymentModalReviewStep", null == eP);
  let ev = (0, u.Ng)(),
    eA = {
      user_trial_offer_id: null == eP ? void 0 : eP.id
    };
  t.useEffect(() => {
    null != q && null != eN.current && eN.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [q]);
  let ef = t.useCallback((e, n) => {
      Y(e), null != n && eu(n), j(S.h8.CONFIRM, {
        fulfillment: {
          subscription: e,
          entitlements: n
        }
      })
    }, [j, Y, eu]),
    eM = null != z ? X[z] : null,
    eg = null != $ && L.o4.has($.id) && null != eM && !(0, c.aQ)(eM) ? Error(O.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
    eC = t.useRef(null),
    [eL, eR] = t.useState(null),
    eO = !eI && null != eP && null != ee && L.nG[eP.trial_id].skus.includes(ee),
    ej = null == ev ? void 0 : null === (n = ev.discount) || void 0 === n ? void 0 : n.plan_ids,
    ey = !eI && null != ev && null != ej && null != $ && ej.includes($.id),
    eZ = er === x.A.PURCHASING || er === x.A.COMPLETED || (null == W ? void 0 : W.status) === C.O0b.PAUSED || null != G,
    {
      annualInvoicePreview: eb
    } = (0, I.g)({
      priceOptions: J,
      preventFetch: eZ,
      selectedSkuId: ee,
      isGift: eI,
      planGroup: D,
      activeSubscription: W
    });
  null != eb && em(eb);
  let eD = eI && (0, p.pO)(ep),
    eG = null == B && null == H && eo === R.GZ.SUBSCRIPTION,
    eU = (0, v.Kp)({
      isTrial: eO,
      isGift: eI,
      selectedSkuId: ee,
      startedPaymentFlowWithPaymentSources: ed.current
    }),
    ew = eI && eo === R.GZ.ONE_TIME,
    eF = ew || (eU ? eG && ea : ea),
    eB = t.useCallback(() => {
      if (eU) {
        j(S.h8.SKU_SELECT);
        return
      }
      return ew ? j(S.h8.GIFT_CUSTOMIZATION) : j(S.h8.PLAN_SELECT)
    }, [j, eU, ew]),
    eH = !1;
  return eo === R.GZ.ONE_TIME ? i = (0, l.jsx)(A.Z, {
    hasLegalTermsFlash: eT,
    legalTermsNodeRef: eC,
    onPaymentSourceChange: e => es(null != e ? e.id : null),
    handlePaymentSourceAdd: () => j(S.h8.ADD_PAYMENT_STEPS)
  }) : (eH = eI ? null == e_ : null != eM && eo === R.GZ.SUBSCRIPTION && eO && !eM.canRedeemTrial(), null == W || eI ? (r()(null != $, "Expected plan to be selected"), i = (0, l.jsx)(_.Z, {
    selectedPlanId: $.id,
    paymentSources: X,
    onPaymentSourceChange: e => es(null != e ? e.id : null),
    priceOptions: J,
    currencies: V,
    onCurrencyChange: e => en(e),
    handlePaymentSourceAdd: () => j(S.h8.ADD_PAYMENT_STEPS),
    setHasAcceptedTerms: ec,
    legalTermsNodeRef: eC,
    hasLegalTermsFlash: eT,
    trialId: eh,
    trialFooterMessageOverride: Z,
    reviewWarningMessage: b,
    purchaseState: er,
    referralTrialOfferId: F,
    isTrial: eO || null != y && null != Z,
    isDiscount: ey,
    handleClose: k
  })) : (r()(null != $, "Expected plan to be selected"), i = (0, l.jsx)(m.Z, {
    premiumSubscription: W,
    paymentSources: X,
    priceOptions: J,
    onPaymentSourceChange: e => {
      es(null != e ? e.id : null)
    },
    onPaymentSourceAdd: () => {
      j(S.h8.ADD_PAYMENT_STEPS)
    },
    planId: $.id,
    setHasAcceptedTerms: ec,
    legalTermsNodeRef: eC,
    hasLegalTermsFlash: eT,
    onInvoiceError: e => eR(e),
    planGroup: D,
    currencies: V,
    onCurrencyChange: e => en(e),
    hasOpenInvoice: null != G,
    purchaseState: er,
    handleClose: k
  }))), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(h.P, {
      giftMessage: eE
    }), !eD && (0, l.jsx)(f.Z, {
      isEligibleForTrial: eO
    }), (0, l.jsxs)(g.C3, {
      children: [(0, l.jsx)(P.Z, {}), i]
    }), (0, l.jsx)(g.O3, {
      children: (0, l.jsx)(M.Z, {
        premiumSubscription: null != W ? W : null,
        setPurchaseState: el,
        onBack: eB,
        onNext: ef,
        onPurchaseError: e => et(e),
        legalTermsNodeRef: eC,
        flashLegalTerms: () => eS(!0),
        invoiceError: eL,
        planError: eg,
        analyticsLocation: w,
        baseAnalyticsData: U,
        flowStartTime: K.startTime,
        trialId: eh,
        planGroup: D,
        purchaseTokenAuthState: Q,
        openInvoiceId: G,
        backButtonEligible: eF,
        metadata: eA,
        isTrial: eO,
        disablePurchase: eH
      })
    })]
  })
}