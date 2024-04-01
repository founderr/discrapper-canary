"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("735250");
n("470079");
var l = n("739566"),
  a = n("702346"),
  i = n("352736");

function r(e) {
  let {
    message: t,
    usernameHook: r,
    compact: o
  } = e, u = (0, l.default)(t), d = r(u), c = i.default.getSystemMessageUserJoin(t.id).format({
    username: u.nick,
    usernameHook: d
  });
  return (0, s.jsx)(a.default, {
    icon: n("570111"),
    timestamp: t.timestamp,
    compact: o,
    children: c
  })
}