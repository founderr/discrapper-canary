n.d(t, {
  Z: function() {
    return G
  }
});
var i = n(735250),
  s = n(470079),
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
  g = n(430824),
  p = n(131951),
  N = n(292959),
  T = n(19780),
  C = n(944486),
  S = n(606304),
  A = n(979651),
  f = n(938475),
  Z = n(823379),
  v = n(557177),
  L = n(981631);

function O(e, t, n, i) {
  s.useEffect(() => {
    let s = t(),
      l = new r.Fh(e, () => {
        let e = t(),
          l = n(s, e);
        null != l && !N.Z.isSoundDisabled(l) && (0, v.GN)(l, null != i ? i : .4), s = e
      });
    return l.attach("useSound"), () => l.detach()
  })
}

function R() {
  return O([p.Z, C.Z], () => ({
    inVoiceChannel: null != C.Z.getVoiceChannelId(),
    selfMute: p.Z.isSelfMute(),
    selfDeaf: p.Z.isSelfDeaf(),
    audioPermissionReady: p.Z.isNativeAudioPermissionReady(),
    shouldSkipMuteUnmuteSound: p.Z.shouldSkipMuteUnmuteSound()
  }), (e, t) => {
    let {
      inVoiceChannel: n,
      selfMute: i,
      selfDeaf: s,
      audioPermissionReady: l,
      shouldSkipMuteUnmuteSound: a
    } = t;
    if (e.selfDeaf !== s) return s ? "deafen" : "undeafen";
    if (!!l && (!!n || !!e.audioPermissionReady)) {
      if (e.selfMute !== i) {
        if (a) {
          p.Z.notifyMuteUnmuteSoundWasSkipped();
          return
        }
        return i ? "mute" : "unmute"
      }
    }
  }), null
}

function x() {
  return O([m.Z, T.Z, C.Z, c.Z], () => {
    let e = m.Z.getChannel(C.Z.getVoiceChannelId()),
      t = null == e ? void 0 : e.type,
      n = null == e ? void 0 : e.getGuildId(),
      i = T.Z.getWasEverRtcConnected(),
      s = T.Z.getState();
    return {
      channelType: t,
      guildId: n,
      connected: s === L.hes.RTC_CONNECTED,
      connectHasStarted: !i && s !== L.hes.DISCONNECTED || s === L.hes.RTC_CONNECTED,
      awaitingRemote: null != c.Z.getAwaitingRemoteSessionInfo(),
      connectedRemote: null != c.Z.getRemoteSessionId()
    }
  }, (e, t) => {
    let {
      channelType: n,
      connected: i,
      connectHasStarted: s,
      awaitingRemote: l,
      connectedRemote: a
    } = t, r = e.channelType, o = e.connectedRemote, c = e.connected, u = e.connectHasStarted;
    if (!u && s || a && !o) {
      if (null != n && h.Lr.has(n)) return;
      return "user_join"
    }
    if (c && !i) {
      if (l || a || null != r && h.Lr.has(r)) return;
      return "disconnect"
    }
  }), null
}

function M() {
  return O([S.Z], () => S.Z.isCurrentUserSpeaking(), (e, t) => {
    if (e !== t) {
      let e = p.Z.isSelfMute();
      if (p.Z.getMode() === L.pM4.PUSH_TO_TALK && !e) return t ? "ptt_start" : "ptt_stop"
    }
  }), null
}

function P() {
  return O([p.Z], () => p.Z.isSelfMutedTemporarily(), (e, t) => {
    if (e !== t) {
      let e = p.Z.isSelfMute();
      if (p.Z.getMode() === L.pM4.VOICE_ACTIVITY && !e) return t ? "ptt_stop" : "ptt_start"
    }
  }), null
}

function D() {
  return O([A.Z], () => A.Z.userHasBeenMovedVersion, (e, t) => {
    if (e !== t) return "user_moved"
  }), null
}

function b() {
  return O([C.Z, A.Z], () => {
    let e = C.Z.getVoiceChannelId();
    if (null == e) return E.xO.NONE;
    let t = A.Z.getVoiceStateForChannel(e);
    return (0, E.gf)(t)
  }, (e, t) => {
    if (e !== t && t === E.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) return "reconnect"
  }), null
}

function y() {
  return O([C.Z, _.Z, I.default, A.Z, m.Z], () => {
    let e, t;
    let n = C.Z.getVoiceChannelId(),
      i = I.default.getId();
    let s = [],
      l = null,
      a = 0,
      r = _.Z.getAllActiveStreams();
    if (null != n) {
      let i = m.Z.getChannel(n);
      null != i && (e = i.type, t = f.ZP.countVoiceStatesForChannel(i.id) - (A.Z.isInChannel(i.id) ? 1 : 0), s = _.Z.getAllApplicationStreamsForChannel(i.id).map(e => e.ownerId))
    }
    let o = null;
    return (null == (o = 1 === r.length ? r[0] : _.Z.getCurrentUserActiveStream()) ? void 0 : o.state) === L.jm8.CONNECTING && (o = null), null != o && (l = (0, u.V9)(o), a = _.Z.getViewerIds(l).filter(e => e !== i).length), {
      channelType: e,
      voiceChannelId: n,
      voiceChannelUserCount: t,
      streamingUserIds: s,
      singleActiveStreamKey: l,
      singleActiveStreamViewerCount: a,
      currentUserId: i,
      allActiveStreams: r
    }
  }, (e, t) => {
    let {
      channelType: n,
      voiceChannelId: i,
      voiceChannelUserCount: s,
      streamingUserIds: l,
      singleActiveStreamKey: a,
      singleActiveStreamViewerCount: r,
      currentUserId: o
    } = t;
    if (e.voiceChannelId !== i || null == i || function(e) {
        let t = m.Z.getChannel(e);
        if (null == t) return !1;
        let n = t.getGuildId();
        if (null == n) return !1;
        let i = g.Z.getGuild(n);
        return null != i && i.afkChannelId === t.id
      }(i) || null != n && h.Lr.has(n)) return;
    let c = null != a && e.singleActiveStreamKey === a,
      u = l.some(t => !e.streamingUserIds.includes(t)),
      d = e.allActiveStreams.map(e => e.ownerId),
      E = e.streamingUserIds.some(e => !l.includes(e) && (e === o || d.includes(e)));
    if (u) return "stream_started";
    if (E) return "stream_ended";
    if (e.singleActiveStreamViewerCount <= 25 && c && r > e.singleActiveStreamViewerCount) return "stream_user_joined";
    else if (null != e.voiceChannelUserCount && null != s && e.voiceChannelUserCount <= 25 && s > e.voiceChannelUserCount) return "user_join";
    else if (null != e.voiceChannelUserCount && null != s && e.voiceChannelUserCount <= 25 && s < e.voiceChannelUserCount) return "user_leave";
    else if (e.singleActiveStreamViewerCount <= 25 && c && r < e.singleActiveStreamViewerCount) return "stream_user_left"
  }), null
}

function j() {
  return O([C.Z, o.ZP, I.default], () => {
    let e = C.Z.getVoiceChannelId(),
      t = C.Z.getChannelId(),
      n = o.ZP.getConnectedActivityChannelId(),
      i = I.default.getId(),
      s = (0, Z.lm)(t) ? o.ZP.getEmbeddedActivitiesForChannel(t) : o.i6,
      l = (0, Z.lm)(e) ? o.ZP.getEmbeddedActivitiesForChannel(e) : o.i6,
      a = (0, Z.lm)(n) ? o.ZP.getEmbeddedActivitiesForChannel(n) : o.i6;
    return {
      voiceChannelId: e,
      currentUserId: i,
      channelActivities: s,
      connectedChannelActivities: a,
      userConnectedActivity: (0, Z.lm)(n) ? o.ZP.getSelfEmbeddedActivityForChannel(n) : null,
      voiceChannelActivities: l
    }
  }, (e, t) => {
    let n, {
      voiceChannelId: i,
      currentUserId: s,
      channelActivities: l,
      connectedChannelActivities: a,
      userConnectedActivity: r,
      voiceChannelActivities: o
    } = t;
    let c = o.some(e => e.applicationId === (null == r ? void 0 : r.applicationId) && e.launchId === r.launchId);
    if ((0, Z.lm)(i)) {
      let t = e.voiceChannelActivities.find(e => e.userIds.has(s)),
        i = o.find(e => e.userIds.has(s));
      e.voiceChannelActivities.length < o.length && (0, Z.lm)(e.voiceChannelId) && (n = "activity_launch"), void 0 === i && (0, Z.lm)(t) && (n = "activity_end"), void 0 === t && (0, Z.lm)(i) && i.userIds.size > 1 && (n = "activity_user_join"), (0, Z.lm)(i) && (0, Z.lm)(t) && (i.userIds.size > t.userIds.size && (n = "activity_user_join"), i.userIds.size < t.userIds.size && (n = "activity_user_left"))
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
  return O([d.Z, C.Z], () => ({
    hangStatus: d.Z.getCurrentHangStatus(),
    customHangStatus: d.Z.getCustomHangStatus(),
    inVoice: null != C.Z.getVoiceChannelId()
  }), (e, t) => {
    var n, i;
    let {
      hangStatus: s,
      customHangStatus: l
    } = t;
    if (e.inVoice && (null != s && s !== e.hangStatus || null != l && (l.status !== (null === (n = e.customHangStatus) || void 0 === n ? void 0 : n.status) || !a().isEqual(l.emoji, null === (i = e.customHangStatus) || void 0 === i ? void 0 : i.emoji)))) return "hang_status_select"
  }, .15), null
}

function G() {
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(R, {}), (0, i.jsx)(x, {}), (0, i.jsx)(M, {}), (0, i.jsx)(P, {}), (0, i.jsx)(D, {}), (0, i.jsx)(y, {}), (0, i.jsx)(b, {}), (0, i.jsx)(j, {}), (0, i.jsx)(U, {})]
  })
}