t.d(a, {
    Qy: function () {
        return s;
    },
    Uy: function () {
        return E;
    }
}),
    t(757143);
var s,
    n,
    l,
    r = t(735250),
    o = t(470079),
    i = t(120356),
    c = t.n(i),
    u = t(857323);
function d(e, a, t) {
    return (
        a in e
            ? Object.defineProperty(e, a, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[a] = t),
        e
    );
}
((l = s || (s = {})).UNKNOWN = 'unknown'), (l.VISA = 'visa'), (l.DISCOVER = 'discover'), (l.MASTERCARD = 'mastercard'), (l.AMEX = 'amex'), (l.PAYPAL = 'paypal'), (l.PAYMENT_REQUEST = 'paymentRequest'), (l.G_PAY = 'gPay'), (l.DINERS = 'diners'), (l.JCB = 'jcb'), (l.UNIONPAY = 'unionpay'), (l.SOFORT = 'sofort'), (l.PRZELEWY24 = 'przelewy24'), (l.GIROPAY = 'giropay'), (l.PAYSAFECARD = 'paysafecard'), (l.GCASH = 'gcash'), (l.GRABPAY = 'grabpay'), (l.MOMO_WALLET = 'momo_wallet'), (l.VENMO = 'venmo'), (l.KAKAOPAY = 'kakaopay'), (l.GOPAY_WALLET = 'gopay_wallet'), (l.BANCONTACT = 'bancontact'), (l.EPS = 'eps'), (l.IDEAL = 'ideal'), (l.CASH_APP = 'cash_app'), (l.APPLE = 'apple');
let E = {
    SMALL: u.cardIconSmall,
    MEDIUM: u.cardIconMedium,
    LARGE: u.cardIconLarge,
    XLARGE: u.cardIconXLarge
};
class A extends (n = o.PureComponent) {
    static getType(e) {
        return null == e ? 'unknown' : s[e.replace(/[^a-z0-9_]/gi, '').toUpperCase()] || 'unknown';
    }
    render() {
        let { flipped: e, type: a, className: t, size: s } = this.props;
        return (0, r.jsx)('div', {
            className: c()(s, u[a], t, { [u.flipped]: e }),
            children: a
        });
    }
}
d(A, 'Types', s),
    d(A, 'Sizes', E),
    d(A, 'defaultProps', {
        size: E.SMALL,
        flipped: !1
    }),
    (a.ZP = A);
