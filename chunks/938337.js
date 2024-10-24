t.d(e, {
    i: function () {
        return u;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(512100),
    s = t(906732),
    a = t(626135),
    o = t(981631);
function u(n) {
    let { appId: e, skuId: t, ...u } = n,
        { analyticsLocations: c } = (0, s.ZP)();
    return (
        i.useEffect(() => {
            a.default.track(o.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: e,
                sku_id: t,
                location_stack: c
            });
        }, [c, e, t]),
        (0, l.jsx)(r.u, { ...u })
    );
}
