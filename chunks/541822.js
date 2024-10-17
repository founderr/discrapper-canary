t.d(e, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(735250),
    i = t(470079),
    o = t(557533),
    r = t.n(o),
    a = t(349361),
    s = t(698117);
function u(n) {
    let { children: e, gradientClassName: t, ...o } = n,
        u = i.useRef(null),
        [c, d] = i.useState(!0),
        p = () => {
            var n;
            (null === (n = u.current) || void 0 === n ? void 0 : n.isScrolledToBottom()) === !0 ? d(!1) : d(!0);
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.h2, {
                fade: !0,
                ...o,
                ref: (n) => {
                    null != n && ((u.current = n), p());
                },
                onScroll: p,
                children: e
            }),
            (0, l.jsx)('div', {
                className: r()(s.containerScrollGradient, t),
                'data-shown': c
            })
        ]
    });
}
