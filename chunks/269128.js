"use strict";
r.r(t);
var s = r("735250");
r("470079");
var n = r("120356"),
  l = r.n(n),
  i = r("153832"),
  a = r("409275");
let o = (0, i.v4)();
t.default = e => {
  let {
    open: t,
    className: r,
    withHighlight: n = !1
  } = e;
  return (0, s.jsxs)("svg", {
    width: "18",
    height: "18",
    className: l()(a.button, r, {
      [a.open]: t,
      [a.withHighlight]: n
    }),
    children: [n && (0, s.jsx)("defs", {
      children: (0, s.jsxs)("linearGradient", {
        id: o,
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
        stroke: n ? "url(#".concat(o, ")") : "currentColor",
        d: "M4.5 4.5l9 9",
        strokeLinecap: "round"
      }), (0, s.jsx)("path", {
        stroke: n ? "url(#".concat(o, ")") : "currentColor",
        d: "M13.5 4.5l-9 9",
        strokeLinecap: "round"
      })]
    })]
  })
}