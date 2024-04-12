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
  u = s("711459"),
  d = s("374649"),
  c = s("424082"),
  p = s("650032"),
  f = s("439017"),
  x = s("104494"),
  _ = s("639119"),
  m = s("642530"),
  L = s("248042"),
  h = s("381507"),
  S = s("314404"),
  j = s("594174"),
  E = s("509545"),
  P = s("285952"),
  g = s("669079"),
  y = s("63063"),
  M = s("74538"),
  A = s("987209"),
  T = s("598"),
  I = s("409813"),
  N = s("51499"),
  b = s("456251"),
  O = s("614277"),
  v = s("809144"),
  U = s("698708"),
  k = s("981631"),
  R = s("474936"),
  B = s("689938"),
  H = s("457298");

function G(e) {
  var t, s, i;
  let {
    handleStepChange: G,
    initialPlanId: w,
    subscriptionTier: F,
    trialId: D,
    referralTrialOfferId: Z,
    handleClose: W
  } = e, {
    activeSubscription: Y,
    hasFetchedSubscriptions: K,
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
  } = u.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  });
  (0, c.useAnnualDiscountExperiment)("PremiumPaymentPlanSelectStep", !0);
  let el = (0, a.useStateFromStores)([j.default], () => j.default.getCurrentUser()),
    ea = !et && null != J && J === R.PremiumSubscriptionSKUs.TIER_2 && null != el && el.hasHadPremium() && K && null == Y && (0, u.isPaymentSourceEligibleForMultiMonthPlans)(er),
    eo = (0, _.usePremiumTrialOffer)(Z),
    eC = !et && null != eo && null != J && (0, R.SubscriptionTrials)[eo.trial_id].skus.includes(J),
    eu = (0, x.usePremiumDiscountOffer)(),
    ed = null == eu ? void 0 : null === (t = eu.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => R.SubscriptionPlanInfo[e].skuId === J),
    ec = !et && null != eu && null != J && ed,
    ep = null !== (s = eC || ec) && void 0 !== s && s,
    {
      defaultToMonthlyPlan: ef
    } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
      location: "d17fd6_4"
    }, {
      autoTrackExposure: !1
    }),
    ex = r.useMemo(() => (0, M.getPremiumPlanOptions)({
      skuId: J,
      isPremium: ee,
      multiMonthPlans: ea ? ei : [],
      currentSubscription: Y,
      isGift: et,
      isEligibleForTrial: eC,
      defaultPlanId: Q,
      defaultToMonthlyPlan: ef
    }), [J, ee, ei, Y, ea, et, eC, Q, ef]),
    e_ = ec && ex.includes(R.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? R.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ex[0],
    em = (0, a.useStateFromStores)([E.default], () => E.default.get(e_)),
    eL = [{
      planId: null == em ? void 0 : em.id,
      quantity: 1
    }],
    [eh, eS] = r.useState(ep),
    [ej, eE] = (0, d.useSubscriptionInvoicePreview)({
      items: eL,
      renewal: !1,
      preventFetch: !ep,
      applyEntitlements: !0,
      trialId: D,
      paymentSourceId: $.paymentSourceId,
      currency: $.currency
    });
  r.useEffect(() => {
    ep && eS((null == ej ? void 0 : ej.subscriptionPeriodEnd) == null)
  }, [ej, ep]), (0, C.default)("Payment Modal Plan Select Step", eh, 5, {
    proratedInvoicePreview: ej,
    proratedInvoiceError: eE,
    isEligibleForOffer: ep
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eP = null !== (i = null == eE ? void 0 : eE.message) && void 0 !== i ? i : B.default.Messages.ERROR_GENERIC_TITLE,
    eg = ep && null == eE,
    ey = ep && null != eE,
    {
      enabled: eM
    } = p.ReferralProgramRecipient.useExperiment({
      location: "PremiumPaymentPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    eA = !et && (null == em ? void 0 : em.skuId) === R.PremiumSubscriptionSKUs.TIER_2 && (null == eo ? void 0 : eo.referrer_id) != null && eM,
    eT = (0, L.useIsEligibleForBogoPromotion)() && !et && (null == em ? void 0 : em.skuId) === R.PremiumSubscriptionSKUs.TIER_2,
    eI = null;
  return (eA ? eI = (0, n.jsx)(h.default, {}) : eT && (eI = (0, n.jsx)(m.default, {})), eg && (null == ej ? void 0 : ej.subscriptionPeriodEnd) == null) ? (0, n.jsx)(b.default, {}) : (l()(null != X, "Step should be set"), l()(ex.length > 0, "Premium plan options should be set"), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(v.GiftNote, {
      giftMessage: en
    }), !(et && (0, g.shouldShowCustomGiftExperience)(es)) && (0, n.jsx)(N.default, {
      isEligibleForTrial: eC
    }), (0, n.jsxs)(O.PaymentPortalBody, {
      children: [eg && (0, n.jsx)("hr", {
        className: H.planSelectSeparatorUpper
      }), eI, (0, n.jsx)(U.default, {}), ey ? (0, n.jsx)(o.FormErrorBlock, {
        children: eP
      }) : (0, n.jsx)(S.PremiumSwitchPlanSelectBody, {
        planOptions: ex,
        eligibleForMultiMonthPlans: ea,
        referralTrialOfferId: Z,
        selectedPlanId: null == q ? void 0 : q.id,
        subscriptionPeriodEnd: null == ej ? void 0 : ej.subscriptionPeriodEnd,
        discountInvoiceItems: ec ? null == ej ? void 0 : ej.invoiceItems : void 0,
        handleClose: W
      }), eg && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("hr", {
          className: H.planSelectSeparatorLower
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: B.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: y.default.getArticleURL(k.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, n.jsx)(O.PaymentPortalFooter, {
      children: (0, n.jsx)(o.ModalFooter, {
        justify: P.default.Justify.BETWEEN,
        align: P.default.Align.CENTER,
        children: (0, n.jsx)(S.PremiumSwitchPlanSelectFooter, {
          onStepChange: G,
          onBackClick: () => G(I.Step.SKU_SELECT),
          showBackButton: null == w && null == F,
          planOptions: ex,
          shouldRenderUpdatedPaymentModal: eg,
          isTrial: eC
        })
      })
    })]
  }))
}