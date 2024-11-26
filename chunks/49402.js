n.d(t, {
    I: function () {
        return u;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(803997),
    s = n.n(a),
    o = n(489948),
    l = n(780900);
function u(e, t, n) {
    let a = (0, l.G6)(e);
    return i.forwardRef(function (u, c) {
        let { children: d, className: f, dir: _ = 'ltr', orientation: p = 'vertical', fade: h = !1, customTheme: m = !1, paddingFix: g = !0, style: E, ...v } = u,
            { scrollerRef: I, getScrollerState: T } = (0, l.Ke)(),
            b = (0, l.t2)(I, p);
        i.useImperativeHandle(
            c,
            () => ({
                getScrollerNode: () => I.current,
                getScrollerState: T,
                ...(0, l.Ue)(I, T, b, p)
            }),
            [I, T, p, b]
        );
        let S = (0, l.tT)({
            paddingFix: g,
            orientation: p,
            dir: _,
            className: f,
            scrollerRef: I,
            specs: a
        });
        return (0, r.jsx)('div', {
            ref: I,
            className: s()(f, {
                [e]: !0,
                [t]: h,
                [n]: m
            }),
            style: (0, l.uT)(E, p),
            dir: _,
            ...v,
            children: (0, r.jsxs)(o.Jc, {
                containerRef: I,
                children: [d, S]
            })
        });
    });
}
