"use strict";
n.r(t);
var s = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  l = n("153832"),
  u = n("409275");
let i = (0, l.v4)();
t.default = e => {
  let {
    open: t,
    className: n,
    withHighlight: r = !1
  } = e;
  return (0, s.jsxs)("svg", {
    width: "18",
    height: "18",
    className: a()(u.button, n, {
      [u.open]: t,
      [u.withHighlight]: r
    }),
    children: [r && (0, s.jsx)("defs", {
      children: (0, s.jsxs)("linearGradient", {
        id: i,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "18",
        gradientUnits: "userSpaceOnUse",
        children: [(0, s.jsx)("stop", {
          offset: "0",
          stopColor: "#B473F5"
        }), (0, s.jsx)("stop", {
          offset: "1",
          stopColor: "#E292AA"
        })]
      })
    }), (0, s.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [(0, s.jsx)("path", {
        d: "M0 0h18v18H0"
      }), (0, s.jsx)("path", {
        stroke: r ? "url(#".concat(i, ")") : "currentColor",
        d: "M4.5 4.5l9 9",
        strokeLinecap: "round"
      }), (0, s.jsx)("path", {
        stroke: r ? "url(#".concat(i, ")") : "currentColor",
        d: "M13.5 4.5l-9 9",
        strokeLinecap: "round"
      })]
    })]
  })
}