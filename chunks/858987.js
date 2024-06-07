"use strict";
a.r(t), a.d(t, {
  default: function() {
    return P
  },
  getReviewConfirmButtonLabel: function() {
    return f
  }
});
var n = a("735250");
a("470079");
var r = a("512722"),
  s = a.n(r),
  i = a("481060"),
  l = a("598"),
  o = a("976644"),
  u = a("74538"),
  c = a("296848"),
  d = a("231338"),
  I = a("689938"),
  _ = a("66471"),
  T = a("74316");

function f(e) {
  let {
    purchaseType: t,
    plan: a,
    premiumSubscription: n,
    isGift: r,
    planGroup: i,
    isPrepaidPaymentSource: l
  } = e;
  if (t === d.PurchaseTypes.ONE_TIME) return r ? I.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : I.default.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
  if (s()(null != a, "Subscription plan must be selected to render SubscriptionReviewButton"), r) return I.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
  if ((0, u.isPremiumSubscriptionPlan)(a.id)) {
    if (l) return I.default.Messages.BILLING_SELECT_PLAN;
    if (null != n) return n.isPaused ? I.default.Messages.RESUME : (0, c.subscriptionCanSwitchImmediately)(n, a.id, i) ? I.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : I.default.Messages.BILLING_SWITCH_PLAN_CHANGE;
    return (0, u.getBillingReviewSubheader)(null, a)
  }
  return I.default.Messages.BILLING_SUBSCRIBE_TO_PLAN
}

function p(e, t) {
  null != e.current && (e.current.scrollIntoView({
    behavior: "smooth"
  }), t())
}

function P(e) {
  let {
    legalTermsNodeRef: t,
    invoiceError: a,
    planError: r,
    disablePurchase: s,
    flashLegalTerms: u,
    isSubmitting: c,
    premiumSubscription: d,
    isGift: P,
    planGroup: m,
    isPrepaid: E,
    isTrial: A,
    makePurchase: S,
    needsPaymentSource: N
  } = e, {
    selectedPlan: R,
    hasAcceptedTerms: M,
    purchaseType: b
  } = (0, l.usePaymentContext)(), v = f({
    purchaseType: b,
    plan: R,
    premiumSubscription: d,
    isGift: P,
    planGroup: m,
    isPrepaidPaymentSource: E
  });
  if (null != a || null != r || s) return (0, n.jsx)(i.Button, {
    color: i.Button.Colors.GREEN,
    disabled: !0,
    children: v
  });
  if (N) return (0, n.jsx)(i.Tooltip, {
    text: I.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
    children: e => (0, n.jsx)(i.Button, {
      ...e,
      color: i.Button.Colors.GREEN,
      type: "submit",
      "data-testid": "submitButton",
      disabled: !0,
      children: v
    })
  });
  if (A) return (0, n.jsxs)(o.default, {
    innerClassName: _.innerButton,
    "data-testid": M ? "purchase" : "submitButton",
    onClick: M ? S : () => p(t, u),
    color: i.Button.Colors.GREEN,
    submitting: c,
    children: [(0, n.jsx)("img", {
      alt: "",
      className: _.nitroIcon,
      src: T
    }), v]
  });
  else if (!M) return (0, n.jsx)(i.Tooltip, {
    text: I.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
    children: e => (0, n.jsx)(i.Button, {
      ...e,
      color: i.Button.Colors.GREEN,
      type: "submit",
      onClick: () => p(t, u),
      "data-testid": "submitButton",
      children: v
    })
  });
  else return (0, n.jsx)(i.Button, {
    "data-testid": "purchase",
    onClick: S,
    color: i.Button.Colors.GREEN,
    submitting: c,
    children: v
  })
}