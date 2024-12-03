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
        [p, g] = l.useState({ maskImage: 'none' }),
        h = l.useCallback(() => {
            var e, t;
            if (n) {
                g({ maskImage: 'none' });
                return;
            }
            let i = null === (e = v.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                l = null === (t = f.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
            if (null == i || null == l) {
                g({ maskImage: 'none' });
                return;
            }
            let a = l.right - i.right,
                r = l.width - a;
            if (r > l.width) {
                g({ maskImage: 'none' });
                return;
            }
            g({ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) '.concat(r, 'px)') });
        }, []),
        v = (0, o.y)(h),
        S = (0, c.p0)(m.userId, a);
    l.useEffect(() => {
        if (null != v.current) h();
    }, [S]);
    let I = (0, s.O)(h);
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
