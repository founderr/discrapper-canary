"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var n = a("37983");
a("884691");
var r = a("77078"),
  i = a("18054"),
  s = a("300322"),
  u = a("782340");

function l(e) {
  let t = (0, s.useCanManageThread)(e),
    a = (0, s.useIsActiveChannelOrUnarchivableThread)(e),
    l = (0, s.useIsNonModInLockedThread)(e);
  return !t || !a || l || __OVERLAY__ ? null : (0, n.jsx)(r.MenuItem, {
    id: "edit-thread",
    label: e.isForumPost() ? u.default.Messages.EDIT_FORUM_POST : u.default.Messages.EDIT_THREAD,
    action: () => {
      (0, r.closeAllModals)(), i.default.open(e.id)
    }
  })
}