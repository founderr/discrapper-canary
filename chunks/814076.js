n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var E = n(470079),
    r = n(742280),
    u = n(442837),
    i = n(351402);
function S() {
    let [e, t] = E.useState(!1),
        [n, S] = E.useState(!1),
        _ = (0, u.e7)([i.Z], () => r.M.EEA_COUNTRIES.has(i.Z.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: t,
        showWithdrawalWaiver: _,
        hasAcceptedWithdrawalWaiver: !_ || n,
        setHasAcceptedWithdrawalWaiver: S
    };
}
