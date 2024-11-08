n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(981729);
function s(e) {
    let { mouseLeaveDelay: t = 100, ...n } = e,
        { children: s, className: o, ...l } = n,
        u = i.useRef(0),
        [c, d] = i.useState(!1);
    return (0, r.jsx)('div', {
        className: o,
        onMouseEnter:
            0 !== t
                ? function () {
                      clearTimeout(u.current), d(!0);
                  }
                : () => {},
        onMouseLeave:
            0 !== t
                ? function () {
                      clearTimeout(u.current), (u.current = setTimeout(() => d(!1), t));
                  }
                : () => {},
        children: (0, r.jsx)(a.u, {
            forceOpen: c,
            disableTooltipPointerEvents: !1,
            ...l,
            children: s
        })
    });
}
