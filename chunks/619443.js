"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("808653"), n("70102");
var s = n("917351"),
  i = n.n(s),
  r = n("446674"),
  a = n("913144"),
  o = n("987317"),
  d = n("723939"),
  u = n("605250"),
  l = n("374014"),
  f = n("374363"),
  _ = n("271938"),
  c = n("950104"),
  g = n("42203"),
  m = n("260320"),
  h = n("42887"),
  v = n("945956"),
  E = n("590401"),
  p = n("18494"),
  y = n("101125"),
  T = n("205817"),
  C = n("41642"),
  I = n("518916"),
  S = n("571420"),
  A = n("399010"),
  D = n("49111"),
  N = n("397336");
let O = window.DiscordNative;
I.socket.dispatcher.getDispatchHandler = A.default;
let P = new u.default("ConnectionStore"),
  b = 0,
  V = null,
  R = !0;
async function k(e) {
  b = Date.now(), V = e.sessionId, I.localPresenceState.handleConnectionOpen();
  let t = {},
    n = p.default.getVoiceChannelId();
  if (null != n) {
    var s, i, r, a, d, u, l, f;
    let e = (null === (d = window) || void 0 === d ? void 0 : null === (a = d.performance) || void 0 === a ? void 0 : null === (r = a.getEntriesByType) || void 0 === r ? void 0 : null === (i = r.call(a, "navigation")) || void 0 === i ? void 0 : null === (s = i[0]) || void 0 === s ? void 0 : s.type) === "reload" || (null === (u = await (null == O ? void 0 : null === (f = O.processUtils) || void 0 === f ? void 0 : null === (l = f.getLastCrash) || void 0 === l ? void 0 : l.call(f))) || void 0 === u ? void 0 : u.rendererCrashReason) != null;
    if (e || !R) {
      let e = g.default.getChannel(n);
      null != e && (t = {
        guildId: e.getGuildId(),
        channelId: n
      })
    } else v.default.setLastSessionVoiceChannelId(null != n ? n : null), o.default.selectVoiceChannel(null)
  }
  I.localVoiceState.update(t, !0), I.localLobbyVoiceStates.update({}, !0), R = !1
}

function M() {
  I.localVoiceState.update()
}

function w() {
  return I.localVoiceState.update(), I.localLobbyVoiceStates.update(), !1
}

function L() {
  return I.localPresenceState.update(), !1
}

function U() {
  return I.localLobbyVoiceStates.update(), !1
}

function G(e) {
  I.socket.isSessionEstablished() && I.socket.streamDelete(e)
}
class F extends r.default.Store {
  initialize() {
    this.waitFor(_.default, p.default, g.default, c.default, m.default, f.default), this.syncWith([h.default], w), this.syncWith([y.default], L)
  }
  getSocket() {
    return I.socket
  }
  isTryingToConnect() {
    return !I.socket.isClosed()
  }
  isConnected() {
    return I.socket.isSessionEstablished()
  }
  isConnectedOrOverlay() {
    return I.socket.isSessionEstablished() || __OVERLAY__
  }
  lastTimeConnectedChanged() {
    return b
  }
}
F.displayName = "GatewayConnectionStore";
var H = new F(a.default, {
  START_SESSION: function() {
    return I.socket.isClosed() ? (P.verbose("Socket is reconnecting because of starting new session"), I.socket.connect()) : (P.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
  },
  LOGIN_SUCCESS: function() {
    return P.verbose("session refresh dispatched", {
      isEstablished: I.socket.isSessionEstablished()
    }), !!I.socket.isSessionEstablished() && (I.socket.close(), I.socket.connect())
  },
  LOGOUT: function(e) {
    e.isSwitchingAccount && I.localPresenceState.handleAccountSwitch(), P.verbose("Closing socket because of logout"), I.socket.close()
  },
  CLEAR_CACHES: function(e) {
    return I.socket.close(), I.socket.dispatcher.clear(), I.socket.connect(), !1
  },
  CONNECTION_OPEN: e => {
    k(e)
  },
  CONNECTION_CLOSED: function() {
    P.verbose("connection closed dispatched"), b = Date.now()
  },
  RTC_CONNECTION_STATE: function(e) {
    if (e.state !== D.RTCConnectionStates.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? I.socket.streamPing(e.streamKey) : I.socket.voiceServerPing())
  },
  VOICE_CHANNEL_SELECT: function(e) {
    return I.localVoiceState.update({
      guildId: e.guildId,
      channelId: e.channelId
    }), !1
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      if (_.default.getId() !== t.userId) return e;
      if (t.sessionId === V) I.localVoiceState.setState({
        guildId: t.guildId,
        channelId: t.channelId
      });
      else {
        if (t.guildId !== I.localVoiceState.guildId) return e;
        I.localVoiceState.setState({
          guildId: null,
          channelId: null
        })
      }
      return !0
    }, !1)
  },
  GUILD_DELETE: function(e) {
    e.guild.id === I.localVoiceState.guildId && I.localVoiceState.setState({
      guildId: null,
      channelId: null
    })
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    t.id === I.localVoiceState.channelId && I.localVoiceState.setState({
      guildId: null,
      channelId: null
    })
  },
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    t === I.localVoiceState.channelId && I.localVoiceState.setState({
      guildId: null,
      channelId: null
    })
  },
  APP_STATE_UPDATE: function(e) {
    return e.state === D.AppStates.ACTIVE && (S.setIsPaused(!1), _.default.isAuthenticated() && I.socket.resetBackoff("App state is active")), !1
  },
  GUILD_MEMBERS_REQUEST: function(e) {
    return I.socket.isSessionEstablished() && ("userIds" in e ? i(e.userIds).chunk(100).forEach(t => {
      I.socket.requestGuildMembers(e.guildIds, {
        userIds: t,
        presences: !!e.presences
      })
    }) : I.socket.requestGuildMembers(e.guildIds, {
      query: e.query,
      limit: e.limit,
      presences: !!e.presences
    })), !1
  },
  GUILD_SEARCH_RECENT_MEMBERS: function(e) {
    let {
      guildId: t,
      query: n,
      continuationToken: s
    } = e;
    I.socket.isSessionEstablished() && I.socket.searchRecentMembers(t, {
      query: n,
      continuationToken: s
    })
  },
  GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
    let {
      subscriptions: t
    } = e;
    return I.socket.isSessionEstablished() && I.socket.updateGuildSubscriptions(t), !1
  },
  CALL_CONNECT: function(e) {
    let {
      channelId: t
    } = e;
    return I.socket.isSessionEstablished() && I.socket.callConnect(t), !1
  },
  CALL_CONNECT_MULTIPLE: function(e) {
    let {
      channelIds: t
    } = e;
    return I.socket.isSessionEstablished() && t.forEach(e => {
      I.socket.callConnect(e)
    }), !1
  },
  LOBBY_CONNECT: function(e) {
    let {
      lobbyId: t,
      lobbySecret: n
    } = e;
    return I.socket.isSessionEstablished() && I.socket.lobbyConnect(t, n), !1
  },
  LOBBY_DISCONNECT: function(e) {
    let {
      lobbyId: t
    } = e;
    return I.socket.isSessionEstablished() && I.socket.lobbyDisconnect(t), I.localLobbyVoiceStates.update(), !1
  },
  LOBBY_VOICE_CONNECT: U,
  LOBBY_VOICE_DISCONNECT: U,
  RPC_APP_DISCONNECTED: U,
  STREAM_CREATE: M,
  STREAM_START: function(e) {
    let {
      streamType: t,
      guildId: n,
      channelId: s
    } = e;
    if (I.socket.isSessionEstablished()) {
      var i, r;
      let e = null != n ? null === (i = g.default.getChannel(s)) || void 0 === i ? void 0 : i.rtcRegion : null === (r = c.default.getCall(s)) || void 0 === r ? void 0 : r.region;
      I.socket.streamCreate(t, n, s, null != e ? e : E.default.getPreferredRegion())
    }
    return !1
  },
  STREAM_WATCH: function(e) {
    let {
      streamKey: t,
      allowMultiple: n
    } = e;
    return I.socket.isSessionEstablished() && (n || ! function() {
      let e = function() {
        return T.default.getAllActiveStreamKeys().find(e => (0, l.decodeStreamKey)(e).ownerId === _.default.getId())
      }();
      T.default.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => G(e))
    }(), I.socket.streamWatch(t)), !1
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    return G(t), M(), !1
  },
  STREAM_SET_PAUSED: function(e) {
    let {
      streamKey: t,
      paused: n
    } = e;
    I.socket.isSessionEstablished() && I.socket.streamSetPaused(t, n)
  },
  PUSH_NOTIFICATION_CLICK: function() {
    return I.socket.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
  },
  EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
    var t, n;
    let {
      channelId: s,
      applicationId: i
    } = e, r = null !== (n = null === (t = g.default.getChannel(s)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
    I.socket.embeddedActivityClose(r, s, i)
  },
  REQUEST_FORUM_UNREADS: function(e) {
    let {
      guildId: t,
      channelId: n,
      threads: s
    } = e;
    I.socket.requestForumUnreads(t, n, s)
  },
  REQUEST_SOUNDBOARD_SOUNDS: function(e) {
    let {
      guildIds: t
    } = e;
    I.socket.requestSoundboardSounds(t)
  },
  REMOTE_COMMAND: function(e) {
    let {
      sessionId: t,
      payload: n
    } = e;
    return I.socket.isSessionEstablished() && I.socket.remoteCommand(t, n), !1
  },
  RESET_CONNECTION: function(e) {
    I.socket.connectionState !== C.default.WILL_RECONNECT && (e.badCache ? (d.default.replaceDisableAllDatabases("RESET_CONNECTION"), I.socket.resetSocketOnError(Error("Guild data was missing from store (via RESET_CONNECTION)"), "RESET_CONNECTION_DATA_MISSING")) : I.socket.resetSocketOnError(Error("Connection reset requested (via RESET_CONNECTION)"), "RESET_CONNECTION"))
  },
  RTC_SPEED_TEST_START_TEST: function() {
    return I.socket.isSessionEstablished() && I.socket.speedTestCreate(E.default.getPreferredRegion()), !1
  },
  RTC_SPEED_TEST_STOP_TEST: function() {
    return I.socket.isSessionEstablished() && I.socket.speedTestDelete(), !1
  },
  CLIPS_SETTINGS_UPDATE: M,
  RUNNING_GAMES_CHANGE: M,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    var t;
    e.settings.type === N.UserSettingsTypes.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && M()
  }
})