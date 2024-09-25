n.d(t, {
    $: function () {
        return d;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(803997),
    s = n.n(o),
    l = n(84735),
    u = n(780900),
    c = n(49505);
function d(e, t) {
    let n = new Map(),
        r = new t((e) => {
            e.forEach((e) => {
                var t;
                let { target: r } = e;
                null === (t = n.get(r)) || void 0 === t || t(e);
            });
        });
    return a.forwardRef(function (t, o) {
        let { children: d, className: _, onResize: E, contentClassName: f, onScroll: h, dir: p = 'ltr', fade: m = !1, customTheme: I = !1, style: T, ...g } = t,
            S = a.useRef(null),
            A = a.useRef(null),
            [v, N] = a.useState(!1),
            { scrollerRef: O, getScrollerState: R } = (0, u.Ke)(),
            C = (0, u.t2)(O);
        a.useImperativeHandle(
            o,
            () => ({
                getScrollerNode: () => O.current,
                isScrolling: () => null != S.current,
                getScrollerState: R,
                ...(0, u.Ue)(O, R, C)
            }),
            [O, R, C]
        );
        let y = a.useCallback(
            (e) => {
                null == S.current ? N(!0) : clearTimeout(S.current),
                    (S.current = setTimeout(() => {
                        (S.current = null), N(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h]
        );
        return (
            a.useEffect(() => () => clearTimeout(S.current), []),
            (0, u.zn)({
                ref: O,
                key: 'container',
                onUpdate: E,
                resizeObserver: r,
                listenerMap: n
            }),
            (0, u.zn)({
                ref: A,
                key: 'content',
                onUpdate: E,
                resizeObserver: r,
                listenerMap: n
            }),
            (0, i.jsx)('div', {
                ref: O,
                className: s()(_, {
                    [c.fade]: m,
                    [c.customTheme]: I,
                    [e]: !0,
                    [c.managedReactiveScroller]: !0,
                    [c.scrolling]: v && m
                }),
                style: T,
                dir: p,
                onScroll: y,
                ...g,
                children: (0, i.jsx)(l.J, {
                    containerRef: A,
                    children: (0, i.jsxs)('div', {
                        ref: A,
                        className: s()(f, c.content),
                        children: [d, v && (0, i.jsx)('div', { className: c.pointerCover })]
                    })
                })
            })
        );
    });
}
