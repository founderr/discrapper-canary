"use strict";
a.r(t);
var n = a("735250");
a("470079");
t.default = e => {
  let {
    id: t,
    startColor: a,
    stopColor: s,
    color: l,
    stop: i
  } = e;
  return (0, n.jsxs)("linearGradient", {
    id: t,
    children: [(0, n.jsx)("stop", {
      offset: "0",
      stopColor: a
    }), (0, n.jsx)("stop", {
      offset: i,
      stopColor: s
    }), (0, n.jsx)("stop", {
      offset: i,
      stopColor: l
    }), (0, n.jsx)("stop", {
      offset: "1",
      stopColor: l
    })]
  })
}