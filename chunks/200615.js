r.d(t, {
    F: function () {
        return d;
    }
});
var a = r(735250),
    n = r(470079),
    s = r(481060),
    i = r(906732),
    o = r(963249),
    l = r(474936),
    c = r(974657);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: r } = (0, i.ZP)(),
        d = n.useRef(null);
    return (0, a.jsx)(s.Clickable, {
        className: c.subscribeNow,
        innerRef: d,
        onClick: () => {
            (0, o.Z)({
                subscriptionTier: l.Si.TIER_2,
                analyticsLocations: r,
                returnRef: d
            });
        },
        children: t
    });
};
