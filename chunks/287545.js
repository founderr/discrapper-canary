"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return X
  },
  getActiveAnalyticsSessionIDs: function() {
    return Z
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
  p = n("585483"),
  O = n("358085"),
  C = n("24933"),
  R = n("566620"),
  g = n("317381"),
  L = n("969345"),
  v = n("148720"),
  D = n("146936"),
  M = n("782769"),
  y = n("964517"),
  P = n("761122"),
  U = n("983695"),
  b = n("917107"),
  G = n("701488"),
  w = n("981631"),
  k = n("689938");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let V = {},
  x = {};

function F(e) {
  var t;
  return {
    releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, P.default)((0, O.getOS)())].release_phase
  }
}
async function H(e) {
  let {
    channelId: t,
    applicationId: n,
    analyticsLocations: i
  } = e, r = S.default.getChannel(t), s = null == r ? void 0 : r.getGuildId(), a = m.default.getCurrentUser();
  if (null == r || null == a) return;
  let o = g.default.getShelfActivities(s),
    l = C.default.getState().shelfOrder,
    u = 0 === g.default.getEmbeddedActivitiesForChannel(t).filter(e => e.applicationId === n).length,
    d = (0, L.default)({
      applicationId: n,
      activityConfigs: o
    }),
    _ = 1 + l.findIndex(e => e === n),
    {
      releasePhase: c
    } = F(d),
    T = await (0, I.default)();
  x[n] = e => {
    var t, s, o;
    V[n] = e, N.default.track(w.AnalyticEvents.ACTIVITY_SESSION_JOINED, {
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
    }), N.default.track(w.AnalyticEvents.ACTIVITY_IFRAME_MOUNT, {
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
async function Y(e) {
  var t, n;
  let {
    channelId: i,
    applicationId: r,
    locationId: s,
    instanceId: a
  } = e, l = V[r], u = S.default.getChannel(i), d = g.default.getEmbeddedActivityDurationMs(i, r), _ = m.default.getCurrentUser(), c = null == u ? void 0 : u.getGuildId(), E = f.default.getSessionId();
  if (null != s && null != a && null != E && await o.HTTP.post({
      url: w.Endpoints.ACTIVITY_LEAVE(r, s, a),
      body: {
        session_id: E
      }
    }), null == l || null == u || null == _) return;
  let T = g.default.getShelfActivities(c),
    h = (0, L.default)({
      applicationId: r,
      activityConfigs: T
    }),
    {
      releasePhase: A
    } = F(h),
    p = await (0, I.default)();
  N.default.track(w.AnalyticEvents.ACTIVITY_SESSION_LEFT, {
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
  }), N.default.track(w.AnalyticEvents.ACTIVITY_IFRAME_UNMOUNT, {
    channel_id: u.id,
    guild_id: u.getGuildId(),
    application_id: r,
    instance_ids: [l.launchId],
    media_session_ids: l.mediaSessionIds,
    activity_user_session_id: l.activityUserSessionId,
    raw_thermal_state: p,
    duration_ms: d
  }), delete x[r], delete V[r]
}

function j(e) {
  let {
    channelId: t,
    embeddedActivity: n,
    connections: i,
    updateCode: r
  } = e, s = f.default.getId(), a = i.find(e => e.user_id === s);
  K(t, n, n.application_id, n.activity_id, null == a ? void 0 : a.user_id, r === G.EmbeddedActivityUpdateCodes.ACTIVITY_STARTED)
}

function W(e) {
  let {
    location: t,
    applicationId: n,
    launchId: i,
    participants: r
  } = e, s = f.default.getId(), a = g.default.getEmbeddedActivitiesForChannel(t.channel_id).find(e => e.launchId === i), o = r.find(e => e.user_id === s);
  null != a && K(t.channel_id, a, n, i, null == o ? void 0 : o.user_id, !1)
}

function K(e, t, n, i, r, s) {
  var o, l;
  let d = g.default.getEmbeddedActivitiesForChannel(e),
    _ = S.default.getChannel(e);
  if (s && null !== (l = null == _ ? void 0 : _.isPrivate()) && void 0 !== l && l && d.length <= 1 && null == r && u.default.selectParticipant(e, null), null == r) return;
  let c = h.default.getMediaSessionId(),
    E = "activity_id" in t ? (0, y.getActivitySessionIdFromServerData)(t) : (0, y.default)(t),
    I = null == c && (null == _ ? void 0 : _.isVocal()) === !0 && (null == _ ? void 0 : _.isPrivate()) === !1;
  null != E && !I && (null === (o = x[n]) || void 0 === o || o.call(x, {
    activitySessionId: E,
    activityUserSessionId: (0, a.v4)(),
    launchId: i,
    mediaSessionIds: null != c ? [c] : [],
    activities_infra_version: "location" in t ? 2 : 1
  }), delete x[n])
}

function z(e) {
  let {
    mediaSessionId: t
  } = e;
  if (null == t) return;
  for (let e in V) V[e].mediaSessionIds.push(t);
  let n = h.default.getChannelId();
  if (null != n) {
    let e = g.default.getSelfEmbeddedActivityForChannel(n),
      i = null == e ? void 0 : e.applicationId,
      r = null == e ? void 0 : e.launchId,
      o = (0, y.default)(e);
    if (null != i && null != t && null != o && null != r) {
      let e = V[i],
        n = x[i];
      s()(null == e || null == n, "an active session and awaiting session both exist"), null == n || n({
        activitySessionId: o,
        activityUserSessionId: (0, a.v4)(),
        launchId: r,
        mediaSessionIds: [t]
      }), delete x[i]
    }
  }
}

function Z(e) {
  return V[e]
}
class X extends d.default {
  _initialize() {
    A.default.addChangeListener(this.handleSelectedChannelUpdate), p.ComponentDispatch.subscribe(w.ComponentActions.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), l.default.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.default.subscribe("EMBEDDED_ACTIVITY_OPEN", H), l.default.subscribe("EMBEDDED_ACTIVITY_CLOSE", Y), l.default.subscribe("EMBEDDED_ACTIVITY_UPDATE", j), l.default.subscribe("EMBEDDED_ACTIVITY_UPDATE_V2", W), l.default.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.default.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.default.subscribe("MEDIA_SESSION_JOINED", z), l.default.subscribe("CALL_DELETE", this.handleCallDelete), l.default.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState)
  }
  _terminate() {
    A.default.removeChangeListener(this.handleSelectedChannelUpdate), p.ComponentDispatch.unsubscribe(w.ComponentActions.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), l.default.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.default.unsubscribe("EMBEDDED_ACTIVITY_OPEN", H), l.default.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", Y), l.default.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", j), l.default.unsubscribe("EMBEDDED_ACTIVITY_UPDATE_V2", W), l.default.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.default.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.default.unsubscribe("MEDIA_SESSION_JOINED", z), l.default.unsubscribe("CALL_DELETE", this.handleCallDelete), l.default.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState)
  }
  constructor(...e) {
    super(...e), B(this, "handleSelectedChannelUpdate", () => {
      let e = A.default.getVoiceChannelId();
      for (let {
          channelId: t,
          applicationId: n
        }
        of g.default.getSelfEmbeddedActivities().values())(0, b.default)(t) && t !== e && this.leaveActivity({
        channelId: t,
        applicationId: n
      });
      if (null != e) {
        let t = g.default.getEmbeddedActivitiesForChannel(e),
          n = f.default.getId();
        t.forEach(e => {
          if (e.userIds.has(n)) {
            let t = g.default.getSelfEmbeddedActivityForChannel(e.channelId);
            null == t ? (0, R.disconnectEmbeddedActivity)(e.channelId, e.applicationId) : null == i && this.hidePIPEmbed({
              channelId: t.channelId,
              applicationId: t.applicationId
            })
          }
        })
      }
      i = null != e ? e : void 0
    }), B(this, "handleActivityWebViewRelease", () => {
      this.releaseWebView()
    }), B(this, "handleActivityLaunchFail", e => {
      let {
        error: t,
        applicationId: n
      } = e;
      delete x[n];
      let i = k.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
      switch (t.code) {
        case w.AbortCodes.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
          i = k.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
          break;
        case w.AbortCodes.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
          i = k.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
          break;
        case w.AbortCodes.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
          i = k.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
          break;
        case w.AbortCodes.INVALID_PERMISSIONS:
          i = k.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
          break;
        case w.AbortCodes.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
          i = k.default.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
          break;
        case w.AbortCodes.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
          i = k.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
          break;
        case w.AbortCodes.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
          i = k.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE
      }
      this.showLaunchErrorModal(i)
    }), B(this, "superHandleRPCDisconnect", e => {
      let {
        reason: t,
        application: n
      } = e, i = n.id;
      if (null != i && null != t) {
        for (let {
            applicationId: e,
            channelId: t
          }
          of g.default.getSelfEmbeddedActivities().values()) e === i && this.leaveActivity({
          channelId: t,
          applicationId: i
        });
        t.code !== w.RPCCloseCodes.CLOSE_NORMAL && this.showErrorModal(t, i)
      }
    }), B(this, "handleCallDelete", e => {
      let {
        channelId: t
      } = e, n = A.default.getVoiceChannelId();
      null != n && n === t && this.handleCallEnded(t)
    }), B(this, "handleRTCConnectionState", e => {
      if (e.state !== w.RTCConnectionStates.DISCONNECTED) return;
      let t = e.channelId;
      this.handleCallEnded(t)
    }), B(this, "handleCallEnded", e => {
      let t = g.default.getSelfEmbeddedActivityForChannel(e);
      null != t && this.leaveActivity({
        channelId: e,
        applicationId: t.applicationId
      })
    }), B(this, "handleDeferredOpen", async e => {
      var t, n, i;
      let r;
      let {
        channelId: s,
        applicationId: a,
        analyticsLocations: o
      } = e, l = S.default.getChannel(s);
      if (void 0 === l || T.GUILD_VOCAL_CHANNEL_TYPES.has(null == l ? void 0 : l.type) && A.default.getVoiceChannelId() !== s) return;
      let u = g.default.getSelfEmbeddedActivityForChannel(s);
      if ((null == u ? void 0 : u.applicationId) === a) return;
      let d = await _.default.fetchApplication(a);
      if (!(0, M.getIsActivitiesEnabledForCurrentPlatform)(l)) {
        this.showLaunchErrorModal(k.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
        return
      }
      if (!(0, U.default)(null == d ? void 0 : null === (t = d.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
        this.showLaunchErrorModal(k.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
        return
      }
      let E = null == u ? void 0 : u.applicationId;
      null != E && (await _.default.fetchApplication(E), r = c.default.getApplication(E));
      let I = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : void 0,
        {
          activityConfigs: f,
          applications: h
        } = await (0, R.fetchShelf)({
          guildId: I
        }),
        m = (0, L.default)({
          applicationId: a,
          activityConfigs: f,
          applications: h
        });
      if (null == m) {
        let e = await (0, R.fetchShelf)({
          guildId: I,
          force: !0
        });
        m = (0, L.default)({
          applicationId: a,
          activityConfigs: e.activityConfigs,
          applications: e.applications
        })
      }
      let N = g.default.getEmbeddedActivitiesForChannel(s).find(e => e.applicationId === a),
        p = null !== (i = null == N ? void 0 : N.userIds.size) && void 0 !== i ? i : 0;
      p > 0 ? (0, v.maybeJoinEmbeddedActivity)({
        channelId: s,
        applicationId: a,
        launchId: null == N ? void 0 : N.launchId,
        inputApplication: null,
        analyticsLocations: o,
        embeddedActivitiesManager: this
      }) : await (0, D.default)({
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