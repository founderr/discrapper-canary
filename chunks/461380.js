"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  r = n("384737"),
  o = n("448052"),
  a = n("748802"),
  u = n("260792"),
  d = n("77078"),
  c = n("75196"),
  f = n("4177");
let p = {
    UP: f.directionUp,
    RIGHT: f.directionRight,
    DOWN: f.directionDown,
    LEFT: f.directionLeft
  },
  h = e => {
    let {
      direction: t = p.DOWN,
      width: n = 24,
      height: i = 24,
      color: h = "currentColor",
      transition: m = f.transition,
      className: E,
      foreground: I,
      expanded: S,
      ...g
    } = e, {
      enabled: _
    } = (0, d.useRedesignIconContext)(), C = t;
    if (!0 === S ? C = p.DOWN : !1 === S && (C = p.RIGHT), _) {
      let e = {
        [p.UP]: u.ChevronSmallUpIcon,
        [p.DOWN]: r.ChevronSmallDownIcon,
        [p.LEFT]: o.ChevronSmallLeftIcon,
        [p.RIGHT]: a.ChevronSmallRightIcon
      } [C];
      return (0, l.jsx)(e, {
        ...g,
        className: E,
        width: n,
        height: i,
        color: h,
        colorClass: I
      })
    }
    return (0, l.jsx)("svg", {
      className: s(E, m, C),
      width: n,
      height: i,
      viewBox: "0 0 24 24",
      ...(0, c.default)(g),
      children: (0, l.jsx)("path", {
        className: I,
        fill: "none",
        stroke: h,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7 10L12 15 17 10",
        "aria-hidden": !0
      })
    })
  };
h.Directions = p;
var m = h