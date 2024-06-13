"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
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
  T = n("482241"),
  m = n("11868"),
  I = n("231338");

function N(e) {
  let {
    code: t
  } = e, [n, N, p] = t.split("-"), {
    guildScheduledEvent: h,
    guild: S,
    channel: C,
    isMember: A
  } = (0, l.useStateFromStoresObject)([_.default, c.default, u.default, d.default, f.default], () => {
    var e, t;
    let s = null !== (t = _.default.getGuildScheduledEvent(N)) && void 0 !== t ? t : void 0,
      a = c.default.getGuild(n),
      l = u.default.getChannel(null == s ? void 0 : s.channel_id);
    return {
      guildScheduledEvent: s,
      guild: a,
      channel: l,
      isMember: d.default.isMember(n, null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
    }
  }, [n, N]);
  return a.useEffect(() => {
    (null == h ? void 0 : h.id) == null && T.default.fetchGuildEvent(n, N), E.default.getGuildEventUserCounts(n, N, null != p ? [p] : []), E.default.getGuildEventsForCurrentUser(n)
  }, [N, n, null == h ? void 0 : h.id, p]), (0, s.jsx)(m.default, {
    guild: S,
    channel: C,
    guildScheduledEvent: h,
    isMember: A,
    onAcceptInstantInvite: I.NOOP,
    onTransitionToInviteChannel: function() {
      if ((0, r.shouldShowMembershipVerificationGate)(n)) {
        (0, i.openMemberVerificationModal)(n);
        return
      }(null == C ? void 0 : C.isGuildStageVoice()) ? (0, o.connectAndOpen)(C) : (null == C ? void 0 : C.isGuildVoice()) && T.default.joinVoiceEvent(C.guild_id, C.id)
    },
    recurrenceId: p
  })
}