t.d(a, {
    Dz: function () {
        return E;
    },
    Nj: function () {
        return N;
    },
    RS: function () {
        return p;
    },
    by: function () {
        return A;
    },
    eI: function () {
        return u;
    },
    f6: function () {
        return _;
    },
    gy: function () {
        return h;
    },
    i0: function () {
        return C;
    },
    ib: function () {
        return d;
    },
    og: function () {
        return I;
    }
}),
    t(411104),
    t(47120);
var n = t(544891),
    s = t(570140),
    r = t(618541),
    l = t(751767),
    o = t(358085),
    i = t(355467),
    c = t(981631);
function u() {
    (0, l.S)().then((e) => {
        e.client
            .create({ authorization: c.Ai1.BRAINTREE.KEY })
            .then((e) => {
                s.Z.dispatch({
                    type: 'BRAINTREE_CREATE_CLIENT_SUCCESS',
                    client: e
                }),
                    E(),
                    d();
            })
            .catch(() => s.Z.dispatch({ type: 'BRAINTREE_CREATE_CLIENT_FAIL' }));
    });
}
function d() {
    let e = r.Z.getClient();
    if (null == e) throw Error('Braintree client must be initialized before creating Venmo client.');
    (0, l.S)().then((a) => {
        a.venmo
            .create({
                client: e,
                allowDesktop: !0,
                paymentMethodUsage: 'multi_use'
            })
            .then((e) => {
                s.Z.dispatch({
                    type: 'BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS',
                    venmoClient: e
                });
            })
            .catch(() => {
                s.Z.dispatch({ type: 'BRAINTREE_CREATE_VENMO_CLIENT_FAIL' });
            });
    });
}
function E() {
    let e = r.Z.getClient();
    if (null == e) throw Error('braintree client must be initialized before calling this');
    (0, l.S)().then((a) => {
        a.paypal
            .create({ client: e })
            .then((e) => {
                if (null == e._navigateFrameToAuth) throw Error('braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?');
                (e._navigateFrameToAuth = function (e) {
                    let a = this._formatPaymentResourceData(e);
                    return n.tn
                        .post({
                            url: c.ANM.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
                            oldFormErrors: !0,
                            body: {
                                return_url: a.returnUrl,
                                cancel_url: a.cancelUrl
                            }
                        })
                        .then((e) => {
                            let {
                                body: { token: a }
                            } = e;
                            this._frameService.redirect(
                                (function (e) {
                                    let a = c.Ai1.BRAINTREE.KEY.startsWith('production_') ? 'https://www.paypal.com' : 'https://sandbox.paypal.com';
                                    return ''.concat(a, '/agreements/approve?nolegacy=1&ba_token=').concat(e);
                                })(a)
                            );
                        })
                        .catch((e) => (this._frameService.close(), (this._authorizationInProgress = !1), Promise.reject(Error(e.body && e.body.message))));
                }),
                    s.Z.dispatch({
                        type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS',
                        paypalClient: e
                    });
            })
            .catch(() => s.Z.dispatch({ type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL' }));
    });
}
function _() {
    let e = r.Z.getPayPalClient();
    if (null == e) throw Error('braintree paypal client must be initialized before calling this');
    s.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_START' });
    let a = Promise.resolve('');
    (0, o.isDesktop)() && (a = (0, i.EH)(c.HeQ.PAYPAL)),
        a
            .then(() => e.tokenize({ flow: 'vault' }))
            .then((e) => {
                let { email: a, firstName: t, lastName: n, billingAddress: r } = e.details;
                s.Z.dispatch({
                    type: 'BRAINTREE_TOKENIZE_PAYPAL_SUCCESS',
                    nonce: e.nonce,
                    email: a,
                    billingAddress: {
                        name: ''.concat(t, ' ').concat(n),
                        line1: r.line1,
                        line2: r.line2,
                        city: r.city,
                        state: r.state,
                        country: r.countryCode,
                        postalCode: r.postalCode
                    }
                });
            })
            .catch((e) => {
                let { message: a, code: t } = e;
                t === c.U66.PAYPAL_POPUP_CLOSED || null == t
                    ? s.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED' })
                    : s.Z.dispatch({
                          type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL',
                          message: a,
                          code: t
                      });
            });
}
function A() {
    let e = r.Z.getVenmoClient();
    if (null == e) throw Error('Braintree Venmo client must be initialized before calling tokenize.');
    s.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_VENMO_START' }),
        e
            .tokenize()
            .then((e) => {
                let { username: a } = e.details;
                s.Z.dispatch({
                    type: 'BRAINTREE_TOKENIZE_VENMO_SUCCESS',
                    nonce: e.nonce,
                    username: a
                });
            })
            .catch((e) => {
                let { message: a, code: t } = e;
                t === c.U66.VENMO_APP_CANCELED || t === c.U66.VENMO_CANCELED
                    ? s.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED' })
                    : s.Z.dispatch({
                          type: 'BRAINTREE_TOKENIZE_VENMO_FAIL',
                          message: a,
                          code: t
                      });
            });
}
function m(e, a) {
    if (null == e) return Promise.resolve();
    s.Z.dispatch(a);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
function N() {
    return m(r.Z.getPayPalClient(), { type: 'BRAINTREE_TEARDOWN_PAYPAL_CLIENT' });
}
function p() {
    return m(r.Z.getVenmoClient(), { type: 'BRAINTREE_TEARDOWN_VENMO_CLIENT' });
}
function h() {
    return Promise.all([N(), p()]);
}
function C() {
    let e = r.Z.getLastURL();
    null == e ? _() : (s.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_START' }), window.open(e));
}
function I() {
    A();
}
