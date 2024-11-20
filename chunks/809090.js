n.d(t, {
    Z: function () {
        return f;
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
function f(e) {
    let { section: t, isSelected: n, width: a, height: f, className: _, selectable: p = !1, isSquircle: h, onFocus: m, onBlur: g, onMouseOver: E, onMouseLeave: v, ...I } = e,
        [b, T] = i.useState(!1),
        S = i.useCallback(() => {
            T(!0), null == m || m();
        }, [m]),
        y = i.useCallback(() => {
            T(!1), null == g || g();
        }, [g]),
        A = i.useCallback(() => {
            T(!0), null == E || E();
        }, [E]),
        N = i.useCallback(() => {
            T(!1), null == v || v();
        }, [v]),
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
        ...I,
        className: s()(c.wrapper, _, {
            [c.selectable]: p,
            [c.selected]: p && n
        }),
        onFocus: S,
        onBlur: y,
        onMouseOver: A,
        onMouseLeave: N,
        children: (0, r.jsx)(o.ZP, {
            className: c.mask,
            mask: h || (p && (n || b)) ? o.QS.SQUIRCLE : o.QS.AVATAR_DEFAULT,
            width: a,
            height: f,
            children: (0, r.jsx)('img', {
                alt: '',
                className: c.icon,
                style: {
                    width: a,
                    height: f
                },
                src: C
            })
        })
    });
}
