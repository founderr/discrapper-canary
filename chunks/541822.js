t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(735250),
    i = t(470079),
    r = t(557533),
    s = t.n(r),
    o = t(349361),
    a = t(698117);
function u(e) {
    let { children: n, gradientClassName: t, ...r } = e,
        u = i.useRef(null),
        [c, d] = i.useState(!0),
        f = () => {
            var e;
            (null === (e = u.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? d(!1) : d(!0);
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.h2, {
                ...r,
                fade: !0,
                ref: (e) => {
                    null != e && ((u.current = e), f());
                },
                onScroll: f,
                children: n
            }),
            (0, l.jsx)('div', {
                className: s()(a.containerScrollGradient, t),
                'data-shown': c
            })
        ]
    });
}
