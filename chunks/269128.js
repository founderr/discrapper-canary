"use strict";
a.r(t);
var n = a("735250");
a("470079");
var r = a("120356"),
  s = a.n(r),
  i = a("153832"),
  l = a("409275");
let o = (0, i.v4)();
t.default = e => {
  let {
    open: t,
    className: a,
    withHighlight: r = !1
  } = e;
  return (0, n.jsxs)("svg", {
    width: "18",
    height: "18",
    className: s()(l.button, a, {
      [l.open]: t,
      [l.withHighlight]: r
    }),
    children: [r && (0, n.jsx)("defs", {
      children: (0, n.jsxs)("linearGradient", {
        id: o,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "18",
        gradientUnits: "userSpaceOnUse",
        children: [(0, n.jsx)("stop", {
          offset: "0",
          stopColor: "#B473F5"
        }), (0, n.jsx)("stop", {
          offset: "1",
          stopColor: "#E292AA"
        })]
      })
    }), (0, n.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [(0, n.jsx)("path", {
        d: "M0 0h18v18H0"
      }), (0, n.jsx)("path", {
        stroke: r ? "url(#".concat(o, ")") : "currentColor",
        d: "M4.5 4.5l9 9",
        strokeLinecap: "round"
      }), (0, n.jsx)("path", {
        stroke: r ? "url(#".concat(o, ")") : "currentColor",
        d: "M13.5 4.5l-9 9",
        strokeLinecap: "round"
      })]
    })]
  })
}