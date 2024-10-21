n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(686546),
    l = n(768581),
    u = n(895924),
    c = n(696967),
    d = n(970952);
function _(e) {
    let { section: t, isSelected: n, width: a, height: _, className: E, selectable: f = !1, isSquircle: h, onFocus: p, onBlur: I, onMouseOver: m, onMouseLeave: T, ...S } = e,
        [g, A] = i.useState(!1),
        N = i.useCallback(() => {
            A(!0), null == p || p();
        }, [p]),
        R = i.useCallback(() => {
            A(!1), null == I || I();
        }, [I]),
        O = i.useCallback(() => {
            A(!0), null == m || m();
        }, [m]),
        v = i.useCallback(() => {
            A(!1), null == T || T();
        }, [T]),
        C = i.useMemo(() => {
            if (t.type === u.Qi.APPLICATION) {
                var e;
                return l.ZP.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon,
                    bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                    botIconFirst: !0,
                    size: a
                });
            }
            return d;
        }, [t, a]);
    return (0, r.jsx)('div', {
        ...S,
        className: s()(c.wrapper, E, {
            [c.selectable]: f,
            [c.selected]: f && n
        }),
        onFocus: N,
        onBlur: R,
        onMouseOver: O,
        onMouseLeave: v,
        children: (0, r.jsx)(o.ZP, {
            className: c.mask,
            mask: h || (f && (n || g)) ? o.QS.SQUIRCLE : o.QS.AVATAR_DEFAULT,
            width: a,
            height: _,
            children: (0, r.jsx)('img', {
                alt: '',
                className: c.icon,
                style: {
                    width: a,
                    height: _
                },
                src: C
            })
        })
    });
}
