n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(569471),
    s = n(346479),
    l = n(689938);
function u(e, t) {
    return (0, i.e7)([o.Z], () => o.Z.hasJoined(e.id))
        ? (0, r.jsx)(a.MenuItem, {
              id: 'leave-thread',
              label: e.isForumPost() ? l.Z.Messages.LEAVE_FORUM_POST : l.Z.Messages.LEAVE_THREAD,
              action: () => s.Z.leaveThread(e, t)
          })
        : (0, r.jsx)(a.MenuItem, {
              id: 'join-thread',
              label: e.isForumPost() ? l.Z.Messages.JOIN_FORUM_POST : l.Z.Messages.JOIN_THREAD,
              action: () => s.Z.joinThread(e, t)
          });
}
