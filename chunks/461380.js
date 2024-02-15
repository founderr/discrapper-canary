"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  u = n("384737"),
  a = n("448052"),
  s = n("748802"),
  o = n("260792"),
  d = n("77078"),
  c = n("75196"),
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
      transition: S = f.transition,
      className: T,
      foreground: I,
      expanded: h,
      ...v
    } = e, {
      enabled: N
    } = (0, d.useRedesignIconContext)(), C = t;
    if (!0 === h ? C = E.DOWN : !1 === h && (C = E.RIGHT), N) {
      let e = {
        [E.UP]: o.ChevronSmallUpIcon,
        [E.DOWN]: u.ChevronSmallDownIcon,
        [E.LEFT]: a.ChevronSmallLeftIcon,
        [E.RIGHT]: s.ChevronSmallRightIcon
      } [C];
      return (0, i.jsx)(e, {
        ...v,
        className: T,
        width: n,
        height: r,
        color: _,
        colorClass: I
      })
    }
    return (0, i.jsx)("svg", {
      className: l(T, S, C),
      width: n,
      height: r,
      viewBox: "0 0 24 24",
      ...(0, c.default)(v),
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
var S = _