"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("481060"),
  r = a("287734"),
  o = a("367907"),
  u = a("920440"),
  d = a("496675"),
  c = a("205129"),
  f = a("626135"),
  E = a("981631"),
  h = a("689938");

function _(e) {
  let t = s.useContext(f.AnalyticsContext),
    a = e.voiceChannels[0],
    _ = (0, l.useStateFromStores)([d.default], () => null != a && d.default.can(E.Permissions.CONNECT, a.channel));
  return null == a ? null : [(0, n.jsx)(i.MenuItem, {
    id: "join-voice",
    action: function() {
      (0, u.transitionToGuild)(a.guild.id), r.default.selectVoiceChannel(a.channel.id), o.default.trackWithMetadata(E.AnalyticEvents.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, {
        source: {
          ...t.location,
          object: E.AnalyticsObjects.LIST_ITEM
        },
        guild_id: a.guild.id,
        channel_id: a.channel.id,
        ...(0, c.getPartyMetadata)(e)
      })
    },
    label: h.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_JOIN_CHANNEL,
    disabled: !_
  }, "join-voice"), (0, n.jsx)(i.MenuItem, {
    id: "goto-server",
    action: function() {
      (0, u.transitionToGuild)(a.guild.id), o.default.trackWithMetadata(E.AnalyticEvents.ACTIVITY_FEED_GUILD_VISITED, {
        source: {
          ...t.location,
          object: E.AnalyticsObjects.LIST_ITEM
        },
        guild_id: a.guild.id,
        af_recently_played: !1,
        ...(0, c.getPartyMetadata)(e)
      })
    },
    label: h.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_GO_TO_SERVER
  }, "goto-server")]
}