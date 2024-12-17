n.d(t, {
    cp: function () {
        return A;
    },
    eI: function () {
        return h;
    }
}),
    n(411104);
var a = n(175145),
    r = n(544891),
    l = n(570140),
    s = n(355467),
    i = n(987032),
    o = n(559407),
    c = n(122289),
    u = n(439041),
    d = n(981631),
    p = n(388032);
async function m() {
    return await r.tn.get({
        url: d.ANM.BILLING_ADYEN_PAYMENT_METHODS,
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
async function h() {
    try {
        let { enabledPaymentTypes: e } = i.ZP.getCurrentConfig({ location: '40c266_2' }, { autoTrackExposure: !1 });
        if (!e.includes(d.HeQ.CASH_APP)) return;
        let t = await m(),
            n = await (0, a.Z)({
                environment: d.Ai1.ADYEN.KEY.startsWith('live_') ? 'live' : 'test',
                clientKey: d.Ai1.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: t.body
            });
        l.Z.dispatch({
            type: 'ADYEN_CREATE_CLIENT_SUCCESS',
            client: n
        }),
            (function (e) {
                if (null != u.Z.cashAppPayComponent) {
                    (function () {
                        var e;
                        null === (e = u.Z.cashAppPayComponent) || void 0 === e || e.unmount();
                    })(),
                        (function () {
                            var e;
                            if (null == u.Z.cashAppPayComponent) throw Error('Adyen CashAppPay component must be created before mounting.');
                            null === (e = u.Z.cashAppPayComponent) || void 0 === e || e.mount('#'.concat(o.F));
                        })();
                    return;
                }
                let t = e
                    .create('cashapp', {
                        showPayButton: !1,
                        enableStoreDetails: !1,
                        storePaymentMethod: !0,
                        setStatusAutomatically: !1,
                        onSubmit: (e) => {
                            let { data: t, isValid: n } = e;
                            if (n)
                                l.Z.dispatch({
                                    type: 'ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS',
                                    data: t
                                });
                            else throw (0, s.SQ)('Cash App Pay setup attempt is not valid.');
                        },
                        onError: (e) => {
                            let t;
                            let n = !0;
                            if ('CANCEL' !== e.name) {
                                switch (e.message) {
                                    case 'Payment declined by CashAppPay':
                                        n = !1;
                                        break;
                                    case 'Something went wrong during customerRequest creation':
                                        (n = !1), (t = p.intl.string(p.t.TJ8dDA));
                                }
                                (0, s.SQ)(e.message, n, t);
                            }
                        }
                    })
                    .mount('#'.concat(o.F));
                l.Z.dispatch({
                    type: 'ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS',
                    component: t
                });
            })(n);
    } catch (e) {
        (0, c.q2)(e), l.Z.dispatch({ type: 'ADYEN_CREATE_CLIENT_FAIL' });
    }
}
function A() {
    let e = u.Z.cashAppPayComponent;
    if (null == e) throw Error('Adyen CashAppPay component must be created before submitting.');
    e.submit();
}
