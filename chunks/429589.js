"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
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
  w = n("513202"),
  k = n("915863"),
  B = n("701488"),
  V = n("981631"),
  x = n("689938");

function F(e) {
  var t, n;
  let {
    activity: F,
    embeddedActivity: H,
    currentEmbeddedApplication: Y,
    isCurrentUser: j,
    color: W,
    look: K,
    user: z,
    onAction: Z,
    isEmbedded: X = !1
  } = e, {
    analyticsLocations: Q
  } = (0, _.default)(), [q, J] = r.useState(!1), $ = (0, s.useStateFromStores)([p.default], () => p.default.getCurrentUser()), ee = null !== (t = null == H ? void 0 : H.applicationId) && void 0 !== t ? t : null == F ? void 0 : F.application_id, et = (0, P.default)({
    channelId: null == H ? void 0 : H.channelId,
    userId: z.id,
    activity: F
  }), en = (0, s.useStateFromStores)([h.default, E.default, R.default, T.default], () => {
    let e;
    return (null == H ? void 0 : H.applicationId) != null ? e = H.applicationId : (null == F ? void 0 : F.application_id) != null && (e = F.application_id), X || null != e && (0, L.isLaunchable)({
      LibraryApplicationStore: h.default,
      LaunchableGameStore: E.default,
      DispatchApplicationStore: R.default,
      ConnectedAppsStore: T.default,
      applicationId: e
    })
  }), ei = (0, s.useStateFromStores)([D.default], () => Array.from(D.default.getSelfEmbeddedActivities().values()).some(e => {
    let {
      applicationId: t,
      channelId: n
    } = e;
    return (t === (null == F ? void 0 : F.application_id) || t === (null == H ? void 0 : H.applicationId)) && n === et
  })), er = (0, s.useStateFromStores)([C.default], () => null != F && null != F.application_id && C.default.getState(F.application_id, V.ActivityActionTypes.JOIN) === V.ActivityActionStates.LOADING), [es] = (0, c.default)((null == H ? void 0 : H.applicationId) != null ? [null == H ? void 0 : H.applicationId] : (null == F ? void 0 : F.application_id) != null ? [null == F ? void 0 : F.application_id] : []), ea = (0, U.useEmbeddedActivityJoinability)({
    userId: z.id,
    activity: F,
    channelId: et,
    application: es
  }), eo = (0, s.useStateFromStores)([I.default, S.default, f.default, m.default, N.default, O.default, A.default], () => null != H ? ea === U.EmbeddedActivityJoinability.CAN_JOIN : null != F ? (0, y.default)({
    user: z,
    activity: F,
    application: es,
    channelId: et,
    currentUser: $,
    isEmbedded: X,
    ChannelStore: I.default,
    GuildStore: S.default,
    GuildMemberCountStore: f.default,
    RelationshipStore: m.default,
    SelectedChannelStore: N.default,
    VoiceStateStore: O.default,
    PermissionStore: A.default
  }) : void 0), el = (0, s.useStateFromStores)([D.default], () => Array.from(D.default.getSelfEmbeddedActivities().values()).some(e => e.applicationId === (null == H ? void 0 : H.applicationId) && e.channelId === (null == H ? void 0 : H.channelId))), eu = (0, d.useAnalyticsContext)(), ed = !g.isPlatformEmbedded, e_ = (0, b.default)(F, V.ActivityFlags.JOIN) || X;
  if (null == H || !e_ || null == H.applicationId) return null;
  let ec = !j || X && !el,
    eE = ec && (ed || en) && !q && !ei && (!X || eo),
    eI = null;
  ec ? !ed && !en && null != F && (eI = x.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
    name: F.name
  })) : eI = x.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF;
  let eT = null !== (n = H.launchId) && void 0 !== n ? n : null == F ? void 0 : F.session_id,
    ef = async (e, t) => {
      var n;
      null != eT && null != ee && (await l.default.join({
        userId: e.id,
        sessionId: eT,
        applicationId: ee,
        channelId: N.default.getVoiceChannelId(),
        messageId: null,
        intent: B.ActivityIntent.PLAY,
        embedded: (0, b.default)(t, V.ActivityFlags.EMBEDDED)
      }), (0, G.default)({
        type: V.AnalyticsGameOpenTypes.JOIN,
        userId: e.id,
        applicationId: ee,
        partyId: null != t ? null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id : "",
        locationObject: eu.location,
        analyticsLocations: Q
      }))
    }, eS = async () => {
      let e = !1;
      if (X) {
        var t;
        if (!eo || null == et || null == ee) return;
        e = await (0, M.default)({
          applicationId: null !== (t = null == F ? void 0 : F.application_id) && void 0 !== t ? t : H.applicationId,
          currentEmbeddedApplication: Y,
          activityChannelId: et,
          locationObject: eu.location,
          embeddedActivitiesManager: w.default,
          analyticsLocations: Q
        })
      }
      if (!e) {
        let e;
        eo && (null == Z || Z(), ef(z, F)), J(!0), null != et && null != ee ? e = await v.sendEmbeddedActivityInviteUser({
          channelId: et,
          applicationId: ee,
          userId: z.id,
          location: V.AnalyticsLocations.PROFILE_POPOUT
        }) : null != F && (e = await o.default.sendActivityInviteUser({
          type: V.ActivityActionTypes.JOIN_REQUEST,
          userId: z.id,
          activity: F,
          location: V.AnalyticsLocations.PROFILE_POPOUT
        })), null != e && u.default.selectPrivateChannel(e.id)
      }
    }, eh = eo ? x.default.Messages.JOIN : x.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
  return X && (eh = x.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), el && (eh = x.default.Messages.EMBEDDED_ACTIVITIES_JOINED), (0, i.jsx)(a.Tooltip, {
    text: eI,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, i.jsx)(k.default, {
        onClick: eS,
        onMouseEnter: t,
        onMouseLeave: n,
        color: W,
        look: K,
        disabled: !eE,
        submitting: er,
        fullWidth: !0,
        children: eh
      })
    }
  }, "join")
}