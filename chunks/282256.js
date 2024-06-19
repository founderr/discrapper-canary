n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(434650),
  o = n(393903),
  c = n(353093),
  u = n(979264),
  d = n(256037);
t.Z = i.memo(function(e) {
  let {
    children: t,
    isOverlay: n,
    contextGuildId: s,
    ...h
  } = e, m = i.useRef(null), [p, E] = i.useState({
    maskImage: "none"
  }), g = i.useCallback(() => {
    var e, t;
    if (n) {
      E({
        maskImage: "none"
      });
      return
    }
    let l = null === (e = f.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
      i = null === (t = m.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
    if (null == l || null == i) {
      E({
        maskImage: "none"
      });
      return
    }
    let s = i.right - l.right,
      a = i.width - s;
    if (a > i.width) {
      E({
        maskImage: "none"
      });
      return
    }
    E({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(a, "px)")
    })
  }, []), f = (0, o.y)(g), C = (0, c.p0)(h.userId, s);
  i.useEffect(() => {
    if (null != f.current) g()
  }, [C]);
  let _ = (0, r.O)(g);
  return (0, l.jsxs)("div", {
    className: a()(d.container, n && d.isOverlayContainer),
    ref: f,
    children: [(0, l.jsx)("div", {
      className: d.usernameContainer,
      children: t
    }), (0, l.jsx)("div", {
      className: d.chipletParent,
      ref: _,
      children: (0, l.jsx)("span", {
        className: a()(d.chipletContainer, !C && n && d.noPadding),
        ref: m,
        style: p,
        children: (0, l.jsx)(u.ZP, {
          ...h,
          contextGuildId: s,
          className: a()(h.className, n && d.isOverlayTag)
        })
      })
    })]
  })
})