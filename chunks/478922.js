n.d(t, {
    z: function () {
        return d;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(663507),
    l = n(84735),
    u = n(562701),
    c = n(514958);
function d(e, t, n) {
    let a = (0, u.G6)(e),
        d = new Map(),
        _ = new n((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null === (t = d.get(n)) || void 0 === t || t(e);
            });
        });
    return (0, i.forwardRef)(function (n, E) {
        var f;
        let { onScroll: h, dir: p = 'ltr', sections: I, columns: m, getItemKey: T, getItemHeight: g, getSectionHeight: S, chunkSize: A, renderSection: N, renderItem: O, getSectionProps: v, itemGutter: R, removeEdgeItemGutters: C, sectionGutter: y, padding: D, paddingVertical: L, paddingHorizontal: b, fade: M = !1, className: P, style: U, maxContentWidth: w, renderAccessory: x, onItemVisibilityChange: G, ...k } = n,
            B = i.useRef(null),
            F = i.useRef(null),
            V = i.useRef({}),
            [H, Z] = i.useState(!1),
            { scrollerRef: Y, scrollerState: j, getScrollerState: W } = (0, u.T4)();
        (0, u.tT)({
            scrollerRef: Y,
            className: P,
            specs: a,
            orientation: 'vertical',
            dir: p
        });
        let {
            forceUpdateOnChunkChange: K,
            coordsMap: z,
            gridData: q,
            visibleSections: Q,
            totalHeight: X,
            forceUpdate: $,
            masonryComputer: J
        } = (0, u.QB)({
            sections: I,
            columns: m,
            getItemKey: T,
            getItemHeight: g,
            getSectionHeight: S,
            chunkSize: A,
            itemGutter: R,
            removeEdgeItemGutters: C,
            sectionGutter: y,
            padding: D,
            paddingVertical: L,
            paddingHorizontal: b,
            getScrollerState: W,
            dir: p,
            maxBufferWidth: w
        });
        i.useEffect(() => {
            null != G && (0, o.ZI)(Q, V.current, G), (V.current = Q);
        }, [Q, G]);
        let ee = (0, i.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > j.current.dirty && (j.current.dirty = e), 2 === e ? $() : K(1);
                },
                [K, j, $]
            ),
            et = (0, u.t2)(Y),
            en = (0, i.useCallback)(() => J.itemGrid, [J]),
            er = (0, i.useCallback)(() => J.coordsMap, [J]),
            ei = i.useCallback(() => ee(), [ee]);
        (0, u.zn)({
            ref: Y,
            key: 'container',
            onUpdate: ei,
            resizeObserver: _,
            listenerMap: d
        }),
            (0, i.useImperativeHandle)(
                E,
                () => ({
                    getScrollerNode: () => Y.current,
                    getItemGrid: en,
                    getCoordsMap: er,
                    getScrollerState: W,
                    ...(0, u.Ue)(Y, W, et)
                }),
                [Y, W, en, et, er]
            );
        let ea = (0, i.useCallback)(
            (e) => {
                ee(1),
                    null == B.current ? Z(!0) : clearTimeout(B.current),
                    (B.current = setTimeout(() => {
                        (B.current = null), Z(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h, ee]
        );
        return (
            i.useLayoutEffect(() => {
                2 !== j.current.dirty && (j.current.dirty = 2);
            }, [X, j]),
            (0, r.jsxs)('div', {
                ref: Y,
                onScroll: ea,
                className: s()(P, {
                    [e]: !0,
                    [t]: M,
                    [c.scrolling]: H
                }),
                style: (0, u.uT)(U),
                ...k,
                children: [
                    null !== (f = null == x ? void 0 : x(X)) && void 0 !== f ? f : null,
                    (0, i.useMemo)(
                        () =>
                            (0, r.jsx)(l.J, {
                                containerRef: F,
                                children: (0, r.jsx)('div', {
                                    style: { height: X },
                                    className: c.content,
                                    ref: F,
                                    children: Object.keys(Q).map((e) => {
                                        let t = (0, u.t$)(e),
                                            n = z[e],
                                            i = Q[e],
                                            a = z[(0, u.DP)(t)],
                                            s = null == v ? void 0 : v(t);
                                        return null != n && null != i
                                            ? (0, r.jsxs)(
                                                  'div',
                                                  {
                                                      style: n,
                                                      ...s,
                                                      children: [
                                                          null != N && null != a && N(t, a, e),
                                                          i.map((e) => {
                                                              let [t, n, r] = e,
                                                                  i = z[t];
                                                              return null != i ? O(n, r, i, t, q) : null;
                                                          })
                                                      ]
                                                  },
                                                  e
                                              )
                                            : null;
                                    })
                                })
                            }),
                        [Q, O, N, z, X, v, q]
                    )
                ]
            })
        );
    });
}
