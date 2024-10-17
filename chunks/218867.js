n(47120), n(653041);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(147479),
    l = n(436599);
let u = i.memo(
    i.forwardRef((e, t) => {
        let { onScroll: n, onResize: a, listPadding: u = [0, 0, 0, 0], renderRow: c, renderSection: d, renderSectionHeader: _, renderSectionFooter: E, renderListHeader: f, rowCount: h, rowCountBySection: p, rowHeight: I, sectionMarginBottom: m, sectionHeaderHeight: T, sectionFooterHeight: S, listHeaderHeight: g, stickyHeaders: A = !1, className: N, hideScrollbar: R = !1, fade: O = !1, initialScrollTop: v = 0, role: C = 'list' } = e,
            [L, D] = i.useState(-1),
            [y, b] = i.useState(-1),
            M = i.useRef(null),
            P = i.useRef(0),
            U = i.useRef(-1);
        i.useLayoutEffect(() => {
            var e;
            let t = null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t && (t.scrollTop = v);
        }, []);
        let w = i.useCallback(() => {
                let e = 'function' == typeof g ? g() : g;
                return null == e ? 0 : e;
            }, [g]),
            x = i.useCallback(
                (e, t, n) =>
                    'function' == typeof I
                        ? I(n, {
                              sectionIndex: e,
                              sectionRowIndex: t
                          })
                        : I,
                [I]
            ),
            G = i.useCallback(
                (e) => {
                    let t = 'function' == typeof T ? T(e) : T;
                    return null == t ? 0 : t;
                },
                [T]
            ),
            k = i.useCallback(
                (e) => {
                    let t = 'function' == typeof S ? S(e) : S;
                    return null == t ? 0 : t;
                },
                [S]
            ),
            B = i.useCallback(
                (e) => {
                    let t = 'function' == typeof m ? m(e) : m;
                    return null == t ? 0 : t;
                },
                [m]
            ),
            F = i.useRef([]),
            V = i.useRef([]),
            {
                totalHeight: H,
                rowDescriptors: Z,
                sectionDescriptors: Y
            } = i.useMemo(() => {
                let e = 0,
                    t = null != p,
                    n = t ? p.length : 1,
                    r = u[0],
                    i = [],
                    a = [];
                r += w();
                for (let s = 0; s < n; s++) {
                    let n = t ? p[s] : h,
                        o = (null == p ? void 0 : p[s]) !== 0;
                    (a[s] = {
                        firstRowIndex: e,
                        offset: {
                            top: r,
                            bottom: -1
                        }
                    }),
                        (r += G(s));
                    for (let t = 0; t < n; t++) {
                        let n = r + (o ? x(s, t, e) : 0),
                            a = {
                                top: r,
                                bottom: n
                            };
                        (i[e] = {
                            sectionIndex: s,
                            offset: a
                        }),
                            (r = n),
                            e++;
                    }
                    (r += k(s) + B(s)), (a[s].offset.bottom = r);
                }
                return {
                    totalHeight: (r += u[2]),
                    rowDescriptors: i,
                    sectionDescriptors: a
                };
            }, [x, k, G, B, u, h, p, w]);
        (F.current = Y), (V.current = Z);
        let j = i.useCallback(() => {
            var e;
            let t = null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode();
            if (null == t) return;
            let { offsetWidth: n, offsetHeight: r, scrollTop: i } = t;
            b(r),
                D(i),
                null == a ||
                    a({
                        width: n,
                        height: r
                    });
        }, [a]);
        i.useLayoutEffect(() => {
            -1 === y && j();
        }, [y, j]),
            i.useEffect(() => {
                var e;
                let t = null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode(),
                    n = null == t ? void 0 : t.ownerDocument.defaultView;
                if (null == t || null == n) return;
                let r = new n.ResizeObserver(j);
                return r.observe(t), () => r.disconnect();
            }, [j]);
        let W = i.useCallback(() => {
            var e;
            let t = null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t &&
                (window.cancelAnimationFrame(U.current),
                (U.current = window.requestAnimationFrame(() => {
                    let { scrollTop: e } = t;
                    (P.current = e), null == n || n(e), D(e);
                })));
        }, [n]);
        i.useImperativeHandle(
            t,
            () => ({
                scrollTo: function (e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: r = !1 } = n;
                    null === (t = M.current) ||
                        void 0 === t ||
                        t.scrollTo({
                            to: e,
                            animate: r
                        });
                },
                scrollRowIntoView: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = V.current[e];
                    null != i &&
                        window.requestAnimationFrame(() => {
                            var t, a;
                            let {
                                    sectionIndex: s,
                                    offset: { top: o, bottom: l }
                                } = i,
                                u = G(s),
                                c = o - (A ? u : 0) - r <= P.current,
                                d = l + r >= P.current + y;
                            if (c) {
                                let i = P.current + u - o,
                                    a = A ? P.current - i : o;
                                null === (t = M.current) ||
                                    void 0 === t ||
                                    t.scrollTo({
                                        to: 0 === e ? 0 : a - r,
                                        animate: n
                                    });
                            } else if (d) {
                                let e = l - (P.current + y);
                                null === (a = M.current) ||
                                    void 0 === a ||
                                    a.scrollTo({
                                        to: P.current + e + r,
                                        animate: n
                                    });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = F.current[e];
                    null != i &&
                        window.requestAnimationFrame(() => {
                            var t;
                            null === (t = M.current) ||
                                void 0 === t ||
                                t.scrollTo({
                                    to: (0 === e ? 0 : i.offset.top) + r,
                                    animate: n
                                });
                        });
                },
                getListDimensions: () => ({
                    height: y,
                    totalHeight: H
                }),
                getSectionDescriptors: () => F.current,
                getRowDescriptors: () => V.current,
                getScrollerNode: () => {
                    var e;
                    return null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode();
                },
                scrollIntoViewNode: (e) => {
                    var t;
                    return null === (t = M.current) || void 0 === t ? void 0 : t.scrollIntoViewNode({ node: e });
                }
            }),
            [G, A, H, y]
        );
        let { visibleItems: K, listOffset: z } = i.useMemo(() => {
                if (-1 === y || -1 === L)
                    return {
                        visibleItems: null,
                        listOffset: 0
                    };
                let e = L + y,
                    t = 0,
                    n = u[0],
                    r = [],
                    i = w();
                null != f && L < i ? r.push(f()) : (n += i);
                for (let i = 0; i < Y.length; i++) {
                    let {
                            firstRowIndex: a,
                            offset: { top: s, bottom: o }
                        } = Y[i],
                        l = o - s;
                    if (0 === l) continue;
                    let u = G(i),
                        f = k(i),
                        h = B(i);
                    if (o <= L) n = o;
                    else if (o > L && s < e) {
                        t = a;
                        let o = [],
                            p = 0,
                            I = 0,
                            m = s + u >= L && s <= e;
                        for (null != _ && (A || m) && o.push(_(i)), !m && !A && (n += u); p + u + f < l - h; ) {
                            let r = x(i, I, t),
                                a = s + p + u,
                                l = a + r;
                            if (l <= L) n = l - (A ? u : 0);
                            else if (l > L && a < e)
                                o.push(
                                    c(t, {
                                        sectionIndex: i,
                                        sectionRowIndex: I
                                    })
                                );
                            else break;
                            (p += r), I++, t++;
                        }
                        let T = s + u + p,
                            S = T + f >= L && T <= e;
                        null != E && S && o.push(E(i)), null != d ? r.push(d(i, o)) : (r = [...r, ...o]);
                    } else break;
                }
                return {
                    visibleItems: r,
                    listOffset: n
                };
            }, [x, k, G, B, u, c, d, E, _, L, Y, A, f, w, y]),
            q = i.useMemo(() => {
                var e, t, n;
                return {
                    top: z,
                    right: null !== (e = null == u ? void 0 : u[1]) && void 0 !== e ? e : 0,
                    bottom: null !== (t = null == u ? void 0 : u[2]) && void 0 !== t ? t : 0,
                    left: null !== (n = null == u ? void 0 : u[3]) && void 0 !== n ? n : 0
                };
            }, [z, u]),
            Q = i.useMemo(() => ({ height: H }), [H]),
            X = R ? o.xV : o.h2;
        return (0, r.jsxs)(X, {
            fade: O,
            className: s()(l.scroller, N),
            ref: M,
            onScroll: W,
            children: [
                (0, r.jsx)('div', {
                    role: C,
                    className: l.listItems,
                    style: q,
                    children: K
                }),
                (0, r.jsx)('div', {
                    className: l.listHeight,
                    style: Q
                })
            ]
        });
    })
);
t.Z = u;
