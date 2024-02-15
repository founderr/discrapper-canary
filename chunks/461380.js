"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  u = n.n(r),
  a = n("384737"),
  s = n("448052"),
  l = n("748802"),
  o = n("260792"),
  c = n("77078"),
  d = n("75196"),
  f = n("366842");
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
      transition: T = f.transition,
      className: S,
      foreground: I,
      expanded: h,
      ...N
    } = e, {
      enabled: p
    } = (0, c.useRedesignIconContext)(), C = t;
    if (!0 === h ? C = E.DOWN : !1 === h && (C = E.RIGHT), p) {
      let e = {
        [E.UP]: o.ChevronSmallUpIcon,
        [E.DOWN]: a.ChevronSmallDownIcon,
        [E.LEFT]: s.ChevronSmallLeftIcon,
        [E.RIGHT]: l.ChevronSmallRightIcon
      } [C];
      return (0, i.jsx)(e, {
        ...N,
        className: S,
        width: n,
        height: r,
        color: _,
        colorClass: I
      })
    }
    return (0, i.jsx)("svg", {
      className: u(S, T, C),
      width: n,
      height: r,
      viewBox: "0 0 24 24",
      ...(0, d.default)(N),
      children: (0, i.jsx)("path", {
        className: I,
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
var T = _