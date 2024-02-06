"use strict";
n.r(t), n.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return v
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  r = n("627445"),
  l = n.n(r),
  i = n("65597"),
  u = n("77078"),
  o = n("856413"),
  d = n("916187"),
  c = n("809071"),
  _ = n("669073"),
  f = n("154889"),
  I = n("917247"),
  E = n("358821"),
  m = n("570727"),
  S = n("697218"),
  P = n("10514"),
  p = n("145131"),
  T = n("659632"),
  N = n("701909"),
  M = n("719923"),
  C = n("635357"),
  L = n("642906"),
  R = n("85336"),
  A = n("153727"),
  g = n("628738"),
  O = n("650484"),
  x = n("310093"),
  h = n("367767"),
  y = n("49111"),
  b = n("646718"),
  U = n("782340"),
  k = n("424650");

function v(e) {
  var t, n, r;
  let {
    handleStepChange: v,
    initialPlanId: j,
    subscriptionTier: D,
    trialId: G,
    referralTrialOfferId: B,
    handleClose: F
  } = e, {
    activeSubscription: H,
    hasFetchedSubscriptions: W,
    paymentSourceId: Y,
    paymentSources: w,
    selectedSkuId: K,
    selectedPlan: V,
    step: J,
    defaultPlanId: Z,
    priceOptions: q,
    isPremium: X
  } = (0, L.usePaymentContext)(), {
    isGift: z,
    giftRecipient: Q,
    giftMessage: $
  } = (0, C.useGiftContext)(), ee = null != Y ? w[Y] : null, {
    newPlans: et
  } = d.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), en = (0, i.default)([S.default], () => S.default.getCurrentUser()), es = !z && null != K && K === b.PremiumSubscriptionSKUs.TIER_2 && null != en && en.hasHadPremium() && W && null == H && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ee), ea = (0, I.usePremiumTrialOffer)(B), er = !z && null != ea && null != K && (0, b.SubscriptionTrials)[ea.trial_id].skus.includes(K), el = (0, f.usePremiumDiscountOffer)(), ei = null == el ? void 0 : null === (t = el.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => b.SubscriptionPlanInfo[e].skuId === K), eu = !z && null != el && null != K && ei, eo = null !== (n = er || eu) && void 0 !== n && n, {
    defaultToMonthlyPlan: ed
  } = _.TrialRedemptionDefaultPlanExperiment.useExperiment({
    location: "d17fd6_4"
  }, {
    autoTrackExposure: !1
  }), ec = a.useMemo(() => (0, M.getPremiumPlanOptions)({
    skuId: K,
    isPremium: X,
    multiMonthPlans: es ? et : [],
    currentSubscription: H,
    isGift: z,
    isEligibleForTrial: er,
    defaultPlanId: Z,
    defaultToMonthlyPlan: ed
  }), [K, X, et, H, es, z, er, Z, ed]), e_ = eu && ec.includes(b.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? b.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ec[0], ef = (0, i.default)([P.default], () => P.default.get(e_)), eI = [{
    planId: null == ef ? void 0 : ef.id,
    quantity: 1
  }], [eE, em] = a.useState(eo), [eS, eP] = (0, c.useSubscriptionInvoicePreview)({
    items: eI,
    renewal: !1,
    preventFetch: !eo,
    applyEntitlements: !0,
    trialId: G,
    paymentSourceId: q.paymentSourceId,
    currency: q.currency
  });
  a.useEffect(() => {
    eo && em((null == eS ? void 0 : eS.subscriptionPeriodEnd) == null)
  }, [eS, eo]), (0, o.default)("Payment Modal Plan Select Step", eE, 5, {
    proratedInvoicePreview: eS,
    proratedInvoiceError: eP,
    isEligibleForOffer: eo
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let ep = null !== (r = null == eP ? void 0 : eP.message) && void 0 !== r ? r : U.default.Messages.ERROR_GENERIC_TITLE,
    eT = eo && null == eP,
    eN = eo && null != eP;
  return eT && (null == eS ? void 0 : eS.subscriptionPeriodEnd) == null ? (0, s.jsx)(g.default, {}) : (l(null != J, "Step should be set"), l(ec.length > 0, "Premium plan options should be set"), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(x.GiftNote, {
      giftMessage: $
    }), !(z && (0, T.shouldShowCustomGiftExperience)(Q, !0, "PremiumPaymentPlanSelectStep")) && (0, s.jsx)(A.default, {
      isEligibleForTrial: er
    }), (0, s.jsxs)(O.PaymentPortalBody, {
      children: [eT && (0, s.jsx)("hr", {
        className: k.planSelectSeparatorUpper
      }), (0, s.jsx)(E.default, {
        isGift: z,
        plan: V
      }), (0, s.jsx)(h.default, {}), eN ? (0, s.jsx)(u.FormErrorBlock, {
        children: ep
      }) : (0, s.jsx)(m.PremiumSwitchPlanSelectBody, {
        planOptions: ec,
        eligibleForMultiMonthPlans: es,
        referralTrialOfferId: B,
        selectedPlanId: null == V ? void 0 : V.id,
        subscriptionPeriodEnd: null == eS ? void 0 : eS.subscriptionPeriodEnd,
        discountInvoiceItems: eu ? null == eS ? void 0 : eS.invoiceItems : void 0,
        handleClose: F
      }), eT && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("hr", {
          className: k.planSelectSeparatorLower
        }), (0, s.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: U.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: N.default.getArticleURL(y.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, s.jsx)(O.PaymentPortalFooter, {
      children: (0, s.jsx)(u.ModalFooter, {
        justify: p.default.Justify.BETWEEN,
        align: p.default.Align.CENTER,
        children: (0, s.jsx)(m.PremiumSwitchPlanSelectFooter, {
          onStepChange: v,
          onBackClick: () => v(R.Step.SKU_SELECT),
          showBackButton: null == j && null == D,
          planOptions: ec,
          shouldRenderUpdatedPaymentModal: eT,
          isTrial: er
        })
      })
    })]
  }))
}