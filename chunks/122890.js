t.d(n, {
    z: function () {
        return l;
    }
}),
    t(47120);
var r = t(192379),
    o = t(409813),
    i = t(45572);
function l(e) {
    let { purchaseState: n, currentStep: t, initialScene: l, purchaseScene: a, errorScene: s, successScene: c } = e,
        [u, d] = (0, r.useState)(l);
    return (
        (0, r.useEffect)(() => {
            n === i.A.PURCHASING ? d(a) : n === i.A.FAIL && d(s);
        }, [n, a, s]),
        (0, r.useEffect)(() => {
            t === o.h8.CONFIRM && d(c);
        }, [t, c]),
        [u, d]
    );
}
