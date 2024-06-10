"use strict";
s.r(t), s.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return k
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
  m = s("642530"),
  L = s("248042"),
  E = s("381507"),
  S = s("314404"),
  I = s("230927"),
  h = s("594174"),
  P = s("509545"),
  M = s("285952"),
  T = s("669079"),
  N = s("63063"),
  j = s("74538"),
  A = s("987209"),
  R = s("598"),
  g = s("409813"),
  O = s("51499"),
  y = s("456251"),
  U = s("614277"),
  b = s("809144"),
  v = s("698708"),
  B = s("981631"),
  H = s("474936"),
  F = s("689938"),
  G = s("115368");

function k(e) {
  var t, s, r, k;
  let {
    handleStepChange: D,
    initialPlanId: w,
    subscriptionTier: W,
    trialId: Y,
    referralTrialOfferId: Z,
    handleClose: K,
    planGroup: V
  } = e, {
    activeSubscription: z,
    hasFetchedSubscriptions: J,
    paymentSourceId: q,
    paymentSources: Q,
    selectedSkuId: X,
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
  } = (0, A.useGiftContext)(), eo = null != q ? Q[q] : null, {
    newPlans: eC
  } = u.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), eu = (0, a.useStateFromStores)([h.default], () => h.default.getCurrentUser()), ed = !er && null != X && X === H.PremiumSubscriptionSKUs.TIER_2 && null != eu && eu.hasHadPremium() && J && null == z && (0, u.isPaymentSourceEligibleForMultiMonthPlans)(eo), ec = (0, x.usePremiumTrialOffer)(Z);
  (0, c.useAnnualDiscountExperiment)("PremiumPaymentPlanSelectStep", null == ec);
  let ep = !er && null != ec && null != X && (0, H.SubscriptionTrials)[ec.trial_id].skus.includes(X),
    e_ = (0, f.usePremiumDiscountOffer)(),
    ef = null == e_ ? void 0 : null === (t = e_.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => H.SubscriptionPlanInfo[e].skuId === X),
    ex = !er && null != e_ && null != X && ef,
    em = null !== (s = ep || ex) && void 0 !== s && s,
    {
      defaultToMonthlyPlan: eL
    } = _.TrialRedemptionDefaultPlanExperiment.useExperiment({
      location: "d17fd6_4"
    }, {
      autoTrackExposure: !1
    }),
    eE = i.useMemo(() => (0, j.getPremiumPlanOptions)({
      skuId: X,
      isPremium: en,
      multiMonthPlans: ed ? eC : [],
      currentSubscription: z,
      isGift: er,
      isEligibleForTrial: ep,
      defaultPlanId: et,
      defaultToMonthlyPlan: eL
    }), [X, en, eC, z, ed, er, ep, et, eL]),
    eS = ex && eE.includes(H.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? H.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : eE[0],
    eI = (0, a.useStateFromStores)([P.default], () => P.default.get(eS)),
    eh = [{
      planId: null == eI ? void 0 : eI.id,
      quantity: 1
    }],
    [eP, eM] = i.useState(em),
    [eT, eN] = (0, d.useSubscriptionInvoicePreview)({
      items: eh,
      renewal: !1,
      preventFetch: !em,
      applyEntitlements: !0,
      trialId: Y,
      paymentSourceId: es.paymentSourceId,
      currency: es.currency
    }),
    {
      annualInvoicePreview: ej,
      annualInvoicePreviewError: eA,
      isEligibleForAnnualDiscount: eR
    } = (0, I.useGetAnnualDiscountInvoicePreview)({
      priceOptions: es,
      preventFetch: !eE.includes(H.SubscriptionPlans.PREMIUM_YEAR_TIER_2),
      selectedSkuId: X,
      isGift: er,
      planGroup: V,
      activeSubscription: z
    });
  null != ej && ei(ej), i.useEffect(() => {
    em && eM((null == eT ? void 0 : eT.subscriptionPeriodEnd) == null)
  }, [eT, em]), (0, C.default)("Payment Modal Plan Select Step", eP, 5, {
    proratedInvoicePreview: eT,
    annualInvoicePreview: ej,
    proratedInvoiceError: eN,
    annualInvoicePreviewError: eA,
    isEligibleForOffer: em
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eg = eR && null == eA,
    eO = null !== (k = null !== (r = null == eN ? void 0 : eN.message) && void 0 !== r ? r : null == eA ? void 0 : eA.message) && void 0 !== k ? k : F.default.Messages.ERROR_GENERIC_TITLE,
    ey = em && null == eN || eg,
    eU = em && null != eN || eR && null != eA,
    eb = ey && null == z && !!em && (null == eT ? void 0 : eT.subscriptionPeriodEnd) == null || eg && (null == ej ? void 0 : ej.subscriptionPeriodEnd) == null,
    {
      enabled: ev
    } = p.ReferralProgramRecipient.useExperiment({
      location: "PremiumPaymentPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    eB = !er && (null == eI ? void 0 : eI.skuId) === H.PremiumSubscriptionSKUs.TIER_2 && (null == ec ? void 0 : ec.referrer_id) != null && ev,
    eH = (0, L.useIsEligibleForBogoPromotion)() && !er && (null == eI ? void 0 : eI.skuId) === H.PremiumSubscriptionSKUs.TIER_2,
    eF = null;
  return (eB ? eF = (0, n.jsx)(E.default, {}) : eH && (eF = (0, n.jsx)(m.default, {})), eb) ? (0, n.jsx)(y.default, {}) : (l()(null != ee, "Step should be set"), l()(eE.length > 0, "Premium plan options should be set"), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(b.GiftNote, {
      giftMessage: ea
    }), !(er && (0, T.shouldShowCustomGiftExperience)(el)) && (0, n.jsx)(O.default, {
      isEligibleForTrial: ep
    }), (0, n.jsxs)(U.PaymentPortalBody, {
      children: [ey && (0, n.jsx)("hr", {
        className: G.planSelectSeparatorUpper
      }), eF, (0, n.jsx)(v.default, {}), eU ? (0, n.jsx)(o.FormErrorBlock, {
        children: eO
      }) : (0, n.jsx)(S.PremiumSwitchPlanSelectBody, {
        planOptions: eE,
        eligibleForMultiMonthPlans: ed,
        referralTrialOfferId: Z,
        selectedPlanId: null == $ ? void 0 : $.id,
        subscriptionPeriodEnd: null == eT ? void 0 : eT.subscriptionPeriodEnd,
        discountInvoiceItems: ex ? null == eT ? void 0 : eT.invoiceItems : void 0,
        handleClose: K
      }), ey && (0, n.jsxs)(n.Fragment, {
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
        children: (0, n.jsx)(S.PremiumSwitchPlanSelectFooter, {
          onStepChange: D,
          onBackClick: () => D(g.Step.SKU_SELECT),
          showBackButton: null == w && null == W,
          planOptions: eE,
          shouldRenderUpdatedPaymentModal: ey,
          isTrial: ep
        })
      })
    })]
  }))
}