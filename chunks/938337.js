n.d(t, {
    i: function () {
        return c;
    }
});
var i = n(200651),
    a = n(192379),
    r = n(512100),
    l = n(906732),
    o = n(626135),
    s = n(981631);
function c(e) {
    let { appId: t, skuId: n, ...c } = e,
        { analyticsLocations: d } = (0, l.ZP)();
    return (
        a.useEffect(() => {
            o.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: t,
                sku_id: n,
                location_stack: d
            });
        }, [d, t, n]),
        (0, i.jsx)(r.u, { ...c })
    );
}
