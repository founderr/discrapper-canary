t.d(n, {
    i: function () {
        return u;
    }
});
var l = t(735250),
    i = t(470079),
    s = t(512100),
    a = t(906732),
    o = t(626135),
    r = t(981631);
function u(e) {
    let { appId: n, skuId: t, ...u } = e,
        { analyticsLocations: c } = (0, a.ZP)();
    return (
        i.useEffect(() => {
            o.default.track(r.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: n,
                sku_id: t,
                location_stack: c
            });
        }, [c, n, t]),
        (0, l.jsx)(s.u, { ...u })
    );
}
