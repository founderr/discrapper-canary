r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(810097);
function l(e) {
    let { children: n, className: r, onShowToolbar: i, ...l } = e,
        u = s.useRef(null),
        [c, d] = s.useState(!1),
        f = () => {
            null == i || i(), d(!0);
        },
        _ = () => {
            d(!1);
        };
    return (0, a.jsxs)('div', {
        className: r,
        onMouseEnter: f,
        onMouseLeave: _,
        onFocus: f,
        onBlur: (e) => {
            var n;
            !(null === (n = u.current) || void 0 === n ? void 0 : n.contains(e.relatedTarget)) && _();
        },
        ref: u,
        children: [
            n,
            (0, a.jsx)(o.ZP, {
                isVisible: c,
                isExpandable: !1,
                ...l
            })
        ]
    });
}
