t.d(s, {
  Z: function() {
return A;
  }
});
var n, a, i, r, o = t(735250),
  l = t(470079),
  c = t(120356),
  d = t.n(c),
  _ = t(481060),
  E = t(987032),
  u = t(219929),
  T = t(46141),
  I = t(285952),
  S = t(122289),
  N = t(624138),
  C = t(689938),
  m = t(467811);
class A extends(r = l.PureComponent) {
  get typeString() {
let {
  paymentSource: e
} = this.props;
if (e instanceof T.qo)
  return u.ZP.Types.PAYPAL;
if (e instanceof T.Sf)
  return u.ZP.Types.SOFORT;
if (e instanceof T.dm)
  return u.ZP.getType(e.brand);
else if (e instanceof T.fv)
  return u.ZP.Types.GIROPAY;
else if (e instanceof T.Vg)
  return u.ZP.Types.PRZELEWY24;
else if (e instanceof T.sn)
  return u.ZP.Types.PAYSAFECARD;
else if (e instanceof T.o_)
  return u.ZP.Types.GCASH;
else if (e instanceof T.kX)
  return u.ZP.Types.GRABPAY;
else if (e instanceof T.z)
  return u.ZP.Types.MOMO_WALLET;
else if (e instanceof T.Xc)
  return u.ZP.Types.VENMO;
else if (e instanceof T.Om)
  return u.ZP.Types.KAKAOPAY;
else if (e instanceof T.JC)
  return u.ZP.Types.GOPAY_WALLET;
else if (e instanceof T.U4)
  return u.ZP.Types.BANCONTACT;
else if (e instanceof T.D0)
  return u.ZP.Types.EPS;
else if (e instanceof T.jc)
  return u.ZP.Types.IDEAL;
else if (e instanceof T.u_)
  return u.ZP.Types.CASH_APP;
else if (e instanceof T.$z)
  return u.ZP.Types.APPLE;
return u.ZP.Types.UNKNOWN;
  }
  getLabel(e) {
return e instanceof T.dm ? C.Z.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
  brand: (0, N.De)(e.brand),
  last_4: e.last4
}) : e instanceof T.qo ? C.Z.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof T.Sf ? C.Z.Messages.PAYMENT_SOURCE_SOFORT : e instanceof T.fv ? C.Z.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof T.Vg ? C.Z.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof T.sn ? C.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof T.o_ ? C.Z.Messages.PAYMENT_SOURCE_GCASH : e instanceof T.kX ? C.Z.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof T.z ? C.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof T.Xc ? C.Z.Messages.PAYMENT_SOURCE_VENMO : e instanceof T.Om ? C.Z.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof T.JC ? C.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof T.U4 ? C.Z.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof T.jc ? C.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
  bank: (0, E.YE)(e.bank)
}) : e instanceof T.D0 ? C.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
  bank: (0, E.Ul)(e.bank)
}) : e instanceof T.u_ ? C.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof T.$z ? C.Z.Messages.PAYMENT_SOURCE_APPLE : C.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
  }
  renderDescription() {
let {
  paymentSource: e,
  descriptionClassName: s
} = this.props;
return (0, o.jsx)(_.Text, {
  className: d()(m.description, s),
  variant: 'text-md/semibold',
  children: this.getLabel(e)
});
  }
  renderSubText() {
let {
  paymentSource: e,
  locale: s
} = this.props, t = null;
return e instanceof T.dm ? t = C.Z.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
  month: (0, S.E2)(e.expiresMonth, s),
  year: e.expiresYear
}) : e instanceof T.qo ? t = e.email : e instanceof T.Sf ? t = e.email : e instanceof T.Vg ? t = e.email : e instanceof T.Xc ? t = '@' + e.username : e instanceof T.u_ && (t = e.username), t;
  }
  render() {
let {
  isDefault: e,
  paymentSource: s,
  showSubtext: t,
  isForSubscription: n,
  showPaymentSourceIcon: a,
  showLabels: i
} = this.props, r = this.renderSubText();
return (0, o.jsxs)(I.Z, {
  children: [
    a && (0, o.jsx)(u.ZP, {
      type: this.typeString
    }),
    (0, o.jsxs)(I.Z, {
      direction: I.Z.Direction.VERTICAL,
      className: m.descriptionWrapper,
      children: [
        (0, o.jsxs)(I.Z, {
          align: I.Z.Align.CENTER,
          children: [
            this.renderDescription(),
            i && e ? (0, o.jsx)('div', {
              className: m.defaultIndicator,
              children: C.Z.Messages.DEFAULT
            }) : null,
            n ? (0, o.jsx)('div', {
              className: m.premiumIndicator,
              children: C.Z.Messages.PAYMENT_SOURCE_SUBSCRIPTION
            }) : null,
            i && s.invalid ? (0, o.jsx)('div', {
              className: m.invalidIndicator,
              children: C.Z.Messages.PAYMENT_SOURCE_INVALID
            }) : null
          ]
        }),
        t && null != r ? (0, o.jsx)('div', {
          className: m.subText,
          children: r
        }) : null
      ]
    })
  ]
});
  }
}
i = {
  isForSubscription: !1,
  isDefault: !1,
  showSubtext: !1,
  showPaymentSourceIcon: !1,
  showLabels: !1
}, (a = 'defaultProps') in(n = A) ? Object.defineProperty(n, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = i;