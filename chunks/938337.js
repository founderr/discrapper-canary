t.d(e, {
    i: function () {
        return u;
    }
});
var l = t(735250),
    i = t(470079),
    o = t(512100),
    r = t(906732),
    a = t(626135),
    s = t(981631);
function u(n) {
    let { appId: e, skuId: t, ...u } = n,
        { analyticsLocations: c } = (0, r.ZP)();
    return (
        i.useEffect(() => {
            a.default.track(s.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: e,
                sku_id: t,
                location_stack: c
            });
        }, [c, e, t]),
        (0, l.jsx)(o.u, { ...u })
    );
}
