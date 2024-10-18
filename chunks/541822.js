t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(735250),
    i = t(470079),
    r = t(557533),
    o = t.n(r),
    a = t(349361),
    s = t(698117);
function u(e) {
    let { children: n, gradientClassName: t, ...r } = e,
        u = i.useRef(null),
        [c, d] = i.useState(!0),
        p = () => {
            var e;
            (null === (e = u.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? d(!1) : d(!0);
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.h2, {
                fade: !0,
                ...r,
                ref: (e) => {
                    null != e && ((u.current = e), p());
                },
                onScroll: p,
                children: n
            }),
            (0, l.jsx)('div', {
                className: o()(s.containerScrollGradient, t),
                'data-shown': c
            })
        ]
    });
}
