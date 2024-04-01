"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("442837"),
  i = n("305325"),
  r = n("281956"),
  o = n("922482"),
  u = n("592125"),
  d = n("271383"),
  c = n("430824"),
  E = n("594174"),
  f = n("897285"),
  _ = n("924301"),
  T = n("482241"),
  I = n("11868"),
  m = n("231338");

function N(e) {
  let {
    code: t
  } = e, [n, N, p] = t.split("-"), {
    guildScheduledEvent: S,
    guild: C,
    channel: A,
    isMember: h
  } = (0, a.useStateFromStoresObject)([_.default, c.default, u.default, d.default, E.default], () => {
    var e, t;
    let s = null !== (t = _.default.getGuildScheduledEvent(N)) && void 0 !== t ? t : void 0,
      l = c.default.getGuild(n),
      a = u.default.getChannel(null == s ? void 0 : s.channel_id);
    return {
      guildScheduledEvent: s,
      guild: l,
      channel: a,
      isMember: d.default.isMember(n, null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
    }
  }, [n, N]);
  return l.useEffect(() => {
    (null == S ? void 0 : S.id) == null && T.default.fetchGuildEvent(n, N), f.default.getGuildEventUserCounts(n, N, null != p ? [p] : []), f.default.getGuildEventsForCurrentUser(n)
  }, [N, n, null == S ? void 0 : S.id, p]), (0, s.jsx)(I.default, {
    guild: C,
    channel: A,
    guildScheduledEvent: S,
    isMember: h,
    onAcceptInstantInvite: m.NOOP,
    onTransitionToInviteChannel: function() {
      if ((0, r.shouldShowMembershipVerificationGate)(n)) {
        (0, i.openMemberVerificationModal)(n);
        return
      }(null == A ? void 0 : A.isGuildStageVoice()) ? (0, o.connectAndOpen)(A) : (null == A ? void 0 : A.isGuildVoice()) && T.default.joinVoiceEvent(A.guild_id, A.id)
    },
    recurrenceId: p
  })
}