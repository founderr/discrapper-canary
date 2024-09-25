n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(509545);
function s() {
    let [e, t] = i.useState(void 0),
        [n, r] = i.useState(void 0);
    return {
        selectedSkuId: e,
        selectedPlan: (0, a.e7)([o.Z], () => (null != n ? o.Z.get(n) : null)),
        setSelectedSkuId: t,
        setSelectedPlanId: r
    };
}
