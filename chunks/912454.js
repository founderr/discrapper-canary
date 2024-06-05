"use strict";
a.r(t), a.d(t, {
  IconSizes: function() {
    return I
  },
  IconTypes: function() {
    return n
  }
}), a("757143");
var n, r, s, i = a("735250"),
  l = a("470079"),
  o = a("120356"),
  u = a.n(o),
  c = a("956732");

function d(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}(s = n || (n = {})).UNKNOWN = "unknown", s.VISA = "visa", s.DISCOVER = "discover", s.MASTERCARD = "mastercard", s.AMEX = "amex", s.PAYPAL = "paypal", s.PAYMENT_REQUEST = "paymentRequest", s.G_PAY = "gPay", s.DINERS = "diners", s.JCB = "jcb", s.UNIONPAY = "unionpay", s.SOFORT = "sofort", s.PRZELEWY24 = "przelewy24", s.GIROPAY = "giropay", s.PAYSAFECARD = "paysafecard", s.GCASH = "gcash", s.GRABPAY = "grabpay", s.MOMO_WALLET = "momo_wallet", s.VENMO = "venmo", s.KAKAOPAY = "kakaopay", s.GOPAY_WALLET = "gopay_wallet", s.BANCONTACT = "bancontact", s.EPS = "eps", s.IDEAL = "ideal", s.CASH_APP = "cash_app", s.APPLE = "apple";
let I = {
  SMALL: c.cardIconSmall,
  MEDIUM: c.cardIconMedium,
  LARGE: c.cardIconLarge,
  XLARGE: c.cardIconXLarge
};
class _ extends(r = l.PureComponent) {
  static getType(e) {
    return null == e ? "unknown" : n[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown"
  }
  render() {
    let {
      flipped: e,
      type: t,
      className: a,
      size: n
    } = this.props;
    return (0, i.jsx)("div", {
      className: u()(n, c[t], a, {
        [c.flipped]: e
      }),
      children: t
    })
  }
}
d(_, "Types", n), d(_, "Sizes", I), d(_, "defaultProps", {
  size: I.SMALL,
  flipped: !1
}), t.default = _