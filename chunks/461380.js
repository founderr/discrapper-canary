"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  o = n.n(r),
  s = n("384737"),
  l = n("448052"),
  a = n("748802"),
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
  _ = e => {
    let {
      direction: t = E.DOWN,
      width: n = 24,
      height: r = 24,
      color: _ = "currentColor",
      transition: I = f.transition,
      className: h,
      foreground: S,
      expanded: p,
      ...T
    } = e, {
      enabled: N
    } = (0, c.useRedesignIconContext)(), C = t;
    if (!0 === p ? C = E.DOWN : !1 === p && (C = E.RIGHT), N) {
      let e = {
        [E.UP]: u.ChevronSmallUpIcon,
        [E.DOWN]: s.ChevronSmallDownIcon,
        [E.LEFT]: l.ChevronSmallLeftIcon,
        [E.RIGHT]: a.ChevronSmallRightIcon
      } [C];
      return (0, i.jsx)(e, {
        ...T,
        className: h,
        width: n,
        height: r,
        color: _,
        colorClass: S
      })
    }
    return (0, i.jsx)("svg", {
      className: o(h, I, C),
      width: n,
      height: r,
      viewBox: "0 0 24 24",
      ...(0, d.default)(T),
      children: (0, i.jsx)("path", {
        className: S,
        fill: "none",
        stroke: _,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7 10L12 15 17 10",
        "aria-hidden": !0
      })
    })
  };
_.Directions = E;
var I = _