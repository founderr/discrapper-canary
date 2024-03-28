"use strict";
i.r(t);
var l = i("735250");
i("470079");
var a = i("803997"),
  s = i.n(a),
  n = i("153832"),
  o = i("406658");
let r = (0, n.v4)();
t.default = e => {
  let {
    open: t,
    className: i,
    withHighlight: a = !1
  } = e;
  return (0, l.jsxs)("svg", {
    width: "18",
    height: "18",
    className: s()(o.button, i, {
      [o.open]: t,
      [o.withHighlight]: a
    }),
    children: [a && (0, l.jsx)("defs", {
      children: (0, l.jsxs)("linearGradient", {
        id: r,
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "18",
        gradientUnits: "userSpaceOnUse",
        children: [(0, l.jsx)("stop", {
          offset: "0",
          stopColor: "#B473F5"
        }), (0, l.jsx)("stop", {
          offset: "1",
          stopColor: "#E292AA"
        })]
      })
    }), (0, l.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [(0, l.jsx)("path", {
        d: "M0 0h18v18H0"
      }), (0, l.jsx)("path", {
        stroke: a ? "url(#".concat(r, ")") : "currentColor",
        d: "M4.5 4.5l9 9",
        strokeLinecap: "round"
      }), (0, l.jsx)("path", {
        stroke: a ? "url(#".concat(r, ")") : "currentColor",
        d: "M13.5 4.5l-9 9",
        strokeLinecap: "round"
      })]
    })]
  })
}