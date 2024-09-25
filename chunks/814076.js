n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(742280),
    o = n(442837),
    s = n(351402);
function l() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(!1),
        l = (0, o.e7)([s.Z], () => a.M.EEA_COUNTRIES.has(s.Z.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: t,
        showWithdrawalWaiver: l,
        hasAcceptedWithdrawalWaiver: !l || n,
        setHasAcceptedWithdrawalWaiver: r
    };
}
