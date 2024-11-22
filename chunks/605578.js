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
    let { tag: t = 'div', children: n, className: o, style: l, focusProps: u, onClick: c, onDoubleClick: d, onContextMenu: f, onKeyDown: _, onFocus: p, onBlur: h, onMouseOver: m, onMouseDown: g, onMouseLeave: E, buttonProps: v, 'aria-label': I } = e,
        b = i.useRef(null);
    return (0, r.jsxs)(t, {
        ref: b,
        className: o,
        style: l,
        onClick: c,
        onMouseOver: m,
        onMouseLeave: E,
        onDoubleClick: d,
        onContextMenu: f,
        children: [
            (0, r.jsx)(a.P, {
                ...v,
                focusProps: {
                    ringTarget: b,
                    ...u
                },
                className: s.focusTarget,
                'aria-label': I,
                onClick: (e) => {
                    e.stopPropagation(), null == c || c(e);
                },
                onKeyDown: _,
                onFocus: p,
                onBlur: h,
                onMouseDown: g
            }),
            n
        ]
    });
}
