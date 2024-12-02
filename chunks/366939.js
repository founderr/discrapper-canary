n.d(t, {
    Ld: function () {
        return u;
    },
    O5: function () {
        return c;
    },
    fG: function () {
        return f;
    },
    fw: function () {
        return p;
    },
    tq: function () {
        return _;
    },
    v4: function () {
        return d;
    }
});
var r = n(512722),
    i = n.n(r),
    a = n(570140),
    s = n(74538),
    o = n(355467),
    l = n(981631);
async function u(e) {
    let { planId: t, currency: n, paymentSource: r, trialId: i, code: s, metadata: l, referralCode: u, loadId: c } = e;
    a.Z.dispatch({ type: 'PREMIUM_PAYMENT_SUBSCRIBE_START' });
    try {
        let e = await o.XW({
            items: [
                {
                    planId: t,
                    quantity: 1
                }
            ],
            paymentSource: r,
            trialId: i,
            code: s,
            currency: n,
            metadata: l,
            referralCode: u,
            loadId: c
        });
        return (
            null != e.subscription &&
                a.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS',
                    subscription: e.subscription
                }),
            e
        );
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: 'PREMIUM_PAYMENT_SUBSCRIBE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function c(e, t, n, r, u, c) {
    try {
        let d = (0, s.Af)(e);
        i()(d, 'Expected existing premium plan');
        let f = (0, s.XK)(e, d.planId);
        await o.Mg(
            e,
            {
                status: l.O0b.ACTIVE,
                paymentSource: r,
                items: f,
                currency: n
            },
            t,
            u,
            c
        ),
            a.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function d(e, t, n) {
    try {
        await o.Mg(e, { status: l.O0b.ACTIVE }, t, n);
    } catch (e) {
        throw e;
    }
}
async function f(e, t, n, r) {
    try {
        await o.fG(e, t, n, r), a.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function _(e, t, n, r, i) {
    try {
        await o.tq(e, t, n, r, i), a.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
function p() {
    a.Z.dispatch({ type: 'PREMIUM_PAYMENT_ERROR_CLEAR' });
}
