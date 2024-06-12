"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var i = n("481060"),
  l = n("496675"),
  s = n("885442"),
  r = n("996861"),
  u = n("981631"),
  o = n("689938");

function d(e, t) {
  let n = t.getGuildId();
  return null != n && (e.type === u.MessageTypes.USER_JOIN || e.type === u.MessageTypes.GUILD_INVITE_REMINDER) && l.default.canWithPartialContext(u.Permissions.MANAGE_GUILD, {
    guildId: n
  }) ? (0, a.jsx)(i.MenuItem, {
    id: "configure",
    label: o.default.Messages.CONFIGURE,
    icon: s.default,
    action: () => (0, r.configureJoin)(t)
  }) : null
}