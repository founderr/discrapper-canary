n.d(t, {
    O: function () {
        return o;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(864094),
    s = n(871499),
    a = n(388032);
function o(e) {
    let t,
        { hasPermission: n, streamActive: o, isSelfStream: c, centerButton: u, onMouseEnter: d, onMouseLeave: h, premiumGlow: m, buttonRef: p, ...f } = e,
        g = u ? s.d : s.Z;
    t = o ? (c ? a.intl.string(a.t.S5anIS) : a.intl.string(a.t.q3O3Jy)) : n ? a.intl.string(a.t.fjBNo6) : a.intl.string(a.t.uQn9Bw);
    let { Component: C, events: x, play: v } = (0, r.P)(o ? 'disable' : 'enable');
    return (
        l.useEffect(() => () => v(), [o, v]),
        (0, i.jsx)(g, {
            buttonRef: p,
            label: t,
            disabled: !n,
            iconComponent: C,
            isActive: o,
            onMouseEnter: (e) => {
                null == d || d(e), x.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == h || h(e), x.onMouseLeave();
            },
            premiumGlow: m,
            ...f
        })
    );
}
