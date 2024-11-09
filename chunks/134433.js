n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(866442),
    o = n(442837),
    l = n(692547),
    u = n(481060),
    c = n(607070),
    d = n(427788);
function f(e) {
    let t,
        { color: n, size: i, forcedIconColor: f, className: _, iconClassName: h } = e,
        [p, m] = (0, o.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.saturation]),
        g = (0, u.useToken)(l.Z.unsafe_rawColors.PRIMARY_300).hex(),
        E = (0, s._i)(null != n ? n : g),
        v = (0, s.ho)(E, !1, p ? m : null);
    t = null != f ? f : 0.3 > (0, s.Bd)(E) ? l.Z.unsafe_rawColors.PRIMARY_630.css : l.Z.unsafe_rawColors.WHITE_500.css;
    let I = i / 8;
    return (0, r.jsx)('div', {
        style: {
            background: v,
            width: i,
            height: i,
            borderRadius: i,
            lineHeight: ''.concat(i, 'px')
        },
        className: _,
        children: (0, r.jsx)(u.LinkIcon, {
            size: 'custom',
            color: t,
            className: a()(d.linkIcon, h),
            width: i - 2 * I,
            height: i - 2 * I,
            style: { margin: I }
        })
    });
}
