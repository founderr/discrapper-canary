"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  l = n("384737"),
  a = n("448052"),
  u = n("748802"),
  o = n("260792"),
  c = n("77078"),
  d = n("75196"),
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
      height: r = 24,
      color: E = "currentColor",
      transition: p = f.transition,
      className: v,
      foreground: C,
      expanded: S,
      ..._
    } = e, {
      enabled: m
    } = (0, c.useRedesignIconContext)(), I = t;
    if (!0 === S ? I = h.DOWN : !1 === S && (I = h.RIGHT), m) {
      let e = {
        [h.UP]: o.ChevronSmallUpIcon,
        [h.DOWN]: l.ChevronSmallDownIcon,
        [h.LEFT]: a.ChevronSmallLeftIcon,
        [h.RIGHT]: u.ChevronSmallRightIcon
      } [I];
      return (0, i.jsx)(e, {
        ..._,
        className: v,
        width: n,
        height: r,
        color: E,
        colorClass: C
      })
    }
    return (0, i.jsx)("svg", {
      className: s(v, p, I),
      width: n,
      height: r,
      viewBox: "0 0 24 24",
      ...(0, d.default)(_),
      children: (0, i.jsx)("path", {
        className: C,
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
var p = E