n.d(s, {
  x: function() {
    return G
  }
}), n(47120);
var t = n(735250),
  i = n(470079),
  l = n(512722),
  r = n.n(l),
  C = n(399606),
  a = n(481060),
  o = n(975608),
  d = n(711459),
  _ = n(374649),
  u = n(424082),
  c = n(650032),
  p = n(439017),
  x = n(104494),
  L = n(639119),
  I = n(642530),
  E = n(248042),
  h = n(381507),
  f = n(314404),
  M = n(230927),
  N = n(594174),
  T = n(509545),
  j = n(285952),
  A = n(669079),
  S = n(63063),
  g = n(74538),
  R = n(987209),
  m = n(598),
  P = n(409813),
  O = n(51499),
  Z = n(456251),
  U = n(614277),
  y = n(809144),
  H = n(698708),
  v = n(981631),
  b = n(474936),
  B = n(689938),
  F = n(269306);

function G(e) {
  var s, n, l, G;
  let {
    handleStepChange: k,
    initialPlanId: w,
    subscriptionTier: D,
    trialId: W,
    referralTrialOfferId: Y,
    handleClose: K,
    planGroup: V
  } = e, {
    activeSubscription: X,
    hasFetchedSubscriptions: Q,
    paymentSourceId: q,
    paymentSources: J,
    selectedSkuId: z,
    selectedPlan: $,
    step: ee,
    defaultPlanId: es,
    priceOptions: en,
    isPremium: et,
    setAnnualDiscountInvoicePreview: ei
  } = (0, m.usePaymentContext)(), {
    isGift: el,
    giftRecipient: er,
    giftMessage: eC
  } = (0, R.wD)(), ea = null != q ? J[q] : null, {
    newPlans: eo
  } = d.ZP.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), ed = (0, C.e7)([N.default], () => N.default.getCurrentUser()), e_ = !el && null != z && z === b.Si.TIER_2 && null != ed && ed.hasHadPremium() && Q && null == X && (0, d.aQ)(ea), eu = (0, L.N)(Y);
  (0, u.Uh)("PremiumPaymentPlanSelectStep", null == eu);
  let ec = !el && null != eu && null != z && b.nG[eu.trial_id].skus.includes(z),
    ep = (0, x.Ng)(),
    ex = null == ep ? void 0 : null === (s = ep.discount) || void 0 === s ? void 0 : s.plan_ids.some(e => b.GP[e].skuId === z),
    eL = !el && null != ep && null != z && ex,
    eI = null !== (n = ec || eL) && void 0 !== n && n,
    {
      defaultToMonthlyPlan: eE
    } = p.k.useExperiment({
      location: "d17fd6_4"
    }, {
      autoTrackExposure: !1
    }),
    eh = i.useMemo(() => (0, g.V7)({
      skuId: z,
      isPremium: et,
      multiMonthPlans: e_ ? eo : [],
      currentSubscription: X,
      isGift: el,
      isEligibleForTrial: ec,
      defaultPlanId: es,
      defaultToMonthlyPlan: eE
    }), [z, et, eo, X, e_, el, ec, es, eE]),
    ef = eL && eh.includes(b.Xh.PREMIUM_MONTH_TIER_2) ? b.Xh.PREMIUM_MONTH_TIER_2 : eh[0],
    eM = (0, C.e7)([T.Z], () => T.Z.get(ef)),
    eN = [{
      planId: null == eM ? void 0 : eM.id,
      quantity: 1
    }],
    [eT, ej] = i.useState(eI),
    [eA, eS] = (0, _.ED)({
      items: eN,
      renewal: !1,
      preventFetch: !eI,
      applyEntitlements: !0,
      trialId: W,
      paymentSourceId: en.paymentSourceId,
      currency: en.currency
    }),
    {
      annualInvoicePreview: eg,
      annualInvoicePreviewError: eR,
      isEligibleForAnnualDiscount: em
    } = (0, M.g)({
      priceOptions: en,
      preventFetch: !eh.includes(b.Xh.PREMIUM_YEAR_TIER_2),
      selectedSkuId: z,
      isGift: el,
      planGroup: V,
      activeSubscription: X
    });
  null != eg && ei(eg), i.useEffect(() => {
    eI && ej((null == eA ? void 0 : eA.subscriptionPeriodEnd) == null)
  }, [eA, eI]), (0, o.Z)("Payment Modal Plan Select Step", eT, 5, {
    proratedInvoicePreview: eA,
    annualInvoicePreview: eg,
    proratedInvoiceError: eS,
    annualInvoicePreviewError: eR,
    isEligibleForOffer: eI
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eP = em && null == eR,
    eO = null !== (G = null !== (l = null == eS ? void 0 : eS.message) && void 0 !== l ? l : null == eR ? void 0 : eR.message) && void 0 !== G ? G : B.Z.Messages.ERROR_GENERIC_TITLE,
    eZ = eI && null == eS || eP,
    eU = eI && null != eS || em && null != eR,
    ey = eZ && null == X && !!eI && (null == eA ? void 0 : eA.subscriptionPeriodEnd) == null || eP && (null == eg ? void 0 : eg.subscriptionPeriodEnd) == null,
    {
      enabled: eH
    } = c._.useExperiment({
      location: "PremiumPaymentPlanSelectStep"
    }, {
      autoTrackExposure: !1
    }),
    ev = !el && (null == eM ? void 0 : eM.skuId) === b.Si.TIER_2 && (null == eu ? void 0 : eu.referrer_id) != null && eH,
    eb = (0, E.Vi)() && !el && (null == eM ? void 0 : eM.skuId) === b.Si.TIER_2,
    eB = null;
  return (ev ? eB = (0, t.jsx)(h.Z, {}) : eb && (eB = (0, t.jsx)(I.Z, {})), ey) ? (0, t.jsx)(Z.Z, {}) : (r()(null != ee, "Step should be set"), r()(eh.length > 0, "Premium plan options should be set"), (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(y.P, {
      giftMessage: eC
    }), !(el && (0, A.pO)(er)) && (0, t.jsx)(O.Z, {
      isEligibleForTrial: ec
    }), (0, t.jsxs)(U.C3, {
      children: [eZ && (0, t.jsx)("hr", {
        className: F.planSelectSeparatorUpper
      }), eB, (0, t.jsx)(H.Z, {}), eU ? (0, t.jsx)(a.FormErrorBlock, {
        children: eO
      }) : (0, t.jsx)(f.O, {
        planOptions: eh,
        eligibleForMultiMonthPlans: e_,
        referralTrialOfferId: Y,
        selectedPlanId: null == $ ? void 0 : $.id,
        subscriptionPeriodEnd: null == eA ? void 0 : eA.subscriptionPeriodEnd,
        discountInvoiceItems: eL ? null == eA ? void 0 : eA.invoiceItems : void 0,
        handleClose: K
      }), eZ && (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("hr", {
          className: F.planSelectSeparatorLower
        }), (0, t.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: B.Z.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: S.Z.getArticleURL(v.BhN.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, t.jsx)(U.O3, {
      children: (0, t.jsx)(a.ModalFooter, {
        justify: j.Z.Justify.BETWEEN,
        align: j.Z.Align.CENTER,
        children: (0, t.jsx)(f.M, {
          onStepChange: k,
          onBackClick: () => k(P.h8.SKU_SELECT),
          showBackButton: null == w && null == D,
          planOptions: eh,
          shouldRenderUpdatedPaymentModal: eZ,
          isTrial: ec
        })
      })
    })]
  }))
}