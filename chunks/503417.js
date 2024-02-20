"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  s = n("945330"),
  r = n("774223"),
  o = n("587974"),
  u = n("457774");

function d(e) {
  let {
    width: t = 20,
    height: n = 20,
    className: a
  } = e;
  return (0, i.jsxs)("div", {
    className: l(u.icon, a),
    children: [(0, i.jsx)(o.default, {
      mask: o.default.Masks.STATUS_SCREENSHARE,
      width: t,
      height: n,
      children: (0, i.jsx)(r.default, {
        width: t,
        height: n
      })
    }), (0, i.jsx)(s.default, {
      className: u.badge
    })]
  })
}