n.d(t, {
  Z: function() {
    return N
  }
});
var s, a, i, o, r = n(735250),
  l = n(470079),
  c = n(120356),
  d = n.n(c),
  u = n(481060),
  _ = n(987032),
  p = n(46141),
  m = n(285952),
  f = n(912454),
  E = n(122289),
  I = n(624138),
  C = n(689938),
  h = n(398333);
class N extends(o = l.PureComponent) {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (e instanceof p.qo) return f.ZP.Types.PAYPAL;
    if (e instanceof p.Sf) return f.ZP.Types.SOFORT;
    if (e instanceof p.dm) return f.ZP.getType(e.brand);
    else if (e instanceof p.fv) return f.ZP.Types.GIROPAY;
    else if (e instanceof p.Vg) return f.ZP.Types.PRZELEWY24;
    else if (e instanceof p.sn) return f.ZP.Types.PAYSAFECARD;
    else if (e instanceof p.o_) return f.ZP.Types.GCASH;
    else if (e instanceof p.kX) return f.ZP.Types.GRABPAY;
    else if (e instanceof p.z) return f.ZP.Types.MOMO_WALLET;
    else if (e instanceof p.Xc) return f.ZP.Types.VENMO;
    else if (e instanceof p.Om) return f.ZP.Types.KAKAOPAY;
    else if (e instanceof p.JC) return f.ZP.Types.GOPAY_WALLET;
    else if (e instanceof p.U4) return f.ZP.Types.BANCONTACT;
    else if (e instanceof p.D0) return f.ZP.Types.EPS;
    else if (e instanceof p.jc) return f.ZP.Types.IDEAL;
    else if (e instanceof p.u_) return f.ZP.Types.CASH_APP;
    else if (e instanceof p.$z) return f.ZP.Types.APPLE;
    return f.ZP.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof p.dm ? C.Z.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
      brand: (0, I.De)(e.brand),
      last_4: e.last4
    }) : e instanceof p.qo ? C.Z.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof p.Sf ? C.Z.Messages.PAYMENT_SOURCE_SOFORT : e instanceof p.fv ? C.Z.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof p.Vg ? C.Z.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof p.sn ? C.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof p.o_ ? C.Z.Messages.PAYMENT_SOURCE_GCASH : e instanceof p.kX ? C.Z.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof p.z ? C.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof p.Xc ? C.Z.Messages.PAYMENT_SOURCE_VENMO : e instanceof p.Om ? C.Z.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof p.JC ? C.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof p.U4 ? C.Z.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof p.jc ? C.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
      bank: (0, _.YE)(e.bank)
    }) : e instanceof p.D0 ? C.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
      bank: (0, _.Ul)(e.bank)
    }) : e instanceof p.u_ ? C.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof p.$z ? C.Z.Messages.PAYMENT_SOURCE_APPLE : C.Z.Messages.PAYMENT_SOURCE_UNKNOWN
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return (0, r.jsx)(u.Text, {
      className: d()(h.description, t),
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: t
    } = this.props, n = null;
    return e instanceof p.dm ? n = C.Z.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
      month: (0, E.E2)(e.expiresMonth, t),
      year: e.expiresYear
    }) : e instanceof p.qo ? n = e.email : e instanceof p.Sf ? n = e.email : e instanceof p.Vg ? n = e.email : e instanceof p.Xc ? n = "@" + e.username : e instanceof p.u_ && (n = e.username), n
  }
  render() {
    let {
      isDefault: e,
      paymentSource: t,
      showSubtext: n,
      isForSubscription: s,
      showPaymentSourceIcon: a,
      showLabels: i
    } = this.props, o = this.renderSubText();
    return (0, r.jsxs)(m.Z, {
      children: [a && (0, r.jsx)(f.ZP, {
        type: this.typeString
      }), (0, r.jsxs)(m.Z, {
        direction: m.Z.Direction.VERTICAL,
        className: h.descriptionWrapper,
        children: [(0, r.jsxs)(m.Z, {
          align: m.Z.Align.CENTER,
          children: [this.renderDescription(), i && e ? (0, r.jsx)("div", {
            className: h.defaultIndicator,
            children: C.Z.Messages.DEFAULT
          }) : null, s ? (0, r.jsx)("div", {
            className: h.premiumIndicator,
            children: C.Z.Messages.PAYMENT_SOURCE_SUBSCRIPTION
          }) : null, i && t.invalid ? (0, r.jsx)("div", {
            className: h.invalidIndicator,
            children: C.Z.Messages.PAYMENT_SOURCE_INVALID
          }) : null]
        }), n && null != o ? (0, r.jsx)("div", {
          className: h.subText,
          children: o
        }) : null]
      })]
    })
  }
}
i = {
  isForSubscription: !1,
  isDefault: !1,
  showSubtext: !1,
  showPaymentSourceIcon: !1,
  showLabels: !1
}, (a = "defaultProps") in(s = N) ? Object.defineProperty(s, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = i