"use strict";
n(724458);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  c = n(287734),
  d = n(710845),
  E = n(569545),
  I = n(581883),
  T = n(314897),
  h = n(523746),
  S = n(592125),
  f = n(131951),
  N = n(19780),
  A = n(936349),
  m = n(944486),
  O = n(885110),
  R = n(959457),
  p = n(358085),
  g = n(138859),
  C = n(955132),
  v = n(645436),
  L = n(344651),
  D = n(981631),
  M = n(526761);
let P = window.DiscordNative;
C.Wb.dispatcher.getDispatchHandler = L.Z;
let y = new d.Z("ConnectionStore"),
  U = 0,
  b = null,
  G = !0,
  w = null;
async function B(e) {
  U = Date.now(), b = e.sessionId, C.RR.handleConnectionOpen();
  let t = {},
    n = m.Z.getVoiceChannelId();
  if (null != n) {
    var i, r, s, o, a, l, u, _;
    if ((null === (a = window) || void 0 === a ? void 0 : null === (o = a.performance) || void 0 === o ? void 0 : null === (s = o.getEntriesByType) || void 0 === s ? void 0 : null === (r = s.call(o, "navigation")) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.type) === "reload" || (null === (l = await (null == P ? void 0 : null === (_ = P.processUtils) || void 0 === _ ? void 0 : null === (u = _.getLastCrash) || void 0 === u ? void 0 : u.call(_))) || void 0 === l ? void 0 : l.rendererCrashReason) != null || !G) {
      let e = S.Z.getChannel(n);
      null != e && (t = {
        guildId: e.getGuildId(),
        channelId: n
      })
    } else N.Z.setLastSessionVoiceChannelId(null != n ? n : null), c.default.selectVoiceChannel(null)
  }
  C.GC.update(t, !0), G = !1
}

function k() {
  C.GC.update()
}

function x() {
  return C.GC.update(), !1
}

function V() {
  return C.RR.update(), !1
}

function Z(e) {
  C.Wb.isSessionEstablished() && C.Wb.streamDelete(e)
}
class H extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(T.default, m.Z, S.Z, h.Z, I.Z), this.syncWith([f.Z], x), this.syncWith([O.Z], V)
  }
  getSocket() {
    return C.Wb
  }
  isTryingToConnect() {
    return !C.Wb.isClosed()
  }
  isConnected() {
    return C.Wb.isSessionEstablished()
  }
  isConnectedOrOverlay() {
    return C.Wb.isSessionEstablished() || __OVERLAY__
  }
  lastTimeConnectedChanged() {
    return U
  }
}
o = "GatewayConnectionStore", (s = "displayName") in(r = H) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new H(_.Z, {
  START_SESSION: function() {
    return C.Wb.isClosed() ? (y.verbose("Socket is reconnecting because of starting new session"), C.Wb.connect()) : (y.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
  },
  LOGIN_SUCCESS: function() {
    return y.verbose("session refresh dispatched", {
      isEstablished: C.Wb.isSessionEstablished()
    }), !!C.Wb.isSessionEstablished() && (C.Wb.close(), C.Wb.connect())
  },
  LOGOUT: function(e) {
    e.isSwitchingAccount && C.RR.handleAccountSwitch(), y.verbose("Closing socket because of logout"), C.Wb.close()
  },
  CLEAR_CACHES: function(e) {
    return e.resetSocket && (C.Wb.close(), C.Wb.dispatcher.clear(), C.Wb.connect()), !1
  },
  CONNECTION_OPEN: e => {
    B(e)
  },
  CONNECTION_CLOSED: function() {
    y.verbose("connection closed dispatched"), U = Date.now()
  },
  RTC_CONNECTION_STATE: function(e) {
    if (e.state !== D.hes.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? C.Wb.streamPing(e.streamKey) : C.Wb.voiceServerPing())
  },
  VOICE_CHANNEL_SELECT: function(e) {
    return C.GC.update({
      guildId: e.guildId,
      channelId: e.channelId
    }), (0, p.isIOS)() && null == e.channelId && w === D.$7l.BACKGROUND && C.Wb.close(!0), !1
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      if (T.default.getId() !== t.userId) return e;
      if (t.sessionId === b) C.GC.setState({
        guildId: t.guildId,
        channelId: t.channelId
      });
      else {
        if (t.guildId !== C.GC.guildId) return e;
        C.GC.setState({
          guildId: null,
          channelId: null
        })
      }
      return !0
    }, !1)
  },
  GUILD_DELETE: function(e) {
    e.guild.id === C.GC.guildId && C.GC.setState({
      guildId: null,
      channelId: null
    })
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    t.id === C.GC.channelId && C.GC.setState({
      guildId: null,
      channelId: null
    })
  },
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    t === C.GC.channelId && C.GC.setState({
      guildId: null,
      channelId: null
    })
  },
  APP_STATE_UPDATE: function(e) {
    return (0, p.isIOS)() ? (T.default.isAuthenticated() && (w === D.$7l.INACTIVE && e.state === D.$7l.BACKGROUND && null == C.GC.channelId ? C.Wb.close(!0) : w === D.$7l.BACKGROUND && e.state === D.$7l.ACTIVE && (v.Y(!1), C.Wb.connect())), w = e.state) : e.state === D.$7l.ACTIVE && (v.Y(!1), T.default.isAuthenticated() && C.Wb.resetBackoff("App state is active")), !1
  },
  GUILD_MEMBERS_REQUEST: function(e) {
    return C.Wb.isSessionEstablished() && ("userIds" in e ? l()(e.userIds).chunk(100).forEach(t => {
      C.Wb.requestGuildMembers(e.guildIds, {
        userIds: t,
        presences: !!e.presences
      })
    }) : C.Wb.requestGuildMembers(e.guildIds, {
      query: e.query,
      limit: e.limit,
      presences: !!e.presences
    })), !1
  },
  GUILD_SEARCH_RECENT_MEMBERS: function(e) {
    let {
      guildId: t,
      query: n,
      continuationToken: i
    } = e;
    C.Wb.isSessionEstablished() && C.Wb.searchRecentMembers(t, {
      query: n,
      continuationToken: i
    })
  },
  GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
    let {
      subscriptions: t
    } = e;
    return C.Wb.isSessionEstablished() && C.Wb.updateGuildSubscriptions(t), !1
  },
  CALL_CONNECT: function(e) {
    let {
      channelId: t
    } = e;
    return C.Wb.isSessionEstablished() && C.Wb.callConnect(t), !1
  },
  CALL_CONNECT_MULTIPLE: function(e) {
    let {
      channelIds: t
    } = e;
    return C.Wb.isSessionEstablished() && t.forEach(e => {
      C.Wb.callConnect(e)
    }), !1
  },
  STREAM_CREATE: k,
  STREAM_START: function(e) {
    let {
      streamType: t,
      guildId: n,
      channelId: i
    } = e;
    if (C.Wb.isSessionEstablished()) {
      var r, s;
      let e = null != n ? null === (r = S.Z.getChannel(i)) || void 0 === r ? void 0 : r.rtcRegion : null === (s = h.Z.getCall(i)) || void 0 === s ? void 0 : s.region;
      C.Wb.streamCreate(t, n, i, null != e ? e : A.Z.getPreferredRegion())
    }
    return !1
  },
  STREAM_WATCH: function(e) {
    let {
      streamKey: t,
      allowMultiple: n
    } = e;
    return C.Wb.isSessionEstablished() && (n || ! function() {
      let e = function() {
        return R.Z.getAllActiveStreamKeys().find(e => (0, E.my)(e).ownerId === T.default.getId())
      }();
      R.Z.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => Z(e))
    }(), C.Wb.streamWatch(t)), !1
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    return Z(t), k(), !1
  },
  STREAM_SET_PAUSED: function(e) {
    let {
      streamKey: t,
      paused: n
    } = e;
    C.Wb.isSessionEstablished() && C.Wb.streamSetPaused(t, n)
  },
  PUSH_NOTIFICATION_CLICK: function() {
    return C.Wb.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
  },
  EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
    var t, n;
    let {
      channelId: i,
      applicationId: r
    } = e, s = null !== (n = null === (t = S.Z.getChannel(i)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
    C.Wb.embeddedActivityClose(s, i, r)
  },
  REQUEST_FORUM_UNREADS: function(e) {
    let {
      guildId: t,
      channelId: n,
      threads: i
    } = e;
    C.Wb.requestForumUnreads(t, n, i)
  },
  REQUEST_SOUNDBOARD_SOUNDS: function(e) {
    let {
      guildIds: t
    } = e;
    C.Wb.requestSoundboardSounds(t)
  },
  REMOTE_COMMAND: function(e) {
    let {
      sessionId: t,
      payload: n
    } = e;
    return C.Wb.isSessionEstablished() && C.Wb.remoteCommand(t, n), !1
  },
  RESET_SOCKET: function(e) {
    if (C.Wb.connectionState !== g.Z.WILL_RECONNECT) C.Wb.resetSocketOnError(e.args)
  },
  RTC_SPEED_TEST_START_TEST: function() {
    return C.Wb.isSessionEstablished() && C.Wb.speedTestCreate(A.Z.getPreferredRegion()), !1
  },
  RTC_SPEED_TEST_STOP_TEST: function() {
    return C.Wb.isSessionEstablished() && C.Wb.speedTestDelete(), !1
  },
  CLIPS_SETTINGS_UPDATE: k,
  RUNNING_GAMES_CHANGE: k,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    var t;
    e.settings.type === M.yP.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && k()
  }
})