"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("607070"),
  o = n("394026");

function u(e) {
  let {
    title: t,
    children: n,
    scrollIntoView: u = !1,
    headingColor: d = "header-secondary"
  } = e, c = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), f = l.useRef(null);
  return l.useEffect(() => {
    let e = f.current;
    if (null == e) return;
    let t = requestAnimationFrame(() => {
      e.scrollIntoView({
        behavior: c ? "auto" : "smooth"
      })
    });
    return () => cancelAnimationFrame(t)
  }, [c]), (0, a.jsxs)("section", {
    ref: u ? f : void 0,
    className: o.section,
    children: [(0, a.jsx)(i.Heading, {
      variant: "text-xs/semibold",
      color: d,
      children: t
    }), n]
  })
}