"use strict";
r.r(t);
var n = r("735250");
r("470079");
var s = r("120356"),
  a = r.n(s),
  l = r("153832"),
  u = r("406658");
let i = (0, l.v4)();
t.default = e => {
  let {
    open: t,
    className: r,
    withHighlight: s = !1
  } = e;
  return (0, n.jsxs)("svg", {
    width: "18",
    height: "18",
    className: a()(u.button, r, {
      [u.open]: t,
      [u.withHighlight]: s
    }),
    children: [s && (0, n.jsx)("defs", {
      children: (0, n.jsxs)("linearGradient", {
        id: i,
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
        stroke: s ? "url(#".concat(i, ")") : "currentColor",
        d: "M4.5 4.5l9 9",
        strokeLinecap: "round"
      }), (0, n.jsx)("path", {
        stroke: s ? "url(#".concat(i, ")") : "currentColor",
        d: "M13.5 4.5l-9 9",
        strokeLinecap: "round"
      })]
    })]
  })
}