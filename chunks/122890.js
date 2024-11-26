t.d(n, {
    z: function () {
        return r;
    }
}),
    t(47120);
var o = t(192379),
    l = t(409813),
    i = t(45572);
function r(e) {
    let { purchaseState: n, currentStep: t, initialScene: r, purchaseScene: a, errorScene: s, successScene: u } = e,
        [c, d] = (0, o.useState)(r);
    return (
        (0, o.useEffect)(() => {
            n === i.A.PURCHASING ? d(a) : n === i.A.FAIL && d(s);
        }, [n, a, s]),
        (0, o.useEffect)(() => {
            t === l.h8.CONFIRM && d(u);
        }, [t, u]),
        [c, d]
    );
}
