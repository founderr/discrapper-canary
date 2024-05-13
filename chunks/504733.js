"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var a = n("739566"),
  l = n("942951"),
  i = n("191741"),
  r = n("702346"),
  o = n("981791"),
  u = n("161777");

function d(e) {
  let {
    message: t,
    channel: n,
    compact: d
  } = e, c = (0, a.default)(t), E = t.application, f = (0, l.useUsernameHook)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, s.jsx)(r.default, {
    iconNode: (0, s.jsx)(i.default, {
      className: u.ticketIcon
    }),
    timestamp: t.timestamp,
    compact: d,
    children: (0, o.getApplicationSubscriptionSystemMessageContent)({
      application: E,
      username: c.nick,
      usernameHook: f(c)
    })
  })
}