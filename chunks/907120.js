"use strict";
a.r(v), a.d(v, {
  ClanBadgeLeaf: function() {
    return r
  }
});
var t = a("735250");
a("470079");
var l = a("331595"),
  e = a("249849");
let i = ["#4a8359", "#7fb134", "#bcef42", "#f0f0f0"],
  s = [.1, .2, .6, .9],
  n = [{
    base: 4,
    tint: 1
  }, {
    base: 3,
    tint: 1
  }, {
    base: 3,
    tint: 1
  }, {
    base: 10,
    tint: 1
  }],
  r = h => {
    let {
      width: v = 24,
      height: a = 24,
      primaryTintColor: r,
      ...d
    } = h, {
      primaryColorsTransformed: M
    } = (0, e.getTransformedBadgeColors)({
      primaryBaseColors: i,
      primaryTintColor: r,
      primaryTintLuminances: s,
      primaryLuminanceWeights: n
    });
    return (0, t.jsxs)("svg", {
      ...(0, l.default)(d),
      width: v,
      height: a,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, t.jsx)("path", {
        d: "M15 2V1H9v1H3v5H1v5h12V7h2V2Z",
        fill: M[2]
      }), (0, t.jsx)("path", {
        d: "M11 13v-1H5v1h6Z",
        fill: M[1]
      }), (0, t.jsx)("path", {
        d: "M15 2V1H9v1h6ZM9 3V2H5v1h4Z",
        fill: "#fff"
      }), (0, t.jsx)("path", {
        d: "M3 11v1h2v-1H3ZM13 10h-1v2h1v-2ZM15 5h-1v2h1V5ZM14 7h-1v3h1V7Z",
        fill: M[1]
      }), (0, t.jsx)("path", {
        d: "M16 1h-1v6h1V1Z",
        fill: "#000"
      }), (0, t.jsx)("path", {
        d: "M3 9H2v6h1V9Z",
        fill: M[0]
      }), (0, t.jsx)("path", {
        d: "M15 0H9v1h6V0ZM11 13H5v1h6v-1ZM9 1H5v1h4V1ZM5 2H3v1h2V2ZM3 3H2v2h1V3ZM1 7H0v5h1v3h1v-3H1V7h1V5H1v2ZM13 12h-2v1h2v-1ZM14 10h-1v2h1v-2h1V7h-1v3ZM4 13h1v-1H3v3h1v-2ZM3 15H2v1h1v-1Z",
        fill: "#000"
      }), (0, t.jsx)("path", {
        d: "M2 7h1V5H2v2ZM1 9h1V7H1v2ZM5 3H3v2h1V4h1V3Z",
        fill: "#fff"
      }), (0, t.jsx)("path", {
        d: "M4 8h2V7H4v1ZM6 7h2V6H6v1ZM8 6h2V5H8v1ZM10 5h1V4h-1v1ZM11 4h1V3h-1v1Z",
        fill: M[0]
      }), (0, t.jsx)("path", {
        d: "M5 4v1h1V4H5Z",
        fill: "#fff"
      }), (0, t.jsx)("path", {
        d: "M3 8v1h1V8H3Z",
        fill: M[0]
      })]
    })
  }