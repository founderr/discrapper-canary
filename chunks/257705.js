n.d(t, {
    z: function () {
        return c;
    }
});
var r = n(411104);
var i = n(735250),
    a = n(470079),
    o = n(803997),
    s = n.n(o),
    l = n(789978),
    u = n(780900);
function c(e, t) {
    let n = (0, u.G6)(e);
    return a.forwardRef(function (r, o) {
        let { children: c, className: d, dir: _ = 'ltr', orientation: E = 'vertical', paddingFix: f = !0, fade: h = !1, onScroll: p, style: m, ...I } = r,
            T = a.useRef(null),
            g = (0, u.tT)({
                paddingFix: f,
                orientation: E,
                dir: _,
                className: d,
                scrollerRef: T,
                specs: n
            });
        return (0, i.jsx)('div', {
            ref: (e) => {
                'function' == typeof o ? o(e) : null != o && (o.current = e), (T.current = e);
            },
            className: s()(d, {
                [e]: !0,
                [t]: h
            }),
            style: (0, u.uT)(m, E),
            dir: _,
            ...I,
            children: (0, i.jsxs)(l.Jc, {
                containerRef: T,
                children: [c, g]
            })
        });
    });
}
