n.d(t, {
    F: function () {
        return d;
    }
});
var a = n(735250),
    r = n(470079),
    s = n(481060),
    o = n(906732),
    i = n(963249),
    l = n(474936),
    c = n(585367);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, o.ZP)(),
        d = r.useRef(null);
    return (0, a.jsx)(s.Clickable, {
        className: c.subscribeNow,
        innerRef: d,
        onClick: () => {
            (0, i.Z)({
                subscriptionTier: l.Si.TIER_2,
                analyticsLocations: n,
                returnRef: d
            });
        },
        children: t
    });
};
