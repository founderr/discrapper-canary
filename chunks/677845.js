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
  r = n("524437"),
  o = n("40851"),
  u = n("317381"),
  d = n("374065"),
  c = n("213609"),
  f = n("358221"),
  h = n("381586"),
  m = n("159300"),
  p = n("430824"),
  E = n("496675"),
  C = n("199052"),
  g = n("434488"),
  S = n("27457"),
  _ = n("251564"),
  T = n("695492"),
  I = n("981631"),
  A = n("446816");

function v(e) {
  let {
    participants: t,
    onClick: n,
    onDoubleClick: v,
    onContextMenu: x,
    channel: N,
    className: M,
    inCall: R,
    totalNumberOfParticipants: L,
    paused: y = !1
  } = e, j = (0, o.useAppContext)() === I.AppContext.POPOUT, O = (0, i.useStateFromStores)([p.default], () => p.default.getGuild(N.guild_id), [N.guild_id]), {
    dismissedActivityEntryPointTileChannel: P
  } = (0, _.useChannelCallVideoGridStore)(), D = (0, i.useStateFromStores)([f.default], () => f.default.getUserParticipantCount(N.id), [N]), b = l.useCallback(() => {
    _.useChannelCallVideoGridStore.setState({
      dismissedActivityEntryPointTileChannel: N.id
    })
  }, [N.id]);
  l.useEffect(() => {
    null != P && N.id !== P && _.useChannelCallVideoGridStore.setState({
      dismissedActivityEntryPointTileChannel: null
    })
  }, [N.id, P]);
  let U = (0, i.useStateFromStores)([E.default], () => N.isPrivate() || (0, m.canViewInviteModal)(E.default, O, N), [O, N]),
    F = (null == O ? void 0 : O.afkChannelId) === N.id,
    w = N.userLimit <= 0 || N.userLimit > 1,
    k = (0, i.useStateFromStores)([u.default], () => u.default.getEmbeddedActivitiesForChannel(N.id).length <= 0),
    H = (0, h.useIsDismissibleContentTypeDismissed)(r.DismissibleContent.VC_TILE_ACTIVITIES_ENTRY_POINT),
    B = (0, d.useEmbeddedActivityLaunchability)(N.id) !== d.EmbeddedActivityLaunchability.CAN_LAUNCH,
    G = null != P && P === N.id,
    V = t.map(e => t => (0, a.jsx)(S.default, {
      participant: e,
      channel: N,
      className: A.tile,
      paused: y,
      onClick: n,
      onDoubleClick: v,
      onContextMenu: x,
      inCall: R,
      width: t,
      inPopout: j
    }, e.id));
  (0, c.default)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: L,
      can_invite: U,
      is_afk_channel: F,
      channel_user_limit: N.userLimit
    }
  }, {
    trackOnInitialLoad: !0
  }, []), null != O && !F && (!(D >= 2) || !k || B || H || G ? w && 1 === D && U && (k && !B ? V.push(e => (0, a.jsx)(g.ActivityEntryPointTile, {
    channel: N,
    guild: O,
    width: e,
    inPopout: j,
    handleClose: b,
    userParticipantCount: D
  })) : V.push(e => (0, a.jsx)(T.default, {
    width: e,
    channel: N,
    guild: O,
    inPopout: j
  }))) : V.push(e => (0, a.jsx)(g.ActivityEntryPointTile, {
    channel: N,
    guild: O,
    width: e,
    inPopout: j,
    handleClose: b,
    userParticipantCount: D
  })));
  let W = l.useCallback(e => {
    var n, a;
    return null !== (a = null === (n = t[e]) || void 0 === n ? void 0 : n.id) && void 0 !== a ? a : "empty-tile"
  }, [t]);
  return (0, a.jsx)(C.default, {
    className: M,
    keyExtractor: W,
    paddingTop: 64,
    paddingBottom: 64,
    children: V
  })
}