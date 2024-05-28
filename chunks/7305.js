"use strict";
n.r(t), n.d(t, {
  PremiumPaymentModal: function() {
    return U
  },
  STEPS: function() {
    return R
  },
  default: function() {
    return k
  }
}), n("411104"), n("47120");
var s = n("735250"),
  i = n("470079"),
  r = n("442837"),
  l = n("570140"),
  a = n("821849"),
  C = n("100527"),
  o = n("906732"),
  u = n("509545"),
  d = n("78839"),
  p = n("669079"),
  c = n("987209"),
  f = n("598"),
  x = n("409813"),
  _ = n("791785"),
  L = n("276442"),
  m = n("793541"),
  h = n("274247"),
  S = n("380898"),
  j = n("710094"),
  E = n("293858"),
  P = n("614223"),
  y = n("174827"),
  g = n("846464"),
  A = n("184160"),
  M = n("48175"),
  I = n("981631"),
  T = n("474936"),
  v = n("689938");
let b = [x.Step.PLAN_SELECT, x.Step.ADD_PAYMENT_STEPS, x.Step.REVIEW, x.Step.CONFIRM];

function U(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: r,
    onComplete: C,
    transitionState: d,
    initialPlanId: L,
    subscriptionTier: m,
    onClose: h,
    trialId: S,
    trialFooterMessageOverride: j,
    reviewWarningMessage: E,
    openInvoiceId: P,
    onSubscriptionConfirmation: y,
    renderPurchaseConfirmation: g,
    postSuccessGuild: A,
    followupSKUInfo: M,
    renderHeader: v,
    applicationId: b,
    guildId: U,
    referralTrialOfferId: O,
    skuId: N,
    returnRef: R,
    skipConfirm: k = !1
  } = e, {
    analyticsLocations: B
  } = (0, o.default)();
  i.useEffect(() => {
    !u.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)())
  }, []);
  let {
    step: H
  } = (0, f.usePaymentContext)(), {
    isGift: w,
    giftMessage: G,
    giftRecipient: F
  } = (0, c.useGiftContext)(), Z = w && (0, p.shouldShowCustomGiftExperience)(F) && H === x.Step.PLAN_SELECT;
  return (0, s.jsx)(_.PaymentModal, {
    analyticsLocations: B,
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: r,
    analyticsSubscriptionType: I.SubscriptionTypes.PREMIUM,
    onComplete: C,
    transitionState: d,
    initialPlanId: L,
    giftMessage: G,
    subscriptionTier: m,
    onClose: h,
    trialId: S,
    isGift: w,
    trialFooterMessageOverride: j,
    reviewWarningMessage: E,
    planGroup: T.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: P,
    onSubscriptionConfirmation: y,
    renderPurchaseConfirmation: g,
    postSuccessGuild: A,
    followupSKUInfo: M,
    renderHeader: v,
    applicationId: b,
    guildId: U,
    referralTrialOfferId: O,
    skuId: N,
    shakeWhilePurchasing: !0,
    isLargeModal: Z,
    returnRef: R,
    skipConfirm: k
  })
}

function O(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: t,
    selectedSkuId: n
  } = (0, f.usePaymentContext)(), {
    isGift: s
  } = (0, c.useGiftContext)();
  return (0, P.inOneStepSubscriptionCheckout)({
    isTrial: null != e && e,
    isGift: s,
    selectedSkuId: n,
    startedPaymentFlowWithPaymentSources: t.current
  })
}

function N(e) {
  let {
    initialPlanId: t,
    handleStepChange: n,
    referralTrialOfferId: i
  } = e, {
    paymentSources: r,
    selectedSkuId: l
  } = (0, f.usePaymentContext)(), {
    isGift: a
  } = (0, c.useGiftContext)(), C = O((0, M.default)({
    isGift: a,
    skuId: l,
    referralTrialOfferId: i
  }));
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(L.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: b,
      onReturn: () => {
        let e = Object.values(r).length < 1 && null == t ? x.Step.PLAN_SELECT : x.Step.REVIEW;
        C && (e = x.Step.REVIEW), n(e, {
          trackedFromStep: x.Step.PAYMENT_TYPE
        })
      }
    })
  })
}
let R = [{
  key: null,
  renderStep: e => (0, s.jsx)(_.PaymentPredicateStep, {
    ...e
  })
}, {
  key: x.Step.SKU_SELECT,
  renderStep: e => (0, s.jsx)(g.PremiumPaymentSKUSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: x.Step.WHAT_YOU_LOSE,
  renderStep: e => (0, s.jsx)(A.PremiumPaymentWhatYouLoseStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: x.Step.PLAN_SELECT,
  renderStep: e => (0, s.jsx)(y.PremiumPaymentPlanSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => O(e) ? null : v.default.Messages.BILLING_STEP_SELECT_PLAN
  }
}, {
  key: x.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(N, {
      ...e
    })
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => O(e) ? null : v.default.Messages.BILLING_STEP_PAYMENT
  }
}, {
  key: x.Step.AWAITING_BROWSER_CHECKOUT,
  renderStep: e => (0, s.jsx)(h.default, {
    ...e
  })
}, {
  key: x.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, s.jsx)(S.default, {})
}, {
  key: x.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, s.jsx)(m.default, {})
}, {
  key: x.Step.REVIEW,
  renderStep: e => (0, s.jsx)(j.PaymentModalReviewStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => O(e) ? v.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : v.default.Messages.BILLING_STEP_REVIEW
  }
}, {
  key: x.Step.CONFIRM,
  renderStep: e => (0, s.jsx)(E.PremiumPaymentConfirmStep, {
    ...e
  })
}];

function k(e) {
  let t = (0, r.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
    {
      analyticsLocations: n
    } = (0, o.default)(e.analyticsLocations, C.default.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: i,
      isGift: l,
      giftRecipient: a,
      giftMessage: u,
      loadId: p,
      defaultPlanId: x,
      referralCode: _
    } = e;
  if (null != i && !Object.values(T.PremiumSubscriptionSKUs).includes(i)) throw Error("subscriptionTier must be a premium subscription");
  return (0, s.jsx)(o.AnalyticsLocationProvider, {
    value: n,
    children: (0, s.jsx)(f.PaymentContextProvider, {
      loadId: p,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: R,
      skuIDs: [...T.ACTIVE_PREMIUM_SKUS],
      isGift: l,
      defaultPlanId: x,
      referralCode: _,
      children: (0, s.jsx)(c.GiftContextProvider, {
        isGift: l,
        giftRecipient: null == a ? void 0 : a,
        giftMessage: u,
        children: (0, s.jsx)(U, {
          ...e
        })
      })
    })
  })
}