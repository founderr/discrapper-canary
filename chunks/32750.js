n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var s = n(481060),
    a = n(346479),
    l = n(665906),
    r = n(689938);
function o(e) {
    var t;
    let n = (0, l.C7)(e),
        o = (0, l.tc)(e),
        c = e.isArchivedThread();
    if (c ? o : n)
        return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived)
            ? (0, i.jsx)(s.MenuItem, {
                  id: 'unarchive-thread',
                  label: e.isForumPost() ? r.Z.Messages.UNARCHIVE_FORUM_POST : r.Z.Messages.UNARCHIVE_THREAD,
                  action: () => a.Z.unarchiveThread(e, !1)
              })
            : (0, i.jsx)(s.MenuItem, {
                  id: 'archive-thread',
                  label: e.isForumPost() ? r.Z.Messages.ARCHIVE_FORUM_POST : r.Z.Messages.ARCHIVE_THREAD,
                  action: () => a.Z.archiveThread(e, !1)
              });
}
