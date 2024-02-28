"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("737960"),
  u = n("141681"),
  o = n("271938"),
  d = n("145131"),
  c = n("659500"),
  f = n("119106"),
  h = n("573540"),
  m = n("972155"),
  p = n("732961"),
  E = n("153984"),
  g = n("49111"),
  C = n("99795"),
  S = n("772313"),
  _ = (0, r.default)(e => {
    let {
      participants: t,
      filteredParticipants: n,
      selectedParticipant: s,
      participantsVersion: r,
      layout: _,
      onSelectParticipant: I,
      onContextMenuParticipant: T,
      onFullscreenParticipant: v,
      channel: x,
      hasConnectPermission: N,
      className: A,
      inCall: M,
      showParticipants: R = !0,
      paused: j = !1,
      width: L,
      height: O,
      idle: y,
      mode: P,
      popoutWindow: b,
      awaitingRemoteSessionInfo: D
    } = e;
    a.useEffect(() => {
      c.ComponentDispatch.dispatch(g.ComponentActions.REMEASURE_TARGET)
    }, [L, O]);
    let U = a.useMemo(() => n.filter(e => e.type !== C.ParticipantTypes.ACTIVITY || !e.participants.has(o.default.getId())), [n, r]);
    if ((null == D ? void 0 : D.channelId) === x.id) return (0, l.jsx)(h.default, {
      height: O
    });
    if ((null == x ? void 0 : x.isGuildVocal()) && !M) return (0, l.jsx)(f.default, {
      channel: x,
      participants: t,
      hasConnectPermission: N
    });
    if (P === g.ChannelModes.VOICE) return (0, l.jsx)(u.default, {
      guildId: x.guild_id,
      width: L,
      className: S.voiceCallWrapper,
      participants: t,
      onContextMenu: T
    });
    if (n = M ? n : t, null == s) return 0 === n.length ? (0, l.jsx)(E.default, {
      className: i(S.videoGrid, S.hiddenParticipants),
      channelId: x.id,
      width: L
    }) : (0, l.jsx)(d.default, {
      className: S.videoGridWrapper,
      justify: d.default.Justify.CENTER,
      align: d.default.Align.CENTER,
      children: (0, l.jsx)(m.default, {
        channel: x,
        className: S.videoGrid,
        participants: U,
        totalNumberOfParticipants: t.length,
        onClick: I,
        onDoubleClick: v,
        onContextMenu: T,
        paused: j,
        inCall: M
      })
    });
    return (0, l.jsx)(p.default, {
      onFullscreenParticipant: v,
      onContextMenuParticipant: T,
      onSelectParticipant: I,
      selectedParticipant: s,
      filteredParticipants: U,
      participants: t,
      popoutWindow: b,
      className: A,
      idle: y,
      height: O,
      width: L,
      layout: _,
      inCall: M,
      channel: x,
      showParticipants: R
    })
  })