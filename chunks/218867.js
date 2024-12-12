var i = r(47120);
var a = r(653041);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(147479),
    d = r(528460);
let f = o.memo(
    o.forwardRef((e, n) => {
        let { onScroll: r, onResize: i, listPadding: a = [0, 0, 0, 0], renderRow: l, renderSection: f, renderSectionHeader: _, renderSectionFooter: h, renderListHeader: p, rowCount: m, rowCountBySection: g, rowHeight: E, sectionMarginBottom: v, sectionHeaderHeight: I, sectionFooterHeight: T, listHeaderHeight: b, stickyHeaders: y = !1, className: S, hideScrollbar: A = !1, fade: N = !1, initialScrollTop: C = 0, role: R = 'list' } = e,
            [O, D] = o.useState(-1),
            [L, x] = o.useState(-1),
            w = o.useRef(null),
            P = o.useRef(0),
            M = o.useRef(-1);
        o.useLayoutEffect(() => {
            var e;
            let n = null === (e = w.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != n && (n.scrollTop = C);
        }, []);
        let k = o.useCallback(() => {
                let e = 'function' == typeof b ? b() : b;
                return null == e ? 0 : e;
            }, [b]),
            U = o.useCallback(
                (e, n, r) =>
                    'function' == typeof E
                        ? E(r, {
                              sectionIndex: e,
                              sectionRowIndex: n
                          })
                        : E,
                [E]
            ),
            B = o.useCallback(
                (e) => {
                    let n = 'function' == typeof I ? I(e) : I;
                    return null == n ? 0 : n;
                },
                [I]
            ),
            G = o.useCallback(
                (e) => {
                    let n = 'function' == typeof T ? T(e) : T;
                    return null == n ? 0 : n;
                },
                [T]
            ),
            Z = o.useCallback(
                (e) => {
                    let n = 'function' == typeof v ? v(e) : v;
                    return null == n ? 0 : n;
                },
                [v]
            ),
            F = o.useRef([]),
            V = o.useRef([]),
            {
                totalHeight: j,
                rowDescriptors: H,
                sectionDescriptors: Y
            } = o.useMemo(() => {
                let e = 0,
                    n = null != g,
                    r = n ? g.length : 1,
                    i = a[0],
                    s = [],
                    o = [];
                i += k();
                for (let a = 0; a < r; a++) {
                    let r = n ? g[a] : m,
                        l = (null == g ? void 0 : g[a]) !== 0;
                    (o[a] = {
                        firstRowIndex: e,
                        offset: {
                            top: i,
                            bottom: -1
                        }
                    }),
                        (i += B(a));
                    for (let n = 0; n < r; n++) {
                        let r = i + (l ? U(a, n, e) : 0),
                            o = {
                                top: i,
                                bottom: r
                            };
                        (s[e] = {
                            sectionIndex: a,
                            offset: o
                        }),
                            (i = r),
                            e++;
                    }
                    (i += G(a) + Z(a)), (o[a].offset.bottom = i);
                }
                return {
                    totalHeight: (i += a[2]),
                    rowDescriptors: s,
                    sectionDescriptors: o
                };
            }, [U, G, B, Z, a, m, g, k]);
        (F.current = Y), (V.current = H);
        let W = o.useCallback(() => {
            var e;
            let n = null === (e = w.current) || void 0 === e ? void 0 : e.getScrollerNode();
            if (null == n) return;
            let { offsetWidth: r, offsetHeight: a, scrollTop: s } = n;
            x(a),
                D(s),
                null == i ||
                    i({
                        width: r,
                        height: a
                    });
        }, [i]);
        o.useLayoutEffect(() => {
            -1 === L && W();
        }, [L, W]),
            o.useEffect(() => {
                var e;
                let n = null === (e = w.current) || void 0 === e ? void 0 : e.getScrollerNode(),
                    r = null == n ? void 0 : n.ownerDocument.defaultView;
                if (null == n || null == r) return;
                let i = new r.ResizeObserver(W);
                return i.observe(n), () => i.disconnect();
            }, [W]);
        let K = o.useCallback(() => {
            var e;
            let n = null === (e = w.current) || void 0 === e ? void 0 : e.getScrollerNode();
            null != n &&
                (window.cancelAnimationFrame(M.current),
                (M.current = window.requestAnimationFrame(() => {
                    let { scrollTop: e } = n;
                    (P.current = e), null == r || r(e), D(e);
                })));
        }, [r]);
        o.useImperativeHandle(
            n,
            () => ({
                scrollTo: function (e) {
                    var n;
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: i = !1 } = r;
                    null === (n = w.current) ||
                        void 0 === n ||
                        n.scrollTo({
                            to: e,
                            animate: i
                        });
                },
                scrollRowIntoView: function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: r = !1, offset: i = 0 } = n,
                        a = V.current[e];
                    null != a &&
                        window.requestAnimationFrame(() => {
                            var n, s;
                            let {
                                    sectionIndex: o,
                                    offset: { top: l, bottom: u }
                                } = a,
                                c = B(o),
                                d = l - (y ? c : 0) - i <= P.current,
                                f = u + i >= P.current + L;
                            if (d) {
                                let a = P.current + c - l,
                                    s = y ? P.current - a : l;
                                null === (n = w.current) ||
                                    void 0 === n ||
                                    n.scrollTo({
                                        to: 0 === e ? 0 : s - i,
                                        animate: r
                                    });
                            } else if (f) {
                                let e = u - (P.current + L);
                                null === (s = w.current) ||
                                    void 0 === s ||
                                    s.scrollTo({
                                        to: P.current + e + i,
                                        animate: r
                                    });
                            }
                        });
                },
                scrollToSectionTop: function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { animate: r = !1, offset: i = 0 } = n,
                        a = F.current[e];
                    null != a &&
                        window.requestAnimationFrame(() => {
                            var n;
                            null === (n = w.current) ||
                                void 0 === n ||
                                n.scrollTo({
                                    to: (0 === e ? 0 : a.offset.top) + i,
                                    animate: r
                                });
                        });
                },
                getListDimensions: () => ({
                    height: L,
                    totalHeight: j
                }),
                getSectionDescriptors: () => F.current,
                getRowDescriptors: () => V.current,
                getScrollerNode: () => {
                    var e;
                    return null === (e = w.current) || void 0 === e ? void 0 : e.getScrollerNode();
                },
                scrollIntoViewNode: (e) => {
                    var n;
                    return null === (n = w.current) || void 0 === n ? void 0 : n.scrollIntoViewNode({ node: e });
                }
            }),
            [B, y, j, L]
        );
        let { visibleItems: z, listOffset: q } = o.useMemo(() => {
                if (-1 === L || -1 === O)
                    return {
                        visibleItems: null,
                        listOffset: 0
                    };
                let e = O,
                    n = O + L,
                    r = 0,
                    i = a[0],
                    s = [],
                    o = k();
                null != p && e < o ? s.push(p()) : (i += o);
                for (let a = 0; a < Y.length; a++) {
                    let {
                            firstRowIndex: o,
                            offset: { top: u, bottom: c }
                        } = Y[a],
                        d = c - u;
                    if (0 === d) continue;
                    let p = B(a),
                        m = G(a),
                        g = Z(a);
                    if (c <= e) i = c;
                    else if (c > e && u < n) {
                        r = o;
                        let c = [],
                            E = 0,
                            v = 0,
                            I = u,
                            T = I + p >= e && I <= n;
                        for (null != _ && (y || T) && c.push(_(a)), !T && !y && (i += p); E + p + m < d - g; ) {
                            let s = U(a, v, r),
                                o = u + E + p,
                                d = o + s;
                            if (d <= e) i = d - (y ? p : 0);
                            else if (d > e && o < n)
                                c.push(
                                    l(r, {
                                        sectionIndex: a,
                                        sectionRowIndex: v
                                    })
                                );
                            else break;
                            (E += s), v++, r++;
                        }
                        let b = u + p + E,
                            S = b + m >= e && b <= n;
                        null != h && S && c.push(h(a)), null != f ? s.push(f(a, c)) : (s = [...s, ...c]);
                    } else break;
                }
                return {
                    visibleItems: s,
                    listOffset: i
                };
            }, [U, G, B, Z, a, l, f, h, _, O, Y, y, p, k, L]),
            Q = o.useMemo(() => {
                var e, n, r;
                return {
                    top: q,
                    right: null !== (e = null == a ? void 0 : a[1]) && void 0 !== e ? e : 0,
                    bottom: null !== (n = null == a ? void 0 : a[2]) && void 0 !== n ? n : 0,
                    left: null !== (r = null == a ? void 0 : a[3]) && void 0 !== r ? r : 0
                };
            }, [q, a]),
            X = o.useMemo(() => ({ height: j }), [j]),
            J = A ? c.xV : c.h2;
        return (0, s.jsxs)(J, {
            fade: N,
            className: u()(d.scroller, S),
            ref: w,
            onScroll: K,
            children: [
                (0, s.jsx)('div', {
                    role: R,
                    className: d.listItems,
                    style: Q,
                    children: z
                }),
                (0, s.jsx)('div', {
                    className: d.listHeight,
                    style: X
                })
            ]
        });
    })
);
n.Z = f;
