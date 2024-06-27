"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(28546),
  o = n(98528),
  a = n(429155),
  l = n(810462),
  u = n(597294);

function _(e) {
  let {
    categories: t,
    collapsedCategories: n,
    containerWidth: _,
    store: c,
    onSelectItem: d,
    onSearchExpressions: E,
    hasSearchResults: I,
    defaultSearchPlaceholder: T,
    emptySearchPlaceholder: h,
    renderEmptyState: f,
    renderRow: S,
    renderSection: A,
    renderSectionHeader: N,
    renderSectionFooter: m,
    renderInspector: O,
    renderEmptySearchState: R,
    renderCategoryList: p,
    renderHeaderAccessories: g,
    rowHeight: C,
    sectionHeaderHeight: v,
    sectionFooterHeight: L,
    itemNodeWidth: D,
    listPaddingRight: M,
    itemNodeMargin: P,
    listPadding: y,
    gridNavigatorId: U,
    gridNotice: b,
    renderHeader: G
  } = e, w = r.useRef(null), B = r.useRef(null), x = r.useRef(null), k = 0 === t.length, V = (0, s.Iu)(e => e.searchQuery), Z = c.useStore(e => e.inspectedExpressionPosition), H = (0, o.ep)({
    gridWrapperRef: w,
    containerWidth: _,
    showingEmptyState: k
  }), {
    expressionsGrid: F,
    rowCount: Y,
    rowCountBySection: j,
    columnCounts: W,
    gutterWidth: K
  } = (0, o.yi)({
    categories: t,
    collapsedCategories: n,
    gridWidth: H,
    listPaddingRight: M,
    itemNodeWidth: D,
    itemNodeMargin: P
  }), {
    getItemProps: z,
    getRowProps: q,
    gridContainerProps: X,
    handleGridContainerKeyDown: Q,
    isUsingKeyboardNavigation: J
  } = (0, o.t$)({
    columnCounts: W,
    expressionsListRef: B,
    expressionsGrid: F,
    onSelectItem: d,
    store: c,
    gridNavigatorId: U
  }), $ = r.useCallback(e => S(F[e], q(e), {
    isUsingKeyboardNavigation: J.current,
    gutterWidth: K,
    rowIndex: e
  }, t => z(e, t), t => c.setInspectedExpressionPosition(t, e)), [F, z, q, K, J, S, c]), ee = r.useCallback(e => null == A ? void 0 : A(t[e]), [t, A]), et = r.useCallback(e => null == N ? void 0 : N(t[e], e), [t, N]), en = r.useCallback(e => null == m ? void 0 : m(t[e]), [t, m]), ei = r.useCallback(() => {
    var e;
    return null == O ? void 0 : O(null == F ? void 0 : null === (e = F[Z.rowIndex]) || void 0 === e ? void 0 : e[Z.columnIndex])
  }, [F, Z.columnIndex, Z.rowIndex, O]);
  r.useEffect(() => {
    E(V)
  }, [E, V]), r.useEffect(() => c.resetStoreState, [c.resetStoreState]), r.useLayoutEffect(() => {
    var e;
    null === (e = x.current) || void 0 === e || e.focus()
  }, []);
  let er = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.Z, {
      ref: x,
      store: c,
      hasSendableExpressions: !0,
      onKeyDown: Q,
      expressionsListRef: B,
      gridNavigatorId: U,
      defaultSearchPlaceholder: T,
      emptySearchPlaceholder: h
    }), null == g ? void 0 : g()]
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [null != G ? G(er) : (0, i.jsxs)("div", {
      className: u.header,
      children: [" ", er, " "]
    }), k && null != f ? f(u.emptyState) : (0, i.jsxs)(i.Fragment, {
      children: [p(B), null != b && (0, i.jsx)("div", {
        className: u.gridNoticeWrapper,
        children: b
      }), (0, i.jsx)("div", {
        ref: w,
        className: u.listWrapper,
        id: U,
        ...X,
        children: null != H ? (0, i.jsx)(a.Z, {
          ref: B,
          store: c,
          hasSearchResults: I,
          listPadding: y,
          renderRow: $,
          renderSection: null != A ? ee : void 0,
          renderSectionHeader: null != N ? et : void 0,
          renderSectionFooter: null != m ? en : void 0,
          renderInspector: null != O ? ei : void 0,
          renderEmptySearchState: R,
          rowCount: Y,
          rowCountBySection: j,
          rowHeight: C,
          sectionHeaderHeight: v,
          sectionFooterHeight: L
        }) : null
      })]
    })]
  })
}