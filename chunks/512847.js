"use strict";
a.r(t), a.d(t, {
  default: function() {
    return w
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("392711"),
  i = a.n(l),
  r = a("442837"),
  o = a("317381"),
  u = a("258609"),
  d = a("569545"),
  c = a("106301"),
  f = a("590415"),
  E = a("131704"),
  h = a("199902"),
  _ = a("314897"),
  C = a("592125"),
  m = a("430824"),
  S = a("131951"),
  p = a("292959"),
  I = a("19780"),
  T = a("944486"),
  g = a("606304"),
  A = a("979651"),
  N = a("938475"),
  v = a("823379"),
  L = a("557177"),
  R = a("981631");

function O(e, t, a, n) {
  s.useEffect(() => {
    let s = t(),
      l = new r.BatchedStoreListener(e, () => {
        let e = t(),
          l = a(s, e);
        null != l && !p.default.isSoundDisabled(l) && (0, L.playSound)(l, null != n ? n : .4), s = e
      });
    return l.attach("useSound"), () => l.detach()
  })
}

function M() {
  return O([S.default, T.default], () => ({
    inVoiceChannel: null != T.default.getVoiceChannelId(),
    selfMute: S.default.isSelfMute(),
    selfDeaf: S.default.isSelfDeaf(),
    audioPermissionReady: S.default.isNativeAudioPermissionReady(),
    shouldSkipMuteUnmuteSound: S.default.shouldSkipMuteUnmuteSound()
  }), (e, t) => {
    let {
      inVoiceChannel: a,
      selfMute: n,
      selfDeaf: s,
      audioPermissionReady: l,
      shouldSkipMuteUnmuteSound: i
    } = t;
    if (e.selfDeaf !== s) return s ? "deafen" : "undeafen";
    if (!!l) {
      if ((a || e.audioPermissionReady) && e.selfMute !== n) {
        if (i) {
          S.default.notifyMuteUnmuteSoundWasSkipped();
          return
        }
        return n ? "mute" : "unmute"
      }
    }
  }), null
}

function P() {
  return O([C.default, I.default, T.default, u.default], () => {
    let e = C.default.getChannel(T.default.getVoiceChannelId()),
      t = null == e ? void 0 : e.type,
      a = null == e ? void 0 : e.getGuildId(),
      n = I.default.getWasEverRtcConnected(),
      s = I.default.getState();
    return {
      channelType: t,
      guildId: a,
      connected: s === R.RTCConnectionStates.RTC_CONNECTED,
      connectHasStarted: !n && s !== R.RTCConnectionStates.DISCONNECTED || s === R.RTCConnectionStates.RTC_CONNECTED,
      awaitingRemote: null != u.default.getAwaitingRemoteSessionInfo(),
      connectedRemote: null != u.default.getRemoteSessionId()
    }
  }, (e, t) => {
    let {
      channelType: a,
      connected: n,
      connectHasStarted: s,
      awaitingRemote: l,
      connectedRemote: i
    } = t, r = e.channelType, o = e.connectedRemote, u = e.connected, d = e.connectHasStarted;
    if (!d && s || i && !o) {
      if (null != a && E.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(a)) return;
      return "user_join"
    }
    if (u && !n) {
      if (l || i || null != r && E.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(r)) return;
      return "disconnect"
    }
  }), null
}

function x() {
  return O([g.default], () => g.default.isCurrentUserSpeaking(), (e, t) => {
    if (e !== t) {
      let e = S.default.isSelfMute();
      if (S.default.getMode() === R.InputModes.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop"
    }
  }), null
}

function y() {
  return O([S.default], () => S.default.isSelfMutedTemporarily(), (e, t) => {
    if (e !== t) {
      let e = S.default.isSelfMute();
      if (S.default.getMode() === R.InputModes.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start"
    }
  }), null
}

function D() {
  return O([A.default], () => A.default.userHasBeenMovedVersion, (e, t) => {
    if (e !== t) return "user_moved"
  }), null
}

function b() {
  return O([T.default, A.default], () => {
    let e = T.default.getVoiceChannelId();
    if (null == e) return f.RequestToSpeakStates.NONE;
    let t = A.default.getVoiceStateForChannel(e);
    return (0, f.getAudienceRequestToSpeakState)(t)
  }, (e, t) => {
    if (e !== t && t === f.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect"
  }), null
}

function U() {
  return O([T.default, h.default, _.default, A.default, C.default], () => {
    let e, t;
    let a = T.default.getVoiceChannelId(),
      n = _.default.getId();
    let s = [],
      l = null,
      i = 0,
      r = h.default.getAllActiveStreams();
    if (null != a) {
      let n = C.default.getChannel(a);
      null != n && (e = n.type, t = N.default.countVoiceStatesForChannel(n.id) - (A.default.isInChannel(n.id) ? 1 : 0), s = h.default.getAllApplicationStreamsForChannel(n.id).map(e => e.ownerId))
    }
    let o = null;
    return (null == (o = 1 === r.length ? r[0] : h.default.getCurrentUserActiveStream()) ? void 0 : o.state) === R.ApplicationStreamStates.CONNECTING && (o = null), null != o && (l = (0, d.encodeStreamKey)(o), i = h.default.getViewerIds(l).filter(e => e !== n).length), {
      channelType: e,
      voiceChannelId: a,
      voiceChannelUserCount: t,
      streamingUserIds: s,
      singleActiveStreamKey: l,
      singleActiveStreamViewerCount: i,
      currentUserId: n,
      allActiveStreams: r
    }
  }, (e, t) => {
    let {
      channelType: a,
      voiceChannelId: n,
      voiceChannelUserCount: s,
      streamingUserIds: l,
      singleActiveStreamKey: i,
      singleActiveStreamViewerCount: r,
      currentUserId: o
    } = t;
    if (e.voiceChannelId !== n || null == n || function(e) {
        let t = C.default.getChannel(e);
        if (null == t) return !1;
        let a = t.getGuildId();
        if (null == a) return !1;
        let n = m.default.getGuild(a);
        return null != n && n.afkChannelId === t.id
      }(n) || null != a && E.SILENT_JOIN_LEAVE_CHANNEL_TYPES.has(a)) return;
    let u = null != i && e.singleActiveStreamKey === i,
      d = l.some(t => !e.streamingUserIds.includes(t)),
      c = e.allActiveStreams.map(e => e.ownerId),
      f = e.streamingUserIds.some(e => !l.includes(e) && (e === o || c.includes(e)));
    if (d) return "stream_started";
    if (f) return "stream_ended";
    if (e.singleActiveStreamViewerCount <= 25 && u && r > e.singleActiveStreamViewerCount) return "stream_user_joined";
    else if (null != e.voiceChannelUserCount && null != s && e.voiceChannelUserCount <= 25 && s > e.voiceChannelUserCount) return "user_join";
    else if (null != e.voiceChannelUserCount && null != s && e.voiceChannelUserCount <= 25 && s < e.voiceChannelUserCount) return "user_leave";
    else if (e.singleActiveStreamViewerCount <= 25 && u && r < e.singleActiveStreamViewerCount) return "stream_user_left"
  }), null
}

function j() {
  return O([T.default, o.default, _.default], () => {
    let e = T.default.getVoiceChannelId(),
      t = T.default.getChannelId(),
      a = o.default.getConnectedActivityChannelId(),
      n = _.default.getId(),
      s = (0, v.isNotNullish)(t) ? o.default.getEmbeddedActivitiesForChannel(t) : o.NO_ACTIVITIES,
      l = (0, v.isNotNullish)(e) ? o.default.getEmbeddedActivitiesForChannel(e) : o.NO_ACTIVITIES,
      i = (0, v.isNotNullish)(a) ? o.default.getEmbeddedActivitiesForChannel(a) : o.NO_ACTIVITIES;
    return {
      voiceChannelId: e,
      currentUserId: n,
      channelActivities: s,
      connectedChannelActivities: i,
      userConnectedActivity: (0, v.isNotNullish)(a) ? o.default.getSelfEmbeddedActivityForChannel(a) : null,
      voiceChannelActivities: l
    }
  }, (e, t) => {
    let a, {
      voiceChannelId: n,
      currentUserId: s,
      channelActivities: l,
      connectedChannelActivities: i,
      userConnectedActivity: r,
      voiceChannelActivities: o
    } = t;
    let u = o.some(e => e.applicationId === (null == r ? void 0 : r.applicationId) && e.launchId === r.launchId);
    if ((0, v.isNotNullish)(n)) {
      let t = e.voiceChannelActivities.find(e => e.userIds.has(s)),
        n = o.find(e => e.userIds.has(s));
      e.voiceChannelActivities.length < o.length && (0, v.isNotNullish)(e.voiceChannelId) && (a = "activity_launch"), void 0 === n && (0, v.isNotNullish)(t) && (a = "activity_end"), void 0 === t && (0, v.isNotNullish)(n) && n.userIds.size > 1 && (a = "activity_user_join"), (0, v.isNotNullish)(n) && (0, v.isNotNullish)(t) && (n.userIds.size > t.userIds.size && (a = "activity_user_join"), n.userIds.size < t.userIds.size && (a = "activity_user_left"))
    }
    if (!u) {
      e.connectedChannelActivities.length < i.length && e.channelActivities.length < l.length && (a = "activity_launch");
      let t = e.userConnectedActivity;
      null == r && (0, v.isNotNullish)(t) && (a = "activity_end"), (0, v.isNotNullish)(r) && (0, v.isNotNullish)(t) && (r.userIds.size > t.userIds.size && (a = "activity_user_join"), r.userIds.size < t.userIds.size && (a = "activity_user_left"))
    }
    return a
  }), null
}

function G() {
  return O([c.default, T.default], () => ({
    hangStatus: c.default.getCurrentHangStatus(),
    customHangStatus: c.default.getCustomHangStatus(),
    inVoice: null != T.default.getVoiceChannelId()
  }), (e, t) => {
    var a, n;
    let {
      hangStatus: s,
      customHangStatus: l
    } = t;
    if (e.inVoice && (null != s && s !== e.hangStatus || null != l && (l.status !== (null === (a = e.customHangStatus) || void 0 === a ? void 0 : a.status) || !i().isEqual(l.emoji, null === (n = e.customHangStatus) || void 0 === n ? void 0 : n.emoji)))) return "hang_status_select"
  }, .15), null
}

function w() {
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(M, {}), (0, n.jsx)(P, {}), (0, n.jsx)(x, {}), (0, n.jsx)(y, {}), (0, n.jsx)(D, {}), (0, n.jsx)(U, {}), (0, n.jsx)(b, {}), (0, n.jsx)(j, {}), (0, n.jsx)(G, {})]
  })
}