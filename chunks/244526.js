"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var s, r, n, l, o = a("735250"),
  i = a("470079"),
  c = a("120356"),
  u = a.n(c),
  d = a("481060"),
  f = a("987032"),
  C = a("46141"),
  p = a("285952"),
  m = a("912454"),
  g = a("122289"),
  E = a("624138"),
  b = a("689938"),
  h = a("696674");
class S extends(l = i.PureComponent) {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (e instanceof C.PaypalSourceRecord) return m.default.Types.PAYPAL;
    if (e instanceof C.SofortSourceRecord) return m.default.Types.SOFORT;
    if (e instanceof C.CreditCardSourceRecord) return m.default.getType(e.brand);
    else if (e instanceof C.GiropaySourceRecord) return m.default.Types.GIROPAY;
    else if (e instanceof C.Przelewy24SourceRecord) return m.default.Types.PRZELEWY24;
    else if (e instanceof C.PaysafeSourceRecord) return m.default.Types.PAYSAFECARD;
    else if (e instanceof C.GcashSourceRecord) return m.default.Types.GCASH;
    else if (e instanceof C.GrabPayMySourceRecord) return m.default.Types.GRABPAY;
    else if (e instanceof C.MomoWalletSourceRecord) return m.default.Types.MOMO_WALLET;
    else if (e instanceof C.VenmoSourceRecord) return m.default.Types.VENMO;
    else if (e instanceof C.KaKaoPaySourceRecord) return m.default.Types.KAKAOPAY;
    else if (e instanceof C.GoPayWalletSourceRecord) return m.default.Types.GOPAY_WALLET;
    else if (e instanceof C.BancontactSourceRecord) return m.default.Types.BANCONTACT;
    else if (e instanceof C.EPSSourceRecord) return m.default.Types.EPS;
    else if (e instanceof C.IdealSourceRecord) return m.default.Types.IDEAL;
    else if (e instanceof C.CashAppSourceRecord) return m.default.Types.CASH_APP;
    else if (e instanceof C.AppleSourceRecord) return m.default.Types.APPLE;
    return m.default.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof C.CreditCardSourceRecord ? b.default.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
      brand: (0, E.upperCaseFirstChar)(e.brand),
      last_4: e.last4
    }) : e instanceof C.PaypalSourceRecord ? b.default.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof C.SofortSourceRecord ? b.default.Messages.PAYMENT_SOURCE_SOFORT : e instanceof C.GiropaySourceRecord ? b.default.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof C.Przelewy24SourceRecord ? b.default.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof C.PaysafeSourceRecord ? b.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof C.GcashSourceRecord ? b.default.Messages.PAYMENT_SOURCE_GCASH : e instanceof C.GrabPayMySourceRecord ? b.default.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof C.MomoWalletSourceRecord ? b.default.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof C.VenmoSourceRecord ? b.default.Messages.PAYMENT_SOURCE_VENMO : e instanceof C.KaKaoPaySourceRecord ? b.default.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof C.GoPayWalletSourceRecord ? b.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof C.BancontactSourceRecord ? b.default.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof C.IdealSourceRecord ? b.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
      bank: (0, f.getIdealBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof C.EPSSourceRecord ? b.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
      bank: (0, f.getEPSBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof C.CashAppSourceRecord ? b.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof C.AppleSourceRecord ? b.default.Messages.PAYMENT_SOURCE_APPLE : b.default.Messages.PAYMENT_SOURCE_UNKNOWN
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return (0, o.jsx)(d.Text, {
      className: u()(h.description, t),
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: t
    } = this.props, a = null;
    return e instanceof C.CreditCardSourceRecord ? a = b.default.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
      month: (0, g.getLocalizedDisplayMonth)(e.expiresMonth, t),
      year: e.expiresYear
    }) : e instanceof C.PaypalSourceRecord ? a = e.email : e instanceof C.SofortSourceRecord ? a = e.email : e instanceof C.Przelewy24SourceRecord ? a = e.email : e instanceof C.VenmoSourceRecord ? a = "@" + e.username : e instanceof C.CashAppSourceRecord && (a = e.username), a
  }
  render() {
    let {
      isDefault: e,
      paymentSource: t,
      showSubtext: a,
      isForSubscription: s,
      showPaymentSourceIcon: r,
      showLabels: n
    } = this.props, l = this.renderSubText();
    return (0, o.jsxs)(p.default, {
      children: [r && (0, o.jsx)(m.default, {
        type: this.typeString
      }), (0, o.jsxs)(p.default, {
        direction: p.default.Direction.VERTICAL,
        className: h.descriptionWrapper,
        children: [(0, o.jsxs)(p.default, {
          align: p.default.Align.CENTER,
          children: [this.renderDescription(), n && e ? (0, o.jsx)("div", {
            className: h.defaultIndicator,
            children: b.default.Messages.DEFAULT
          }) : null, s ? (0, o.jsx)("div", {
            className: h.premiumIndicator,
            children: b.default.Messages.PAYMENT_SOURCE_SUBSCRIPTION
          }) : null, n && t.invalid ? (0, o.jsx)("div", {
            className: h.invalidIndicator,
            children: b.default.Messages.PAYMENT_SOURCE_INVALID
          }) : null]
        }), a && null != l ? (0, o.jsx)("div", {
          className: h.subText,
          children: l
        }) : null]
      })]
    })
  }
}
n = {
  isForSubscription: !1,
  isDefault: !1,
  showSubtext: !1,
  showPaymentSourceIcon: !1,
  showLabels: !1
}, (r = "defaultProps") in(s = S) ? Object.defineProperty(s, r, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = n