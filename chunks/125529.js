r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(981729);
function l(e) {
    let { mouseLeaveDelay: n = 100, ...r } = e,
        { children: i, className: l, ...u } = r,
        c = s.useRef(0),
        [d, f] = s.useState(!1);
    function _() {
        clearTimeout(c.current), f(!0);
    }
    function h() {
        clearTimeout(c.current), (c.current = setTimeout(() => f(!1), n));
    }
    return (0, a.jsx)('div', {
        className: l,
        onMouseEnter: 0 !== n ? _ : () => {},
        onMouseLeave: 0 !== n ? h : () => {},
        children: (0, a.jsx)(o.u, {
            forceOpen: d,
            disableTooltipPointerEvents: !1,
            ...u,
            children: i
        })
    });
}
