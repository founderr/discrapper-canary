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
  } = e, f = (0, l.default)(t), E = (0, l.useNullableUserAuthor)(o, r), _ = u(f), m = d(null != E ? E : void 0), T = i.default.Messages.SYSTEM_MESSAGE_THREAD_MEMBER_ADD.format({
    actorName: f.nick,
    actorHook: _,
    targetName: null == E ? void 0 : E.nick,
    targetHook: m
  });
  return (0, s.jsx)(a.default, {
    icon: n("570111"),
    timestamp: t.timestamp,
    compact: c,
    children: T
  })
}