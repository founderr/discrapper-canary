"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("917351"),
  l = n.n(i),
  r = n("446674"),
  o = n("408166"),
  u = n("191225"),
  d = n("76393"),
  c = n("374014"),
  f = n("32346"),
  E = n("808422"),
  h = n("233069"),
  _ = n("373469"),
  C = n("271938"),
  I = n("42203"),
  S = n("305961"),
  m = n("42887"),
  p = n("385649"),
  T = n("945956"),
  g = n("18494"),
  A = n("280168"),
  N = n("800762"),
  R = n("316133"),
  O = n("449008"),
  v = n("709681"),
  L = n("49111");

function M(e, t, n, a) {
  s.useEffect(() => {
    let s = t(),
      i = new r.BatchedStoreListener(e, () => {
        let e = t(),
          i = n(s, e);
        null != i && !p.default.isSoundDisabled(i) && (0, v.playSound)(i, null != a ? a : .4), s = e
      });
    return i.attach("useSound"), () => i.detach()
  })
}

function P() {
  return M([m.default, g.default], () => ({
    inVoiceChannel: null != g.default.getVoiceChannelId(),
    selfMute: m.default.isSelfMute(),
    selfDeaf: m.default.isSelfDeaf(),
    audioPermissionReady: m.default.isNativeAudioPermissionReady()
  }), (e, t) => {
    let {
      inVoiceChannel: n,
      selfMute: a,
      selfDeaf: s,
      audioPermissionReady: i
    } = t;
    return e.selfDeaf !== s ? s ? "deafen" : "undeafen" : i ? (n || e.audioPermissionReady) && e.selfMute !== a ? a ? "mute" : "unmute" : void 0 : void 0
  }), null
}

function D() {
  return M([I.default, T.default, g.default, d.default], () => {
    let e = I.default.getChannel(g.default.getVoiceChannelId()),
      t = null == e ? void 0 : e.type,
      n = null == e ? void 0 : e.getGuildId(),
      a = T.default.getWasEverRtcConnected(),
      s = T.default.getState();
    return {
      channelType: t,
      guildId: n,
      connected: s === L.RTCConnectionStates.RTC_CONNECTED,
      connectHasStarted: !a && s !== L.RTCConnectionStates.DISCONNECTED || s === L.RTCConnectionStates.RTC_CONNECTED,
      awaitingRemote: null != d.default.getAwaitingRemoteSessionInfo(),
      connectedRemote: null != d.default.getRemoteSessionId()
    }
  }, (e, t) => {
    let {
      channelType: n,
      connected: a,
      connectHasStarted: s,
      awaitingRemote: i,
      connectedRemote: l
    } = t, r = e.channelType, o = e.connectedRemote, u = e.connected, d = e.connectHasStarted;
    if (!d && s || l && !o) {
      if (null != n && h.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(n)) return;
      return "user_join"
    }
    if (u && !a) {
      if (i || l || null != r && h.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(r)) return;
      return "disconnect"
    }
  }), null
}

function y() {
  return M([A.default], () => A.default.isCurrentUserSpeaking(), (e, t) => {
    if (e !== t) {
      let e = m.default.isSelfMute(),
        n = m.default.getMode();
      if (n === L.InputModes.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop"
    }
  }), null
}

function x() {
  return M([m.default], () => m.default.isSelfMutedTemporarily(), (e, t) => {
    if (e !== t) {
      let e = m.default.isSelfMute(),
        n = m.default.getMode();
      if (n === L.InputModes.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start"
    }
  }), null
}

function b() {
  return M([N.default], () => N.default.userHasBeenMovedVersion, (e, t) => {
    if (e !== t) return "user_moved"
  }), null
}

function U() {
  return M([g.default, N.default], () => {
    let e = g.default.getVoiceChannelId();
    if (null == e) return E.RequestToSpeakStates.NONE;
    let t = N.default.getVoiceStateForChannel(e);
    return (0, E.getAudienceRequestToSpeakState)(t)
  }, (e, t) => {
    if (e !== t && t === E.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect"
  }), null
}

function G() {
  return M([g.default, _.default, C.default, N.default, I.default], () => {
    let e, t;
    let n = g.default.getVoiceChannelId(),
      a = C.default.getId();
    let s = [],
      i = null,
      l = 0,
      r = _.default.getAllActiveStreams();
    if (null != n) {
      let a = I.default.getChannel(n);
      null != a && (e = a.type, t = R.default.countVoiceStatesForChannel(a.id) - (N.default.isInChannel(a.id) ? 1 : 0), s = _.default.getAllApplicationStreamsForChannel(a.id).map(e => e.ownerId))
    }
    let o = null;
    return (null == (o = 1 === r.length ? r[0] : _.default.getCurrentUserActiveStream()) ? void 0 : o.state) === L.ApplicationStreamStates.CONNECTING && (o = null), null != o && (i = (0, c.encodeStreamKey)(o), l = _.default.getViewerIds(i).filter(e => e !== a).length), {
      channelType: e,
      voiceChannelId: n,
      voiceChannelUserCount: t,
      streamingUserIds: s,
      singleActiveStreamKey: i,
      singleActiveStreamViewerCount: l,
      currentUserId: a,
      allActiveStreams: r
    }
  }, (e, t) => {
    let {
      channelType: n,
      voiceChannelId: a,
      voiceChannelUserCount: s,
      streamingUserIds: i,
      singleActiveStreamKey: l,
      singleActiveStreamViewerCount: r,
      currentUserId: o
    } = t;
    if (e.voiceChannelId !== a || null == a || function(e) {
        let t = I.default.getChannel(e);
        if (null == t) return !1;
        let n = t.getGuildId();
        if (null == n) return !1;
        let a = S.default.getGuild(n);
        return null != a && a.afkChannelId === t.id
      }(a) || null != n && h.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(n)) return;
    let u = null != l && e.singleActiveStreamKey === l,
      d = i.some(t => !e.streamingUserIds.includes(t)),
      c = e.allActiveStreams.map(e => e.ownerId),
      f = e.streamingUserIds.some(e => !i.includes(e) && (e === o || c.includes(e)));
    if (d) return "stream_started";
    if (f) return "stream_ended";
    if (e.singleActiveStreamViewerCount <= 25 && u && r > e.singleActiveStreamViewerCount) return "stream_user_joined";
    else if (null != e.voiceChannelUserCount && null != s && e.voiceChannelUserCount <= 25 && s > e.voiceChannelUserCount) return "user_join";
    else if (null != e.voiceChannelUserCount && null != s && e.voiceChannelUserCount <= 25 && s < e.voiceChannelUserCount) return "user_leave";
    else if (e.singleActiveStreamViewerCount <= 25 && u && r < e.singleActiveStreamViewerCount) return "stream_user_left"
  }), null
}

function j() {
  return M([g.default, u.default, C.default], () => {
    let e = g.default.getVoiceChannelId(),
      t = C.default.getId(),
      n = (0, O.isNotNullish)(e) ? u.default.getEmbeddedActivitiesForChannel(e) : u.NO_ACTIVITIES;
    return {
      voiceChannelId: e,
      currentUserId: t,
      channelActivities: n
    }
  }, (e, t) => {
    let n, {
      voiceChannelId: a,
      currentUserId: s,
      channelActivities: i
    } = t;
    if (null == a) return;
    let {
      enabled: l
    } = o.ActivitiesSoundsExperiment.getCurrentConfig({
      location: "5ef733_1"
    }, {
      autoTrackExposure: !1
    }), r = !1;
    e.channelActivities.length < i.length && (n = "activity_launch", r = !0);
    let u = e.channelActivities.find(e => e.userIds.has(s)),
      d = i.find(e => e.userIds.has(s));
    if (void 0 === d && (0, O.isNotNullish)(u) && (n = "activity_end", r = !0), void 0 === u && (0, O.isNotNullish)(d) && d.userIds.size > 1 && (n = "activity_user_join", r = !0), (0, O.isNotNullish)(d) && (0, O.isNotNullish)(u) && (d.userIds.size > u.userIds.size && (n = "activity_user_join", r = !0), d.userIds.size < u.userIds.size && (n = "activity_user_left", r = !0)), r && o.ActivitiesSoundsExperiment.trackExposure({
        location: "5ef733_2"
      }), l) return n
  }), null
}

function w() {
  return M([f.default, g.default], () => ({
    hangStatus: f.default.getCurrentHangStatus(),
    customHangStatus: f.default.getCustomHangStatus(),
    inVoice: null != g.default.getVoiceChannelId()
  }), (e, t) => {
    var n, a;
    let {
      hangStatus: s,
      customHangStatus: i
    } = t;
    if (e.inVoice && (null != s && s !== e.hangStatus || null != i && (i.status !== (null === (n = e.customHangStatus) || void 0 === n ? void 0 : n.status) || !l.isEqual(i.emoji, null === (a = e.customHangStatus) || void 0 === a ? void 0 : a.emoji)))) return "hang_status_select"
  }, .15), null
}

function k() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(P, {}), (0, a.jsx)(D, {}), (0, a.jsx)(y, {}), (0, a.jsx)(x, {}), (0, a.jsx)(b, {}), (0, a.jsx)(G, {}), (0, a.jsx)(U, {}), (0, a.jsx)(j, {}), (0, a.jsx)(w, {})]
  })
}