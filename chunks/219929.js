t.d(n, {
    Qy: function () {
        return a;
    },
    Uy: function () {
        return _;
    }
}),
    t(757143);
var a,
    s,
    r,
    i = t(735250),
    l = t(470079),
    o = t(120356),
    c = t.n(o),
    u = t(857323);
function d(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
((r = a || (a = {})).UNKNOWN = 'unknown'), (r.VISA = 'visa'), (r.DISCOVER = 'discover'), (r.MASTERCARD = 'mastercard'), (r.AMEX = 'amex'), (r.PAYPAL = 'paypal'), (r.PAYMENT_REQUEST = 'paymentRequest'), (r.G_PAY = 'gPay'), (r.DINERS = 'diners'), (r.JCB = 'jcb'), (r.UNIONPAY = 'unionpay'), (r.SOFORT = 'sofort'), (r.PRZELEWY24 = 'przelewy24'), (r.GIROPAY = 'giropay'), (r.PAYSAFECARD = 'paysafecard'), (r.GCASH = 'gcash'), (r.GRABPAY = 'grabpay'), (r.MOMO_WALLET = 'momo_wallet'), (r.VENMO = 'venmo'), (r.KAKAOPAY = 'kakaopay'), (r.GOPAY_WALLET = 'gopay_wallet'), (r.BANCONTACT = 'bancontact'), (r.EPS = 'eps'), (r.IDEAL = 'ideal'), (r.CASH_APP = 'cash_app'), (r.APPLE = 'apple');
let _ = {
    SMALL: u.cardIconSmall,
    MEDIUM: u.cardIconMedium,
    LARGE: u.cardIconLarge,
    XLARGE: u.cardIconXLarge
};
class I extends (s = l.PureComponent) {
    static getType(e) {
        return null == e ? 'unknown' : a[e.replace(/[^a-z0-9_]/gi, '').toUpperCase()] || 'unknown';
    }
    render() {
        let { flipped: e, type: n, className: t, size: a } = this.props;
        return (0, i.jsx)('div', {
            className: c()(a, u[n], t, { [u.flipped]: e }),
            children: n
        });
    }
}
d(I, 'Types', a),
    d(I, 'Sizes', _),
    d(I, 'defaultProps', {
        size: _.SMALL,
        flipped: !1
    }),
    (n.ZP = I);
