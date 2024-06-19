n.d(t, {
  Z: function() {
    return h
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(305325),
  r = n(281956),
  o = n(922482),
  c = n(592125),
  u = n(271383),
  d = n(430824),
  E = n(594174),
  _ = n(897285),
  I = n(924301),
  T = n(482241),
  N = n(11868),
  m = n(231338);

function h(e) {
  let {
    code: t
  } = e, [n, h, C] = t.split("-"), {
    guildScheduledEvent: S,
    guild: A,
    channel: p,
    isMember: g
  } = (0, l.cj)([I.ZP, d.Z, c.Z, u.ZP, E.default], () => {
    var e, t;
    let s = null !== (t = I.ZP.getGuildScheduledEvent(h)) && void 0 !== t ? t : void 0,
      i = d.Z.getGuild(n),
      l = c.Z.getChannel(null == s ? void 0 : s.channel_id);
    return {
      guildScheduledEvent: s,
      guild: i,
      channel: l,
      isMember: u.ZP.isMember(n, null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
    }
  }, [n, h]);
  return i.useEffect(() => {
    (null == S ? void 0 : S.id) == null && T.Z.fetchGuildEvent(n, h), _.Z.getGuildEventUserCounts(n, h, null != C ? [C] : []), _.Z.getGuildEventsForCurrentUser(n)
  }, [h, n, null == S ? void 0 : S.id, C]), (0, s.jsx)(N.ZP, {
    guild: A,
    channel: p,
    guildScheduledEvent: S,
    isMember: g,
    onAcceptInstantInvite: m.dG,
    onTransitionToInviteChannel: function() {
      if ((0, r.n)(n)) {
        (0, a.hk)(n);
        return
      }(null == p ? void 0 : p.isGuildStageVoice()) ? (0, o.Cq)(p) : (null == p ? void 0 : p.isGuildVoice()) && T.Z.joinVoiceEvent(p.guild_id, p.id)
    },
    recurrenceId: C
  })
}