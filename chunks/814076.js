n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var r = n(192379),
    i = n(742280),
    a = n(442837),
    s = n(351402);
function o() {
    let [e, t] = r.useState(!1),
        [n, o] = r.useState(!1),
        l = (0, a.e7)([s.Z], () => i.M.EEA_COUNTRIES.has(s.Z.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: t,
        showWithdrawalWaiver: l,
        hasAcceptedWithdrawalWaiver: !l || n,
        setHasAcceptedWithdrawalWaiver: o
    };
}
