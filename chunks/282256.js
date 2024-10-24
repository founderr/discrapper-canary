n(47120);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(434650),
    o = n(393903),
    c = n(353093),
    u = n(979264),
    d = n(22469);
t.Z = s.memo(function (e) {
    let { children: t, isOverlay: n, contextGuildId: a, ...h } = e,
        p = s.useRef(null),
        [m, _] = s.useState({ maskImage: 'none' }),
        f = s.useCallback(() => {
            var e, t;
            if (n) {
                _({ maskImage: 'none' });
                return;
            }
            let i = null === (e = E.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                s = null === (t = p.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
            if (null == i || null == s) {
                _({ maskImage: 'none' });
                return;
            }
            let a = s.right - i.right,
                l = s.width - a;
            if (l > s.width) {
                _({ maskImage: 'none' });
                return;
            }
            _({ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) '.concat(l, 'px)') });
        }, []),
        E = (0, o.y)(f),
        g = (0, c.p0)(h.userId, a);
    s.useEffect(() => {
        if (null != E.current) f();
    }, [g]);
    let C = (0, r.O)(f);
    return (0, i.jsxs)('div', {
        className: l()(d.container, n && d.isOverlayContainer),
        ref: E,
        children: [
            (0, i.jsx)('div', {
                className: d.usernameContainer,
                children: t
            }),
            (0, i.jsx)('div', {
                className: d.chipletParent,
                ref: C,
                children: (0, i.jsx)('span', {
                    className: l()(d.chipletContainer, !g && n && d.noPadding),
                    ref: p,
                    style: m,
                    children: (0, i.jsx)(u.ZP, {
                        ...h,
                        contextGuildId: a,
                        className: l()(h.className, n && d.isOverlayTag)
                    })
                })
            })
        ]
    });
});
