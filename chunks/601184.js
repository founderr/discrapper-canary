"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var n = s("735250");
s("470079");
var a = s("442837"),
  l = s("481060"),
  i = s("904245"),
  u = s("257559"),
  d = s("665906"),
  r = s("496675"),
  o = s("594174"),
  c = s("740727"),
  f = s("981631"),
  E = s("689938");

function g(e, t) {
  let s = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    g = (0, d.useIsActiveChannelOrUnarchivableThread)(t),
    m = (0, a.useStateFromStores)([r.default], () => r.default.can(f.Permissions.MANAGE_MESSAGES, t), [t]),
    M = m || null != s && e.canDeleteOwnMessage(s.id);
  return e.state === f.MessageStates.SENDING || !M || f.MessageTypesSets.UNDELETABLE.has(e.type) || !g ? null : (0, n.jsx)(l.MenuItem, {
    id: "delete",
    label: E.default.Messages.DELETE_MESSAGE,
    action: function(s) {
      e.state === f.MessageStates.SEND_FAILED ? i.default.deleteMessage(t.id, e.id, !0) : s.shiftKey ? i.default.deleteMessage(t.id, e.id) : u.default.confirmDelete(t, e, !0)
    },
    color: "danger",
    icon: c.default
  })
}