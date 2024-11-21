n.d(t, {
    $: function () {
        return c;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
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
        let { children: d, className: f, onResize: _, contentClassName: p, onScroll: h, dir: m = 'ltr', fade: g = !1, customTheme: E = !1, style: v, ...b } = t,
            I = i.useRef(null),
            T = i.useRef(null),
            [S, y] = i.useState(!1),
            { scrollerRef: A, getScrollerState: N } = (0, l.Ke)(),
            C = (0, l.t2)(A);
        i.useImperativeHandle(
            c,
            () => ({
                getScrollerNode: () => A.current,
                isScrolling: () => null != I.current,
                getScrollerState: N,
                ...(0, l.Ue)(A, N, C)
            }),
            [A, N, C]
        );
        let R = i.useCallback(
            (e) => {
                null == I.current ? y(!0) : clearTimeout(I.current),
                    (I.current = setTimeout(() => {
                        (I.current = null), y(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h]
        );
        return (
            i.useEffect(() => () => clearTimeout(I.current), []),
            (0, l.zn)({
                ref: A,
                key: 'container',
                onUpdate: _,
                resizeObserver: a,
                listenerMap: n
            }),
            (0, l.zn)({
                ref: T,
                key: 'content',
                onUpdate: _,
                resizeObserver: a,
                listenerMap: n
            }),
            (0, r.jsx)('div', {
                ref: A,
                className: s()(f, {
                    [u.fade]: g,
                    [u.customTheme]: E,
                    [e]: !0,
                    [u.managedReactiveScroller]: !0,
                    [u.scrolling]: S && g
                }),
                style: v,
                dir: m,
                onScroll: R,
                ...b,
                children: (0, r.jsx)(o.J, {
                    containerRef: T,
                    children: (0, r.jsxs)('div', {
                        ref: T,
                        className: s()(p, u.content),
                        children: [d, S && (0, r.jsx)('div', { className: u.pointerCover })]
                    })
                })
            })
        );
    });
}
