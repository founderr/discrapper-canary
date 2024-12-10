n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(44315),
    s = n(641033),
    o = n(989830),
    l = n(388032),
    u = n(371611);
function c(e) {
    let { channelId: t } = e,
        n = (0, o.Z)(t);
    if (!(null != n && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1))) return null;
    let { multiplier: c } = n,
        { color: d } = (0, s.yz)(c);
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                children: l.intl.string(l.t.Jr2519)
            }),
            (0, r.jsx)(i.Progress, {
                foregroundColor: (0, a.Lq)(d),
                className: u.progress,
                size: i.Progress.Sizes.LARGE,
                percent: 100 * (0, s.nc)(n),
                animate: !0
            })
        ]
    });
}
