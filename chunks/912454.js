"use strict";
r.r(t), r.d(t, {
  IconSizes: function() {
    return h
  },
  IconTypes: function() {
    return a
  }
}), r("757143");
var a, n, i, l = r("735250"),
  o = r("470079"),
  s = r("803997"),
  c = r.n(s),
  d = r("918210");

function u(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}(i = a || (a = {})).UNKNOWN = "unknown", i.VISA = "visa", i.DISCOVER = "discover", i.MASTERCARD = "mastercard", i.AMEX = "amex", i.PAYPAL = "paypal", i.PAYMENT_REQUEST = "paymentRequest", i.G_PAY = "gPay", i.DINERS = "diners", i.JCB = "jcb", i.UNIONPAY = "unionpay", i.SOFORT = "sofort", i.PRZELEWY24 = "przelewy24", i.GIROPAY = "giropay", i.PAYSAFECARD = "paysafecard", i.GCASH = "gcash", i.GRABPAY = "grabpay", i.MOMO_WALLET = "momo_wallet", i.VENMO = "venmo", i.KAKAOPAY = "kakaopay", i.GOPAY_WALLET = "gopay_wallet", i.BANCONTACT = "bancontact", i.EPS = "eps", i.IDEAL = "ideal", i.CASH_APP = "cash_app", i.APPLE = "apple";
let h = {
  SMALL: d.cardIconSmall,
  MEDIUM: d.cardIconMedium,
  LARGE: d.cardIconLarge,
  XLARGE: d.cardIconXLarge
};
class p extends(n = o.PureComponent) {
  static getType(e) {
    return null == e ? "unknown" : a[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown"
  }
  render() {
    let {
      flipped: e,
      type: t,
      className: r,
      size: a
    } = this.props;
    return (0, l.jsx)("div", {
      className: c()(a, d[t], r, {
        [d.flipped]: e
      }),
      children: t
    })
  }
}
u(p, "Types", a), u(p, "Sizes", h), u(p, "defaultProps", {
  size: h.SMALL,
  flipped: !1
}), t.default = p