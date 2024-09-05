n.d(t, {
    Ld: function () {
        return a;
    },
    O5: function () {
        return _;
    },
    fG: function () {
        return s;
    },
    fw: function () {
        return c;
    },
    tq: function () {
        return A;
    },
    v4: function () {
        return S;
    }
});
var i = n(512722),
    r = n.n(i),
    u = n(570140),
    l = n(74538),
    o = n(355467),
    E = n(981631);
async function a(e) {
    let { planId: t, currency: n, paymentSource: i, trialId: r, code: l, metadata: E, referralCode: a, loadId: _ } = e;
    u.Z.dispatch({ type: 'PREMIUM_PAYMENT_SUBSCRIBE_START' });
    try {
        let e = await o.XW({
            items: [
                {
                    planId: t,
                    quantity: 1
                }
            ],
            paymentSource: i,
            trialId: r,
            code: l,
            currency: n,
            metadata: E,
            referralCode: a,
            loadId: _
        });
        return (
            null != e.subscription &&
                u.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS',
                    subscription: e.subscription
                }),
            e
        );
    } catch (e) {
        throw (
            (u.Z.dispatch({
                type: 'PREMIUM_PAYMENT_SUBSCRIBE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function _(e, t, n, i, a, _) {
    try {
        let S = (0, l.Af)(e);
        r()(S, 'Expected existing premium plan');
        let s = (0, l.XK)(e, S.planId);
        await o.Mg(
            e,
            {
                status: E.O0b.ACTIVE,
                paymentSource: i,
                items: s,
                currency: n
            },
            t,
            a,
            _
        ),
            u.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (u.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function S(e, t, n) {
    try {
        await o.Mg(e, { status: E.O0b.ACTIVE }, t, n);
    } catch (e) {
        throw e;
    }
}
async function s(e, t, n, i) {
    try {
        await o.fG(e, t, n, i), u.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (u.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
async function A(e, t, n, i, r) {
    try {
        await o.tq(e, t, n, i, r), u.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (e) {
        throw (
            (u.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: e
            }),
            e)
        );
    }
}
function c() {
    u.Z.dispatch({ type: 'PREMIUM_PAYMENT_ERROR_CLEAR' });
}
