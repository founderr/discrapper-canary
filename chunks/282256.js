n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(434650),
    o = n(393903),
    c = n(353093),
    u = n(979264),
    d = n(22469);
t.Z = l.memo(function (e) {
    let { children: t, isOverlay: n, contextGuildId: r, ...h } = e,
        m = l.useRef(null),
        [p, f] = l.useState({ maskImage: 'none' }),
        g = l.useCallback(() => {
            var e, t;
            if (n) {
                f({ maskImage: 'none' });
                return;
            }
            let i = null === (e = C.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                l = null === (t = m.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
            if (null == i || null == l) {
                f({ maskImage: 'none' });
                return;
            }
            let r = l.right - i.right,
                a = l.width - r;
            if (a > l.width) {
                f({ maskImage: 'none' });
                return;
            }
            f({ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) '.concat(a, 'px)') });
        }, []),
        C = (0, o.y)(g),
        x = (0, c.p0)(h.userId, r);
    l.useEffect(() => {
        if (null != C.current) g();
    }, [x]);
    let v = (0, s.O)(g);
    return (0, i.jsxs)('div', {
        className: a()(d.container, n && d.isOverlayContainer),
        ref: C,
        children: [
            (0, i.jsx)('div', {
                className: d.usernameContainer,
                children: t
            }),
            (0, i.jsx)('div', {
                className: d.chipletParent,
                ref: v,
                children: (0, i.jsx)('span', {
                    className: a()(d.chipletContainer, !x && n && d.noPadding),
                    ref: m,
                    style: p,
                    children: (0, i.jsx)(u.ZP, {
                        ...h,
                        contextGuildId: r,
                        className: a()(h.className, n && d.isOverlayTag)
                    })
                })
            })
        ]
    });
});
