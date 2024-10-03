n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var s = n(481060),
    a = n(787014),
    l = n(665906),
    r = n(689938);
function o(e) {
    let t = (0, l.C7)(e),
        n = (0, l.$R)(e),
        o = (0, l.Gu)(e);
    return !t || !n || o || __OVERLAY__
        ? null
        : (0, i.jsx)(s.MenuItem, {
              id: 'edit-thread',
              label: e.isForumPost() ? r.Z.Messages.EDIT_FORUM_POST : r.Z.Messages.EDIT_THREAD,
              action: () => {
                  (0, s.closeAllModals)(), a.ZP.open(e.id);
              }
          });
}
