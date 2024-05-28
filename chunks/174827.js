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
  C = n("481060"),
  o = n("975608"),
  u = n("711459"),
  d = n("374649"),
  p = n("424082"),
  c = n("650032"),
  f = n("439017"),
  x = n("104494"),
  _ = n("639119"),
  L = n("642530"),
  m = n("248042"),
  h = n("381507"),
  S = n("314404"),
  j = n("230927"),
  E = n("594174"),
  P = n("509545"),
  y = n("285952"),
  g = n("669079"),
  A = n("63063"),
  M = n("74538"),
  I = n("987209"),
  T = n("598"),
  v = n("409813"),
  b = n("51499"),
  U = n("456251"),
  O = n("614277"),
  N = n("809144"),
  R = n("698708"),
  k = n("981631"),
  B = n("474936"),
  H = n("689938"),
  w = n("115368");

function G(e) {
  var t, n, r, G;
  let {
    handleStepChange: F,
    initialPlanId: Z,
    subscriptionTier: D,
    trialId: W,
    referralTrialOfferId: K,
    handleClose: Y,
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
  } = (0, I.useGiftContext)(), eC = null != q ? X[q] : null, {
    newPlans: eo
  } = u.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), eu = (0, a.useStateFromStores)([E.default], () => E.default.getCurrentUser()), ed = !er && null != Q && Q === B.PremiumSubscriptionSKUs.TIER_2 && null != eu && eu.hasHadPremium() && J && null == z && (0, u.isPaymentSourceEligibleForMultiMonthPlans)(eC), ep = (0, _.usePremiumTrialOffer)(K);
  (0, p.useAnnualDiscountExperiment)("PremiumPaymentPlanSelectStep", null == ep);
  let ec = !er && null != ep && null != Q && (0, B.SubscriptionTrials)[ep.trial_id].skus.includes(Q),
    ef = (0, x.usePremiumDiscountOffer)(),
    ex = null == ef ? void 0 : null === (t = ef.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === Q),
    e_ = !er && null != ef && null != Q && ex,
    eL = null !== (n = ec || e_) && void 0 !== n && n,
    {
      defaultToMonthlyPlan: em
    } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
      location: "d17fd6_4"
    }, {
      autoTrackExposure: !1
    }),
    eh = i.useMemo(() => (0, M.getPremiumPlanOptions)({
      skuId: Q,
      isPremium: es,
      multiMonthPlans: ed ? eo : [],
      currentSubscription: z,
      isGift: er,
      isEligibleForTrial: ec,
      defaultPlanId: et,
      defaultToMonthlyPlan: em
    }), [Q, es, eo, z, ed, er, ec, et, em]),
    eS = e_ && eh.includes(B.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? B.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : eh[0],
    ej = (0, a.useStateFromStores)([P.default], () => P.default.get(eS)),
    eE = [{
      planId: null == ej ? void 0 : ej.id,
      quantity: 1
    }],
    [eP, ey] = i.useState(eL),
    [eg, eA] = (0, d.useSubscriptionInvoicePreview)({
      items: eE,
      renewal: !1,
      preventFetch: !eL,
      applyEntitlements: !0,
      trialId: W,
      paymentSourceId: en.paymentSourceId,
      currency: en.currency
    }),
    {
      annualInvoicePreview: eM,
      annualInvoicePreviewError: eI,
      isEligibleForAnnualDiscount: eT
    } = (0, j.useGetAnnualDiscountInvoicePreview)({
      priceOptions: en,
      preventFetch: !eh.includes(B.SubscriptionPlans.PREMIUM_YEAR_TIER_2),
      selectedSkuId: Q,
      isGift: er,
      planGroup: V,
      activeSubscription: z
    });
  null != eM && ei(eM), i.useEffect(() => {
    eL && ey((null == eg ? void 0 : eg.subscriptionPeriodEnd) == null)
  }, [eg, eL]), (0, o.default)("Payment Modal Plan Select Step", eP, 5, {
    proratedInvoicePreview: eg,
    annualInvoicePreview: eM,
    proratedInvoiceError: eA,
    annualInvoicePreviewError: eI,
    isEligibleForOffer: eL
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let ev = eT && null == eI,
    eb = null !== (G = null !== (r = null == eA ? void 0 : eA.message) && void 0 !== r ? r : null == eI ? void 0 : eI.message) && void 0 !== G ? G : H.default.Messages.ERROR_GENERIC_TITLE,
    eU = eL && null == eA || ev,
    eO = eL && null != eA || eT && null != eI,
    eN = eU && null == z && !!eL && (null == eg ? void 0 : eg.subscriptionPeriodEnd) == null || ev && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
    {
      enabled: eR
    } = c.ReferralProgramRecipient.useExperiment({
      location: "PremiumPaymentPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    ek = !er && (null == ej ? void 0 : ej.skuId) === B.PremiumSubscriptionSKUs.TIER_2 && (null == ep ? void 0 : ep.referrer_id) != null && eR,
    eB = (0, m.useIsEligibleForBogoPromotion)() && !er && (null == ej ? void 0 : ej.skuId) === B.PremiumSubscriptionSKUs.TIER_2,
    eH = null;
  return (ek ? eH = (0, s.jsx)(h.default, {}) : eB && (eH = (0, s.jsx)(L.default, {})), eN) ? (0, s.jsx)(U.default, {}) : (l()(null != ee, "Step should be set"), l()(eh.length > 0, "Premium plan options should be set"), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(N.GiftNote, {
      giftMessage: ea
    }), !(er && (0, g.shouldShowCustomGiftExperience)(el)) && (0, s.jsx)(b.default, {
      isEligibleForTrial: ec
    }), (0, s.jsxs)(O.PaymentPortalBody, {
      children: [eU && (0, s.jsx)("hr", {
        className: w.planSelectSeparatorUpper
      }), eH, (0, s.jsx)(R.default, {}), eO ? (0, s.jsx)(C.FormErrorBlock, {
        children: eb
      }) : (0, s.jsx)(S.PremiumSwitchPlanSelectBody, {
        planOptions: eh,
        eligibleForMultiMonthPlans: ed,
        referralTrialOfferId: K,
        selectedPlanId: null == $ ? void 0 : $.id,
        subscriptionPeriodEnd: null == eg ? void 0 : eg.subscriptionPeriodEnd,
        discountInvoiceItems: e_ ? null == eg ? void 0 : eg.invoiceItems : void 0,
        handleClose: Y
      }), eU && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("hr", {
          className: w.planSelectSeparatorLower
        }), (0, s.jsx)(C.Text, {
          variant: "text-xs/normal",
          children: H.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: A.default.getArticleURL(k.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, s.jsx)(O.PaymentPortalFooter, {
      children: (0, s.jsx)(C.ModalFooter, {
        justify: y.default.Justify.BETWEEN,
        align: y.default.Align.CENTER,
        children: (0, s.jsx)(S.PremiumSwitchPlanSelectFooter, {
          onStepChange: F,
          onBackClick: () => F(v.Step.SKU_SELECT),
          showBackButton: null == Z && null == D,
          planOptions: eh,
          shouldRenderUpdatedPaymentModal: eU,
          isTrial: ec
        })
      })
    })]
  }))
}