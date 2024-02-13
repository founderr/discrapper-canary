"use strict";
n.r(t), n.d(t, {
  PremiumPaymentModal: function() {
    return U
  },
  STEPS: function() {
    return j
  },
  default: function() {
    return D
  }
}), n("70102"), n("222007");
var s = n("37983"),
  r = n("884691"),
  l = n("446674"),
  a = n("913144"),
  i = n("775433"),
  u = n("812204"),
  o = n("685665"),
  d = n("10514"),
  c = n("521012"),
  _ = n("659632"),
  I = n("635357"),
  E = n("642906"),
  f = n("85336"),
  S = n("385179"),
  P = n("262683"),
  m = n("946359"),
  p = n("307367"),
  T = n("724269"),
  N = n("99836"),
  M = n("992049"),
  C = n("176108"),
  R = n("97461"),
  L = n("403365"),
  A = n("498475"),
  g = n("254350"),
  O = n("49111"),
  x = n("646718"),
  h = n("782340");
let y = [f.Step.PLAN_SELECT, f.Step.ADD_PAYMENT_STEPS, f.Step.REVIEW, f.Step.CONFIRM];

function U(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: l,
    onComplete: u,
    transitionState: c,
    initialPlanId: P,
    subscriptionTier: m,
    onClose: p,
    trialId: T,
    trialFooterMessageOverride: N,
    reviewWarningMessage: M,
    openInvoiceId: C,
    onSubscriptionConfirmation: R,
    renderPurchaseConfirmation: L,
    postSuccessGuild: A,
    followupSKUInfo: g,
    renderHeader: h,
    applicationId: y,
    guildId: U,
    referralTrialOfferId: b,
    skuId: k,
    returnRef: j
  } = e, {
    analyticsLocations: D
  } = (0, o.default)();
  r.useEffect(() => {
    !d.default.isLoadedForPremiumSKUs() && a.default.wait(() => (0, i.fetchPremiumSubscriptionPlans)())
  }, []);
  let {
    step: G
  } = (0, E.usePaymentContext)(), {
    isGift: B,
    giftMessage: v,
    giftRecipient: F
  } = (0, I.useGiftContext)(), H = B && (0, _.shouldShowCustomGiftExperience)(F) && G === f.Step.PLAN_SELECT;
  return (0, s.jsx)(S.PaymentModal, {
    analyticsLocations: D,
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: l,
    analyticsSubscriptionType: O.SubscriptionTypes.PREMIUM,
    onComplete: u,
    transitionState: c,
    initialPlanId: P,
    giftMessage: v,
    subscriptionTier: m,
    onClose: p,
    trialId: T,
    isGift: B,
    trialFooterMessageOverride: N,
    reviewWarningMessage: M,
    planGroup: x.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: C,
    onSubscriptionConfirmation: R,
    renderPurchaseConfirmation: L,
    postSuccessGuild: A,
    followupSKUInfo: g,
    renderHeader: h,
    applicationId: y,
    guildId: U,
    referralTrialOfferId: b,
    skuId: k,
    shakeWhilePurchasing: !0,
    isLargeModal: H,
    returnRef: j
  })
}

function b(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: t,
    selectedSkuId: n
  } = (0, E.usePaymentContext)(), {
    isGift: s
  } = (0, I.useGiftContext)();
  return (0, C.inOneStepSubscriptionCheckout)({
    isTrial: null != e && e,
    isGift: s,
    selectedSkuId: n,
    startedPaymentFlowWithPaymentSources: t.current
  })
}

function k(e) {
  let {
    initialPlanId: t,
    handleStepChange: n,
    referralTrialOfferId: r
  } = e, {
    paymentSources: l,
    selectedSkuId: a
  } = (0, E.usePaymentContext)(), {
    isGift: i
  } = (0, I.useGiftContext)(), u = (0, g.default)({
    isGift: i,
    skuId: a,
    referralTrialOfferId: r
  }), o = b(u);
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(P.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: y,
      onReturn: () => {
        let e = Object.values(l).length < 1 && null == t ? f.Step.PLAN_SELECT : f.Step.REVIEW;
        o && (e = f.Step.REVIEW), n(e, {
          trackedFromStep: f.Step.PAYMENT_TYPE
        })
      }
    })
  })
}
let j = [{
  key: null,
  renderStep: e => (0, s.jsx)(S.PaymentPredicateStep, {
    ...e
  })
}, {
  key: f.Step.SKU_SELECT,
  renderStep: e => (0, s.jsx)(L.PremiumPaymentSKUSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: f.Step.WHAT_YOU_LOSE,
  renderStep: e => (0, s.jsx)(A.PremiumPaymentWhatYouLoseStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: f.Step.PLAN_SELECT,
  renderStep: e => (0, s.jsx)(R.PremiumPaymentPlanSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => {
      let t = b(e);
      return t ? null : h.default.Messages.BILLING_STEP_SELECT_PLAN
    }
  }
}, {
  key: f.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(k, {
      ...e
    })
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => {
      let t = b(e);
      return t ? null : h.default.Messages.BILLING_STEP_PAYMENT
    }
  }
}, {
  key: f.Step.AWAITING_BROWSER_CHECKOUT,
  renderStep: e => (0, s.jsx)(p.default, {
    ...e
  })
}, {
  key: f.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, s.jsx)(T.default, {})
}, {
  key: f.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, s.jsx)(m.default, {})
}, {
  key: f.Step.REVIEW,
  renderStep: e => (0, s.jsx)(N.PaymentModalReviewStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => {
      let t = b(e);
      return t ? h.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : h.default.Messages.BILLING_STEP_REVIEW
    }
  }
}, {
  key: f.Step.CONFIRM,
  renderStep: e => (0, s.jsx)(M.PremiumPaymentConfirmStep, {
    ...e
  })
}];

function D(e) {
  let t = (0, l.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
    {
      AnalyticsLocationProvider: n
    } = (0, o.default)(e.analyticsLocations, u.default.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: r,
      isGift: a,
      giftRecipient: i,
      giftMessage: d,
      loadId: _,
      defaultPlanId: f,
      referralCode: S
    } = e;
  if (null != r && !Object.values(x.PremiumSubscriptionSKUs).includes(r)) throw Error("subscriptionTier must be a premium subscription");
  return (0, s.jsx)(n, {
    children: (0, s.jsx)(E.PaymentContextProvider, {
      loadId: _,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: j,
      skuIDs: [...x.ACTIVE_PREMIUM_SKUS],
      isGift: a,
      defaultPlanId: f,
      referralCode: S,
      children: (0, s.jsx)(I.GiftContextProvider, {
        isGift: a,
        giftRecipient: null == i ? void 0 : i,
        giftMessage: d,
        children: (0, s.jsx)(U, {
          ...e
        })
      })
    })
  })
}