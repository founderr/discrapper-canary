"use strict";
s.r(t), s.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return k
  }
}), s("47120");
var i = s("735250"),
  n = s("470079"),
  r = s("512722"),
  l = s.n(r),
  a = s("399606"),
  o = s("481060"),
  C = s("975608"),
  u = s("711459"),
  d = s("374649"),
  _ = s("424082"),
  p = s("650032"),
  c = s("439017"),
  f = s("104494"),
  x = s("639119"),
  L = s("642530"),
  E = s("248042"),
  S = s("381507"),
  m = s("314404"),
  I = s("230927"),
  P = s("594174"),
  M = s("509545"),
  T = s("285952"),
  h = s("669079"),
  N = s("63063"),
  A = s("74538"),
  j = s("987209"),
  R = s("598"),
  g = s("409813"),
  O = s("51499"),
  y = s("456251"),
  U = s("614277"),
  b = s("809144"),
  v = s("698708"),
  H = s("981631"),
  G = s("474936"),
  F = s("689938"),
  B = s("115368");

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
    activeSubscription: J,
    hasFetchedSubscriptions: z,
    paymentSourceId: q,
    paymentSources: Q,
    selectedSkuId: X,
    selectedPlan: $,
    step: ee,
    defaultPlanId: et,
    priceOptions: es,
    isPremium: ei,
    setAnnualDiscountInvoicePreview: en
  } = (0, R.usePaymentContext)(), {
    isGift: er,
    giftRecipient: el,
    giftMessage: ea
  } = (0, j.useGiftContext)(), eo = null != q ? Q[q] : null, {
    newPlans: eC
  } = u.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), eu = (0, a.useStateFromStores)([P.default], () => P.default.getCurrentUser()), ed = !er && null != X && X === G.PremiumSubscriptionSKUs.TIER_2 && null != eu && eu.hasHadPremium() && z && null == J && (0, u.isPaymentSourceEligibleForMultiMonthPlans)(eo), e_ = (0, x.usePremiumTrialOffer)(Z);
  (0, _.useAnnualDiscountExperiment)("PremiumPaymentPlanSelectStep", null == e_);
  let ep = !er && null != e_ && null != X && (0, G.SubscriptionTrials)[e_.trial_id].skus.includes(X),
    ec = (0, f.usePremiumDiscountOffer)(),
    ef = null == ec ? void 0 : null === (t = ec.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => G.SubscriptionPlanInfo[e].skuId === X),
    ex = !er && null != ec && null != X && ef,
    eL = null !== (s = ep || ex) && void 0 !== s && s,
    {
      defaultToMonthlyPlan: eE
    } = c.TrialRedemptionDefaultPlanExperiment.useExperiment({
      location: "d17fd6_4"
    }, {
      autoTrackExposure: !1
    }),
    eS = n.useMemo(() => (0, A.getPremiumPlanOptions)({
      skuId: X,
      isPremium: ei,
      multiMonthPlans: ed ? eC : [],
      currentSubscription: J,
      isGift: er,
      isEligibleForTrial: ep,
      defaultPlanId: et,
      defaultToMonthlyPlan: eE
    }), [X, ei, eC, J, ed, er, ep, et, eE]),
    em = ex && eS.includes(G.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? G.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : eS[0],
    eI = (0, a.useStateFromStores)([M.default], () => M.default.get(em)),
    eP = [{
      planId: null == eI ? void 0 : eI.id,
      quantity: 1
    }],
    [eM, eT] = n.useState(eL),
    [eh, eN] = (0, d.useSubscriptionInvoicePreview)({
      items: eP,
      renewal: !1,
      preventFetch: !eL,
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
      preventFetch: !eS.includes(G.SubscriptionPlans.PREMIUM_YEAR_TIER_2),
      selectedSkuId: X,
      isGift: er,
      planGroup: V,
      activeSubscription: J
    });
  null != eA && en(eA), n.useEffect(() => {
    eL && eT((null == eh ? void 0 : eh.subscriptionPeriodEnd) == null)
  }, [eh, eL]), (0, C.default)("Payment Modal Plan Select Step", eM, 5, {
    proratedInvoicePreview: eh,
    annualInvoicePreview: eA,
    proratedInvoiceError: eN,
    annualInvoicePreviewError: ej,
    isEligibleForOffer: eL
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eg = eR && null == ej,
    eO = null !== (k = null !== (r = null == eN ? void 0 : eN.message) && void 0 !== r ? r : null == ej ? void 0 : ej.message) && void 0 !== k ? k : F.default.Messages.ERROR_GENERIC_TITLE,
    ey = eL && null == eN || eg,
    eU = eL && null != eN || eR && null != ej,
    eb = ey && null == J && !!eL && (null == eh ? void 0 : eh.subscriptionPeriodEnd) == null || eg && (null == eA ? void 0 : eA.subscriptionPeriodEnd) == null,
    {
      enabled: ev
    } = p.ReferralProgramRecipient.useExperiment({
      location: "PremiumPaymentPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    eH = !er && (null == eI ? void 0 : eI.skuId) === G.PremiumSubscriptionSKUs.TIER_2 && (null == e_ ? void 0 : e_.referrer_id) != null && ev,
    eG = (0, E.useIsEligibleForBogoPromotion)() && !er && (null == eI ? void 0 : eI.skuId) === G.PremiumSubscriptionSKUs.TIER_2,
    eF = null;
  return (eH ? eF = (0, i.jsx)(S.default, {}) : eG && (eF = (0, i.jsx)(L.default, {})), eb) ? (0, i.jsx)(y.default, {}) : (l()(null != ee, "Step should be set"), l()(eS.length > 0, "Premium plan options should be set"), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(b.GiftNote, {
      giftMessage: ea
    }), !(er && (0, h.shouldShowCustomGiftExperience)(el)) && (0, i.jsx)(O.default, {
      isEligibleForTrial: ep
    }), (0, i.jsxs)(U.PaymentPortalBody, {
      children: [ey && (0, i.jsx)("hr", {
        className: B.planSelectSeparatorUpper
      }), eF, (0, i.jsx)(v.default, {}), eU ? (0, i.jsx)(o.FormErrorBlock, {
        children: eO
      }) : (0, i.jsx)(m.PremiumSwitchPlanSelectBody, {
        planOptions: eS,
        eligibleForMultiMonthPlans: ed,
        referralTrialOfferId: Z,
        selectedPlanId: null == $ ? void 0 : $.id,
        subscriptionPeriodEnd: null == eh ? void 0 : eh.subscriptionPeriodEnd,
        discountInvoiceItems: ex ? null == eh ? void 0 : eh.invoiceItems : void 0,
        handleClose: K
      }), ey && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("hr", {
          className: B.planSelectSeparatorLower
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: F.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: N.default.getArticleURL(H.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, i.jsx)(U.PaymentPortalFooter, {
      children: (0, i.jsx)(o.ModalFooter, {
        justify: T.default.Justify.BETWEEN,
        align: T.default.Align.CENTER,
        children: (0, i.jsx)(m.PremiumSwitchPlanSelectFooter, {
          onStepChange: D,
          onBackClick: () => D(g.Step.SKU_SELECT),
          showBackButton: null == w && null == W,
          planOptions: eS,
          shouldRenderUpdatedPaymentModal: ey,
          isTrial: ep
        })
      })
    })]
  }))
}