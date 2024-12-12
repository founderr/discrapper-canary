r.d(n, {
    Ld: function () {
        return c;
    },
    O5: function () {
        return d;
    },
    fG: function () {
        return _;
    },
    fw: function () {
        return p;
    },
    tq: function () {
        return h;
    },
    v4: function () {
        return f;
    }
});
var i = r(512722),
    a = r.n(i),
    s = r(570140),
    o = r(74538),
    l = r(355467),
    u = r(981631);
async function c(e) {
    let { planId: n, currency: r, paymentSource: i, trialId: a, code: o, metadata: u, referralCode: c, loadId: d } = e;
    s.Z.dispatch({ type: 'PREMIUM_PAYMENT_SUBSCRIBE_START' });
    try {
        let e = await l.XW({
            items: [
                {
                    planId: n,
                    quantity: 1
                }
            ],
            paymentSource: i,
            trialId: a,
            code: o,
            currency: r,
            metadata: u,
            referralCode: c,
            loadId: d
        });
        return (
            null != e.subscription &&
                s.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS',
                    subscription: e.subscription
                }),
            e
        );
    } catch (e) {
        throw (
            (s.Z.dispatch({
                type: 'PREMIUM_PAYMENT_SUBSCRIBE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function d(e, n, r, i, c, d) {
    try {
        let f = (0, o.Af)(e);
        a()(f, 'Expected existing premium plan');
        let _ = (0, o.XK)(e, f.planId);
        await l.Mg(
            e,
            {
                status: u.O0b.ACTIVE,
                paymentSource: i,
                items: _,
                currency: r
            },
            n,
            c,
            d
        ),
            s.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (s.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function f(e, n, r) {
    try {
        await l.Mg(e, { status: u.O0b.ACTIVE }, n, r);
    } catch (e) {
        throw e;
    }
}
async function _(e, n, r, i) {
    try {
        await l.fG(e, n, r, i), s.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (s.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function h(e, n, r, i, a) {
    try {
        await l.tq(e, n, r, i, a), s.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (s.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
function p() {
    s.Z.dispatch({ type: 'PREMIUM_PAYMENT_ERROR_CLEAR' });
}
