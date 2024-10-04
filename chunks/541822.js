n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(557533),
    s = n.n(o),
    l = n(349361),
    u = n(698117);
function c(e) {
    let { children: t, gradientClassName: n, ...r } = e,
        o = a.useRef(null),
        [c, d] = a.useState(!0),
        _ = () => {
            var e;
            (null === (e = o.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? d(!1) : d(!0);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.h2, {
                fade: !0,
                ...r,
                ref: (e) => {
                    null != e && ((o.current = e), _());
                },
                onScroll: _,
                children: t
            }),
            (0, i.jsx)('div', {
                className: s()(u.containerScrollGradient, n),
                'data-shown': c
            })
        ]
    });
}
