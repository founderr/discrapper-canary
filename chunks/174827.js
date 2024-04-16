"use strict";
n.r(t), n.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return G
  }
}), n("47120");
var s = n("735250"),
  r = n("470079"),
  i = n("512722"),
  l = n.n(i),
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
  L = n("248042"),
  E = n("381507"),
  h = n("314404"),
  S = n("594174"),
  j = n("509545"),
  P = n("285952"),
  g = n("669079"),
  M = n("63063"),
  y = n("74538"),
  A = n("987209"),
  T = n("598"),
  I = n("409813"),
  N = n("51499"),
  v = n("456251"),
  O = n("614277"),
  b = n("809144"),
  R = n("698708"),
  U = n("981631"),
  k = n("474936"),
  B = n("689938"),
  H = n("457298");

function G(e) {
  var t, n, i;
  let {
    handleStepChange: G,
    initialPlanId: F,
    subscriptionTier: w,
    trialId: D,
    referralTrialOfferId: Z,
    handleClose: W
  } = e, {
    activeSubscription: K,
    hasFetchedSubscriptions: Y,
    paymentSourceId: V,
    paymentSources: z,
    selectedSkuId: J,
    selectedPlan: q,
    step: X,
    defaultPlanId: Q,
    priceOptions: $,
    isPremium: ee
  } = (0, T.usePaymentContext)(), {
    isGift: et,
    giftRecipient: en,
    giftMessage: es
  } = (0, A.useGiftContext)(), er = null != V ? z[V] : null, {
    newPlans: ei
  } = u.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), el = (0, a.useStateFromStores)([S.default], () => S.default.getCurrentUser()), ea = !et && null != J && J === k.PremiumSubscriptionSKUs.TIER_2 && null != el && el.hasHadPremium() && Y && null == K && (0, u.isPaymentSourceEligibleForMultiMonthPlans)(er), eo = (0, _.usePremiumTrialOffer)(Z);
  (0, c.useAnnualDiscountExperiment)("PremiumPaymentPlanSelectStep", null == eo);
  let eC = !et && null != eo && null != J && (0, k.SubscriptionTrials)[eo.trial_id].skus.includes(J),
    eu = (0, x.usePremiumDiscountOffer)(),
    ed = null == eu ? void 0 : null === (t = eu.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => k.SubscriptionPlanInfo[e].skuId === J),
    ec = !et && null != eu && null != J && ed,
    ep = null !== (n = eC || ec) && void 0 !== n && n,
    {
      defaultToMonthlyPlan: ef
    } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
      location: "d17fd6_4"
    }, {
      autoTrackExposure: !1
    }),
    ex = r.useMemo(() => (0, y.getPremiumPlanOptions)({
      skuId: J,
      isPremium: ee,
      multiMonthPlans: ea ? ei : [],
      currentSubscription: K,
      isGift: et,
      isEligibleForTrial: eC,
      defaultPlanId: Q,
      defaultToMonthlyPlan: ef
    }), [J, ee, ei, K, ea, et, eC, Q, ef]),
    e_ = ec && ex.includes(k.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? k.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ex[0],
    em = (0, a.useStateFromStores)([j.default], () => j.default.get(e_)),
    eL = [{
      planId: null == em ? void 0 : em.id,
      quantity: 1
    }],
    [eE, eh] = r.useState(ep),
    [eS, ej] = (0, d.useSubscriptionInvoicePreview)({
      items: eL,
      renewal: !1,
      preventFetch: !ep,
      applyEntitlements: !0,
      trialId: D,
      paymentSourceId: $.paymentSourceId,
      currency: $.currency
    });
  r.useEffect(() => {
    ep && eh((null == eS ? void 0 : eS.subscriptionPeriodEnd) == null)
  }, [eS, ep]), (0, C.default)("Payment Modal Plan Select Step", eE, 5, {
    proratedInvoicePreview: eS,
    proratedInvoiceError: ej,
    isEligibleForOffer: ep
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eP = null !== (i = null == ej ? void 0 : ej.message) && void 0 !== i ? i : B.default.Messages.ERROR_GENERIC_TITLE,
    eg = ep && null == ej,
    eM = ep && null != ej,
    {
      enabled: ey
    } = p.ReferralProgramRecipient.useExperiment({
      location: "PremiumPaymentPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    eA = !et && (null == em ? void 0 : em.skuId) === k.PremiumSubscriptionSKUs.TIER_2 && (null == eo ? void 0 : eo.referrer_id) != null && ey,
    eT = (0, L.useIsEligibleForBogoPromotion)() && !et && (null == em ? void 0 : em.skuId) === k.PremiumSubscriptionSKUs.TIER_2,
    eI = null;
  return (eA ? eI = (0, s.jsx)(E.default, {}) : eT && (eI = (0, s.jsx)(m.default, {})), eg && (null == eS ? void 0 : eS.subscriptionPeriodEnd) == null) ? (0, s.jsx)(v.default, {}) : (l()(null != X, "Step should be set"), l()(ex.length > 0, "Premium plan options should be set"), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(b.GiftNote, {
      giftMessage: es
    }), !(et && (0, g.shouldShowCustomGiftExperience)(en)) && (0, s.jsx)(N.default, {
      isEligibleForTrial: eC
    }), (0, s.jsxs)(O.PaymentPortalBody, {
      children: [eg && (0, s.jsx)("hr", {
        className: H.planSelectSeparatorUpper
      }), eI, (0, s.jsx)(R.default, {}), eM ? (0, s.jsx)(o.FormErrorBlock, {
        children: eP
      }) : (0, s.jsx)(h.PremiumSwitchPlanSelectBody, {
        planOptions: ex,
        eligibleForMultiMonthPlans: ea,
        referralTrialOfferId: Z,
        selectedPlanId: null == q ? void 0 : q.id,
        subscriptionPeriodEnd: null == eS ? void 0 : eS.subscriptionPeriodEnd,
        discountInvoiceItems: ec ? null == eS ? void 0 : eS.invoiceItems : void 0,
        handleClose: W
      }), eg && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("hr", {
          className: H.planSelectSeparatorLower
        }), (0, s.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: B.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: M.default.getArticleURL(U.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, s.jsx)(O.PaymentPortalFooter, {
      children: (0, s.jsx)(o.ModalFooter, {
        justify: P.default.Justify.BETWEEN,
        align: P.default.Align.CENTER,
        children: (0, s.jsx)(h.PremiumSwitchPlanSelectFooter, {
          onStepChange: G,
          onBackClick: () => G(I.Step.SKU_SELECT),
          showBackButton: null == F && null == w,
          planOptions: ex,
          shouldRenderUpdatedPaymentModal: eg,
          isTrial: eC
        })
      })
    })]
  }))
}