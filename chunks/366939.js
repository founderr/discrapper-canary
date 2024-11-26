n.d(e, {
    Ld: function () {
        return l;
    },
    O5: function () {
        return _;
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
        return A;
    }
});
var r = n(512722),
    E = n.n(r),
    i = n(570140),
    u = n(74538),
    S = n(355467),
    o = n(981631);
async function l(t) {
    let { planId: e, currency: n, paymentSource: r, trialId: E, code: u, metadata: o, referralCode: l, loadId: _ } = t;
    i.Z.dispatch({ type: 'PREMIUM_PAYMENT_SUBSCRIBE_START' });
    try {
        let t = await S.XW({
            items: [
                {
                    planId: e,
                    quantity: 1
                }
            ],
            paymentSource: r,
            trialId: E,
            code: u,
            currency: n,
            metadata: o,
            referralCode: l,
            loadId: _
        });
        return (
            null != t.subscription &&
                i.Z.dispatch({
                    type: 'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS',
                    subscription: t.subscription
                }),
            t
        );
    } catch (t) {
        throw (
            (i.Z.dispatch({
                type: 'PREMIUM_PAYMENT_SUBSCRIBE_FAIL',
                error: t
            }),
            t)
        );
    }
}
async function _(t, e, n, r, l, _) {
    try {
        let A = (0, u.Af)(t);
        E()(A, 'Expected existing premium plan');
        let a = (0, u.XK)(t, A.planId);
        await S.Mg(
            t,
            {
                status: o.O0b.ACTIVE,
                paymentSource: r,
                items: a,
                currency: n
            },
            e,
            l,
            _
        ),
            i.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (t) {
        throw (
            (i.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: t
            }),
            t)
        );
    }
}
async function A(t, e, n) {
    try {
        await S.Mg(t, { status: o.O0b.ACTIVE }, e, n);
    } catch (t) {
        throw t;
    }
}
async function a(t, e, n, r) {
    try {
        await S.fG(t, e, n, r), i.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (t) {
        throw (
            (i.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: t
            }),
            t)
        );
    }
}
async function T(t, e, n, r, E) {
    try {
        await S.tq(t, e, n, r, E), i.Z.dispatch({ type: 'PREMIUM_PAYMENT_UPDATE_SUCCESS' });
    } catch (t) {
        throw (
            (i.Z.dispatch({
                type: 'PREMIUM_PAYMENT_UPDATE_FAIL',
                error: t
            }),
            t)
        );
    }
}
function I() {
    i.Z.dispatch({ type: 'PREMIUM_PAYMENT_ERROR_CLEAR' });
}
