"use strict";
s.d(t, {
  Z: function() {
    return I
  }
});
var n, r, a, i, l = s(735250),
  o = s(470079),
  c = s(120356),
  u = s.n(c),
  d = s(481060),
  C = s(987032),
  f = s(46141),
  p = s(285952),
  E = s(912454),
  g = s(122289),
  m = s(624138),
  h = s(689938),
  x = s(398333);
class I extends(i = o.PureComponent) {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (e instanceof f.qo) return E.ZP.Types.PAYPAL;
    if (e instanceof f.Sf) return E.ZP.Types.SOFORT;
    if (e instanceof f.dm) return E.ZP.getType(e.brand);
    else if (e instanceof f.fv) return E.ZP.Types.GIROPAY;
    else if (e instanceof f.Vg) return E.ZP.Types.PRZELEWY24;
    else if (e instanceof f.sn) return E.ZP.Types.PAYSAFECARD;
    else if (e instanceof f.o_) return E.ZP.Types.GCASH;
    else if (e instanceof f.kX) return E.ZP.Types.GRABPAY;
    else if (e instanceof f.z) return E.ZP.Types.MOMO_WALLET;
    else if (e instanceof f.Xc) return E.ZP.Types.VENMO;
    else if (e instanceof f.Om) return E.ZP.Types.KAKAOPAY;
    else if (e instanceof f.JC) return E.ZP.Types.GOPAY_WALLET;
    else if (e instanceof f.U4) return E.ZP.Types.BANCONTACT;
    else if (e instanceof f.D0) return E.ZP.Types.EPS;
    else if (e instanceof f.jc) return E.ZP.Types.IDEAL;
    else if (e instanceof f.u_) return E.ZP.Types.CASH_APP;
    else if (e instanceof f.$z) return E.ZP.Types.APPLE;
    return E.ZP.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof f.dm ? h.Z.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
      brand: (0, m.De)(e.brand),
      last_4: e.last4
    }) : e instanceof f.qo ? h.Z.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof f.Sf ? h.Z.Messages.PAYMENT_SOURCE_SOFORT : e instanceof f.fv ? h.Z.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof f.Vg ? h.Z.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof f.sn ? h.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof f.o_ ? h.Z.Messages.PAYMENT_SOURCE_GCASH : e instanceof f.kX ? h.Z.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof f.z ? h.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof f.Xc ? h.Z.Messages.PAYMENT_SOURCE_VENMO : e instanceof f.Om ? h.Z.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof f.JC ? h.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof f.U4 ? h.Z.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof f.jc ? h.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
      bank: (0, C.YE)(e.bank)
    }) : e instanceof f.D0 ? h.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
      bank: (0, C.Ul)(e.bank)
    }) : e instanceof f.u_ ? h.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof f.$z ? h.Z.Messages.PAYMENT_SOURCE_APPLE : h.Z.Messages.PAYMENT_SOURCE_UNKNOWN
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return (0, l.jsx)(d.Text, {
      className: u()(x.description, t),
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: t
    } = this.props, s = null;
    return e instanceof f.dm ? s = h.Z.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
      month: (0, g.E2)(e.expiresMonth, t),
      year: e.expiresYear
    }) : e instanceof f.qo ? s = e.email : e instanceof f.Sf ? s = e.email : e instanceof f.Vg ? s = e.email : e instanceof f.Xc ? s = "@" + e.username : e instanceof f.u_ && (s = e.username), s
  }
  render() {
    let {
      isDefault: e,
      paymentSource: t,
      showSubtext: s,
      isForSubscription: n,
      showPaymentSourceIcon: r,
      showLabels: a
    } = this.props, i = this.renderSubText();
    return (0, l.jsxs)(p.Z, {
      children: [r && (0, l.jsx)(E.ZP, {
        type: this.typeString
      }), (0, l.jsxs)(p.Z, {
        direction: p.Z.Direction.VERTICAL,
        className: x.descriptionWrapper,
        children: [(0, l.jsxs)(p.Z, {
          align: p.Z.Align.CENTER,
          children: [this.renderDescription(), a && e ? (0, l.jsx)("div", {
            className: x.defaultIndicator,
            children: h.Z.Messages.DEFAULT
          }) : null, n ? (0, l.jsx)("div", {
            className: x.premiumIndicator,
            children: h.Z.Messages.PAYMENT_SOURCE_SUBSCRIPTION
          }) : null, a && t.invalid ? (0, l.jsx)("div", {
            className: x.invalidIndicator,
            children: h.Z.Messages.PAYMENT_SOURCE_INVALID
          }) : null]
        }), s && null != i ? (0, l.jsx)("div", {
          className: x.subText,
          children: i
        }) : null]
      })]
    })
  }
}
a = {
  isForSubscription: !1,
  isDefault: !1,
  showSubtext: !1,
  showPaymentSourceIcon: !1,
  showLabels: !1
}, (r = "defaultProps") in(n = I) ? Object.defineProperty(n, r, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[r] = a