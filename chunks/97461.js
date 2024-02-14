"use strict";
n.r(t), n.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return j
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  l = n("627445"),
  a = n.n(l),
  i = n("65597"),
  u = n("77078"),
  o = n("856413"),
  d = n("916187"),
  c = n("809071"),
  _ = n("669073"),
  I = n("154889"),
  E = n("917247"),
  f = n("358821"),
  S = n("570727"),
  P = n("697218"),
  m = n("10514"),
  p = n("145131"),
  T = n("659632"),
  N = n("701909"),
  M = n("719923"),
  C = n("635357"),
  R = n("642906"),
  L = n("85336"),
  A = n("153727"),
  g = n("628738"),
  O = n("650484"),
  x = n("310093"),
  h = n("367767"),
  y = n("49111"),
  U = n("646718"),
  b = n("782340"),
  k = n("508233");

function j(e) {
  var t, n, l;
  let {
    handleStepChange: j,
    initialPlanId: D,
    subscriptionTier: G,
    trialId: B,
    referralTrialOfferId: v,
    handleClose: F
  } = e, {
    activeSubscription: H,
    hasFetchedSubscriptions: W,
    paymentSourceId: Y,
    paymentSources: w,
    selectedSkuId: K,
    selectedPlan: V,
    step: J,
    defaultPlanId: q,
    priceOptions: X,
    isPremium: z
  } = (0, R.usePaymentContext)(), {
    isGift: Q,
    giftRecipient: Z,
    giftMessage: $
  } = (0, C.useGiftContext)(), ee = null != Y ? w[Y] : null, {
    newPlans: et
  } = d.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), en = (0, i.default)([P.default], () => P.default.getCurrentUser()), es = !Q && null != K && K === U.PremiumSubscriptionSKUs.TIER_2 && null != en && en.hasHadPremium() && W && null == H && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ee), er = (0, E.usePremiumTrialOffer)(v), el = !Q && null != er && null != K && (0, U.SubscriptionTrials)[er.trial_id].skus.includes(K), ea = (0, I.usePremiumDiscountOffer)(), ei = null == ea ? void 0 : null === (t = ea.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => U.SubscriptionPlanInfo[e].skuId === K), eu = !Q && null != ea && null != K && ei, eo = null !== (n = el || eu) && void 0 !== n && n, {
    defaultToMonthlyPlan: ed
  } = _.TrialRedemptionDefaultPlanExperiment.useExperiment({
    location: "d17fd6_4"
  }, {
    autoTrackExposure: !1
  }), ec = r.useMemo(() => (0, M.getPremiumPlanOptions)({
    skuId: K,
    isPremium: z,
    multiMonthPlans: es ? et : [],
    currentSubscription: H,
    isGift: Q,
    isEligibleForTrial: el,
    defaultPlanId: q,
    defaultToMonthlyPlan: ed
  }), [K, z, et, H, es, Q, el, q, ed]), e_ = eu && ec.includes(U.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? U.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ec[0], eI = (0, i.default)([m.default], () => m.default.get(e_)), eE = [{
    planId: null == eI ? void 0 : eI.id,
    quantity: 1
  }], [ef, eS] = r.useState(eo), [eP, em] = (0, c.useSubscriptionInvoicePreview)({
    items: eE,
    renewal: !1,
    preventFetch: !eo,
    applyEntitlements: !0,
    trialId: B,
    paymentSourceId: X.paymentSourceId,
    currency: X.currency
  });
  r.useEffect(() => {
    eo && eS((null == eP ? void 0 : eP.subscriptionPeriodEnd) == null)
  }, [eP, eo]), (0, o.default)("Payment Modal Plan Select Step", ef, 5, {
    proratedInvoicePreview: eP,
    proratedInvoiceError: em,
    isEligibleForOffer: eo
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let ep = null !== (l = null == em ? void 0 : em.message) && void 0 !== l ? l : b.default.Messages.ERROR_GENERIC_TITLE,
    eT = eo && null == em,
    eN = eo && null != em;
  return eT && (null == eP ? void 0 : eP.subscriptionPeriodEnd) == null ? (0, s.jsx)(g.default, {}) : (a(null != J, "Step should be set"), a(ec.length > 0, "Premium plan options should be set"), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(x.GiftNote, {
      giftMessage: $
    }), !(Q && (0, T.shouldShowCustomGiftExperience)(Z)) && (0, s.jsx)(A.default, {
      isEligibleForTrial: el
    }), (0, s.jsxs)(O.PaymentPortalBody, {
      children: [eT && (0, s.jsx)("hr", {
        className: k.planSelectSeparatorUpper
      }), (0, s.jsx)(f.default, {
        isGift: Q,
        plan: V
      }), (0, s.jsx)(h.default, {}), eN ? (0, s.jsx)(u.FormErrorBlock, {
        children: ep
      }) : (0, s.jsx)(S.PremiumSwitchPlanSelectBody, {
        planOptions: ec,
        eligibleForMultiMonthPlans: es,
        referralTrialOfferId: v,
        selectedPlanId: null == V ? void 0 : V.id,
        subscriptionPeriodEnd: null == eP ? void 0 : eP.subscriptionPeriodEnd,
        discountInvoiceItems: eu ? null == eP ? void 0 : eP.invoiceItems : void 0,
        handleClose: F
      }), eT && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("hr", {
          className: k.planSelectSeparatorLower
        }), (0, s.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: b.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: N.default.getArticleURL(y.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, s.jsx)(O.PaymentPortalFooter, {
      children: (0, s.jsx)(u.ModalFooter, {
        justify: p.default.Justify.BETWEEN,
        align: p.default.Align.CENTER,
        children: (0, s.jsx)(S.PremiumSwitchPlanSelectFooter, {
          onStepChange: j,
          onBackClick: () => j(L.Step.SKU_SELECT),
          showBackButton: null == D && null == G,
          planOptions: ec,
          shouldRenderUpdatedPaymentModal: eT,
          isTrial: el
        })
      })
    })]
  }))
}