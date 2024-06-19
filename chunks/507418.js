n.d(t, {
  Z: function() {
    return E
  }
});
var s = n(735250);
n(470079);
var i = n(512722),
  l = n.n(i),
  a = n(83474),
  r = n(245315),
  o = n(556041),
  c = n(103575),
  u = n(592125),
  d = n(368859);

function E(e, t) {
  if ((0, r.cp)(t)) return (0, s.jsx)(o.Z, {});
  if ((0, d.Z)(t)) {
    let {
      guild_id: e,
      channel_id: n,
      message_id: i
    } = t.messageReference;
    if (null != e) return (0, s.jsx)(a.ZP, {
      guildId: e,
      channelId: n,
      messageId: i
    })
  }
  if (null != t.interaction && "SENDING" === t.state) return (0, s.jsx)(s.Fragment, {});
  let n = u.Z.getChannel(t.channel_id);
  return l()(null != n, "renderUserGuildPopout: channel should never be null"), (0, s.jsx)(c.Z, {
    ...e,
    location: "renderUserGuildPopout",
    channelId: t.channel_id,
    messageId: t.id,
    guildId: n.guild_id,
    userId: t.author.id,
    user: null != t.webhookId ? t.author : void 0
  })
}