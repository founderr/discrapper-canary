"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var n = a("37983");
a("884691");
var r = a("77078"),
  i = a("263024"),
  s = a("300322"),
  u = a("782340");

function l(e) {
  let t = (0, s.useIsThreadModerator)(e),
    a = e.isLockedThread();
  if (t) return a ? (0, n.jsx)(r.MenuItem, {
    id: "unlock-thread",
    label: e.isForumPost() ? u.default.Messages.UNLOCK_FORUM_POST : u.default.Messages.UNLOCK_THREAD,
    action: () => i.default.unlockThread(e)
  }) : (0, n.jsx)(r.MenuItem, {
    id: "lock-thread",
    label: e.isForumPost() ? u.default.Messages.LOCK_FORUM_POST : u.default.Messages.LOCK_THREAD,
    action: () => i.default.lockThread(e)
  })
}