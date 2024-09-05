t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var i = t(735250),
    l = t(470079),
    r = t(557533),
    o = t.n(r),
    s = t(349361),
    a = t(415858);
function c(e) {
    let { children: n, gradientClassName: t, ...r } = e,
        c = l.useRef(null),
        [u, d] = l.useState(!0),
        S = () => {
            var e;
            (null === (e = c.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? d(!1) : d(!0);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.h2, {
                ...r,
                fade: !0,
                ref: (e) => {
                    null != e && ((c.current = e), S());
                },
                onScroll: S,
                children: n
            }),
            (0, i.jsx)('div', {
                className: o()(a.containerScrollGradient, t),
                'data-shown': u
            })
        ]
    });
}
