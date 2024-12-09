n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    a = n(509545);
function s() {
    let [e, t] = r.useState(void 0),
        [n, s] = r.useState(void 0),
        [o, l] = r.useState(void 0);
    return {
        selectedSkuId: e,
        selectedPlan: (0, i.e7)([a.Z], () => (null != n ? a.Z.get(n) : null)),
        setSelectedSkuId: t,
        setSelectedPlanId: s,
        selectedPlanNotification: o,
        setSelectedPlanNotification: l
    };
}
