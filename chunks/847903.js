r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(192379),
    a = r(442837),
    s = r(570140),
    o = r(355467),
    l = r(314897),
    u = r(351402),
    c = r(853872);
function d() {
    let e = (0, a.e7)([c.Z], () => c.Z.getDefaultBillingCountryCode()),
        n = (0, a.e7)([u.Z], () => u.Z.ipCountryCode),
        r = (0, a.e7)([l.default], () => l.default.isAuthenticated());
    return (
        i.useEffect(() => {
            s.Z.wait(() => {
                r && !u.Z.isPaymentSourceFetching && !c.Z.hasFetchedPaymentSources && o.tZ();
            });
        }, [r]),
        i.useEffect(() => {
            r && !u.Z.ipCountryCodeLoaded && o.GE();
        }, [n, r]),
        {
            defaultBillingCountryCode: e,
            ipCountryCode: n
        }
    );
}
