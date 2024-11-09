n.d(t, {
    z: function () {
        return d;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(663507),
    l = n(84735),
    u = n(562701),
    c = n(558025);
function d(e, t, n) {
    let a = (0, u.G6)(e),
        d = new Map(),
        f = new n((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null === (t = d.get(n)) || void 0 === t || t(e);
            });
        });
    return (0, i.forwardRef)(function (n, _) {
        var h;
        let { onScroll: p, dir: m = 'ltr', sections: g, columns: E, getItemKey: v, getItemHeight: I, getSectionHeight: S, chunkSize: T, renderSection: b, renderItem: y, getSectionProps: A, itemGutter: N, removeEdgeItemGutters: C, sectionGutter: R, padding: O, paddingVertical: D, paddingHorizontal: L, fade: x = !1, className: w, style: M, maxContentWidth: P, renderAccessory: k, onItemVisibilityChange: U, ...G } = n,
            B = i.useRef(null),
            Z = i.useRef(null),
            F = i.useRef({}),
            [V, j] = i.useState(!1),
            { scrollerRef: H, scrollerState: Y, getScrollerState: W } = (0, u.T4)();
        (0, u.tT)({
            scrollerRef: H,
            className: w,
            specs: a,
            orientation: 'vertical',
            dir: m
        });
        let {
            forceUpdateOnChunkChange: K,
            coordsMap: z,
            gridData: q,
            visibleSections: Q,
            totalHeight: X,
            forceUpdate: J,
            masonryComputer: $
        } = (0, u.QB)({
            sections: g,
            columns: E,
            getItemKey: v,
            getItemHeight: I,
            getSectionHeight: S,
            chunkSize: T,
            itemGutter: N,
            removeEdgeItemGutters: C,
            sectionGutter: R,
            padding: O,
            paddingVertical: D,
            paddingHorizontal: L,
            getScrollerState: W,
            dir: m,
            maxBufferWidth: P
        });
        i.useEffect(() => {
            null != U && (0, o.ZI)(Q, F.current, U), (F.current = Q);
        }, [Q, U]);
        let ee = (0, i.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > Y.current.dirty && (Y.current.dirty = e), 2 === e ? J() : K(1);
                },
                [K, Y, J]
            ),
            et = (0, u.t2)(H),
            en = (0, i.useCallback)(() => $.itemGrid, [$]),
            er = (0, i.useCallback)(() => $.coordsMap, [$]),
            ei = i.useCallback(() => ee(), [ee]);
        (0, u.zn)({
            ref: H,
            key: 'container',
            onUpdate: ei,
            resizeObserver: f,
            listenerMap: d
        }),
            (0, i.useImperativeHandle)(
                _,
                () => ({
                    getScrollerNode: () => H.current,
                    getItemGrid: en,
                    getCoordsMap: er,
                    getScrollerState: W,
                    ...(0, u.Ue)(H, W, et)
                }),
                [H, W, en, et, er]
            );
        let ea = (0, i.useCallback)(
            (e) => {
                ee(1),
                    null == B.current ? j(!0) : clearTimeout(B.current),
                    (B.current = setTimeout(() => {
                        (B.current = null), j(!1);
                    }, 200)),
                    null != p && p(e);
            },
            [p, ee]
        );
        return (
            i.useLayoutEffect(() => {
                2 !== Y.current.dirty && (Y.current.dirty = 2);
            }, [X, Y]),
            (0, r.jsxs)('div', {
                ref: H,
                onScroll: ea,
                className: s()(w, {
                    [e]: !0,
                    [t]: x,
                    [c.scrolling]: V
                }),
                style: (0, u.uT)(M),
                ...G,
                children: [
                    null !== (h = null == k ? void 0 : k(X)) && void 0 !== h ? h : null,
                    (0, i.useMemo)(
                        () =>
                            (0, r.jsx)(l.J, {
                                containerRef: Z,
                                children: (0, r.jsx)('div', {
                                    style: { height: X },
                                    className: c.content,
                                    ref: Z,
                                    children: Object.keys(Q).map((e) => {
                                        var t;
                                        let n = (0, u.t$)(e),
                                            i = z[e],
                                            a = Q[e],
                                            s = z[(0, u.DP)(n)],
                                            o = null == A ? void 0 : A(n);
                                        return null != i && null != a
                                            ? (0, r.jsxs)(
                                                  'div',
                                                  {
                                                      ...o,
                                                      style: {
                                                          ...i,
                                                          ...(null !== (t = null == o ? void 0 : o.style) && void 0 !== t ? t : {})
                                                      },
                                                      children: [
                                                          null != b && null != s && b(n, s, e),
                                                          a.map((e) => {
                                                              let [t, n, r] = e,
                                                                  i = z[t];
                                                              return null != i ? y(n, r, i, t, q) : null;
                                                          })
                                                      ]
                                                  },
                                                  e
                                              )
                                            : null;
                                    })
                                })
                            }),
                        [Q, y, b, z, X, A, q]
                    )
                ]
            })
        );
    });
}
