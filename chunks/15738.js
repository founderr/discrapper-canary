"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("907002"),
  r = n("336637");
let o = Object.freeze({
    tension: 400,
    friction: 30
  }),
  u = Object.freeze({
    opacity: 0,
    height: 8,
    x: -4
  });

function d(e) {
  let {
    selected: t = !1,
    hovered: n = !1,
    unread: a = !1,
    disabled: d = !1,
    className: c
  } = e;
  t = !d && t, n = !d && n, a = !d && a;
  let f = {
      opacity: 1,
      height: t ? 40 : n ? 20 : 8,
      x: 0
    },
    m = (0, i.useTransition)(t || n || a, {
      config: o,
      keys: e => e ? "pill" : "empty",
      immediate: !n && !document.hasFocus(),
      initial: t || n || a ? f : null,
      from: u,
      leave: u,
      enter: f,
      update: f
    });
  return (0, l.jsx)("div", {
    className: s(c, r.wrapper),
    "aria-hidden": !0,
    children: m((e, t) => t && (0, l.jsx)(i.animated.span, {
      className: r.item,
      style: e
    }))
  })
}