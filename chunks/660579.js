n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(810097);
function s(e) {
    let { user: t, sourceType: n, className: s, children: o, interactionSourceId: l, moreButton: u } = e,
        c = i.useRef(null),
        [d, f] = i.useState(!1),
        _ = () => {
            f(!0);
        },
        h = () => {
            f(!1);
        };
    return (0, r.jsxs)('div', {
        className: s,
        onMouseOver: _,
        onMouseLeave: h,
        onFocus: _,
        onBlur: (e) => {
            var t;
            !(null === (t = c.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && h();
        },
        ref: c,
        children: [
            o,
            (0, r.jsx)(a.ZP, {
                user: t,
                sourceType: n,
                isVisible: d,
                isExpandable: !1,
                interactionSourceId: l,
                moreButton: u
            })
        ]
    });
}
