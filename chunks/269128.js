"use strict";
n.r(t);
var a = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  o = n("153832"),
  i = n("899352");
let l = (0, o.v4)();
t.default = e => {
  let {
    open: t,
    className: n,
    withHighlight: r = !1
  } = e;
  return (0, a.jsxs)("svg", {
    width: "18",
    height: "18",
    className: s()(i.button, n, {
      [i.open]: t,
      [i.withHighlight]: r
    }),
    children: [r && (0, a.jsx)("defs", {
      children: (0, a.jsxs)("linearGradient", {
        id: l,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "18",
        gradientUnits: "userSpaceOnUse",
        children: [(0, a.jsx)("stop", {
          offset: "0",
          stopColor: "#B473F5"
        }), (0, a.jsx)("stop", {
          offset: "1",
          stopColor: "#E292AA"
        })]
      })
    }), (0, a.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [(0, a.jsx)("path", {
        d: "M0 0h18v18H0"
      }), (0, a.jsx)("path", {
        stroke: r ? "url(#".concat(l, ")") : "currentColor",
        d: "M4.5 4.5l9 9",
        strokeLinecap: "round"
      }), (0, a.jsx)("path", {
        stroke: r ? "url(#".concat(l, ")") : "currentColor",
        d: "M13.5 4.5l-9 9",
        strokeLinecap: "round"
      })]
    })]
  })
}