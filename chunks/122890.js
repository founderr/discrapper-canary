t.d(n, {
    z: function () {
        return s;
    }
}), t(47120);
var r = t(470079), o = t(409813), l = t(45572);
function s(e) {
    let {
            purchaseState: n,
            currentStep: t,
            initialScene: s,
            purchaseScene: i,
            errorScene: a,
            successScene: c
        } = e, [u, d] = (0, r.useState)(s);
    return (0, r.useEffect)(() => {
        n === l.A.PURCHASING ? d(i) : n === l.A.FAIL && d(a);
    }, [
        n,
        i,
        a
    ]), (0, r.useEffect)(() => {
        t === o.h8.CONFIRM && d(c);
    }, [
        t,
        c
    ]), [
        u,
        d
    ];
}
