t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(200651),
    s = t(481060),
    o = t(906732),
    l = t(335131),
    r = t(475413),
    c = t(228168),
    a = t(689938);
function d(e) {
    let { onClose: n } = e,
        { analyticsLocations: t, newestAnalyticsLocation: d } = (0, o.ZP)();
    return (0, i.jsx)(r.Ht, {
        action: c.yM.VISIT_SHOP,
        icon: s.ShopIcon,
        text: a.Z.Messages.USER_PROFILE_ENTRY_POINTS_SHOP,
        onClick: () => {
            (0, l.mK)({
                analyticsSource: d,
                analyticsLocations: t,
                openInLayer: !1
            }),
                null == n || n();
        }
    });
}
