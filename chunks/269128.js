"use strict";
s.r(t);
var r = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  a = s("153832"),
  l = s("409275");
let o = (0, a.v4)();
t.default = e => {
  let {
    open: t,
    className: s,
    withHighlight: n = !1
  } = e;
  return (0, r.jsxs)("svg", {
    width: "18",
    height: "18",
    className: i()(l.button, s, {
      [l.open]: t,
      [l.withHighlight]: n
    }),
    children: [n && (0, r.jsx)("defs", {
      children: (0, r.jsxs)("linearGradient", {
        id: o,
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
        stroke: n ? "url(#".concat(o, ")") : "currentColor",
        d: "M4.5 4.5l9 9",
        strokeLinecap: "round"
      }), (0, r.jsx)("path", {
        stroke: n ? "url(#".concat(o, ")") : "currentColor",
        d: "M13.5 4.5l-9 9",
        strokeLinecap: "round"
      })]
    })]
  })
}