"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("918701"),
  r = n("439826"),
  o = n("43779"),
  u = n("73060");

function d(e) {
  let {
    quest: t
  } = e, n = (0, i.isQuestExpired)(t);
  return (0, a.jsxs)("div", {
    className: l()(u.container, {
      [u.expired]: n,
      [u.live]: !n
    }),
    children: [(0, a.jsx)(r.default, {
      quest: t
    }), (0, a.jsx)(o.default, {
      quest: t
    })]
  })
}