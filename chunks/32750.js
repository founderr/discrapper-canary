e.d(t, {
    Z: function () {
        return u;
    }
});
var i = e(200651);
e(192379);
var r = e(481060),
    a = e(346479),
    l = e(665906),
    o = e(388032);
function u(n) {
    var t;
    let e = (0, l.C7)(n),
        u = (0, l.tc)(n),
        d = n.isArchivedThread();
    if (d ? u : e)
        return (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.archived)
            ? (0, i.jsx)(r.MenuItem, {
                  id: 'unarchive-thread',
                  label: n.isForumPost() ? o.intl.string(o.t.cnRubW) : o.intl.string(o.t.S9E4Gx),
                  action: () => a.Z.unarchiveThread(n, !1)
              })
            : (0, i.jsx)(r.MenuItem, {
                  id: 'archive-thread',
                  label: n.isForumPost() ? o.intl.string(o.t.BTs4KS) : o.intl.string(o.t.wiIevb),
                  action: () => a.Z.archiveThread(n, !1)
              });
}
