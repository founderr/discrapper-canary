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
  var t;
  let a = (0, s.useCanManageThread)(e),
    l = (0, s.useCanUnarchiveThread)(e),
    o = e.isArchivedThread();
  if (o ? l : a) return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? (0, n.jsx)(r.MenuItem, {
    id: "unarchive-thread",
    label: e.isForumPost() ? u.default.Messages.UNARCHIVE_FORUM_POST : u.default.Messages.UNARCHIVE_THREAD,
    action: () => i.default.unarchiveThread(e, !1)
  }) : (0, n.jsx)(r.MenuItem, {
    id: "archive-thread",
    label: e.isForumPost() ? u.default.Messages.ARCHIVE_FORUM_POST : u.default.Messages.ARCHIVE_THREAD,
    action: () => i.default.archiveThread(e, !1)
  })
}