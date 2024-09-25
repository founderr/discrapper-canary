t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    r = t(787014),
    l = t(665906),
    u = t(689938);
function s(e) {
    let n = (0, l.C7)(e),
        t = (0, l.$R)(e),
        s = (0, l.Gu)(e);
    return !n || !t || s || __OVERLAY__
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'edit-thread',
              label: e.isForumPost() ? u.Z.Messages.EDIT_FORUM_POST : u.Z.Messages.EDIT_THREAD,
              action: () => {
                  (0, a.closeAllModals)(), r.ZP.open(e.id);
              }
          });
}
