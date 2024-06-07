"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
});
var a, n, i, l, r = s("735250"),
  u = s("470079"),
  o = s("120356"),
  d = s.n(o),
  c = s("481060"),
  p = s("987032"),
  f = s("46141"),
  m = s("285952"),
  E = s("912454"),
  _ = s("122289"),
  S = s("624138"),
  I = s("689938"),
  N = s("696674");
class P extends(l = u.PureComponent) {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (e instanceof f.PaypalSourceRecord) return E.default.Types.PAYPAL;
    if (e instanceof f.SofortSourceRecord) return E.default.Types.SOFORT;
    if (e instanceof f.CreditCardSourceRecord) return E.default.getType(e.brand);
    else if (e instanceof f.GiropaySourceRecord) return E.default.Types.GIROPAY;
    else if (e instanceof f.Przelewy24SourceRecord) return E.default.Types.PRZELEWY24;
    else if (e instanceof f.PaysafeSourceRecord) return E.default.Types.PAYSAFECARD;
    else if (e instanceof f.GcashSourceRecord) return E.default.Types.GCASH;
    else if (e instanceof f.GrabPayMySourceRecord) return E.default.Types.GRABPAY;
    else if (e instanceof f.MomoWalletSourceRecord) return E.default.Types.MOMO_WALLET;
    else if (e instanceof f.VenmoSourceRecord) return E.default.Types.VENMO;
    else if (e instanceof f.KaKaoPaySourceRecord) return E.default.Types.KAKAOPAY;
    else if (e instanceof f.GoPayWalletSourceRecord) return E.default.Types.GOPAY_WALLET;
    else if (e instanceof f.BancontactSourceRecord) return E.default.Types.BANCONTACT;
    else if (e instanceof f.EPSSourceRecord) return E.default.Types.EPS;
    else if (e instanceof f.IdealSourceRecord) return E.default.Types.IDEAL;
    else if (e instanceof f.CashAppSourceRecord) return E.default.Types.CASH_APP;
    else if (e instanceof f.AppleSourceRecord) return E.default.Types.APPLE;
    return E.default.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof f.CreditCardSourceRecord ? I.default.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
      brand: (0, S.upperCaseFirstChar)(e.brand),
      last_4: e.last4
    }) : e instanceof f.PaypalSourceRecord ? I.default.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof f.SofortSourceRecord ? I.default.Messages.PAYMENT_SOURCE_SOFORT : e instanceof f.GiropaySourceRecord ? I.default.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof f.Przelewy24SourceRecord ? I.default.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof f.PaysafeSourceRecord ? I.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof f.GcashSourceRecord ? I.default.Messages.PAYMENT_SOURCE_GCASH : e instanceof f.GrabPayMySourceRecord ? I.default.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof f.MomoWalletSourceRecord ? I.default.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof f.VenmoSourceRecord ? I.default.Messages.PAYMENT_SOURCE_VENMO : e instanceof f.KaKaoPaySourceRecord ? I.default.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof f.GoPayWalletSourceRecord ? I.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof f.BancontactSourceRecord ? I.default.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof f.IdealSourceRecord ? I.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
      bank: (0, p.getIdealBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof f.EPSSourceRecord ? I.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
      bank: (0, p.getEPSBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof f.CashAppSourceRecord ? I.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof f.AppleSourceRecord ? I.default.Messages.PAYMENT_SOURCE_APPLE : I.default.Messages.PAYMENT_SOURCE_UNKNOWN
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return (0, r.jsx)(c.Text, {
      className: d()(N.description, t),
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: t
    } = this.props, s = null;
    return e instanceof f.CreditCardSourceRecord ? s = I.default.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
      month: (0, _.getLocalizedDisplayMonth)(e.expiresMonth, t),
      year: e.expiresYear
    }) : e instanceof f.PaypalSourceRecord ? s = e.email : e instanceof f.SofortSourceRecord ? s = e.email : e instanceof f.Przelewy24SourceRecord ? s = e.email : e instanceof f.VenmoSourceRecord ? s = "@" + e.username : e instanceof f.CashAppSourceRecord && (s = e.username), s
  }
  render() {
    let {
      isDefault: e,
      paymentSource: t,
      showSubtext: s,
      isForSubscription: a,
      showPaymentSourceIcon: n,
      showLabels: i
    } = this.props, l = this.renderSubText();
    return (0, r.jsxs)(m.default, {
      children: [n && (0, r.jsx)(E.default, {
        type: this.typeString
      }), (0, r.jsxs)(m.default, {
        direction: m.default.Direction.VERTICAL,
        className: N.descriptionWrapper,
        children: [(0, r.jsxs)(m.default, {
          align: m.default.Align.CENTER,
          children: [this.renderDescription(), i && e ? (0, r.jsx)("div", {
            className: N.defaultIndicator,
            children: I.default.Messages.DEFAULT
          }) : null, a ? (0, r.jsx)("div", {
            className: N.premiumIndicator,
            children: I.default.Messages.PAYMENT_SOURCE_SUBSCRIPTION
          }) : null, i && t.invalid ? (0, r.jsx)("div", {
            className: N.invalidIndicator,
            children: I.default.Messages.PAYMENT_SOURCE_INVALID
          }) : null]
        }), s && null != l ? (0, r.jsx)("div", {
          className: N.subText,
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
}, (n = "defaultProps") in(a = P) ? Object.defineProperty(a, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[n] = i