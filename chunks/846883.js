"use strict";
n.r(t), n.d(t, {
  default: function() {
    return X
  }
}), n("222007"), n("424973");
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("260365"),
  d = n("823411"),
  s = n("997289"),
  o = n("685665"),
  r = n("442939"),
  c = n("662285"),
  f = n("782911"),
  I = n("629414"),
  _ = n("53887"),
  p = n("486150"),
  A = n("555759"),
  E = n("271938"),
  T = n("42203"),
  v = n("525065"),
  N = n("305961"),
  S = n("957255"),
  y = n("824563"),
  C = n("27618"),
  h = n("18494"),
  m = n("101125"),
  M = n("697218"),
  g = n("800762"),
  O = n("953998"),
  b = n("387111"),
  L = n("550766"),
  F = n("191225"),
  G = n("706508"),
  R = n("126939"),
  x = n("612696"),
  j = n("501260"),
  V = n("871388"),
  U = n("152311"),
  P = n("407908"),
  Y = n("698372"),
  D = n("141962"),
  H = n("954016"),
  J = n("49111"),
  w = n("450484"),
  k = n("782340");

function X(e, t) {
  let {
    analyticsLocations: X
  } = (0, o.default)(), z = (0, i.useStateFromStores)([M.default], () => M.default.getCurrentUser()), K = (0, i.useStateFromStores)([F.default], () => F.default.getSelfEmbeddedActivities()), B = (0, i.useStateFromStoresArray)([m.default], () => m.default.getActivities().filter(e => null != e.application_id && !(null == K ? void 0 : K.has(e.application_id)))), W = (0, i.useStateFromStoresArray)([y.default], () => null != t ? y.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), Q = (0, i.useStateFromStoresArray)([F.default], () => {
    let n = (null == e ? void 0 : e.id) != null ? F.default.getEmbeddedActivitiesForChannel(e.id) : F.NO_ACTIVITIES;
    return null != t ? n.filter(e => {
      let {
        userIds: n
      } = e;
      return n.has(t.id)
    }) : n
  }, [t, e]), q = (0, Y.default)(), Z = (0, i.useStateFromStores)([S.default], () => null == e || e.isPrivate() || S.default.can(J.Permissions.SEND_MESSAGES, e), [e]), $ = (0, i.useStateFromStoresArray)([O.default], () => [...W.map(e => null != e.application_id && O.default.getState(e.application_id, J.ActivityActionTypes.JOIN) === J.ActivityActionStates.LOADING), ...Q.map(e => O.default.getState(e.applicationId, J.ActivityActionTypes.JOIN) === J.ActivityActionStates.LOADING)], [W, Q]), ee = (0, r.default)([...W.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...Q.map(e => e.applicationId)]), et = null == e ? void 0 : e.id, en = (0, i.useStateFromStoresArray)([T.default, N.default, v.default, C.default, h.default, g.default, S.default], () => [...W.map(e => (0, x.default)({
    user: null != t ? t : z,
    activity: e,
    application: ee.find(t => (null == t ? void 0 : t.id) === e.application_id),
    channelId: et,
    currentUser: z,
    isEmbedded: (0, U.default)(e),
    ChannelStore: T.default,
    GuildStore: N.default,
    GuildMemberCountStore: v.default,
    RelationshipStore: C.default,
    SelectedChannelStore: h.default,
    VoiceStateStore: g.default,
    PermissionStore: S.default
  })), ...Q.map(e => {
    let n = null != t ? t : z;
    return null != n && (0, j.default)({
      userId: n.id,
      application: ee.find(t => (null == t ? void 0 : t.id) === e.applicationId),
      channelId: et,
      currentUser: z,
      isActivitiesEnabledForCurrentPlatform: (0, R.getIsActivitiesEnabledForCurrentPlatform)(),
      ChannelStore: T.default,
      GuildStore: N.default,
      VoiceStateStore: g.default,
      PermissionStore: S.default
    }) === j.EmbeddedActivityJoinability.CAN_JOIN
  })], [W, ee, et, z, Q, t]), ea = (0, i.useStateFromStoresArray)([c.default, E.default], () => W.map(e => e.type === J.ActivityTypes.LISTENING && null != t ? (0, _.default)(c.default, E.default, t, e) : void 0), [t, W]), ei = (0, s.useAnalyticsContext)();
  if (!Z) return null;
  let el = (n, a) => {
      null != e ? u.default.sendActivityInvite({
        type: n,
        channelId: e.id,
        activity: a,
        location: J.AnalyticsLocations.CONTEXT_MENU
      }) : null != t && u.default.sendActivityInviteUser({
        type: n,
        userId: t.id,
        activity: a,
        location: J.AnalyticsLocations.CONTEXT_MENU
      })
    },
    eu = (i, u) => {
      let d = T.default.getChannel(i),
        s = null == d ? void 0 : N.default.getGuild(d.guild_id);
      if (null != d && null != s) {
        if (null != t) return L.sendEmbeddedActivityInviteUser({
          channelId: d.id,
          applicationId: u,
          userId: t.id,
          location: J.InstantInviteSources.CONTEXT_MENU
        });
        if (null != e && e.type === J.ChannelTypes.GUILD_VOICE) return (0, l.openModalLazy)(async () => {
          let {
            default: t
          } = await n.el("310688").then(n.bind(n, "310688"));
          return n => (0, a.jsx)(t, {
            ...n,
            guild: s,
            channel: d,
            applicationId: u,
            analyticsLocation: e.type === J.ChannelTypes.GUILD_VOICE ? J.AnalyticsPages.GUILD_CHANNEL : J.AnalyticsPages.DM_CHANNEL,
            source: J.InstantInviteSources.ACTIVITY_INVITE
          })
        }, {
          modalKey: "use-activity-items-embedded-invite-modal"
        });
        if ((null == e ? void 0 : e.id) != null) return L.sendEmbeddedActivityInvite({
          activityChannelId: d.id,
          invitedChannelId: e.id,
          applicationId: u,
          location: J.InstantInviteSources.CONTEXT_MENU
        })
      }
    },
    ed = async e => {
      var n;
      await d.default.join({
        userId: t.id,
        sessionId: e.session_id,
        applicationId: e.application_id,
        channelId: h.default.getVoiceChannelId(),
        messageId: null,
        intent: H.ActivityIntent.PLAY,
        embedded: (0, V.default)(e, J.ActivityFlags.EMBEDDED)
      }), (0, P.default)({
        type: J.AnalyticsGameOpenTypes.JOIN,
        userId: t.id,
        applicationId: e.application_id,
        partyId: null === (n = e.party) || void 0 === n ? void 0 : n.id,
        locationObject: ei.location,
        analyticsLocations: X
      })
    }, es = async t => {
      await (0, G.default)({
        applicationId: t.applicationId,
        currentEmbeddedApplication: q,
        activityChannelId: null == e ? void 0 : e.id,
        locationObject: ei.location,
        embeddedActivitiesManager: D.default,
        analyticsLocations: X
      })
    }, eo = [];
  return null == K || K.forEach(n => {
    let i = (null == t ? void 0 : t.id) != null && n.userIds.has(null == t ? void 0 : t.id),
      u = S.default.can(J.Permissions.CREATE_INSTANT_INVITE, e),
      d = ee.find(e => (null == e ? void 0 : e.id) === n.applicationId);
    null != n.instanceId && !i && u && null != d && eo.push((0, a.jsx)(l.MenuItem, {
      id: "invite-to-join-embedded",
      label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
      subtext: d.name,
      action: () => {
        eu(n.channelId, n.applicationId)
      }
    }, "self-embedded-".concat(n.applicationId)))
  }), B.forEach((e, t) => {
    e.type === J.ActivityTypes.PLAYING && (0, V.default)(e, J.ActivityFlags.JOIN) ? eo.push((0, a.jsx)(l.MenuItem, {
      id: "invite-to-join",
      label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
      subtext: e.name,
      action: () => el(J.ActivityActionTypes.JOIN, e)
    }, "self".concat(t))) : e.type === J.ActivityTypes.LISTENING && (0, V.default)(e, J.ActivityFlags.SYNC) && eo.push((0, a.jsx)(l.MenuItem, {
      id: "invite-to-listen",
      label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
      subtext: e.name,
      action: () => el(J.ActivityActionTypes.LISTEN, e)
    }, "self".concat(t)))
  }), eo.length > 0 && eo.push((0, a.jsx)(l.MenuSeparator, {})), W.forEach((n, i) => {
    if (n.type === J.ActivityTypes.PLAYING && (0, V.default)(n, J.ActivityFlags.JOIN) && null != n.session_id && null != n.application_id) {
      if (en[i]) {
        let e = $[i];
        eo.push((0, a.jsx)(l.MenuItem, {
          id: "join",
          label: e ? k.default.Messages.USER_ACTIVITY_JOINING : k.default.Messages.JOIN,
          disabled: e,
          hint: e ? (0, a.jsx)(l.Spinner, {
            type: l.Spinner.Type.PULSING_ELLIPSIS
          }) : null,
          subtext: n.name,
          action: () => ed(n)
        }, i))
      } else eo.push((0, a.jsx)(l.MenuItem, {
        id: "ask-to-join",
        label: k.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
        subtext: n.name,
        action: () => el(J.ActivityActionTypes.JOIN_REQUEST, n)
      }, i))
    } else if (n.type === J.ActivityTypes.LISTENING && (0, V.default)(n, J.ActivityFlags.SYNC) && null != ea[i]) {
      let u = ea[i],
        {
          notPlayable: d,
          playingSameTrack: s,
          isCurrentUser: o,
          syncingWithUser: r,
          syncingWithParty: c
        } = u,
        _ = o || d || s,
        E = o || r || c;
      eo.push((0, a.jsx)(l.MenuItem, {
        id: "spotify-play-".concat(n.session_id),
        action: () => (0, A.default)(u, w.SpotifyActionTypes.USER_ACTIVITY_PLAY),
        label: (0, f.default)(u, w.SpotifyActionTypes.USER_ACTIVITY_PLAY),
        subtext: _ ? (0, I.default)(u, w.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
        disabled: _
      }, "spotify-play-".concat(n.session_id)), (0, a.jsx)(l.MenuItem, {
        id: "spotify-sync-".concat(n.session_id),
        action: () => (0, p.default)(u, w.SpotifyActionTypes.USER_ACTIVITY_SYNC),
        label: k.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
        subtext: E ? (0, I.default)(u, w.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
        disabled: E
      }, "spotify-sync-".concat(n.session_id)))
    }
  }), Q.forEach((e, t) => {
    var n;
    let i = e.userIds.has(null !== (n = null == z ? void 0 : z.id) && void 0 !== n ? n : ""),
      u = t + W.length,
      d = $[u] || i,
      s = k.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
    i ? s = k.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : $[u] && (s = k.default.Messages.USER_ACTIVITY_JOINING);
    let o = ee.find(t => (null == t ? void 0 : t.id) === e.applicationId);
    en[u] && null != o && eo.push((0, a.jsx)(l.MenuItem, {
      id: "embedded-activity-join-".concat(e.applicationId),
      label: s,
      disabled: d,
      hint: $[u] ? (0, a.jsx)(l.Spinner, {
        type: l.Spinner.Type.PULSING_ELLIPSIS
      }) : null,
      subtext: o.name,
      action: () => es(e)
    }, "embedded-activity-".concat(e.applicationId)))
  }), eo
}