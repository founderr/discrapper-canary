"use strict";
n.r(t), n.d(t, {
  IconSizes: function() {
    return p
  },
  IconTypes: function() {
    return a
  }
}), n("757143");
var a, r, s, o = n("735250"),
  i = n("470079"),
  l = n("120356"),
  u = n.n(l),
  c = n("956732");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = a || (a = {})).UNKNOWN = "unknown", s.VISA = "visa", s.DISCOVER = "discover", s.MASTERCARD = "mastercard", s.AMEX = "amex", s.PAYPAL = "paypal", s.PAYMENT_REQUEST = "paymentRequest", s.G_PAY = "gPay", s.DINERS = "diners", s.JCB = "jcb", s.UNIONPAY = "unionpay", s.SOFORT = "sofort", s.PRZELEWY24 = "przelewy24", s.GIROPAY = "giropay", s.PAYSAFECARD = "paysafecard", s.GCASH = "gcash", s.GRABPAY = "grabpay", s.MOMO_WALLET = "momo_wallet", s.VENMO = "venmo", s.KAKAOPAY = "kakaopay", s.GOPAY_WALLET = "gopay_wallet", s.BANCONTACT = "bancontact", s.EPS = "eps", s.IDEAL = "ideal", s.CASH_APP = "cash_app", s.APPLE = "apple";
let p = {
  SMALL: c.cardIconSmall,
  MEDIUM: c.cardIconMedium,
  LARGE: c.cardIconLarge,
  XLARGE: c.cardIconXLarge
};
class f extends(r = i.PureComponent) {
  static getType(e) {
    return null == e ? "unknown" : a[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown"
  }
  render() {
    let {
      flipped: e,
      type: t,
      className: n,
      size: a
    } = this.props;
    return (0, o.jsx)("div", {
      className: u()(a, c[t], n, {
        [c.flipped]: e
      }),
      children: t
    })
  }
}
d(f, "Types", a), d(f, "Sizes", p), d(f, "defaultProps", {
  size: p.SMALL,
  flipped: !1
}), t.default = f