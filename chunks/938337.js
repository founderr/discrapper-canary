t.d(n, {
    i: function () {
        return u;
    }
});
var i = t(735250),
    l = t(470079),
    r = t(512100),
    s = t(906732),
    o = t(626135),
    a = t(981631);
function u(e) {
    let { appId: n, skuId: t, ...u } = e,
        { analyticsLocations: c } = (0, s.ZP)();
    return (
        l.useEffect(() => {
            o.default.track(a.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: n,
                sku_id: t,
                location_stack: c
            });
        }, [c, n, t]),
        (0, i.jsx)(r.u, { ...u })
    );
}
