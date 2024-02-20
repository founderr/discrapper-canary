"use strict";
n.r(t), n.d(t, {
  createScroller: function() {
    return u
  }
}), n("70102");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("15542"),
  l = n("942005");

function u(e, t) {
  let n = (0, l.getScrollbarSpecs)(e);
  return r.forwardRef(function(s, u) {
    let {
      children: c,
      className: d,
      dir: p = "ltr",
      orientation: h = "vertical",
      paddingFix: f = !0,
      fade: E = !1,
      onScroll: _,
      style: m,
      ...S
    } = s, g = r.useRef(null), T = (0, l.usePaddingFixes)({
      paddingFix: f,
      orientation: h,
      dir: p,
      className: d,
      scrollerRef: g,
      specs: n
    });
    return (0, i.jsx)("div", {
      ref: e => {
        "function" == typeof u ? u(e) : null != u && (u.current = e), g.current = e
      },
      className: a(d, {
        [e]: !0,
        [t]: E
      }),
      style: (0, l.getMergedOrientationStyles)(m, h),
      dir: p,
      ...S,
      children: (0, i.jsxs)(o.FocusRingScope, {
        containerRef: g,
        children: [c, T]
      })
    })
  })
}