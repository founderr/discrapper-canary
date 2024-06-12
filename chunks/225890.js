"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("305325"),
  r = n("281956"),
  o = n("922482"),
  u = n("592125"),
  d = n("271383"),
  c = n("430824"),
  f = n("594174"),
  E = n("897285"),
  _ = n("924301"),
  m = n("482241"),
  T = n("11868"),
  I = n("231338");

function h(e) {
  let {
    code: t
  } = e, [n, h, p] = t.split("-"), {
    guildScheduledEvent: N,
    guild: S,
    channel: C,
    isMember: g
  } = (0, l.useStateFromStoresObject)([_.default, c.default, u.default, d.default, f.default], () => {
    var e, t;
    let s = null !== (t = _.default.getGuildScheduledEvent(h)) && void 0 !== t ? t : void 0,
      a = c.default.getGuild(n),
      l = u.default.getChannel(null == s ? void 0 : s.channel_id);
    return {
      guildScheduledEvent: s,
      guild: a,
      channel: l,
      isMember: d.default.isMember(n, null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
    }
  }, [n, h]);
  return a.useEffect(() => {
    (null == N ? void 0 : N.id) == null && m.default.fetchGuildEvent(n, h), E.default.getGuildEventUserCounts(n, h, null != p ? [p] : []), E.default.getGuildEventsForCurrentUser(n)
  }, [h, n, null == N ? void 0 : N.id, p]), (0, s.jsx)(T.default, {
    guild: S,
    channel: C,
    guildScheduledEvent: N,
    isMember: g,
    onAcceptInstantInvite: I.NOOP,
    onTransitionToInviteChannel: function() {
      if ((0, r.shouldShowMembershipVerificationGate)(n)) {
        (0, i.openMemberVerificationModal)(n);
        return
      }(null == C ? void 0 : C.isGuildStageVoice()) ? (0, o.connectAndOpen)(C) : (null == C ? void 0 : C.isGuildVoice()) && m.default.joinVoiceEvent(C.guild_id, C.id)
    },
    recurrenceId: p
  })
}