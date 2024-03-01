"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("37983");
n("884691");
var s = n("414456"),
  r = n.n(s),
  l = n("384737"),
  a = n("448052"),
  o = n("748802"),
  u = n("260792"),
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
      height: s = 24,
      color: E = "currentColor",
      transition: p = f.transition,
      className: C,
      foreground: v,
      expanded: _,
      ...S
    } = e, {
      enabled: I
    } = (0, c.useRedesignIconContext)(), N = t;
    if (!0 === _ ? N = h.DOWN : !1 === _ && (N = h.RIGHT), I) {
      let e = {
        [h.UP]: u.ChevronSmallUpIcon,
        [h.DOWN]: l.ChevronSmallDownIcon,
        [h.LEFT]: a.ChevronSmallLeftIcon,
        [h.RIGHT]: o.ChevronSmallRightIcon
      } [N];
      return (0, i.jsx)(e, {
        ...S,
        className: C,
        width: n,
        height: s,
        color: E,
        colorClass: v
      })
    }
    return (0, i.jsx)("svg", {
      className: r(C, p, N),
      width: n,
      height: s,
      viewBox: "0 0 24 24",
      ...(0, d.default)(S),
      children: (0, i.jsx)("path", {
        className: v,
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