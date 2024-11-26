n.d(t, {
    v: function () {
        return f;
    }
}),
    n(653041),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(952639),
    l = n.n(o),
    u = n(84735),
    c = n(562701),
    d = n(448304);
function f(e, t, n, a) {
    let o = (0, c.G6)(e),
        f = new Map(),
        _ = new a((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null === (t = f.get(n)) || void 0 === t || t(e);
            });
        });
    return i.forwardRef(function (a, p) {
        let { className: h, onScroll: m, onResize: g = null, onContentResize: E = null, dir: v = 'ltr', sections: I, sectionHeight: T, rowHeight: b, footerHeight: S = 0, sidebarHeight: y, listHeaderHeight: A = 0, renderSection: N, renderRow: C, renderFooter: R, renderSidebar: O, renderListHeader: D, stickyListHeader: L, wrapSection: x, getAnchorId: w, paddingTop: P, paddingBottom: M, fade: k = !1, customTheme: U = !1, chunkSize: B, style: G, innerId: Z, innerRole: F, innerAriaLabel: V, innerAriaMultiselectable: j, innerAriaOrientation: H, innerClassName: Y, innerTag: W = 'div', ...K } = a,
            z = i.useRef(null),
            q = i.useRef(null),
            [Q, X] = i.useState(!1),
            { scrollerRef: J, scrollerState: $, getScrollerState: ee } = (0, c.T4)();
        (0, c.tT)({
            scrollerRef: J,
            className: h,
            specs: o,
            orientation: 'vertical',
            dir: v
        });
        let {
                spacerTop: et,
                totalHeight: en,
                items: er,
                isSidebarVisible: ei,
                listComputer: ea,
                forceUpdateOnChunkChange: es,
                anchor: eo
            } = (0, c.aU)({
                sections: I,
                sectionHeight: T,
                rowHeight: b,
                footerHeight: S,
                sidebarHeight: y,
                listHeaderHeight: A,
                paddingTop: P,
                paddingBottom: M,
                chunkSize: B,
                getScrollerState: ee,
                getAnchorId: w
            }),
            el = (0, c.t2)(J),
            eu = i.useRef(g),
            ec = i.useRef(E);
        i.useLayoutEffect(() => {
            (eu.current = g), (ec.current = E);
        });
        let ed = i.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    if ((e > $.current.dirty && ($.current.dirty = e), 2 === e)) {
                        var t;
                        null === (t = eu.current) || void 0 === t || t.call(eu);
                    }
                    es(e);
                },
                [es, $]
            ),
            ef = i.useCallback(() => ed(), [ed]);
        (0, c.zn)({
            ref: J,
            onUpdate: ef,
            key: 'container',
            resizeObserver: _,
            listenerMap: f
        }),
            (0, c.zn)({
                ref: q,
                onUpdate: () => {
                    var e;
                    return null === (e = ec.current) || void 0 === e ? void 0 : e.call(ec);
                },
                key: 'content',
                resizeObserver: _,
                listenerMap: f
            });
        let e_ = (function (e) {
                let t = i.useRef(e);
                return i.useEffect(() => void (t.current = e), [e]), i.useCallback(() => t.current, []);
            })(er),
            ep = (function (e) {
                let t = i.useRef(e);
                return (
                    i.useEffect(() => void (t.current = e), [e]),
                    i.useCallback((e) => {
                        let { current: n } = t,
                            r = 0;
                        for (let t = 0; t < n.length; t++) {
                            let i = n[t];
                            if (r <= e && r + i >= e) return [t, e - r];
                            r += i;
                        }
                        return [0, 0];
                    }, [])
                );
            })(I);
        i.useImperativeHandle(
            p,
            () => ({
                getScrollerNode: () => J.current,
                getScrollerState: ee,
                getItems: e_,
                getSectionRowFromIndex: ep,
                ...(0, c.rH)(J, ee, ea, el)
            }),
            [J, ee, ep, e_, ea, el]
        );
        let eh = i.useCallback(
            (e) => {
                ed(1),
                    null == z.current ? X(!0) : clearTimeout(z.current),
                    (z.current = setTimeout(() => {
                        (z.current = null), X(!1);
                    }, 200)),
                    null != m && m(e);
            },
            [m, ed]
        );
        return (
            i.useLayoutEffect(() => {
                2 !== $.current.dirty && ($.current.dirty = 2);
            }, [er, N, C, R, x, en, et, $]),
            (0, c.rS)({
                scrollerRef: J,
                anchor: eo,
                getScrollerState: ee,
                listComputer: ea,
                getAnchorId: w,
                totalHeight: en
            }),
            (0, r.jsxs)('div', {
                ref: J,
                onScroll: eh,
                className: s()(h, {
                    [e]: !0,
                    [t]: k,
                    [n]: U,
                    [d.scrolling]: Q
                }),
                style: (0, c.uT)(G),
                ...K,
                children: [
                    i.useMemo(
                        () =>
                            (0, r.jsx)(W, {
                                id: Z,
                                role: F,
                                'aria-label': V,
                                'aria-multiselectable': j,
                                'aria-orientation': H,
                                style: { height: en },
                                className: s()(d.content, Y),
                                ref: q,
                                children: (0, r.jsx)(u.J, {
                                    containerRef: q,
                                    children: (function (e) {
                                        let { renderSection: t, renderRow: n, renderFooter: a, renderListHeader: s, stickyListHeader: o, wrapSection: u, items: c, spacerTop: d } = e,
                                            f = [
                                                (0, r.jsx)(
                                                    'div',
                                                    {
                                                        'aria-hidden': !0,
                                                        style: { height: d }
                                                    },
                                                    '---list-spacer-top'
                                                )
                                            ],
                                            _ = [],
                                            p = 0;
                                        if (
                                            (!0 === o && null != s && f.push((0, r.jsx)(i.Fragment, { children: s() }, '---sticky-header')),
                                            c.forEach((e) => {
                                                var r;
                                                switch ((e.section !== p && _.length > 0 && (f.push(null != u ? u(p, _) : _), (_ = [])), (p = null !== (r = e.section) && void 0 !== r ? r : 0), e.type)) {
                                                    case 'section':
                                                        null != t && _.push(t(e));
                                                        break;
                                                    case 'row':
                                                        _.push(n(e));
                                                        break;
                                                    case 'footer':
                                                        null != a && _.push(a(e));
                                                        break;
                                                    case 'header':
                                                        null != s && !0 !== o && _.push(s());
                                                }
                                            }),
                                            _.length > 0)
                                        ) {
                                            var h;
                                            f.push(null !== (h = null == u ? void 0 : u(p, _)) && void 0 !== h ? h : _);
                                        }
                                        return l()(f);
                                    })({
                                        items: er,
                                        renderListHeader: D,
                                        stickyListHeader: L,
                                        renderSection: N,
                                        renderRow: C,
                                        renderFooter: R,
                                        wrapSection: x,
                                        spacerTop: et
                                    })
                                })
                            }),
                        [W, Z, F, V, j, H, en, Y, er, D, L, N, C, R, x, et]
                    ),
                    i.useMemo(
                        () =>
                            (function (e) {
                                let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: r, isListVisible: i } = e;
                                return null == n || null == t ? null : t(i, r);
                            })({
                                isSidebarVisible: ei,
                                renderSidebar: O,
                                sidebarHeight: y,
                                isListVisible: 0 !== er.length
                            }),
                        [ei, O, y, er.length]
                    )
                ]
            })
        );
    });
}
