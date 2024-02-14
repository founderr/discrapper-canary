"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var u = n("37983");
n("884691");
var l = n("446674"),
  i = n("77078"),
  d = n("817963"),
  a = n("244480"),
  r = n("398604"),
  s = n("322224"),
  o = n("745049"),
  c = n("782340");

function E(e, t, n) {
  let {
    canManageGuildEvent: E
  } = (0, d.useManageResourcePermissions)(null != n ? n : t), f = (0, l.useStateFromStores)([r.default], () => r.default.isActive(e)), _ = (0, l.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e), [e]), S = E(_);
  if (null == e || !S || !f || (null == _ ? void 0 : _.entity_type) === o.GuildScheduledEventEntityTypes.EXTERNAL) return null;
  let T = () => {
    if (null == n ? void 0 : n.isGuildStageVoice()) {
      (0, a.endStage)(n);
      return
    }
    null != e && s.default.endEvent(e, t.id), (0, i.closeAllModals)()
  };
  return (0, u.jsx)(i.MenuItem, {
    id: c.default.Messages.END_EVENT,
    label: c.default.Messages.END_EVENT,
    action: function() {
      (0, i.openModal)(e => (0, u.jsx)(i.ConfirmModal, {
        ...e,
        header: c.default.Messages.END_EVENT,
        confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: c.default.Messages.CANCEL,
        onConfirm: T,
        children: (0, u.jsx)(i.Text, {
          variant: "text-md/normal",
          children: c.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    },
    color: "danger"
  })
}