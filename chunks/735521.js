r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(442837),
    o = r(509545);
function l() {
    let [e, n] = a.useState(void 0),
        [r, i] = a.useState(void 0),
        [l, u] = a.useState(void 0);
    return {
        selectedSkuId: e,
        selectedPlan: (0, s.e7)([o.Z], () => (null != r ? o.Z.get(r) : null)),
        setSelectedSkuId: n,
        setSelectedPlanId: i,
        selectedPlanNotification: l,
        setSelectedPlanNotification: u
    };
}
