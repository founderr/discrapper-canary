"use strict";
r.r(t), r.d(t, {
  default: function() {
    return n
  }
});
var a, n, i = r("37983"),
  l = r("884691"),
  o = r("414456"),
  s = r.n(o),
  c = r("77078"),
  d = r("339783"),
  u = r("865146"),
  h = r("145131"),
  p = r("712218"),
  m = r("745279"),
  g = r("159885"),
  f = r("782340"),
  b = r("29419");
(a = class extends l.PureComponent {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (e instanceof u.PaypalSourceRecord) return p.default.Types.PAYPAL;
    if (e instanceof u.SofortSourceRecord) return p.default.Types.SOFORT;
    if (e instanceof u.CreditCardSourceRecord) return p.default.getType(e.brand);
    else if (e instanceof u.GiropaySourceRecord) return p.default.Types.GIROPAY;
    else if (e instanceof u.Przelewy24SourceRecord) return p.default.Types.PRZELEWY24;
    else if (e instanceof u.PaysafeSourceRecord) return p.default.Types.PAYSAFECARD;
    else if (e instanceof u.GcashSourceRecord) return p.default.Types.GCASH;
    else if (e instanceof u.GrabPayMySourceRecord) return p.default.Types.GRABPAY;
    else if (e instanceof u.MomoWalletSourceRecord) return p.default.Types.MOMO_WALLET;
    else if (e instanceof u.VenmoSourceRecord) return p.default.Types.VENMO;
    else if (e instanceof u.KaKaoPaySourceRecord) return p.default.Types.KAKAOPAY;
    else if (e instanceof u.GoPayWalletSourceRecord) return p.default.Types.GOPAY_WALLET;
    else if (e instanceof u.BancontactSourceRecord) return p.default.Types.BANCONTACT;
    else if (e instanceof u.EPSSourceRecord) return p.default.Types.EPS;
    else if (e instanceof u.IdealSourceRecord) return p.default.Types.IDEAL;
    else if (e instanceof u.CashAppSourceRecord) return p.default.Types.CASH_APP;
    else if (e instanceof u.AppleSourceRecord) return p.default.Types.APPLE;
    return p.default.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof u.CreditCardSourceRecord ? f.default.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
      brand: (0, g.upperCaseFirstChar)(e.brand),
      last_4: e.last4
    }) : e instanceof u.PaypalSourceRecord ? f.default.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof u.SofortSourceRecord ? f.default.Messages.PAYMENT_SOURCE_SOFORT : e instanceof u.GiropaySourceRecord ? f.default.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof u.Przelewy24SourceRecord ? f.default.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof u.PaysafeSourceRecord ? f.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof u.GcashSourceRecord ? f.default.Messages.PAYMENT_SOURCE_GCASH : e instanceof u.GrabPayMySourceRecord ? f.default.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof u.MomoWalletSourceRecord ? f.default.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof u.VenmoSourceRecord ? f.default.Messages.PAYMENT_SOURCE_VENMO : e instanceof u.KaKaoPaySourceRecord ? f.default.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof u.GoPayWalletSourceRecord ? f.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof u.BancontactSourceRecord ? f.default.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof u.IdealSourceRecord ? f.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
      bank: (0, d.getIdealBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof u.EPSSourceRecord ? f.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
      bank: (0, d.getEPSBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof u.CashAppSourceRecord ? f.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof u.AppleSourceRecord ? f.default.Messages.PAYMENT_SOURCE_APPLE : f.default.Messages.PAYMENT_SOURCE_UNKNOWN
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return (0, i.jsx)(c.Text, {
      className: s(b.description, t),
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: t
    } = this.props, r = null;
    return e instanceof u.CreditCardSourceRecord ? r = f.default.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
      month: (0, m.getLocalizedDisplayMonth)(e.expiresMonth, t),
      year: e.expiresYear
    }) : e instanceof u.PaypalSourceRecord ? r = e.email : e instanceof u.SofortSourceRecord ? r = e.email : e instanceof u.Przelewy24SourceRecord ? r = e.email : e instanceof u.VenmoSourceRecord ? r = "@" + e.username : e instanceof u.CashAppSourceRecord && (r = e.username), r
  }
  render() {
    let {
      isDefault: e,
      paymentSource: t,
      showSubtext: r,
      isForSubscription: a
    } = this.props, n = this.renderSubText();
    return (0, i.jsxs)(h.default, {
      children: [(0, i.jsx)(p.default, {
        type: this.typeString
      }), (0, i.jsxs)(h.default, {
        direction: h.default.Direction.VERTICAL,
        className: b.descriptionWrapper,
        children: [(0, i.jsxs)(h.default, {
          align: h.default.Align.CENTER,
          children: [this.renderDescription(), e ? (0, i.jsx)("div", {
            className: b.defaultIndicator,
            children: f.default.Messages.DEFAULT
          }) : null, a ? (0, i.jsx)("div", {
            className: b.premiumIndicator,
            children: f.default.Messages.PAYMENT_SOURCE_SUBSCRIPTION
          }) : null, t.invalid ? (0, i.jsx)("div", {
            className: b.invalidIndicator,
            children: f.default.Messages.PAYMENT_SOURCE_INVALID
          }) : null]
        }), r && null != n ? (0, i.jsx)("div", {
          className: b.subText,
          children: n
        }) : null]
      })]
    })
  }
}).defaultProps = {
  isForSubscription: !1,
  isDefault: !1,
  showSubtext: !1
}, n = a