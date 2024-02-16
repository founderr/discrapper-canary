"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("759843"),
  i = n("446674"),
  r = n("151426"),
  o = n("244201"),
  u = n("191225"),
  d = n("117582"),
  c = n("943349"),
  f = n("428958"),
  h = n("191145"),
  m = n("393171"),
  p = n("242757"),
  E = n("305961"),
  S = n("957255"),
  g = n("466079"),
  C = n("444657"),
  _ = n("679243"),
  I = n("832897"),
  T = n("308419"),
  v = n("49111"),
  x = n("842030");

function N(e) {
  let {
    participants: t,
    onClick: n,
    onDoubleClick: N,
    onContextMenu: A,
    channel: M,
    className: R,
    inCall: j,
    totalNumberOfParticipants: L,
    paused: y = !1
  } = e, O = (0, o.useAppContext)(), P = O === v.AppContext.POPOUT, b = (0, i.useStateFromStores)([E.default], () => E.default.getGuild(M.guild_id), [M.guild_id]), {
    dismissedActivityEntryPointTileChannel: D
  } = (0, I.useChannelCallVideoGridStore)(), U = (0, i.useStateFromStores)([h.default], () => h.default.getUserParticipantCount(M.id), [M]), w = a.useCallback(() => {
    I.useChannelCallVideoGridStore.setState({
      dismissedActivityEntryPointTileChannel: M.id
    })
  }, [M.id]);
  a.useEffect(() => {
    null != D && M.id !== D && I.useChannelCallVideoGridStore.setState({
      dismissedActivityEntryPointTileChannel: null
    })
  }, [M.id, D]);
  let F = (0, i.useStateFromStores)([S.default], () => M.isPrivate() || (0, p.canViewInviteModal)(S.default, b, M), [b, M]),
    k = (null == b ? void 0 : b.afkChannelId) === M.id,
    B = M.userLimit <= 0 || M.userLimit > 1,
    {
      vcTileActivityExperimentType: V
    } = d.VcTileActivitiesEntryPointExperiment.useExperiment({
      location: "8711e9_1"
    }, {
      autoTrackExposure: !1
    });
  M.isGuildVoice() && d.VcTileActivitiesEntryPointExperiment.trackExposure({
    location: "8711e9_2"
  });
  let H = (0, i.useStateFromStores)([u.default], () => u.default.getEmbeddedActivitiesForChannel(M.id).length <= 0),
    G = (0, m.useIsDismissibleContentTypeDismissed)(r.DismissibleContent.VC_TILE_ACTIVITIES_ENTRY_POINT),
    W = (0, c.useEmbeddedActivityLaunchability)(M.id),
    Y = W !== c.EmbeddedActivityLaunchability.CAN_LAUNCH,
    z = null != D && D === M.id,
    K = t.map(e => t => (0, l.jsx)(_.default, {
      participant: e,
      channel: M,
      className: x.tile,
      paused: y,
      onClick: n,
      onDoubleClick: N,
      onContextMenu: A,
      inCall: j,
      width: t,
      inPopout: P
    }, e.id));
  (0, f.default)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
    properties: {
      total_participants: L,
      can_invite: F,
      is_afk_channel: k,
      channel_user_limit: M.userLimit
    }
  }, {
    trackOnInitialLoad: !0
  }, []), null != b && !k && ((V !== d.VcTileActivityExperimentType.ONE_OR_TWO_USERS || 2 !== U) && (V !== d.VcTileActivityExperimentType.ANY_NUMBER_OF_USERS || !(U >= 2)) || !H || Y || G || z ? B && 1 === U && F && ([d.VcTileActivityExperimentType.ONE_OR_TWO_USERS, d.VcTileActivityExperimentType.ANY_NUMBER_OF_USERS].includes(V) && H && !Y ? K.push(e => (0, l.jsx)(C.ActivityEntryPointTile, {
    channel: M,
    guild: b,
    width: e,
    inPopout: P,
    handleClose: w,
    userParticipantCount: U
  })) : K.push(e => (0, l.jsx)(T.default, {
    width: e,
    channel: M,
    guild: b,
    inPopout: P
  }))) : K.push(e => (0, l.jsx)(C.ActivityEntryPointTile, {
    channel: M,
    guild: b,
    width: e,
    inPopout: P,
    handleClose: w,
    userParticipantCount: U
  })));
  let Z = a.useCallback(e => {
    var n, l;
    return null !== (l = null === (n = t[e]) || void 0 === n ? void 0 : n.id) && void 0 !== l ? l : "empty-tile"
  }, [t]);
  return (0, l.jsx)(g.default, {
    className: R,
    keyExtractor: Z,
    paddingTop: 64,
    paddingBottom: 64,
    children: K
  })
}