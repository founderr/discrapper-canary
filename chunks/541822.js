e.d(t, {
    Z: function () {
        return s;
    }
}),
    e(47120);
var l = e(200651),
    i = e(192379),
    r = e(557533),
    u = e.n(r),
    a = e(349361),
    o = e(698117);
function s(n) {
    let { children: t, gradientClassName: e, ...r } = n,
        s = i.useRef(null),
        [c, d] = i.useState(!0),
        f = () => {
            var n;
            (null === (n = s.current) || void 0 === n ? void 0 : n.isScrolledToBottom()) === !0 ? d(!1) : d(!0);
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.h2, {
                fade: !0,
                ...r,
                ref: (n) => {
                    null != n && ((s.current = n), f());
                },
                onScroll: f,
                children: t
            }),
            (0, l.jsx)('div', {
                className: u()(o.containerScrollGradient, e),
                'data-shown': c
            })
        ]
    });
}
