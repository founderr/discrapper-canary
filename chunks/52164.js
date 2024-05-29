"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var a = s("735250");
s("470079");
var n = s("512722"),
  l = s.n(n),
  i = s("481060"),
  r = s("100527"),
  o = s("906732"),
  d = s("509545"),
  u = s("74538"),
  c = s("937615"),
  S = s("374649"),
  E = s("474936"),
  T = s("981631"),
  _ = s("689938"),
  f = s("904014");

function m(e) {
  let {
    subscription: t,
    withOverheadSeparator: s
  } = e, {
    analyticsLocations: n
  } = (0, o.default)(), [m] = (0, S.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    renewal: !0,
    analyticsLocations: n,
    analyticsLocation: r.default.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
  });
  if (null == m) return null;
  let g = s ? f.finePrintWithOverheadSeparator : f.finePrint,
    I = m.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return (0, u.isPremiumBaseSubscriptionPlan)(t)
    });
  if (null == I) return null;
  let N = I.subscriptionPlanId,
    h = d.default.get(N);
  l()(null != h, "Missing plan");
  let C = (0, c.formatPrice)(m.total, m.currency),
    A = "";
  return h.interval === E.SubscriptionIntervalTypes.YEAR ? A = _.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_YEARLY.format({
    price: C,
    termsUrl: T.MarketingURLs.TERMS,
    paidURL: T.MarketingURLs.PAID_TERMS,
    privacyUrl: T.MarketingURLs.PRIVACY
  }) : h.interval === E.SubscriptionIntervalTypes.MONTH && (A = 1 === h.intervalCount ? _.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MONTHLY.format({
    price: C,
    termsUrl: T.MarketingURLs.TERMS,
    paidURL: T.MarketingURLs.PAID_TERMS,
    privacyUrl: T.MarketingURLs.PRIVACY
  }) : _.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MULTI_MONTH.format({
    price: C,
    termsUrl: T.MarketingURLs.TERMS,
    paidURL: T.MarketingURLs.PAID_TERMS,
    privacyUrl: T.MarketingURLs.PRIVACY,
    intervalCount: h.intervalCount
  })), (0, a.jsx)(i.Text, {
    color: "text-muted",
    className: g,
    variant: "text-xs/normal",
    children: A
  })
}

function g(e) {
  let {
    subscription: t,
    withOverheadSeparator: s
  } = e;
  return t.status === T.SubscriptionStatusTypes.CANCELED || t.isPurchasedExternally ? null : (0, a.jsx)(m, {
    subscription: t,
    withOverheadSeparator: s
  })
}