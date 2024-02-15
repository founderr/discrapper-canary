"use strict";
n.r(t), n.d(t, {
  MaskColor: function() {
    return a
  },
  FreeActivityIndicatorDot: function() {
    return u
  }
});
var l, a, s = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  o = n("520696");
(l = a || (a = {}))[l.POPOUT = 0] = "POPOUT", l[l.SECONDARY = 1] = "SECONDARY", l[l.BLACK = 2] = "BLACK";
let u = e => {
  let {
    left: t,
    top: n = 0,
    right: l = 0,
    bottom: a,
    size: i = 8,
    alert: u = !1,
    maskColor: d = 1
  } = e;
  return (0, s.jsx)("span", {
    className: r(o.dot, {
      [o.alert]: u,
      [o.maskPopout]: 0 === d,
      [o.maskSecondary]: 1 === d,
      [o.maskBlack]: 2 === d
    }),
    style: {
      height: i,
      width: i,
      left: t,
      top: n,
      right: l,
      bottom: a
    }
  })
}