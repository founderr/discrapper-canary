t.d(n, {
    z: function () {
        return l;
    }
}),
    t(47120);
var o = t(192379),
    r = t(409813),
    i = t(45572);
function l(e) {
    let { purchaseState: n, currentStep: t, initialScene: l, purchaseScene: a, errorScene: s, successScene: c } = e,
        [u, d] = (0, o.useState)(l);
    return (
        (0, o.useEffect)(() => {
            n === i.A.PURCHASING ? d(a) : n === i.A.FAIL && d(s);
        }, [n, a, s]),
        (0, o.useEffect)(() => {
            t === r.h8.CONFIRM && d(c);
        }, [t, c]),
        [u, d]
    );
}
