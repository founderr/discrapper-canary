t.d(n, {
    z: function () {
        return i;
    }
}),
    t(47120);
var o = t(470079),
    r = t(409813),
    a = t(45572);
function i(e) {
    let { purchaseState: n, currentStep: t, initialScene: i, purchaseScene: c, errorScene: l, successScene: s } = e,
        [u, d] = (0, o.useState)(i);
    return (
        (0, o.useEffect)(() => {
            n === a.A.PURCHASING ? d(c) : n === a.A.FAIL && d(l);
        }, [n, c, l]),
        (0, o.useEffect)(() => {
            t === r.h8.CONFIRM && d(s);
        }, [t, s]),
        [u, d]
    );
}
