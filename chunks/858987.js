"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
  },
  getReviewConfirmButtonLabel: function() {
    return T
  }
});
var n = a("735250");
a("470079");
var r = a("512722"),
  s = a.n(r),
  i = a("481060"),
  l = a("598"),
  o = a("74538"),
  u = a("296848"),
  c = a("231338"),
  d = a("689938"),
  I = a("66471"),
  _ = a("74316");

function T(e) {
  let {
    purchaseType: t,
    plan: a,
    premiumSubscription: n,
    isGift: r,
    planGroup: i,
    isPrepaidPaymentSource: l
  } = e;
  if (t === c.PurchaseTypes.ONE_TIME) return r ? d.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : d.default.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
  if (s()(null != a, "Subscription plan must be selected to render SubscriptionReviewButton"), r) return d.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
  if ((0, o.isPremiumSubscriptionPlan)(a.id)) {
    if (l) return d.default.Messages.BILLING_SELECT_PLAN;
    if (null != n) return n.isPaused ? d.default.Messages.RESUME : (0, u.subscriptionCanSwitchImmediately)(n, a.id, i) ? d.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : d.default.Messages.BILLING_SWITCH_PLAN_CHANGE;
    return (0, o.getBillingReviewSubheader)(null, a)
  }
  return d.default.Messages.BILLING_SUBSCRIBE_TO_PLAN
}

function f(e, t) {
  null != e.current && (e.current.scrollIntoView({
    behavior: "smooth"
  }), t())
}

function p(e) {
  let {
    legalTermsNodeRef: t,
    invoiceError: a,
    planError: r,
    disablePurchase: s,
    flashLegalTerms: o,
    isSubmitting: u,
    premiumSubscription: c,
    isGift: p,
    planGroup: P,
    isPrepaid: m,
    isTrial: E,
    makePurchase: A,
    needsPaymentSource: S
  } = e, {
    selectedPlan: N,
    hasAcceptedTerms: R,
    purchaseType: M
  } = (0, l.usePaymentContext)(), b = T({
    purchaseType: M,
    plan: N,
    premiumSubscription: c,
    isGift: p,
    planGroup: P,
    isPrepaidPaymentSource: m
  });
  if (null != a || null != r || s) return (0, n.jsx)(i.Button, {
    color: i.Button.Colors.GREEN,
    disabled: !0,
    children: b
  });
  if (S) return (0, n.jsx)(i.Tooltip, {
    text: d.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
    children: e => (0, n.jsx)(i.Button, {
      ...e,
      color: i.Button.Colors.GREEN,
      type: "submit",
      "data-testid": "submitButton",
      disabled: !0,
      children: b
    })
  });
  if (E) return (0, n.jsxs)(i.ShinyButton, {
    innerClassName: I.innerButton,
    "data-testid": R ? "purchase" : "submitButton",
    onClick: R ? A : () => f(t, o),
    color: i.Button.Colors.GREEN,
    submitting: u,
    children: [(0, n.jsx)("img", {
      alt: "",
      className: I.nitroIcon,
      src: _
    }), b]
  });
  else if (!R) return (0, n.jsx)(i.Tooltip, {
    text: d.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
    children: e => (0, n.jsx)(i.Button, {
      ...e,
      color: i.Button.Colors.GREEN,
      type: "submit",
      onClick: () => f(t, o),
      "data-testid": "submitButton",
      children: b
    })
  });
  else return (0, n.jsx)(i.Button, {
    "data-testid": "purchase",
    onClick: A,
    color: i.Button.Colors.GREEN,
    submitting: u,
    children: b
  })
}