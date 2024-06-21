"use strict";
let i, r, s, o;
n(47120), n(653041), n(724458);
var a, l, u, _, c = n(442837),
  d = n(570140),
  E = n(258609),
  I = n(594190),
  T = n(569545),
  h = n(382182),
  S = n(139656),
  f = n(855403),
  N = n(314897),
  A = n(592125),
  m = n(430824),
  O = n(131951),
  R = n(496675),
  p = n(19780),
  g = n(944486),
  C = n(979651),
  v = n(981631),
  L = n(70722);
let D = null,
  M = {},
  P = null;

function y() {
  i = new Map, r = {}, s = {}, o = {}, M = {}
}
y();

function U(e) {
  i.delete(e)
}

function b() {
  let e = [];
  for (let t in r) {
    let n = r[t];
    for (let i in n) e.push(r[t][i])
  }
  return e
}

function G(e) {
  let {
    streamKey: t,
    region: n,
    viewerIds: r,
    paused: o
  } = e;
  i.set(t, {
    ...(0, T.my)(t),
    state: o ? v.jm8.PAUSED : v.jm8.ACTIVE
  }), s[t] = {
    streamKey: t,
    region: n,
    viewerIds: r
  }
}

function w(e, t) {
  let n = A.Z.getBasicChannel(t);
  return e === L.lo.CALL || null != n && R.Z.canBasicChannel(v.S7T.VIEW_CHANNEL, n)
}

function B(e) {
  if (w(e.streamType, e.channelId)) return !0;
  let t = A.Z.getBasicChannel(e.channelId);
  return null != t && (0, h.p9)(t, C.Z, m.Z, R.Z, E.Z)[0]
}
class k extends(a = c.ZP.Store) {
  initialize() {
    this.syncWith([R.Z], () => !0), this.waitFor(I.ZP, R.Z)
  }
  isSelfStreamHidden(e) {
    var t;
    return null !== (t = M[e]) && void 0 !== t && t
  }
  getLastActiveStream() {
    var e;
    return (0, S.Z)(O.Z) ? null !== (e = Array.from(i.values()).pop()) && void 0 !== e ? e : null : null
  }
  getAllActiveStreams() {
    return (0, S.Z)(O.Z) ? Array.from(i.values()) : []
  }
  getAllActiveStreamsForChannel(e) {
    return (0, S.Z)(O.Z) ? Array.from(i.values()).filter(t => t.channelId === e) : []
  }
  getActiveStreamForStreamKey(e) {
    var t;
    return (0, S.Z)(O.Z) ? null !== (t = i.get(e)) && void 0 !== t ? t : null : null
  }
  getActiveStreamForApplicationStream(e) {
    var t;
    if (!(0, S.Z)(O.Z) || null == e) return null;
    let n = (0, T.V9)(e);
    return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
  }
  getCurrentUserActiveStream() {
    let e = g.Z.getVoiceChannelId(),
      t = A.Z.getChannel(e);
    return null == t ? null : this.getActiveStreamForUser(N.default.getId(), t.getGuildId())
  }
  getActiveStreamForUser(e, t) {
    var n;
    let i = this.getStreamForUser(e, t);
    return null != i ? this.getActiveStreamForApplicationStream(i) : null !== (n = this.getAllActiveStreams().find(t => t.ownerId === e)) && void 0 !== n ? n : null
  }
  getStreamerActiveStreamMetadata() {
    var e;
    let t = g.Z.getVoiceChannelId(),
      n = A.Z.getChannel(t);
    if (null == n) return null;
    let i = this.getActiveStreamForUser(N.default.getId(), n.getGuildId());
    return null == i ? null : null !== (e = o[(0, T.V9)(i)]) && void 0 !== e ? e : null
  }
  getStreamerActiveStreamMetadataForStream(e) {
    var t;
    return null !== (t = o[e]) && void 0 !== t ? t : null
  }
  getAnyStreamForUser(e) {
    var t;
    if (!(0, S.Z)(O.Z)) return null;
    let n = r[e];
    return null == n ? null : null !== (t = Object.values(n).find(e => B(e))) && void 0 !== t ? t : null
  }
  getStreamForUser(e, t) {
    var n;
    if (!(0, S.Z)(O.Z)) return null;
    let i = null === (n = r[e]) || void 0 === n ? void 0 : n[null != t ? t : v.kod];
    return null != i && B(i) ? i : null
  }
  getRTCStream(e) {
    var t;
    return (0, S.Z)(O.Z) ? null !== (t = s[e]) && void 0 !== t ? t : null : null
  }
  getAllApplicationStreams() {
    return (0, S.Z)(O.Z) ? b().filter(e => null != e && w(e.streamType, e.channelId)) : []
  }
  getAllApplicationStreamsForChannel(e) {
    return (0, S.Z)(O.Z) ? b().filter(t => null != t && t.channelId === e && w(t.streamType, t.channelId)) : []
  }
  getViewerIds(e) {
    if (!(0, S.Z)(O.Z)) return [];
    let t = null,
      n = null != (t = "string" == typeof e ? e : (0, T.V9)(e)) ? s[t] : null;
    return null != n ? n.viewerIds : []
  }
  getCurrentAppIntent() {
    return P
  }
  getState() {
    return (0, S.Z)(O.Z) ? {
      activeStreams: Array.from(i.entries()),
      streamsByUserAndGuild: r,
      rtcStreams: s,
      streamerActiveStreamMetadatas: o
    } : {
      activeStreams: [],
      streamsByUserAndGuild: {},
      rtcStreams: {},
      streamerActiveStreamMetadatas: {}
    }
  }
}
_ = "ApplicationStreamingStore", (u = "displayName") in(l = k) ? Object.defineProperty(l, u, {
  value: _,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[u] = _, t.Z = new k(d.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      applicationStreamState: t
    } = e;
    r = t.streamsByUserAndGuild, i = new Map(t.activeStreams), s = t.rtcStreams, o = t.streamerActiveStreamMetadatas
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let {
        userId: n,
        guildId: i,
        channelId: s,
        sessionId: o,
        selfStream: a
      } = t;
      if (a && null != s) {
        var l, u;
        return null == r[(l = {
          streamType: null != i ? L.lo.GUILD : L.lo.CALL,
          ownerId: n,
          guildId: i,
          channelId: s
        }).ownerId] && (r[l.ownerId] = {}), r[l.ownerId][null !== (u = l.guildId) && void 0 !== u ? u : v.kod] = l, !0
      } {
        let t = N.default.getSessionId();
        return n === N.default.getId() && o !== t && null != p.Z.getChannelId() ? e : function(e, t) {
          var n;
          let i = null != t ? t : v.kod;
          return (null === (n = r[e]) || void 0 === n ? void 0 : n[i]) != null && (delete r[e][i], !0)
        }(n, i) || e
      }
    }, !1)
  },
  STREAM_WATCH: function(e) {
    let {
      streamKey: t
    } = e, n = (0, T.my)(t);
    i.delete(t), i.set(t, {
      ...n,
      state: v.jm8.CONNECTING
    }), n.ownerId === N.default.getId() && (M[n.channelId] = !1)
  },
  STREAM_START: function(e) {
    var t;
    let {
      streamType: n,
      guildId: r,
      channelId: s,
      pid: a,
      sourceName: l,
      sourceId: u
    } = e, _ = (0, T.V9)({
      streamType: n,
      guildId: r,
      channelId: s,
      ownerId: N.default.getId()
    }), c = null !== (t = null != a ? I.ZP.getGameForPID(a) : null != u ? I.ZP.getRunningGames().find(e => (0, f.Z)(u, e.windowHandle)) : null) && void 0 !== t ? t : null;
    o[_] = {
      id: null == c ? void 0 : c.id,
      pid: a,
      sourceName: l
    }, i.delete(_), i.set(_, {
      streamType: n,
      guildId: r,
      channelId: s,
      ownerId: N.default.getId(),
      state: v.jm8.CONNECTING
    })
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    o[t] = null
  },
  STREAM_CREATE: G,
  STREAM_UPDATE: G,
  STREAM_TIMED_OUT: function(e) {
    let {
      streamKey: t
    } = e, n = i.get(t);
    if (null == n) return !1;
    i.set(t, {
      ...n,
      state: v.jm8.FAILED
    })
  },
  STREAM_DELETE: function(e) {
    let {
      streamKey: t,
      unavailable: r,
      reason: o
    } = e;
    delete s[t];
    let a = i.get(t);
    if (null == a) return !1;
    let l = v.jm8.ENDED;
    if (r) l = v.jm8.RECONNECTING;
    else if (o === v.si2.UNAUTHORIZED) l = v.jm8.FAILED;
    else if (o === v.si2.SAFETY_GUILD_RATE_LIMITED) {
      let {
        guildId: e
      } = (0, T.my)(t);
      n.e("76731").then(n.bind(n, 626892)).then(t => {
        let {
          default: n
        } = t;
        n(e)
      }), l = v.jm8.ENDED
    }
    i.set(t, {
      ...a,
      state: l
    }), l === v.jm8.ENDED && D !== t && U(t)
  },
  STREAM_CLOSE: function(e) {
    let {
      streamKey: t
    } = e;
    U(t)
  },
  STREAM_UPDATE_SELF_HIDDEN: function(e) {
    let {
      channelId: t,
      selfStreamHidden: n
    } = e;
    (0, T.DB)(D) && (null == D ? void 0 : D.includes(N.default.getId())) && !1 === M[t] && !0 === n && (D = null), M[t] = n
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
    let r = i.get(t);
    if (null == r || r.state === v.jm8.ENDED) return !1;
    let s = r.state;
    switch (n) {
      case v.hes.DISCONNECTED:
        s = v.jm8.RECONNECTING;
        break;
      case v.hes.RTC_CONNECTED:
        s = v.jm8.ACTIVE
    }
    if (s === r.state) return !1;
    i.set(t, {
      ...r,
      state: s
    })
  },
  CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
    let {
      id: t,
      channelId: n
    } = e;
    if (D = t, Array.from(i.values()).forEach(e => {
        (0, T.V9)(e) !== D && e.state === v.jm8.ENDED && U((0, T.V9)(e))
      }), null != t)(0, T.DB)(t) && t.includes(N.default.getId()) && (M[n] = !1)
  },
  CONNECTION_OPEN: y,
  CONNECTION_CLOSED: y,
  LOGOUT: y
})