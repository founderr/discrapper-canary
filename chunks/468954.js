n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(28546),
    s = n(98528),
    o = n(429155),
    l = n(810462),
    u = n(767896);
function c(e) {
    let { categories: t, collapsedCategories: n, containerWidth: c, store: d, onSelectItem: f, onSearchExpressions: _, hasSearchResults: h, defaultSearchPlaceholder: p, emptySearchPlaceholder: m, renderEmptyState: g, renderRow: E, renderSection: v, renderSectionHeader: I, renderSectionFooter: S, renderInspector: b, renderEmptySearchState: T, renderCategoryList: y, renderHeaderAccessories: A, rowHeight: N, sectionHeaderHeight: C, sectionFooterHeight: R, itemNodeWidth: O, listPaddingRight: D, itemNodeMargin: L, listPadding: x, gridNavigatorId: w, gridNotice: M, renderHeader: P, renderUpsell: k, setShowUpsell: U } = e,
        G = i.useRef(null),
        B = i.useRef(null),
        Z = i.useRef(null),
        F = 0 === t.length,
        V = (0, a.Iu)((e) => e.searchQuery),
        j = d.useStore((e) => e.inspectedExpressionPosition),
        H = (0, s.ep)({
            gridWrapperRef: G,
            containerWidth: c,
            showingEmptyState: F
        }),
        {
            expressionsGrid: Y,
            rowCount: W,
            rowCountBySection: K,
            columnCounts: z,
            gutterWidth: q
        } = (0, s.yi)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: D,
            itemNodeWidth: O,
            itemNodeMargin: L
        }),
        {
            getItemProps: Q,
            getRowProps: X,
            gridContainerProps: J,
            handleGridContainerKeyDown: $,
            isUsingKeyboardNavigation: ee
        } = (0, s.t$)({
            columnCounts: z,
            expressionsListRef: B,
            expressionsGrid: Y,
            onSelectItem: f,
            store: d,
            gridNavigatorId: w
        }),
        et = i.useCallback(
            (e, t) =>
                E(
                    Y[e],
                    X(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: W,
                        sectionIndex: t.sectionIndex
                    },
                    (t) => Q(e, t),
                    (t) => d.setInspectedExpressionPosition(t, e)
                ),
            [Y, Q, X, q, ee, E, d, W]
        ),
        en = i.useCallback((e) => (null == v ? void 0 : v(t[e])), [t, v]),
        er = i.useCallback((e) => (null == I ? void 0 : I(t[e], e)), [t, I]),
        ei = i.useCallback((e) => (null == S ? void 0 : S(t[e], e)), [t, S]),
        ea = i.useCallback(() => {
            var e;
            return null == b ? void 0 : b(null == Y ? void 0 : null === (e = Y[j.rowIndex]) || void 0 === e ? void 0 : e[j.columnIndex]);
        }, [Y, j.columnIndex, j.rowIndex, b]);
    i.useEffect(() => {
        _(V);
    }, [_, V]),
        i.useEffect(() => {
            var e, t;
            d.setBottomPosition(null !== (t = null === (e = G.current) || void 0 === e ? void 0 : e.getBoundingClientRect().bottom) && void 0 !== t ? t : null);
        }),
        i.useEffect(() => d.resetStoreState, [d.resetStoreState]),
        i.useLayoutEffect(() => {
            var e;
            null === (e = Z.current) || void 0 === e || e.focus();
        }, []);
    let es = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Z, {
                ref: Z,
                store: d,
                hasSendableExpressions: !0,
                onKeyDown: $,
                expressionsListRef: B,
                gridNavigatorId: w,
                defaultSearchPlaceholder: p,
                emptySearchPlaceholder: m
            }),
            null == A ? void 0 : A()
        ]
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != P
                ? P(es)
                : (0, r.jsxs)('div', {
                      className: u.header,
                      children: [' ', es, ' ']
                  }),
            F && null != g
                ? g(u.emptyState)
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          y(B),
                          null != M &&
                              (0, r.jsx)('div', {
                                  className: u.gridNoticeWrapper,
                                  children: M
                              }),
                          (0, r.jsx)('div', {
                              ref: G,
                              className: u.listWrapper,
                              id: w,
                              ...J,
                              children:
                                  null != H
                                      ? (0, r.jsx)(o.Z, {
                                            categories: t,
                                            ref: B,
                                            store: d,
                                            hasSearchResults: h,
                                            listPadding: x,
                                            renderRow: et,
                                            renderSection: null != v ? en : void 0,
                                            renderSectionHeader: null != I ? er : void 0,
                                            renderSectionFooter: null != S ? ei : void 0,
                                            renderInspector: null != b ? ea : void 0,
                                            renderEmptySearchState: T,
                                            rowCount: W,
                                            rowCountBySection: K,
                                            rowHeight: N,
                                            sectionHeaderHeight: C,
                                            sectionFooterHeight: R,
                                            renderUpsell: k,
                                            setShowUpsell: U
                                        })
                                      : null
                          })
                      ]
                  })
        ]
    });
}
