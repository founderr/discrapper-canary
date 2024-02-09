"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  i = n.n(r),
  l = n("384737"),
  s = n("448052"),
  u = n("748802"),
  o = n("260792"),
  d = n("77078"),
  c = n("75196"),
  f = n("4177");
let h = {
    UP: f.directionUp,
    RIGHT: f.directionRight,
    DOWN: f.directionDown,
    LEFT: f.directionLeft
  },
  m = e => {
    let {
      direction: t = h.DOWN,
      width: n = 24,
      height: r = 24,
      color: m = "currentColor",
      transition: g = f.transition,
      className: p,
      foreground: v,
      expanded: S,
      ...C
    } = e, {
      enabled: E
    } = (0, d.useRedesignIconContext)(), _ = t;
    if (!0 === S ? _ = h.DOWN : !1 === S && (_ = h.RIGHT), E) {
      let e = {
        [h.UP]: o.ChevronSmallUpIcon,
        [h.DOWN]: l.ChevronSmallDownIcon,
        [h.LEFT]: s.ChevronSmallLeftIcon,
        [h.RIGHT]: u.ChevronSmallRightIcon
      } [_];
      return (0, a.jsx)(e, {
        ...C,
        className: p,
        width: n,
        height: r,
        color: m,
        colorClass: v
      })
    }
    return (0, a.jsx)("svg", {
      className: i(p, g, _),
      width: n,
      height: r,
      viewBox: "0 0 24 24",
      ...(0, c.default)(C),
      children: (0, a.jsx)("path", {
        className: v,
        fill: "none",
        stroke: m,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7 10L12 15 17 10",
        "aria-hidden": !0
      })
    })
  };
m.Directions = h;
var g = m