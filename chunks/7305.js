n.r(s), n.d(s, {
  PremiumPaymentModal: function() {
return P;
  },
  STEPS: function() {
return y;
  },
  default: function() {
return b;
  }
}), n(411104), n(47120);
var t = n(735250),
  i = n(470079),
  r = n(442837),
  l = n(570140),
  a = n(821849),
  o = n(100527),
  C = n(906732),
  d = n(509545),
  u = n(78839),
  c = n(669079),
  _ = n(987209),
  p = n(598),
  x = n(409813),
  h = n(791785),
  L = n(276442),
  f = n(793541),
  E = n(380898),
  I = n(710094),
  M = n(293858),
  T = n(614223),
  N = n(174827),
  j = n(846464),
  g = n(184160),
  m = n(48175),
  A = n(981631),
  O = n(474936),
  S = n(689938);
let R = [
  x.h8.PLAN_SELECT,
  x.h8.ADD_PAYMENT_STEPS,
  x.h8.REVIEW,
  x.h8.CONFIRM
];

function P(e) {
  let {
analyticsLocation: s,
analyticsObject: n,
analyticsSourceLocation: r,
onComplete: o,
transitionState: u,
initialPlanId: L,
subscriptionTier: f,
onClose: E,
trialId: I,
trialFooterMessageOverride: M,
reviewWarningMessage: T,
openInvoiceId: N,
onSubscriptionConfirmation: j,
renderPurchaseConfirmation: g,
postSuccessGuild: m,
followupSKUInfo: S,
renderHeader: R,
applicationId: P,
guildId: v,
referralTrialOfferId: Z,
skuId: y,
returnRef: b,
skipConfirm: U = !1,
continueSession: k = !1
  } = e, {
analyticsLocations: B
  } = (0, C.ZP)();
  i.useEffect(() => {
!d.Z.isLoadedForPremiumSKUs() && l.Z.wait(() => (0, a.Y2)());
  }, []);
  let {
step: H
  } = (0, p.usePaymentContext)(), {
isGift: G,
giftMessage: F,
giftRecipient: w
  } = (0, _.wD)(), D = G && (0, c.pO)(w) && H === x.h8.PLAN_SELECT;
  return (0, t.jsx)(h.PaymentModal, {
analyticsLocations: B,
analyticsLocation: s,
analyticsObject: n,
analyticsSourceLocation: r,
analyticsSubscriptionType: A.NYc.PREMIUM,
onComplete: o,
transitionState: u,
initialPlanId: L,
giftMessage: F,
subscriptionTier: f,
onClose: E,
trialId: I,
isGift: G,
trialFooterMessageOverride: M,
reviewWarningMessage: T,
planGroup: O.Y1,
openInvoiceId: N,
onSubscriptionConfirmation: j,
renderPurchaseConfirmation: g,
postSuccessGuild: m,
followupSKUInfo: S,
renderHeader: R,
applicationId: P,
guildId: v,
referralTrialOfferId: Z,
skuId: y,
shakeWhilePurchasing: !0,
isLargeModal: D,
returnRef: b,
skipConfirm: U,
continueSession: k
  });
}

function v(e) {
  let {
startedPaymentFlowWithPaymentSourcesRef: s,
selectedSkuId: n
  } = (0, p.usePaymentContext)(), {
isGift: t
  } = (0, _.wD)();
  return (0, T.Kp)({
isTrial: null != e && e,
isGift: t,
selectedSkuId: n,
startedPaymentFlowWithPaymentSources: s.current
  });
}

function Z(e) {
  let {
initialPlanId: s,
handleStepChange: n,
referralTrialOfferId: i
  } = e, {
paymentSources: r,
selectedSkuId: l
  } = (0, p.usePaymentContext)(), {
isGift: a
  } = (0, _.wD)(), o = v((0, m.Z)({
isGift: a,
skuId: l,
referralTrialOfferId: i
  }));
  return (0, t.jsx)(t.Fragment, {
children: (0, t.jsx)(L.J, {
  ...e,
  breadcrumbSteps: R,
  onReturn: () => {
    let e = Object.values(r).length < 1 && null == s ? x.h8.PLAN_SELECT : x.h8.REVIEW;
    o && (e = x.h8.REVIEW), n(e, {
      trackedFromStep: x.h8.PAYMENT_TYPE
    });
  }
})
  });
}
let y = [{
key: null,
renderStep: e => (0, t.jsx)(h.PaymentPredicateStep, {
  ...e
})
  },
  {
key: x.h8.SKU_SELECT,
renderStep: e => (0, t.jsx)(j.q, {
  ...e
}),
options: {
  renderHeader: !1,
  hideSlider: !0
}
  },
  {
key: x.h8.WHAT_YOU_LOSE,
renderStep: e => (0, t.jsx)(g.x, {
  ...e
}),
options: {
  renderHeader: !1,
  hideSlider: !0
}
  },
  {
key: x.h8.PLAN_SELECT,
renderStep: e => (0, t.jsx)(N.x, {
  ...e
}),
options: {
  renderHeader: !0,
  useBreadcrumbLabel: e => v(e) ? null : S.Z.Messages.BILLING_STEP_SELECT_PLAN
}
  },
  {
key: x.h8.ADD_PAYMENT_STEPS,
renderStep: e => (0, t.jsx)(t.Fragment, {
  children: (0, t.jsx)(Z, {
    ...e
  })
}),
options: {
  renderHeader: !0,
  useBreadcrumbLabel: e => v(e) ? null : S.Z.Messages.BILLING_STEP_PAYMENT
}
  },
  {
key: x.h8.AWAITING_PURCHASE_TOKEN_AUTH,
renderStep: () => (0, t.jsx)(E.Z, {})
  },
  {
key: x.h8.AWAITING_AUTHENTICATION,
renderStep: () => (0, t.jsx)(f.Z, {})
  },
  {
key: x.h8.REVIEW,
renderStep: e => (0, t.jsx)(I.l, {
  ...e
}),
options: {
  renderHeader: !0,
  useBreadcrumbLabel: e => v(e) ? S.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT : S.Z.Messages.BILLING_STEP_REVIEW
}
  },
  {
key: x.h8.CONFIRM,
renderStep: e => (0, t.jsx)(M.b, {
  ...e
})
  }
];

function b(e) {
  let s = (0, r.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
{
  analyticsLocations: n
} = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
{
  subscriptionTier: i,
  isGift: l,
  giftRecipient: a,
  giftMessage: d,
  giftStyle: c,
  loadId: x,
  defaultPlanId: h,
  referralCode: L,
  repeatPurchase: f
} = e;
  if (null != i && !Object.values(O.Si).includes(i))
throw Error('subscriptionTier must be a premium subscription');
  return (0, t.jsx)(C.Gt, {
value: n,
children: (0, t.jsx)(p.PaymentContextProvider, {
  loadId: x,
  activeSubscription: null != e.subscription ? e.subscription : s,
  stepConfigs: y,
  skuIDs: [...O.YQ],
  isGift: l,
  defaultPlanId: h,
  referralCode: L,
  repeatPurchase: f,
  children: (0, t.jsx)(_.KB, {
    isGift: l,
    giftRecipient: null == a ? void 0 : a,
    giftMessage: d,
    giftStyle: c,
    children: (0, t.jsx)(P, {
      ...e
    })
  })
})
  });
}