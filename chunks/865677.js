"use strict";
l.r(t), l.d(t, {
  default: function() {
    return G
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("446674"),
  i = l("77078"),
  r = l("260365"),
  o = l("823411"),
  u = l("987317"),
  d = l("997289"),
  c = l("685665"),
  f = l("442939"),
  m = l("860285"),
  p = l("42203"),
  h = l("86878"),
  E = l("525065"),
  T = l("305961"),
  S = l("686470"),
  _ = l("957255"),
  g = l("27618"),
  A = l("18494"),
  I = l("697218"),
  v = l("800762"),
  N = l("953998"),
  C = l("535974"),
  y = l("773336"),
  M = l("602043"),
  x = l("191225"),
  O = l("706508"),
  R = l("612696"),
  L = l("126808"),
  P = l("871388"),
  j = l("407908"),
  b = l("141962"),
  D = l("295999"),
  U = l("954016"),
  w = l("49111"),
  F = l("782340");

function G(e) {
  let {
    activity: t,
    currentEmbeddedApplication: l,
    isCurrentUser: G,
    color: Y,
    look: k,
    hover: V,
    user: B,
    channelId: H,
    isEmbedded: W = !1
  } = e, {
    analyticsLocations: z
  } = (0, c.default)(), [K, Z] = a.useState(!1), X = (0, L.default)({
    channelId: H,
    userId: B.id,
    activity: t
  }), J = (0, s.useStateFromStores)([I.default], () => I.default.getCurrentUser()), Q = (0, s.useStateFromStores)([S.default, m.default, C.default, h.default], () => W || (null == t ? void 0 : t.application_id) != null && (0, M.isLaunchable)({
    LibraryApplicationStore: S.default,
    LaunchableGameStore: m.default,
    DispatchApplicationStore: C.default,
    ConnectedAppsStore: h.default,
    applicationId: t.application_id
  })), q = (0, s.useStateFromStores)([x.default], () => Array.from(x.default.getSelfEmbeddedActivities().values()).some(e => {
    let {
      applicationId: l,
      channelId: n
    } = e;
    return l === (null == t ? void 0 : t.application_id) && n === X
  })), $ = (0, s.useStateFromStores)([N.default], () => null != t && null != t.application_id && N.default.getState(t.application_id, w.ActivityActionTypes.JOIN) === w.ActivityActionStates.LOADING), [ee] = (0, f.default)((null == t ? void 0 : t.application_id) != null ? [null == t ? void 0 : t.application_id] : []), et = (0, s.useStateFromStores)([p.default, T.default, E.default, g.default, A.default, v.default, _.default], () => (0, R.default)({
    user: B,
    activity: t,
    application: ee,
    channelId: X,
    currentUser: J,
    isEmbedded: W,
    ChannelStore: p.default,
    GuildStore: T.default,
    GuildMemberCountStore: E.default,
    RelationshipStore: g.default,
    SelectedChannelStore: A.default,
    VoiceStateStore: v.default,
    PermissionStore: _.default
  })), el = (0, d.useAnalyticsContext)(), en = !y.isPlatformEmbedded, ea = (0, P.default)(t, w.ActivityFlags.JOIN) || W;
  if (null == t || !ea || null == t.application_id) return null;
  let es = !G && (en || Q) && !K && !q && (!W || et),
    ei = null;
  G ? ei = F.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : !en && !Q && (ei = F.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
    name: t.name
  }));
  let er = async (e, t) => {
    var l;
    null != t.session_id && null != t.application_id && (await o.default.join({
      userId: e.id,
      sessionId: t.session_id,
      applicationId: t.application_id,
      channelId: A.default.getVoiceChannelId(),
      messageId: null,
      intent: U.ActivityIntent.PLAY,
      embedded: (0, P.default)(t, w.ActivityFlags.EMBEDDED)
    }), (0, j.default)({
      type: w.AnalyticsGameOpenTypes.JOIN,
      userId: e.id,
      applicationId: t.application_id,
      partyId: null === (l = t.party) || void 0 === l ? void 0 : l.id,
      locationObject: el.location,
      analyticsLocations: z
    }))
  }, eo = async () => {
    let e = !1;
    if (W) {
      if (!et || null == X || null == t.application_id) return;
      e = await (0, O.default)({
        applicationId: t.application_id,
        currentEmbeddedApplication: l,
        activityChannelId: X,
        locationObject: el.location,
        embeddedActivitiesManager: b.default,
        analyticsLocations: z
      })
    }
    if (!e) {
      et && er(B, t), Z(!0);
      let e = await r.default.sendActivityInviteUser({
        type: w.ActivityActionTypes.JOIN_REQUEST,
        userId: B.id,
        activity: t,
        location: w.AnalyticsLocations.PROFILE_POPOUT
      });
      null != e && u.default.selectPrivateChannel(e.id)
    }
  }, eu = et ? F.default.Messages.JOIN : F.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
  return W && (eu = F.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), (0, n.jsx)(i.Tooltip, {
    text: ei,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: l
      } = e;
      return (0, n.jsx)(D.default, {
        onClick: eo,
        onMouseEnter: t,
        onMouseLeave: l,
        color: Y,
        look: k,
        hover: V,
        disabled: !es,
        submitting: $,
        fullWidth: !0,
        children: eu
      })
    }
  }, "join")
}