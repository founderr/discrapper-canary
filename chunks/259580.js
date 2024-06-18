"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(325767),
  l = n(418601);
let u = {
    UP: l.directionUp,
    RIGHT: l.directionRight,
    DOWN: l.directionDown,
    LEFT: l.directionLeft
  },
  _ = e => {
    let {
      direction: t = u.DOWN,
      width: n = 24,
      height: r = 24,
      color: _ = "currentColor",
      transition: c = l.transition,
      className: d,
      foreground: E,
      expanded: I,
      ...T
    } = e, {
      enabled: h
    } = (0, o.useRedesignIconContext)(), S = t;
    if (!0 === I ? S = u.DOWN : !1 === I && (S = u.RIGHT), h) {
      let e = {
        [u.UP]: o.ChevronSmallUpIcon,
        [u.DOWN]: o.ChevronSmallDownIcon,
        [u.LEFT]: o.ChevronSmallLeftIcon,
        [u.RIGHT]: o.ChevronSmallRightIcon
      } [S];
      return (0, i.jsx)(e, {
        ...T,
        className: d,
        size: "custom",
        width: n,
        height: r,
        color: null != _ ? _ : "currentColor",
        colorClass: E
      })
    }
    return (0, i.jsx)("svg", {
      className: s()(d, c, S),
      width: n,
      height: r,
      viewBox: "0 0 24 24",
      ...(0, a.Z)(T),
      children: (0, i.jsx)("path", {
        className: E,
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
_.Directions = u, t.Z = _