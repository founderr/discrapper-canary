"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(143927),
  o = n(260866),
  a = n(461745),
  l = n(806966),
  u = n(28546),
  _ = n(174466);
let c = r.forwardRef(function(e, t) {
  let {
    store: n,
    hasSendableExpressions: c,
    onKeyDown: d,
    gridNavigatorId: E,
    expressionsListRef: I,
    defaultSearchPlaceholder: T,
    emptySearchPlaceholder: h
  } = e, f = r.useRef(null), [S, A] = (0, u.Iu)(e => [e.searchQuery, e.isSearchSuggestion], s.Z), N = n.useStore(e => e.searchPlaceholder), m = n.useStore(e => e.inspectedExpressionPosition, s.Z), O = r.useCallback(e => {
    var t;
    n.setActiveCategoryIndex("" === e ? 0 : l.c), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, u.ql)(e), null === (t = I.current) || void 0 === t || t.scrollTo(0)
  }, [I, n]), p = r.useCallback(() => {
    (0, u.ql)("")
  }, []);
  return r.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null === (e = f.current) || void 0 === e ? void 0 : e.focus()
    }
  })), r.useLayoutEffect(() => {
    if (A) {
      var e;
      null === (e = f.current) || void 0 === e || e.focus()
    }
  }, [A]), (0, i.jsx)("div", {
    className: _.wrapper,
    children: (0, i.jsx)(a.ZP, {
      autoFocus: c,
      disabled: !c,
      query: S,
      ref: f,
      size: a.ZP.Sizes.MEDIUM,
      placeholder: null != N ? N : c || null == h ? T : h,
      onClear: p,
      onKeyDown: d,
      onQueryChange: O,
      className: _.__invalid_searchBar,
      preventEscapePropagation: !1,
      useKeyboardNavigation: !1,
      inputProps: {
        "aria-haspopup": "grid",
        "aria-controls": E,
        "aria-expanded": !0,
        "aria-activedescendant": (0, o.NE)(E, m.columnIndex, m.rowIndex)
      }
    })
  })
});
t.Z = c