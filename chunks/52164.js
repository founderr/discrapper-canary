t.d(s, {
  Z: function() {
    return C
  }
}), t(47120);
var n = t(735250);
t(470079);
var a = t(512722),
  i = t.n(a),
  r = t(481060),
  o = t(100527),
  l = t(906732),
  c = t(509545),
  d = t(74538),
  _ = t(937615),
  E = t(374649),
  u = t(474936),
  T = t(981631),
  S = t(689938),
  I = t(340301);

function N(e) {
  let {
    subscription: s,
    withOverheadSeparator: t
  } = e, {
    analyticsLocations: a
  } = (0, l.ZP)(), [N] = (0, E.ED)({
    subscriptionId: s.id,
    renewal: !0,
    analyticsLocations: a,
    analyticsLocation: o.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
  });
  if (null == N) return null;
  let C = t ? I.finePrintWithOverheadSeparator : I.finePrint,
    A = N.invoiceItems.find(e => {
      let {
        subscriptionPlanId: s
      } = e;
      return (0, d.uZ)(s)
    });
  if (null == A) return null;
  let m = A.subscriptionPlanId,
    O = c.Z.get(m);
  i()(null != O, "Missing plan");
  let g = (0, _.T4)(N.total, N.currency),
    h = "";
  return O.interval === u.rV.YEAR ? h = S.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_YEARLY.format({
    price: g,
    termsUrl: T.EYA.TERMS,
    paidURL: T.EYA.PAID_TERMS,
    privacyUrl: T.EYA.PRIVACY
  }) : O.interval === u.rV.MONTH && (h = 1 === O.intervalCount ? S.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MONTHLY.format({
    price: g,
    termsUrl: T.EYA.TERMS,
    paidURL: T.EYA.PAID_TERMS,
    privacyUrl: T.EYA.PRIVACY
  }) : S.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MULTI_MONTH.format({
    price: g,
    termsUrl: T.EYA.TERMS,
    paidURL: T.EYA.PAID_TERMS,
    privacyUrl: T.EYA.PRIVACY,
    intervalCount: O.intervalCount
  })), (0, n.jsx)(r.Text, {
    color: "text-muted",
    className: C,
    variant: "text-xs/normal",
    children: h
  })
}

function C(e) {
  let {
    subscription: s,
    withOverheadSeparator: t
  } = e;
  return s.status === T.O0b.CANCELED || s.isPurchasedExternally ? null : (0, n.jsx)(N, {
    subscription: s,
    withOverheadSeparator: t
  })
}