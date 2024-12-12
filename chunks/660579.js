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
    let { user: n, sourceType: r, className: i, children: l, interactionSourceId: u, onShowToolbar: c, renderMoreButtonPopout: d } = e,
        f = s.useRef(null),
        [_, h] = s.useState(!1),
        p = () => {
            null == c || c(), h(!0);
        },
        m = () => {
            h(!1);
        };
    return (0, a.jsxs)('div', {
        className: i,
        onMouseEnter: p,
        onMouseLeave: m,
        onFocus: p,
        onBlur: (e) => {
            var n;
            !(null === (n = f.current) || void 0 === n ? void 0 : n.contains(e.relatedTarget)) && m();
        },
        ref: f,
        children: [
            l,
            (0, a.jsx)(o.ZP, {
                user: n,
                sourceType: r,
                isVisible: _,
                isExpandable: !1,
                interactionSourceId: u,
                renderMoreButtonPopout: d
            })
        ]
    });
}
