n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(768581),
    l = n(689938),
    u = n(90043);
function c(e) {
    let { application: t, src: n, className: a, size: c, botIconFirst: d, fallbackAvatar: _, rendersPlaceholder: E = !1 } = e,
        f = i.useMemo(
            () =>
                null != t
                    ? o.ZP.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.bot,
                          size: c,
                          botIconFirst: d,
                          fallbackAvatar: _
                      })
                    : n,
            [t, n, c, d, _]
        );
    if (null == f) return E ? (0, r.jsx)('div', { className: s()(u.icon, u.placeholder, a) }) : null;
    return (0, r.jsx)('img', {
        className: s()(u.icon, a),
        alt: l.Z.Messages.IMAGE,
        src: f,
        'aria-hidden': !0,
        draggable: !1
    });
}
