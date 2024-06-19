n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(569471),
  r = n(346479),
  o = n(689938);

function c(e, t) {
  return (0, i.e7)([a.Z], () => a.Z.hasJoined(e.id)) ? (0, s.jsx)(l.MenuItem, {
    id: "leave-thread",
    label: e.isForumPost() ? o.Z.Messages.LEAVE_FORUM_POST : o.Z.Messages.LEAVE_THREAD,
    action: () => r.Z.leaveThread(e, t)
  }) : (0, s.jsx)(l.MenuItem, {
    id: "join-thread",
    label: e.isForumPost() ? o.Z.Messages.JOIN_FORUM_POST : o.Z.Messages.JOIN_THREAD,
    action: () => r.Z.joinThread(e, t)
  })
}