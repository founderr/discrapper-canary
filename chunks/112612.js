e.d(n, {
    Z: function () {
        return a;
    }
}),
    e(47120);
var i = e(192379),
    o = e(881052);
function a(t) {
    let { onSubmit: n, onClose: e } = t,
        [a, s] = i.useState(!1),
        [r, l] = i.useState(null),
        c = i.useCallback(async () => {
            if (!a) {
                s(!0), l(null);
                try {
                    await n(), e();
                } catch (t) {
                    l(new o.Hx(t).getAnyErrorMessage()), s(!1);
                }
            }
        }, [e, n, a]);
    return {
        submitting: a,
        errorMessage: r,
        onSubmit: c
    };
}
