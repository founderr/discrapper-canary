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
  i = s("470079"),
  r = s("442837"),
  l = s("570140"),
  a = s("821849"),
  o = s("100527"),
  C = s("906732"),
  u = s("509545"),
  d = s("78839"),
  c = s("669079"),
  p = s("987209"),
  _ = s("598"),
  f = s("409813"),
  x = s("791785"),
  E = s("276442"),
  L = s("793541"),
  S = s("274247"),
  I = s("380898"),
  m = s("710094"),
  h = s("293858"),
  P = s("614223"),
  M = s("174827"),
  T = s("846464"),
  N = s("184160"),
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
    initialPlanId: E,
    subscriptionTier: L,
    onClose: S,
    trialId: I,
    trialFooterMessageOverride: m,
    reviewWarningMessage: h,
    openInvoiceId: P,
    onSubscriptionConfirmation: M,
    renderPurchaseConfirmation: T,
    postSuccessGuild: N,
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
  } = (0, C.default)();
  i.useEffect(() => {
    !u.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)())
  }, []);
  let {
    step: G
  } = (0, _.usePaymentContext)(), {
    isGift: H,
    giftMessage: D,
    giftRecipient: w
  } = (0, p.useGiftContext)(), W = H && (0, c.shouldShowCustomGiftExperience)(w) && G === f.Step.PLAN_SELECT;
  return (0, n.jsx)(x.PaymentModal, {
    analyticsLocations: F,
    analyticsLocation: t,
    analyticsObject: s,
    analyticsSourceLocation: r,
    analyticsSubscriptionType: j.SubscriptionTypes.PREMIUM,
    onComplete: o,
    transitionState: d,
    initialPlanId: E,
    giftMessage: D,
    subscriptionTier: L,
    onClose: S,
    trialId: I,
    isGift: H,
    trialFooterMessageOverride: m,
    reviewWarningMessage: h,
    planGroup: R.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: P,
    onSubscriptionConfirmation: M,
    renderPurchaseConfirmation: T,
    postSuccessGuild: N,
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
    referralTrialOfferId: i
  } = e, {
    paymentSources: r,
    selectedSkuId: l
  } = (0, _.usePaymentContext)(), {
    isGift: a
  } = (0, p.useGiftContext)(), o = U((0, A.default)({
    isGift: a,
    skuId: l,
    referralTrialOfferId: i
  }));
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)(E.PaymentModalAddPaymentStep, {
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
  renderStep: e => (0, n.jsx)(x.PaymentPredicateStep, {
    ...e
  })
}, {
  key: f.Step.SKU_SELECT,
  renderStep: e => (0, n.jsx)(T.PremiumPaymentSKUSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: f.Step.WHAT_YOU_LOSE,
  renderStep: e => (0, n.jsx)(N.PremiumPaymentWhatYouLoseStep, {
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
  renderStep: e => (0, n.jsx)(S.default, {
    ...e
  })
}, {
  key: f.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, n.jsx)(I.default, {})
}, {
  key: f.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, n.jsx)(L.default, {})
}, {
  key: f.Step.REVIEW,
  renderStep: e => (0, n.jsx)(m.PaymentModalReviewStep, {
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
    } = (0, C.default)(e.analyticsLocations, o.default.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: i,
      isGift: l,
      giftRecipient: a,
      giftMessage: u,
      loadId: c,
      defaultPlanId: f,
      referralCode: x
    } = e;
  if (null != i && !Object.values(R.PremiumSubscriptionSKUs).includes(i)) throw Error("subscriptionTier must be a premium subscription");
  return (0, n.jsx)(C.AnalyticsLocationProvider, {
    value: s,
    children: (0, n.jsx)(_.PaymentContextProvider, {
      loadId: c,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: v,
      skuIDs: [...R.ACTIVE_PREMIUM_SKUS],
      isGift: l,
      defaultPlanId: f,
      referralCode: x,
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