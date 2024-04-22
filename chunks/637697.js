"use strict";
t.r(a), t.d(a, {
  default: function() {
    return u
  }
});
var n = t("735250");
t("470079");
var s = t("481060"),
  r = t("51144"),
  d = t("689938");

function u(e) {
  let {
    user: a,
    onConfirmRemoveFriend: t,
    ...u
  } = e;
  return (0, n.jsx)(s.ConfirmModal, {
    header: d.default.Messages.REMOVE_FRIEND_TITLE.format({
      name: r.default.getName(a)
    }),
    confirmText: d.default.Messages.REMOVE_FRIEND,
    cancelText: d.default.Messages.CANCEL,
    onConfirm: t,
    ...u,
    children: (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      children: d.default.Messages.REMOVE_FRIEND_BODY.format({
        name: r.default.getName(a)
      })
    })
  })
}