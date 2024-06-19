n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(470079),
  i = n(106351),
  l = n(442837),
  a = n(434650),
  r = n(430824),
  o = n(63205),
  c = n(529726),
  u = n(981631);

function d(e) {
  var t, n;
  let {
    message: d,
    channel: E,
    enabled: _ = !0
  } = e, I = (0, l.e7)([r.Z], () => {
    var e;
    let t = r.Z.getGuild(E.guild_id);
    return null !== (e = null == t ? void 0 : t.hasFeature(u.oNc.COMMUNITY)) && void 0 !== e && e
  }, [E.guild_id]), T = (null === (t = d.messageReference) || void 0 === t ? void 0 : t.guild_id) != null && null != d.webhookId && d.hasFlag(u.iLy.IS_CROSSPOST) && null != E.guild_id, N = E.type === i.d.GUILD_ANNOUNCEMENT && I, m = !d.hasFlag(u.iLy.EPHEMERAL) && (T || N), h = T && null != d.messageReference ? d.messageReference.message_id : d.id, C = T && null != d.messageReference ? d.messageReference.channel_id : E.id, S = T && (null === (n = d.messageReference) || void 0 === n ? void 0 : n.guild_id) != null ? d.messageReference.guild_id : E.guild_id, A = s.useCallback(e => {
    e ? c.Z.handleMessageBecameVisible({
      messageId: h,
      channelId: E.id,
      guildId: E.guild_id,
      sourceChannelId: C,
      sourceGuildId: S
    }) : c.Z.handleMessageLostVisibility(h)
  }, [h, E.id, E.guild_id, C, S]), p = o.Z.useExperiment({
    location: "836a4b_1"
  }, {
    disable: !m || !_,
    autoTrackExposure: !0
  }).enabled, g = (0, a.O)(A, 0, p);
  return s.useEffect(() => () => {
    c.Z.handleMessageLostVisibility(h)
  }, [h]), g
}