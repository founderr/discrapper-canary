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
    let { user: t, sourceType: n, className: s, children: o } = e,
        l = i.useRef(null),
        [u, c] = i.useState(!1),
        d = () => {
            c(!0);
        },
        _ = () => {
            c(!1);
        };
    return (0, r.jsxs)('div', {
        className: s,
        onMouseOver: d,
        onMouseLeave: _,
        onFocus: d,
        onBlur: (e) => {
            var t;
            !(null === (t = l.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && _();
        },
        ref: l,
        children: [
            o,
            (0, r.jsx)(a.ZP, {
                user: t,
                sourceType: n,
                isVisible: u,
                isExpandable: !1
            })
        ]
    });
}
