n.d(t, {
    cp: function () {
        return T;
    },
    eI: function () {
        return h;
    }
});
var r = n(411104);
var i = n(175145),
    a = n(544891),
    o = n(570140),
    s = n(355467),
    l = n(987032),
    u = n(559407),
    c = n(122289),
    d = n(439041),
    _ = n(981631),
    E = n(689938);
async function f() {
    return await a.tn.get({
        url: _.ANM.BILLING_ADYEN_PAYMENT_METHODS,
        oldFormErrors: !0
    });
}
async function h() {
    try {
        let { enabledPaymentTypes: e } = l.ZP.getCurrentConfig({ location: '40c266_2' }, { autoTrackExposure: !1 });
        if (!e.includes(_.HeQ.CASH_APP)) return;
        let t = await f(),
            n = await (0, i.Z)({
                environment: _.Ai1.ADYEN.KEY.startsWith('live_') ? 'live' : 'test',
                clientKey: _.Ai1.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: t.body
            });
        o.Z.dispatch({
            type: 'ADYEN_CREATE_CLIENT_SUCCESS',
            client: n
        }),
            p(n);
    } catch (e) {
        (0, c.q2)(e), o.Z.dispatch({ type: 'ADYEN_CREATE_CLIENT_FAIL' });
    }
}
function p(e) {
    if (null != d.Z.cashAppPayComponent) {
        I(), m();
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
                    o.Z.dispatch({
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
                            (n = !1), (t = E.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY_LOADING_ERROR_TRY_AGAIN);
                    }
                    (0, s.SQ)(e.message, n, t);
                }
            }
        })
        .mount('#'.concat(u.F));
    o.Z.dispatch({
        type: 'ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS',
        component: t
    });
}
function m() {
    var e;
    if (null == d.Z.cashAppPayComponent) throw Error('Adyen CashAppPay component must be created before mounting.');
    null === (e = d.Z.cashAppPayComponent) || void 0 === e || e.mount('#'.concat(u.F));
}
function I() {
    var e;
    null === (e = d.Z.cashAppPayComponent) || void 0 === e || e.unmount();
}
function T() {
    let e = d.Z.cashAppPayComponent;
    if (null == e) throw Error('Adyen CashAppPay component must be created before submitting.');
    e.submit();
}
