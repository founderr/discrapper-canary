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
  I = s("904014");

function N(e) {
  let {
    subscription: t,
    withOverheadSeparator: s
  } = e, {
    analyticsLocations: n
  } = (0, o.default)(), [N] = (0, S.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    renewal: !0,
    analyticsLocations: n,
    analyticsLocation: r.default.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
  });
  if (null == N) return null;
  let g = s ? I.finePrintWithOverheadSeparator : I.finePrint,
    f = N.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return (0, u.isPremiumBaseSubscriptionPlan)(t)
    });
  if (null == f) return null;
  let m = f.subscriptionPlanId,
    C = d.default.get(m);
  l()(null != C, "Missing plan");
  let A = (0, c.formatPrice)(N.total, N.currency),
    O = "";
  return C.interval === E.SubscriptionIntervalTypes.YEAR ? O = _.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_YEARLY.format({
    price: A,
    termsUrl: T.MarketingURLs.TERMS,
    paidURL: T.MarketingURLs.PAID_TERMS,
    privacyUrl: T.MarketingURLs.PRIVACY
  }) : C.interval === E.SubscriptionIntervalTypes.MONTH && (O = 1 === C.intervalCount ? _.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MONTHLY.format({
    price: A,
    termsUrl: T.MarketingURLs.TERMS,
    paidURL: T.MarketingURLs.PAID_TERMS,
    privacyUrl: T.MarketingURLs.PRIVACY
  }) : _.default.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MULTI_MONTH.format({
    price: A,
    termsUrl: T.MarketingURLs.TERMS,
    paidURL: T.MarketingURLs.PAID_TERMS,
    privacyUrl: T.MarketingURLs.PRIVACY,
    intervalCount: C.intervalCount
  })), (0, a.jsx)(i.Text, {
    color: "text-muted",
    className: g,
    variant: "text-xs/normal",
    children: O
  })
}

function g(e) {
  let {
    subscription: t,
    withOverheadSeparator: s
  } = e;
  return t.status === T.SubscriptionStatusTypes.CANCELED || t.isPurchasedExternally ? null : (0, a.jsx)(N, {
    subscription: t,
    withOverheadSeparator: s
  })
}