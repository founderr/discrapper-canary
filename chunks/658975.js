"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("735250");
n("470079");
var a = n("739566"),
  l = n("702346"),
  i = n("352736");

function r(e) {
  let {
    message: t,
    usernameHook: r,
    compact: o,
    guildId: u
  } = e, d = (0, a.default)(t), c = r(d), f = i.default.getWelcomeMessageKind(u), E = i.default.getSystemMessageUserJoin(t.id, f).format({
    username: d.nick,
    usernameHook: c
  });
  return (0, s.jsx)(l.default, {
    icon: n("570111"),
    timestamp: t.timestamp,
    compact: o,
    children: E
  })
}