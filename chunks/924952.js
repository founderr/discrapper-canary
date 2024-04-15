"use strict";
u.r(t), u.d(t, {
  default: function() {
    return c
  }
});
var a = u("735250");
u("470079");
var n = u("442837"),
  l = u("481060"),
  s = u("889161"),
  d = u("471253"),
  i = u("924301"),
  o = u("482241"),
  r = u("765305"),
  f = u("689938");

function c(e, t, u) {
  let {
    canManageGuildEvent: c
  } = (0, s.useManageResourcePermissions)(null != u ? u : t), E = (0, n.useStateFromStores)([i.default], () => i.default.isActive(e)), _ = (0, n.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e), [e]), M = c(_);
  if (null == e || !M || !E || (null == _ ? void 0 : _.entity_type) === r.GuildScheduledEventEntityTypes.EXTERNAL) return null;
  let S = () => {
    if (null == u ? void 0 : u.isGuildStageVoice()) {
      (0, d.endStage)(u);
      return
    }
    null != e && o.default.endEvent(e, t.id), (0, l.closeAllModals)()
  };
  return (0, a.jsx)(l.MenuItem, {
    id: f.default.Messages.END_EVENT,
    label: f.default.Messages.END_EVENT,
    action: function() {
      (0, l.openModal)(e => (0, a.jsx)(l.ConfirmModal, {
        ...e,
        header: f.default.Messages.END_EVENT,
        confirmText: f.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: f.default.Messages.CANCEL,
        onConfirm: S,
        children: (0, a.jsx)(l.Text, {
          variant: "text-md/normal",
          children: f.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    },
    color: "danger"
  })
}