"use strict";
let i, s;
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("808653"), n("222007");
var r = n("917351"),
  a = n.n(r),
  o = n("446674"),
  l = n("913144"),
  u = n("628454"),
  d = n("49111"),
  c = n("99795");
let f = 0,
  _ = 0,
  h = {},
  g = {},
  m = {},
  E = {},
  p = {};

function v(e, t) {
  return "".concat(e, ":").concat(t)
}

function S(e, t) {
  let n = e[t];
  return null == n && (n = {}, e[t] = n), n
}

function T(e) {
  var t;
  let n = null !== (t = h[d.ME]) && void 0 !== t ? t : {},
    i = {};
  a.each(n, (t, n) => {
    t.channelId !== e && (i[n] = t)
  }), h[d.ME] = i
}

function I(e, t, n) {
  let i = S(h, null != e ? e : d.ME),
    s = i[t],
    r = n(s);
  return s === r ? [!1, r, s] : (null != s && (delete i[t], null != s.channelId && (delete S(g, s.channelId)[t], delete S(m, s.channelId)[t]), null != s.sessionId && delete S(E, t)[s.sessionId]), null != r && (i[t] = r, null != r.channelId && (S(g, r.channelId)[t] = r, r.selfVideo && (S(m, r.channelId)[t] = r)), null != r.sessionId && (S(E, t)[r.sessionId] = r)), [!0, r, s])
}

function C(e, t) {
  return I(e, t.userId, e => {
    if (null == t.channelId) return null;
    {
      let n = {
        channelId: t.channelId,
        deaf: t.deaf,
        mute: t.mute,
        requestToSpeakTimestamp: t.requestToSpeakTimestamp,
        selfDeaf: t.selfDeaf,
        selfMute: t.selfMute,
        selfStream: t.selfStream,
        selfVideo: t.selfVideo,
        sessionId: t.sessionId,
        suppress: t.suppress,
        userId: t.userId
      };
      return null != e ? e.merge(n) : new u.default(n)
    }
  })
}

function A(e) {
  let {
    guild: t
  } = e;
  a.forEach(h[t.id], e => {
    I(t.id, e.userId, () => null)
  }), delete h[t.id]
}
class y extends o.default.Store {
  getAllVoiceStates() {
    return h
  }
  getVoiceStateVersion() {
    return _
  }
  getVoiceStates(e) {
    return S(h, null != e ? e : d.ME)
  }
  getVoiceStatesForChannel(e) {
    return S(g, e)
  }
  getVideoVoiceStatesForChannel(e) {
    return S(m, e)
  }
  getVoiceState(e, t) {
    return this.getVoiceStates(e)[t]
  }
  getVoiceStateForChannel(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return null === (t = S(g, e)) || void 0 === t ? void 0 : t[n]
  }
  getVoiceStateForUser(e) {
    return Object.values(S(E, e))[0]
  }
  getVoiceStateForSession(e, t) {
    var n;
    return null != t ? null === (n = S(E, e)) || void 0 === n ? void 0 : n[t] : null
  }
  getUserVoiceChannelId(e, t) {
    var n;
    return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId
  }
  getCurrentClientVoiceChannelId(e) {
    let t = this.getVoiceState(e, i);
    return null != t && null != s && t.sessionId === s ? t.channelId : null
  }
  isCurrentClientInVoiceChannel() {
    var e;
    return null != s && (null === (e = E[i]) || void 0 === e ? void 0 : e[s]) != null
  }
  isInChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    if (null == e) return !1;
    let n = this.getVoiceStateForChannel(e, t);
    return null != n && (t !== i || null != s && n.sessionId === s)
  }
  hasVideo(e) {
    return Object.values(S(m, e)).length > 0
  }
  getVoicePlatformForChannel(e, t) {
    var n, r;
    let a = null != s && (null === (r = E[i]) || void 0 === r ? void 0 : null === (n = r[s]) || void 0 === n ? void 0 : n.channelId);
    return t === i && e === a ? c.VoicePlatforms.DESKTOP : p[v(t, e)]
  }
  get userHasBeenMovedVersion() {
    return f
  }
}
y.displayName = "VoiceStateStore";
var N = new y(l.default, {
  CONNECTION_OPEN: function(e) {
    let {
      user: t,
      sessionId: n
    } = e;
    h = {}, g = {}, E = {}, m = {}, i = t.id, s = n
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      voiceStates: t,
      user: n,
      sessionId: r
    } = e;
    for (let [e, n] of(h = {}, g = {}, E = {}, m = {}, Object.entries(t)))
      for (let [t, i] of Object.entries(n)) I(e, t, () => new u.default(i));
    i = n.id, s = r
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e, [s] = I(t, i, e => null == e ? void 0 : e.set("channelId", n));
    return s
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let [n, i, r] = C(t.guildId, t);
      return n ? (t.sessionId === s && null != i && null != r && r.channelId !== i.channelId && (f += 1), _++, !0) : e
    }, !1)
  },
  GUILD_DELETE: A,
  GUILD_CREATE: A,
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    T(t.id)
  },
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    T(t)
  },
  PASSIVE_UPDATE_V1: function(e) {
    var t, n;
    let i = !1,
      s = Object.keys(null !== (t = h[e.guildId]) && void 0 !== t ? t : {}),
      r = new Set(s);
    for (let t of null !== (n = e.voiceStates) && void 0 !== n ? n : []) {
      let [n] = C(e.guildId, t);
      i = i || n, r.delete(t.userId)
    }
    for (let t of r) I(e.guildId, t, () => null), i = !0;
    return i && _++, i
  },
  RTC_CONNECTION_PLATFORM: function(e) {
    let {
      userId: t,
      channelId: n,
      platform: i
    } = e;
    p[v(t, n)] = i
  }
})