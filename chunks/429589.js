"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("442837"),
  a = n("481060"),
  o = n("278323"),
  l = n("224706"),
  u = n("287734"),
  d = n("2052"),
  _ = n("906732"),
  c = n("835473"),
  E = n("592745"),
  I = n("592125"),
  T = n("757266"),
  f = n("650774"),
  S = n("430824"),
  h = n("283595"),
  A = n("496675"),
  m = n("699516"),
  N = n("944486"),
  p = n("594174"),
  O = n("979651"),
  C = n("181106"),
  R = n("417363"),
  g = n("358085"),
  L = n("804739"),
  v = n("566620"),
  D = n("317381"),
  M = n("638880"),
  y = n("255621"),
  P = n("452634"),
  U = n("527805"),
  b = n("620662"),
  G = n("275920"),
  w = n("952561"),
  k = n("513202"),
  B = n("915863"),
  V = n("701488"),
  x = n("981631"),
  F = n("689938");

function H(e) {
  var t, n;
  let {
    activity: H,
    embeddedActivity: Y,
    user: j,
    onAction: W,
    isEmbedded: K = !1,
    ButtonComponent: z = B.default,
    ...Z
  } = e, {
    analyticsLocations: Q
  } = (0, _.default)(), [X, q] = r.useState(!1), J = (0, s.useStateFromStores)([p.default], () => p.default.getCurrentUser()), $ = j.id === (null == J ? void 0 : J.id), ee = null !== (t = null == Y ? void 0 : Y.applicationId) && void 0 !== t ? t : null == H ? void 0 : H.application_id, et = (0, P.default)({
    channelId: null == Y ? void 0 : Y.channelId,
    userId: j.id,
    activity: H
  }), en = (0, s.useStateFromStores)([h.default, E.default, R.default, T.default], () => K || null != ee && (0, L.isLaunchable)({
    LibraryApplicationStore: h.default,
    LaunchableGameStore: E.default,
    DispatchApplicationStore: R.default,
    ConnectedAppsStore: T.default,
    applicationId: ee
  })), ei = (0, s.useStateFromStores)([D.default], () => Array.from(D.default.getSelfEmbeddedActivities().values()).some(e => {
    let {
      applicationId: t,
      channelId: n
    } = e;
    return (t === (null == H ? void 0 : H.application_id) || t === (null == Y ? void 0 : Y.applicationId)) && n === et
  })), er = (0, s.useStateFromStores)([C.default], () => null != H && null != H.application_id && C.default.getState(H.application_id, x.ActivityActionTypes.JOIN) === x.ActivityActionStates.LOADING), [es] = (0, c.default)((null == Y ? void 0 : Y.applicationId) != null ? [null == Y ? void 0 : Y.applicationId] : (null == H ? void 0 : H.application_id) != null ? [null == H ? void 0 : H.application_id] : []), ea = (0, U.useEmbeddedActivityJoinability)({
    userId: j.id,
    activity: H,
    channelId: et,
    application: es
  }), eo = (0, s.useStateFromStores)([I.default, S.default, f.default, m.default, N.default, O.default, A.default], () => null != Y ? ea === U.EmbeddedActivityJoinability.CAN_JOIN : null != H ? (0, y.default)({
    user: j,
    activity: H,
    application: es,
    channelId: et,
    currentUser: J,
    isEmbedded: K,
    ChannelStore: I.default,
    GuildStore: S.default,
    GuildMemberCountStore: f.default,
    RelationshipStore: m.default,
    SelectedChannelStore: N.default,
    VoiceStateStore: O.default,
    PermissionStore: A.default
  }) : void 0), el = (0, s.useStateFromStores)([D.default], () => Array.from(D.default.getSelfEmbeddedActivities().values()).some(e => e.applicationId === (null == Y ? void 0 : Y.applicationId) && e.channelId === (null == Y ? void 0 : Y.channelId))), eu = (0, w.default)(), ed = (0, d.useAnalyticsContext)(), e_ = !g.isPlatformEmbedded;
  if (!((0, b.default)(H, x.ActivityFlags.JOIN) || K) || null == ee) return null;
  let ec = !$ || K && !el,
    eE = ec && (e_ || en) && !X && !ei && (!K || eo),
    eI = null;
  ec ? !e_ && !en && null != H && (eI = F.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
    name: H.name
  })) : eI = F.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF;
  let eT = null !== (n = null == Y ? void 0 : Y.launchId) && void 0 !== n ? n : null == H ? void 0 : H.session_id,
    ef = async (e, t) => {
      var n;
      null != eT && null != ee && (await l.default.join({
        userId: e.id,
        sessionId: eT,
        applicationId: ee,
        channelId: N.default.getVoiceChannelId(),
        messageId: null,
        intent: V.ActivityIntent.PLAY,
        embedded: (0, b.default)(t, x.ActivityFlags.EMBEDDED)
      }), (0, G.default)({
        type: x.AnalyticsGameOpenTypes.JOIN,
        userId: e.id,
        applicationId: ee,
        partyId: null != t ? null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id : "",
        locationObject: ed.location,
        analyticsLocations: Q
      }))
    }, eS = async () => {
      let e = !1;
      if (K) {
        if (!eo || null == et || null == ee) return;
        e = await (0, M.default)({
          applicationId: ee,
          currentEmbeddedApplication: eu,
          activityChannelId: et,
          locationObject: ed.location,
          embeddedActivitiesManager: k.default,
          analyticsLocations: Q
        })
      }
      if (!e) {
        let e;
        eo && (null == W || W(), ef(j, H)), q(!0), null != et && null != ee ? e = await v.sendEmbeddedActivityInviteUser({
          channelId: et,
          applicationId: ee,
          userId: j.id,
          location: x.AnalyticsLocations.PROFILE_POPOUT
        }) : null != H && (e = await o.default.sendActivityInviteUser({
          type: x.ActivityActionTypes.JOIN_REQUEST,
          userId: j.id,
          activity: H,
          location: x.AnalyticsLocations.PROFILE_POPOUT
        })), null != e && u.default.selectPrivateChannel(e.id)
      }
    }, eh = eo ? F.default.Messages.JOIN : F.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
  return K && (eh = F.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), el && (eh = F.default.Messages.EMBEDDED_ACTIVITIES_JOINED), (0, i.jsx)(a.Tooltip, {
    text: eI,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, i.jsx)(z, {
        onClick: eS,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: !eE,
        submitting: er,
        fullWidth: !0,
        ...Z,
        children: eh
      })
    }
  }, "join")
}