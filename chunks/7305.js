"use strict";
s.r(t), s.d(t, {
  PremiumPaymentModal: function() {
    return O
  },
  STEPS: function() {
    return b
  },
  default: function() {
    return v
  }
}), s("411104"), s("47120");
var i = s("735250"),
  n = s("470079"),
  r = s("442837"),
  l = s("570140"),
  a = s("821849"),
  o = s("100527"),
  C = s("906732"),
  u = s("509545"),
  d = s("78839"),
  _ = s("669079"),
  p = s("987209"),
  c = s("598"),
  f = s("409813"),
  x = s("791785"),
  L = s("276442"),
  E = s("793541"),
  S = s("380898"),
  m = s("710094"),
  I = s("293858"),
  P = s("614223"),
  M = s("174827"),
  T = s("846464"),
  h = s("184160"),
  N = s("48175"),
  A = s("981631"),
  j = s("474936"),
  R = s("689938");
let g = [f.Step.PLAN_SELECT, f.Step.ADD_PAYMENT_STEPS, f.Step.REVIEW, f.Step.CONFIRM];

function O(e) {
  let {
    analyticsLocation: t,
    analyticsObject: s,
    analyticsSourceLocation: r,
    onComplete: o,
    transitionState: d,
    initialPlanId: L,
    subscriptionTier: E,
    onClose: S,
    trialId: m,
    trialFooterMessageOverride: I,
    reviewWarningMessage: P,
    openInvoiceId: M,
    onSubscriptionConfirmation: T,
    renderPurchaseConfirmation: h,
    postSuccessGuild: N,
    followupSKUInfo: R,
    renderHeader: g,
    applicationId: O,
    guildId: y,
    referralTrialOfferId: U,
    skuId: b,
    returnRef: v,
    skipConfirm: H = !1,
    continueSession: G = !1
  } = e, {
    analyticsLocations: F
  } = (0, C.default)();
  n.useEffect(() => {
    !u.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)())
  }, []);
  let {
    step: B
  } = (0, c.usePaymentContext)(), {
    isGift: k,
    giftMessage: D,
    giftRecipient: w
  } = (0, p.useGiftContext)(), W = k && (0, _.shouldShowCustomGiftExperience)(w) && B === f.Step.PLAN_SELECT;
  return (0, i.jsx)(x.PaymentModal, {
    analyticsLocations: F,
    analyticsLocation: t,
    analyticsObject: s,
    analyticsSourceLocation: r,
    analyticsSubscriptionType: A.SubscriptionTypes.PREMIUM,
    onComplete: o,
    transitionState: d,
    initialPlanId: L,
    giftMessage: D,
    subscriptionTier: E,
    onClose: S,
    trialId: m,
    isGift: k,
    trialFooterMessageOverride: I,
    reviewWarningMessage: P,
    planGroup: j.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: M,
    onSubscriptionConfirmation: T,
    renderPurchaseConfirmation: h,
    postSuccessGuild: N,
    followupSKUInfo: R,
    renderHeader: g,
    applicationId: O,
    guildId: y,
    referralTrialOfferId: U,
    skuId: b,
    shakeWhilePurchasing: !0,
    isLargeModal: W,
    returnRef: v,
    skipConfirm: H,
    continueSession: G
  })
}

function y(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: t,
    selectedSkuId: s
  } = (0, c.usePaymentContext)(), {
    isGift: i
  } = (0, p.useGiftContext)();
  return (0, P.inOneStepSubscriptionCheckout)({
    isTrial: null != e && e,
    isGift: i,
    selectedSkuId: s,
    startedPaymentFlowWithPaymentSources: t.current
  })
}

function U(e) {
  let {
    initialPlanId: t,
    handleStepChange: s,
    referralTrialOfferId: n
  } = e, {
    paymentSources: r,
    selectedSkuId: l
  } = (0, c.usePaymentContext)(), {
    isGift: a
  } = (0, p.useGiftContext)(), o = y((0, N.default)({
    isGift: a,
    skuId: l,
    referralTrialOfferId: n
  }));
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsx)(L.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: g,
      onReturn: () => {
        let e = Object.values(r).length < 1 && null == t ? f.Step.PLAN_SELECT : f.Step.REVIEW;
        o && (e = f.Step.REVIEW), s(e, {
          trackedFromStep: f.Step.PAYMENT_TYPE
        })
      }
    })
  })
}
let b = [{
  key: null,
  renderStep: e => (0, i.jsx)(x.PaymentPredicateStep, {
    ...e
  })
}, {
  key: f.Step.SKU_SELECT,
  renderStep: e => (0, i.jsx)(T.PremiumPaymentSKUSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: f.Step.WHAT_YOU_LOSE,
  renderStep: e => (0, i.jsx)(h.PremiumPaymentWhatYouLoseStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: f.Step.PLAN_SELECT,
  renderStep: e => (0, i.jsx)(M.PremiumPaymentPlanSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => y(e) ? null : R.default.Messages.BILLING_STEP_SELECT_PLAN
  }
}, {
  key: f.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, i.jsx)(i.Fragment, {
    children: (0, i.jsx)(U, {
      ...e
    })
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => y(e) ? null : R.default.Messages.BILLING_STEP_PAYMENT
  }
}, {
  key: f.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, i.jsx)(S.default, {})
}, {
  key: f.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, i.jsx)(E.default, {})
}, {
  key: f.Step.REVIEW,
  renderStep: e => (0, i.jsx)(m.PaymentModalReviewStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => y(e) ? R.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : R.default.Messages.BILLING_STEP_REVIEW
  }
}, {
  key: f.Step.CONFIRM,
  renderStep: e => (0, i.jsx)(I.PremiumPaymentConfirmStep, {
    ...e
  })
}];

function v(e) {
  let t = (0, r.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()),
    {
      analyticsLocations: s
    } = (0, C.default)(e.analyticsLocations, o.default.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: n,
      isGift: l,
      giftRecipient: a,
      giftMessage: u,
      loadId: _,
      defaultPlanId: f,
      referralCode: x
    } = e;
  if (null != n && !Object.values(j.PremiumSubscriptionSKUs).includes(n)) throw Error("subscriptionTier must be a premium subscription");
  return (0, i.jsx)(C.AnalyticsLocationProvider, {
    value: s,
    children: (0, i.jsx)(c.PaymentContextProvider, {
      loadId: _,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: b,
      skuIDs: [...j.ACTIVE_PREMIUM_SKUS],
      isGift: l,
      defaultPlanId: f,
      referralCode: x,
      children: (0, i.jsx)(p.GiftContextProvider, {
        isGift: l,
        giftRecipient: null == a ? void 0 : a,
        giftMessage: u,
        children: (0, i.jsx)(O, {
          ...e
        })
      })
    })
  })
}