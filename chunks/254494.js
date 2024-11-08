var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(218867),
    l = n(28546),
    u = n(981631),
    c = n(606755);
let d = (e) => {
    let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: r } = e,
        a = i.useRef(u.xAR),
        s = i.useRef(t);
    return (
        i.useEffect(() => {
            null != t &&
                t !== s.current &&
                (a.current !== u.xAR && window.cancelAnimationFrame(a.current),
                (a.current = window.requestAnimationFrame(() => {
                    var e;
                    if (null == n.current) return;
                    let i = t > (null !== (e = s.current) && void 0 !== e ? e : -1),
                        o = null != r ? r(t, i) : 0;
                    n.current.scrollRowIntoView(t, {
                        animate: !0,
                        offset: o
                    }),
                        (a.current = u.xAR),
                        (s.current = t);
                })));
        }, [t, n, r]),
        { categoryListRef: n }
    );
};
t.Z = function (e) {
    let { categoryListRef: t, expressionsListRef: n, categories: a, store: u, children: f, className: _, listPadding: h, rowCount: p, getScrollOffsetForIndex: m, categoryHeight: g, onScroll: E, renderCategoryListItem: v, rowCountBySection: I, renderSection: S } = e,
        b = u.useStore((e) => e.activeCategoryIndex);
    d({
        activeIndex: b,
        categoryListRef: t,
        getScrollOffsetForIndex: m
    });
    let T = i.useCallback(
            (e) => {
                let { searchQuery: t } = l.Iu.getState();
                if ((u.setActiveCategoryIndex(e), '' !== t)) (0, l.ql)('');
                else {
                    var r;
                    null === (r = n.current) || void 0 === r || r.scrollToSectionTop(e);
                }
            },
            [n, u]
        ),
        y = i.useCallback((e) => v(a[e], e, () => T(e), b === e), [b, a, T, v]),
        A = i.useMemo(() => ('function' == typeof g ? (e) => g(a[e], e) : g), [a, g]);
    return (0, r.jsxs)('div', {
        className: s()(c.wrapper, _),
        children: [
            (0, r.jsx)(o.Z, {
                listPadding: h,
                onScroll: E,
                ref: t,
                renderRow: y,
                rowCount: p,
                rowHeight: A,
                hideScrollbar: !0,
                rowCountBySection: I,
                renderSection: S
            }),
            null == f ? void 0 : f(T)
        ]
    });
};
