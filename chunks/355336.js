n.d(t, {
    $: function () {
        return c;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(803997),
    s = n.n(a),
    o = n(84735),
    l = n(780900),
    u = n(49505);
function c(e, t) {
    let n = new Map(),
        a = new t((e) => {
            e.forEach((e) => {
                var t;
                let { target: r } = e;
                null === (t = n.get(r)) || void 0 === t || t(e);
            });
        });
    return i.forwardRef(function (t, c) {
        let { children: d, className: _, onResize: E, contentClassName: f, onScroll: h, dir: p = 'ltr', fade: I = !1, customTheme: m = !1, style: T, ...S } = t,
            g = i.useRef(null),
            A = i.useRef(null),
            [N, R] = i.useState(!1),
            { scrollerRef: O, getScrollerState: v } = (0, l.Ke)(),
            C = (0, l.t2)(O);
        i.useImperativeHandle(
            c,
            () => ({
                getScrollerNode: () => O.current,
                isScrolling: () => null != g.current,
                getScrollerState: v,
                ...(0, l.Ue)(O, v, C)
            }),
            [O, v, C]
        );
        let L = i.useCallback(
            (e) => {
                null == g.current ? R(!0) : clearTimeout(g.current),
                    (g.current = setTimeout(() => {
                        (g.current = null), R(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h]
        );
        return (
            i.useEffect(() => () => clearTimeout(g.current), []),
            (0, l.zn)({
                ref: O,
                key: 'container',
                onUpdate: E,
                resizeObserver: a,
                listenerMap: n
            }),
            (0, l.zn)({
                ref: A,
                key: 'content',
                onUpdate: E,
                resizeObserver: a,
                listenerMap: n
            }),
            (0, r.jsx)('div', {
                ref: O,
                className: s()(_, {
                    [u.fade]: I,
                    [u.customTheme]: m,
                    [e]: !0,
                    [u.managedReactiveScroller]: !0,
                    [u.scrolling]: N && I
                }),
                style: T,
                dir: p,
                onScroll: L,
                ...S,
                children: (0, r.jsx)(o.J, {
                    containerRef: A,
                    children: (0, r.jsxs)('div', {
                        ref: A,
                        className: s()(f, u.content),
                        children: [d, N && (0, r.jsx)('div', { className: u.pointerCover })]
                    })
                })
            })
        );
    });
}
