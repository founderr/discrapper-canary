var l = n(735250),
  i = n(470079),
  s = n(392711),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(557135),
  u = n(590293),
  d = n(66999),
  h = n(665906),
  m = n(496675),
  p = n(979651),
  E = n(502568),
  g = n(585483),
  f = n(981631),
  C = n(689938);
t.Z = i.memo(function(e) {
  let {
    channel: t
  } = e, n = (0, u.Z)(), s = (0, r.e7)([p.Z], () => p.Z.isInChannel(t.id)), _ = (0, r.e7)([p.Z], () => !a().isEmpty(p.Z.getVoiceStatesForChannel(t.id))), I = (0, r.e7)([m.Z], () => m.Z.can(f.Plq.CONNECT, t)), {
    needSubscriptionToAccess: x
  } = (0, d.Z)(t.id), T = (0, h.$R)(t), N = i.useCallback(() => {
    c.Z.handleVoiceConnect({
      channel: t,
      connected: s,
      needSubscriptionToAccess: x,
      locked: !1
    })
  }, [t, s, x]);
  return (i.useEffect(() => (g.S.subscribe(f.CkL.CALL_START, N), () => {
    g.S.unsubscribe(f.CkL.CALL_START, N)
  }), [N]), h.tM.useExperiment({
    guildId: t.guild_id,
    location: "63250c_1"
  }, {
    autoTrackExposure: !1
  }).enabled && !n && !s && I && T && t.isVocalThread()) ? (0, l.jsx)(E.ZP.Icon, {
    icon: o.PhoneCallIcon,
    onClick: N,
    tooltip: _ ? C.Z.Messages.JOIN_VOICE_CALL : C.Z.Messages.START_VOICE_CALL
  }) : null
})