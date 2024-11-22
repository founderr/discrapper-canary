n(47120);
var r = n(200651),
    i = n(192379),
    a = n(218867),
    s = n(74538),
    o = n(28546),
    l = n(98528),
    u = n(729480);
let c = i.forwardRef(function (e, t) {
    let { categories: n, store: c, hasSearchResults: d, listPadding: f, renderRow: _, renderSection: p, renderSectionHeader: h, renderSectionFooter: m, renderInspector: g, renderEmptySearchState: E, rowCount: v, rowCountBySection: I, rowHeight: b, sectionHeaderHeight: T, sectionFooterHeight: S, renderUpsell: y, setShowUpsell: A } = e,
        N = i.useRef(!1),
        C = i.useRef(null),
        R = (0, o.Iu)((e) => e.searchQuery),
        O = c.useStore((e) => e.activeCategoryIndex),
        D = n.map((e) => ((0, s._O)(e.categoryInfo) ? { isNitroLocked: e.categoryInfo.isNitroLocked } : { isNitroLocked: !1 })),
        L = (0, l.Uf)({
            listRef: C,
            searchQuery: R,
            nitroLockedSectionStates: D,
            setShowUpsell: A
        }),
        x = (0, l.Qs)({
            activeCategoryIndex: O,
            isScrolling: N,
            listRef: C,
            onActiveCategoryIndexChange: c.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: R
        }),
        w = i.useCallback(
            (e) => {
                L(e), x(e);
            },
            [L, x]
        );
    return (
        (0, l.Xs)({
            searchQuery: R,
            activeCategoryIndex: O,
            listRef: C
        }),
        i.useImperativeHandle(
            t,
            () => ({
                scrollTo: function () {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return null === (e = C.current) || void 0 === e ? void 0 : e.scrollTo(...n);
                },
                getRowDescriptors: () => {
                    var e, t;
                    return null !== (t = null === (e = C.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : [];
                },
                getSectionDescriptors: () => {
                    var e, t;
                    return null !== (t = null === (e = C.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : [];
                },
                scrollToSectionTop: function () {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return null === (e = C.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n);
                },
                scrollRowIntoView: function () {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return null === (e = C.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n);
                },
                getScrollerNode: function () {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return null === (e = C.current) || void 0 === e ? void 0 : e.getScrollerNode(...n);
                },
                scrollIntoViewNode: function () {
                    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return null === (e = C.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n);
                },
                getListDimensions: function () {
                    for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return null !== (t = null === (e = C.current) || void 0 === e ? void 0 : e.getListDimensions(...r)) && void 0 !== t
                        ? t
                        : {
                              height: -1,
                              totalHeight: -1
                          };
                }
            }),
            []
        ),
        (0, r.jsxs)('div', {
            className: u.wrapper,
            children: [
                R.length > 0 && !d && null != E
                    ? E()
                    : (0, r.jsx)(a.Z, {
                          role: 'none presentation',
                          listPadding: f,
                          onScroll: w,
                          renderRow: _,
                          renderSection: p,
                          renderSectionHeader: h,
                          renderSectionFooter: m,
                          rowCount: v,
                          rowCountBySection: I,
                          rowHeight: b,
                          sectionHeaderHeight: T,
                          sectionFooterHeight: S,
                          stickyHeaders: !0,
                          ref: C
                      }),
                null == y ? void 0 : y(),
                null == g ? void 0 : g()
            ]
        })
    );
});
t.Z = c;
