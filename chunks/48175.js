n.d(t, {
    T: function () {
        return r;
    },
    Z: function () {
        return a;
    }
});
var i = n(639119),
    l = n(474936);
function r(e) {
    let { userTrialOffer: t, isGift: n, skuId: i } = e;
    return !n && null != t && null != i && l.nG[t.trial_id].skus.includes(i);
}
function a(e) {
    let { isGift: t, skuId: n, referralTrialOfferId: r } = e,
        a = (0, i.N)(r);
    return !t && null != a && null != n && l.nG[a.trial_id].skus.includes(n);
}
