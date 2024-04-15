"use strict";
t.r(r), t.d(r, {
  default: function() {
    return k
  }
});
var a, n, i, l, o = t("735250"),
  s = t("470079"),
  c = t("120356"),
  d = t.n(c),
  u = t("481060"),
  h = t("987032"),
  p = t("46141"),
  m = t("285952"),
  g = t("912454"),
  f = t("122289"),
  b = t("624138"),
  y = t("689938"),
  x = t("682593");
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
    return e instanceof p.CreditCardSourceRecord ? y.default.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
      brand: (0, b.upperCaseFirstChar)(e.brand),
      last_4: e.last4
    }) : e instanceof p.PaypalSourceRecord ? y.default.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof p.SofortSourceRecord ? y.default.Messages.PAYMENT_SOURCE_SOFORT : e instanceof p.GiropaySourceRecord ? y.default.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof p.Przelewy24SourceRecord ? y.default.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof p.PaysafeSourceRecord ? y.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof p.GcashSourceRecord ? y.default.Messages.PAYMENT_SOURCE_GCASH : e instanceof p.GrabPayMySourceRecord ? y.default.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof p.MomoWalletSourceRecord ? y.default.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof p.VenmoSourceRecord ? y.default.Messages.PAYMENT_SOURCE_VENMO : e instanceof p.KaKaoPaySourceRecord ? y.default.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof p.GoPayWalletSourceRecord ? y.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof p.BancontactSourceRecord ? y.default.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof p.IdealSourceRecord ? y.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
      bank: (0, h.getIdealBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof p.EPSSourceRecord ? y.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
      bank: (0, h.getEPSBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof p.CashAppSourceRecord ? y.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof p.AppleSourceRecord ? y.default.Messages.PAYMENT_SOURCE_APPLE : y.default.Messages.PAYMENT_SOURCE_UNKNOWN
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: r
    } = this.props;
    return (0, o.jsx)(u.Text, {
      className: d()(x.description, r),
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: r
    } = this.props, t = null;
    return e instanceof p.CreditCardSourceRecord ? t = y.default.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
      month: (0, f.getLocalizedDisplayMonth)(e.expiresMonth, r),
      year: e.expiresYear
    }) : e instanceof p.PaypalSourceRecord ? t = e.email : e instanceof p.SofortSourceRecord ? t = e.email : e instanceof p.Przelewy24SourceRecord ? t = e.email : e instanceof p.VenmoSourceRecord ? t = "@" + e.username : e instanceof p.CashAppSourceRecord && (t = e.username), t
  }
  render() {
    let {
      isDefault: e,
      paymentSource: r,
      showSubtext: t,
      isForSubscription: a
    } = this.props, n = this.renderSubText();
    return (0, o.jsxs)(m.default, {
      children: [(0, o.jsx)(g.default, {
        type: this.typeString
      }), (0, o.jsxs)(m.default, {
        direction: m.default.Direction.VERTICAL,
        className: x.descriptionWrapper,
        children: [(0, o.jsxs)(m.default, {
          align: m.default.Align.CENTER,
          children: [this.renderDescription(), e ? (0, o.jsx)("div", {
            className: x.defaultIndicator,
            children: y.default.Messages.DEFAULT
          }) : null, a ? (0, o.jsx)("div", {
            className: x.premiumIndicator,
            children: y.default.Messages.PAYMENT_SOURCE_SUBSCRIPTION
          }) : null, r.invalid ? (0, o.jsx)("div", {
            className: x.invalidIndicator,
            children: y.default.Messages.PAYMENT_SOURCE_INVALID
          }) : null]
        }), t && null != n ? (0, o.jsx)("div", {
          className: x.subText,
          children: n
        }) : null]
      })]
    })
  }
}
i = {
  isForSubscription: !1,
  isDefault: !1,
  showSubtext: !1
}, (n = "defaultProps") in(a = k) ? Object.defineProperty(a, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[n] = i