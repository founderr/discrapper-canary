n.d(t, {
    F: function () {
        return d;
    }
});
var r = n(735250),
    s = n(470079),
    a = n(481060),
    i = n(906732),
    o = n(963249),
    l = n(474936),
    c = n(585367);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, i.ZP)(),
        d = s.useRef(null);
    return (0, r.jsx)(a.Clickable, {
        className: c.subscribeNow,
        innerRef: d,
        onClick: () => {
            (0, o.Z)({
                subscriptionTier: l.Si.TIER_2,
                analyticsLocations: n,
                returnRef: d
            });
        },
        children: t
    });
};
