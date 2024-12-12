r.d(n, {
    z: function () {
        return d;
    }
});
var i = r(411104);
var a = r(200651),
    s = r(192379),
    o = r(803997),
    l = r.n(o),
    u = r(489948),
    c = r(780900);
function d(e, n) {
    let r = (0, c.G6)(e);
    return s.forwardRef(function (i, o) {
        let { children: d, className: f, dir: _ = 'ltr', orientation: h = 'vertical', paddingFix: p = !0, fade: m = !1, onScroll: g, style: E, ...v } = i,
            I = s.useRef(null),
            T = (0, c.tT)({
                paddingFix: p,
                orientation: h,
                dir: _,
                className: f,
                scrollerRef: I,
                specs: r
            });
        return (0, a.jsx)('div', {
            ref: (e) => {
                'function' == typeof o ? o(e) : null != o && (o.current = e), (I.current = e);
            },
            className: l()(f, {
                [e]: !0,
                [n]: m
            }),
            style: (0, c.uT)(E, h),
            dir: _,
            ...v,
            children: (0, a.jsxs)(u.Jc, {
                containerRef: I,
                children: [d, T]
            })
        });
    });
}
