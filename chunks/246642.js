n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var o = n(481060),
    s = n(44315),
    a = n(641033),
    l = n(989830),
    r = n(388032),
    c = n(80195);
function d(e) {
    let { channelId: t } = e,
        n = (0, l.Z)(t);
    if (!(null != n && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1))) return null;
    let { multiplier: d } = n,
        { color: u } = (0, a.yz)(d);
    return (0, i.jsxs)('div', {
        className: c.container,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/normal',
                children: r.intl.string(r.t.Jr2519)
            }),
            (0, i.jsx)(o.Progress, {
                foregroundColor: (0, s.Lq)(u),
                className: c.progress,
                size: o.Progress.Sizes.LARGE,
                percent: 100 * (0, a.nc)(n),
                animate: !0
            })
        ]
    });
}
