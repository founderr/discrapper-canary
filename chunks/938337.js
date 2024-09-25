n.d(t, {
    i: function () {
        return u;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(512100),
    o = n(906732),
    s = n(626135),
    l = n(981631);
function u(e) {
    let { appId: t, skuId: n, ...u } = e,
        { analyticsLocations: c } = (0, o.ZP)();
    return (
        i.useEffect(() => {
            s.default.track(l.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: t,
                sku_id: n,
                location_stack: c
            });
        }, [c, t, n]),
        (0, r.jsx)(a.u, { ...u })
    );
}
