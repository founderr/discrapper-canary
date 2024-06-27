"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(695464),
  o = n(28546),
  a = n(98528),
  l = n(976845);
let u = r.forwardRef(function(e, t) {
  let {
    store: n,
    hasSearchResults: u,
    listPadding: _,
    renderRow: c,
    renderSection: d,
    renderSectionHeader: E,
    renderSectionFooter: I,
    renderInspector: T,
    renderEmptySearchState: h,
    rowCount: f,
    rowCountBySection: S,
    rowHeight: A,
    sectionHeaderHeight: N,
    sectionFooterHeight: m
  } = e, O = r.useRef(!1), R = r.useRef(null), p = (0, o.Iu)(e => e.searchQuery), g = n.useStore(e => e.activeCategoryIndex), C = (0, a.Qs)({
    activeCategoryIndex: g,
    isScrolling: O,
    listRef: R,
    onActiveCategoryIndexChange: n.setActiveCategoryIndex,
    scrollOffset: 20,
    searchQuery: p
  });
  return (0, a.Xs)({
    searchQuery: p,
    activeCategoryIndex: g,
    listRef: R
  }), r.useImperativeHandle(t, () => ({
    scrollTo: function() {
      for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return null === (e = R.current) || void 0 === e ? void 0 : e.scrollTo(...n)
    },
    getRowDescriptors: () => {
      var e, t;
      return null !== (t = null === (e = R.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
    },
    getSectionDescriptors: () => {
      var e, t;
      return null !== (t = null === (e = R.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
    },
    scrollToSectionTop: function() {
      for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return null === (e = R.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
    },
    scrollRowIntoView: function() {
      for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return null === (e = R.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
    },
    getScrollerNode: function() {
      for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return null === (e = R.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
    },
    scrollIntoViewNode: function() {
      for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      return null === (e = R.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
    },
    getListDimensions: function() {
      for (var e, t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
      return null !== (t = null === (e = R.current) || void 0 === e ? void 0 : e.getListDimensions(...i)) && void 0 !== t ? t : {
        height: -1,
        totalHeight: -1
      }
    }
  }), []), (0, i.jsxs)("div", {
    className: l.wrapper,
    children: [p.length > 0 && !u && null != h ? h() : (0, i.jsx)(s.Z, {
      role: "none presentation",
      listPadding: _,
      onScroll: C,
      renderRow: c,
      renderSection: d,
      renderSectionHeader: E,
      renderSectionFooter: I,
      rowCount: f,
      rowCountBySection: S,
      rowHeight: A,
      sectionHeaderHeight: N,
      sectionFooterHeight: m,
      stickyHeaders: !0,
      ref: R
    }), null == T ? void 0 : T()]
  })
});
t.Z = u