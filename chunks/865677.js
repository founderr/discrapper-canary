"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("446674"),
  s = n("77078"),
  r = n("260365"),
  o = n("823411"),
  u = n("987317"),
  d = n("997289"),
  c = n("685665"),
  f = n("442939"),
  p = n("860285"),
  m = n("42203"),
  h = n("86878"),
  E = n("525065"),
  S = n("305961"),
  g = n("686470"),
  C = n("957255"),
  T = n("27618"),
  v = n("18494"),
  I = n("697218"),
  _ = n("800762"),
  y = n("953998"),
  A = n("535974"),
  N = n("773336"),
  x = n("602043"),
  O = n("191225"),
  R = n("706508"),
  M = n("612696"),
  L = n("126808"),
  P = n("871388"),
  b = n("407908"),
  j = n("141962"),
  U = n("295999"),
  D = n("954016"),
  k = n("49111"),
  w = n("782340");

function F(e) {
  let {
    activity: t,
    currentEmbeddedApplication: n,
    isCurrentUser: F,
    color: G,
    look: B,
    hover: H,
    user: V,
    channelId: K,
    isEmbedded: W = !1
  } = e, {
    analyticsLocations: Y
  } = (0, c.default)(), [z, J] = i.useState(!1), q = (0, L.default)({
    channelId: K,
    userId: V.id,
    activity: t
  }), Z = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser()), Q = (0, a.useStateFromStores)([g.default, p.default, A.default, h.default], () => W || (null == t ? void 0 : t.application_id) != null && (0, x.isLaunchable)({
    LibraryApplicationStore: g.default,
    LaunchableGameStore: p.default,
    DispatchApplicationStore: A.default,
    ConnectedAppsStore: h.default,
    applicationId: t.application_id
  })), X = (0, a.useStateFromStores)([O.default], () => Array.from(O.default.getSelfEmbeddedActivities().values()).some(e => {
    let {
      applicationId: n,
      channelId: l
    } = e;
    return n === (null == t ? void 0 : t.application_id) && l === q
  })), $ = (0, a.useStateFromStores)([y.default], () => null != t && null != t.application_id && y.default.getState(t.application_id, k.ActivityActionTypes.JOIN) === k.ActivityActionStates.LOADING), [ee] = (0, f.default)((null == t ? void 0 : t.application_id) != null ? [null == t ? void 0 : t.application_id] : []), et = (0, a.useStateFromStores)([m.default, S.default, E.default, T.default, v.default, _.default, C.default], () => (0, M.default)({
    user: V,
    activity: t,
    application: ee,
    channelId: q,
    currentUser: Z,
    isEmbedded: W,
    ChannelStore: m.default,
    GuildStore: S.default,
    GuildMemberCountStore: E.default,
    RelationshipStore: T.default,
    SelectedChannelStore: v.default,
    VoiceStateStore: _.default,
    PermissionStore: C.default
  })), en = (0, d.useAnalyticsContext)(), el = !N.isPlatformEmbedded, ei = (0, P.default)(t, k.ActivityFlags.JOIN) || W;
  if (null == t || !ei || null == t.application_id) return null;
  let ea = !F && (el || Q) && !z && !X && (!W || et),
    es = null;
  F ? es = w.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : !el && !Q && (es = w.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
    name: t.name
  }));
  let er = async (e, t) => {
    var n;
    null != t.session_id && null != t.application_id && (await o.default.join({
      userId: e.id,
      sessionId: t.session_id,
      applicationId: t.application_id,
      channelId: v.default.getVoiceChannelId(),
      messageId: null,
      intent: D.ActivityIntent.PLAY,
      embedded: (0, P.default)(t, k.ActivityFlags.EMBEDDED)
    }), (0, b.default)({
      type: k.AnalyticsGameOpenTypes.JOIN,
      userId: e.id,
      applicationId: t.application_id,
      partyId: null === (n = t.party) || void 0 === n ? void 0 : n.id,
      locationObject: en.location,
      analyticsLocations: Y
    }))
  }, eo = async () => {
    let e = !1;
    if (W) {
      if (!et || null == q || null == t.application_id) return;
      e = await (0, R.default)({
        applicationId: t.application_id,
        currentEmbeddedApplication: n,
        activityChannelId: q,
        locationObject: en.location,
        embeddedActivitiesManager: j.default,
        analyticsLocations: Y
      })
    }
    if (!e) {
      et && er(V, t), J(!0);
      let e = await r.default.sendActivityInviteUser({
        type: k.ActivityActionTypes.JOIN_REQUEST,
        userId: V.id,
        activity: t,
        location: k.AnalyticsLocations.PROFILE_POPOUT
      });
      null != e && u.default.selectPrivateChannel(e.id)
    }
  }, eu = et ? w.default.Messages.JOIN : w.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
  return W && (eu = w.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), (0, l.jsx)(s.Tooltip, {
    text: es,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, l.jsx)(U.default, {
        onClick: eo,
        onMouseEnter: t,
        onMouseLeave: n,
        color: G,
        look: B,
        hover: H,
        disabled: !ea,
        submitting: $,
        fullWidth: !0,
        children: eu
      })
    }
  }, "join")
}