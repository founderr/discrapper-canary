s.d(t, {
    F: function () {
        return d;
    }
});
var a = s(735250),
    r = s(470079),
    n = s(481060),
    i = s(906732),
    l = s(963249),
    o = s(474936),
    c = s(974657);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: s } = (0, i.ZP)(),
        d = r.useRef(null);
    return (0, a.jsx)(n.Clickable, {
        className: c.subscribeNow,
        innerRef: d,
        onClick: () => {
            (0, l.Z)({
                subscriptionTier: o.Si.TIER_2,
                analyticsLocations: s,
                returnRef: d
            });
        },
        children: t
    });
};
