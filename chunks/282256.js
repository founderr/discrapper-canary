n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(434650),
    o = n(393903),
    c = n(353093),
    u = n(979264),
    d = n(506800);
t.Z = l.memo(function (e) {
    let { children: t, isOverlay: n, contextGuildId: a, ...m } = e,
        f = l.useRef(null),
        [p, h] = l.useState({ maskImage: 'none' }),
        g = l.useCallback(() => {
            var e, t;
            if (n) {
                h({ maskImage: 'none' });
                return;
            }
            let i = null === (e = v.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                l = null === (t = f.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
            if (null == i || null == l) {
                h({ maskImage: 'none' });
                return;
            }
            let a = l.right - i.right,
                r = l.width - a;
            if (r > l.width) {
                h({ maskImage: 'none' });
                return;
            }
            h({ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) '.concat(r, 'px)') });
        }, []),
        v = (0, o.y)(g),
        S = (0, c.p0)(m.userId, a);
    l.useEffect(() => {
        if (null != v.current) g();
    }, [S]);
    let I = (0, s.O)(g);
    return (0, i.jsxs)('div', {
        className: r()(d.container, n && d.isOverlayContainer),
        ref: v,
        children: [
            (0, i.jsx)('div', {
                className: d.usernameContainer,
                children: t
            }),
            (0, i.jsx)('div', {
                className: d.chipletParent,
                ref: I,
                children: (0, i.jsx)('span', {
                    className: r()(d.chipletContainer, !S && n && d.noPadding),
                    ref: f,
                    style: p,
                    children: (0, i.jsx)(u.ZP, {
                        ...m,
                        contextGuildId: a,
                        className: r()(m.className, n && d.isOverlayTag)
                    })
                })
            })
        ]
    });
});
