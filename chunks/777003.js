"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("383957");

function r(e) {
  let {
    children: t,
    lastSection: n = !1,
    className: a,
    ...r
  } = e;
  return (0, l.jsx)("div", {
    className: s(i.section, a, {
      [i.lastSection]: n
    }),
    ...r,
    children: t
  })
}