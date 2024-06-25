n.d(t, {
  Z: function() {
    return S
  }
}), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(990547),
  a = n(442837),
  r = n(704215),
  o = n(40851),
  c = n(317381),
  u = n(374065),
  d = n(213609),
  h = n(358221),
  m = n(381586),
  E = n(159300),
  p = n(470956),
  g = n(430824),
  f = n(496675),
  C = n(199052),
  _ = n(434488),
  I = n(27457),
  x = n(251564),
  T = n(695492),
  N = n(981631),
  Z = n(420751);

function S(e) {
  let {
    participants: t,
    onClick: n,
    onDoubleClick: S,
    onContextMenu: v,
    channel: A,
    className: M,
    inCall: R,
    totalNumberOfParticipants: j,
    paused: L = !1
  } = e, O = (0, o.bp)() === N.IlC.POPOUT, P = (0, a.e7)([g.Z], () => g.Z.getGuild(A.guild_id), [A.guild_id]), {
    dismissedActivityEntryPointTileChannel: y
  } = (0, x.d)(), b = (0, a.e7)([h.Z], () => h.Z.getUserParticipantCount(A.id), [A]), D = (0, p.bt)(A.id, t), U = i.useCallback(() => {
    x.d.setState({
      dismissedActivityEntryPointTileChannel: A.id
    })
  }, [A.id]);
  i.useEffect(() => {
    null != y && A.id !== y && x.d.setState({
      dismissedActivityEntryPointTileChannel: null
    })
  }, [A.id, y]);
  let k = (0, a.e7)([f.Z], () => A.isPrivate() || (0, E.b)(f.Z, P, A), [P, A]),
    w = (null == P ? void 0 : P.afkChannelId) === A.id,
    H = A.userLimit <= 0 || A.userLimit > 1,
    G = (0, a.e7)([c.ZP], () => c.ZP.getEmbeddedActivitiesForChannel(A.id).length <= 0),
    B = (0, m.N)(r.z.VC_TILE_ACTIVITIES_ENTRY_POINT),
    V = (0, u.KF)(A.id) !== u.jy.CAN_LAUNCH,
    F = null != y && y === A.id,
    z = D.map(e => t => (0, l.jsx)(I.ZP, {
      participant: e,
      channel: A,
      className: Z.tile,
      paused: L,
      onClick: n,
      onDoubleClick: S,
      onContextMenu: v,
      inCall: R,
      width: t,
      inPopout: O
    }, e.id));
  (0, d.Z)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: j,
      can_invite: k,
      is_afk_channel: w,
      channel_user_limit: A.userLimit
    }
  }, {
    trackOnInitialLoad: !0
  }, []), null != P && !w && (!(b >= 2) || !G || V || B || F ? H && 1 === b && k && (G && !V ? z.push(e => (0, l.jsx)(_.h, {
    channel: A,
    guild: P,
    width: e,
    inPopout: O,
    handleClose: U,
    userParticipantCount: b
  })) : z.push(e => (0, l.jsx)(T.Z, {
    width: e,
    channel: A,
    guild: P,
    inPopout: O
  }))) : z.push(e => (0, l.jsx)(_.h, {
    channel: A,
    guild: P,
    width: e,
    inPopout: O,
    handleClose: U,
    userParticipantCount: b
  })));
  let W = i.useCallback(e => {
    var t, n;
    return null !== (n = null === (t = D[e]) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "empty-tile"
  }, [D]);
  return (0, l.jsx)(C.Z, {
    className: M,
    keyExtractor: W,
    paddingTop: 64,
    paddingBottom: 64,
    children: z
  })
}