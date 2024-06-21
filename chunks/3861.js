var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(112724),
  o = n(613611),
  c = n(351248),
  u = n(285952),
  d = n(585483),
  h = n(340295),
  m = n(171277),
  p = n(677845),
  E = n(430371),
  g = n(236564),
  f = n(981631),
  C = n(354459),
  _ = n(858962);
t.Z = (0, r.Z)(e => {
  let {
    participants: t,
    filteredParticipants: n,
    selectedParticipant: s,
    participantsVersion: r,
    layout: I,
    onSelectParticipant: x,
    onContextMenuParticipant: T,
    onFullscreenParticipant: N,
    channel: Z,
    hasConnectPermission: S,
    className: v,
    inCall: A,
    showParticipants: M = !0,
    paused: R = !1,
    width: j,
    height: L,
    idle: O,
    mode: P,
    popoutWindow: b,
    awaitingRemoteSessionInfo: y
  } = e;
  i.useEffect(() => {
    d.S.dispatch(f.CkL.REMEASURE_TARGET)
  }, [j, L]);
  let D = i.useMemo(() => n.filter(e => e.type !== C.fO.ACTIVITY || !e.participants.some(e => (0, o.J)(e))), [n, r]);
  if ((null == y ? void 0 : y.channelId) === Z.id) return (0, l.jsx)(m.Z, {
    height: L
  });
  if ((null == Z ? void 0 : Z.isGuildVocal()) && !A) return (0, l.jsx)(h.Z, {
    channel: Z,
    participants: t,
    hasConnectPermission: S
  });
  if (P === f.WtW.VOICE) return (0, l.jsx)(c.Z, {
    guildId: Z.guild_id,
    width: j,
    className: _.voiceCallWrapper,
    participants: t,
    onContextMenu: T
  });
  if (n = A ? n : t, null == s) return 0 === n.length ? (0, l.jsx)(g.Z, {
    className: a()(_.videoGrid, _.hiddenParticipants),
    channelId: Z.id,
    width: j
  }) : (0, l.jsx)(u.Z, {
    className: _.videoGridWrapper,
    justify: u.Z.Justify.CENTER,
    align: u.Z.Align.CENTER,
    children: (0, l.jsx)(p.Z, {
      channel: Z,
      className: _.videoGrid,
      participants: D,
      totalNumberOfParticipants: t.length,
      onClick: x,
      onDoubleClick: N,
      onContextMenu: T,
      paused: R,
      inCall: A
    })
  });
  return (0, l.jsx)(E.Z, {
    onFullscreenParticipant: N,
    onContextMenuParticipant: T,
    onSelectParticipant: x,
    selectedParticipant: s,
    filteredParticipants: D,
    participants: t,
    popoutWindow: b,
    className: v,
    idle: O,
    height: L,
    width: j,
    layout: I,
    inCall: A,
    channel: Z,
    showParticipants: M
  })
})