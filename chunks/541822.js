t.d(e, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(557533),
    s = t.n(r),
    a = t(349361),
    o = t(698117);
function u(n) {
    let { children: e, gradientClassName: t, ...r } = n,
        u = i.useRef(null),
        [c, d] = i.useState(!0),
        f = () => {
            var n;
            (null === (n = u.current) || void 0 === n ? void 0 : n.isScrolledToBottom()) === !0 ? d(!1) : d(!0);
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.h2, {
                fade: !0,
                ...r,
                ref: (n) => {
                    null != n && ((u.current = n), f());
                },
                onScroll: f,
                children: e
            }),
            (0, l.jsx)('div', {
                className: s()(o.containerScrollGradient, t),
                'data-shown': c
            })
        ]
    });
}
