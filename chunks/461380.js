"use strict";
n.r(e), n.d(e, {
  default: function() {
    return _
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
  p = t => {
    let {
      direction: e = h.DOWN,
      width: n = 24,
      height: r = 24,
      color: p = "currentColor",
      transition: _ = f.transition,
      className: v,
      foreground: C,
      expanded: E,
      ...g
    } = t, {
      enabled: I
    } = (0, c.useRedesignIconContext)(), S = e;
    if (!0 === E ? S = h.DOWN : !1 === E && (S = h.RIGHT), I) {
      let t = {
        [h.UP]: u.ChevronSmallUpIcon,
        [h.DOWN]: s.ChevronSmallDownIcon,
        [h.LEFT]: a.ChevronSmallLeftIcon,
        [h.RIGHT]: o.ChevronSmallRightIcon
      } [S];
      return (0, i.jsx)(t, {
        ...g,
        className: v,
        width: n,
        height: r,
        color: p,
        colorClass: C
      })
    }
    return (0, i.jsx)("svg", {
      className: l(v, _, S),
      width: n,
      height: r,
      viewBox: "0 0 24 24",
      ...(0, d.default)(g),
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
p.Directions = h;
var _ = p