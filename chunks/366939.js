n.d(t, {
    Ld: function () {
        return o;
    },
    O5: function () {
        return A;
    },
    fG: function () {
        return a;
    },
    fw: function () {
        return I;
    },
    tq: function () {
        return T;
    },
    v4: function () {
        return l;
    }
});
var E = n(512722),
    r = n.n(E),
    i = n(570140),
    u = n(74538),
    S = n(355467),
    _ = n(981631);
async function o(e) {
    let { planId: t, currency: n, paymentSource: E, trialId: r, code: u, metadata: _, referralCode: o, loadId: A } = e;
    i.Z.dispatch({ type: 'PREMIUM_PAYMENT_SUBSCRIBE_START' });
    try {
        let e = await S.XW({
            items: [
                {
                    planId: t,
                    quantity: 1
                }
            ],
            paymentSource: E,
            trialId: r,
            code: u,
            currency: n,
            metadata: _,
            referralCode: o,
            loadId: A
        });
        return (
            null != e.subscription &&
                i.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS',
                    subscription: e.subscription
                }),
            e
        );
    } catch (e) {
        throw (
            (i.Z.dispatch({
                type: 'PREMIUM_PAYMENT_SUBSCRIBE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function A(e, t, n, E, o, A) {
    try {
        let l = (0, u.Af)(e);
        r()(l, 'Expected existing premium plan');
        let a = (0, u.XK)(e, l.planId);
        await S.Mg(
            e,
            {
                status: _.O0b.ACTIVE,
                paymentSource: E,
                items: a,
                currency: n
            },
            t,
            o,
            A
        ),
            i.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (i.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function l(e, t, n) {
    try {
        await S.Mg(e, { status: _.O0b.ACTIVE }, t, n);
    } catch (e) {
        throw e;
    }
}
async function a(e, t, n, E) {
    try {
        await S.fG(e, t, n, E), i.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (i.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function T(e, t, n, E, r) {
    try {
        await S.tq(e, t, n, E, r), i.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (i.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
function I() {
    i.Z.dispatch({ type: 'PREMIUM_PAYMENT_ERROR_CLEAR' });
}
