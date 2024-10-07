t.d(n, {
    Z: function () {
        return i;
    }
});
var l = t(598);
function i() {
    let { step: e, stepConfigs: n } = (0, l.usePaymentContext)(),
        t = n.find((n) => n.key === e);
    return null == t ? void 0 : t.options;
}
