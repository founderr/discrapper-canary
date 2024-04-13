"use strict";
s.r(t), s.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return G
  }
}), s("47120");
var n = s("735250"),
  r = s("470079"),
  i = s("512722"),
  l = s.n(i),
  a = s("399606"),
  o = s("481060"),
  C = s("975608"),
  d = s("711459"),
  u = s("374649"),
  c = s("424082"),
  p = s("650032"),
  f = s("439017"),
  x = s("104494"),
  _ = s("639119"),
  m = s("642530"),
  L = s("248042"),
  h = s("381507"),
  E = s("314404"),
  S = s("594174"),
  j = s("509545"),
  P = s("285952"),
  M = s("669079"),
  g = s("63063"),
  y = s("74538"),
  A = s("987209"),
  T = s("598"),
  I = s("409813"),
  N = s("51499"),
  v = s("456251"),
  O = s("614277"),
  R = s("809144"),
  b = s("698708"),
  U = s("981631"),
  k = s("474936"),
  B = s("689938"),
  H = s("457298");

function G(e) {
  var t, s, i;
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
    giftRecipient: es,
    giftMessage: en
  } = (0, A.useGiftContext)(), er = null != V ? z[V] : null, {
    newPlans: ei
  } = d.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  });
  (0, c.useAnnualDiscountExperiment)("PremiumPaymentPlanSelectStep", !0);
  let el = (0, a.useStateFromStores)([S.default], () => S.default.getCurrentUser()),
    ea = !et && null != J && J === k.PremiumSubscriptionSKUs.TIER_2 && null != el && el.hasHadPremium() && Y && null == K && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(er),
    eo = (0, _.usePremiumTrialOffer)(Z),
    eC = !et && null != eo && null != J && (0, k.SubscriptionTrials)[eo.trial_id].skus.includes(J),
    ed = (0, x.usePremiumDiscountOffer)(),
    eu = null == ed ? void 0 : null === (t = ed.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => k.SubscriptionPlanInfo[e].skuId === J),
    ec = !et && null != ed && null != J && eu,
    ep = null !== (s = eC || ec) && void 0 !== s && s,
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
    [eh, eE] = r.useState(ep),
    [eS, ej] = (0, u.useSubscriptionInvoicePreview)({
      items: eL,
      renewal: !1,
      preventFetch: !ep,
      applyEntitlements: !0,
      trialId: D,
      paymentSourceId: $.paymentSourceId,
      currency: $.currency
    });
  r.useEffect(() => {
    ep && eE((null == eS ? void 0 : eS.subscriptionPeriodEnd) == null)
  }, [eS, ep]), (0, C.default)("Payment Modal Plan Select Step", eh, 5, {
    proratedInvoicePreview: eS,
    proratedInvoiceError: ej,
    isEligibleForOffer: ep
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eP = null !== (i = null == ej ? void 0 : ej.message) && void 0 !== i ? i : B.default.Messages.ERROR_GENERIC_TITLE,
    eM = ep && null == ej,
    eg = ep && null != ej,
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
  return (eA ? eI = (0, n.jsx)(h.default, {}) : eT && (eI = (0, n.jsx)(m.default, {})), eM && (null == eS ? void 0 : eS.subscriptionPeriodEnd) == null) ? (0, n.jsx)(v.default, {}) : (l()(null != X, "Step should be set"), l()(ex.length > 0, "Premium plan options should be set"), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(R.GiftNote, {
      giftMessage: en
    }), !(et && (0, M.shouldShowCustomGiftExperience)(es)) && (0, n.jsx)(N.default, {
      isEligibleForTrial: eC
    }), (0, n.jsxs)(O.PaymentPortalBody, {
      children: [eM && (0, n.jsx)("hr", {
        className: H.planSelectSeparatorUpper
      }), eI, (0, n.jsx)(b.default, {}), eg ? (0, n.jsx)(o.FormErrorBlock, {
        children: eP
      }) : (0, n.jsx)(E.PremiumSwitchPlanSelectBody, {
        planOptions: ex,
        eligibleForMultiMonthPlans: ea,
        referralTrialOfferId: Z,
        selectedPlanId: null == q ? void 0 : q.id,
        subscriptionPeriodEnd: null == eS ? void 0 : eS.subscriptionPeriodEnd,
        discountInvoiceItems: ec ? null == eS ? void 0 : eS.invoiceItems : void 0,
        handleClose: W
      }), eM && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("hr", {
          className: H.planSelectSeparatorLower
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: B.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: g.default.getArticleURL(U.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, n.jsx)(O.PaymentPortalFooter, {
      children: (0, n.jsx)(o.ModalFooter, {
        justify: P.default.Justify.BETWEEN,
        align: P.default.Align.CENTER,
        children: (0, n.jsx)(E.PremiumSwitchPlanSelectFooter, {
          onStepChange: G,
          onBackClick: () => G(I.Step.SKU_SELECT),
          showBackButton: null == F && null == w,
          planOptions: ex,
          shouldRenderUpdatedPaymentModal: eM,
          isTrial: eC
        })
      })
    })]
  }))
}