t.d(n, {
    T: function () {
        return u;
    },
    Z: function () {
        return o;
    }
});
var l = t(639119),
    i = t(474936);
function u(e) {
    let { userTrialOffer: n, isGift: t, skuId: l } = e;
    return !t && null != n && null != l && i.nG[n.trial_id].skus.includes(l);
}
function o(e) {
    let { isGift: n, skuId: t, referralTrialOfferId: u } = e,
        o = (0, l.N)(u);
    return !n && null != o && null != t && i.nG[o.trial_id].skus.includes(t);
}
