var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(147479),
    c = n(436599);
let d = o.memo(
    o.forwardRef((e, t) => {
        let { onScroll: n, onResize: r, listPadding: i = [0, 0, 0, 0], renderRow: s, renderSection: d, renderSectionHeader: _, renderSectionFooter: E, renderListHeader: f, rowCount: h, rowCountBySection: p, rowHeight: m, sectionMarginBottom: I, sectionHeaderHeight: T, sectionFooterHeight: g, listHeaderHeight: S, stickyHeaders: A = !1, className: v, hideScrollbar: N = !1, fade: O = !1, initialScrollTop: R = 0, role: C = 'list' } = e,
            [y, b] = o.useState(-1),
            [L, D] = o.useState(-1),
            M = o.useRef(null),
            P = o.useRef(0),
            U = o.useRef(-1);
        o.useLayoutEffect(() => {
            var e;
            let t = null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t && (t.scrollTop = R);
        }, []);
        let w = o.useCallback(() => {
                let e = 'function' == typeof S ? S() : S;
                return null == e ? 0 : e;
            }, [S]),
            x = o.useCallback(
                (e, t, n) =>
                    'function' == typeof m
                        ? m(n, {
                              sectionIndex: e,
                              sectionRowIndex: t
                          })
                        : m,
                [m]
            ),
            G = o.useCallback(
                (e) => {
                    let t = 'function' == typeof T ? T(e) : T;
                    return null == t ? 0 : t;
                },
                [T]
            ),
            k = o.useCallback(
                (e) => {
                    let t = 'function' == typeof g ? g(e) : g;
                    return null == t ? 0 : t;
                },
                [g]
            ),
            B = o.useCallback(
                (e) => {
                    let t = 'function' == typeof I ? I(e) : I;
                    return null == t ? 0 : t;
                },
                [I]
            ),
            F = o.useRef([]),
            Z = o.useRef([]),
            {
                totalHeight: V,
                rowDescriptors: H,
                sectionDescriptors: Y
            } = o.useMemo(() => {
                let e = 0,
                    t = null != p,
                    n = t ? p.length : 1,
                    r = i[0],
                    a = [],
                    o = [];
                r += w();
                for (let i = 0; i < n; i++) {
                    let n = t ? p[i] : h,
                        s = (null == p ? void 0 : p[i]) !== 0;
                    (o[i] = {
                        firstRowIndex: e,
                        offset: {
                            top: r,
                            bottom: -1
                        }
                    }),
                        (r += G(i));
                    for (let t = 0; t < n; t++) {
                        let n = r + (s ? x(i, t, e) : 0),
                            o = {
                                top: r,
                                bottom: n
                            };
                        (a[e] = {
                            sectionIndex: i,
                            offset: o
                        }),
                            (r = n),
                            e++;
                    }
                    (r += k(i) + B(i)), (o[i].offset.bottom = r);
                }
                return {
                    totalHeight: (r += i[2]),
                    rowDescriptors: a,
                    sectionDescriptors: o
                };
            }, [x, k, G, B, i, h, p, w]);
        (F.current = Y), (Z.current = H);
        let j = o.useCallback(() => {
            var e;
            let t = null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode();
            if (null == t) return;
            let { offsetWidth: n, offsetHeight: i, scrollTop: a } = t;
            D(i),
                b(a),
                null == r ||
                    r({
                        width: n,
                        height: i
                    });
        }, [r]);
        o.useLayoutEffect(() => {
            -1 === L && j();
        }, [L, j]),
            o.useEffect(() => {
                var e;
                let t = null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode(),
                    n = null == t ? void 0 : t.ownerDocument.defaultView;
                if (null == t || null == n) return;
                let r = new n.ResizeObserver(j);
                return r.observe(t), () => r.disconnect();
            }, [j]);
        let W = o.useCallback(() => {
            var e;
            let t = null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t &&
                (window.cancelAnimationFrame(U.current),
                (U.current = window.requestAnimationFrame(() => {
                    let { scrollTop: e } = t;
                    (P.current = e), null == n || n(e), b(e);
                })));
        }, [n]);
        o.useImperativeHandle(
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
                        i = Z.current[e];
                    null != i &&
                        window.requestAnimationFrame(() => {
                            var t, a;
                            let {
                                    sectionIndex: o,
                                    offset: { top: s, bottom: l }
                                } = i,
                                u = G(o),
                                c = s - (A ? u : 0) - r <= P.current,
                                d = l + r >= P.current + L;
                            if (c) {
                                let i = P.current + u - s,
                                    a = A ? P.current - i : s;
                                null === (t = M.current) ||
                                    void 0 === t ||
                                    t.scrollTo({
                                        to: 0 === e ? 0 : a - r,
                                        animate: n
                                    });
                            } else if (d) {
                                let e = l - (P.current + L);
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
                    height: L,
                    totalHeight: V
                }),
                getSectionDescriptors: () => F.current,
                getRowDescriptors: () => Z.current,
                getScrollerNode: () => {
                    var e;
                    return null === (e = M.current) || void 0 === e ? void 0 : e.getScrollerNode();
                },
                scrollIntoViewNode: (e) => {
                    var t;
                    return null === (t = M.current) || void 0 === t ? void 0 : t.scrollIntoViewNode({ node: e });
                }
            }),
            [G, A, V, L]
        );
        let { visibleItems: K, listOffset: z } = o.useMemo(() => {
                if (-1 === L || -1 === y)
                    return {
                        visibleItems: null,
                        listOffset: 0
                    };
                let e = y,
                    t = y + L,
                    n = 0,
                    r = i[0],
                    a = [],
                    o = w();
                null != f && e < o ? a.push(f()) : (r += o);
                for (let i = 0; i < Y.length; i++) {
                    let {
                            firstRowIndex: o,
                            offset: { top: l, bottom: u }
                        } = Y[i],
                        c = u - l;
                    if (0 === c) continue;
                    let f = G(i),
                        h = k(i),
                        p = B(i);
                    if (u <= e) r = u;
                    else if (u > e && l < t) {
                        n = o;
                        let u = [],
                            m = 0,
                            I = 0,
                            T = l,
                            g = T + f >= e && T <= t;
                        for (null != _ && (A || g) && u.push(_(i)), !g && !A && (r += f); m + f + h < c - p; ) {
                            let a = x(i, I, n),
                                o = l + m + f,
                                c = o + a;
                            if (c <= e) r = c - (A ? f : 0);
                            else if (c > e && o < t)
                                u.push(
                                    s(n, {
                                        sectionIndex: i,
                                        sectionRowIndex: I
                                    })
                                );
                            else break;
                            (m += a), I++, n++;
                        }
                        let S = l + f + m,
                            v = S + h >= e && S <= t;
                        null != E && v && u.push(E(i)), null != d ? a.push(d(i, u)) : (a = [...a, ...u]);
                    } else break;
                }
                return {
                    visibleItems: a,
                    listOffset: r
                };
            }, [x, k, G, B, i, s, d, E, _, y, Y, A, f, w, L]),
            q = o.useMemo(() => {
                var e, t, n;
                return {
                    top: z,
                    right: null !== (e = null == i ? void 0 : i[1]) && void 0 !== e ? e : 0,
                    bottom: null !== (t = null == i ? void 0 : i[2]) && void 0 !== t ? t : 0,
                    left: null !== (n = null == i ? void 0 : i[3]) && void 0 !== n ? n : 0
                };
            }, [z, i]),
            Q = o.useMemo(() => ({ height: V }), [V]),
            X = N ? u.xV : u.h2;
        return (0, a.jsxs)(X, {
            fade: O,
            className: l()(c.scroller, v),
            ref: M,
            onScroll: W,
            children: [
                (0, a.jsx)('div', {
                    role: C,
                    className: c.listItems,
                    style: q,
                    children: K
                }),
                (0, a.jsx)('div', {
                    className: c.listHeight,
                    style: Q
                })
            ]
        });
    })
);
t.Z = d;
