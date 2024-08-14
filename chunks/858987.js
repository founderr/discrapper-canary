s.d(n, {
  K: function() {
return N;
  },
  Z: function() {
return A;
  }
});
var t = s(735250);
s(470079);
var r = s(512722),
  l = s.n(r),
  i = s(481060),
  a = s(906732),
  c = s(598),
  o = s(74538),
  u = s(296848),
  I = s(244923),
  _ = s(231338),
  E = s(689938),
  T = s(357831),
  d = s(74316);

function N(e) {
  let {
purchaseType: n,
plan: s,
premiumSubscription: t,
isGift: r,
planGroup: i,
isPrepaidPaymentSource: a,
inReverseTrial: c
  } = e;
  if (n === _.GZ.ONE_TIME)
return r ? E.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : E.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
  if (l()(null != s, 'Subscription plan must be selected to render SubscriptionReviewButton'), r)
return E.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
  if (c)
return E.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
  if ((0, o.PV)(s.id)) {
if (a)
  return E.Z.Messages.BILLING_SELECT_PLAN;
if (null != t)
  return t.isPaused ? E.Z.Messages.RESUME : (0, u.R4)(t, s.id, i) ? E.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : E.Z.Messages.BILLING_SWITCH_PLAN_CHANGE;
return (0, o.W_)(null, s);
  }
  return E.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN;
}

function M(e, n) {
  null != e.current && (e.current.scrollIntoView({
behavior: 'smooth'
  }), n());
}

function A(e) {
  let {
legalTermsNodeRef: n,
invoiceError: s,
planError: r,
disablePurchase: l,
flashLegalTerms: o,
isSubmitting: u,
premiumSubscription: _,
isGift: A,
planGroup: P,
isPrepaid: L,
isTrial: R,
makePurchase: S,
needsPaymentSource: m,
inReverseTrial: U,
onNext: p
  } = e, {
selectedPlan: O,
hasAcceptedTerms: C,
purchaseType: v,
paymentSourceId: h,
activeSubscription: f
  } = (0, c.usePaymentContext)(), g = N({
purchaseType: v,
plan: O,
premiumSubscription: _,
isGift: A,
planGroup: P,
isPrepaidPaymentSource: L,
inReverseTrial: U
  }), {
analyticsLocations: Z
  } = (0, a.ZP)();
  if (null != s || null != r || l)
return (0, t.jsx)(i.Button, {
  color: i.Button.Colors.GREEN,
  disabled: !0,
  children: g
});
  if (m)
return (0, t.jsx)(i.Tooltip, {
  text: E.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
  children: e => (0, t.jsx)(i.Button, {
    ...e,
    color: i.Button.Colors.GREEN,
    type: 'submit',
    'data-testid': 'submitButton',
    disabled: !0,
    children: g
  })
});
  if (R)
return (0, t.jsxs)(i.ShinyButton, {
  innerClassName: T.innerButton,
  'data-testid': C ? 'purchase' : 'submitButton',
  onClick: C ? S : () => M(n, o),
  color: i.Button.Colors.GREEN,
  submitting: u,
  children: [
    (0, t.jsx)('img', {
      alt: '',
      className: T.nitroIcon,
      src: d
    }),
    g
  ]
});
  else if (!C)
return (0, t.jsx)(i.Tooltip, {
  text: E.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
  children: e => (0, t.jsx)(i.Button, {
    ...e,
    color: i.Button.Colors.GREEN,
    type: 'submit',
    onClick: () => M(n, o),
    'data-testid': 'submitButton',
    children: g
  })
});
  else if (U && null != f && null != h)
return (0, t.jsx)(I.Z, {
  activeSubscription: f,
  onNext: p,
  isSubmitting: u,
  paymentSourceId: h,
  buttonLabel: g,
  analyticsLocations: Z
});
  else
return (0, t.jsx)(i.Button, {
  'data-testid': 'purchase',
  onClick: S,
  color: i.Button.Colors.GREEN,
  submitting: u,
  children: g
});
}