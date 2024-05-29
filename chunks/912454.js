"use strict";
n.r(a), n.d(a, {
  IconSizes: function() {
    return f
  },
  IconTypes: function() {
    return r
  }
}), n("757143");
var r, t, o, s = n("735250"),
  c = n("470079"),
  i = n("120356"),
  u = n.n(i),
  d = n("956732");

function l(e, a, n) {
  return a in e ? Object.defineProperty(e, a, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[a] = n, e
}(o = r || (r = {})).UNKNOWN = "unknown", o.VISA = "visa", o.DISCOVER = "discover", o.MASTERCARD = "mastercard", o.AMEX = "amex", o.PAYPAL = "paypal", o.PAYMENT_REQUEST = "paymentRequest", o.G_PAY = "gPay", o.DINERS = "diners", o.JCB = "jcb", o.UNIONPAY = "unionpay", o.SOFORT = "sofort", o.PRZELEWY24 = "przelewy24", o.GIROPAY = "giropay", o.PAYSAFECARD = "paysafecard", o.GCASH = "gcash", o.GRABPAY = "grabpay", o.MOMO_WALLET = "momo_wallet", o.VENMO = "venmo", o.KAKAOPAY = "kakaopay", o.GOPAY_WALLET = "gopay_wallet", o.BANCONTACT = "bancontact", o.EPS = "eps", o.IDEAL = "ideal", o.CASH_APP = "cash_app", o.APPLE = "apple";
let f = {
  SMALL: d.cardIconSmall,
  MEDIUM: d.cardIconMedium,
  LARGE: d.cardIconLarge,
  XLARGE: d.cardIconXLarge
};
class p extends(t = c.PureComponent) {
  static getType(e) {
    return null == e ? "unknown" : r[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown"
  }
  render() {
    let {
      flipped: e,
      type: a,
      className: n,
      size: r
    } = this.props;
    return (0, s.jsx)("div", {
      className: u()(r, d[a], n, {
        [d.flipped]: e
      }),
      children: a
    })
  }
}
l(p, "Types", r), l(p, "Sizes", f), l(p, "defaultProps", {
  size: f.SMALL,
  flipped: !1
}), a.default = p