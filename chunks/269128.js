"use strict";
n.r(t);
var r = n("735250");
n("470079");
var s = n("120356"),
  a = n.n(s),
  u = n("153832"),
  l = n("406658");
let i = (0, u.v4)();
t.default = e => {
  let {
    open: t,
    className: n,
    withHighlight: s = !1
  } = e;
  return (0, r.jsxs)("svg", {
    width: "18",
    height: "18",
    className: a()(l.button, n, {
      [l.open]: t,
      [l.withHighlight]: s
    }),
    children: [s && (0, r.jsx)("defs", {
      children: (0, r.jsxs)("linearGradient", {
        id: i,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "18",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          offset: "0",
          stopColor: "#B473F5"
        }), (0, r.jsx)("stop", {
          offset: "1",
          stopColor: "#E292AA"
        })]
      })
    }), (0, r.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [(0, r.jsx)("path", {
        d: "M0 0h18v18H0"
      }), (0, r.jsx)("path", {
        stroke: s ? "url(#".concat(i, ")") : "currentColor",
        d: "M4.5 4.5l9 9",
        strokeLinecap: "round"
      }), (0, r.jsx)("path", {
        stroke: s ? "url(#".concat(i, ")") : "currentColor",
        d: "M13.5 4.5l-9 9",
        strokeLinecap: "round"
      })]
    })]
  })
}