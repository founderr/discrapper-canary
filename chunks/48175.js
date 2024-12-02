n.d(t, {
    T: function () {
        return a;
    },
    Z: function () {
        return r;
    }
});
var i = n(639119),
    l = n(474936);
function a(e) {
    let { userTrialOffer: t, isGift: n, skuId: i } = e;
    return !n && null != t && null != i && l.nG[t.trial_id].skus.includes(i);
}
function r(e) {
    let { isGift: t, skuId: n, referralTrialOfferId: a } = e,
        r = (0, i.N)(a);
    return !t && null != r && null != n && l.nG[r.trial_id].skus.includes(n);
}
