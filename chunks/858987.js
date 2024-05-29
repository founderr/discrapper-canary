"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  },
  getReviewConfirmButtonLabel: function() {
    return L
  }
});
var a = s("735250");
s("470079");
var r = s("512722"),
  l = s.n(r),
  i = s("481060"),
  n = s("598"),
  c = s("976644"),
  u = s("74538"),
  o = s("296848"),
  d = s("231338"),
  E = s("689938"),
  _ = s("66471"),
  I = s("74316");

function L(e) {
  let {
    purchaseType: t,
    plan: s,
    premiumSubscription: a,
    isGift: r,
    planGroup: i,
    isPrepaidPaymentSource: n
  } = e;
  if (t === d.PurchaseTypes.ONE_TIME) return r ? E.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : E.default.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
  if (l()(null != s, "Subscription plan must be selected to render SubscriptionReviewButton"), r) return E.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
  if ((0, u.isPremiumSubscriptionPlan)(s.id)) {
    if (n) return E.default.Messages.BILLING_SELECT_PLAN;
    if (null != a) return a.isPaused ? E.default.Messages.RESUME : (0, o.subscriptionCanSwitchImmediately)(a, s.id, i) ? E.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : E.default.Messages.BILLING_SWITCH_PLAN_CHANGE;
    return (0, u.getBillingReviewSubheader)(null, s)
  }
  return E.default.Messages.BILLING_SUBSCRIBE_TO_PLAN
}

function T(e, t) {
  null != e.current && (e.current.scrollIntoView({
    behavior: "smooth"
  }), t())
}

function A(e) {
  let {
    legalTermsNodeRef: t,
    invoiceError: s,
    planError: r,
    disablePurchase: l,
    flashLegalTerms: u,
    isSubmitting: o,
    premiumSubscription: d,
    isGift: A,
    planGroup: p,
    isPrepaid: N,
    isTrial: M,
    makePurchase: f,
    needsPaymentSource: R
  } = e, {
    selectedPlan: S,
    hasAcceptedTerms: P,
    purchaseType: h,
    purchasePreviewError: m
  } = (0, n.usePaymentContext)(), C = L({
    purchaseType: h,
    plan: S,
    premiumSubscription: d,
    isGift: A,
    planGroup: p,
    isPrepaidPaymentSource: N
  });
  if (null != s || null != r || null != m || l) return (0, a.jsx)(i.Button, {
    color: i.Button.Colors.GREEN,
    disabled: !0,
    children: C
  });
  if (R) return (0, a.jsx)(i.Tooltip, {
    text: E.default.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
    children: e => (0, a.jsx)(i.Button, {
      ...e,
      color: i.Button.Colors.GREEN,
      type: "submit",
      "data-testid": "submitButton",
      disabled: !0,
      children: C
    })
  });
  if (M) return (0, a.jsxs)(c.default, {
    innerClassName: _.innerButton,
    "data-testid": P ? "purchase" : "submitButton",
    onClick: P ? f : () => T(t, u),
    color: i.Button.Colors.GREEN,
    submitting: o,
    children: [(0, a.jsx)("img", {
      alt: "",
      className: _.nitroIcon,
      src: I
    }), C]
  });
  else if (!P) return (0, a.jsx)(i.Tooltip, {
    text: E.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
    children: e => (0, a.jsx)(i.Button, {
      ...e,
      color: i.Button.Colors.GREEN,
      type: "submit",
      onClick: () => T(t, u),
      "data-testid": "submitButton",
      children: C
    })
  });
  else return (0, a.jsx)(i.Button, {
    "data-testid": "purchase",
    onClick: f,
    color: i.Button.Colors.GREEN,
    submitting: o,
    children: C
  })
}