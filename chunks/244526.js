"use strict";
r.r(t), r.d(t, {
  default: function() {
    return k
  }
});
var a, n, i, l, o = r("735250"),
  s = r("470079"),
  c = r("120356"),
  d = r.n(c),
  u = r("481060"),
  h = r("987032"),
  p = r("46141"),
  m = r("285952"),
  g = r("912454"),
  f = r("122289"),
  y = r("624138"),
  b = r("689938"),
  x = r("696674");
class k extends(l = s.PureComponent) {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (e instanceof p.PaypalSourceRecord) return g.default.Types.PAYPAL;
    if (e instanceof p.SofortSourceRecord) return g.default.Types.SOFORT;
    if (e instanceof p.CreditCardSourceRecord) return g.default.getType(e.brand);
    else if (e instanceof p.GiropaySourceRecord) return g.default.Types.GIROPAY;
    else if (e instanceof p.Przelewy24SourceRecord) return g.default.Types.PRZELEWY24;
    else if (e instanceof p.PaysafeSourceRecord) return g.default.Types.PAYSAFECARD;
    else if (e instanceof p.GcashSourceRecord) return g.default.Types.GCASH;
    else if (e instanceof p.GrabPayMySourceRecord) return g.default.Types.GRABPAY;
    else if (e instanceof p.MomoWalletSourceRecord) return g.default.Types.MOMO_WALLET;
    else if (e instanceof p.VenmoSourceRecord) return g.default.Types.VENMO;
    else if (e instanceof p.KaKaoPaySourceRecord) return g.default.Types.KAKAOPAY;
    else if (e instanceof p.GoPayWalletSourceRecord) return g.default.Types.GOPAY_WALLET;
    else if (e instanceof p.BancontactSourceRecord) return g.default.Types.BANCONTACT;
    else if (e instanceof p.EPSSourceRecord) return g.default.Types.EPS;
    else if (e instanceof p.IdealSourceRecord) return g.default.Types.IDEAL;
    else if (e instanceof p.CashAppSourceRecord) return g.default.Types.CASH_APP;
    else if (e instanceof p.AppleSourceRecord) return g.default.Types.APPLE;
    return g.default.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof p.CreditCardSourceRecord ? b.default.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
      brand: (0, y.upperCaseFirstChar)(e.brand),
      last_4: e.last4
    }) : e instanceof p.PaypalSourceRecord ? b.default.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof p.SofortSourceRecord ? b.default.Messages.PAYMENT_SOURCE_SOFORT : e instanceof p.GiropaySourceRecord ? b.default.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof p.Przelewy24SourceRecord ? b.default.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof p.PaysafeSourceRecord ? b.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof p.GcashSourceRecord ? b.default.Messages.PAYMENT_SOURCE_GCASH : e instanceof p.GrabPayMySourceRecord ? b.default.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof p.MomoWalletSourceRecord ? b.default.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof p.VenmoSourceRecord ? b.default.Messages.PAYMENT_SOURCE_VENMO : e instanceof p.KaKaoPaySourceRecord ? b.default.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof p.GoPayWalletSourceRecord ? b.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof p.BancontactSourceRecord ? b.default.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof p.IdealSourceRecord ? b.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
      bank: (0, h.getIdealBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof p.EPSSourceRecord ? b.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
      bank: (0, h.getEPSBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof p.CashAppSourceRecord ? b.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof p.AppleSourceRecord ? b.default.Messages.PAYMENT_SOURCE_APPLE : b.default.Messages.PAYMENT_SOURCE_UNKNOWN
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return (0, o.jsx)(u.Text, {
      className: d()(x.description, t),
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: t
    } = this.props, r = null;
    return e instanceof p.CreditCardSourceRecord ? r = b.default.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
      month: (0, f.getLocalizedDisplayMonth)(e.expiresMonth, t),
      year: e.expiresYear
    }) : e instanceof p.PaypalSourceRecord ? r = e.email : e instanceof p.SofortSourceRecord ? r = e.email : e instanceof p.Przelewy24SourceRecord ? r = e.email : e instanceof p.VenmoSourceRecord ? r = "@" + e.username : e instanceof p.CashAppSourceRecord && (r = e.username), r
  }
  render() {
    let {
      isDefault: e,
      paymentSource: t,
      showSubtext: r,
      isForSubscription: a,
      showPaymentSourceIcon: n,
      showLabels: i
    } = this.props, l = this.renderSubText();
    return (0, o.jsxs)(m.default, {
      children: [n && (0, o.jsx)(g.default, {
        type: this.typeString
      }), (0, o.jsxs)(m.default, {
        direction: m.default.Direction.VERTICAL,
        className: x.descriptionWrapper,
        children: [(0, o.jsxs)(m.default, {
          align: m.default.Align.CENTER,
          children: [this.renderDescription(), i && e ? (0, o.jsx)("div", {
            className: x.defaultIndicator,
            children: b.default.Messages.DEFAULT
          }) : null, a ? (0, o.jsx)("div", {
            className: x.premiumIndicator,
            children: b.default.Messages.PAYMENT_SOURCE_SUBSCRIPTION
          }) : null, i && t.invalid ? (0, o.jsx)("div", {
            className: x.invalidIndicator,
            children: b.default.Messages.PAYMENT_SOURCE_INVALID
          }) : null]
        }), r && null != l ? (0, o.jsx)("div", {
          className: x.subText,
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
}, (n = "defaultProps") in(a = k) ? Object.defineProperty(a, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[n] = i