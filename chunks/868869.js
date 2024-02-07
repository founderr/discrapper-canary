"use strict";
s.r(t), s.d(t, {
  getReviewConfirmButtonLabel: function() {
    return L
  },
  default: function() {
    return A
  }
});
var a = s("37983");
s("884691");
var l = s("627445"),
  r = s.n(l),
  i = s("77078"),
  n = s("642906"),
  c = s("181114"),
  u = s("719923"),
  o = s("380186"),
  d = s("843455"),
  E = s("782340"),
  _ = s("122778"),
  I = s("121432");

function L(e) {
  let {
    purchaseType: t,
    plan: s,
    premiumSubscription: a,
    isGift: l,
    planGroup: i,
    isPrepaidPaymentSource: n
  } = e;
  if (t === d.PurchaseTypes.ONE_TIME) return l ? E.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : E.default.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
  if (r(null != s, "Subscription plan must be selected to render SubscriptionReviewButton"), l) return E.default.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
  if ((0, u.isPremiumSubscriptionPlan)(s.id)) return n ? E.default.Messages.BILLING_SELECT_PLAN : null != a ? (0, o.subscriptionCanSwitchImmediately)(a, s.id, i) ? E.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : E.default.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, u.getBillingReviewSubheader)(null, s);
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
    planError: l,
    disablePurchase: r,
    flashLegalTerms: u,
    isSubmitting: o,
    premiumSubscription: d,
    isGift: A,
    planGroup: p,
    isPrepaid: N,
    isTrial: M,
    makePurchase: f,
    needsPaymentSource: S
  } = e, {
    selectedPlan: R,
    hasAcceptedTerms: h,
    purchaseType: P
  } = (0, n.usePaymentContext)(), C = L({
    purchaseType: P,
    plan: R,
    premiumSubscription: d,
    isGift: A,
    planGroup: p,
    isPrepaidPaymentSource: N
  });
  if (null != s || null != l || r) return (0, a.jsx)(i.Button, {
    color: i.Button.Colors.GREEN,
    disabled: !0,
    children: C
  });
  if (S) return (0, a.jsx)(i.Tooltip, {
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
    "data-testid": h ? "purchase" : "submitButton",
    onClick: h ? f : () => T(t, u),
    color: i.Button.Colors.GREEN,
    submitting: o,
    children: [(0, a.jsx)("img", {
      alt: "",
      className: _.nitroIcon,
      src: I
    }), C]
  });
  else if (!h) return (0, a.jsx)(i.Tooltip, {
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