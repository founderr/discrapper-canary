n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(866442),
    l = n(442837),
    u = n(692547),
    c = n(481060),
    d = n(607070),
    _ = n(427788);
function E(e) {
    let t,
        { color: n, size: r, forcedIconColor: a, className: E, iconClassName: f } = e,
        [h, p] = (0, l.Wu)([d.Z], () => [d.Z.desaturateUserColors, d.Z.saturation]),
        m = (0, c.useToken)(u.Z.unsafe_rawColors.PRIMARY_300).hex(),
        I = (0, s._i)(null != n ? n : m),
        T = (0, s.ho)(I, !1, h ? p : null);
    t = null != a ? a : 0.3 > (0, s.Bd)(I) ? u.Z.unsafe_rawColors.PRIMARY_630.css : u.Z.unsafe_rawColors.WHITE_500.css;
    let g = r / 8;
    return (0, i.jsx)('div', {
        style: {
            background: T,
            width: r,
            height: r,
            borderRadius: r,
            lineHeight: ''.concat(r, 'px')
        },
        className: E,
        children: (0, i.jsx)(c.LinkIcon, {
            size: 'custom',
            color: t,
            className: o()(_.linkIcon, f),
            width: r - 2 * g,
            height: r - 2 * g,
            style: { margin: g }
        })
    });
}
