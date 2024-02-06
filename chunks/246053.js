"use strict";
n.r(t), n.d(t, {
  Directions: function() {
    return r
  },
  default: function() {
    return d
  }
}), n("70102");
var r, l, u = n("37983");
n("884691");
var o = n("414456"),
  i = n.n(o),
  c = n("75196"),
  s = n("741460");
(l = r || (r = {})).LEFT = "LEFT", l.RIGHT = "RIGHT", l.UP = "UP", l.DOWN = "DOWN", l.UP_LEFT = "UP_LEFT", l.DOWN_RIGHT = "DOWN_RIGHT";
let a = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: r = "currentColor",
    direction: l,
    foreground: o,
    className: a,
    title: d,
    ...f
  } = e;
  return (0, u.jsxs)("svg", {
    ...(0, c.default)(f),
    width: t,
    height: n,
    className: i(a, function(e) {
      switch (e) {
        case "LEFT":
          return s.left;
        case "RIGHT":
          return s.right;
        case "UP":
          return null;
        case "DOWN":
          return s.down;
        case "UP_LEFT":
          return s.upLeft;
        case "DOWN_RIGHT":
          return s.downRight;
        default:
          throw Error("Invalid Direction ".concat(e))
      }
    }(l)),
    viewBox: "0 0 24 24",
    children: [null != d ? (0, u.jsx)("title", {
      children: d
    }) : null, (0, u.jsx)("polygon", {
      className: o,
      fill: r,
      fillRule: "nonzero",
      points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
    })]
  })
};
a.Directions = r;
var d = a