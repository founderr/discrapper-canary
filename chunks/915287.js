n.d(t, {
    v: function () {
        return I;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(952639),
    c = n.n(u),
    d = n(84735),
    _ = n(562701),
    E = n(558025);
function f(e) {
    let t = o.useRef(e);
    return o.useEffect(() => void (t.current = e), [e]), o.useCallback(() => t.current, []);
}
function h(e) {
    let t = o.useRef(e);
    return (
        o.useEffect(() => void (t.current = e), [e]),
        o.useCallback((e) => {
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
}
function p(e) {
    let { renderSection: t, renderRow: n, renderFooter: r, renderListHeader: i, stickyListHeader: s, wrapSection: l, items: u, spacerTop: d } = e,
        _ = [
            (0, a.jsx)(
                'div',
                {
                    'aria-hidden': !0,
                    style: { height: d }
                },
                '---list-spacer-top'
            )
        ],
        E = [],
        f = 0;
    if (
        (!0 === s && null != i && _.push((0, a.jsx)(o.Fragment, { children: i() }, '---sticky-header')),
        u.forEach((e) => {
            var a;
            switch ((e.section !== f && E.length > 0 && (_.push(null != l ? l(f, E) : E), (E = [])), (f = null !== (a = e.section) && void 0 !== a ? a : 0), e.type)) {
                case 'section':
                    null != t && E.push(t(e));
                    break;
                case 'row':
                    E.push(n(e));
                    break;
                case 'footer':
                    null != r && E.push(r(e));
                    break;
                case 'header':
                    null != i && !0 !== s && E.push(i());
            }
        }),
        E.length > 0)
    ) {
        var h;
        _.push(null !== (h = null == l ? void 0 : l(f, E)) && void 0 !== h ? h : E);
    }
    return c()(_);
}
function m(e) {
    let { renderSidebar: t, sidebarHeight: n, isSidebarVisible: r, isListVisible: i } = e;
    return null == n || null == t ? null : t(i, r);
}
function I(e, t, n, r) {
    let i = (0, _.G6)(e),
        s = new Map(),
        u = new r((e) => {
            e.forEach((e) => {
                var t;
                let { target: n } = e;
                null === (t = s.get(n)) || void 0 === t || t(e);
            });
        });
    return o.forwardRef(function (r, c) {
        let { className: I, onScroll: T, onResize: g = null, onContentResize: S = null, dir: A = 'ltr', sections: v, sectionHeight: N, rowHeight: O, footerHeight: R = 0, sidebarHeight: C, listHeaderHeight: y = 0, renderSection: L, renderRow: b, renderFooter: D, renderSidebar: M, renderListHeader: P, stickyListHeader: U, wrapSection: w, getAnchorId: x, paddingTop: G, paddingBottom: k, fade: B = !1, customTheme: F = !1, chunkSize: Z, style: V, innerId: H, innerRole: Y, innerAriaLabel: j, innerAriaMultiselectable: W, innerAriaOrientation: K, innerClassName: z, innerTag: q = 'div', ...Q } = r,
            X = o.useRef(null),
            $ = o.useRef(null),
            [J, ee] = o.useState(!1),
            { scrollerRef: et, scrollerState: en, getScrollerState: er } = (0, _.T4)();
        (0, _.tT)({
            scrollerRef: et,
            className: I,
            specs: i,
            orientation: 'vertical',
            dir: A
        });
        let {
                spacerTop: ei,
                totalHeight: ea,
                items: eo,
                isSidebarVisible: es,
                listComputer: el,
                forceUpdateOnChunkChange: eu,
                anchor: ec
            } = (0, _.aU)({
                sections: v,
                sectionHeight: N,
                rowHeight: O,
                footerHeight: R,
                sidebarHeight: C,
                listHeaderHeight: y,
                paddingTop: G,
                paddingBottom: k,
                chunkSize: Z,
                getScrollerState: er,
                getAnchorId: x
            }),
            ed = (0, _.t2)(et),
            e_ = o.useRef(g),
            eE = o.useRef(S);
        o.useLayoutEffect(() => {
            (e_.current = g), (eE.current = S);
        });
        let ef = o.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    if ((e > en.current.dirty && (en.current.dirty = e), 2 === e)) {
                        var t;
                        null === (t = e_.current) || void 0 === t || t.call(e_);
                    }
                    eu(e);
                },
                [eu, en]
            ),
            eh = o.useCallback(() => ef(), [ef]);
        (0, _.zn)({
            ref: et,
            onUpdate: eh,
            key: 'container',
            resizeObserver: u,
            listenerMap: s
        }),
            (0, _.zn)({
                ref: $,
                onUpdate: () => {
                    var e;
                    return null === (e = eE.current) || void 0 === e ? void 0 : e.call(eE);
                },
                key: 'content',
                resizeObserver: u,
                listenerMap: s
            });
        let ep = f(eo),
            em = h(v);
        o.useImperativeHandle(
            c,
            () => ({
                getScrollerNode: () => et.current,
                getScrollerState: er,
                getItems: ep,
                getSectionRowFromIndex: em,
                ...(0, _.rH)(et, er, el, ed)
            }),
            [et, er, em, ep, el, ed]
        );
        let eI = o.useCallback(
            (e) => {
                ef(1),
                    null == X.current ? ee(!0) : clearTimeout(X.current),
                    (X.current = setTimeout(() => {
                        (X.current = null), ee(!1);
                    }, 200)),
                    null != T && T(e);
            },
            [T, ef]
        );
        return (
            o.useLayoutEffect(() => {
                2 !== en.current.dirty && (en.current.dirty = 2);
            }, [eo, L, b, D, w, ea, ei, en]),
            (0, _.rS)({
                scrollerRef: et,
                anchor: ec,
                getScrollerState: er,
                listComputer: el,
                getAnchorId: x,
                totalHeight: ea
            }),
            (0, a.jsxs)('div', {
                ref: et,
                onScroll: eI,
                className: l()(I, {
                    [e]: !0,
                    [t]: B,
                    [n]: F,
                    [E.scrolling]: J
                }),
                style: (0, _.uT)(V),
                ...Q,
                children: [
                    o.useMemo(
                        () =>
                            (0, a.jsx)(q, {
                                id: H,
                                role: Y,
                                'aria-label': j,
                                'aria-multiselectable': W,
                                'aria-orientation': K,
                                style: { height: ea },
                                className: l()(E.content, z),
                                ref: $,
                                children: (0, a.jsx)(d.J, {
                                    containerRef: $,
                                    children: p({
                                        items: eo,
                                        renderListHeader: P,
                                        stickyListHeader: U,
                                        renderSection: L,
                                        renderRow: b,
                                        renderFooter: D,
                                        wrapSection: w,
                                        spacerTop: ei
                                    })
                                })
                            }),
                        [q, H, Y, j, W, K, ea, z, eo, P, U, L, b, D, w, ei]
                    ),
                    o.useMemo(
                        () =>
                            m({
                                isSidebarVisible: es,
                                renderSidebar: M,
                                sidebarHeight: C,
                                isListVisible: 0 !== eo.length
                            }),
                        [es, M, C, eo.length]
                    )
                ]
            })
        );
    });
}
