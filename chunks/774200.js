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
    channel: r,
    targetUser: o,
    actorUsernameHook: u,
    targetUsernameHook: d,
    compact: c
  } = e, E = (0, l.default)(t), f = (0, l.useNullableUserAuthor)(o, r), _ = u(E), T = d(null != f ? f : void 0), I = i.default.Messages.SYSTEM_MESSAGE_THREAD_MEMBER_REMOVE.format({
    actorName: E.nick,
    actorHook: _,
    targetName: null == f ? void 0 : f.nick,
    targetHook: T
  });
  return (0, s.jsx)(a.default, {
    icon: n("474019"),
    timestamp: t.timestamp,
    compact: c,
    children: I
  })
}