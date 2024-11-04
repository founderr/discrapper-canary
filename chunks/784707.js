n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(563132);
function l() {
    let { step: e, stepConfigs: t } = (0, i.usePaymentContext)(),
        n = t.find((t) => t.key === e);
    return null == n ? void 0 : n.options;
}
