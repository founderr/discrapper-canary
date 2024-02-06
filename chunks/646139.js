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
  a = n("884691"),
  r = n("446674"),
  l = n("913144"),
  i = n("775433"),
  u = n("812204"),
  o = n("685665"),
  d = n("10514"),
  c = n("521012"),
  _ = n("659632"),
  f = n("635357"),
  I = n("642906"),
  E = n("85336"),
  m = n("385179"),
  S = n("262683"),
  P = n("946359"),
  p = n("307367"),
  T = n("724269"),
  N = n("99836"),
  M = n("263820"),
  C = n("992049"),
  L = n("176108"),
  R = n("97461"),
  A = n("403365"),
  g = n("498475"),
  O = n("254350"),
  x = n("49111"),
  h = n("646718"),
  y = n("782340");
let b = [E.Step.PLAN_SELECT, E.Step.ADD_PAYMENT_STEPS, E.Step.REVIEW, E.Step.CONFIRM];

function U(e) {
  let {
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: r,
    onComplete: u,
    transitionState: c,
    initialPlanId: S,
    subscriptionTier: P,
    onClose: p,
    trialId: T,
    trialFooterMessageOverride: N,
    reviewWarningMessage: C,
    openInvoiceId: L,
    onSubscriptionConfirmation: R,
    renderPurchaseConfirmation: A,
    postSuccessGuild: g,
    followupSKUInfo: O,
    renderHeader: y,
    applicationId: b,
    guildId: U,
    referralTrialOfferId: k,
    skuId: v,
    returnRef: j
  } = e, {
    analyticsLocations: D
  } = (0, o.default)();
  a.useEffect(() => {
    !d.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, i.fetchPremiumSubscriptionPlans)())
  }, []), M.default.getCurrentConfig({
    location: "3a6d55_1"
  }, {
    autoTrackExposure: !0
  });
  let {
    step: G
  } = (0, I.usePaymentContext)(), {
    isGift: B,
    giftMessage: F,
    giftRecipient: H
  } = (0, f.useGiftContext)(), W = B && (0, _.shouldShowCustomGiftExperience)(H, !0, "PremiumPaymentModal") && G === E.Step.PLAN_SELECT;
  return (0, s.jsx)(m.PaymentModal, {
    analyticsLocations: D,
    analyticsLocation: t,
    analyticsObject: n,
    analyticsSourceLocation: r,
    analyticsSubscriptionType: x.SubscriptionTypes.PREMIUM,
    onComplete: u,
    transitionState: c,
    initialPlanId: S,
    giftMessage: F,
    subscriptionTier: P,
    onClose: p,
    trialId: T,
    isGift: B,
    trialFooterMessageOverride: N,
    reviewWarningMessage: C,
    planGroup: h.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
    openInvoiceId: L,
    onSubscriptionConfirmation: R,
    renderPurchaseConfirmation: A,
    postSuccessGuild: g,
    followupSKUInfo: O,
    renderHeader: y,
    applicationId: b,
    guildId: U,
    referralTrialOfferId: k,
    skuId: v,
    shakeWhilePurchasing: !0,
    isLargeModal: W,
    returnRef: j
  })
}

function k(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: t,
    selectedSkuId: n
  } = (0, I.usePaymentContext)(), {
    isGift: s
  } = (0, f.useGiftContext)();
  return (0, L.inOneStepSubscriptionCheckout)({
    isTrial: null != e && e,
    isGift: s,
    selectedSkuId: n,
    startedPaymentFlowWithPaymentSources: t.current
  })
}

function v(e) {
  let {
    initialPlanId: t,
    handleStepChange: n,
    referralTrialOfferId: a
  } = e, {
    paymentSources: r,
    selectedSkuId: l
  } = (0, I.usePaymentContext)(), {
    isGift: i
  } = (0, f.useGiftContext)(), u = (0, O.default)({
    isGift: i,
    skuId: l,
    referralTrialOfferId: a
  }), o = k(u);
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(S.PaymentModalAddPaymentStep, {
      ...e,
      breadcrumbSteps: b,
      onReturn: () => {
        let e = Object.values(r).length < 1 && null == t ? E.Step.PLAN_SELECT : E.Step.REVIEW;
        o && (e = E.Step.REVIEW), n(e, {
          trackedFromStep: E.Step.PAYMENT_TYPE
        })
      }
    })
  })
}
let j = [{
  key: null,
  renderStep: e => (0, s.jsx)(m.PaymentPredicateStep, {
    ...e
  })
}, {
  key: E.Step.SKU_SELECT,
  renderStep: e => (0, s.jsx)(A.PremiumPaymentSKUSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: E.Step.WHAT_YOU_LOSE,
  renderStep: e => (0, s.jsx)(g.PremiumPaymentWhatYouLoseStep, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: E.Step.PLAN_SELECT,
  renderStep: e => (0, s.jsx)(R.PremiumPaymentPlanSelectStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => {
      let t = k(e);
      return t ? null : y.default.Messages.BILLING_STEP_SELECT_PLAN
    }
  }
}, {
  key: E.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(v, {
      ...e
    })
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => {
      let t = k(e);
      return t ? null : y.default.Messages.BILLING_STEP_PAYMENT
    }
  }
}, {
  key: E.Step.AWAITING_BROWSER_CHECKOUT,
  renderStep: e => (0, s.jsx)(p.default, {
    ...e
  })
}, {
  key: E.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, s.jsx)(T.default, {})
}, {
  key: E.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, s.jsx)(P.default, {})
}, {
  key: E.Step.REVIEW,
  renderStep: e => (0, s.jsx)(N.PaymentModalReviewStep, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => {
      let t = k(e);
      return t ? y.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : y.default.Messages.BILLING_STEP_REVIEW
    }
  }
}, {
  key: E.Step.CONFIRM,
  renderStep: e => (0, s.jsx)(C.PremiumPaymentConfirmStep, {
    ...e
  })
}];

function D(e) {
  let t = (0, r.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()),
    {
      AnalyticsLocationProvider: n
    } = (0, o.default)(e.analyticsLocations, u.default.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: a,
      isGift: l,
      giftRecipient: i,
      giftMessage: d,
      loadId: _,
      defaultPlanId: E,
      referralCode: m
    } = e;
  if (null != a && !Object.values(h.PremiumSubscriptionSKUs).includes(a)) throw Error("subscriptionTier must be a premium subscription");
  return (0, s.jsx)(n, {
    children: (0, s.jsx)(I.PaymentContextProvider, {
      loadId: _,
      activeSubscription: null != e.subscription ? e.subscription : t,
      stepConfigs: j,
      skuIDs: [...h.ACTIVE_PREMIUM_SKUS],
      isGift: l,
      defaultPlanId: E,
      referralCode: m,
      children: (0, s.jsx)(f.GiftContextProvider, {
        isGift: l,
        giftRecipient: null == i ? void 0 : i,
        giftMessage: d,
        children: (0, s.jsx)(U, {
          ...e
        })
      })
    })
  })
}