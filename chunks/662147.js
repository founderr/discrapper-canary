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
  i = n("689938");

function r(e) {
  let {
    message: t,
    usernameHook: r,
    compact: o
  } = e, u = (0, l.default)(t), d = r(u);
  return (0, s.jsx)(a.default, {
    icon: n("819373"),
    timestamp: t.timestamp,
    compact: o,
    children: i.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE_HOOK.format({
      username: u.nick,
      usernameHook: d
    })
  })
}