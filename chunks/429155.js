var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(218867),
    s = n(74538),
    l = n(28546),
    u = n(98528),
    c = n(729480);
let d = 20,
    _ = a.forwardRef(function (e, t) {
        let { categories: n, store: r, hasSearchResults: _, listPadding: E, renderRow: f, renderSection: h, renderSectionHeader: p, renderSectionFooter: m, renderInspector: I, renderEmptySearchState: T, rowCount: g, rowCountBySection: S, rowHeight: A, sectionHeaderHeight: v, sectionFooterHeight: N, renderUpsell: O, setShowUpsell: R } = e,
            C = a.useRef(!1),
            y = a.useRef(null),
            b = (0, l.Iu)((e) => e.searchQuery),
            L = r.useStore((e) => e.activeCategoryIndex),
            D = n.map((e) => ((0, s._O)(e.categoryInfo) ? { isNitroLocked: e.categoryInfo.isNitroLocked } : { isNitroLocked: !1 })),
            M = (0, u.Uf)({
                listRef: y,
                searchQuery: b,
                nitroLockedSectionStates: D,
                setShowUpsell: R
            }),
            P = (0, u.Qs)({
                activeCategoryIndex: L,
                isScrolling: C,
                listRef: y,
                onActiveCategoryIndexChange: r.setActiveCategoryIndex,
                scrollOffset: d,
                searchQuery: b
            }),
            U = a.useCallback(
                (e) => {
                    M(e), P(e);
                },
                [M, P]
            );
        return (
            (0, u.Xs)({
                searchQuery: b,
                activeCategoryIndex: L,
                listRef: y
            }),
            a.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = y.current) || void 0 === e ? void 0 : e.scrollTo(...n);
                    },
                    getRowDescriptors: () => {
                        var e, t;
                        return null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : [];
                    },
                    getSectionDescriptors: () => {
                        var e, t;
                        return null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : [];
                    },
                    scrollToSectionTop: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = y.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n);
                    },
                    scrollRowIntoView: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = y.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n);
                    },
                    getScrollerNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = y.current) || void 0 === e ? void 0 : e.getScrollerNode(...n);
                    },
                    scrollIntoViewNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null === (e = y.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n);
                    },
                    getListDimensions: function () {
                        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.getListDimensions(...r)) && void 0 !== t
                            ? t
                            : {
                                  height: -1,
                                  totalHeight: -1
                              };
                    }
                }),
                []
            ),
            (0, i.jsxs)('div', {
                className: c.wrapper,
                children: [
                    b.length > 0 && !_ && null != T
                        ? T()
                        : (0, i.jsx)(o.Z, {
                              role: 'none presentation',
                              listPadding: E,
                              onScroll: U,
                              renderRow: f,
                              renderSection: h,
                              renderSectionHeader: p,
                              renderSectionFooter: m,
                              rowCount: g,
                              rowCountBySection: S,
                              rowHeight: A,
                              sectionHeaderHeight: v,
                              sectionFooterHeight: N,
                              stickyHeaders: !0,
                              ref: y
                          }),
                    null == O ? void 0 : O(),
                    null == I ? void 0 : I()
                ]
            })
        );
    });
t.Z = _;
