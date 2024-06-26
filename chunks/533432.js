"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(143927),
  l = n(260866),
  u = n(461745),
  _ = n(806966),
  c = n(28546),
  d = n(149203),
  E = n(981631),
  I = n(689938),
  T = n(919854);
let h = r.forwardRef(function(e, t) {
  let {
    emojiListRef: n,
    gridNavigatorId: s,
    isFullRow: h,
    onKeyDown: f,
    onFocus: S,
    autoFocus: N,
    className: A,
    defaultSearchPlaceholder: m
  } = e, O = r.useRef(null), p = (0, c.Iu)(e => e.searchQuery), [R, g] = _.kJ.useStore(e => [e.inspectedExpressionPosition, e.searchPlaceholder], a.Z), C = r.useCallback(e => {
    var t;
    _.kJ.setActiveCategoryIndex("" === e ? 0 : d.c), _.kJ.setInspectedExpressionPosition(0, 0), _.kJ.setSearchPlaceholder(null), (0, c.ql)(e), null === (t = n.current) || void 0 === t || t.scrollTo(0)
  }, [n]), v = r.useCallback(() => {
    (0, c.ql)("")
  }, []);
  return r.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null === (e = O.current) || void 0 === e ? void 0 : e.focus()
    }
  })), (0, i.jsx)(u.ZP, {
    autoFocus: N,
    query: p,
    ref: O,
    size: u.ZP.Sizes.MEDIUM,
    placeholder: null != g ? g : m,
    onClear: v,
    onKeyDown: e => {
      switch (e.keyCode) {
        case E.yXg.ARROW_LEFT:
        case E.yXg.ARROW_RIGHT:
        case E.yXg.ARROW_UP:
        case E.yXg.ARROW_DOWN:
          document.activeElement !== e.target && e.preventDefault()
      }
      f(e)
    },
    onFocus: S,
    onQueryChange: C,
    className: o()(A, {
      [T.searchBarFullRow]: h
    }),
    preventEscapePropagation: !1,
    useKeyboardNavigation: !1,
    inputProps: {
      "aria-label": I.Z.Messages.SEARCH_EMOJIS,
      "aria-haspopup": "grid",
      "aria-controls": s,
      "aria-expanded": !0,
      "aria-activedescendant": (0, l.NE)(s, R.columnIndex, R.rowIndex)
    }
  })
});
t.Z = r.memo(h)