n.d(t, {
    Ld: function () {
        return u;
    },
    O5: function () {
        return c;
    },
    fG: function () {
        return _;
    },
    fw: function () {
        return f;
    },
    tq: function () {
        return E;
    },
    v4: function () {
        return d;
    }
});
var r = n(512722),
    i = n.n(r),
    a = n(570140),
    o = n(74538),
    s = n(355467),
    l = n(981631);
async function u(e) {
    let { planId: t, currency: n, paymentSource: r, trialId: i, code: o, metadata: l, referralCode: u, loadId: c } = e;
    a.Z.dispatch({ type: 'PREMIUM_PAYMENT_SUBSCRIBE_START' });
    try {
        let e = await s.XW({
            items: [
                {
                    planId: t,
                    quantity: 1
                }
            ],
            paymentSource: r,
            trialId: i,
            code: o,
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
        let d = (0, o.Af)(e);
        i()(d, 'Expected existing premium plan');
        let _ = (0, o.XK)(e, d.planId);
        await s.Mg(
            e,
            {
                status: l.O0b.ACTIVE,
                paymentSource: r,
                items: _,
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
        await s.Mg(e, { status: l.O0b.ACTIVE }, t, n);
    } catch (e) {
        throw e;
    }
}
async function _(e, t, n, r) {
    try {
        await s.fG(e, t, n, r), a.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
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
async function E(e, t, n, r, i) {
    try {
        await s.tq(e, t, n, r, i), a.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
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
function f() {
    a.Z.dispatch({ type: 'PREMIUM_PAYMENT_ERROR_CLEAR' });
}
