n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(866442),
    o = n(442837),
    s = n(692547),
    l = n(481060),
    u = n(607070),
    c = n(297700),
    d = n(689938);
function _(e) {
    let t,
        { color: n, size: r, forcedIconColor: _, className: E, iconClassName: f, tooltipText: h } = e,
        [p, m] = (0, o.Wu)([u.Z], () => [u.Z.desaturateUserColors, u.Z.saturation]),
        I = (0, l.useToken)(s.Z.unsafe_rawColors.PRIMARY_300).hex(),
        T = (0, a._i)(null != n ? n : I),
        g = (0, a.ho)(T, !1, p ? m : null);
    return (
        (t = null != _ ? _ : 0.3 > (0, a.Bd)(T) ? s.Z.unsafe_rawColors.PRIMARY_630.css : s.Z.unsafe_rawColors.WHITE_500.css),
        (0, i.jsx)(l.Tooltip, {
            text: null != h ? h : d.Z.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
            children: (e) =>
                (0, i.jsx)(c.Z, {
                    ...e,
                    className: E,
                    color: g,
                    size: r,
                    children: (0, i.jsx)(l.CheckmarkSmallIcon, {
                        size: 'custom',
                        color: t,
                        height: r,
                        width: r,
                        className: f
                    })
                })
        })
    );
}
