"use strict";
n.r(t), n.d(t, {
  getSavedMessageAndChannel: function() {
    return c
  }
});
var a = n("106351"),
  l = n("131704"),
  s = n("23750"),
  i = n("598077"),
  r = n("592125"),
  o = n("375954"),
  u = n("594174"),
  d = n("981631");

function c(e) {
  var t, n, c;
  let f = o.default.getMessage(e.channelId, e.messageId),
    h = u.default.getUser(e.authorId),
    E = r.default.getChannel(e.channelId),
    m = null != h ? h : new i.default({
      id: e.authorId,
      username: e.authorSummary
    }),
    p = new s.default({
      id: e.messageId,
      channel_id: e.channelId,
      author: m,
      content: e.messageSummary
    }),
    g = null == e.guildId ? new l.DMChannelRecord({
      id: e.channelId,
      type: a.ChannelTypes.DM,
      name: null !== (t = e.channelSummary) && void 0 !== t ? t : "",
      guild_id: d.EMPTY_STRING_SNOWFLAKE_ID,
      recipients: [null !== (n = e.authorId) && void 0 !== n ? n : d.EMPTY_STRING_SNOWFLAKE_ID]
    }) : new l.GuildTextualChannelRecord({
      id: e.channelId,
      type: null == e.guildId ? a.ChannelTypes.DM : a.ChannelTypes.GUILD_TEXT,
      name: null !== (c = e.channelSummary) && void 0 !== c ? c : "",
      guild_id: e.guildId
    });
  return {
    channel: null != E ? E : g,
    message: null != f ? f : p
  }
}