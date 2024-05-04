"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("434650"),
  o = n("393903"),
  u = n("979264"),
  d = n("915432");
t.default = l.memo(function(e) {
  let {
    children: t,
    isOverlay: n,
    ...s
  } = e, c = l.useRef(null), [f, h] = l.useState({
    maskImage: "none"
  }), m = l.useCallback(() => {
    var e, t;
    if (n) {
      h({
        maskImage: "none"
      });
      return
    }
    let a = null === (e = p.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
      l = null === (t = c.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
    if (null == a || null == l) {
      h({
        maskImage: "none"
      });
      return
    }
    let s = l.right - a.right,
      i = l.width - s;
    if (i > l.width) {
      h({
        maskImage: "none"
      });
      return
    }
    h({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(i, "px)")
    })
  }, []), p = (0, o.useResizeObserver)(m), E = (0, u.useShouldDisplayClanTag)(s.userId);
  l.useEffect(() => {
    null != p.current && m()
  }, [E]);
  let C = (0, r.useIsVisible)(m);
  return (0, a.jsxs)("div", {
    className: i()(d.container, n && d.isOverlayContainer),
    ref: p,
    children: [(0, a.jsx)("div", {
      className: d.usernameContainer,
      children: t
    }), (0, a.jsx)("div", {
      className: d.chipletParent,
      ref: C,
      children: (0, a.jsx)("span", {
        className: i()(d.chipletContainer, !E && n && d.noPadding),
        ref: c,
        style: f,
        children: (0, a.jsx)(u.default, {
          ...s,
          className: i()(s.className, n && d.isOverlayTag)
        })
      })
    })]
  })
})