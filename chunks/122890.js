t.d(n, {
    z: function () {
        return i;
    }
}),
    t(47120);
var s = t(470079),
    r = t(409813),
    a = t(45572);
function i(e) {
    let { purchaseState: n, currentStep: t, initialScene: i, purchaseScene: c, errorScene: l, successScene: L } = e,
        [o, u] = (0, s.useState)(i);
    return (
        (0, s.useEffect)(() => {
            n === a.A.PURCHASING ? u(c) : n === a.A.FAIL && u(l);
        }, [n, c, l]),
        (0, s.useEffect)(() => {
            t === r.h8.CONFIRM && u(L);
        }, [t, L]),
        [o, u]
    );
}
