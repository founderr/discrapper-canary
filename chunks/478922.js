n.d(t, {
    z: function () {
        return _;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(663507),
    u = n(84735),
    c = n(562701),
    d = n(558025);
function _(e, t, n) {
    let r = (0, c.G6)(e),
        o = new Map(),
        _ = new n((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null === (t = o.get(n)) || void 0 === t || t(e);
            });
        });
    return (0, a.forwardRef)(function (n, E) {
        var f;
        let { onScroll: h, dir: p = 'ltr', sections: m, columns: I, getItemKey: T, getItemHeight: g, getSectionHeight: S, chunkSize: A, renderSection: v, renderItem: N, getSectionProps: O, itemGutter: R, removeEdgeItemGutters: C, sectionGutter: y, padding: L, paddingVertical: b, paddingHorizontal: D, fade: M = !1, className: P, style: U, maxContentWidth: w, renderAccessory: x, onItemVisibilityChange: G, ...k } = n,
            B = a.useRef(null),
            F = a.useRef(null),
            Z = a.useRef({}),
            [V, H] = a.useState(!1),
            { scrollerRef: Y, scrollerState: j, getScrollerState: W } = (0, c.T4)();
        (0, c.tT)({
            scrollerRef: Y,
            className: P,
            specs: r,
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
        } = (0, c.QB)({
            sections: m,
            columns: I,
            getItemKey: T,
            getItemHeight: g,
            getSectionHeight: S,
            chunkSize: A,
            itemGutter: R,
            removeEdgeItemGutters: C,
            sectionGutter: y,
            padding: L,
            paddingVertical: b,
            paddingHorizontal: D,
            getScrollerState: W,
            dir: p,
            maxBufferWidth: w
        });
        a.useEffect(() => {
            null != G && (0, l.ZI)(Q, Z.current, G), (Z.current = Q);
        }, [Q, G]);
        let ee = (0, a.useCallback)(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > j.current.dirty && (j.current.dirty = e), 2 === e ? $() : K(1);
                },
                [K, j, $]
            ),
            et = (0, c.t2)(Y),
            en = (0, a.useCallback)(() => J.itemGrid, [J]),
            er = (0, a.useCallback)(() => J.coordsMap, [J]),
            ei = a.useCallback(() => ee(), [ee]);
        (0, c.zn)({
            ref: Y,
            key: 'container',
            onUpdate: ei,
            resizeObserver: _,
            listenerMap: o
        }),
            (0, a.useImperativeHandle)(
                E,
                () => ({
                    getScrollerNode: () => Y.current,
                    getItemGrid: en,
                    getCoordsMap: er,
                    getScrollerState: W,
                    ...(0, c.Ue)(Y, W, et)
                }),
                [Y, W, en, et, er]
            );
        let ea = (0, a.useCallback)(
            (e) => {
                ee(1),
                    null == B.current ? H(!0) : clearTimeout(B.current),
                    (B.current = setTimeout(() => {
                        (B.current = null), H(!1);
                    }, 200)),
                    null != h && h(e);
            },
            [h, ee]
        );
        return (
            a.useLayoutEffect(() => {
                2 !== j.current.dirty && (j.current.dirty = 2);
            }, [X, j]),
            (0, i.jsxs)('div', {
                ref: Y,
                onScroll: ea,
                className: s()(P, {
                    [e]: !0,
                    [t]: M,
                    [d.scrolling]: V
                }),
                style: (0, c.uT)(U),
                ...k,
                children: [
                    null !== (f = null == x ? void 0 : x(X)) && void 0 !== f ? f : null,
                    (0, a.useMemo)(
                        () =>
                            (0, i.jsx)(u.J, {
                                containerRef: F,
                                children: (0, i.jsx)('div', {
                                    style: { height: X },
                                    className: d.content,
                                    ref: F,
                                    children: Object.keys(Q).map((e) => {
                                        var t;
                                        let n = (0, c.t$)(e),
                                            r = z[e],
                                            a = Q[e],
                                            o = z[(0, c.DP)(n)],
                                            s = null == O ? void 0 : O(n);
                                        return null != r && null != a
                                            ? (0, i.jsxs)(
                                                  'div',
                                                  {
                                                      ...s,
                                                      style: {
                                                          ...r,
                                                          ...(null !== (t = null == s ? void 0 : s.style) && void 0 !== t ? t : {})
                                                      },
                                                      children: [
                                                          null != v && null != o && v(n, o, e),
                                                          a.map((e) => {
                                                              let [t, n, r] = e,
                                                                  i = z[t];
                                                              return null != i ? N(n, r, i, t, q) : null;
                                                          })
                                                      ]
                                                  },
                                                  e
                                              )
                                            : null;
                                    })
                                })
                            }),
                        [Q, N, v, z, X, O, q]
                    )
                ]
            })
        );
    });
}
