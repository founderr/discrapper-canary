"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return Z
  },
  getActiveAnalyticsSessionIDs: function() {
    return z
  }
}), n("653041"), n("47120");
var r = n("512722"),
  s = n.n(r),
  a = n("153832"),
  o = n("544891"),
  l = n("570140"),
  u = n("475179"),
  d = n("317770"),
  _ = n("728345"),
  c = n("812206"),
  E = n("358221"),
  I = n("42352"),
  T = n("131704"),
  f = n("314897"),
  S = n("592125"),
  h = n("19780"),
  A = n("944486"),
  m = n("594174"),
  N = n("626135"),
  p = n("358085"),
  O = n("24933"),
  C = n("566620"),
  R = n("317381"),
  g = n("969345"),
  L = n("148720"),
  v = n("146936"),
  D = n("782769"),
  M = n("964517"),
  y = n("761122"),
  P = n("983695"),
  U = n("917107"),
  b = n("701488"),
  G = n("981631"),
  w = n("689938");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let B = {},
  V = {};

function x(e) {
  var t;
  return {
    releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, y.default)((0, p.getOS)())].release_phase
  }
}
async function F(e) {
  let {
    channelId: t,
    applicationId: n,
    analyticsLocations: i
  } = e, r = S.default.getChannel(t), s = null == r ? void 0 : r.getGuildId(), a = m.default.getCurrentUser();
  if (null == r || null == a) return;
  let o = R.default.getShelfActivities(s),
    l = O.default.getState().shelfOrder,
    u = 0 === R.default.getEmbeddedActivitiesForChannel(t).filter(e => e.applicationId === n).length,
    d = (0, g.default)({
      applicationId: n,
      activityConfigs: o
    }),
    _ = 1 + l.findIndex(e => e === n),
    {
      releasePhase: c
    } = x(d),
    T = await (0, I.default)();
  V[n] = e => {
    var t, s, o;
    B[n] = e, N.default.track(G.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
      channel_id: r.id,
      guild_id: r.getGuildId(),
      media_session_id: e.mediaSessionIds[0],
      activity_session_id: e.activitySessionId,
      application_id: n,
      location_stack: i,
      user_premium_tier: a.premiumType,
      raw_thermal_state: T,
      n_participants: E.default.getUserParticipantCount(r.id),
      is_activity_start: u,
      release_phase: c,
      activity_premium_tier_requirement: null == d ? void 0 : null === (t = d.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
      shelf_rank: null == d ? void 0 : null === (s = d.activity) || void 0 === s ? void 0 : s.shelf_rank,
      shelf_sorted_rank: _ > 0 ? _ : null,
      activity_user_session_id: e.activityUserSessionId,
      channel_type: r.type
    }), N.default.track(G.AnalyticEvents.ACTIVITY_IFRAME_MOUNT, {
      location_stack: i,
      channel_id: r.id,
      channel_type: r.type,
      guild_id: r.getGuildId(),
      application_id: n,
      instance_id: e.launchId,
      initial_media_session_id: e.mediaSessionIds[0],
      activity_user_session_id: e.activityUserSessionId,
      raw_thermal_state: T,
      is_activity_start: u,
      shelf_rank: null == d ? void 0 : null === (o = d.activity) || void 0 === o ? void 0 : o.shelf_rank,
      shelf_sorted_rank: _ > 0 ? _ : null,
      activities_infra_version: null == e ? void 0 : e.activities_infra_version
    })
  }
}
async function H(e) {
  var t, n;
  let {
    channelId: i,
    applicationId: r,
    locationId: s,
    instanceId: a
  } = e, l = B[r], u = S.default.getChannel(i), d = R.default.getEmbeddedActivityDurationMs(i, r), _ = m.default.getCurrentUser(), c = null == u ? void 0 : u.getGuildId(), E = f.default.getSessionId();
  if (null != s && null != a && null != E && await o.HTTP.post({
      url: G.Endpoints.ACTIVITY_LEAVE(r, s, a),
      body: {
        session_id: E
      }
    }), null == l || null == u || null == _) return;
  let T = R.default.getShelfActivities(c),
    h = (0, g.default)({
      applicationId: r,
      activityConfigs: T
    }),
    {
      releasePhase: A
    } = x(h),
    p = await (0, I.default)();
  N.default.track(G.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
    channel_id: u.id,
    guild_id: u.getGuildId(),
    media_session_id: l.mediaSessionIds[0],
    activity_session_id: l.activitySessionId,
    application_id: r,
    duration_ms: d,
    user_premium_tier: _.premiumType,
    raw_thermal_state: p,
    release_phase: A,
    activity_premium_tier_requirement: null == h ? void 0 : null === (t = h.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
    shelf_rank: null == h ? void 0 : null === (n = h.activity) || void 0 === n ? void 0 : n.shelf_rank,
    activity_user_session_id: l.activityUserSessionId,
    channel_type: u.type,
    media_session_ids: l.mediaSessionIds
  }), N.default.track(G.AnalyticEvents.ACTIVITY_IFRAME_UNMOUNT, {
    channel_id: u.id,
    guild_id: u.getGuildId(),
    application_id: r,
    instance_ids: [l.launchId],
    media_session_ids: l.mediaSessionIds,
    activity_user_session_id: l.activityUserSessionId,
    raw_thermal_state: p,
    duration_ms: d
  }), delete V[r], delete B[r]
}

function Y(e) {
  let {
    channelId: t,
    embeddedActivity: n,
    connections: i,
    updateCode: r
  } = e, s = f.default.getId(), a = i.find(e => e.user_id === s);
  W(t, n, n.application_id, n.activity_id, null == a ? void 0 : a.user_id, r === b.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED)
}

function j(e) {
  let {
    location: t,
    applicationId: n,
    launchId: i,
    participants: r
  } = e, s = f.default.getId(), a = R.default.getEmbeddedActivitiesForChannel(t.channel_id).find(e => e.launchId === i), o = r.find(e => e.user_id === s);
  null != a && W(t.channel_id, a, n, i, null == o ? void 0 : o.user_id, !1)
}

function W(e, t, n, i, r, s) {
  var o, l;
  let d = R.default.getEmbeddedActivitiesForChannel(e),
    _ = S.default.getChannel(e);
  if (s && null !== (l = null == _ ? void 0 : _.isPrivate()) && void 0 !== l && l && d.length <= 1 && null == r && u.default.selectParticipant(e, null), null == r) return;
  let c = h.default.getMediaSessionId(),
    E = "activity_id" in t ? (0, M.getActivitySessionIdFromServerData)(t) : (0, M.default)(t),
    I = null == c && (null == _ ? void 0 : _.isVocal()) === !0 && (null == _ ? void 0 : _.isPrivate()) === !1;
  null != E && !I && (null === (o = V[n]) || void 0 === o || o.call(V, {
    activitySessionId: E,
    activityUserSessionId: (0, a.v4)(),
    launchId: i,
    mediaSessionIds: null != c ? [c] : [],
    activities_infra_version: "location" in t ? 2 : 1
  }), delete V[n])
}

function K(e) {
  let {
    mediaSessionId: t
  } = e;
  if (null == t) return;
  for (let e in B) B[e].mediaSessionIds.push(t);
  let n = h.default.getChannelId();
  if (null != n) {
    let e = R.default.getSelfEmbeddedActivityForChannel(n),
      i = null == e ? void 0 : e.applicationId,
      r = null == e ? void 0 : e.launchId,
      o = (0, M.default)(e);
    if (null != i && null != t && null != o && null != r) {
      let e = B[i],
        n = V[i];
      s()(null == e || null == n, "an active session and awaiting session both exist"), null == n || n({
        activitySessionId: o,
        activityUserSessionId: (0, a.v4)(),
        launchId: r,
        mediaSessionIds: [t]
      }), delete V[i]
    }
  }
}

function z(e) {
  return B[e]
}
class Z extends d.default {
  _initialize() {
    A.default.addChangeListener(this.handleSelectedChannelUpdate), l.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.default.subscribe("EMBEDDED_ACTIVITY_OPEN", F), l.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", H), l.default.subscribe("EMBEDDED_ACTIVITY_UPDATE", Y), l.default.subscribe("EMBEDDED_ACTIVITY_UPDATE_V2", j), l.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.default.subscribe("MEDIA_SESSION_JOINED", K), l.default.subscribe("CALL_DELETE", this.handleCallDelete), l.default.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState)
  }
  _terminate() {
    A.default.removeChangeListener(this.handleSelectedChannelUpdate), l.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", F), l.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", H), l.default.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", Y), l.default.unsubscribe("EMBEDDED_ACTIVITY_UPDATE_V2", j), l.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.default.unsubscribe("MEDIA_SESSION_JOINED", K), l.default.unsubscribe("CALL_DELETE", this.handleCallDelete), l.default.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState)
  }
  constructor(...e) {
    super(...e), k(this, "handleSelectedChannelUpdate", () => {
      let e = A.default.getVoiceChannelId();
      for (let {
          channelId: t,
          applicationId: n
        }
        of R.default.getSelfEmbeddedActivities().values())(0, U.default)(t) && t !== e && this.leaveActivity({
        channelId: t,
        applicationId: n
      });
      if (null != e) {
        let t = R.default.getEmbeddedActivitiesForChannel(e),
          n = f.default.getId();
        t.forEach(e => {
          if (e.userIds.has(n)) {
            let t = R.default.getSelfEmbeddedActivityForChannel(e.channelId);
            null == t ? (0, C.disconnectEmbeddedActivity)(e.channelId, e.applicationId) : null == i && this.hidePIPEmbed({
              channelId: t.channelId,
              applicationId: t.applicationId
            })
          }
        })
      }
      i = null != e ? e : void 0
    }), k(this, "handleActivityLaunchFail", e => {
      let {
        error: t,
        applicationId: n
      } = e;
      delete V[n];
      let i = w.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
      switch (t.code) {
        case G.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
          i = w.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
          break;
        case G.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
          i = w.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
          break;
        case G.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
          i = w.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
          break;
        case G.AbortCodes.INVALID_PERMISSIONS:
          i = w.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
          break;
        case G.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
          i = w.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
          break;
        case G.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
          i = w.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
          break;
        case G.AbortCodes.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
          i = w.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE
      }
      this.showLaunchErrorModal(i)
    }), k(this, "superHandleRPCDisconnect", e => {
      let {
        reason: t,
        application: n
      } = e, i = n.id;
      if (null != i && null != t) {
        for (let {
            applicationId: e,
            channelId: t
          }
          of R.default.getSelfEmbeddedActivities().values()) e === i && this.leaveActivity({
          channelId: t,
          applicationId: i
        });
        t.code !== G.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(t, i)
      }
    }), k(this, "handleCallDelete", e => {
      let {
        channelId: t
      } = e, n = A.default.getVoiceChannelId();
      null != n && n === t && this.handleCallEnded(t)
    }), k(this, "handleRTCConnectionState", e => {
      if (e.state !== G.RTCConnectionStates.DISCONNECTED) return;
      let t = e.channelId;
      this.handleCallEnded(t)
    }), k(this, "handleCallEnded", e => {
      let t = R.default.getSelfEmbeddedActivityForChannel(e);
      null != t && this.leaveActivity({
        channelId: e,
        applicationId: t.applicationId
      })
    }), k(this, "handleDeferredOpen", async e => {
      var t, n, i;
      let r;
      let {
        channelId: s,
        applicationId: a,
        analyticsLocations: o
      } = e, l = S.default.getChannel(s);
      if (void 0 === l || T.GUILD_VOCAL_CHANNEL_TYPES.has(null == l ? void 0 : l.type) && A.default.getVoiceChannelId() !== s) return;
      let u = R.default.getSelfEmbeddedActivityForChannel(s);
      if ((null == u ? void 0 : u.applicationId) === a) return;
      let d = await _.default.fetchApplication(a);
      if (!(0, D.getIsActivitiesEnabledForCurrentPlatform)(l)) {
        this.showLaunchErrorModal(w.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
        return
      }
      if (!(0, P.default)(null == d ? void 0 : null === (t = d.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
        this.showLaunchErrorModal(w.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
        return
      }
      let E = null == u ? void 0 : u.applicationId;
      null != E && (await _.default.fetchApplication(E), r = c.default.getApplication(E));
      let I = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : void 0,
        {
          activityConfigs: f,
          applications: h
        } = await (0, C.fetchShelf)({
          guildId: I
        }),
        m = (0, g.default)({
          applicationId: a,
          activityConfigs: f,
          applications: h
        });
      if (null == m) {
        let e = await (0, C.fetchShelf)({
          guildId: I,
          force: !0
        });
        m = (0, g.default)({
          applicationId: a,
          activityConfigs: e.activityConfigs,
          applications: e.applications
        })
      }
      let N = R.default.getEmbeddedActivitiesForChannel(s).find(e => e.applicationId === a),
        p = null !== (i = null == N ? void 0 : N.userIds.size) && void 0 !== i ? i : 0;
      p > 0 ? (0, L.maybeJoinEmbeddedActivity)({
        channelId: s,
        applicationId: a,
        launchId: null == N ? void 0 : N.launchId,
        inputApplication: null,
        analyticsLocations: o,
        embeddedActivitiesManager: this
      }) : await (0, v.default)({
        targetApplicationId: a,
        currentEmbeddedApplication: r,
        channelId: s,
        guildId: I,
        embeddedActivitiesManager: this,
        analyticsLocations: o
      })
    })
  }
}