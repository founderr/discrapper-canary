"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("384737"),
  a = n("448052"),
  o = n("748802"),
  u = n("260792"),
  c = n("77078"),
  d = n("75196"),
  f = n("4177");
let h = {
    UP: f.directionUp,
    RIGHT: f.directionRight,
    DOWN: f.directionDown,
    LEFT: f.directionLeft
  },
  p = e => {
    let {
      direction: t = h.DOWN,
      width: n = 24,
      height: r = 24,
      color: p = "currentColor",
      transition: C = f.transition,
      className: v,
      foreground: E,
      expanded: I,
      ...g
    } = e, {
      enabled: _
    } = (0, c.useRedesignIconContext)(), S = t;
    if (!0 === I ? S = h.DOWN : !1 === I && (S = h.RIGHT), _) {
      let e = {
        [h.UP]: u.ChevronSmallUpIcon,
        [h.DOWN]: s.ChevronSmallDownIcon,
        [h.LEFT]: a.ChevronSmallLeftIcon,
        [h.RIGHT]: o.ChevronSmallRightIcon
      } [S];
      return (0, i.jsx)(e, {
        ...g,
        className: v,
        width: n,
        height: r,
        color: p,
        colorClass: E
      })
    }
    return (0, i.jsx)("svg", {
      className: l(v, C, S),
      width: n,
      height: r,
      viewBox: "0 0 24 24",
      ...(0, d.default)(g),
      children: (0, i.jsx)("path", {
        className: E,
        fill: "none",
        stroke: p,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7 10L12 15 17 10",
        "aria-hidden": !0
      })
    })
  };
p.Directions = h;
var C = p