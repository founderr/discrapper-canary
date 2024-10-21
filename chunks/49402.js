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
        let { children: d, className: _, dir: E = 'ltr', orientation: f = 'vertical', fade: h = !1, customTheme: p = !1, paddingFix: I = !0, style: m, ...T } = u,
            { scrollerRef: S, getScrollerState: g } = (0, l.Ke)(),
            A = (0, l.t2)(S, f);
        i.useImperativeHandle(
            c,
            () => ({
                getScrollerNode: () => S.current,
                getScrollerState: g,
                ...(0, l.Ue)(S, g, A, f)
            }),
            [S, g, f, A]
        );
        let N = (0, l.tT)({
            paddingFix: I,
            orientation: f,
            dir: E,
            className: _,
            scrollerRef: S,
            specs: a
        });
        return (0, r.jsx)('div', {
            ref: S,
            className: s()(_, {
                [e]: !0,
                [t]: h,
                [n]: p
            }),
            style: (0, l.uT)(m, f),
            dir: E,
            ...T,
            children: (0, r.jsxs)(o.Jc, {
                containerRef: S,
                children: [d, N]
            })
        });
    });
}
