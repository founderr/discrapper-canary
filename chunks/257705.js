"use strict";
n.d(t, {
  z: function() {
    return u
  }
}), n(411104);
var i = n(735250),
  r = n(470079),
  s = n(803997),
  o = n.n(s),
  a = n(789978),
  l = n(780900);

function u(e, t) {
  let n = (0, l.G6)(e);
  return r.forwardRef(function(s, u) {
    let {
      children: _,
      className: c,
      dir: d = "ltr",
      orientation: E = "vertical",
      paddingFix: I = !0,
      fade: T = !1,
      onScroll: h,
      style: f,
      ...S
    } = s, A = r.useRef(null), N = (0, l.tT)({
      paddingFix: I,
      orientation: E,
      dir: d,
      className: c,
      scrollerRef: A,
      specs: n
    });
    return (0, i.jsx)("div", {
      ref: e => {
        "function" == typeof u ? u(e) : null != u && (u.current = e), A.current = e
      },
      className: o()(c, {
        [e]: !0,
        [t]: T
      }),
      style: (0, l.uT)(f, E),
      dir: d,
      ...S,
      children: (0, i.jsxs)(a.Jc, {
        containerRef: A,
        children: [_, N]
      })
    })
  })
}