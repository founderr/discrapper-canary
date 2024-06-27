"use strict";
n.d(t, {
  I: function() {
    return u
  }
});
var i = n(735250),
  r = n(470079),
  s = n(803997),
  o = n.n(s),
  a = n(789978),
  l = n(780900);

function u(e, t, n) {
  let s = (0, l.G6)(e);
  return r.forwardRef(function(u, _) {
    let {
      children: c,
      className: d,
      dir: E = "ltr",
      orientation: I = "vertical",
      fade: T = !1,
      customTheme: h = !1,
      paddingFix: f = !0,
      style: S,
      ...A
    } = u, {
      scrollerRef: N,
      getScrollerState: m
    } = (0, l.Ke)(), O = (0, l.t2)(N, I);
    r.useImperativeHandle(_, () => ({
      getScrollerNode: () => N.current,
      getScrollerState: m,
      ...(0, l.Ue)(N, m, O, I)
    }), [N, m, I, O]);
    let R = (0, l.tT)({
      paddingFix: f,
      orientation: I,
      dir: E,
      className: d,
      scrollerRef: N,
      specs: s
    });
    return (0, i.jsx)("div", {
      ref: N,
      className: o()(d, {
        [e]: !0,
        [t]: T,
        [n]: h
      }),
      style: (0, l.uT)(S, I),
      dir: E,
      ...A,
      children: (0, i.jsxs)(a.Jc, {
        containerRef: N,
        children: [c, R]
      })
    })
  })
}