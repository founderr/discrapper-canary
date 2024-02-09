"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("538282"),
  s = n("45961"),
  r = n("794707"),
  o = n("195638"),
  u = n("44058");

function d(e) {
  let {
    categories: t,
    collapsedCategories: n,
    containerWidth: d,
    store: c,
    onSelectItem: f,
    onSearchExpressions: p,
    hasSearchResults: m,
    defaultSearchPlaceholder: h,
    emptySearchPlaceholder: E,
    renderEmptyState: S,
    renderRow: g,
    renderSection: C,
    renderSectionHeader: T,
    renderSectionFooter: v,
    renderInspector: I,
    renderEmptySearchState: _,
    renderCategoryList: y,
    renderHeaderAccessories: A,
    rowHeight: N,
    sectionHeaderHeight: x,
    sectionFooterHeight: O,
    itemNodeWidth: R,
    listPaddingRight: M,
    itemNodeMargin: L,
    listPadding: P,
    gridNavigatorId: b,
    gridNotice: j,
    renderHeader: U
  } = e, D = i.useRef(null), k = i.useRef(null), w = i.useRef(null), F = 0 === t.length, G = (0, a.useExpressionPickerStore)(e => e.searchQuery), B = c.useStore(e => e.inspectedExpressionPosition), H = (0, s.useExpressionPickerGridWidth)({
    gridWrapperRef: D,
    containerWidth: d,
    showingEmptyState: F
  }), {
    expressionsGrid: V,
    rowCount: K,
    rowCountBySection: W,
    columnCounts: Y,
    gutterWidth: z
  } = (0, s.useExpressionGrid)({
    categories: t,
    collapsedCategories: n,
    gridWidth: H,
    listPaddingRight: M,
    itemNodeWidth: R,
    itemNodeMargin: L
  }), {
    getItemProps: J,
    getRowProps: q,
    gridContainerProps: Z,
    handleGridContainerKeyDown: Q,
    isUsingKeyboardNavigation: X
  } = (0, s.useKeyboardNavigation)({
    columnCounts: Y,
    expressionsListRef: k,
    expressionsGrid: V,
    onSelectItem: f,
    store: c,
    gridNavigatorId: b
  }), $ = i.useCallback(e => {
    let t = V[e];
    return g(t, q(e), {
      isUsingKeyboardNavigation: X.current,
      gutterWidth: z,
      rowIndex: e
    }, t => J(e, t), t => c.setInspectedExpressionPosition(t, e))
  }, [V, J, q, z, X, g, c]), ee = i.useCallback(e => null == C ? void 0 : C(t[e]), [t, C]), et = i.useCallback(e => null == T ? void 0 : T(t[e], e), [t, T]), en = i.useCallback(e => null == v ? void 0 : v(t[e]), [t, v]), el = i.useCallback(() => {
    var e;
    return null == I ? void 0 : I(null == V ? void 0 : null === (e = V[B.rowIndex]) || void 0 === e ? void 0 : e[B.columnIndex])
  }, [V, B.columnIndex, B.rowIndex, I]);
  i.useEffect(() => {
    p(G)
  }, [p, G]), i.useEffect(() => c.resetStoreState, [c.resetStoreState]), i.useLayoutEffect(() => {
    var e;
    null === (e = w.current) || void 0 === e || e.focus()
  }, []);
  let ei = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.default, {
      ref: w,
      store: c,
      hasSendableExpressions: !0,
      onKeyDown: Q,
      expressionsListRef: k,
      gridNavigatorId: b,
      defaultSearchPlaceholder: h,
      emptySearchPlaceholder: E
    }), null == A ? void 0 : A()]
  });
  return (0, l.jsxs)(l.Fragment, {
    children: [null != U ? U(ei) : (0, l.jsxs)("div", {
      className: u.header,
      children: [" ", ei, " "]
    }), F && null != S ? S(u.emptyState) : (0, l.jsxs)(l.Fragment, {
      children: [y(k), null != j && (0, l.jsx)("div", {
        className: u.gridNoticeWrapper,
        children: j
      }), (0, l.jsx)("div", {
        ref: D,
        className: u.listWrapper,
        id: b,
        ...Z,
        children: null != H ? (0, l.jsx)(r.default, {
          ref: k,
          store: c,
          hasSearchResults: m,
          listPadding: P,
          renderRow: $,
          renderSection: null != C ? ee : void 0,
          renderSectionHeader: null != T ? et : void 0,
          renderSectionFooter: null != v ? en : void 0,
          renderInspector: null != I ? el : void 0,
          renderEmptySearchState: _,
          rowCount: K,
          rowCountBySection: W,
          rowHeight: N,
          sectionHeaderHeight: x,
          sectionFooterHeight: O
        }) : null
      })]
    })]
  })
}