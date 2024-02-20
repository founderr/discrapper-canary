"use strict";
n.r(t), n.d(t, {
  MenuSubmenuListItem: function() {
    return u
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("222163"),
  a = n("697917"),
  o = n("124299"),
  l = n("639826");

function u(e) {
  let {
    parentItem: t,
    isFocused: n,
    menuSubmenuProps: u,
    rows: c,
    rowHeight: d,
    onScroll: p,
    listClassName: h
  } = e, f = r.useRef(null), E = r.useRef(null), _ = r.useRef(null), m = r.useRef(null), {
    isUsingKeyboardNavigation: S,
    focusIndex: g,
    ...T
  } = u;
  r.useLayoutEffect(() => {
    var e;
    n && ((0, a.ensureItemVisible)(f), null === (e = _.current) || void 0 === e || e.focus())
  }, [n]), r.useEffect(() => {
    if (n && g >= 0 && S) {
      var e;
      null === (e = m.current) || void 0 === e || e.scrollRowIntoView(g)
    }
  }, [n, S, g]);
  let I = r.useCallback(e => c[e], [c]);
  return (0, i.jsxs)("div", {
    ref: f,
    className: l.submenuContainer,
    children: [(0, i.jsx)("div", {
      ref: E
    }), t, n ? (0, i.jsx)(s.ReferencePositionLayer, {
      reference: E,
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      fixed: !0,
      spacing: 4,
      position: "right",
      align: "top",
      children: () => c.length > 0 && (0, i.jsx)("div", {
        className: l.submenuPaddingContainer,
        children: (0, i.jsx)("div", {
          className: l.submenu,
          ...T,
          ref: _,
          children: (0, i.jsx)(o.default, {
            ref: m,
            className: h,
            listPadding: [6, 0, 6, 8],
            onScroll: p,
            renderRow: I,
            rowCount: c.length,
            rowHeight: d
          })
        })
      })
    }) : null]
  })
}