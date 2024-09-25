t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    r = t(346479),
    l = t(665906),
    u = t(689938);
function s(e) {
    var n;
    let t = (0, l.C7)(e),
        s = (0, l.tc)(e),
        o = e.isArchivedThread();
    if (o ? s : t)
        return (null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.archived)
            ? (0, i.jsx)(a.MenuItem, {
                  id: 'unarchive-thread',
                  label: e.isForumPost() ? u.Z.Messages.UNARCHIVE_FORUM_POST : u.Z.Messages.UNARCHIVE_THREAD,
                  action: () => r.Z.unarchiveThread(e, !1)
              })
            : (0, i.jsx)(a.MenuItem, {
                  id: 'archive-thread',
                  label: e.isForumPost() ? u.Z.Messages.ARCHIVE_FORUM_POST : u.Z.Messages.ARCHIVE_THREAD,
                  action: () => r.Z.archiveThread(e, !1)
              });
}
