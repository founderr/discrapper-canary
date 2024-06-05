"use strict";
s.r(t), s.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return H
  }
}), s("47120");
var n = s("735250"),
  l = s("470079"),
  r = s("512722"),
  i = s.n(r),
  a = s("399606"),
  o = s("481060"),
  u = s("975608"),
  C = s("711459"),
  d = s("374649"),
  c = s("424082"),
  p = s("650032"),
  _ = s("439017"),
  f = s("104494"),
  E = s("639119"),
  x = s("642530"),
  L = s("248042"),
  m = s("381507"),
  S = s("314404"),
  I = s("230927"),
  h = s("594174"),
  P = s("509545"),
  M = s("285952"),
  N = s("669079"),
  T = s("63063"),
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
    setAnnualDiscountInvoicePreview: el
  } = (0, R.usePaymentContext)(), {
    isGift: er,
    giftRecipient: ei,
    giftMessage: ea
  } = (0, j.useGiftContext)(), eo = null != q ? X[q] : null, {
    newPlans: eu
  } = C.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), eC = (0, a.useStateFromStores)([h.default], () => h.default.getCurrentUser()), ed = !er && null != Q && Q === k.PremiumSubscriptionSKUs.TIER_2 && null != eC && eC.hasHadPremium() && z && null == J && (0, C.isPaymentSourceEligibleForMultiMonthPlans)(eo), ec = (0, E.usePremiumTrialOffer)(Z);
  (0, c.useAnnualDiscountExperiment)("PremiumPaymentPlanSelectStep", null == ec);
  let ep = !er && null != ec && null != Q && (0, k.SubscriptionTrials)[ec.trial_id].skus.includes(Q),
    e_ = (0, f.usePremiumDiscountOffer)(),
    ef = null == e_ ? void 0 : null === (t = e_.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => k.SubscriptionPlanInfo[e].skuId === Q),
    eE = !er && null != e_ && null != Q && ef,
    ex = null !== (s = ep || eE) && void 0 !== s && s,
    {
      defaultToMonthlyPlan: eL
    } = _.TrialRedemptionDefaultPlanExperiment.useExperiment({
      location: "d17fd6_4"
    }, {
      autoTrackExposure: !1
    }),
    em = l.useMemo(() => (0, A.getPremiumPlanOptions)({
      skuId: Q,
      isPremium: en,
      multiMonthPlans: ed ? eu : [],
      currentSubscription: J,
      isGift: er,
      isEligibleForTrial: ep,
      defaultPlanId: et,
      defaultToMonthlyPlan: eL
    }), [Q, en, eu, J, ed, er, ep, et, eL]),
    eS = eE && em.includes(k.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? k.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : em[0],
    eI = (0, a.useStateFromStores)([P.default], () => P.default.get(eS)),
    eh = [{
      planId: null == eI ? void 0 : eI.id,
      quantity: 1
    }],
    [eP, eM] = l.useState(ex),
    [eN, eT] = (0, d.useSubscriptionInvoicePreview)({
      items: eh,
      renewal: !1,
      preventFetch: !ex,
      applyEntitlements: !0,
      trialId: Y,
      paymentSourceId: es.paymentSourceId,
      currency: es.currency
    }),
    {
      annualInvoicePreview: eA,
      annualInvoicePreviewError: ej,
      isEligibleForAnnualDiscount: eR
    } = (0, I.useGetAnnualDiscountInvoicePreview)({
      priceOptions: es,
      preventFetch: !em.includes(k.SubscriptionPlans.PREMIUM_YEAR_TIER_2),
      selectedSkuId: Q,
      isGift: er,
      planGroup: V,
      activeSubscription: J
    });
  null != eA && el(eA), l.useEffect(() => {
    ex && eM((null == eN ? void 0 : eN.subscriptionPeriodEnd) == null)
  }, [eN, ex]), (0, u.default)("Payment Modal Plan Select Step", eP, 5, {
    proratedInvoicePreview: eN,
    annualInvoicePreview: eA,
    proratedInvoiceError: eT,
    annualInvoicePreviewError: ej,
    isEligibleForOffer: ex
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eg = eR && null == ej,
    ey = null !== (H = null !== (r = null == eT ? void 0 : eT.message) && void 0 !== r ? r : null == ej ? void 0 : ej.message) && void 0 !== H ? H : F.default.Messages.ERROR_GENERIC_TITLE,
    eO = ex && null == eT || eg,
    eU = ex && null != eT || eR && null != ej,
    eb = eO && null == J && !!ex && (null == eN ? void 0 : eN.subscriptionPeriodEnd) == null || eg && (null == eA ? void 0 : eA.subscriptionPeriodEnd) == null,
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
  return (eB ? eF = (0, n.jsx)(m.default, {}) : ek && (eF = (0, n.jsx)(x.default, {})), eb) ? (0, n.jsx)(O.default, {}) : (i()(null != ee, "Step should be set"), i()(em.length > 0, "Premium plan options should be set"), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(b.GiftNote, {
      giftMessage: ea
    }), !(er && (0, N.shouldShowCustomGiftExperience)(ei)) && (0, n.jsx)(y.default, {
      isEligibleForTrial: ep
    }), (0, n.jsxs)(U.PaymentPortalBody, {
      children: [eO && (0, n.jsx)("hr", {
        className: G.planSelectSeparatorUpper
      }), eF, (0, n.jsx)(v.default, {}), eU ? (0, n.jsx)(o.FormErrorBlock, {
        children: ey
      }) : (0, n.jsx)(S.PremiumSwitchPlanSelectBody, {
        planOptions: em,
        eligibleForMultiMonthPlans: ed,
        referralTrialOfferId: Z,
        selectedPlanId: null == $ ? void 0 : $.id,
        subscriptionPeriodEnd: null == eN ? void 0 : eN.subscriptionPeriodEnd,
        discountInvoiceItems: eE ? null == eN ? void 0 : eN.invoiceItems : void 0,
        handleClose: K
      }), eO && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("hr", {
          className: G.planSelectSeparatorLower
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: F.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: T.default.getArticleURL(B.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, n.jsx)(U.PaymentPortalFooter, {
      children: (0, n.jsx)(o.ModalFooter, {
        justify: M.default.Justify.BETWEEN,
        align: M.default.Align.CENTER,
        children: (0, n.jsx)(S.PremiumSwitchPlanSelectFooter, {
          onStepChange: D,
          onBackClick: () => D(g.Step.SKU_SELECT),
          showBackButton: null == w && null == W,
          planOptions: em,
          shouldRenderUpdatedPaymentModal: eO,
          isTrial: ep
        })
      })
    })]
  }))
}