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
    let { user: t, sourceType: n, className: s, children: o, interactionSourceId: l, moreButton: u, onShowToolbar: c } = e,
        d = i.useRef(null),
        [f, _] = i.useState(!1),
        p = () => {
            null == c || c(), _(!0);
        },
        h = () => {
            _(!1);
        };
    return (0, r.jsxs)('div', {
        className: s,
        onMouseEnter: p,
        onMouseLeave: h,
        onFocus: p,
        onBlur: (e) => {
            var t;
            !(null === (t = d.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && h();
        },
        ref: d,
        children: [
            o,
            (0, r.jsx)(a.ZP, {
                user: t,
                sourceType: n,
                isVisible: f,
                isExpandable: !1,
                interactionSourceId: l,
                moreButton: u
            })
        ]
    });
}
