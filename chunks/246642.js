n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(44315),
    o = n(641033),
    s = n(989830),
    l = n(689938),
    u = n(80195);
function c(e) {
    let { channelId: t } = e,
        n = (0, s.Z)(t);
    if (!(null != n && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1))) return null;
    let { multiplier: c } = n,
        { color: d } = (0, o.yz)(c);
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                children: l.Z.Messages.POGGERMODE_COMBO_BAR
            }),
            (0, r.jsx)(i.Progress, {
                foregroundColor: (0, a.Lq)(d),
                className: u.progress,
                size: i.Progress.Sizes.LARGE,
                percent: 100 * (0, o.nc)(n),
                animate: !0
            })
        ]
    });
}
