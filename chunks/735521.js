n.d(e, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var r = n(192379),
    E = n(442837),
    i = n(509545);
function u() {
    let [t, e] = r.useState(void 0),
        [n, u] = r.useState(void 0);
    return {
        selectedSkuId: t,
        selectedPlan: (0, E.e7)([i.Z], () => (null != n ? i.Z.get(n) : null)),
        setSelectedSkuId: e,
        setSelectedPlanId: u
    };
}
