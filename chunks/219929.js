a.d(n, {
  Qy: function() {
return s;
  },
  Uy: function() {
return _;
  }
}), a(757143);
var s, t, r, l = a(735250),
  i = a(470079),
  o = a(120356),
  c = a.n(o),
  u = a(335180);

function d(e, n, a) {
  return n in e ? Object.defineProperty(e, n, {
value: a,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = a, e;
}
(r = s || (s = {})).UNKNOWN = 'unknown', r.VISA = 'visa', r.DISCOVER = 'discover', r.MASTERCARD = 'mastercard', r.AMEX = 'amex', r.PAYPAL = 'paypal', r.PAYMENT_REQUEST = 'paymentRequest', r.G_PAY = 'gPay', r.DINERS = 'diners', r.JCB = 'jcb', r.UNIONPAY = 'unionpay', r.SOFORT = 'sofort', r.PRZELEWY24 = 'przelewy24', r.GIROPAY = 'giropay', r.PAYSAFECARD = 'paysafecard', r.GCASH = 'gcash', r.GRABPAY = 'grabpay', r.MOMO_WALLET = 'momo_wallet', r.VENMO = 'venmo', r.KAKAOPAY = 'kakaopay', r.GOPAY_WALLET = 'gopay_wallet', r.BANCONTACT = 'bancontact', r.EPS = 'eps', r.IDEAL = 'ideal', r.CASH_APP = 'cash_app', r.APPLE = 'apple';
let _ = {
  SMALL: u.cardIconSmall,
  MEDIUM: u.cardIconMedium,
  LARGE: u.cardIconLarge,
  XLARGE: u.cardIconXLarge
};
class I extends(t = i.PureComponent) {
  static getType(e) {
return null == e ? 'unknown' : s[e.replace(/[^a-z0-9_]/gi, '').toUpperCase()] || 'unknown';
  }
  render() {
let {
  flipped: e,
  type: n,
  className: a,
  size: s
} = this.props;
return (0, l.jsx)('div', {
  className: c()(s, u[n], a, {
    [u.flipped]: e
  }),
  children: n
});
  }
}
d(I, 'Types', s), d(I, 'Sizes', _), d(I, 'defaultProps', {
  size: _.SMALL,
  flipped: !1
}), n.ZP = I;