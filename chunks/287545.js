"use strict";
let i;
n.d(t, {
  U: function() {
    return z
  },
  Z: function() {
    return q
  }
}), n(653041), n(47120);
var r = n(512722),
  s = n.n(r),
  o = n(772848),
  a = n(544891),
  l = n(570140),
  u = n(475179),
  _ = n(317770),
  c = n(728345),
  d = n(812206),
  E = n(358221),
  I = n(42352),
  T = n(131704),
  h = n(314897),
  S = n(592125),
  f = n(19780),
  N = n(944486),
  A = n(594174),
  m = n(626135),
  O = n(585483),
  R = n(358085),
  p = n(24933),
  g = n(566620),
  C = n(317381),
  v = n(969345),
  L = n(148720),
  D = n(146936),
  M = n(782769),
  P = n(964517),
  y = n(761122),
  U = n(983695),
  b = n(917107),
  G = n(701488),
  w = n(981631),
  B = n(689938);

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let x = {},
  V = {};

function Z(e) {
  var t;
  return {
    releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, y.Z)((0, R.getOS)())].release_phase
  }
}
async function H(e) {
  let {
    channelId: t,
    applicationId: n,
    analyticsLocations: i
  } = e, r = S.Z.getChannel(t), s = null == r ? void 0 : r.getGuildId(), o = A.default.getCurrentUser();
  if (null == r || null == o) return;
  let a = C.ZP.getShelfActivities(s),
    l = p.Z.getState().shelfOrder,
    u = 0 === C.ZP.getEmbeddedActivitiesForChannel(t).filter(e => e.applicationId === n).length,
    _ = (0, v.Z)({
      applicationId: n,
      activityConfigs: a
    }),
    c = 1 + l.findIndex(e => e === n),
    {
      releasePhase: d
    } = Z(_),
    T = await (0, I.Z)();
  V[n] = e => {
    var t, s, a;
    x[n] = e, m.default.track(w.rMx.ACTIVITY_SESSION_JOINED, {
      channel_id: r.id,
      guild_id: r.getGuildId(),
      media_session_id: e.mediaSessionIds[0],
      activity_session_id: e.activitySessionId,
      application_id: n,
      location_stack: i,
      user_premium_tier: o.premiumType,
      raw_thermal_state: T,
      n_participants: E.Z.getUserParticipantCount(r.id),
      is_activity_start: u,
      release_phase: d,
      activity_premium_tier_requirement: null == _ ? void 0 : null === (t = _.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
      shelf_rank: null == _ ? void 0 : null === (s = _.activity) || void 0 === s ? void 0 : s.shelf_rank,
      shelf_sorted_rank: c > 0 ? c : null,
      activity_user_session_id: e.activityUserSessionId,
      channel_type: r.type
    }), m.default.track(w.rMx.ACTIVITY_IFRAME_MOUNT, {
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
      shelf_rank: null == _ ? void 0 : null === (a = _.activity) || void 0 === a ? void 0 : a.shelf_rank,
      shelf_sorted_rank: c > 0 ? c : null,
      activities_infra_version: null == e ? void 0 : e.activities_infra_version
    })
  }
}
async function F(e) {
  var t, n;
  let {
    channelId: i,
    applicationId: r,
    locationId: s,
    instanceId: o
  } = e, l = x[r], u = S.Z.getChannel(i), _ = C.ZP.getEmbeddedActivityDurationMs(i, r), c = A.default.getCurrentUser(), d = null == u ? void 0 : u.getGuildId(), E = h.default.getSessionId();
  if (null != s && null != o && null != E && await a.tn.post({
      url: w.ANM.ACTIVITY_LEAVE(r, s, o),
      body: {
        session_id: E
      }
    }), null == l || null == u || null == c) return;
  let T = C.ZP.getShelfActivities(d),
    f = (0, v.Z)({
      applicationId: r,
      activityConfigs: T
    }),
    {
      releasePhase: N
    } = Z(f),
    O = await (0, I.Z)();
  m.default.track(w.rMx.ACTIVITY_SESSION_LEFT, {
    channel_id: u.id,
    guild_id: u.getGuildId(),
    media_session_id: l.mediaSessionIds[0],
    activity_session_id: l.activitySessionId,
    application_id: r,
    duration_ms: _,
    user_premium_tier: c.premiumType,
    raw_thermal_state: O,
    release_phase: N,
    activity_premium_tier_requirement: null == f ? void 0 : null === (t = f.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
    shelf_rank: null == f ? void 0 : null === (n = f.activity) || void 0 === n ? void 0 : n.shelf_rank,
    activity_user_session_id: l.activityUserSessionId,
    channel_type: u.type,
    media_session_ids: l.mediaSessionIds
  }), m.default.track(w.rMx.ACTIVITY_IFRAME_UNMOUNT, {
    channel_id: u.id,
    guild_id: u.getGuildId(),
    application_id: r,
    instance_ids: [l.launchId],
    media_session_ids: l.mediaSessionIds,
    activity_user_session_id: l.activityUserSessionId,
    raw_thermal_state: O,
    duration_ms: _
  }), delete V[r], delete x[r]
}

function Y(e) {
  let {
    channelId: t,
    embeddedActivity: n,
    connections: i,
    updateCode: r
  } = e, s = h.default.getId(), o = i.find(e => e.user_id === s);
  W(t, n, n.application_id, n.activity_id, null == o ? void 0 : o.user_id, r === G.m2.ACTIVITY_STARTED)
}

function j(e) {
  let {
    location: t,
    applicationId: n,
    launchId: i,
    participants: r
  } = e, s = h.default.getId(), o = C.ZP.getEmbeddedActivitiesForChannel(t.channel_id).find(e => e.launchId === i), a = r.find(e => e.user_id === s);
  null != o && W(t.channel_id, o, n, i, null == a ? void 0 : a.user_id, !1)
}

function W(e, t, n, i, r, s) {
  var a, l;
  let _ = C.ZP.getEmbeddedActivitiesForChannel(e),
    c = S.Z.getChannel(e);
  if (s && null !== (l = null == c ? void 0 : c.isPrivate()) && void 0 !== l && l && _.length <= 1 && null == r && u.Z.selectParticipant(e, null), null == r) return;
  let d = f.Z.getMediaSessionId(),
    E = "activity_id" in t ? (0, P.C)(t) : (0, P.Z)(t),
    I = null == d && (null == c ? void 0 : c.isVocal()) === !0 && (null == c ? void 0 : c.isPrivate()) === !1;
  null != E && !I && (null === (a = V[n]) || void 0 === a || a.call(V, {
    activitySessionId: E,
    activityUserSessionId: (0, o.Z)(),
    launchId: i,
    mediaSessionIds: null != d ? [d] : [],
    activities_infra_version: "location" in t ? 2 : 1
  }), delete V[n])
}

function K(e) {
  let {
    mediaSessionId: t
  } = e;
  if (null == t) return;
  for (let e in x) x[e].mediaSessionIds.push(t);
  let n = f.Z.getChannelId();
  if (null != n) {
    let e = C.ZP.getSelfEmbeddedActivityForChannel(n),
      i = null == e ? void 0 : e.applicationId,
      r = null == e ? void 0 : e.launchId,
      a = (0, P.Z)(e);
    if (null != i && null != t && null != a && null != r) {
      let e = x[i],
        n = V[i];
      s()(null == e || null == n, "an active session and awaiting session both exist"), null == n || n({
        activitySessionId: a,
        activityUserSessionId: (0, o.Z)(),
        launchId: r,
        mediaSessionIds: [t]
      }), delete V[i]
    }
  }
}

function z(e) {
  return x[e]
}
class q extends _.Z {
  _initialize() {
    N.Z.addChangeListener(this.handleSelectedChannelUpdate), O.S.subscribe(w.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), l.Z.subscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.Z.subscribe("EMBEDDED_ACTIVITY_OPEN", H), l.Z.subscribe("EMBEDDED_ACTIVITY_CLOSE", F), l.Z.subscribe("EMBEDDED_ACTIVITY_UPDATE", Y), l.Z.subscribe("EMBEDDED_ACTIVITY_UPDATE_V2", j), l.Z.subscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.Z.subscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.Z.subscribe("MEDIA_SESSION_JOINED", K), l.Z.subscribe("CALL_DELETE", this.handleCallDelete), l.Z.subscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState)
  }
  _terminate() {
    N.Z.removeChangeListener(this.handleSelectedChannelUpdate), O.S.unsubscribe(w.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), l.Z.unsubscribe("EMBEDDED_ACTIVITY_LAUNCH_FAIL", this.handleActivityLaunchFail), l.Z.unsubscribe("EMBEDDED_ACTIVITY_OPEN", H), l.Z.unsubscribe("EMBEDDED_ACTIVITY_CLOSE", F), l.Z.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", Y), l.Z.unsubscribe("EMBEDDED_ACTIVITY_UPDATE_V2", j), l.Z.unsubscribe("EMBEDDED_ACTIVITY_DEFERRED_OPEN", this.handleDeferredOpen), l.Z.unsubscribe("RPC_APP_DISCONNECTED", this.handleRPCDisconnect), l.Z.unsubscribe("MEDIA_SESSION_JOINED", K), l.Z.unsubscribe("CALL_DELETE", this.handleCallDelete), l.Z.unsubscribe("RTC_CONNECTION_STATE", this.handleRTCConnectionState)
  }
  constructor(...e) {
    super(...e), k(this, "handleSelectedChannelUpdate", () => {
      let e = N.Z.getVoiceChannelId();
      for (let {
          channelId: t,
          applicationId: n
        }
        of C.ZP.getSelfEmbeddedActivities().values())(0, b.Z)(t) && t !== e && this.leaveActivity({
        channelId: t,
        applicationId: n
      });
      if (null != e) {
        let t = C.ZP.getEmbeddedActivitiesForChannel(e),
          n = h.default.getId();
        t.forEach(e => {
          if (e.userIds.has(n)) {
            let t = C.ZP.getSelfEmbeddedActivityForChannel(e.channelId);
            null == t ? (0, g.rp)(e.channelId, e.applicationId) : null == i && this.hidePIPEmbed({
              channelId: t.channelId,
              applicationId: t.applicationId
            })
          }
        })
      }
      i = null != e ? e : void 0
    }), k(this, "handleActivityWebViewRelease", () => {
      this.releaseWebView()
    }), k(this, "handleActivityLaunchFail", e => {
      let {
        error: t,
        applicationId: n
      } = e;
      delete V[n];
      let i = B.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
      switch (t.code) {
        case w.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
          i = B.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
          break;
        case w.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
          i = B.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
          break;
        case w.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
          i = B.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
          break;
        case w.evJ.INVALID_PERMISSIONS:
          i = B.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
          break;
        case w.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
          i = B.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
          break;
        case w.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
          i = B.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
          break;
        case w.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
          i = B.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE
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
          of C.ZP.getSelfEmbeddedActivities().values()) e === i && this.leaveActivity({
          channelId: t,
          applicationId: i
        });
        t.code !== w.$VG.CLOSE_NORMAL && this.showErrorModal(t, i)
      }
    }), k(this, "handleCallDelete", e => {
      let {
        channelId: t
      } = e, n = N.Z.getVoiceChannelId();
      null != n && n === t && this.handleCallEnded(t)
    }), k(this, "handleRTCConnectionState", e => {
      if (e.state !== w.hes.DISCONNECTED) return;
      let t = e.channelId;
      this.handleCallEnded(t)
    }), k(this, "handleCallEnded", e => {
      let t = C.ZP.getSelfEmbeddedActivityForChannel(e);
      null != t && this.leaveActivity({
        channelId: e,
        applicationId: t.applicationId
      })
    }), k(this, "handleDeferredOpen", async e => {
      var t, n, i;
      let r;
      let {
        channelId: s,
        applicationId: o,
        analyticsLocations: a
      } = e, l = S.Z.getChannel(s);
      if (void 0 === l || T.tx.has(null == l ? void 0 : l.type) && N.Z.getVoiceChannelId() !== s) return;
      let u = C.ZP.getSelfEmbeddedActivityForChannel(s);
      if ((null == u ? void 0 : u.applicationId) === o) return;
      let _ = await c.Z.fetchApplication(o);
      if (!(0, M.a)(l)) {
        this.showLaunchErrorModal(B.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
        return
      }
      if (!(0, U.Z)(null == _ ? void 0 : null === (t = _.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
        this.showLaunchErrorModal(B.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
        return
      }
      let E = null == u ? void 0 : u.applicationId;
      null != E && (await c.Z.fetchApplication(E), r = d.Z.getApplication(E));
      let I = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : void 0,
        {
          activityConfigs: h,
          applications: f
        } = await (0, g.w1)({
          guildId: I
        }),
        A = (0, v.Z)({
          applicationId: o,
          activityConfigs: h,
          applications: f
        });
      if (null == A) {
        let e = await (0, g.w1)({
          guildId: I,
          force: !0
        });
        A = (0, v.Z)({
          applicationId: o,
          activityConfigs: e.activityConfigs,
          applications: e.applications
        })
      }
      let m = C.ZP.getEmbeddedActivitiesForChannel(s).find(e => e.applicationId === o),
        O = null !== (i = null == m ? void 0 : m.userIds.size) && void 0 !== i ? i : 0;
      O > 0 ? (0, L.k)({
        channelId: s,
        applicationId: o,
        launchId: null == m ? void 0 : m.launchId,
        inputApplication: null,
        analyticsLocations: a,
        embeddedActivitiesManager: this
      }) : await (0, D.Z)({
        targetApplicationId: o,
        currentEmbeddedApplication: r,
        channelId: s,
        guildId: I,
        embeddedActivitiesManager: this,
        analyticsLocations: a
      })
    })
  }
}