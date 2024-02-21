"use strict";
let r, i, l, u;
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("222007"), n("424973"), n("808653");
var a = n("446674"),
  o = n("913144"),
  s = n("76393"),
  d = n("161454"),
  E = n("374014"),
  _ = n("223913"),
  c = n("537429"),
  I = n("271938"),
  S = n("42203"),
  T = n("305961"),
  f = n("42887"),
  p = n("957255"),
  N = n("945956"),
  A = n("18494"),
  R = n("800762"),
  C = n("49111"),
  L = n("706530");
let O = null,
  h = {},
  P = null;

function g() {
  r = new Map, i = {}, l = {}, u = {}, h = {}
}
g();

function m(e) {
  r.delete(e)
}

function y() {
  let e = [];
  for (let t in i) {
    let n = i[t];
    for (let r in n) e.push(i[t][r])
  }
  return e
}

function D(e) {
  let {
    streamKey: t,
    region: n,
    viewerIds: i,
    paused: u
  } = e;
  r.set(t, {
    ...(0, E.decodeStreamKey)(t),
    state: u ? C.ApplicationStreamStates.PAUSED : C.ApplicationStreamStates.ACTIVE
  }), l[t] = {
    streamKey: t,
    region: n,
    viewerIds: i
  }
}

function v(e, t) {
  let n = S.default.getBasicChannel(t);
  return e === L.StreamTypes.CALL || null != n && p.default.canBasicChannel(C.BasicPermissions.VIEW_CHANNEL, n)
}

function U(e) {
  if (v(e.streamType, e.channelId)) return !0;
  let t = S.default.getBasicChannel(e.channelId);
  return null != t && (0, _.canWatchStream)(t, R.default, T.default, p.default, s.default)[0]
}
class M extends a.default.Store {
  initialize() {
    this.syncWith([p.default], () => !0), this.waitFor(d.default, p.default)
  }
  isSelfStreamHidden(e) {
    var t;
    return null !== (t = h[e]) && void 0 !== t && t
  }
  getLastActiveStream() {
    var e;
    return (0, c.default)(f.default) ? null !== (e = Array.from(r.values()).pop()) && void 0 !== e ? e : null : null
  }
  getAllActiveStreams() {
    return (0, c.default)(f.default) ? Array.from(r.values()) : []
  }
  getAllActiveStreamsForChannel(e) {
    return (0, c.default)(f.default) ? Array.from(r.values()).filter(t => t.channelId === e) : []
  }
  getActiveStreamForStreamKey(e) {
    var t;
    return (0, c.default)(f.default) ? null !== (t = r.get(e)) && void 0 !== t ? t : null : null
  }
  getActiveStreamForApplicationStream(e) {
    var t;
    if (!(0, c.default)(f.default) || null == e) return null;
    let n = (0, E.encodeStreamKey)(e);
    return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
  }
  getCurrentUserActiveStream() {
    let e = A.default.getVoiceChannelId(),
      t = S.default.getChannel(e);
    return null == t ? null : this.getActiveStreamForUser(I.default.getId(), t.getGuildId())
  }
  getActiveStreamForUser(e, t) {
    var n;
    let r = this.getStreamForUser(e, t);
    return null != r ? this.getActiveStreamForApplicationStream(r) : null !== (n = this.getAllActiveStreams().find(t => t.ownerId === e)) && void 0 !== n ? n : null
  }
  getStreamerActiveStreamMetadata() {
    var e;
    let t = A.default.getVoiceChannelId(),
      n = S.default.getChannel(t);
    if (null == n) return null;
    let r = this.getActiveStreamForUser(I.default.getId(), n.getGuildId());
    return null == r ? null : null !== (e = u[(0, E.encodeStreamKey)(r)]) && void 0 !== e ? e : null
  }
  getAnyStreamForUser(e) {
    var t;
    if (!(0, c.default)(f.default)) return null;
    let n = i[e];
    return null == n ? null : null !== (t = Object.values(n).find(e => U(e))) && void 0 !== t ? t : null
  }
  getStreamForUser(e, t) {
    var n;
    if (!(0, c.default)(f.default)) return null;
    let r = null === (n = i[e]) || void 0 === n ? void 0 : n[null != t ? t : C.NULL_STRING_GUILD_ID];
    return null != r && U(r) ? r : null
  }
  getRTCStream(e) {
    var t;
    return (0, c.default)(f.default) ? null !== (t = l[e]) && void 0 !== t ? t : null : null
  }
  getAllApplicationStreams() {
    return (0, c.default)(f.default) ? y().filter(e => null != e && v(e.streamType, e.channelId)) : []
  }
  getAllApplicationStreamsForChannel(e) {
    return (0, c.default)(f.default) ? y().filter(t => null != t && t.channelId === e && v(t.streamType, t.channelId)) : []
  }
  getViewerIds(e) {
    if (!(0, c.default)(f.default)) return [];
    let t = null;
    t = "string" == typeof e ? e : (0, E.encodeStreamKey)(e);
    let n = null != t ? l[t] : null;
    return null != n ? n.viewerIds : []
  }
  getCurrentAppIntent() {
    return P
  }
  getState() {
    return (0, c.default)(f.default) ? {
      activeStreams: Array.from(r.entries()),
      streamsByUserAndGuild: i,
      rtcStreams: l,
      streamerActiveStreamMetadatas: u
    } : {
      activeStreams: [],
      streamsByUserAndGuild: {},
      rtcStreams: {},
      streamerActiveStreamMetadatas: {}
    }
  }
}
M.displayName = "ApplicationStreamingStore";
var G = new M(o.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      applicationStreamState: t
    } = e;
    i = t.streamsByUserAndGuild, r = new Map(t.activeStreams), l = t.rtcStreams, u = t.streamerActiveStreamMetadatas
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let {
        userId: n,
        guildId: r,
        channelId: l,
        sessionId: u,
        selfStream: a
      } = t;
      if (a && null != l) {
        var o, s;
        return null == i[(o = {
          streamType: null != r ? L.StreamTypes.GUILD : L.StreamTypes.CALL,
          ownerId: n,
          guildId: r,
          channelId: l
        }).ownerId] && (i[o.ownerId] = {}), i[o.ownerId][null !== (s = o.guildId) && void 0 !== s ? s : C.NULL_STRING_GUILD_ID] = o, !0
      } {
        let t = I.default.getSessionId();
        return n === I.default.getId() && u !== t && null != N.default.getChannelId() ? e : function(e, t) {
          var n;
          let r = null != t ? t : C.NULL_STRING_GUILD_ID;
          return (null === (n = i[e]) || void 0 === n ? void 0 : n[r]) != null && (delete i[e][r], !0)
        }(n, r) || e
      }
    }, !1)
  },
  STREAM_WATCH: function(e) {
    let {
      streamKey: t
    } = e, n = (0, E.decodeStreamKey)(t);
    r.delete(t), r.set(t, {
      ...n,
      state: C.ApplicationStreamStates.CONNECTING
    }), n.ownerId === I.default.getId() && (h[n.channelId] = !1)
  },
  STREAM_START: function(e) {
    let {
      streamType: t,
      guildId: n,
      channelId: i,
      pid: l,
      sourceName: a
    } = e, o = (0, E.encodeStreamKey)({
      streamType: t,
      guildId: n,
      channelId: i,
      ownerId: I.default.getId()
    }), s = null != l ? d.default.getGameForPID(l) : null;
    u[o] = {
      id: null == s ? void 0 : s.id,
      pid: l,
      sourceName: a
    }, r.delete(o), r.set(o, {
      streamType: t,
      guildId: n,
      channelId: i,
      ownerId: I.default.getId(),
      state: C.ApplicationStreamStates.CONNECTING
    })
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    u[t] = null
  },
  STREAM_CREATE: D,
  STREAM_UPDATE: D,
  STREAM_TIMED_OUT: function(e) {
    let {
      streamKey: t
    } = e, n = r.get(t);
    if (null == n) return !1;
    r.set(t, {
      ...n,
      state: C.ApplicationStreamStates.FAILED
    })
  },
  STREAM_DELETE: function(e) {
    let {
      streamKey: t,
      unavailable: i,
      reason: u
    } = e;
    delete l[t];
    let a = r.get(t);
    if (null == a) return !1;
    let o = C.ApplicationStreamStates.ENDED;
    if (i) o = C.ApplicationStreamStates.RECONNECTING;
    else if (u === C.ApplicationStreamDeleteReasons.UNAUTHORIZED) o = C.ApplicationStreamStates.FAILED;
    else if (u === C.ApplicationStreamDeleteReasons.SAFETY_GUILD_RATE_LIMITED) {
      let {
        guildId: e
      } = (0, E.decodeStreamKey)(t);
      n.el("772545").then(n.bind(n, "772545")).then(t => {
        let {
          default: n
        } = t;
        n(e)
      }), o = C.ApplicationStreamStates.ENDED
    }
    r.set(t, {
      ...a,
      state: o
    }), o === C.ApplicationStreamStates.ENDED && O !== t && m(t)
  },
  STREAM_CLOSE: function(e) {
    let {
      streamKey: t
    } = e;
    m(t)
  },
  STREAM_UPDATE_SELF_HIDDEN: function(e) {
    let {
      channelId: t,
      selfStreamHidden: n
    } = e, r = (0, E.isStreamKey)(O);
    r && (null == O ? void 0 : O.includes(I.default.getId())) && !1 === h[t] && !0 === n && (O = null), h[t] = n
  },
  SET_STREAM_APP_INTENT: function(e) {
    let {
      intent: t
    } = e;
    P = t
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      streamKey: t,
      state: n
    } = e;
    if (null == t) return !1;
    let i = r.get(t);
    if (null == i || i.state === C.ApplicationStreamStates.ENDED) return !1;
    let l = i.state;
    switch (n) {
      case C.RTCConnectionStates.DISCONNECTED:
        l = C.ApplicationStreamStates.RECONNECTING;
        break;
      case C.RTCConnectionStates.RTC_CONNECTED:
        l = C.ApplicationStreamStates.ACTIVE
    }
    if (l === i.state) return !1;
    r.set(t, {
      ...i,
      state: l
    })
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
    let {
      id: t,
      channelId: n
    } = e;
    if (O = t, Array.from(r.values()).forEach(e => {
        (0, E.encodeStreamKey)(e) !== O && e.state === C.ApplicationStreamStates.ENDED && m((0, E.encodeStreamKey)(e))
      }), null == t) return;
    let i = (0, E.isStreamKey)(t);
    i && t.includes(I.default.getId()) && (h[n] = !1)
  },
  CONNECTION_OPEN: g,
  CONNECTION_CLOSED: g,
  LOGOUT: g
})