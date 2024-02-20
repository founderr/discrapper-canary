"use strict";
n.r(t), n.d(t, {
  MenuSubmenuItem: function() {
    return d
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("222163"),
  l = n("697917"),
  u = n("670914"),
  c = n("639826");

function d(e) {
  let {
    subMenuClassName: t,
    parentItem: n,
    isFocused: s,
    menuSubmenuProps: d,
    renderSubmenu: p
  } = e, {
    focusIndex: h,
    isUsingKeyboardNavigation: f,
    ...E
  } = d, _ = r.useRef(null), m = r.useRef(null), S = r.useRef(null);
  return r.useLayoutEffect(() => {
    var e;
    s && ((0, l.ensureItemVisible)(_), null === (e = S.current) || void 0 === e || e.focus())
  }, [s]), (0, i.jsxs)("div", {
    ref: _,
    className: c.submenuContainer,
    children: [(0, i.jsx)("div", {
      ref: m
    }), n, s ? (0, i.jsx)(o.ReferencePositionLayer, {
      reference: m,
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      fixed: !0,
      spacing: 4,
      position: "right",
      align: "top",
      children: () => (0, i.jsx)("div", {
        className: c.submenuPaddingContainer,
        children: (0, i.jsx)("div", {
          className: a(c.submenu, t),
          ...E,
          ref: S,
          children: (0, i.jsx)(u.ScrollerThin, {
            className: c.scroller,
            children: p()
          })
        })
      })
    }) : null]
  })
}