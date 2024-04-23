"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var l = n("442837"),
  a = n("481060"),
  i = n("569471"),
  r = n("346479"),
  o = n("689938");

function u(e, t) {
  return (0, l.useStateFromStores)([i.default], () => i.default.hasJoined(e.id)) ? (0, s.jsx)(a.MenuItem, {
    id: "leave-thread",
    label: e.isForumPost() ? o.default.Messages.LEAVE_FORUM_POST : o.default.Messages.LEAVE_THREAD,
    action: () => r.default.leaveThread(e, t)
  }) : (0, s.jsx)(a.MenuItem, {
    id: "join-thread",
    label: e.isForumPost() ? o.default.Messages.JOIN_FORUM_POST : o.default.Messages.JOIN_THREAD,
    action: () => r.default.joinThread(e, t)
  })
}