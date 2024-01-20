"use strict";
n.r(t), n.d(t, {
  MenuSubmenuItem: function() {
    return c
  }
});
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("222163"),
  l = n("697917"),
  u = n("670914"),
  d = n("946032");

function c(e) {
  let {
    subMenuClassName: t,
    parentItem: n,
    isFocused: r,
    menuSubmenuProps: c,
    renderSubmenu: f
  } = e, {
    focusIndex: _,
    isUsingKeyboardNavigation: h,
    ...g
  } = c, m = s.useRef(null), E = s.useRef(null), p = s.useRef(null);
  return s.useLayoutEffect(() => {
    var e;
    r && ((0, l.ensureItemVisible)(m), null === (e = p.current) || void 0 === e || e.focus())
  }, [r]), (0, i.jsxs)("div", {
    ref: m,
    className: d.submenuContainer,
    children: [(0, i.jsx)("div", {
      ref: E
    }), n, r ? (0, i.jsx)(o.ReferencePositionLayer, {
      reference: E,
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      fixed: !0,
      spacing: 4,
      position: "right",
      align: "top",
      children: () => (0, i.jsx)("div", {
        className: d.submenuPaddingContainer,
        children: (0, i.jsx)("div", {
          className: a(d.submenu, t),
          ...g,
          ref: p,
          children: (0, i.jsx)(u.ScrollerThin, {
            className: d.scroller,
            children: f()
          })
        })
      })
    }) : null]
  })
}