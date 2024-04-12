"use strict";
s.r(t), s.d(t, {
  PremiumPaymentModal: function() {
    return O
  },
  STEPS: function() {
    return k
  },
  default: function() {
    return R
  }
}), s("411104"), s("47120");
var n = s("735250"),
  r = s("470079"),
  i = s("442837"),
  l = s("570140"),
  a = s("821849"),
  o = s("100527"),
  C = s("906732"),
  u = s("509545"),
  d = s("78839"),
  c = s("669079"),
  p = s("987209"),
  f = s("598"),
  x = s("409813"),
  _ = s("791785"),
  m = s("276442"),
  L = s("793541"),
  h = s("274247"),
  S = s("380898"),
  j = s("710094"),
  E = s("293858"),
  P = s("614223"),
  g = s("174827"),
  y = s("846464"),
  M = s("184160"),
  A = s("48175"),
  T = s("981631"),
  I = s("474936"),
  N = s("689938");
let b = [x.Step.PLAN_SELECT, x.Step.ADD_PAYMENT_STEPS, x.Step.REVIEW, x.Step.CONFIRM];

function O(e) {
  let {
    analyticsLocation: t,
    analyticsObject: s,
    analyticsSourceLocation: i,
    onComplete: o,
    transitionState: d,
    initialPlanId: m,
    subscriptionTier: L,
    onClose: h,
    trialId: S,
    trialFooterMessageOverride: j,
    reviewWarningMessage: E,
    openInvoiceId: P,
    onSubscriptionConfirmation: g,
    renderPurchaseConfirmation: y,
    postSuccessGuild: M,
    followupSKUInfo: A,
    renderHeader: N,
    applicationId: b,
    guildId: O,
    referralTrialOfferId: v,
    skuId: U,
    returnRef: k,
    skipConfirm: R = !1
  } = e, {
    analyticsLocations: B
  } = (0, C.default)();
  r.useEffect(() => {
    !u.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)())
  }, []);
  let {
    step: H
  } = (0, f.usePaymentContext)(), {
    isGift: G,
    giftMessage: w,
    giftRecipient: F
  } = (0, p.useGiftContext)(), D = G && (0, c.shouldShowCustomGiftExperience)(F) && H === x.Step.PLAN_SELECT;
  return (0, n.jsx)(_.PaymentModal, {
    analyticsLocations: B,
    analyticsLocation: t,
    analyticsObject: s,
    analyticsSourceLocation: i,
    analyticsSubscriptionType: T.SubscriptionTypes.PREMIUM,
    onComplete: o,
    transitionState: d,
    initialPlanId: m,
    giftMessage: w,
    subscriptionTier: L,
    onClose: h,
    trialId: S,
    isGift: G,
    trialFooterMessageOverride: j,
    reviewWarningMessage: E,
    planGroup: I.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: P,
    onSubscriptionConfirmation: g,
    renderPurchaseConfirmation: y,
    postSuccessGuild: M,
    followupSKUInfo: A,
    renderHeader: N,
    applicationId: b,
    guildId: O,
    referralTrialOfferId: v,
    skuId: U,
    shakeWhilePurchasing: !0,
    isLargeModal: D,
    returnRef: k,
    skipConfirm: R
  })
}

function v(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: t,
    selectedSkuId: s
  } = (0, f.usePaymentContext)(), {
    isGift: n
  } = (0, p.useGiftContext)();
  return (0, P.inOneStepSubscriptionCheckout)({
    isTrial: null != e && e,
    isGift: n,
    selectedSkuId: s,
    startedPaymentFlowWithPaymentSources: t.current
  })
}

function U(e) {
  let {
    initialPlanId: t,
    handleStepChange: s,
    referralTrialOfferId: r
  } = e, {
    paymentSources: i,
    selectedSkuId: l
  } = (0, f.usePaymentContext)(), {
    isGift: a
  } = (0, p.useGiftContext)(), o = v((0, A.default)({
    isGift: a,
    skuId: l,
    referralTrialOfferId: r
  }));
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)(m.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: b,
      onReturn: () => {
        let e = Object.values(i).length < 1 && null == t ? x.Step.PLAN_SELECT : x.Step.REVIEW;
        o && (e = x.Step.REVIEW), s(e, {
          trackedFromStep: x.Step.PAYMENT_TYPE
        })
      }
    })
  })
}
let k = [{
  key: null,
  renderStep: e => (0, n.jsx)(_.PaymentPredicateStep, {
    ...e
  })
}, {
  key: x.Step.SKU_SELECT,
  renderStep: e => (0, n.jsx)(y.PremiumPaymentSKUSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: x.Step.WHAT_YOU_LOSE,
  renderStep: e => (0, n.jsx)(M.PremiumPaymentWhatYouLoseStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: x.Step.PLAN_SELECT,
  renderStep: e => (0, n.jsx)(g.PremiumPaymentPlanSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => v(e) ? null : N.default.Messages.BILLING_STEP_SELECT_PLAN
  }
}, {
  key: x.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)(U, {
      ...e
    })
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => v(e) ? null : N.default.Messages.BILLING_STEP_PAYMENT
  }
}, {
  key: x.Step.AWAITING_BROWSER_CHECKOUT,
  renderStep: e => (0, n.jsx)(h.default, {
    ...e
  })
}, {
  key: x.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, n.jsx)(S.default, {})
}, {
  key: x.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, n.jsx)(L.default, {})
}, {
  key: x.Step.REVIEW,
  renderStep: e => (0, n.jsx)(j.PaymentModalReviewStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => v(e) ? N.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : N.default.Messages.BILLING_STEP_REVIEW
  }
}, {
  key: x.Step.CONFIRM,
  renderStep: e => (0, n.jsx)(E.PremiumPaymentConfirmStep, {
    ...e
  })
}];

function R(e) {
  let t = (0, i.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
    {
      analyticsLocations: s
    } = (0, C.default)(e.analyticsLocations, o.default.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: r,
      isGift: l,
      giftRecipient: a,
      giftMessage: u,
      loadId: c,
      defaultPlanId: x,
      referralCode: _
    } = e;
  if (null != r && !Object.values(I.PremiumSubscriptionSKUs).includes(r)) throw Error("subscriptionTier must be a premium subscription");
  return (0, n.jsx)(C.AnalyticsLocationProvider, {
    value: s,
    children: (0, n.jsx)(f.PaymentContextProvider, {
      loadId: c,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: k,
      skuIDs: [...I.ACTIVE_PREMIUM_SKUS],
      isGift: l,
      defaultPlanId: x,
      referralCode: _,
      children: (0, n.jsx)(p.GiftContextProvider, {
        isGift: l,
        giftRecipient: null == a ? void 0 : a,
        giftMessage: u,
        children: (0, n.jsx)(O, {
          ...e
        })
      })
    })
  })
}