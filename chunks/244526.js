s.d(t, {
  Z: function() {
return A;
  }
});
var n, a, i, r, o = s(735250),
  l = s(470079),
  c = s(120356),
  d = s.n(c),
  _ = s(481060),
  E = s(987032),
  u = s(600164),
  T = s(219929),
  I = s(46141),
  S = s(122289),
  N = s(624138),
  C = s(689938),
  m = s(467811);
class A extends(r = l.PureComponent) {
  get typeString() {
let {
  paymentSource: e
} = this.props;
if (e instanceof I.qo)
  return T.ZP.Types.PAYPAL;
if (e instanceof I.Sf)
  return T.ZP.Types.SOFORT;
if (e instanceof I.dm)
  return T.ZP.getType(e.brand);
else if (e instanceof I.fv)
  return T.ZP.Types.GIROPAY;
else if (e instanceof I.Vg)
  return T.ZP.Types.PRZELEWY24;
else if (e instanceof I.sn)
  return T.ZP.Types.PAYSAFECARD;
else if (e instanceof I.o_)
  return T.ZP.Types.GCASH;
else if (e instanceof I.kX)
  return T.ZP.Types.GRABPAY;
else if (e instanceof I.z)
  return T.ZP.Types.MOMO_WALLET;
else if (e instanceof I.Xc)
  return T.ZP.Types.VENMO;
else if (e instanceof I.Om)
  return T.ZP.Types.KAKAOPAY;
else if (e instanceof I.JC)
  return T.ZP.Types.GOPAY_WALLET;
else if (e instanceof I.U4)
  return T.ZP.Types.BANCONTACT;
else if (e instanceof I.D0)
  return T.ZP.Types.EPS;
else if (e instanceof I.jc)
  return T.ZP.Types.IDEAL;
else if (e instanceof I.u_)
  return T.ZP.Types.CASH_APP;
else if (e instanceof I.$z)
  return T.ZP.Types.APPLE;
return T.ZP.Types.UNKNOWN;
  }
  getLabel(e) {
return e instanceof I.dm ? C.Z.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
  brand: (0, N.De)(e.brand),
  last_4: e.last4
}) : e instanceof I.qo ? C.Z.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof I.Sf ? C.Z.Messages.PAYMENT_SOURCE_SOFORT : e instanceof I.fv ? C.Z.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof I.Vg ? C.Z.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof I.sn ? C.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof I.o_ ? C.Z.Messages.PAYMENT_SOURCE_GCASH : e instanceof I.kX ? C.Z.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof I.z ? C.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof I.Xc ? C.Z.Messages.PAYMENT_SOURCE_VENMO : e instanceof I.Om ? C.Z.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof I.JC ? C.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof I.U4 ? C.Z.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof I.jc ? C.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
  bank: (0, E.YE)(e.bank)
}) : e instanceof I.D0 ? C.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
  bank: (0, E.Ul)(e.bank)
}) : e instanceof I.u_ ? C.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof I.$z ? C.Z.Messages.PAYMENT_SOURCE_APPLE : C.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
  }
  renderDescription() {
let {
  paymentSource: e,
  descriptionClassName: t
} = this.props;
return (0, o.jsx)(_.Text, {
  className: d()(m.description, t),
  variant: 'text-md/semibold',
  children: this.getLabel(e)
});
  }
  renderSubText() {
let {
  paymentSource: e,
  locale: t
} = this.props, s = null;
return e instanceof I.dm ? s = C.Z.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
  month: (0, S.E2)(e.expiresMonth, t),
  year: e.expiresYear
}) : e instanceof I.qo ? s = e.email : e instanceof I.Sf ? s = e.email : e instanceof I.Vg ? s = e.email : e instanceof I.Xc ? s = '@' + e.username : e instanceof I.u_ && (s = e.username), s;
  }
  render() {
let {
  isDefault: e,
  paymentSource: t,
  showSubtext: s,
  isForSubscription: n,
  showPaymentSourceIcon: a,
  showLabels: i
} = this.props, r = this.renderSubText();
return (0, o.jsxs)(u.Z, {
  children: [
    a && (0, o.jsx)(T.ZP, {
      type: this.typeString
    }),
    (0, o.jsxs)(u.Z, {
      direction: u.Z.Direction.VERTICAL,
      className: m.descriptionWrapper,
      children: [
        (0, o.jsxs)(u.Z, {
          align: u.Z.Align.CENTER,
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
            i && t.invalid ? (0, o.jsx)('div', {
              className: m.invalidIndicator,
              children: C.Z.Messages.PAYMENT_SOURCE_INVALID
            }) : null
          ]
        }),
        s && null != r ? (0, o.jsx)('div', {
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