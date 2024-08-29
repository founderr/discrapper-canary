n.d(t, {
    F: function () {
        return d;
    }
});
var r = n(735250),
    a = n(470079),
    s = n(481060),
    o = n(906732),
    i = n(963249),
    c = n(474936),
    l = n(585367);
let d = (e) => {
    let { text: t } = e,
        { analyticsLocations: n } = (0, o.ZP)(),
        d = a.useRef(null);
    return (0, r.jsx)(s.Clickable, {
        className: l.subscribeNow,
        innerRef: d,
        onClick: () => {
            (0, i.Z)({
                subscriptionTier: c.Si.TIER_2,
                analyticsLocations: n,
                returnRef: d
            });
        },
        children: t
    });
};
