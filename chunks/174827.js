"use strict";
s.r(t), s.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return G
  }
}), s("47120");
var n = s("735250"),
  i = s("470079"),
  r = s("512722"),
  l = s.n(r),
  a = s("399606"),
  o = s("481060"),
  u = s("975608"),
  C = s("711459"),
  d = s("374649"),
  c = s("424082"),
  p = s("650032"),
  _ = s("439017"),
  f = s("104494"),
  m = s("639119"),
  x = s("642530"),
  E = s("248042"),
  L = s("381507"),
  S = s("314404"),
  I = s("230927"),
  h = s("594174"),
  P = s("509545"),
  T = s("285952"),
  M = s("669079"),
  N = s("63063"),
  j = s("74538"),
  A = s("987209"),
  R = s("598"),
  g = s("409813"),
  y = s("51499"),
  O = s("456251"),
  b = s("614277"),
  U = s("809144"),
  v = s("698708"),
  k = s("981631"),
  B = s("474936"),
  F = s("689938"),
  H = s("115368");

function G(e) {
  var t, s, r, G;
  let {
    handleStepChange: D,
    initialPlanId: w,
    subscriptionTier: W,
    trialId: Y,
    referralTrialOfferId: K,
    handleClose: Z,
    planGroup: V
  } = e, {
    activeSubscription: J,
    hasFetchedSubscriptions: z,
    paymentSourceId: q,
    paymentSources: X,
    selectedSkuId: Q,
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
  } = (0, A.useGiftContext)(), eo = null != q ? X[q] : null, {
    newPlans: eu
  } = C.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), eC = (0, a.useStateFromStores)([h.default], () => h.default.getCurrentUser()), ed = !er && null != Q && Q === B.PremiumSubscriptionSKUs.TIER_2 && null != eC && eC.hasHadPremium() && z && null == J && (0, C.isPaymentSourceEligibleForMultiMonthPlans)(eo), ec = (0, m.usePremiumTrialOffer)(K);
  (0, c.useAnnualDiscountExperiment)("PremiumPaymentPlanSelectStep", null == ec);
  let ep = !er && null != ec && null != Q && (0, B.SubscriptionTrials)[ec.trial_id].skus.includes(Q),
    e_ = (0, f.usePremiumDiscountOffer)(),
    ef = null == e_ ? void 0 : null === (t = e_.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === Q),
    em = !er && null != e_ && null != Q && ef,
    ex = null !== (s = ep || em) && void 0 !== s && s,
    {
      defaultToMonthlyPlan: eE
    } = _.TrialRedemptionDefaultPlanExperiment.useExperiment({
      location: "d17fd6_4"
    }, {
      autoTrackExposure: !1
    }),
    eL = i.useMemo(() => (0, j.getPremiumPlanOptions)({
      skuId: Q,
      isPremium: en,
      multiMonthPlans: ed ? eu : [],
      currentSubscription: J,
      isGift: er,
      isEligibleForTrial: ep,
      defaultPlanId: et,
      defaultToMonthlyPlan: eE
    }), [Q, en, eu, J, ed, er, ep, et, eE]),
    eS = em && eL.includes(B.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? B.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : eL[0],
    eI = (0, a.useStateFromStores)([P.default], () => P.default.get(eS)),
    eh = [{
      planId: null == eI ? void 0 : eI.id,
      quantity: 1
    }],
    [eP, eT] = i.useState(ex),
    [eM, eN] = (0, d.useSubscriptionInvoicePreview)({
      items: eh,
      renewal: !1,
      preventFetch: !ex,
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
      preventFetch: !eL.includes(B.SubscriptionPlans.PREMIUM_YEAR_TIER_2),
      selectedSkuId: Q,
      isGift: er,
      planGroup: V,
      activeSubscription: J
    });
  null != ej && ei(ej), i.useEffect(() => {
    ex && eT((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null)
  }, [eM, ex]), (0, u.default)("Payment Modal Plan Select Step", eP, 5, {
    proratedInvoicePreview: eM,
    annualInvoicePreview: ej,
    proratedInvoiceError: eN,
    annualInvoicePreviewError: eA,
    isEligibleForOffer: ex
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eg = eR && null == eA,
    ey = null !== (G = null !== (r = null == eN ? void 0 : eN.message) && void 0 !== r ? r : null == eA ? void 0 : eA.message) && void 0 !== G ? G : F.default.Messages.ERROR_GENERIC_TITLE,
    eO = ex && null == eN || eg,
    eb = ex && null != eN || eR && null != eA,
    eU = eO && null == J && !!ex && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null || eg && (null == ej ? void 0 : ej.subscriptionPeriodEnd) == null,
    {
      enabled: ev
    } = p.ReferralProgramRecipient.useExperiment({
      location: "PremiumPaymentPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    ek = !er && (null == eI ? void 0 : eI.skuId) === B.PremiumSubscriptionSKUs.TIER_2 && (null == ec ? void 0 : ec.referrer_id) != null && ev,
    eB = (0, E.useIsEligibleForBogoPromotion)() && !er && (null == eI ? void 0 : eI.skuId) === B.PremiumSubscriptionSKUs.TIER_2,
    eF = null;
  return (ek ? eF = (0, n.jsx)(L.default, {}) : eB && (eF = (0, n.jsx)(x.default, {})), eU) ? (0, n.jsx)(O.default, {}) : (l()(null != ee, "Step should be set"), l()(eL.length > 0, "Premium plan options should be set"), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(U.GiftNote, {
      giftMessage: ea
    }), !(er && (0, M.shouldShowCustomGiftExperience)(el)) && (0, n.jsx)(y.default, {
      isEligibleForTrial: ep
    }), (0, n.jsxs)(b.PaymentPortalBody, {
      children: [eO && (0, n.jsx)("hr", {
        className: H.planSelectSeparatorUpper
      }), eF, (0, n.jsx)(v.default, {}), eb ? (0, n.jsx)(o.FormErrorBlock, {
        children: ey
      }) : (0, n.jsx)(S.PremiumSwitchPlanSelectBody, {
        planOptions: eL,
        eligibleForMultiMonthPlans: ed,
        referralTrialOfferId: K,
        selectedPlanId: null == $ ? void 0 : $.id,
        subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
        discountInvoiceItems: em ? null == eM ? void 0 : eM.invoiceItems : void 0,
        handleClose: Z
      }), eO && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("hr", {
          className: H.planSelectSeparatorLower
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: F.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: N.default.getArticleURL(k.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, n.jsx)(b.PaymentPortalFooter, {
      children: (0, n.jsx)(o.ModalFooter, {
        justify: T.default.Justify.BETWEEN,
        align: T.default.Align.CENTER,
        children: (0, n.jsx)(S.PremiumSwitchPlanSelectFooter, {
          onStepChange: D,
          onBackClick: () => D(g.Step.SKU_SELECT),
          showBackButton: null == w && null == W,
          planOptions: eL,
          shouldRenderUpdatedPaymentModal: eO,
          isTrial: ep
        })
      })
    })]
  }))
}