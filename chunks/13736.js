t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    r = t(787014),
    o = t(665906),
    s = t(689938);
function u(e) {
    let n = (0, o.C7)(e),
        t = (0, o.$R)(e),
        u = (0, o.Gu)(e);
    return !n || !t || u || __OVERLAY__
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'edit-thread',
              label: e.isForumPost() ? s.Z.Messages.EDIT_FORUM_POST : s.Z.Messages.EDIT_THREAD,
              action: () => {
                  (0, a.closeAllModals)(), r.ZP.open(e.id);
              }
          });
}
