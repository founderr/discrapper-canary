n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(147479),
    l = n(22832);
let u = i.memo(
    i.forwardRef((e, t) => {
        let { onScroll: n, onResize: a, listPadding: u = [0, 0, 0, 0], renderRow: c, renderSection: d, renderSectionHeader: f, renderSectionFooter: _, renderListHeader: h, rowCount: p, rowCountBySection: m, rowHeight: g, sectionMarginBottom: E, sectionHeaderHeight: v, sectionFooterHeight: I, listHeaderHeight: S, stickyHeaders: b = !1, className: T, hideScrollbar: y = !1, fade: A = !1, initialScrollTop: N = 0, role: C = 'list' } = e,
            [R, O] = i.useState(-1),
            [D, L] = i.useState(-1),
            x = i.useRef(null),
            w = i.useRef(0),
            M = i.useRef(-1);
        i.useLayoutEffect(() => {
            var e;
            let t = null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t && (t.scrollTop = N);
        }, []);
        let P = i.useCallback(() => {
                let e = 'function' == typeof S ? S() : S;
                return null == e ? 0 : e;
            }, [S]),
            k = i.useCallback(
                (e, t, n) =>
                    'function' == typeof g
                        ? g(n, {
                              sectionIndex: e,
                              sectionRowIndex: t
                          })
                        : g,
                [g]
            ),
            U = i.useCallback(
                (e) => {
                    let t = 'function' == typeof v ? v(e) : v;
                    return null == t ? 0 : t;
                },
                [v]
            ),
            G = i.useCallback(
                (e) => {
                    let t = 'function' == typeof I ? I(e) : I;
                    return null == t ? 0 : t;
                },
                [I]
            ),
            B = i.useCallback(
                (e) => {
                    let t = 'function' == typeof E ? E(e) : E;
                    return null == t ? 0 : t;
                },
                [E]
            ),
            Z = i.useRef([]),
            F = i.useRef([]),
            {
                totalHeight: V,
                rowDescriptors: H,
                sectionDescriptors: j
            } = i.useMemo(() => {
                let e = 0,
                    t = null != m,
                    n = t ? m.length : 1,
                    r = u[0],
                    i = [],
                    a = [];
                r += P();
                for (let s = 0; s < n; s++) {
                    let n = t ? m[s] : p,
                        o = (null == m ? void 0 : m[s]) !== 0;
                    (a[s] = {
                        firstRowIndex: e,
                        offset: {
                            top: r,
                            bottom: -1
                        }
                    }),
                        (r += U(s));
                    for (let t = 0; t < n; t++) {
                        let n = r + (o ? k(s, t, e) : 0),
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
                    (r += G(s) + B(s)), (a[s].offset.bottom = r);
                }
                return {
                    totalHeight: (r += u[2]),
                    rowDescriptors: i,
                    sectionDescriptors: a
                };
            }, [k, G, U, B, u, p, m, P]);
        (Z.current = j), (F.current = H);
        let Y = i.useCallback(() => {
            var e;
            let t = null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerNode();
            if (null == t) return;
            let { offsetWidth: n, offsetHeight: r, scrollTop: i } = t;
            L(r),
                O(i),
                null == a ||
                    a({
                        width: n,
                        height: r
                    });
        }, [a]);
        i.useLayoutEffect(() => {
            -1 === D && Y();
        }, [D, Y]),
            i.useEffect(() => {
                var e;
                let t = null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerNode(),
                    n = null == t ? void 0 : t.ownerDocument.defaultView;
                if (null == t || null == n) return;
                let r = new n.ResizeObserver(Y);
                return r.observe(t), () => r.disconnect();
            }, [Y]);
        let W = i.useCallback(() => {
            var e;
            let t = null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != t &&
                (window.cancelAnimationFrame(M.current),
                (M.current = window.requestAnimationFrame(() => {
                    let { scrollTop: e } = t;
                    (w.current = e), null == n || n(e), O(e);
                })));
        }, [n]);
        i.useImperativeHandle(
            t,
            () => ({
                scrollTo: function (e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: r = !1 } = n;
                    null === (t = x.current) ||
                        void 0 === t ||
                        t.scrollTo({
                            to: e,
                            animate: r
                        });
                },
                scrollRowIntoView: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = F.current[e];
                    null != i &&
                        window.requestAnimationFrame(() => {
                            var t, a;
                            let {
                                    sectionIndex: s,
                                    offset: { top: o, bottom: l }
                                } = i,
                                u = U(s),
                                c = o - (b ? u : 0) - r <= w.current,
                                d = l + r >= w.current + D;
                            if (c) {
                                let i = w.current + u - o,
                                    a = b ? w.current - i : o;
                                null === (t = x.current) ||
                                    void 0 === t ||
                                    t.scrollTo({
                                        to: 0 === e ? 0 : a - r,
                                        animate: n
                                    });
                            } else if (d) {
                                let e = l - (w.current + D);
                                null === (a = x.current) ||
                                    void 0 === a ||
                                    a.scrollTo({
                                        to: w.current + e + r,
                                        animate: n
                                    });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: n = !1, offset: r = 0 } = t,
                        i = Z.current[e];
                    null != i &&
                        window.requestAnimationFrame(() => {
                            var t;
                            null === (t = x.current) ||
                                void 0 === t ||
                                t.scrollTo({
                                    to: (0 === e ? 0 : i.offset.top) + r,
                                    animate: n
                                });
                        });
                },
                getListDimensions: () => ({
                    height: D,
                    totalHeight: V
                }),
                getSectionDescriptors: () => Z.current,
                getRowDescriptors: () => F.current,
                getScrollerNode: () => {
                    var e;
                    return null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerNode();
                },
                scrollIntoViewNode: (e) => {
                    var t;
                    return null === (t = x.current) || void 0 === t ? void 0 : t.scrollIntoViewNode({ node: e });
                }
            }),
            [U, b, V, D]
        );
        let { visibleItems: K, listOffset: z } = i.useMemo(() => {
                if (-1 === D || -1 === R)
                    return {
                        visibleItems: null,
                        listOffset: 0
                    };
                let e = R + D,
                    t = 0,
                    n = u[0],
                    r = [],
                    i = P();
                null != h && R < i ? r.push(h()) : (n += i);
                for (let i = 0; i < j.length; i++) {
                    let {
                            firstRowIndex: a,
                            offset: { top: s, bottom: o }
                        } = j[i],
                        l = o - s;
                    if (0 === l) continue;
                    let u = U(i),
                        h = G(i),
                        p = B(i);
                    if (o <= R) n = o;
                    else if (o > R && s < e) {
                        t = a;
                        let o = [],
                            m = 0,
                            g = 0,
                            E = s + u >= R && s <= e;
                        for (null != f && (b || E) && o.push(f(i)), !E && !b && (n += u); m + u + h < l - p; ) {
                            let r = k(i, g, t),
                                a = s + m + u,
                                l = a + r;
                            if (l <= R) n = l - (b ? u : 0);
                            else if (l > R && a < e)
                                o.push(
                                    c(t, {
                                        sectionIndex: i,
                                        sectionRowIndex: g
                                    })
                                );
                            else break;
                            (m += r), g++, t++;
                        }
                        let v = s + u + m,
                            I = v + h >= R && v <= e;
                        null != _ && I && o.push(_(i)), null != d ? r.push(d(i, o)) : (r = [...r, ...o]);
                    } else break;
                }
                return {
                    visibleItems: r,
                    listOffset: n
                };
            }, [k, G, U, B, u, c, d, _, f, R, j, b, h, P, D]),
            q = i.useMemo(() => {
                var e, t, n;
                return {
                    top: z,
                    right: null !== (e = null == u ? void 0 : u[1]) && void 0 !== e ? e : 0,
                    bottom: null !== (t = null == u ? void 0 : u[2]) && void 0 !== t ? t : 0,
                    left: null !== (n = null == u ? void 0 : u[3]) && void 0 !== n ? n : 0
                };
            }, [z, u]),
            Q = i.useMemo(() => ({ height: V }), [V]),
            X = y ? o.xV : o.h2;
        return (0, r.jsxs)(X, {
            fade: A,
            className: s()(l.scroller, T),
            ref: x,
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
