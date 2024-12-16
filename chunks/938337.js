t.d(n, {
    i: function () {
        return c;
    }
});
var l = t(200651),
    o = t(192379),
    i = t(512100),
    a = t(906732),
    r = t(626135),
    s = t(981631);
function c(e) {
    let { appId: n, skuId: t, ...c } = e,
        { analyticsLocations: d } = (0, a.ZP)();
    return (
        o.useEffect(() => {
            r.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: n,
                sku_id: t,
                location_stack: d
            });
        }, [d, n, t]),
        (0, l.jsx)(i.u, { ...c })
    );
}
