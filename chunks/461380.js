"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  o = n("384737"),
  a = n("448052"),
  l = n("748802"),
  u = n("260792"),
  c = n("77078"),
  d = n("75196"),
  f = n("366842");
let E = {
    UP: f.directionUp,
    RIGHT: f.directionRight,
    DOWN: f.directionDown,
    LEFT: f.directionLeft
  },
  h = e => {
    let {
      direction: t = E.DOWN,
      width: n = 24,
      height: i = 24,
      color: h = "currentColor",
      transition: _ = f.transition,
      className: p,
      foreground: S,
      expanded: C,
      ...R
    } = e, {
      enabled: I
    } = (0, c.useRedesignIconContext)(), A = t;
    if (!0 === C ? A = E.DOWN : !1 === C && (A = E.RIGHT), I) {
      let e = {
        [E.UP]: u.ChevronSmallUpIcon,
        [E.DOWN]: o.ChevronSmallDownIcon,
        [E.LEFT]: a.ChevronSmallLeftIcon,
        [E.RIGHT]: l.ChevronSmallRightIcon
      } [A];
      return (0, r.jsx)(e, {
        ...R,
        className: p,
        width: n,
        height: i,
        color: h,
        colorClass: S
      })
    }
    return (0, r.jsx)("svg", {
      className: s(p, _, A),
      width: n,
      height: i,
      viewBox: "0 0 24 24",
      ...(0, d.default)(R),
      children: (0, r.jsx)("path", {
        className: S,
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
h.Directions = E;
var _ = h