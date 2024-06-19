n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(739566),
  a = n(942951),
  r = n(702346),
  o = n(981791),
  c = n(221207);

function u(e) {
  let {
    message: t,
    channel: n,
    compact: u
  } = e, d = (0, l.ZP)(t), E = t.application, _ = (0, a.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, s.jsx)(r.Z, {
    iconNode: (0, s.jsx)(i.TicketIcon, {
      size: "md",
      color: "currentColor",
      className: c.ticketIcon
    }),
    timestamp: t.timestamp,
    compact: u,
    children: (0, o.A)({
      application: E,
      username: d.nick,
      usernameHook: _(d)
    })
  })
}