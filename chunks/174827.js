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
  C = s("975608"),
  u = s("711459"),
  d = s("374649"),
  c = s("424082"),
  p = s("650032"),
  _ = s("439017"),
  f = s("104494"),
  x = s("639119"),
  E = s("642530"),
  L = s("248042"),
  S = s("381507"),
  I = s("314404"),
  m = s("230927"),
  h = s("594174"),
  P = s("509545"),
  M = s("285952"),
  T = s("669079"),
  N = s("63063"),
  A = s("74538"),
  j = s("987209"),
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
  } = (0, j.useGiftContext)(), eo = null != q ? X[q] : null, {
    newPlans: eC
  } = u.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), eu = (0, a.useStateFromStores)([h.default], () => h.default.getCurrentUser()), ed = !er && null != Q && Q === k.PremiumSubscriptionSKUs.TIER_2 && null != eu && eu.hasHadPremium() && z && null == J && (0, u.isPaymentSourceEligibleForMultiMonthPlans)(eo), ec = (0, x.usePremiumTrialOffer)(Z);
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
    eS = i.useMemo(() => (0, A.getPremiumPlanOptions)({
      skuId: Q,
      isPremium: en,
      multiMonthPlans: ed ? eC : [],
      currentSubscription: J,
      isGift: er,
      isEligibleForTrial: ep,
      defaultPlanId: et,
      defaultToMonthlyPlan: eL
    }), [Q, en, eC, J, ed, er, ep, et, eL]),
    eI = ex && eS.includes(k.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? k.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : eS[0],
    em = (0, a.useStateFromStores)([P.default], () => P.default.get(eI)),
    eh = [{
      planId: null == em ? void 0 : em.id,
      quantity: 1
    }],
    [eP, eM] = i.useState(eE),
    [eT, eN] = (0, d.useSubscriptionInvoicePreview)({
      items: eh,
      renewal: !1,
      preventFetch: !eE,
      applyEntitlements: !0,
      trialId: Y,
      paymentSourceId: es.paymentSourceId,
      currency: es.currency
    }),
    {
      annualInvoicePreview: eA,
      annualInvoicePreviewError: ej,
      isEligibleForAnnualDiscount: eR
    } = (0, m.useGetAnnualDiscountInvoicePreview)({
      priceOptions: es,
      preventFetch: !eS.includes(k.SubscriptionPlans.PREMIUM_YEAR_TIER_2),
      selectedSkuId: Q,
      isGift: er,
      planGroup: V,
      activeSubscription: J
    });
  null != eA && ei(eA), i.useEffect(() => {
    eE && eM((null == eT ? void 0 : eT.subscriptionPeriodEnd) == null)
  }, [eT, eE]), (0, C.default)("Payment Modal Plan Select Step", eP, 5, {
    proratedInvoicePreview: eT,
    annualInvoicePreview: eA,
    proratedInvoiceError: eN,
    annualInvoicePreviewError: ej,
    isEligibleForOffer: eE
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eg = eR && null == ej,
    ey = null !== (H = null !== (r = null == eN ? void 0 : eN.message) && void 0 !== r ? r : null == ej ? void 0 : ej.message) && void 0 !== H ? H : F.default.Messages.ERROR_GENERIC_TITLE,
    eO = eE && null == eN || eg,
    eU = eE && null != eN || eR && null != ej,
    eb = eO && null == J && !!eE && (null == eT ? void 0 : eT.subscriptionPeriodEnd) == null || eg && (null == eA ? void 0 : eA.subscriptionPeriodEnd) == null,
    {
      enabled: ev
    } = p.ReferralProgramRecipient.useExperiment({
      location: "PremiumPaymentPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    eB = !er && (null == em ? void 0 : em.skuId) === k.PremiumSubscriptionSKUs.TIER_2 && (null == ec ? void 0 : ec.referrer_id) != null && ev,
    ek = (0, L.useIsEligibleForBogoPromotion)() && !er && (null == em ? void 0 : em.skuId) === k.PremiumSubscriptionSKUs.TIER_2,
    eF = null;
  return (eB ? eF = (0, n.jsx)(S.default, {}) : ek && (eF = (0, n.jsx)(E.default, {})), eb) ? (0, n.jsx)(O.default, {}) : (l()(null != ee, "Step should be set"), l()(eS.length > 0, "Premium plan options should be set"), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(b.GiftNote, {
      giftMessage: ea
    }), !(er && (0, T.shouldShowCustomGiftExperience)(el)) && (0, n.jsx)(y.default, {
      isEligibleForTrial: ep
    }), (0, n.jsxs)(U.PaymentPortalBody, {
      children: [eO && (0, n.jsx)("hr", {
        className: G.planSelectSeparatorUpper
      }), eF, (0, n.jsx)(v.default, {}), eU ? (0, n.jsx)(o.FormErrorBlock, {
        children: ey
      }) : (0, n.jsx)(I.PremiumSwitchPlanSelectBody, {
        planOptions: eS,
        eligibleForMultiMonthPlans: ed,
        referralTrialOfferId: Z,
        selectedPlanId: null == $ ? void 0 : $.id,
        subscriptionPeriodEnd: null == eT ? void 0 : eT.subscriptionPeriodEnd,
        discountInvoiceItems: ex ? null == eT ? void 0 : eT.invoiceItems : void 0,
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
        justify: M.default.Justify.BETWEEN,
        align: M.default.Align.CENTER,
        children: (0, n.jsx)(I.PremiumSwitchPlanSelectFooter, {
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