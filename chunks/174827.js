"use strict";
s.r(t), s.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return F
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
  f = s("439017"),
  x = s("104494"),
  _ = s("639119"),
  m = s("642530"),
  L = s("248042"),
  S = s("381507"),
  h = s("314404"),
  E = s("230927"),
  j = s("594174"),
  P = s("509545"),
  M = s("285952"),
  y = s("669079"),
  A = s("63063"),
  g = s("74538"),
  T = s("987209"),
  I = s("598"),
  N = s("409813"),
  v = s("51499"),
  O = s("456251"),
  R = s("614277"),
  U = s("809144"),
  b = s("698708"),
  k = s("981631"),
  B = s("474936"),
  H = s("689938"),
  G = s("457298");

function F(e) {
  var t, s, r, F;
  let {
    handleStepChange: w,
    initialPlanId: D,
    subscriptionTier: Z,
    trialId: W,
    referralTrialOfferId: K,
    handleClose: Y,
    planGroup: V
  } = e, {
    activeSubscription: z,
    hasFetchedSubscriptions: J,
    paymentSourceId: q,
    paymentSources: X,
    selectedSkuId: Q,
    selectedPlan: $,
    step: ee,
    defaultPlanId: et,
    priceOptions: es,
    isPremium: en,
    setAnnualDiscountInvoicePreview: ei
  } = (0, I.usePaymentContext)(), {
    isGift: er,
    giftRecipient: el,
    giftMessage: ea
  } = (0, T.useGiftContext)(), eo = null != q ? X[q] : null, {
    newPlans: eC
  } = u.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), eu = (0, a.useStateFromStores)([j.default], () => j.default.getCurrentUser()), ed = !er && null != Q && Q === B.PremiumSubscriptionSKUs.TIER_2 && null != eu && eu.hasHadPremium() && J && null == z && (0, u.isPaymentSourceEligibleForMultiMonthPlans)(eo), ec = (0, _.usePremiumTrialOffer)(K);
  (0, c.useAnnualDiscountExperiment)("PremiumPaymentPlanSelectStep", null == ec);
  let ep = !er && null != ec && null != Q && (0, B.SubscriptionTrials)[ec.trial_id].skus.includes(Q),
    ef = (0, x.usePremiumDiscountOffer)(),
    ex = null == ef ? void 0 : null === (t = ef.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === Q),
    e_ = !er && null != ef && null != Q && ex,
    em = null !== (s = ep || e_) && void 0 !== s && s,
    {
      defaultToMonthlyPlan: eL
    } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
      location: "d17fd6_4"
    }, {
      autoTrackExposure: !1
    }),
    eS = i.useMemo(() => (0, g.getPremiumPlanOptions)({
      skuId: Q,
      isPremium: en,
      multiMonthPlans: ed ? eC : [],
      currentSubscription: z,
      isGift: er,
      isEligibleForTrial: ep,
      defaultPlanId: et,
      defaultToMonthlyPlan: eL
    }), [Q, en, eC, z, ed, er, ep, et, eL]),
    eh = e_ && eS.includes(B.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? B.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : eS[0],
    eE = (0, a.useStateFromStores)([P.default], () => P.default.get(eh)),
    ej = [{
      planId: null == eE ? void 0 : eE.id,
      quantity: 1
    }],
    [eP, eM] = i.useState(em),
    [ey, eA] = (0, d.useSubscriptionInvoicePreview)({
      items: ej,
      renewal: !1,
      preventFetch: !em,
      applyEntitlements: !0,
      trialId: W,
      paymentSourceId: es.paymentSourceId,
      currency: es.currency
    }),
    {
      annualInvoicePreview: eg,
      annualInvoicePreviewError: eT,
      isEligibleForAnnualDiscount: eI
    } = (0, E.useGetAnnualDiscountInvoicePreview)({
      priceOptions: es,
      preventFetch: !eS.includes(B.SubscriptionPlans.PREMIUM_YEAR_TIER_2),
      selectedSkuId: Q,
      isGift: er,
      planGroup: V,
      activeSubscription: z
    });
  null != eg && ei(eg), i.useEffect(() => {
    em && eM((null == ey ? void 0 : ey.subscriptionPeriodEnd) == null)
  }, [ey, em]), (0, C.default)("Payment Modal Plan Select Step", eP, 5, {
    proratedInvoicePreview: ey,
    annualInvoicePreview: eg,
    proratedInvoiceError: eA,
    annualInvoicePreviewError: eT,
    isEligibleForOffer: em
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eN = eI && null == eT,
    ev = null !== (F = null !== (r = null == eA ? void 0 : eA.message) && void 0 !== r ? r : null == eT ? void 0 : eT.message) && void 0 !== F ? F : H.default.Messages.ERROR_GENERIC_TITLE,
    eO = em && null == eA || eN,
    eR = em && null != eA || eI && null != eT,
    eU = eO && null == z && !!em && (null == ey ? void 0 : ey.subscriptionPeriodEnd) == null || eN && (null == eg ? void 0 : eg.subscriptionPeriodEnd) == null,
    {
      enabled: eb
    } = p.ReferralProgramRecipient.useExperiment({
      location: "PremiumPaymentPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    ek = !er && (null == eE ? void 0 : eE.skuId) === B.PremiumSubscriptionSKUs.TIER_2 && (null == ec ? void 0 : ec.referrer_id) != null && eb,
    eB = (0, L.useIsEligibleForBogoPromotion)() && !er && (null == eE ? void 0 : eE.skuId) === B.PremiumSubscriptionSKUs.TIER_2,
    eH = null;
  return (ek ? eH = (0, n.jsx)(S.default, {}) : eB && (eH = (0, n.jsx)(m.default, {})), eU) ? (0, n.jsx)(O.default, {}) : (l()(null != ee, "Step should be set"), l()(eS.length > 0, "Premium plan options should be set"), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(U.GiftNote, {
      giftMessage: ea
    }), !(er && (0, y.shouldShowCustomGiftExperience)(el)) && (0, n.jsx)(v.default, {
      isEligibleForTrial: ep
    }), (0, n.jsxs)(R.PaymentPortalBody, {
      children: [eO && (0, n.jsx)("hr", {
        className: G.planSelectSeparatorUpper
      }), eH, (0, n.jsx)(b.default, {}), eR ? (0, n.jsx)(o.FormErrorBlock, {
        children: ev
      }) : (0, n.jsx)(h.PremiumSwitchPlanSelectBody, {
        planOptions: eS,
        eligibleForMultiMonthPlans: ed,
        referralTrialOfferId: K,
        selectedPlanId: null == $ ? void 0 : $.id,
        subscriptionPeriodEnd: null == ey ? void 0 : ey.subscriptionPeriodEnd,
        discountInvoiceItems: e_ ? null == ey ? void 0 : ey.invoiceItems : void 0,
        handleClose: Y
      }), eO && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("hr", {
          className: G.planSelectSeparatorLower
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: H.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: A.default.getArticleURL(k.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, n.jsx)(R.PaymentPortalFooter, {
      children: (0, n.jsx)(o.ModalFooter, {
        justify: M.default.Justify.BETWEEN,
        align: M.default.Align.CENTER,
        children: (0, n.jsx)(h.PremiumSwitchPlanSelectFooter, {
          onStepChange: w,
          onBackClick: () => w(N.Step.SKU_SELECT),
          showBackButton: null == D && null == Z,
          planOptions: eS,
          shouldRenderUpdatedPaymentModal: eO,
          isTrial: ep
        })
      })
    })]
  }))
}