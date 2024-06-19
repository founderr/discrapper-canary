n.d(t, {
  p: function() {
    return d
  }
});
var s = n(106351),
  i = n(131704),
  l = n(23750),
  a = n(598077),
  r = n(592125),
  o = n(375954),
  c = n(594174),
  u = n(981631);

function d(e) {
  var t, n, d;
  let E = o.Z.getMessage(e.channelId, e.messageId),
    _ = c.default.getUser(e.authorId),
    I = r.Z.getChannel(e.channelId),
    T = null != _ ? _ : new a.Z({
      id: e.authorId,
      username: e.authorSummary
    }),
    N = new l.ZP({
      id: e.messageId,
      channel_id: e.channelId,
      author: T,
      content: e.messageSummary
    }),
    m = null == e.guildId ? new i.cE({
      id: e.channelId,
      type: s.d.DM,
      name: null !== (t = e.channelSummary) && void 0 !== t ? t : "",
      guild_id: u.lds,
      recipients: [null !== (n = e.authorId) && void 0 !== n ? n : u.lds]
    }) : new i.DA({
      id: e.channelId,
      type: null == e.guildId ? s.d.DM : s.d.GUILD_TEXT,
      name: null !== (d = e.channelSummary) && void 0 !== d ? d : "",
      guild_id: e.guildId
    });
  return {
    channel: null != I ? I : m,
    message: null != E ? E : N
  }
}