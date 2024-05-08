"use strict";
u.r(t), u.d(t, {
  default: function() {
    return c
  }
});
var n = u("735250");
u("470079");
var a = u("442837"),
  l = u("481060"),
  d = u("889161"),
  s = u("471253"),
  i = u("924301"),
  o = u("482241"),
  r = u("765305"),
  f = u("689938");

function c(e, t, u) {
  let {
    canManageGuildEvent: c
  } = (0, d.useManageResourcePermissions)(null != u ? u : t), E = (0, a.useStateFromStores)([i.default], () => i.default.isActive(e)), M = (0, a.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e), [e]), _ = c(M);
  if (null == e || !_ || !E || (null == M ? void 0 : M.entity_type) === r.GuildScheduledEventEntityTypes.EXTERNAL) return null;
  let C = () => {
    if (null == u ? void 0 : u.isGuildStageVoice()) {
      (0, s.endStage)(u);
      return
    }
    null != e && o.default.endEvent(e, t.id), (0, l.closeAllModals)()
  };
  return (0, n.jsx)(l.MenuItem, {
    id: f.default.Messages.END_EVENT,
    label: f.default.Messages.END_EVENT,
    action: function() {
      (0, l.openModal)(e => (0, n.jsx)(l.ConfirmModal, {
        ...e,
        header: f.default.Messages.END_EVENT,
        confirmText: f.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: f.default.Messages.CANCEL,
        onConfirm: C,
        children: (0, n.jsx)(l.Text, {
          variant: "text-md/normal",
          children: f.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    },
    color: "danger"
  })
}