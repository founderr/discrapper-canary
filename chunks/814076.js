n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(470079),
    r = n(742280),
    u = n(442837),
    l = n(351402);
function o() {
    let [e, t] = i.useState(!1),
        [n, o] = i.useState(!1),
        E = (0, u.e7)([l.Z], () => r.M.EEA_COUNTRIES.has(l.Z.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: t,
        showWithdrawalWaiver: E,
        hasAcceptedWithdrawalWaiver: !E || n,
        setHasAcceptedWithdrawalWaiver: o
    };
}
