"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  r = n.n(l),
  o = n("384737"),
  a = n("448052"),
  s = n("748802"),
  u = n("260792"),
  c = n("77078"),
  d = n("75196"),
  f = n("4177");
let E = {
    UP: f.directionUp,
    RIGHT: f.directionRight,
    DOWN: f.directionDown,
    LEFT: f.directionLeft
  },
  p = e => {
    let {
      direction: t = E.DOWN,
      width: n = 24,
      height: l = 24,
      color: p = "currentColor",
      transition: h = f.transition,
      className: _,
      foreground: C,
      expanded: S,
      ...I
    } = e, {
      enabled: T
    } = (0, c.useRedesignIconContext)(), g = t;
    if (!0 === S ? g = E.DOWN : !1 === S && (g = E.RIGHT), T) {
      let e = {
        [E.UP]: u.ChevronSmallUpIcon,
        [E.DOWN]: o.ChevronSmallDownIcon,
        [E.LEFT]: a.ChevronSmallLeftIcon,
        [E.RIGHT]: s.ChevronSmallRightIcon
      } [g];
      return (0, i.jsx)(e, {
        ...I,
        className: _,
        width: n,
        height: l,
        color: p,
        colorClass: C
      })
    }
    return (0, i.jsx)("svg", {
      className: r(_, h, g),
      width: n,
      height: l,
      viewBox: "0 0 24 24",
      ...(0, d.default)(I),
      children: (0, i.jsx)("path", {
        className: C,
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
p.Directions = E;
var h = p