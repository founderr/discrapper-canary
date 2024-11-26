n.d(e, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var r = n(192379),
    E = n(742280),
    i = n(442837),
    u = n(351402);
function S() {
    let [t, e] = r.useState(!1),
        [n, S] = r.useState(!1),
        o = (0, i.e7)([u.Z], () => E.M.EEA_COUNTRIES.has(u.Z.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: t,
        setHasViewedPurchaseTerms: e,
        showWithdrawalWaiver: o,
        hasAcceptedWithdrawalWaiver: !o || n,
        setHasAcceptedWithdrawalWaiver: S
    };
}
