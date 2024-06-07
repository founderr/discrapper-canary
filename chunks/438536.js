"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("735250");
a("470079");
var u = a("442837"),
  l = a("481060"),
  s = a("569471"),
  i = a("346479"),
  d = a("689938");

function r(e, t) {
  return (0, u.useStateFromStores)([s.default], () => s.default.hasJoined(e.id)) ? (0, n.jsx)(l.MenuItem, {
    id: "leave-thread",
    label: e.isForumPost() ? d.default.Messages.LEAVE_FORUM_POST : d.default.Messages.LEAVE_THREAD,
    action: () => i.default.leaveThread(e, t)
  }) : (0, n.jsx)(l.MenuItem, {
    id: "join-thread",
    label: e.isForumPost() ? d.default.Messages.JOIN_FORUM_POST : d.default.Messages.JOIN_THREAD,
    action: () => i.default.joinThread(e, t)
  })
}