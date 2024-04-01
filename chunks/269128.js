"use strict";
r.r(t);
var n = r("735250");
r("470079");
var s = r("803997"),
  a = r.n(s),
  i = r("153832"),
  l = r("406658");
let c = (0, i.v4)();
t.default = e => {
  let {
    open: t,
    className: r,
    withHighlight: s = !1
  } = e;
  return (0, n.jsxs)("svg", {
    width: "18",
    height: "18",
    className: a()(l.button, r, {
      [l.open]: t,
      [l.withHighlight]: s
    }),
    children: [s && (0, n.jsx)("defs", {
      children: (0, n.jsxs)("linearGradient", {
        id: c,
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
        stroke: s ? "url(#".concat(c, ")") : "currentColor",
        d: "M4.5 4.5l9 9",
        strokeLinecap: "round"
      }), (0, n.jsx)("path", {
        stroke: s ? "url(#".concat(c, ")") : "currentColor",
        d: "M13.5 4.5l-9 9",
        strokeLinecap: "round"
      })]
    })]
  })
}