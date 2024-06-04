"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("990547"),
  i = n("442837"),
  r = n("524437"),
  o = n("40851"),
  u = n("317381"),
  d = n("374065"),
  c = n("213609"),
  f = n("358221"),
  h = n("381586"),
  m = n("159300"),
  p = n("470956"),
  E = n("430824"),
  C = n("496675"),
  g = n("199052"),
  S = n("434488"),
  _ = n("27457"),
  T = n("251564"),
  I = n("695492"),
  A = n("981631"),
  v = n("853085");

function N(e) {
  var t;
  let {
    participants: n,
    onClick: N,
    onDoubleClick: x,
    onContextMenu: M,
    channel: R,
    className: y,
    inCall: L,
    totalNumberOfParticipants: O,
    paused: j = !1
  } = e, P = (0, o.useAppContext)() === A.AppContext.POPOUT, D = (0, i.useStateFromStores)([E.default], () => E.default.getGuild(R.guild_id), [R.guild_id]), {
    dismissedActivityEntryPointTileChannel: b
  } = (0, T.useChannelCallVideoGridStore)(), U = (0, i.useStateFromStores)([f.default], () => f.default.getUserParticipantCount(R.id), [R]), F = (0, p.useEnsureSyncedChannelParticipants)(R.id, null !== (t = R.getGuildId()) && void 0 !== t ? t : A.ME, n), w = l.useCallback(() => {
    T.useChannelCallVideoGridStore.setState({
      dismissedActivityEntryPointTileChannel: R.id
    })
  }, [R.id]);
  l.useEffect(() => {
    null != b && R.id !== b && T.useChannelCallVideoGridStore.setState({
      dismissedActivityEntryPointTileChannel: null
    })
  }, [R.id, b]);
  let k = (0, i.useStateFromStores)([C.default], () => R.isPrivate() || (0, m.canViewInviteModal)(C.default, D, R), [D, R]),
    H = (null == D ? void 0 : D.afkChannelId) === R.id,
    B = R.userLimit <= 0 || R.userLimit > 1,
    G = (0, i.useStateFromStores)([u.default], () => u.default.getEmbeddedActivitiesForChannel(R.id).length <= 0),
    V = (0, h.useIsDismissibleContentTypeDismissed)(r.DismissibleContent.VC_TILE_ACTIVITIES_ENTRY_POINT),
    W = (0, d.useEmbeddedActivityLaunchability)(R.id) !== d.EmbeddedActivityLaunchability.CAN_LAUNCH,
    Y = null != b && b === R.id,
    z = F.map(e => t => (0, a.jsx)(_.default, {
      participant: e,
      channel: R,
      className: v.tile,
      paused: j,
      onClick: N,
      onDoubleClick: x,
      onContextMenu: M,
      inCall: L,
      width: t,
      inPopout: P
    }, e.id));
  (0, c.default)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: O,
      can_invite: k,
      is_afk_channel: H,
      channel_user_limit: R.userLimit
    }
  }, {
    trackOnInitialLoad: !0
  }, []), null != D && !H && (!(U >= 2) || !G || W || V || Y ? B && 1 === U && k && (G && !W ? z.push(e => (0, a.jsx)(S.ActivityEntryPointTile, {
    channel: R,
    guild: D,
    width: e,
    inPopout: P,
    handleClose: w,
    userParticipantCount: U
  })) : z.push(e => (0, a.jsx)(I.default, {
    width: e,
    channel: R,
    guild: D,
    inPopout: P
  }))) : z.push(e => (0, a.jsx)(S.ActivityEntryPointTile, {
    channel: R,
    guild: D,
    width: e,
    inPopout: P,
    handleClose: w,
    userParticipantCount: U
  })));
  let K = l.useCallback(e => {
    var t, n;
    return null !== (n = null === (t = F[e]) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "empty-tile"
  }, [F]);
  return (0, a.jsx)(g.default, {
    className: y,
    keyExtractor: K,
    paddingTop: 64,
    paddingBottom: 64,
    children: z
  })
}