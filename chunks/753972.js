t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(735250), l = t(470079), r = t(120356), a = t.n(r), s = t(768581), o = t(689938), c = t(106477);
function u(e) {
    let {
            application: n,
            src: t,
            className: r,
            size: u,
            botIconFirst: d,
            fallbackAvatar: m,
            rendersPlaceholder: p = !1
        } = e, _ = l.useMemo(() => null != n ? s.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: n.bot,
            size: u,
            botIconFirst: d,
            fallbackAvatar: m
        }) : t, [
            n,
            t,
            u,
            d,
            m
        ]);
    if (null == _)
        return p ? (0, i.jsx)('div', { className: a()(c.icon, c.placeholder, r) }) : null;
    return (0, i.jsx)('img', {
        className: a()(c.icon, r),
        alt: o.Z.Messages.IMAGE,
        src: _,
        'aria-hidden': !0
    });
}
