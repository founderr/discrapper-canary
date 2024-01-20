"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var i = n("37983");
n("884691");
var l = n("414456"),
  r = n.n(l),
  a = n("384737"),
  s = n("448052"),
  o = n("748802"),
  u = n("260792"),
  d = n("77078"),
  c = n("75196"),
  f = n("4177");
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
      transition: _ = f.transition,
      className: p,
      foreground: I,
      expanded: C,
      ...T
    } = e, {
      enabled: S
    } = (0, d.useRedesignIconContext)(), v = t;
    if (!0 === C ? v = h.DOWN : !1 === C && (v = h.RIGHT), S) {
      let e = {
        [h.UP]: u.ChevronSmallUpIcon,
        [h.DOWN]: a.ChevronSmallDownIcon,
        [h.LEFT]: s.ChevronSmallLeftIcon,
        [h.RIGHT]: o.ChevronSmallRightIcon
      } [v];
      return (0, i.jsx)(e, {
        ...T,
        className: p,
        width: n,
        height: l,
        color: E,
        colorClass: I
      })
    }
    return (0, i.jsx)("svg", {
      className: r(p, _, v),
      width: n,
      height: l,
      viewBox: "0 0 24 24",
      ...(0, c.default)(T),
      children: (0, i.jsx)("path", {
        className: I,
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
var _ = E