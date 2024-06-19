t.d(s, {
  Z: function() {
    return P
  }
});
var n, a, i, l, r = t(735250),
  o = t(470079),
  c = t(120356),
  u = t.n(c),
  d = t(481060),
  E = t(987032),
  _ = t(46141),
  p = t(285952),
  I = t(912454),
  m = t(122289),
  N = t(624138),
  C = t(689938),
  h = t(398333);
class P extends(l = o.PureComponent) {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (e instanceof _.qo) return I.ZP.Types.PAYPAL;
    if (e instanceof _.Sf) return I.ZP.Types.SOFORT;
    if (e instanceof _.dm) return I.ZP.getType(e.brand);
    else if (e instanceof _.fv) return I.ZP.Types.GIROPAY;
    else if (e instanceof _.Vg) return I.ZP.Types.PRZELEWY24;
    else if (e instanceof _.sn) return I.ZP.Types.PAYSAFECARD;
    else if (e instanceof _.o_) return I.ZP.Types.GCASH;
    else if (e instanceof _.kX) return I.ZP.Types.GRABPAY;
    else if (e instanceof _.z) return I.ZP.Types.MOMO_WALLET;
    else if (e instanceof _.Xc) return I.ZP.Types.VENMO;
    else if (e instanceof _.Om) return I.ZP.Types.KAKAOPAY;
    else if (e instanceof _.JC) return I.ZP.Types.GOPAY_WALLET;
    else if (e instanceof _.U4) return I.ZP.Types.BANCONTACT;
    else if (e instanceof _.D0) return I.ZP.Types.EPS;
    else if (e instanceof _.jc) return I.ZP.Types.IDEAL;
    else if (e instanceof _.u_) return I.ZP.Types.CASH_APP;
    else if (e instanceof _.$z) return I.ZP.Types.APPLE;
    return I.ZP.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof _.dm ? C.Z.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
      brand: (0, N.De)(e.brand),
      last_4: e.last4
    }) : e instanceof _.qo ? C.Z.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof _.Sf ? C.Z.Messages.PAYMENT_SOURCE_SOFORT : e instanceof _.fv ? C.Z.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof _.Vg ? C.Z.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof _.sn ? C.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof _.o_ ? C.Z.Messages.PAYMENT_SOURCE_GCASH : e instanceof _.kX ? C.Z.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof _.z ? C.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof _.Xc ? C.Z.Messages.PAYMENT_SOURCE_VENMO : e instanceof _.Om ? C.Z.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof _.JC ? C.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof _.U4 ? C.Z.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof _.jc ? C.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
      bank: (0, E.YE)(e.bank)
    }) : e instanceof _.D0 ? C.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
      bank: (0, E.Ul)(e.bank)
    }) : e instanceof _.u_ ? C.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof _.$z ? C.Z.Messages.PAYMENT_SOURCE_APPLE : C.Z.Messages.PAYMENT_SOURCE_UNKNOWN
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: s
    } = this.props;
    return (0, r.jsx)(d.Text, {
      className: u()(h.description, s),
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: s
    } = this.props, t = null;
    return e instanceof _.dm ? t = C.Z.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
      month: (0, m.E2)(e.expiresMonth, s),
      year: e.expiresYear
    }) : e instanceof _.qo ? t = e.email : e instanceof _.Sf ? t = e.email : e instanceof _.Vg ? t = e.email : e instanceof _.Xc ? t = "@" + e.username : e instanceof _.u_ && (t = e.username), t
  }
  render() {
    let {
      isDefault: e,
      paymentSource: s,
      showSubtext: t,
      isForSubscription: n,
      showPaymentSourceIcon: a,
      showLabels: i
    } = this.props, l = this.renderSubText();
    return (0, r.jsxs)(p.Z, {
      children: [a && (0, r.jsx)(I.ZP, {
        type: this.typeString
      }), (0, r.jsxs)(p.Z, {
        direction: p.Z.Direction.VERTICAL,
        className: h.descriptionWrapper,
        children: [(0, r.jsxs)(p.Z, {
          align: p.Z.Align.CENTER,
          children: [this.renderDescription(), i && e ? (0, r.jsx)("div", {
            className: h.defaultIndicator,
            children: C.Z.Messages.DEFAULT
          }) : null, n ? (0, r.jsx)("div", {
            className: h.premiumIndicator,
            children: C.Z.Messages.PAYMENT_SOURCE_SUBSCRIPTION
          }) : null, i && s.invalid ? (0, r.jsx)("div", {
            className: h.invalidIndicator,
            children: C.Z.Messages.PAYMENT_SOURCE_INVALID
          }) : null]
        }), t && null != l ? (0, r.jsx)("div", {
          className: h.subText,
          children: l
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
}, (a = "defaultProps") in(n = P) ? Object.defineProperty(n, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = i