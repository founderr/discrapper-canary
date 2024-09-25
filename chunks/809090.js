n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(686546),
    u = n(768581),
    c = n(895924),
    d = n(696967),
    _ = n(970952);
function E(e) {
    let { section: t, isSelected: n, width: r, height: o, className: E, selectable: f = !1, isSquircle: h, onFocus: p, onBlur: m, onMouseOver: I, onMouseLeave: T, ...g } = e,
        [S, A] = a.useState(!1),
        v = a.useCallback(() => {
            A(!0), null == p || p();
        }, [p]),
        N = a.useCallback(() => {
            A(!1), null == m || m();
        }, [m]),
        O = a.useCallback(() => {
            A(!0), null == I || I();
        }, [I]),
        R = a.useCallback(() => {
            A(!1), null == T || T();
        }, [T]),
        C = a.useMemo(() => {
            if (t.type === c.Qi.APPLICATION) {
                var e;
                return u.ZP.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon,
                    bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                    botIconFirst: !0,
                    size: r
                });
            }
            return _;
        }, [t, r]);
    return (0, i.jsx)('div', {
        ...g,
        className: s()(d.wrapper, E, {
            [d.selectable]: f,
            [d.selected]: f && n
        }),
        onFocus: v,
        onBlur: N,
        onMouseOver: O,
        onMouseLeave: R,
        children: (0, i.jsx)(l.ZP, {
            className: d.mask,
            mask: h || (f && (n || S)) ? l.QS.SQUIRCLE : l.QS.AVATAR_DEFAULT,
            width: r,
            height: o,
            children: (0, i.jsx)('img', {
                alt: '',
                className: d.icon,
                style: {
                    width: r,
                    height: o
                },
                src: C
            })
        })
    });
}
