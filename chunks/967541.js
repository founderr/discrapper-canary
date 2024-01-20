"use strict";
n.r(t), n.d(t, {
  MenuSubmenuListItem: function() {
    return u
  }
});
var i = n("37983"),
  s = n("884691"),
  r = n("222163"),
  a = n("697917"),
  o = n("124299"),
  l = n("946032");

function u(e) {
  let {
    parentItem: t,
    isFocused: n,
    menuSubmenuProps: u,
    rows: d,
    rowHeight: c,
    onScroll: f,
    listClassName: _
  } = e, h = s.useRef(null), g = s.useRef(null), m = s.useRef(null), E = s.useRef(null), {
    isUsingKeyboardNavigation: p,
    focusIndex: v,
    ...S
  } = u;
  s.useLayoutEffect(() => {
    var e;
    n && ((0, a.ensureItemVisible)(h), null === (e = m.current) || void 0 === e || e.focus())
  }, [n]), s.useEffect(() => {
    if (n && v >= 0 && p) {
      var e;
      null === (e = E.current) || void 0 === e || e.scrollRowIntoView(v)
    }
  }, [n, p, v]);
  let T = s.useCallback(e => d[e], [d]);
  return (0, i.jsxs)("div", {
    ref: h,
    className: l.submenuContainer,
    children: [(0, i.jsx)("div", {
      ref: g
    }), t, n ? (0, i.jsx)(r.ReferencePositionLayer, {
      reference: g,
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      fixed: !0,
      spacing: 4,
      position: "right",
      align: "top",
      children: () => d.length > 0 && (0, i.jsx)("div", {
        className: l.submenuPaddingContainer,
        children: (0, i.jsx)("div", {
          className: l.submenu,
          ...S,
          ref: m,
          children: (0, i.jsx)(o.default, {
            ref: E,
            className: _,
            listPadding: [6, 0, 6, 8],
            onScroll: f,
            renderRow: T,
            rowCount: d.length,
            rowHeight: c
          })
        })
      })
    }) : null]
  })
}