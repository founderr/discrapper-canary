"use strict";
a.r(v), a.d(v, {
  ClanBadgeToadstool: function() {
    return Z
  }
});
var t = a("735250");
a("470079");
var l = a("331595"),
  e = a("249849");
let i = ["#be0351", "#ff2c52"],
  s = ["#ffb84b", "#ffe361"],
  n = [.12, .25],
  r = [{
    base: 5,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }],
  d = [.4, .8],
  M = [{
    base: 5,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }],
  Z = h => {
    let {
      width: v = 24,
      height: a = 24,
      primaryTintColor: Z,
      secondaryTintColor: H,
      ...V
    } = h, {
      primaryColorsTransformed: f,
      secondaryColorsTransformed: o
    } = (0, e.getTransformedBadgeColors)({
      primaryBaseColors: i,
      primaryTintColor: Z,
      primaryTintLuminances: n,
      primaryLuminanceWeights: r,
      secondaryBaseColors: s,
      secondaryTintColor: H,
      secondaryTintLuminances: d,
      secondaryLuminanceWeights: M
    });
    return (0, t.jsxs)("svg", {
      ...(0, l.default)(V),
      width: v,
      height: a,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, t.jsx)("path", {
        d: "M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z",
        fill: o[1]
      }), (0, t.jsx)("path", {
        d: "M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z",
        fill: f[1]
      }), (0, t.jsx)("path", {
        d: "M12 0H4v1h8V0Z",
        fill: "#000"
      }), (0, t.jsx)("path", {
        d: "M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z",
        fill: "#fff"
      }), (0, t.jsx)("path", {
        d: "M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z",
        fill: "#000"
      }), (0, t.jsx)("path", {
        d: "M2 7V3H1v6h2V7H2Z",
        fill: "#fff"
      }), (0, t.jsx)("path", {
        d: "M15 3h-1v6h1V3Z",
        fill: f[0]
      }), (0, t.jsx)("path", {
        d: "M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z",
        fill: "#fff"
      }), (0, t.jsx)("path", {
        opacity: ".5",
        d: "M15 6h-1v2h1V6Z",
        fill: f[0]
      }), (0, t.jsx)("path", {
        d: "M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z",
        fill: f[0]
      }), (0, t.jsx)("path", {
        d: "M6 10H5v2h1v-2Z",
        fill: "#fff"
      }), (0, t.jsx)("path", {
        d: "M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z",
        fill: o[0]
      }), (0, t.jsx)("path", {
        d: "M5 12H4v2h1v-2Z",
        fill: "#fff"
      }), (0, t.jsx)("path", {
        d: "M4 9H2v1h2V9ZM14 9h-2v1h2V9Z",
        fill: f[0]
      }), (0, t.jsx)("path", {
        d: "M8 6H6v2h2V6Z",
        fill: "#fff"
      }), (0, t.jsx)("path", {
        opacity: ".5",
        d: "M8 7H6v1h2V7Z",
        fill: f[0]
      }), (0, t.jsx)("path", {
        d: "M10 8H6v1h4V8Z",
        fill: "#000"
      }), (0, t.jsx)("path", {
        d: "M10 9H6v1h4V9Z",
        fill: "#fff"
      }), (0, t.jsx)("path", {
        d: "M2 2H1v1h1V2Z",
        fill: "#000"
      }), (0, t.jsx)("path", {
        d: "M5 3H4v1h1V3Z",
        fill: "#fff"
      }), (0, t.jsx)("path", {
        d: "M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z",
        fill: "#000"
      })]
    })
  }