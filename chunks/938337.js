t.d(n, {
    i: function () {
        return u;
    }
});
var l = t(735250),
    i = t(470079),
    a = t(512100),
    s = t(906732),
    r = t(626135),
    o = t(981631);
function u(e) {
    let { appId: n, skuId: t, ...u } = e,
        { analyticsLocations: c } = (0, s.ZP)();
    return (
        i.useEffect(() => {
            r.default.track(o.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: n,
                sku_id: t,
                location_stack: c
            });
        }, [c, n, t]),
        (0, l.jsx)(a.u, { ...u })
    );
}
