n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(603368),
    u = n(405205);
function c(e) {
    let { themeColor: t, color: n, className: a, ...c } = e,
        d = (0, o.useToken)(o.tokens.colors.BG_SURFACE_OVERLAY),
        f = i.useMemo(() => (0, l.j1)(t, d.hex()), [t]);
    return (0, r.jsx)(o.Button, {
        ...c,
        style: f,
        className: s()(a, { [u.customButton]: null != f }),
        color: null != f ? o.Button.Colors.CUSTOM : n
    });
}
