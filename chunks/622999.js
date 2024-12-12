let i;
r.d(n, {
    az: function () {
        return _;
    },
    d2: function () {
        return f;
    },
    eH: function () {
        return d;
    },
    oe: function () {
        return h;
    }
});
var a,
    s = r(47120);
var o = r(657610),
    l = r(544891),
    u = r(981631);
!(function (e) {
    (e.REQUIRES_PAYMENT_METHOD = 'requires_payment_method'), (e.REQUIRES_CONFIRMATION = 'requires_confirmation'), (e.REQUIRES_ACTION = 'requires_action'), (e.PROCESSING = 'processing'), (e.CANCELED = 'canceled'), (e.SUCCEEDED = 'succeeded');
})(a || (a = {}));
let c = (e) => {
        let n = (n) => 'You passed an invalid expiration date '.concat(e) + ''.concat(null != n ? n : '') + 'Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`',
            r = e.split(/[.\-/\s]+/g);
        2 !== r.length && n();
        let i = r.map((e) => {
                let i = parseInt(e);
                return isNaN(i) && n(''.concat(r, ' is not a number.')), i < 1 && n(''.concat(i, ' is less than one.')), i;
            }),
            [a, s] = i[0] > 12 ? [i[1], i[0]] : [i[0], i[1]];
        return a > 12 && n('Month must be a number 1-12, not '.concat(a, '.')), s < 100 && (s += 2000), [a, s];
    },
    d = (e) => {
        let n, r;
        try {
            [n, r] = c(e);
        } catch (e) {
            return !1;
        }
        let i = new Date(r, n),
            a = new Date();
        return i.setMonth(i.getMonth() - 1), i.setMonth(i.getMonth() + 1, 1), i > a;
    };
function f() {
    return null != i ? Promise.resolve(i) : (0, o.loadStripe)(u.Ai1.STRIPE.KEY).then((e) => ((i = e), e));
}
function _(e) {
    var n, r, i, a, s, o, l, u;
    let { billing_details: c } = e,
        d = null !== (n = c.address) && void 0 !== n ? n : {},
        f = {
            name: null !== (r = c.name) && void 0 !== r ? r : '',
            line1: null !== (i = d.line1) && void 0 !== i ? i : '',
            line2: null !== (a = d.line2) && void 0 !== a ? a : '',
            city: null !== (s = d.city) && void 0 !== s ? s : '',
            state: null !== (o = d.state) && void 0 !== o ? o : '',
            country: null !== (l = d.country) && void 0 !== l ? l : '',
            postalCode: null !== (u = d.postal_code) && void 0 !== u ? u : ''
        };
    return {
        token: e.id,
        billingAddressInfo: f
    };
}
async function h(e) {
    try {
        let { stripe_payment_intent_client_secret: n } = (
                await l.tn.get({
                    url: u.ANM.BILLING_STRIPE_PAYMENT_INTENTS(e),
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
            ).body,
            r = await f();
        if (null == r) return { error: 'unable to load stripe' };
        let { error: i, paymentIntent: a } = await r.retrievePaymentIntent(n);
        if (null != i) return { error: i.message };
        if (null == a) return { error: 'payment intent does not exist' };
        let s = {};
        switch (('requires_payment_method' === a.status && null != a.last_payment_error && null != a.last_payment_error.payment_method && (s.payment_method = a.last_payment_error.payment_method.id), a.status)) {
            case 'requires_payment_method':
            case 'requires_confirmation':
            case 'requires_action':
                let { error: o } = await r.confirmCardPayment(n, s);
                if (null != o) return { error: o.message };
                return {};
            case 'succeeded':
            case 'processing':
                return {};
            default:
                return { error: 'Invalid Payment Intent status: '.concat(a.status) };
        }
    } catch (e) {
        return { error: e.message };
    }
}
