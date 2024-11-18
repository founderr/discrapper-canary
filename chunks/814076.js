n.d(e, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var r = n(192379),
    E = n(742280),
    i = n(442837),
    u = n(351402);
function o() {
    let [t, e] = r.useState(!1),
        [n, o] = r.useState(!1),
        S = (0, i.e7)([u.Z], () => E.M.EEA_COUNTRIES.has(u.Z.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: t,
        setHasViewedPurchaseTerms: e,
        showWithdrawalWaiver: S,
        hasAcceptedWithdrawalWaiver: !S || n,
        setHasAcceptedWithdrawalWaiver: o
    };
}
