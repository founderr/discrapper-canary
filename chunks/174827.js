"use strict";
s.r(t), s.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return H
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
  c = s("650032"),
  p = s("439017"),
  f = s("104494"),
  x = s("639119"),
  _ = s("642530"),
  m = s("248042"),
  h = s("381507"),
  L = s("314404"),
  S = s("594174"),
  j = s("509545"),
  E = s("285952"),
  P = s("669079"),
  g = s("63063"),
  y = s("74538"),
  M = s("987209"),
  A = s("598"),
  T = s("409813"),
  I = s("51499"),
  v = s("456251"),
  N = s("614277"),
  b = s("809144"),
  O = s("698708"),
  U = s("981631"),
  R = s("474936"),
  k = s("689938"),
  B = s("457298");

function H(e) {
  var t, s, i;
  let {
    handleStepChange: H,
    initialPlanId: w,
    subscriptionTier: G,
    trialId: F,
    referralTrialOfferId: Z,
    handleClose: D
  } = e, {
    activeSubscription: W,
    hasFetchedSubscriptions: Y,
    paymentSourceId: K,
    paymentSources: V,
    selectedSkuId: z,
    selectedPlan: J,
    step: q,
    defaultPlanId: X,
    priceOptions: Q,
    isPremium: $
  } = (0, A.usePaymentContext)(), {
    isGift: ee,
    giftRecipient: et,
    giftMessage: es
  } = (0, M.useGiftContext)(), en = null != K ? V[K] : null, {
    newPlans: er
  } = d.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), ei = (0, a.useStateFromStores)([S.default], () => S.default.getCurrentUser()), el = !ee && null != z && z === R.PremiumSubscriptionSKUs.TIER_2 && null != ei && ei.hasHadPremium() && Y && null == W && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(en), ea = (0, x.usePremiumTrialOffer)(Z), eo = !ee && null != ea && null != z && (0, R.SubscriptionTrials)[ea.trial_id].skus.includes(z), eC = (0, f.usePremiumDiscountOffer)(), ed = null == eC ? void 0 : null === (t = eC.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => R.SubscriptionPlanInfo[e].skuId === z), eu = !ee && null != eC && null != z && ed, ec = null !== (s = eo || eu) && void 0 !== s && s, {
    defaultToMonthlyPlan: ep
  } = p.TrialRedemptionDefaultPlanExperiment.useExperiment({
    location: "d17fd6_4"
  }, {
    autoTrackExposure: !1
  }), ef = r.useMemo(() => (0, y.getPremiumPlanOptions)({
    skuId: z,
    isPremium: $,
    multiMonthPlans: el ? er : [],
    currentSubscription: W,
    isGift: ee,
    isEligibleForTrial: eo,
    defaultPlanId: X,
    defaultToMonthlyPlan: ep
  }), [z, $, er, W, el, ee, eo, X, ep]), ex = eu && ef.includes(R.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? R.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ef[0], e_ = (0, a.useStateFromStores)([j.default], () => j.default.get(ex)), em = [{
    planId: null == e_ ? void 0 : e_.id,
    quantity: 1
  }], [eh, eL] = r.useState(ec), [eS, ej] = (0, u.useSubscriptionInvoicePreview)({
    items: em,
    renewal: !1,
    preventFetch: !ec,
    applyEntitlements: !0,
    trialId: F,
    paymentSourceId: Q.paymentSourceId,
    currency: Q.currency
  });
  r.useEffect(() => {
    ec && eL((null == eS ? void 0 : eS.subscriptionPeriodEnd) == null)
  }, [eS, ec]), (0, C.default)("Payment Modal Plan Select Step", eh, 5, {
    proratedInvoicePreview: eS,
    proratedInvoiceError: ej,
    isEligibleForOffer: ec
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eE = null !== (i = null == ej ? void 0 : ej.message) && void 0 !== i ? i : k.default.Messages.ERROR_GENERIC_TITLE,
    eP = ec && null == ej,
    eg = ec && null != ej,
    {
      enabled: ey
    } = c.ReferralProgramRecipient.useExperiment({
      location: "PremiumPaymentPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    eM = !ee && (null == e_ ? void 0 : e_.skuId) === R.PremiumSubscriptionSKUs.TIER_2 && (null == ea ? void 0 : ea.referrer_id) != null && ey,
    eA = (0, m.useIsEligibleForBogoPromotion)() && !ee && (null == e_ ? void 0 : e_.skuId) === R.PremiumSubscriptionSKUs.TIER_2,
    eT = null;
  return (eM ? eT = (0, n.jsx)(h.default, {}) : eA && (eT = (0, n.jsx)(_.default, {})), eP && (null == eS ? void 0 : eS.subscriptionPeriodEnd) == null) ? (0, n.jsx)(v.default, {}) : (l()(null != q, "Step should be set"), l()(ef.length > 0, "Premium plan options should be set"), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(b.GiftNote, {
      giftMessage: es
    }), !(ee && (0, P.shouldShowCustomGiftExperience)(et)) && (0, n.jsx)(I.default, {
      isEligibleForTrial: eo
    }), (0, n.jsxs)(N.PaymentPortalBody, {
      children: [eP && (0, n.jsx)("hr", {
        className: B.planSelectSeparatorUpper
      }), eT, (0, n.jsx)(O.default, {}), eg ? (0, n.jsx)(o.FormErrorBlock, {
        children: eE
      }) : (0, n.jsx)(L.PremiumSwitchPlanSelectBody, {
        planOptions: ef,
        eligibleForMultiMonthPlans: el,
        referralTrialOfferId: Z,
        selectedPlanId: null == J ? void 0 : J.id,
        subscriptionPeriodEnd: null == eS ? void 0 : eS.subscriptionPeriodEnd,
        discountInvoiceItems: eu ? null == eS ? void 0 : eS.invoiceItems : void 0,
        handleClose: D
      }), eP && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("hr", {
          className: B.planSelectSeparatorLower
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: k.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: g.default.getArticleURL(U.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, n.jsx)(N.PaymentPortalFooter, {
      children: (0, n.jsx)(o.ModalFooter, {
        justify: E.default.Justify.BETWEEN,
        align: E.default.Align.CENTER,
        children: (0, n.jsx)(L.PremiumSwitchPlanSelectFooter, {
          onStepChange: H,
          onBackClick: () => H(T.Step.SKU_SELECT),
          showBackButton: null == w && null == G,
          planOptions: ef,
          shouldRenderUpdatedPaymentModal: eP,
          isTrial: eo
        })
      })
    })]
  }))
}