"use strict";
n.r(a), n.d(a, {
  IconSizes: function() {
    return f
  },
  IconTypes: function() {
    return r
  }
}), n("757143");
var r, t, s, o = n("735250"),
  l = n("470079"),
  u = n("120356"),
  d = n.n(u),
  i = n("956732");

function c(e, a, n) {
  return a in e ? Object.defineProperty(e, a, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[a] = n, e
}(s = r || (r = {})).UNKNOWN = "unknown", s.VISA = "visa", s.DISCOVER = "discover", s.MASTERCARD = "mastercard", s.AMEX = "amex", s.PAYPAL = "paypal", s.PAYMENT_REQUEST = "paymentRequest", s.G_PAY = "gPay", s.DINERS = "diners", s.JCB = "jcb", s.UNIONPAY = "unionpay", s.SOFORT = "sofort", s.PRZELEWY24 = "przelewy24", s.GIROPAY = "giropay", s.PAYSAFECARD = "paysafecard", s.GCASH = "gcash", s.GRABPAY = "grabpay", s.MOMO_WALLET = "momo_wallet", s.VENMO = "venmo", s.KAKAOPAY = "kakaopay", s.GOPAY_WALLET = "gopay_wallet", s.BANCONTACT = "bancontact", s.EPS = "eps", s.IDEAL = "ideal", s.CASH_APP = "cash_app", s.APPLE = "apple";
let f = {
  SMALL: i.cardIconSmall,
  MEDIUM: i.cardIconMedium,
  LARGE: i.cardIconLarge,
  XLARGE: i.cardIconXLarge
};
class p extends(t = l.PureComponent) {
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
    return (0, o.jsx)("div", {
      className: d()(r, i[a], n, {
        [i.flipped]: e
      }),
      children: a
    })
  }
}
c(p, "Types", r), c(p, "Sizes", f), c(p, "defaultProps", {
  size: f.SMALL,
  flipped: !1
}), a.default = p