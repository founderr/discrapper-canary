"use strict";
n.r(t), n.d(t, {
  Progress: function() {
    return p
  }
});
var i, r, s = n("37983"),
  a = n("884691"),
  o = n("414456"),
  l = n.n(o),
  u = n("669491"),
  c = n("755234");
(i = r || (r = {})).XSMALL = "xsmall", i.SMALL = "small", i.LARGE = "large";
let d = "indeterminate";

function p(e) {
  let t, {
      className: n,
      percent: i,
      size: r = "small",
      foregroundColor: o = u.default.unsafe_rawColors.BRAND_500.css,
      backgroundColor: p = "var(--background-modifier-active)",
      foregroundGradientColor: h,
      animate: f = !0
    } = e,
    E = null != i ? i : 0;
  return t = null != h ? {
    background: "linear-gradient(to right, ".concat(h[0], ", ").concat(h[1], ")")
  } : {
    backgroundColor: o
  }, (0, s.jsx)("div", {
    className: l(n, c.progress, c[r]),
    style: {
      backgroundColor: p
    },
    children: E !== d && "number" == typeof E ? (0, s.jsx)("div", {
      className: l(c.progressBar, c[r], {
        [c.animating]: f
      }),
      style: {
        transform: "translate3d(".concat(Math.min(Math.max(0, E), 100) - 100, "%, 0, 0)"),
        ...t
      }
    }) : (0, s.jsxs)(a.Fragment, {
      children: [(0, s.jsx)("div", {
        className: l(c.indeterminateBar1, c[r], {
          [c.animating]: f
        }),
        style: t
      }), (0, s.jsx)("div", {
        className: l(c.indeterminateBar2, c[r], {
          [c.animating]: f
        }),
        style: t
      })]
    })
  })
}
p.Sizes = r, p.INDETERMINATE = d