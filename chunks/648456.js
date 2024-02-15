"use strict";
i.r(t), i.d(t, {
  default: function() {
    return n
  }
}), i("424973"), i("222007");
var n, l = i("627445"),
  a = i.n(l),
  u = i("748820"),
  r = i("913144"),
  d = i("255397"),
  s = i("316272"),
  o = i("651057"),
  c = i("299285"),
  f = i("191145"),
  _ = i("601222"),
  E = i("233069"),
  I = i("271938"),
  A = i("42203"),
  T = i("945956"),
  C = i("18494"),
  v = i("697218"),
  S = i("599110"),
  N = i("773336"),
  y = i("289732"),
  h = i("550766"),
  p = i("191225"),
  D = i("602718"),
  O = i("885829"),
  g = i("986214"),
  L = i("126939"),
  m = i("837707"),
  P = i("334368"),
  M = i("15264"),
  b = i("673044"),
  U = i("803353"),
  V = i("420444"),
  R = i("954016"),
  F = i("49111"),
  Y = i("782340");
let w = {},
  B = {};

function G(e) {
  var t;
  let i = (null == e ? void 0 : e.activity) != null ? !(0, M.default)(null == e ? void 0 : e.activity) : void 0,
    n = (null == e ? void 0 : e.activity) != null ? (0, b.default)(null == e ? void 0 : e.activity) : void 0,
    l = null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, P.default)((0, N.getOS)())].release_phase;
  return {
    isPremiumActivity: i,
    isFreePeriod: n,
    releasePhase: l
  }
}
async function H(e) {
  let {
    channelId: t,
    applicationId: i,
    analyticsLocations: n
  } = e, l = A.default.getChannel(t), a = null == l ? void 0 : l.getGuildId(), u = v.default.getCurrentUser();
  if (null == l || null == u) return;
  let r = p.default.getShelfActivities(a),
    d = y.default.getState().shelfOrder,
    s = 0 === p.default.getEmbeddedActivitiesForChannel(t).filter(e => e.applicationId === i).length,
    o = (0, D.default)({
      applicationId: i,
      activityConfigs: r
    }),
    c = 1 + d.findIndex(e => e === i),
    {
      isPremiumActivity: E,
      isFreePeriod: I,
      releasePhase: T
    } = G(o),
    C = await (0, _.default)();
  B[i] = e => {
    var t, a, r;
    w[i] = e, S.default.track(F.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
      channel_id: l.id,
      guild_id: l.getGuildId(),
      media_session_id: e.mediaSessionIds[0],
      activity_session_id: e.activitySessionId,
      application_id: i,
      location_stack: n,
      user_premium_tier: u.premiumType,
      is_premium_activity: E,
      is_free_period: I,
      raw_thermal_state: C,
      n_participants: f.default.getUserParticipantCount(l.id),
      is_activity_start: s,
      release_phase: T,
      activity_premium_tier_requirement: null == o ? void 0 : null === (t = o.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
      shelf_rank: null == o ? void 0 : null === (a = o.activity) || void 0 === a ? void 0 : a.shelf_rank,
      shelf_sorted_rank: c > 0 ? c : null,
      activity_user_session_id: e.activityUserSessionId,
      channel_type: l.type
    }), S.default.track(F.AnalyticEvents.ACTIVITY_IFRAME_MOUNT, {
      location_stack: n,
      channel_id: l.id,
      channel_type: l.type,
      guild_id: l.getGuildId(),
      application_id: i,
      instance_id: e.instanceId,
      initial_media_session_id: e.mediaSessionIds[0],
      activity_user_session_id: e.activityUserSessionId,
      raw_thermal_state: C,
      is_activity_start: s,
      shelf_rank: null == o ? void 0 : null === (r = o.activity) || void 0 === r ? void 0 : r.shelf_rank,
      shelf_sorted_rank: c > 0 ? c : null
    })
  }
}
async function k(e) {
  var t, i;
  let {
    channelId: n,
    applicationId: l
  } = e, a = w[l], u = A.default.getChannel(n), r = p.default.getEmbeddedActivityDurationMs(n, l), d = v.default.getCurrentUser(), s = null == u ? void 0 : u.getGuildId();
  if (null == a || null == u || null == d) return;
  let o = p.default.getShelfActivities(s),
    c = (0, D.default)({
      applicationId: l,
      activityConfigs: o
    }),
    {
      isPremiumActivity: f,
      isFreePeriod: E,
      releasePhase: I
    } = G(c),
    T = await (0, _.default)();
  S.default.track(F.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
    channel_id: u.id,
    guild_id: u.getGuildId(),
    media_session_id: a.mediaSessionIds[0],
    activity_session_id: a.activitySessionId,
    application_id: l,
    duration_ms: r,
    user_premium_tier: d.premiumType,
    is_premium_activity: f,
    is_free_period: E,
    raw_thermal_state: T,
    release_phase: I,
    activity_premium_tier_requirement: null == c ? void 0 : null === (t = c.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
    shelf_rank: null == c ? void 0 : null === (i = c.activity) || void 0 === i ? void 0 : i.shelf_rank,
    activity_user_session_id: a.activityUserSessionId,
    channel_type: u.type,
    media_session_ids: a.mediaSessionIds
  }), S.default.track(F.AnalyticEvents.ACTIVITY_IFRAME_UNMOUNT, {
    channel_id: u.id,
    guild_id: u.getGuildId(),
    application_id: l,
    instance_ids: [a.instanceId],
    media_session_ids: a.mediaSessionIds,
    activity_user_session_id: a.activityUserSessionId,
    raw_thermal_state: T,
    duration_ms: r
  }), delete B[l], delete w[l]
}

function J(e) {
  var t, i;
  let {
    channelId: n,
    embeddedActivity: l,
    connections: a,
    updateCode: r
  } = e, s = I.default.getId(), o = p.default.getEmbeddedActivitiesForChannel(n), c = A.default.getChannel(n);
  if (r === R.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED && null !== (i = null == c ? void 0 : c.isPrivate()) && void 0 !== i && i && o.length <= 1 && void 0 === a.find(e => e.user_id === s) && d.default.selectParticipant(n, null), !a.some(e => e.user_id === s)) return;
  let f = T.default.getMediaSessionId(),
    {
      application_id: _
    } = l,
    E = (0, m.default)(l),
    C = null == f && (null == c ? void 0 : c.isVocal()) === !0;
  null != E && !C && (null === (t = B[_]) || void 0 === t || t.call(B, {
    activitySessionId: E,
    activityUserSessionId: (0, u.v4)(),
    instanceId: l.activity_id,
    mediaSessionIds: null != f ? [f] : []
  }), delete B[_])
}

function x(e) {
  let {
    mediaSessionId: t
  } = e;
  if (null == t) return;
  for (let e in w) w[e].mediaSessionIds.push(t);
  let i = T.default.getChannelId();
  if (null != i) {
    let e = p.default.getSelfEmbeddedActivityForChannel(i),
      n = null == e ? void 0 : e.applicationId,
      l = null == e ? void 0 : e.instanceId,
      r = (0, m.default)(e);
    if (null != n && null != t && null != r && null != l) {
      let e = w[n],
        i = B[n];
      a(null == e || null == i, "an active session and awaiting session both exist"), null == i || i({
        activitySessionId: r,
        activityUserSessionId: (0, u.v4)(),
        instanceId: l,
        mediaSessionIds: [t]
      }), delete B[n]
    }
  }
}
n = class extends s.default {
  _initialize() {
    C.default.addChangeListener(this.handleSelectedChannelUpdate), r.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), r.default.subscribe("EMBEDDED_ACTIVITY_OPEN", H), r.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", k), r.default.subscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", J), r.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), r.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), r.default.subscribe("MEDIA_SESSION_JOINED", x)
  }
  _terminate() {
    C.default.removeChangeListener(this.handleSelectedChannelUpdate), r.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), r.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", H), r.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", k), r.default.unsubscribe("EMBEDDED_ACTIVITY_INBOUND_UPDATE", J), r.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), r.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), r.default.unsubscribe("MEDIA_SESSION_JOINED", x)
  }
  constructor(...e) {
    super(...e), this.handleSelectedChannelUpdate = () => {
      let e = C.default.getVoiceChannelId();
      for (let {
          channelId: t,
          applicationId: i
        }
        of p.default.getSelfEmbeddedActivities().values())(0, V.default)(t) && t !== e && this.leaveActivity({
        channelId: t,
        applicationId: i
      });
      if (null != e) {
        let t = p.default.getEmbeddedActivitiesForChannel(e),
          i = I.default.getId();
        t.forEach(e => {
          if (e.userIds.has(i)) {
            let t = p.default.getSelfEmbeddedActivityForChannel(e.channelId);
            null == t && (0, h.disconnectEmbeddedActivity)(e.channelId, e.applicationId)
          }
        })
      }
    }, this.handleActivityLaunchFail = e => {
      let {
        error: t,
        guildId: i
      } = e;
      if (null == i) return;
      let n = Y.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
      switch (t.code) {
        case F.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
          n = Y.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
          break;
        case F.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
          n = Y.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
          break;
        case F.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
          n = Y.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
          break;
        case F.AbortCodes.INVALID_PERMISSIONS:
          n = Y.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
          break;
        case F.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
          n = Y.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
          break;
        case F.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
          n = Y.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
          break;
        case F.AbortCodes.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
          n = Y.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE
      }
      this.showLaunchErrorModal(n)
    }, this.superHandleRPCDisconnect = e => {
      let {
        reason: t,
        application: i
      } = e, n = i.id;
      if (null != n && null != t) {
        for (let {
            applicationId: e,
            channelId: t
          }
          of p.default.getSelfEmbeddedActivities().values()) e === n && this.leaveActivity({
          channelId: t,
          applicationId: n
        });
        t.code !== F.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(t, n)
      }
    }, this.handleDeferredOpen = async e => {
      var t, i, n;
      let l;
      let {
        channelId: a,
        applicationId: u,
        analyticsLocations: r
      } = e, d = A.default.getChannel(a);
      if (void 0 === d || E.GUILD_VOCAL_CHANNEL_TYPES.has(null == d ? void 0 : d.type) && C.default.getVoiceChannelId() !== a) return;
      let s = p.default.getSelfEmbeddedActivityForChannel(a);
      if ((null == s ? void 0 : s.applicationId) === u) return;
      let f = await o.default.fetchApplication(u),
        _ = (0, L.getIsActivitiesEnabledForCurrentPlatform)(d);
      if (!_) {
        this.showLaunchErrorModal(Y.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
        return
      }
      if (!(0, U.default)(null == f ? void 0 : null === (t = f.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
        this.showLaunchErrorModal(Y.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
        return
      }
      let I = null == s ? void 0 : s.applicationId;
      null != I && (await o.default.fetchApplication(I), l = c.default.getApplication(I));
      let T = null !== (i = null == d ? void 0 : d.getGuildId()) && void 0 !== i ? i : void 0,
        {
          activityConfigs: v,
          applications: S
        } = await (0, h.fetchShelf)({
          guildId: T
        }),
        N = (0, D.default)({
          applicationId: u,
          activityConfigs: v,
          applications: S
        });
      if (null == N) {
        let e = await (0, h.fetchShelf)({
          guildId: T,
          force: !0
        });
        N = (0, D.default)({
          applicationId: u,
          activityConfigs: e.activityConfigs,
          applications: e.applications
        })
      }
      let y = p.default.getEmbeddedActivitiesForChannel(a).find(e => e.applicationId === u),
        m = null !== (n = null == y ? void 0 : y.userIds.size) && void 0 !== n ? n : 0;
      m > 0 ? (0, O.maybeJoinEmbeddedActivity)({
        channelId: a,
        applicationId: u,
        instanceId: null == y ? void 0 : y.instanceId,
        inputApplication: null,
        analyticsLocations: r,
        embeddedActivitiesManager: this
      }) : await (0, g.default)({
        activityItem: N,
        currentActivity: l,
        channelId: a,
        guildId: T,
        embeddedActivitiesManager: this,
        analyticsLocations: r
      })
    }
  }
}