r.d(t, {
    F: function () {
        return d;
    }
});
var s = r(200651),
    n = r(192379),
    a = r(481060),
    i = r(906732),
    l = r(963249),
    o = r(474936),
    c = r(974657);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: r } = (0, i.ZP)(),
        d = n.useRef(null);
    return (0, s.jsx)(a.Clickable, {
        className: c.subscribeNow,
        innerRef: d,
        onClick: () => {
            (0, l.Z)({
                subscriptionTier: o.Si.TIER_2,
                analyticsLocations: r,
                returnRef: d
            });
        },
        children: t
    });
};
