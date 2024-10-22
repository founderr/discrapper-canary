n.d(t, {
    k: function () {
        return o;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(1561),
    s = n(30215);
function o(e) {
    let { tag: t = 'div', children: n, className: o, style: l, focusProps: u, onClick: c, onDoubleClick: d, onContextMenu: _, onKeyDown: E, onFocus: f, onBlur: h, onMouseOver: p, onMouseDown: I, onMouseLeave: m, buttonProps: T, 'aria-label': S } = e,
        g = i.useRef(null);
    return (0, r.jsxs)(t, {
        ref: g,
        className: o,
        style: l,
        onClick: c,
        onMouseOver: p,
        onMouseLeave: m,
        onDoubleClick: d,
        onContextMenu: _,
        children: [
            (0, r.jsx)(a.P, {
                ...T,
                focusProps: {
                    ringTarget: g,
                    ...u
                },
                className: s.focusTarget,
                'aria-label': S,
                onClick: (e) => {
                    e.stopPropagation(), null == c || c(e);
                },
                onKeyDown: E,
                onFocus: f,
                onBlur: h,
                onMouseDown: I
            }),
            n
        ]
    });
}
