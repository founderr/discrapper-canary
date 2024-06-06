"use strict";
s.r(t), s.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return H
  }
}), s("47120");
var n = s("735250"),
  i = s("470079"),
  r = s("512722"),
  l = s.n(r),
  a = s("399606"),
  o = s("481060"),
  u = s("975608"),
  C = s("711459"),
  d = s("374649"),
  c = s("424082"),
  p = s("650032"),
  _ = s("439017"),
  f = s("104494"),
  x = s("639119"),
  E = s("642530"),
  L = s("248042"),
  S = s("381507"),
  m = s("314404"),
  I = s("230927"),
  h = s("594174"),
  P = s("509545"),
  T = s("285952"),
  M = s("669079"),
  N = s("63063"),
  j = s("74538"),
  A = s("987209"),
  R = s("598"),
  g = s("409813"),
  y = s("51499"),
  O = s("456251"),
  U = s("614277"),
  b = s("809144"),
  v = s("698708"),
  B = s("981631"),
  k = s("474936"),
  F = s("689938"),
  G = s("115368");

function H(e) {
  var t, s, r, H;
  let {
    handleStepChange: D,
    initialPlanId: w,
    subscriptionTier: W,
    trialId: Y,
    referralTrialOfferId: Z,
    handleClose: K,
    planGroup: V
  } = e, {
    activeSubscription: J,
    hasFetchedSubscriptions: z,
    paymentSourceId: q,
    paymentSources: X,
    selectedSkuId: Q,
    selectedPlan: $,
    step: ee,
    defaultPlanId: et,
    priceOptions: es,
    isPremium: en,
    setAnnualDiscountInvoicePreview: ei
  } = (0, R.usePaymentContext)(), {
    isGift: er,
    giftRecipient: el,
    giftMessage: ea
  } = (0, A.useGiftContext)(), eo = null != q ? X[q] : null, {
    newPlans: eu
  } = C.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), eC = (0, a.useStateFromStores)([h.default], () => h.default.getCurrentUser()), ed = !er && null != Q && Q === k.PremiumSubscriptionSKUs.TIER_2 && null != eC && eC.hasHadPremium() && z && null == J && (0, C.isPaymentSourceEligibleForMultiMonthPlans)(eo), ec = (0, x.usePremiumTrialOffer)(Z);
  (0, c.useAnnualDiscountExperiment)("PremiumPaymentPlanSelectStep", null == ec);
  let ep = !er && null != ec && null != Q && (0, k.SubscriptionTrials)[ec.trial_id].skus.includes(Q),
    e_ = (0, f.usePremiumDiscountOffer)(),
    ef = null == e_ ? void 0 : null === (t = e_.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => k.SubscriptionPlanInfo[e].skuId === Q),
    ex = !er && null != e_ && null != Q && ef,
    eE = null !== (s = ep || ex) && void 0 !== s && s,
    {
      defaultToMonthlyPlan: eL
    } = _.TrialRedemptionDefaultPlanExperiment.useExperiment({
      location: "d17fd6_4"
    }, {
      autoTrackExposure: !1
    }),
    eS = i.useMemo(() => (0, j.getPremiumPlanOptions)({
      skuId: Q,
      isPremium: en,
      multiMonthPlans: ed ? eu : [],
      currentSubscription: J,
      isGift: er,
      isEligibleForTrial: ep,
      defaultPlanId: et,
      defaultToMonthlyPlan: eL
    }), [Q, en, eu, J, ed, er, ep, et, eL]),
    em = ex && eS.includes(k.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? k.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : eS[0],
    eI = (0, a.useStateFromStores)([P.default], () => P.default.get(em)),
    eh = [{
      planId: null == eI ? void 0 : eI.id,
      quantity: 1
    }],
    [eP, eT] = i.useState(eE),
    [eM, eN] = (0, d.useSubscriptionInvoicePreview)({
      items: eh,
      renewal: !1,
      preventFetch: !eE,
      applyEntitlements: !0,
      trialId: Y,
      paymentSourceId: es.paymentSourceId,
      currency: es.currency
    }),
    {
      annualInvoicePreview: ej,
      annualInvoicePreviewError: eA,
      isEligibleForAnnualDiscount: eR
    } = (0, I.useGetAnnualDiscountInvoicePreview)({
      priceOptions: es,
      preventFetch: !eS.includes(k.SubscriptionPlans.PREMIUM_YEAR_TIER_2),
      selectedSkuId: Q,
      isGift: er,
      planGroup: V,
      activeSubscription: J
    });
  null != ej && ei(ej), i.useEffect(() => {
    eE && eT((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null)
  }, [eM, eE]), (0, u.default)("Payment Modal Plan Select Step", eP, 5, {
    proratedInvoicePreview: eM,
    annualInvoicePreview: ej,
    proratedInvoiceError: eN,
    annualInvoicePreviewError: eA,
    isEligibleForOffer: eE
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eg = eR && null == eA,
    ey = null !== (H = null !== (r = null == eN ? void 0 : eN.message) && void 0 !== r ? r : null == eA ? void 0 : eA.message) && void 0 !== H ? H : F.default.Messages.ERROR_GENERIC_TITLE,
    eO = eE && null == eN || eg,
    eU = eE && null != eN || eR && null != eA,
    eb = eO && null == J && !!eE && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null || eg && (null == ej ? void 0 : ej.subscriptionPeriodEnd) == null,
    {
      enabled: ev
    } = p.ReferralProgramRecipient.useExperiment({
      location: "PremiumPaymentPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    eB = !er && (null == eI ? void 0 : eI.skuId) === k.PremiumSubscriptionSKUs.TIER_2 && (null == ec ? void 0 : ec.referrer_id) != null && ev,
    ek = (0, L.useIsEligibleForBogoPromotion)() && !er && (null == eI ? void 0 : eI.skuId) === k.PremiumSubscriptionSKUs.TIER_2,
    eF = null;
  return (eB ? eF = (0, n.jsx)(S.default, {}) : ek && (eF = (0, n.jsx)(E.default, {})), eb) ? (0, n.jsx)(O.default, {}) : (l()(null != ee, "Step should be set"), l()(eS.length > 0, "Premium plan options should be set"), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(b.GiftNote, {
      giftMessage: ea
    }), !(er && (0, M.shouldShowCustomGiftExperience)(el)) && (0, n.jsx)(y.default, {
      isEligibleForTrial: ep
    }), (0, n.jsxs)(U.PaymentPortalBody, {
      children: [eO && (0, n.jsx)("hr", {
        className: G.planSelectSeparatorUpper
      }), eF, (0, n.jsx)(v.default, {}), eU ? (0, n.jsx)(o.FormErrorBlock, {
        children: ey
      }) : (0, n.jsx)(m.PremiumSwitchPlanSelectBody, {
        planOptions: eS,
        eligibleForMultiMonthPlans: ed,
        referralTrialOfferId: Z,
        selectedPlanId: null == $ ? void 0 : $.id,
        subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
        discountInvoiceItems: ex ? null == eM ? void 0 : eM.invoiceItems : void 0,
        handleClose: K
      }), eO && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("hr", {
          className: G.planSelectSeparatorLower
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: F.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: N.default.getArticleURL(B.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, n.jsx)(U.PaymentPortalFooter, {
      children: (0, n.jsx)(o.ModalFooter, {
        justify: T.default.Justify.BETWEEN,
        align: T.default.Align.CENTER,
        children: (0, n.jsx)(m.PremiumSwitchPlanSelectFooter, {
          onStepChange: D,
          onBackClick: () => D(g.Step.SKU_SELECT),
          showBackButton: null == w && null == W,
          planOptions: eS,
          shouldRenderUpdatedPaymentModal: eO,
          isTrial: ep
        })
      })
    })]
  }))
}