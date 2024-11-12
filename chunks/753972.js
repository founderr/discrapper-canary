n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(768581),
    l = n(388032),
    u = n(90043);
function c(e) {
    let { application: t, src: n, className: a, size: c, botIconFirst: d, fallbackAvatar: f, rendersPlaceholder: _ = !1 } = e,
        p = i.useMemo(
            () =>
                null != t
                    ? o.ZP.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.bot,
                          size: c,
                          botIconFirst: d,
                          fallbackAvatar: f
                      })
                    : n,
            [t, n, c, d, f]
        );
    if (null == p) return _ ? (0, r.jsx)('div', { className: s()(u.icon, u.placeholder, a) }) : null;
    return (0, r.jsx)('img', {
        className: s()(u.icon, a),
        alt: l.intl.string(l.t.X4IxWF),
        src: p,
        'aria-hidden': !0,
        draggable: !1
    });
}
