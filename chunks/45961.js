"use strict";
i.r(t), i.d(t, {
  useExpressionPickerGridWidth: function() {
    return E
  },
  useSynchronizedScrollPositionForActiveCategoryIndex: function() {
    return m
  },
  useSynchronizedActiveCategoryIndexForScrollPosition: function() {
    return I
  },
  useExpressionPickerGridKeyboardNavigation: function() {
    return p
  },
  useExpressionGrid: function() {
    return g
  },
  useKeyboardNavigation: function() {
    return _
  }
}), i("222007"), i("424973");
var n = i("884691"),
  s = i("917351"),
  l = i.n(s),
  r = i("880317"),
  a = i("585463"),
  o = i("617258"),
  u = i("769846"),
  c = i("246511"),
  d = i("49111");
let f = (0, o.cssValueToNumber)(u.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  E = e => {
    let {
      gridWrapperRef: t,
      containerWidth: i,
      showingEmptyState: s,
      listPaddingLeft: r = f,
      listScrollbarWidth: a = 8
    } = e, [o, u] = n.useState(void 0), c = n.useCallback(() => {
      if (null == t.current) return null;
      u(t.current.offsetWidth - r - a)
    }, [t, r, a]);
    return n.useLayoutEffect(() => {
      c()
    }, [i, c, s]), n.useEffect(() => {
      let e = l.debounce(c, 250);
      return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, [c]), o
  },
  m = e => {
    let {
      activeCategoryIndex: t,
      listRef: i,
      searchQuery: s
    } = e, l = n.useRef(s), r = n.useRef(!0);
    n.useLayoutEffect(() => {
      if ("" === s && "" !== l.current) {
        var e;
        null === (e = i.current) || void 0 === e || e.scrollToSectionTop(t)
      }
      l.current = s
    }, [s, t, i]), n.useLayoutEffect(() => {
      if (r.current) {
        var e;
        null === (e = i.current) || void 0 === e || e.scrollToSectionTop(t), r.current = !1
      }
    }, [t, i]), n.useEffect(() => {
      l.current = s
    }, [s])
  },
  I = e => {
    let {
      activeCategoryIndex: t,
      listRef: i,
      isScrolling: s,
      searchQuery: r,
      scrollOffset: a = 0,
      onActiveCategoryIndexChange: o
    } = e, u = n.useRef(d.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), c = n.useMemo(() => l.debounce(() => {
      s.current = !1
    }, 250), [s]), f = n.useMemo(() => l.debounce(e => {
      "" === r && (window.cancelAnimationFrame(u.current), u.current = window.requestAnimationFrame(() => {
        var n;
        let s = null === (n = i.current) || void 0 === n ? void 0 : n.getSectionDescriptors();
        if (null == s) return;
        let l = s.findIndex((t, i) => {
            let n = s[i + 1],
              l = e + a >= t.offset.top,
              r = null != n && e + a < n.offset.top;
            return null != n && !l && !r || l && r || l && null == n
          }),
          r = -1 === l ? 0 : l;
        t !== r && o(r)
      }))
    }, 50), [r, i, t, a, o]), E = n.useCallback(e => {
      s.current = !0, c(), f(e)
    }, [s, c, f]);
    return E
  },
  p = e => {
    let {
      columnCounts: t,
      gridNavigatorId: i,
      itemGrid: s,
      itemList: l,
      onGridNavigatorItemSelect: a,
      onGridNavigatorPositionChange: o
    } = e, u = n.useRef(!1), c = n.useCallback((e, t) => {
      let i = s[t];
      if (null != i) return i[e]
    }, [s]), d = n.useCallback(e => {
      let {
        focusedX: t,
        focusedY: i
      } = e;
      u.current = !0;
      let n = c(t, i);
      if (null == n) return;
      let {
        visibleRowIndex: s,
        columnIndex: r
      } = n;
      o(r, s), null != l.current && l.current.scrollRowIntoView(i)
    }, [c, l, o]), f = n.useCallback((e, t, i) => {
      switch (i.type) {
        case r.ActionType.NAVIGATE_UP:
        case r.ActionType.NAVIGATE_DOWN:
        case r.ActionType.NAVIGATE_RIGHT:
        case r.ActionType.NAVIGATE_LEFT:
        case r.ActionType.NAVIGATE_INLINE_START:
        case r.ActionType.NAVIGATE_INLINE_END:
        case r.ActionType.NAVIGATE_START:
        case r.ActionType.NAVIGATE_END:
        case r.ActionType.NAVIGATE_CROSSLINE_START:
        case r.ActionType.NAVIGATE_CROSSLINE_END:
          d(t)
      }
    }, [d]), E = n.useCallback((e, t, i) => {
      let n = c(e, t);
      null != n && a(n, i)
    }, [c, a]), {
      dispatch: m,
      getItemProps: I,
      getRowProps: p,
      getContainerProps: g
    } = (0, r.useGridNavigator)({
      navId: i,
      columnCounts: t,
      onDispatch: f,
      onSelect: E,
      autoFocusElement: !1,
      useVirtualFocus: !0
    }), {
      gridContainerProps: _,
      handleGridContainerKeyDown: S
    } = n.useMemo(() => {
      let e = g();
      return {
        gridContainerProps: e,
        handleGridContainerKeyDown: e.onKeyDown
      }
    }, [g]);
    return n.useEffect(() => {
      let e = () => {
        u.current = !1
      };
      return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e)
    }, []), {
      gridDispatch: m,
      getItemProps: I,
      getRowProps: p,
      gridContainerProps: _,
      handleGridContainerKeyDown: S,
      isUsingKeyboardNavigation: u
    }
  };

function g(e) {
  let {
    categories: t,
    collapsedCategories: i,
    gridWidth: s = 0,
    listPaddingRight: l = 0,
    itemNodeWidth: r,
    itemNodeMargin: a = 0
  } = e;
  return n.useMemo(() => {
    let e = Math.max(1, Math.floor((s - l + a) / (r + a))),
      n = Math.floor(Math.max(a, (s - l - r * e) / (e - 1))),
      o = [],
      u = [],
      c = [],
      d = 0,
      f = 0,
      E = 0;
    if (0 !== s) {
      let n = function(t, i) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          s = Math.ceil(t.length / e);
        u[f] = n ? 0 : s;
        for (let l = 0; l < s; l++) {
          let s = l * e,
            r = s + e,
            a = t.slice(s, r).map((e, t) => ({
              item: e,
              gridSectionIndex: f,
              rowIndex: d,
              columnIndex: t,
              visibleRowIndex: E,
              category: i
            }));
          !n && (E++, c.push(a), o.push(a.length)), d++
        }
        f++
      };
      for (let e of t)
        if (e.items.length > 0) {
          var m;
          n(e.items, e.categoryInfo.type, null !== (m = null == i ? void 0 : i.has("".concat(e.key))) && void 0 !== m && m)
        }
    }
    return {
      expressionsGrid: c,
      rowCount: d,
      rowCountBySection: u,
      columnCounts: o,
      gutterWidth: n
    }
  }, [t, i, s, a, r, l])
}

function _(e) {
  let {
    columnCounts: t,
    expressionsGrid: i,
    expressionsListRef: s,
    store: l,
    gridNavigatorId: r,
    onSelectItem: o
  } = e, {
    gridDispatch: u,
    getItemProps: d,
    getRowProps: f,
    gridContainerProps: E,
    handleGridContainerKeyDown: m,
    isUsingKeyboardNavigation: I
  } = p({
    columnCounts: t,
    gridNavigatorId: r,
    itemGrid: i,
    itemList: s,
    onGridNavigatorItemSelect: o,
    onGridNavigatorPositionChange: l.setInspectedExpressionPosition
  });
  return n.useEffect(() => l.useStore.subscribe(e => {
    if (null == e) return;
    let {
      columnIndex: t,
      rowIndex: i,
      source: n
    } = e;
    n !== c.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && u({
      type: a.GridActionType.SET_FOCUSED_POSITION,
      x: t,
      y: i
    })
  }, e => e.inspectedExpressionPosition), [u, l]), {
    getItemProps: d,
    getRowProps: f,
    gridContainerProps: E,
    handleGridContainerKeyDown: m,
    isUsingKeyboardNavigation: I
  }
}