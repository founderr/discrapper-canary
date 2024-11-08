t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(200651),
    l = t(481060),
    o = t(906732),
    r = t(335131),
    s = t(475413),
    c = t(228168),
    a = t(388032);
function d(e) {
    let { onClose: n } = e,
        { analyticsLocations: t, newestAnalyticsLocation: d } = (0, o.ZP)();
    return (0, i.jsx)(s.Ht, {
        action: c.yM.VISIT_SHOP,
        icon: l.ShopIcon,
        text: a.intl.string(a.t.b2d0Nz),
        onClick: () => {
            (0, r.mK)({
                analyticsSource: d,
                analyticsLocations: t,
                openInLayer: !1
            }),
                null == n || n();
        }
    });
}
