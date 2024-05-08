"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("442837"),
  s = n("481060"),
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
  v = n("317381"),
  D = n("638880"),
  M = n("255621"),
  y = n("452634"),
  P = n("620662"),
  U = n("275920"),
  b = n("513202"),
  G = n("915863"),
  w = n("701488"),
  k = n("981631"),
  B = n("689938");

function V(e) {
  let {
    activity: t,
    currentEmbeddedApplication: n,
    isCurrentUser: V,
    color: x,
    look: F,
    hover: H,
    user: Y,
    onAction: j,
    isEmbedded: W = !1,
    channelId: K
  } = e, {
    analyticsLocations: z
  } = (0, _.default)(), [Z, X] = r.useState(!1), Q = (0, a.useStateFromStores)([p.default], () => p.default.getCurrentUser()), q = null == t ? void 0 : t.application_id, J = (0, a.useStateFromStores)([v.default], () => W ? null != K && null != q ? v.default.getEmbeddedActivitiesForChannel(K).find(e => e.applicationId === q) : v.default.getEmbeddedActivityForUserId(Y.id, q) : null, [Y.id, W, q, K]), $ = (0, y.default)({
    channelId: null == J ? void 0 : J.channelId,
    userId: Y.id,
    activity: t
  }), ee = (0, a.useStateFromStores)([h.default, E.default, R.default, T.default], () => W || (null == t ? void 0 : t.application_id) != null && (0, L.isLaunchable)({
    LibraryApplicationStore: h.default,
    LaunchableGameStore: E.default,
    DispatchApplicationStore: R.default,
    ConnectedAppsStore: T.default,
    applicationId: t.application_id
  })), et = (0, a.useStateFromStores)([v.default], () => Array.from(v.default.getSelfEmbeddedActivities().values()).some(e => {
    let {
      applicationId: n,
      channelId: i
    } = e;
    return n === (null == t ? void 0 : t.application_id) && i === $
  })), en = (0, a.useStateFromStores)([C.default], () => null != t && null != t.application_id && C.default.getState(t.application_id, k.ActivityActionTypes.JOIN) === k.ActivityActionStates.LOADING), [ei] = (0, c.default)((null == t ? void 0 : t.application_id) != null ? [null == t ? void 0 : t.application_id] : []), er = (0, a.useStateFromStores)([I.default, S.default, f.default, m.default, N.default, O.default, A.default], () => (0, M.default)({
    user: Y,
    activity: t,
    application: ei,
    channelId: $,
    currentUser: Q,
    isEmbedded: W,
    ChannelStore: I.default,
    GuildStore: S.default,
    GuildMemberCountStore: f.default,
    RelationshipStore: m.default,
    SelectedChannelStore: N.default,
    VoiceStateStore: O.default,
    PermissionStore: A.default
  })), ea = (0, a.useStateFromStores)([v.default], () => Array.from(v.default.getSelfEmbeddedActivities().values()).some(e => e.applicationId === (null == J ? void 0 : J.applicationId) && e.channelId === (null == J ? void 0 : J.channelId))), es = (0, d.useAnalyticsContext)(), eo = !g.isPlatformEmbedded, el = (0, P.default)(t, k.ActivityFlags.JOIN) || W;
  if (null == t || !el || null == t.application_id) return null;
  let eu = !V || W && !ea,
    ed = eu && (eo || ee) && !Z && !et && (!W || er),
    e_ = null;
  eu ? !eo && !ee && (e_ = B.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
    name: t.name
  })) : e_ = B.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF;
  let ec = async (e, t) => {
    var n;
    null != t.session_id && null != t.application_id && (await l.default.join({
      userId: e.id,
      sessionId: t.session_id,
      applicationId: t.application_id,
      channelId: N.default.getVoiceChannelId(),
      messageId: null,
      intent: w.ActivityIntent.PLAY,
      embedded: (0, P.default)(t, k.ActivityFlags.EMBEDDED)
    }), (0, U.default)({
      type: k.AnalyticsGameOpenTypes.JOIN,
      userId: e.id,
      applicationId: t.application_id,
      partyId: null === (n = t.party) || void 0 === n ? void 0 : n.id,
      locationObject: es.location,
      analyticsLocations: z
    }))
  }, eE = async () => {
    let e = !1;
    if (W) {
      if (!er || null == $ || null == t.application_id) return;
      e = await (0, D.default)({
        applicationId: t.application_id,
        currentEmbeddedApplication: n,
        activityChannelId: $,
        locationObject: es.location,
        embeddedActivitiesManager: b.default,
        analyticsLocations: z
      })
    }
    if (!e) {
      er && (null == j || j(), ec(Y, t)), X(!0);
      let e = await o.default.sendActivityInviteUser({
        type: k.ActivityActionTypes.JOIN_REQUEST,
        userId: Y.id,
        activity: t,
        location: k.AnalyticsLocations.PROFILE_POPOUT
      });
      null != e && u.default.selectPrivateChannel(e.id)
    }
  }, eI = er ? B.default.Messages.JOIN : B.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
  return W && (eI = B.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), ea && (eI = B.default.Messages.EMBEDDED_ACTIVITIES_JOINED), (0, i.jsx)(s.Tooltip, {
    text: e_,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, i.jsx)(G.default, {
        onClick: eE,
        onMouseEnter: t,
        onMouseLeave: n,
        color: x,
        look: F,
        hover: H,
        disabled: !ed,
        submitting: en,
        fullWidth: !0,
        children: eI
      })
    }
  }, "join")
}