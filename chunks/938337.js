t.d(n, {
    i: function () {
        return c;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(512100),
    a = t(906732),
    o = t(626135),
    s = t(981631);
function c(e) {
    let { appId: n, skuId: t, ...c } = e,
        { analyticsLocations: u } = (0, a.ZP)();
    return (
        i.useEffect(() => {
            o.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: n,
                sku_id: t,
                location_stack: u
            });
        }, [u, n, t]),
        (0, l.jsx)(r.u, { ...c })
    );
}
