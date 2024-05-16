"use strict";
u.r(t), u.d(t, {
  default: function() {
    return f
  }
});
var n = u("735250");
u("470079");
var a = u("442837"),
  l = u("481060"),
  d = u("475179"),
  s = u("703656"),
  i = u("496675"),
  o = u("981631"),
  r = u("689938");

function f(e, t) {
  return (0, a.useStateFromStores)([i.default], () => i.default.can(o.Permissions.CONNECT, e), [e]) && e.isGuildVocal() ? (0, n.jsx)(l.MenuItem, {
    id: "open-chat",
    label: r.default.Messages.OPEN_CHAT,
    action: () => {
      d.default.updateChatOpen(e.id, !0), (0, s.transitionToGuild)(t.id, e.id)
    }
  }) : null
}