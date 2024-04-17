"use strict";
n.r(t), n.d(t, {
  PremiumPaymentModal: function() {
    return O
  },
  STEPS: function() {
    return U
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
  o = n("100527"),
  C = n("906732"),
  u = n("509545"),
  d = n("78839"),
  c = n("669079"),
  p = n("987209"),
  f = n("598"),
  x = n("409813"),
  _ = n("791785"),
  m = n("276442"),
  E = n("793541"),
  S = n("274247"),
  L = n("380898"),
  h = n("710094"),
  j = n("293858"),
  P = n("614223"),
  y = n("174827"),
  M = n("846464"),
  A = n("184160"),
  g = n("48175"),
  I = n("981631"),
  T = n("474936"),
  v = n("689938");
let N = [x.Step.PLAN_SELECT, x.Step.ADD_PAYMENT_STEPS, x.Step.REVIEW, x.Step.CONFIRM];

function O(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: r,
    onComplete: o,
    transitionState: d,
    initialPlanId: m,
    subscriptionTier: E,
    onClose: S,
    trialId: L,
    trialFooterMessageOverride: h,
    reviewWarningMessage: j,
    openInvoiceId: P,
    onSubscriptionConfirmation: y,
    renderPurchaseConfirmation: M,
    postSuccessGuild: A,
    followupSKUInfo: g,
    renderHeader: v,
    applicationId: N,
    guildId: O,
    referralTrialOfferId: b,
    skuId: R,
    returnRef: U,
    skipConfirm: k = !1
  } = e, {
    analyticsLocations: B
  } = (0, C.default)();
  i.useEffect(() => {
    !u.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)())
  }, []);
  let {
    step: w
  } = (0, f.usePaymentContext)(), {
    isGift: F,
    giftMessage: G,
    giftRecipient: H
  } = (0, p.useGiftContext)(), D = F && (0, c.shouldShowCustomGiftExperience)(H) && w === x.Step.PLAN_SELECT;
  return (0, s.jsx)(_.PaymentModal, {
    analyticsLocations: B,
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: r,
    analyticsSubscriptionType: I.SubscriptionTypes.PREMIUM,
    onComplete: o,
    transitionState: d,
    initialPlanId: m,
    giftMessage: G,
    subscriptionTier: E,
    onClose: S,
    trialId: L,
    isGift: F,
    trialFooterMessageOverride: h,
    reviewWarningMessage: j,
    planGroup: T.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: P,
    onSubscriptionConfirmation: y,
    renderPurchaseConfirmation: M,
    postSuccessGuild: A,
    followupSKUInfo: g,
    renderHeader: v,
    applicationId: N,
    guildId: O,
    referralTrialOfferId: b,
    skuId: R,
    shakeWhilePurchasing: !0,
    isLargeModal: D,
    returnRef: U,
    skipConfirm: k
  })
}

function b(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: t,
    selectedSkuId: n
  } = (0, f.usePaymentContext)(), {
    isGift: s
  } = (0, p.useGiftContext)();
  return (0, P.inOneStepSubscriptionCheckout)({
    isTrial: null != e && e,
    isGift: s,
    selectedSkuId: n,
    startedPaymentFlowWithPaymentSources: t.current
  })
}

function R(e) {
  let {
    initialPlanId: t,
    handleStepChange: n,
    referralTrialOfferId: i
  } = e, {
    paymentSources: r,
    selectedSkuId: l
  } = (0, f.usePaymentContext)(), {
    isGift: a
  } = (0, p.useGiftContext)(), o = b((0, g.default)({
    isGift: a,
    skuId: l,
    referralTrialOfferId: i
  }));
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(m.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: N,
      onReturn: () => {
        let e = Object.values(r).length < 1 && null == t ? x.Step.PLAN_SELECT : x.Step.REVIEW;
        o && (e = x.Step.REVIEW), n(e, {
          trackedFromStep: x.Step.PAYMENT_TYPE
        })
      }
    })
  })
}
let U = [{
  key: null,
  renderStep: e => (0, s.jsx)(_.PaymentPredicateStep, {
    ...e
  })
}, {
  key: x.Step.SKU_SELECT,
  renderStep: e => (0, s.jsx)(M.PremiumPaymentSKUSelectStep, {
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
    useBreadcrumbLabel: e => b(e) ? null : v.default.Messages.BILLING_STEP_SELECT_PLAN
  }
}, {
  key: x.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(R, {
      ...e
    })
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => b(e) ? null : v.default.Messages.BILLING_STEP_PAYMENT
  }
}, {
  key: x.Step.AWAITING_BROWSER_CHECKOUT,
  renderStep: e => (0, s.jsx)(S.default, {
    ...e
  })
}, {
  key: x.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, s.jsx)(L.default, {})
}, {
  key: x.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, s.jsx)(E.default, {})
}, {
  key: x.Step.REVIEW,
  renderStep: e => (0, s.jsx)(h.PaymentModalReviewStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => b(e) ? v.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : v.default.Messages.BILLING_STEP_REVIEW
  }
}, {
  key: x.Step.CONFIRM,
  renderStep: e => (0, s.jsx)(j.PremiumPaymentConfirmStep, {
    ...e
  })
}];

function k(e) {
  let t = (0, r.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
    {
      analyticsLocations: n
    } = (0, C.default)(e.analyticsLocations, o.default.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: i,
      isGift: l,
      giftRecipient: a,
      giftMessage: u,
      loadId: c,
      defaultPlanId: x,
      referralCode: _
    } = e;
  if (null != i && !Object.values(T.PremiumSubscriptionSKUs).includes(i)) throw Error("subscriptionTier must be a premium subscription");
  return (0, s.jsx)(C.AnalyticsLocationProvider, {
    value: n,
    children: (0, s.jsx)(f.PaymentContextProvider, {
      loadId: c,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: U,
      skuIDs: [...T.ACTIVE_PREMIUM_SKUS],
      isGift: l,
      defaultPlanId: x,
      referralCode: _,
      children: (0, s.jsx)(p.GiftContextProvider, {
        isGift: l,
        giftRecipient: null == a ? void 0 : a,
        giftMessage: u,
        children: (0, s.jsx)(O, {
          ...e
        })
      })
    })
  })
}