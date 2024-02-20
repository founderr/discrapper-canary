"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("37983");
n("884691");
var a = n("830210"),
  s = n("42687");

function i(e) {
  let {
    channel: t,
    video: n,
    userCount: i
  } = e, {
    limit: r
  } = (0, a.default)(t), u = -1, o = !1;
  return t.userLimit > 0 && (u = t.userLimit), n && r > 0 && (o = u < 0 || r < u, u = u > 0 ? Math.min(u, r) : r), (0, l.jsx)(s.default, {
    users: i,
    total: u,
    videoLimit: o
  })
}