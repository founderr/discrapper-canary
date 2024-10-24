n.d(t, {
    F: function () {
        return d;
    }
});
var r = n(200651),
    s = n(192379),
    a = n(481060),
    i = n(906732),
    l = n(963249),
    o = n(474936),
    c = n(974657);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, i.ZP)(),
        d = s.useRef(null);
    return (0, r.jsx)(a.Clickable, {
        className: c.subscribeNow,
        innerRef: d,
        onClick: () => {
            (0, l.Z)({
                subscriptionTier: o.Si.TIER_2,
                analyticsLocations: n,
                returnRef: d
            });
        },
        children: t
    });
};
