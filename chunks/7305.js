n.r(s), n.d(s, {
  PremiumPaymentModal: function() {
    return O
  },
  STEPS: function() {
    return y
  },
  default: function() {
    return H
  }
}), n(411104), n(47120);
var t = n(735250),
  i = n(470079),
  l = n(442837),
  r = n(570140),
  C = n(821849),
  a = n(100527),
  o = n(906732),
  d = n(509545),
  _ = n(78839),
  u = n(669079),
  c = n(987209),
  p = n(598),
  x = n(409813),
  L = n(791785),
  I = n(276442),
  E = n(793541),
  h = n(380898),
  f = n(710094),
  M = n(293858),
  N = n(614223),
  T = n(174827),
  j = n(846464),
  A = n(184160),
  S = n(48175),
  g = n(981631),
  R = n(474936),
  m = n(689938);
let P = [x.h8.PLAN_SELECT, x.h8.ADD_PAYMENT_STEPS, x.h8.REVIEW, x.h8.CONFIRM];

function O(e) {
  let {
    analyticsLocation: s,
    analyticsObject: n,
    analyticsSourceLocation: l,
    onComplete: a,
    transitionState: _,
    initialPlanId: I,
    subscriptionTier: E,
    onClose: h,
    trialId: f,
    trialFooterMessageOverride: M,
    reviewWarningMessage: N,
    openInvoiceId: T,
    onSubscriptionConfirmation: j,
    renderPurchaseConfirmation: A,
    postSuccessGuild: S,
    followupSKUInfo: m,
    renderHeader: P,
    applicationId: O,
    guildId: Z,
    referralTrialOfferId: U,
    skuId: y,
    returnRef: H,
    skipConfirm: v = !1,
    continueSession: b = !1
  } = e, {
    analyticsLocations: B
  } = (0, o.ZP)();
  i.useEffect(() => {
    !d.Z.isLoadedForPremiumSKUs() && r.Z.wait(() => (0, C.Y2)())
  }, []);
  let {
    step: F
  } = (0, p.usePaymentContext)(), {
    isGift: G,
    giftMessage: k,
    giftRecipient: w
  } = (0, c.wD)(), D = G && (0, u.pO)(w) && F === x.h8.PLAN_SELECT;
  return (0, t.jsx)(L.PaymentModal, {
    analyticsLocations: B,
    analyticsLocation: s,
    analyticsObject: n,
    analyticsSourceLocation: l,
    analyticsSubscriptionType: g.NYc.PREMIUM,
    onComplete: a,
    transitionState: _,
    initialPlanId: I,
    giftMessage: k,
    subscriptionTier: E,
    onClose: h,
    trialId: f,
    isGift: G,
    trialFooterMessageOverride: M,
    reviewWarningMessage: N,
    planGroup: R.Y1,
    openInvoiceId: T,
    onSubscriptionConfirmation: j,
    renderPurchaseConfirmation: A,
    postSuccessGuild: S,
    followupSKUInfo: m,
    renderHeader: P,
    applicationId: O,
    guildId: Z,
    referralTrialOfferId: U,
    skuId: y,
    shakeWhilePurchasing: !0,
    isLargeModal: D,
    returnRef: H,
    skipConfirm: v,
    continueSession: b
  })
}

function Z(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: s,
    selectedSkuId: n
  } = (0, p.usePaymentContext)(), {
    isGift: t
  } = (0, c.wD)();
  return (0, N.Kp)({
    isTrial: null != e && e,
    isGift: t,
    selectedSkuId: n,
    startedPaymentFlowWithPaymentSources: s.current
  })
}

function U(e) {
  let {
    initialPlanId: s,
    handleStepChange: n,
    referralTrialOfferId: i
  } = e, {
    paymentSources: l,
    selectedSkuId: r
  } = (0, p.usePaymentContext)(), {
    isGift: C
  } = (0, c.wD)(), a = Z((0, S.Z)({
    isGift: C,
    skuId: r,
    referralTrialOfferId: i
  }));
  return (0, t.jsx)(t.Fragment, {
    children: (0, t.jsx)(I.J, {
      ...e,
      breadcrumbSteps: P,
      onReturn: () => {
        let e = Object.values(l).length < 1 && null == s ? x.h8.PLAN_SELECT : x.h8.REVIEW;
        a && (e = x.h8.REVIEW), n(e, {
          trackedFromStep: x.h8.PAYMENT_TYPE
        })
      }
    })
  })
}
let y = [{
  key: null,
  renderStep: e => (0, t.jsx)(L.PaymentPredicateStep, {
    ...e
  })
}, {
  key: x.h8.SKU_SELECT,
  renderStep: e => (0, t.jsx)(j.q, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: x.h8.WHAT_YOU_LOSE,
  renderStep: e => (0, t.jsx)(A.x, {
    ...e
  }),
  options: {
    renderHeader: !1,
    hideSlider: !0
  }
}, {
  key: x.h8.PLAN_SELECT,
  renderStep: e => (0, t.jsx)(T.x, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => Z(e) ? null : m.Z.Messages.BILLING_STEP_SELECT_PLAN
  }
}, {
  key: x.h8.ADD_PAYMENT_STEPS,
  renderStep: e => (0, t.jsx)(t.Fragment, {
    children: (0, t.jsx)(U, {
      ...e
    })
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => Z(e) ? null : m.Z.Messages.BILLING_STEP_PAYMENT
  }
}, {
  key: x.h8.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, t.jsx)(h.Z, {})
}, {
  key: x.h8.AWAITING_AUTHENTICATION,
  renderStep: () => (0, t.jsx)(E.Z, {})
}, {
  key: x.h8.REVIEW,
  renderStep: e => (0, t.jsx)(f.l, {
    ...e
  }),
  options: {
    renderHeader: !0,
    useBreadcrumbLabel: e => Z(e) ? m.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT : m.Z.Messages.BILLING_STEP_REVIEW
  }
}, {
  key: x.h8.CONFIRM,
  renderStep: e => (0, t.jsx)(M.b, {
    ...e
  })
}];

function H(e) {
  let s = (0, l.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
    {
      analyticsLocations: n
    } = (0, o.ZP)(e.analyticsLocations, a.Z.PREMIUM_PAYMENT_MODAL),
    {
      subscriptionTier: i,
      isGift: r,
      giftRecipient: C,
      giftMessage: d,
      loadId: u,
      defaultPlanId: x,
      referralCode: L
    } = e;
  if (null != i && !Object.values(R.Si).includes(i)) throw Error("subscriptionTier must be a premium subscription");
  return (0, t.jsx)(o.Gt, {
    value: n,
    children: (0, t.jsx)(p.PaymentContextProvider, {
      loadId: u,
      activeSubscription: null != e.subscription ? e.subscription : s,
      stepConfigs: y,
      skuIDs: [...R.YQ],
      isGift: r,
      defaultPlanId: x,
      referralCode: L,
      children: (0, t.jsx)(c.KB, {
        isGift: r,
        giftRecipient: null == C ? void 0 : C,
        giftMessage: d,
        children: (0, t.jsx)(O, {
          ...e
        })
      })
    })
  })
}