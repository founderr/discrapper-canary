t.d(n, {
    z: function () {
        return i;
    }
}),
    t(47120);
var o = t(192379),
    r = t(409813),
    l = t(45572);
function i(e) {
    let { purchaseState: n, currentStep: t, initialScene: i, purchaseScene: a, errorScene: s, successScene: c } = e,
        [u, d] = (0, o.useState)(i);
    return (
        (0, o.useEffect)(() => {
            n === l.A.PURCHASING ? d(a) : n === l.A.FAIL && d(s);
        }, [n, a, s]),
        (0, o.useEffect)(() => {
            t === r.h8.CONFIRM && d(c);
        }, [t, c]),
        [u, d]
    );
}
