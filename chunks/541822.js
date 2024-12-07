e.d(t, {
    Z: function () {
        return s;
    }
}),
    e(47120);
var i = e(200651),
    l = e(192379),
    r = e(557533),
    u = e.n(r),
    a = e(349361),
    o = e(366481);
function s(n) {
    let { children: t, gradientClassName: e, ...r } = n,
        s = l.useRef(null),
        [c, d] = l.useState(!0),
        f = () => {
            var n;
            (null === (n = s.current) || void 0 === n ? void 0 : n.isScrolledToBottom()) === !0 ? d(!1) : d(!0);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.h2, {
                fade: !0,
                ...r,
                ref: (n) => {
                    null != n && ((s.current = n), f());
                },
                onScroll: f,
                children: t
            }),
            (0, i.jsx)('div', {
                className: u()(o.containerScrollGradient, e),
                'data-shown': c
            })
        ]
    });
}
