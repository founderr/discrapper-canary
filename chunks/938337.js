t.d(n, {
    i: function () {
        return c;
    }
});
var o = t(200651),
    i = t(192379),
    l = t(512100),
    r = t(906732),
    s = t(626135),
    a = t(981631);
function c(e) {
    let { appId: n, skuId: t, ...c } = e,
        { analyticsLocations: d } = (0, r.ZP)();
    return (
        i.useEffect(() => {
            s.default.track(a.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: n,
                sku_id: t,
                location_stack: d
            });
        }, [d, n, t]),
        (0, o.jsx)(l.u, { ...c })
    );
}
