"use strict";
i.r(t), i.d(t, {
  default: function() {
    return f
  }
});
var n = i("37983"),
  s = i("884691"),
  l = i("414456"),
  r = i.n(l),
  a = i("124299"),
  o = i("538282"),
  u = i("49111"),
  c = i("742773");
let d = e => {
  let {
    activeIndex: t,
    categoryListRef: i,
    getScrollOffsetForIndex: n
  } = e, l = s.useRef(u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), r = s.useRef(t);
  return s.useEffect(() => {
    null != t && t !== r.current && (l.current !== u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(l.current), l.current = window.requestAnimationFrame(() => {
      var e;
      if (null == i.current) return;
      let s = t > (null !== (e = r.current) && void 0 !== e ? e : -1),
        a = null != n ? n(t, s) : 0;
      i.current.scrollRowIntoView(t, {
        animate: !0,
        offset: a
      }), l.current = u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID, r.current = t
    }))
  }, [t, i, n]), {
    categoryListRef: i
  }
};
var f = function(e) {
  let {
    categoryListRef: t,
    expressionsListRef: i,
    categories: l,
    store: u,
    children: f,
    className: E,
    listPadding: m,
    rowCount: I,
    getScrollOffsetForIndex: p,
    categoryHeight: g,
    onScroll: _,
    renderCategoryListItem: S,
    rowCountBySection: h,
    renderSection: C
  } = e, T = u.useStore(e => e.activeCategoryIndex);
  d({
    activeIndex: T,
    categoryListRef: t,
    getScrollOffsetForIndex: p
  });
  let N = s.useCallback(e => {
      let {
        searchQuery: t
      } = o.useExpressionPickerStore.getState();
      if (u.setActiveCategoryIndex(e), "" !== t)(0, o.setSearchQuery)("");
      else {
        var n;
        null === (n = i.current) || void 0 === n || n.scrollToSectionTop(e)
      }
    }, [i, u]),
    v = s.useCallback(e => S(l[e], e, () => N(e), T === e), [T, l, N, S]),
    A = s.useMemo(() => "function" == typeof g ? e => g(l[e], e) : g, [l, g]);
  return (0, n.jsxs)("div", {
    className: r(c.wrapper, E),
    children: [(0, n.jsx)(a.default, {
      listPadding: m,
      onScroll: _,
      ref: t,
      renderRow: v,
      rowCount: I,
      rowHeight: A,
      hideScrollbar: !0,
      rowCountBySection: h,
      renderSection: C
    }), null == f ? void 0 : f(N)]
  })
}