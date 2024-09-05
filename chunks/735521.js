n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(470079),
    r = n(442837),
    u = n(509545);
function l() {
    let [e, t] = i.useState(void 0),
        [n, l] = i.useState(void 0);
    return {
        selectedSkuId: e,
        selectedPlan: (0, r.e7)([u.Z], () => (null != n ? u.Z.get(n) : null)),
        setSelectedSkuId: t,
        setSelectedPlanId: l
    };
}
