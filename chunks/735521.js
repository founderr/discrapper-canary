n.d(t, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var E = n(470079),
    r = n(442837),
    u = n(509545);
function i() {
    let [e, t] = E.useState(void 0),
        [n, i] = E.useState(void 0);
    return {
        selectedSkuId: e,
        selectedPlan: (0, r.e7)([u.Z], () => (null != n ? u.Z.get(n) : null)),
        setSelectedSkuId: t,
        setSelectedPlanId: i
    };
}
