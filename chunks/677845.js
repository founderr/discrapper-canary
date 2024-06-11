"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("990547"),
  i = n("442837"),
  r = n("704215"),
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
  x = n("853085");

function v(e) {
  let {
    participants: t,
    onClick: n,
    onDoubleClick: v,
    onContextMenu: N,
    channel: M,
    className: y,
    inCall: R,
    totalNumberOfParticipants: L,
    paused: j = !1
  } = e, O = (0, o.useAppContext)() === A.AppContext.POPOUT, P = (0, i.useStateFromStores)([E.default], () => E.default.getGuild(M.guild_id), [M.guild_id]), {
    dismissedActivityEntryPointTileChannel: D
  } = (0, T.useChannelCallVideoGridStore)(), b = (0, i.useStateFromStores)([f.default], () => f.default.getUserParticipantCount(M.id), [M]), U = (0, p.useEnsureSyncedChannelParticipants)(M.id, t), F = l.useCallback(() => {
    T.useChannelCallVideoGridStore.setState({
      dismissedActivityEntryPointTileChannel: M.id
    })
  }, [M.id]);
  l.useEffect(() => {
    null != D && M.id !== D && T.useChannelCallVideoGridStore.setState({
      dismissedActivityEntryPointTileChannel: null
    })
  }, [M.id, D]);
  let w = (0, i.useStateFromStores)([C.default], () => M.isPrivate() || (0, m.canViewInviteModal)(C.default, P, M), [P, M]),
    k = (null == P ? void 0 : P.afkChannelId) === M.id,
    H = M.userLimit <= 0 || M.userLimit > 1,
    G = (0, i.useStateFromStores)([u.default], () => u.default.getEmbeddedActivitiesForChannel(M.id).length <= 0),
    B = (0, h.useIsDismissibleContentTypeDismissed)(r.DismissibleContent.VC_TILE_ACTIVITIES_ENTRY_POINT),
    V = (0, d.useEmbeddedActivityLaunchability)(M.id) !== d.EmbeddedActivityLaunchability.CAN_LAUNCH,
    W = null != D && D === M.id,
    Y = U.map(e => t => (0, a.jsx)(_.default, {
      participant: e,
      channel: M,
      className: x.tile,
      paused: j,
      onClick: n,
      onDoubleClick: v,
      onContextMenu: N,
      inCall: R,
      width: t,
      inPopout: O
    }, e.id));
  (0, c.default)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: L,
      can_invite: w,
      is_afk_channel: k,
      channel_user_limit: M.userLimit
    }
  }, {
    trackOnInitialLoad: !0
  }, []), null != P && !k && (!(b >= 2) || !G || V || B || W ? H && 1 === b && w && (G && !V ? Y.push(e => (0, a.jsx)(S.ActivityEntryPointTile, {
    channel: M,
    guild: P,
    width: e,
    inPopout: O,
    handleClose: F,
    userParticipantCount: b
  })) : Y.push(e => (0, a.jsx)(I.default, {
    width: e,
    channel: M,
    guild: P,
    inPopout: O
  }))) : Y.push(e => (0, a.jsx)(S.ActivityEntryPointTile, {
    channel: M,
    guild: P,
    width: e,
    inPopout: O,
    handleClose: F,
    userParticipantCount: b
  })));
  let z = l.useCallback(e => {
    var t, n;
    return null !== (n = null === (t = U[e]) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "empty-tile"
  }, [U]);
  return (0, a.jsx)(g.default, {
    className: y,
    keyExtractor: z,
    paddingTop: 64,
    paddingBottom: 64,
    children: Y
  })
}