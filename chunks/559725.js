t.d(a, {
    cp: function () {
        return m;
    },
    eI: function () {
        return A;
    }
}),
    t(411104);
var n = t(175145),
    s = t(544891),
    r = t(570140),
    l = t(355467),
    o = t(987032),
    i = t(559407),
    c = t(122289),
    u = t(439041),
    d = t(981631),
    E = t(689938);
async function _() {
    return await s.tn.get({
        url: d.ANM.BILLING_ADYEN_PAYMENT_METHODS,
        oldFormErrors: !0
    });
}
async function A() {
    try {
        let { enabledPaymentTypes: e } = o.ZP.getCurrentConfig({ location: '40c266_2' }, { autoTrackExposure: !1 });
        if (!e.includes(d.HeQ.CASH_APP)) return;
        let a = await _(),
            t = await (0, n.Z)({
                environment: d.Ai1.ADYEN.KEY.startsWith('live_') ? 'live' : 'test',
                clientKey: d.Ai1.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: a.body
            });
        r.Z.dispatch({
            type: 'ADYEN_CREATE_CLIENT_SUCCESS',
            client: t
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
                            null === (e = u.Z.cashAppPayComponent) || void 0 === e || e.mount('#'.concat(i.F));
                        })();
                    return;
                }
                let a = e
                    .create('cashapp', {
                        showPayButton: !1,
                        enableStoreDetails: !1,
                        storePaymentMethod: !0,
                        setStatusAutomatically: !1,
                        onSubmit: (e) => {
                            let { data: a, isValid: t } = e;
                            if (t)
                                r.Z.dispatch({
                                    type: 'ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS',
                                    data: a
                                });
                            else throw (0, l.SQ)('Cash App Pay setup attempt is not valid.');
                        },
                        onError: (e) => {
                            let a;
                            let t = !0;
                            if ('CANCEL' !== e.name) {
                                switch (e.message) {
                                    case 'Payment declined by CashAppPay':
                                        t = !1;
                                        break;
                                    case 'Something went wrong during customerRequest creation':
                                        (t = !1), (a = E.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_LOADING_ERROR_TRY_AGAIN);
                                }
                                (0, l.SQ)(e.message, t, a);
                            }
                        }
                    })
                    .mount('#'.concat(i.F));
                r.Z.dispatch({
                    type: 'ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS',
                    component: a
                });
            })(t);
    } catch (e) {
        (0, c.q2)(e), r.Z.dispatch({ type: 'ADYEN_CREATE_CLIENT_FAIL' });
    }
}
function m() {
    let e = u.Z.cashAppPayComponent;
    if (null == e) throw Error('Adyen CashAppPay component must be created before submitting.');
    e.submit();
}
