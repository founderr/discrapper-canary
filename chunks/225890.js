"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
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
  E = n("594174"),
  f = n("897285"),
  _ = n("924301"),
  T = n("482241"),
  I = n("11868"),
  m = n("231338");

function p(e) {
  let {
    code: t
  } = e, [n, p, N] = t.split("-"), {
    guildScheduledEvent: S,
    guild: C,
    channel: A,
    isMember: h
  } = (0, l.useStateFromStoresObject)([_.default, c.default, u.default, d.default, E.default], () => {
    var e, t;
    let s = null !== (t = _.default.getGuildScheduledEvent(p)) && void 0 !== t ? t : void 0,
      a = c.default.getGuild(n),
      l = u.default.getChannel(null == s ? void 0 : s.channel_id);
    return {
      guildScheduledEvent: s,
      guild: a,
      channel: l,
      isMember: d.default.isMember(n, null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
    }
  }, [n, p]);
  return a.useEffect(() => {
    (null == S ? void 0 : S.id) == null && T.default.fetchGuildEvent(n, p), f.default.getGuildEventUserCounts(n, p, null != N ? [N] : []), f.default.getGuildEventsForCurrentUser(n)
  }, [p, n, null == S ? void 0 : S.id, N]), (0, s.jsx)(I.default, {
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
    recurrenceId: N
  })
}