"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("434650"),
  o = n("393903"),
  u = n("353093"),
  d = n("979264"),
  c = n("267461");
t.default = l.memo(function(e) {
  let {
    children: t,
    isOverlay: n,
    contextGuildId: s,
    ...f
  } = e, h = l.useRef(null), [m, p] = l.useState({
    maskImage: "none"
  }), E = l.useCallback(() => {
    var e, t;
    if (n) {
      p({
        maskImage: "none"
      });
      return
    }
    let a = null === (e = C.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
      l = null === (t = h.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
    if (null == a || null == l) {
      p({
        maskImage: "none"
      });
      return
    }
    let s = l.right - a.right,
      i = l.width - s;
    if (i > l.width) {
      p({
        maskImage: "none"
      });
      return
    }
    p({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(i, "px)")
    })
  }, []), C = (0, o.useResizeObserver)(E), g = (0, u.useShouldDisplayClanTag)(f.userId, s);
  l.useEffect(() => {
    null != C.current && E()
  }, [g]);
  let S = (0, r.useIsVisible)(E);
  return (0, a.jsxs)("div", {
    className: i()(c.container, n && c.isOverlayContainer),
    ref: C,
    children: [(0, a.jsx)("div", {
      className: c.usernameContainer,
      children: t
    }), (0, a.jsx)("div", {
      className: c.chipletParent,
      ref: S,
      children: (0, a.jsx)("span", {
        className: i()(c.chipletContainer, !g && n && c.noPadding),
        ref: h,
        style: m,
        children: (0, a.jsx)(d.default, {
          ...f,
          contextGuildId: s,
          className: i()(f.className, n && c.isOverlayTag)
        })
      })
    })]
  })
})