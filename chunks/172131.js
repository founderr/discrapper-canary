"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l, a, s = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  o = n("256170"),
  u = n("981913"),
  d = n("608845");

function c(e) {
  let {
    direction: t,
    className: n,
    themeable: l,
    ...a
  } = e;
  return (0, s.jsx)(u.default, {
    className: r(n, d.arrow, {
      [d.up]: 0 === t
    }),
    iconComponent: o.default,
    themeable: l,
    ...a
  })
}(l = a || (a = {}))[l.UP = 0] = "UP", l[l.DOWN = 1] = "DOWN", c.Directions = a;
var f = c