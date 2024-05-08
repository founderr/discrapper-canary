"use strict";
u.r(t), u.d(t, {
  default: function() {
    return r
  }
});
var n = u("735250");
u("470079");
var a = u("442837"),
  l = u("481060"),
  d = u("471253"),
  s = u("146085"),
  i = u("496675"),
  o = u("689938");

function r(e, t) {
  let u = (0, a.useStateFromStores)([i.default], () => i.default.can(s.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]);
  return null != t && u ? (0, n.jsx)(l.MenuItem, {
    id: "end-stage",
    label: o.default.Messages.END_STAGE,
    color: "danger",
    action: function() {
      (0, l.openModal)(t => (0, n.jsx)(l.ConfirmModal, {
        ...t,
        header: o.default.Messages.END_STAGE_TITLE,
        confirmText: o.default.Messages.END_STAGE,
        cancelText: o.default.Messages.CANCEL,
        onConfirm: () => (0, d.endStage)(e),
        children: (0, n.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: o.default.Messages.EXPLICIT_END_STAGE_SUBTITLE
        })
      }))
    }
  }) : null
}