n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var E = n(470079),
    r = n(442837),
    i = n(509545);
function u() {
    let [e, t] = E.useState(void 0),
        [n, u] = E.useState(void 0);
    return {
        selectedSkuId: e,
        selectedPlan: (0, r.e7)([i.Z], () => (null != n ? i.Z.get(n) : null)),
        setSelectedSkuId: t,
        setSelectedPlanId: u
    };
}
