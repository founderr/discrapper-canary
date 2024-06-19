t.d(s, {
  Z: function() {
    return A
  }
}), t(47120);
var n = t(735250);
t(470079);
var i = t(512722),
  a = t.n(i),
  l = t(481060),
  r = t(100527),
  o = t(906732),
  c = t(509545),
  E = t(74538),
  d = t(937615),
  _ = t(374649),
  T = t(474936),
  S = t(981631),
  u = t(689938),
  I = t(340301);

function N(e) {
  let {
    subscription: s,
    withOverheadSeparator: t
  } = e, {
    analyticsLocations: i
  } = (0, o.ZP)(), [N] = (0, _.ED)({
    subscriptionId: s.id,
    renewal: !0,
    analyticsLocations: i,
    analyticsLocation: r.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
  });
  if (null == N) return null;
  let A = t ? I.finePrintWithOverheadSeparator : I.finePrint,
    C = N.invoiceItems.find(e => {
      let {
        subscriptionPlanId: s
      } = e;
      return (0, E.uZ)(s)
    });
  if (null == C) return null;
  let O = C.subscriptionPlanId,
    m = c.Z.get(O);
  a()(null != m, "Missing plan");
  let h = (0, d.T4)(N.total, N.currency),
    g = "";
  return m.interval === T.rV.YEAR ? g = u.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_YEARLY.format({
    price: h,
    termsUrl: S.EYA.TERMS,
    paidURL: S.EYA.PAID_TERMS,
    privacyUrl: S.EYA.PRIVACY
  }) : m.interval === T.rV.MONTH && (g = 1 === m.intervalCount ? u.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MONTHLY.format({
    price: h,
    termsUrl: S.EYA.TERMS,
    paidURL: S.EYA.PAID_TERMS,
    privacyUrl: S.EYA.PRIVACY
  }) : u.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MULTI_MONTH.format({
    price: h,
    termsUrl: S.EYA.TERMS,
    paidURL: S.EYA.PAID_TERMS,
    privacyUrl: S.EYA.PRIVACY,
    intervalCount: m.intervalCount
  })), (0, n.jsx)(l.Text, {
    color: "text-muted",
    className: A,
    variant: "text-xs/normal",
    children: g
  })
}

function A(e) {
  let {
    subscription: s,
    withOverheadSeparator: t
  } = e;
  return s.status === S.O0b.CANCELED || s.isPurchasedExternally ? null : (0, n.jsx)(N, {
    subscription: s,
    withOverheadSeparator: t
  })
}