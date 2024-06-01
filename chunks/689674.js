"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("470079"),
  a = n("106351"),
  l = n("442837"),
  i = n("434650"),
  r = n("430824"),
  o = n("63205"),
  u = n("529726"),
  d = n("981631");

function c(e) {
  var t, n;
  let {
    message: c,
    channel: E,
    enabled: f = !0
  } = e, _ = (0, l.useStateFromStores)([r.default], () => {
    var e;
    let t = r.default.getGuild(E.guild_id);
    return null !== (e = null == t ? void 0 : t.hasFeature(d.GuildFeatures.COMMUNITY)) && void 0 !== e && e
  }, [E.guild_id]), T = (null === (t = c.messageReference) || void 0 === t ? void 0 : t.guild_id) != null && null != c.webhookId && c.hasFlag(d.MessageFlags.IS_CROSSPOST) && null != E.guild_id, m = E.type === a.ChannelTypes.GUILD_ANNOUNCEMENT && _, I = !c.hasFlag(d.MessageFlags.EPHEMERAL) && (T || m), N = T && null != c.messageReference ? c.messageReference.message_id : c.id, p = T && null != c.messageReference ? c.messageReference.channel_id : E.id, S = T && (null === (n = c.messageReference) || void 0 === n ? void 0 : n.guild_id) != null ? c.messageReference.guild_id : E.guild_id, C = s.useCallback(e => {
    e ? u.default.handleMessageBecameVisible({
      messageId: N,
      channelId: E.id,
      guildId: E.guild_id,
      sourceChannelId: p,
      sourceGuildId: S
    }) : u.default.handleMessageLostVisibility(N)
  }, [N, E.id, E.guild_id, p, S]), A = o.default.useExperiment({
    location: "836a4b_1"
  }, {
    disable: !I || !f,
    autoTrackExposure: !0
  }).enabled, h = (0, i.useIsVisible)(C, 0, A);
  return s.useEffect(() => () => {
    u.default.handleMessageLostVisibility(N)
  }, [N]), h
}