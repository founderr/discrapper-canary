n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  r = n(607070),
  o = n(66257);

function c(e) {
  let {
    title: t,
    children: n,
    scrollIntoView: c = !1,
    headingColor: u = "header-secondary"
  } = e, d = (0, s.e7)([r.Z], () => r.Z.useReducedMotion), h = i.useRef(null);
  return i.useEffect(() => {
    let e = h.current;
    if (null == e) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: d ? "auto" : "smooth"
      })
    });
    return () => cancelAnimationFrame(t)
  }, [d]), (0, l.jsxs)("section", {
    ref: c ? h : void 0,
    className: o.section,
    children: [(0, l.jsx)(a.Heading, {
      variant: "text-xs/semibold",
      color: u,
      children: t
    }), n]
  })
}