n.d(t, {
  Z: function() {
    return G
  }
});
var s = n(735250),
  i = n(470079),
  l = n(392711),
  a = n.n(l),
  r = n(442837),
  o = n(317381),
  c = n(258609),
  u = n(569545),
  d = n(106301),
  E = n(590415),
  h = n(131704),
  _ = n(199902),
  I = n(314897),
  m = n(592125),
  T = n(430824),
  g = n(131951),
  p = n(292959),
  N = n(19780),
  S = n(944486),
  C = n(606304),
  A = n(979651),
  f = n(938475),
  Z = n(823379),
  L = n(557177),
  O = n(981631);

function v(e, t, n, s) {
  i.useEffect(() => {
    let i = t(),
      l = new r.Fh(e, () => {
        let e = t(),
          l = n(i, e);
        null != l && !p.Z.isSoundDisabled(l) && (0, L.GN)(l, null != s ? s : .4), i = e
      });
    return l.attach("useSound"), () => l.detach()
  })
}

function R() {
  return v([g.Z, S.Z], () => ({
    inVoiceChannel: null != S.Z.getVoiceChannelId(),
    selfMute: g.Z.isSelfMute(),
    selfDeaf: g.Z.isSelfDeaf(),
    audioPermissionReady: g.Z.isNativeAudioPermissionReady(),
    shouldSkipMuteUnmuteSound: g.Z.shouldSkipMuteUnmuteSound()
  }), (e, t) => {
    let {
      inVoiceChannel: n,
      selfMute: s,
      selfDeaf: i,
      audioPermissionReady: l,
      shouldSkipMuteUnmuteSound: a
    } = t;
    if (e.selfDeaf !== i) return i ? "deafen" : "undeafen";
    if (!!l && (!!n || !!e.audioPermissionReady)) {
      if (e.selfMute !== s) {
        if (a) {
          g.Z.notifyMuteUnmuteSoundWasSkipped();
          return
        }
        return s ? "mute" : "unmute"
      }
    }
  }), null
}

function P() {
  return v([m.Z, N.Z, S.Z, c.Z], () => {
    let e = m.Z.getChannel(S.Z.getVoiceChannelId()),
      t = null == e ? void 0 : e.type,
      n = null == e ? void 0 : e.getGuildId(),
      s = N.Z.getWasEverRtcConnected(),
      i = N.Z.getState();
    return {
      channelType: t,
      guildId: n,
      connected: i === O.hes.RTC_CONNECTED,
      connectHasStarted: !s && i !== O.hes.DISCONNECTED || i === O.hes.RTC_CONNECTED,
      awaitingRemote: null != c.Z.getAwaitingRemoteSessionInfo(),
      connectedRemote: null != c.Z.getRemoteSessionId()
    }
  }, (e, t) => {
    let {
      channelType: n,
      connected: s,
      connectHasStarted: i,
      awaitingRemote: l,
      connectedRemote: a
    } = t, r = e.channelType, o = e.connectedRemote, c = e.connected, u = e.connectHasStarted;
    if (!u && i || a && !o) {
      if (null != n && h.Lr.has(n)) return;
      return "user_join"
    }
    if (c && !s) {
      if (l || a || null != r && h.Lr.has(r)) return;
      return "disconnect"
    }
  }), null
}

function x() {
  return v([C.Z], () => C.Z.isCurrentUserSpeaking(), (e, t) => {
    if (e !== t) {
      let e = g.Z.isSelfMute();
      if (g.Z.getMode() === O.pM4.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop"
    }
  }), null
}

function M() {
  return v([g.Z], () => g.Z.isSelfMutedTemporarily(), (e, t) => {
    if (e !== t) {
      let e = g.Z.isSelfMute();
      if (g.Z.getMode() === O.pM4.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start"
    }
  }), null
}

function D() {
  return v([A.Z], () => A.Z.userHasBeenMovedVersion, (e, t) => {
    if (e !== t) return "user_moved"
  }), null
}

function b() {
  return v([S.Z, A.Z], () => {
    let e = S.Z.getVoiceChannelId();
    if (null == e) return E.xO.NONE;
    let t = A.Z.getVoiceStateForChannel(e);
    return (0, E.gf)(t)
  }, (e, t) => {
    if (e !== t && t === E.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect"
  }), null
}

function y() {
  return v([S.Z, _.Z, I.default, A.Z, m.Z], () => {
    let e, t;
    let n = S.Z.getVoiceChannelId(),
      s = I.default.getId();
    let i = [],
      l = null,
      a = 0,
      r = _.Z.getAllActiveStreams();
    if (null != n) {
      let s = m.Z.getChannel(n);
      null != s && (e = s.type, t = f.ZP.countVoiceStatesForChannel(s.id) - (A.Z.isInChannel(s.id) ? 1 : 0), i = _.Z.getAllApplicationStreamsForChannel(s.id).map(e => e.ownerId))
    }
    let o = null;
    return (null == (o = 1 === r.length ? r[0] : _.Z.getCurrentUserActiveStream()) ? void 0 : o.state) === O.jm8.CONNECTING && (o = null), null != o && (l = (0, u.V9)(o), a = _.Z.getViewerIds(l).filter(e => e !== s).length), {
      channelType: e,
      voiceChannelId: n,
      voiceChannelUserCount: t,
      streamingUserIds: i,
      singleActiveStreamKey: l,
      singleActiveStreamViewerCount: a,
      currentUserId: s,
      allActiveStreams: r
    }
  }, (e, t) => {
    let {
      channelType: n,
      voiceChannelId: s,
      voiceChannelUserCount: i,
      streamingUserIds: l,
      singleActiveStreamKey: a,
      singleActiveStreamViewerCount: r,
      currentUserId: o
    } = t;
    if (e.voiceChannelId !== s || null == s || function(e) {
        let t = m.Z.getChannel(e);
        if (null == t) return !1;
        let n = t.getGuildId();
        if (null == n) return !1;
        let s = T.Z.getGuild(n);
        return null != s && s.afkChannelId === t.id
      }(s) || null != n && h.Lr.has(n)) return;
    let c = null != a && e.singleActiveStreamKey === a,
      u = l.some(t => !e.streamingUserIds.includes(t)),
      d = e.allActiveStreams.map(e => e.ownerId),
      E = e.streamingUserIds.some(e => !l.includes(e) && (e === o || d.includes(e)));
    if (u) return "stream_started";
    if (E) return "stream_ended";
    if (e.singleActiveStreamViewerCount <= 25 && c && r > e.singleActiveStreamViewerCount) return "stream_user_joined";
    else if (null != e.voiceChannelUserCount && null != i && e.voiceChannelUserCount <= 25 && i > e.voiceChannelUserCount) return "user_join";
    else if (null != e.voiceChannelUserCount && null != i && e.voiceChannelUserCount <= 25 && i < e.voiceChannelUserCount) return "user_leave";
    else if (e.singleActiveStreamViewerCount <= 25 && c && r < e.singleActiveStreamViewerCount) return "stream_user_left"
  }), null
}

function j() {
  return v([S.Z, o.ZP, I.default], () => {
    let e = S.Z.getVoiceChannelId(),
      t = S.Z.getChannelId(),
      n = o.ZP.getConnectedActivityChannelId(),
      s = I.default.getId(),
      i = (0, Z.lm)(t) ? o.ZP.getEmbeddedActivitiesForChannel(t) : o.i6,
      l = (0, Z.lm)(e) ? o.ZP.getEmbeddedActivitiesForChannel(e) : o.i6,
      a = (0, Z.lm)(n) ? o.ZP.getEmbeddedActivitiesForChannel(n) : o.i6;
    return {
      voiceChannelId: e,
      currentUserId: s,
      channelActivities: i,
      connectedChannelActivities: a,
      userConnectedActivity: (0, Z.lm)(n) ? o.ZP.getSelfEmbeddedActivityForChannel(n) : null,
      voiceChannelActivities: l
    }
  }, (e, t) => {
    let n, {
      voiceChannelId: s,
      currentUserId: i,
      channelActivities: l,
      connectedChannelActivities: a,
      userConnectedActivity: r,
      voiceChannelActivities: o
    } = t;
    let c = o.some(e => e.applicationId === (null == r ? void 0 : r.applicationId) && e.launchId === r.launchId);
    if ((0, Z.lm)(s)) {
      let t = e.voiceChannelActivities.find(e => e.userIds.has(i)),
        s = o.find(e => e.userIds.has(i));
      e.voiceChannelActivities.length < o.length && (0, Z.lm)(e.voiceChannelId) && (n = "activity_launch"), void 0 === s && (0, Z.lm)(t) && (n = "activity_end"), void 0 === t && (0, Z.lm)(s) && s.userIds.size > 1 && (n = "activity_user_join"), (0, Z.lm)(s) && (0, Z.lm)(t) && (s.userIds.size > t.userIds.size && (n = "activity_user_join"), s.userIds.size < t.userIds.size && (n = "activity_user_left"))
    }
    if (!c) {
      e.connectedChannelActivities.length < a.length && e.channelActivities.length < l.length && (n = "activity_launch");
      let t = e.userConnectedActivity;
      null == r && (0, Z.lm)(t) && (n = "activity_end"), (0, Z.lm)(r) && (0, Z.lm)(t) && (r.userIds.size > t.userIds.size && (n = "activity_user_join"), r.userIds.size < t.userIds.size && (n = "activity_user_left"))
    }
    return n
  }), null
}

function U() {
  return v([d.Z, S.Z], () => ({
    hangStatus: d.Z.getCurrentHangStatus(),
    customHangStatus: d.Z.getCustomHangStatus(),
    inVoice: null != S.Z.getVoiceChannelId()
  }), (e, t) => {
    var n, s;
    let {
      hangStatus: i,
      customHangStatus: l
    } = t;
    if (e.inVoice && (null != i && i !== e.hangStatus || null != l && (l.status !== (null === (n = e.customHangStatus) || void 0 === n ? void 0 : n.status) || !a().isEqual(l.emoji, null === (s = e.customHangStatus) || void 0 === s ? void 0 : s.emoji)))) return "hang_status_select"
  }, .15), null
}

function G() {
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(R, {}), (0, s.jsx)(P, {}), (0, s.jsx)(x, {}), (0, s.jsx)(M, {}), (0, s.jsx)(D, {}), (0, s.jsx)(y, {}), (0, s.jsx)(b, {}), (0, s.jsx)(j, {}), (0, s.jsx)(U, {})]
  })
}