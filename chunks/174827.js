"use strict";
n.r(t), n.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return G
  }
}), n("47120");
var s = n("735250"),
  i = n("470079"),
  r = n("512722"),
  l = n.n(r),
  a = n("399606"),
  o = n("481060"),
  C = n("975608"),
  u = n("711459"),
  d = n("374649"),
  c = n("424082"),
  p = n("650032"),
  f = n("439017"),
  x = n("104494"),
  _ = n("639119"),
  m = n("642530"),
  E = n("248042"),
  S = n("381507"),
  L = n("314404"),
  h = n("230927"),
  j = n("594174"),
  P = n("509545"),
  y = n("285952"),
  M = n("669079"),
  A = n("63063"),
  I = n("74538"),
  g = n("987209"),
  T = n("598"),
  v = n("409813"),
  N = n("51499"),
  O = n("456251"),
  R = n("614277"),
  b = n("809144"),
  U = n("698708"),
  k = n("981631"),
  B = n("474936"),
  w = n("689938"),
  F = n("457298");

function G(e) {
  var t, n, r, G;
  let {
    handleStepChange: H,
    initialPlanId: D,
    subscriptionTier: Z,
    trialId: W,
    referralTrialOfferId: Y,
    handleClose: K,
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
    priceOptions: en,
    isPremium: es,
    setAnnualDiscountInvoicePreview: ei
  } = (0, T.usePaymentContext)(), {
    isGift: er,
    giftRecipient: el,
    giftMessage: ea
  } = (0, g.useGiftContext)(), eo = null != q ? X[q] : null, {
    newPlans: eC
  } = u.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), eu = (0, a.useStateFromStores)([j.default], () => j.default.getCurrentUser()), ed = !er && null != Q && Q === B.PremiumSubscriptionSKUs.TIER_2 && null != eu && eu.hasHadPremium() && J && null == z && (0, u.isPaymentSourceEligibleForMultiMonthPlans)(eo), ec = (0, _.usePremiumTrialOffer)(Y);
  (0, c.useAnnualDiscountExperiment)("PremiumPaymentPlanSelectStep", null == ec);
  let ep = !er && null != ec && null != Q && (0, B.SubscriptionTrials)[ec.trial_id].skus.includes(Q),
    ef = (0, x.usePremiumDiscountOffer)(),
    ex = null == ef ? void 0 : null === (t = ef.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === Q),
    e_ = !er && null != ef && null != Q && ex,
    em = null !== (n = ep || e_) && void 0 !== n && n,
    {
      defaultToMonthlyPlan: eE
    } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
      location: "d17fd6_4"
    }, {
      autoTrackExposure: !1
    }),
    eS = i.useMemo(() => (0, I.getPremiumPlanOptions)({
      skuId: Q,
      isPremium: es,
      multiMonthPlans: ed ? eC : [],
      currentSubscription: z,
      isGift: er,
      isEligibleForTrial: ep,
      defaultPlanId: et,
      defaultToMonthlyPlan: eE
    }), [Q, es, eC, z, ed, er, ep, et, eE]),
    eL = e_ && eS.includes(B.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? B.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : eS[0],
    eh = (0, a.useStateFromStores)([P.default], () => P.default.get(eL)),
    ej = [{
      planId: null == eh ? void 0 : eh.id,
      quantity: 1
    }],
    [eP, ey] = i.useState(em),
    [eM, eA] = (0, d.useSubscriptionInvoicePreview)({
      items: ej,
      renewal: !1,
      preventFetch: !em,
      applyEntitlements: !0,
      trialId: W,
      paymentSourceId: en.paymentSourceId,
      currency: en.currency
    }),
    {
      annualInvoicePreview: eI,
      annualInvoicePreviewError: eg,
      isEligibleForAnnualDiscount: eT
    } = (0, h.useGetAnnualDiscountInvoicePreview)({
      priceOptions: en,
      preventFetch: !eS.includes(B.SubscriptionPlans.PREMIUM_YEAR_TIER_2),
      selectedSkuId: Q,
      isGift: er,
      planGroup: V,
      activeSubscription: z
    });
  null != eI && ei(eI), i.useEffect(() => {
    em && ey((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null)
  }, [eM, em]), (0, C.default)("Payment Modal Plan Select Step", eP, 5, {
    proratedInvoicePreview: eM,
    annualInvoicePreview: eI,
    proratedInvoiceError: eA,
    annualInvoicePreviewError: eg,
    isEligibleForOffer: em
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let ev = eT && null == eg,
    eN = null !== (G = null !== (r = null == eA ? void 0 : eA.message) && void 0 !== r ? r : null == eg ? void 0 : eg.message) && void 0 !== G ? G : w.default.Messages.ERROR_GENERIC_TITLE,
    eO = em && null == eA || ev,
    eR = em && null != eA || eT && null != eg,
    eb = eO && null == z && !!em && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null || ev && (null == eI ? void 0 : eI.subscriptionPeriodEnd) == null,
    {
      enabled: eU
    } = p.ReferralProgramRecipient.useExperiment({
      location: "PremiumPaymentPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    ek = !er && (null == eh ? void 0 : eh.skuId) === B.PremiumSubscriptionSKUs.TIER_2 && (null == ec ? void 0 : ec.referrer_id) != null && eU,
    eB = (0, E.useIsEligibleForBogoPromotion)() && !er && (null == eh ? void 0 : eh.skuId) === B.PremiumSubscriptionSKUs.TIER_2,
    ew = null;
  return (ek ? ew = (0, s.jsx)(S.default, {}) : eB && (ew = (0, s.jsx)(m.default, {})), eb) ? (0, s.jsx)(O.default, {}) : (l()(null != ee, "Step should be set"), l()(eS.length > 0, "Premium plan options should be set"), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(b.GiftNote, {
      giftMessage: ea
    }), !(er && (0, M.shouldShowCustomGiftExperience)(el)) && (0, s.jsx)(N.default, {
      isEligibleForTrial: ep
    }), (0, s.jsxs)(R.PaymentPortalBody, {
      children: [eO && (0, s.jsx)("hr", {
        className: F.planSelectSeparatorUpper
      }), ew, (0, s.jsx)(U.default, {}), eR ? (0, s.jsx)(o.FormErrorBlock, {
        children: eN
      }) : (0, s.jsx)(L.PremiumSwitchPlanSelectBody, {
        planOptions: eS,
        eligibleForMultiMonthPlans: ed,
        referralTrialOfferId: Y,
        selectedPlanId: null == $ ? void 0 : $.id,
        subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
        discountInvoiceItems: e_ ? null == eM ? void 0 : eM.invoiceItems : void 0,
        handleClose: K
      }), eO && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("hr", {
          className: F.planSelectSeparatorLower
        }), (0, s.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: w.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: A.default.getArticleURL(k.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, s.jsx)(R.PaymentPortalFooter, {
      children: (0, s.jsx)(o.ModalFooter, {
        justify: y.default.Justify.BETWEEN,
        align: y.default.Align.CENTER,
        children: (0, s.jsx)(L.PremiumSwitchPlanSelectFooter, {
          onStepChange: H,
          onBackClick: () => H(v.Step.SKU_SELECT),
          showBackButton: null == D && null == Z,
          planOptions: eS,
          shouldRenderUpdatedPaymentModal: eO,
          isTrial: ep
        })
      })
    })]
  }))
}