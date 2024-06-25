n.d(t, {
  Z: function() {
    return I
  }
});
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(287734),
  o = n(367907),
  c = n(769654),
  u = n(496675),
  d = n(205129),
  E = n(626135),
  h = n(981631),
  _ = n(689938);

function I(e) {
  let t = i.useContext(E.AnalyticsContext),
    n = e.voiceChannels[0],
    I = (0, l.e7)([u.Z], () => null != n && u.Z.can(h.Plq.CONNECT, n.channel));
  return null == n ? null : [(0, s.jsx)(a.MenuItem, {
    id: "join-voice",
    action: function() {
      (0, c.X)(n.guild.id), r.default.selectVoiceChannel(n.channel.id), o.ZP.trackWithMetadata(h.rMx.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, {
        source: {
          ...t.location,
          object: h.qAy.LIST_ITEM
        },
        guild_id: n.guild.id,
        channel_id: n.channel.id,
        ...(0, d.y)(e)
      })
    },
    label: _.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_JOIN_CHANNEL,
    disabled: !I
  }, "join-voice"), (0, s.jsx)(a.MenuItem, {
    id: "goto-server",
    action: function() {
      (0, c.X)(n.guild.id), o.ZP.trackWithMetadata(h.rMx.ACTIVITY_FEED_GUILD_VISITED, {
        source: {
          ...t.location,
          object: h.qAy.LIST_ITEM
        },
        guild_id: n.guild.id,
        af_recently_played: !1,
        ...(0, d.y)(e)
      })
    },
    label: _.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_GO_TO_SERVER
  }, "goto-server")]
}