n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var E = n(470079),
    r = n(742280),
    i = n(442837),
    u = n(351402);
function S() {
    let [e, t] = E.useState(!1),
        [n, S] = E.useState(!1),
        _ = (0, i.e7)([u.Z], () => r.M.EEA_COUNTRIES.has(u.Z.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: t,
        showWithdrawalWaiver: _,
        hasAcceptedWithdrawalWaiver: !_ || n,
        setHasAcceptedWithdrawalWaiver: S
    };
}
