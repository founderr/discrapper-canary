"use strict";
s.r(t), s.d(t, {
  PremiumPaymentModal: function() {
    return O
  },
  STEPS: function() {
    return v
  },
  default: function() {
    return B
  }
}), s("411104"), s("47120");
var n = s("735250"),
  l = s("470079"),
  r = s("442837"),
  i = s("570140"),
  a = s("821849"),
  o = s("100527"),
  u = s("906732"),
  C = s("509545"),
  d = s("78839"),
  c = s("669079"),
  p = s("987209"),
  _ = s("598"),
  f = s("409813"),
  E = s("791785"),
  x = s("276442"),
  L = s("793541"),
  m = s("274247"),
  S = s("380898"),
  I = s("710094"),
  h = s("293858"),
  P = s("614223"),
  M = s("174827"),
  N = s("846464"),
  T = s("184160"),
  A = s("48175"),
  j = s("981631"),
  R = s("474936"),
  g = s("689938");
let y = [f.Step.PLAN_SELECT, f.Step.ADD_PAYMENT_STEPS, f.Step.REVIEW, f.Step.CONFIRM];

function O(e) {
  let {
    analyticsLocation: t,
    analyticsObject: s,
    analyticsSourceLocation: r,
    onComplete: o,
    transitionState: d,
    initialPlanId: x,
    subscriptionTier: L,
    onClose: m,
    trialId: S,
    trialFooterMessageOverride: I,
    reviewWarningMessage: h,
    openInvoiceId: P,
    onSubscriptionConfirmation: M,
    renderPurchaseConfirmation: N,
    postSuccessGuild: T,
    followupSKUInfo: A,
    renderHeader: g,
    applicationId: y,
    guildId: O,
    referralTrialOfferId: U,
    skuId: b,
    returnRef: v,
    skipConfirm: B = !1,
    continueSession: k = !1
  } = e, {
    analyticsLocations: F
  } = (0, u.default)();
  l.useEffect(() => {
    !C.default.isLoadedForPremiumSKUs() && i.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)())
  }, []);
  let {
    step: G
  } = (0, _.usePaymentContext)(), {
    isGift: H,
    giftMessage: D,
    giftRecipient: w
  } = (0, p.useGiftContext)(), W = H && (0, c.shouldShowCustomGiftExperience)(w) && G === f.Step.PLAN_SELECT;
  return (0, n.jsx)(E.PaymentModal, {
    analyticsLocations: F,
    analyticsLocation: t,
    analyticsObject: s,
    analyticsSourceLocation: r,
    analyticsSubscriptionType: j.SubscriptionTypes.PREMIUM,
    onComplete: o,
    transitionState: d,
    initialPlanId: x,
    giftMessage: D,
    subscriptionTier: L,
    onClose: m,
    trialId: S,
    isGift: H,
    trialFooterMessageOverride: I,
    reviewWarningMessage: h,
    planGroup: R.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: P,
    onSubscriptionConfirmation: M,
    renderPurchaseConfirmation: N,
    postSuccessGuild: T,
    followupSKUInfo: A,
    renderHeader: g,
    applicationId: y,
    guildId: O,
    referralTrialOfferId: U,
    skuId: b,
    shakeWhilePurchasing: !0,
    isLargeModal: W,
    returnRef: v,
    skipConfirm: B,
    continueSession: k
  })
}

function U(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: t,
    selectedSkuId: s
  } = (0, _.usePaymentContext)(), {
    isGift: n
  } = (0, p.useGiftContext)();
  return (0, P.inOneStepSubscriptionCheckout)({
    isTrial: null != e && e,
    isGift: n,
    selectedSkuId: s,
    startedPaymentFlowWithPaymentSources: t.current
  })
}

function b(e) {
  let {
    initialPlanId: t,
    handleStepChange: s,
    referralTrialOfferId: l
  } = e, {
    paymentSources: r,
    selectedSkuId: i
  } = (0, _.usePaymentContext)(), {
    isGift: a
  } = (0, p.useGiftContext)(), o = U((0, A.default)({
    isGift: a,
    skuId: i,
    referralTrialOfferId: l
  }));
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)(x.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: y,
      onReturn: () => {
        let e = Object.values(r).length < 1 && null == t ? f.Step.PLAN_SELECT : f.Step.REVIEW;
        o && (e = f.Step.REVIEW), s(e, {
          trackedFromStep: f.Step.PAYMENT_TYPE
        })
      }
    })
  })
}
let v = [{
  key: null,
  renderStep: e => (0, n.jsx)(E.PaymentPredicateStep, {
    ...e
  })
}, {
  key: f.Step.SKU_SELECT,
  renderStep: e => (0, n.jsx)(N.PremiumPaymentSKUSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: f.Step.WHAT_YOU_LOSE,
  renderStep: e => (0, n.jsx)(T.PremiumPaymentWhatYouLoseStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: f.Step.PLAN_SELECT,
  renderStep: e => (0, n.jsx)(M.PremiumPaymentPlanSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => U(e) ? null : g.default.Messages.BILLING_STEP_SELECT_PLAN
  }
}, {
  key: f.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)(b, {
      ...e
    })
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => U(e) ? null : g.default.Messages.BILLING_STEP_PAYMENT
  }
}, {
  key: f.Step.AWAITING_BROWSER_CHECKOUT,
  renderStep: e => (0, n.jsx)(m.default, {
    ...e
  })
}, {
  key: f.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, n.jsx)(S.default, {})
}, {
  key: f.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, n.jsx)(L.default, {})
}, {
  key: f.Step.REVIEW,
  renderStep: e => (0, n.jsx)(I.PaymentModalReviewStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => U(e) ? g.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : g.default.Messages.BILLING_STEP_REVIEW
  }
}, {
  key: f.Step.CONFIRM,
  renderStep: e => (0, n.jsx)(h.PremiumPaymentConfirmStep, {
    ...e
  })
}];

function B(e) {
  let t = (0, r.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
    {
      analyticsLocations: s
    } = (0, u.default)(e.analyticsLocations, o.default.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: l,
      isGift: i,
      giftRecipient: a,
      giftMessage: C,
      loadId: c,
      defaultPlanId: f,
      referralCode: E
    } = e;
  if (null != l && !Object.values(R.PremiumSubscriptionSKUs).includes(l)) throw Error("subscriptionTier must be a premium subscription");
  return (0, n.jsx)(u.AnalyticsLocationProvider, {
    value: s,
    children: (0, n.jsx)(_.PaymentContextProvider, {
      loadId: c,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: v,
      skuIDs: [...R.ACTIVE_PREMIUM_SKUS],
      isGift: i,
      defaultPlanId: f,
      referralCode: E,
      children: (0, n.jsx)(p.GiftContextProvider, {
        isGift: i,
        giftRecipient: null == a ? void 0 : a,
        giftMessage: C,
        children: (0, n.jsx)(O, {
          ...e
        })
      })
    })
  })
}