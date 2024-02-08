"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  i = n("77078"),
  u = n("255397"),
  s = n("393414"),
  d = n("957255"),
  r = n("49111"),
  o = n("782340");

function c(e, t) {
  let n = (0, l.useStateFromStores)([d.default], () => d.default.can(r.Permissions.CONNECT, e), [e]);
  return n && e.isGuildVocal() ? (0, a.jsx)(i.MenuItem, {
    id: "open-chat",
    label: o.default.Messages.OPEN_CHAT,
    action: () => {
      u.default.updateChatOpen(e.id, !0), (0, s.transitionToGuild)(t.id, e.id)
    }
  }) : null
}