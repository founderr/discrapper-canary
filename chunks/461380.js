"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  r = n.n(l),
  s = n("384737"),
  a = n("448052"),
  u = n("748802"),
  o = n("260792"),
  d = n("77078"),
  c = n("75196"),
  f = n("366842");
let h = {
    UP: f.directionUp,
    RIGHT: f.directionRight,
    DOWN: f.directionDown,
    LEFT: f.directionLeft
  },
  E = e => {
    let {
      direction: t = h.DOWN,
      width: n = 24,
      height: l = 24,
      color: E = "currentColor",
      transition: v = f.transition,
      className: C,
      foreground: _,
      expanded: p,
      ...S
    } = e, {
      enabled: m
    } = (0, d.useRedesignIconContext)(), g = t;
    if (!0 === p ? g = h.DOWN : !1 === p && (g = h.RIGHT), m) {
      let e = {
        [h.UP]: o.ChevronSmallUpIcon,
        [h.DOWN]: s.ChevronSmallDownIcon,
        [h.LEFT]: a.ChevronSmallLeftIcon,
        [h.RIGHT]: u.ChevronSmallRightIcon
      } [g];
      return (0, i.jsx)(e, {
        ...S,
        className: C,
        width: n,
        height: l,
        color: E,
        colorClass: _
      })
    }
    return (0, i.jsx)("svg", {
      className: r(C, v, g),
      width: n,
      height: l,
      viewBox: "0 0 24 24",
      ...(0, c.default)(S),
      children: (0, i.jsx)("path", {
        className: _,
        fill: "none",
        stroke: E,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7 10L12 15 17 10",
        "aria-hidden": !0
      })
    })
  };
E.Directions = h;
var v = E