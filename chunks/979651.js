"use strict";
let i, r;
n.r(t), n("47120"), n("724458");
var s, a, o, l, u = n("392711"),
  d = n.n(u),
  _ = n("442837"),
  c = n("570140"),
  E = n("189786"),
  I = n("981631"),
  T = n("354459");
let f = 0,
  S = 0,
  h = {},
  A = new Set,
  m = new Map,
  N = {},
  p = {},
  O = {},
  C = {};

function R(e, t) {
  return "".concat(e, ":").concat(t)
}

function g(e, t) {
  let n = e[t];
  return null == n && (n = {}, e[t] = n), n
}

function L(e) {
  var t;
  let n = null !== (t = h[I.ME]) && void 0 !== t ? t : {},
    i = {};
  d().each(n, (t, n) => {
    t.channelId !== e && (i[n] = t)
  }), h[I.ME] = i
}

function v(e) {
  var t;
  return null !== (t = m.get(e)) && void 0 !== t ? t : new Set
}

function D(e, t, n) {
  var i, r, s, a;
  let o = g(h, null != e ? e : I.ME),
    l = o[t],
    u = n(l);
  if (l === u) return [!1, u, l];
  if (null != l) {
    ;
    let n;
    delete o[t], null != l.channelId && (delete g(N, l.channelId)[t], delete g(p, l.channelId)[t]), null != l.sessionId && delete g(O, t)[l.sessionId];
    i = null != e ? e : I.ME, r = t, !(n = v(i)).has(r) || ((n = new Set(n)).delete(r), 0 === n.size ? m.delete(i) : m.set(i, n))
  }
  if (null != u) {
    if (o[t] = u, null != u.channelId && (g(N, u.channelId)[t] = u, u.selfVideo)) {
      ;
      let n;
      g(p, u.channelId)[t] = u;
      s = null != e ? e : I.ME, a = t, (n = v(s)).has(a) || ((n = new Set(n)).add(a), m.set(s, n))
    }
    null != u.sessionId && (g(O, t)[u.sessionId] = u)
  }
  return [!0, u, l]
}

function M(e, t) {
  return D(e, t.userId, e => {
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
      return null != e ? e.merge(n) : new E.default(n)
    }
  })
}

function y(e) {
  let {
    guild: t
  } = e;
  d().forEach(h[t.id], e => {
    D(t.id, e.userId, () => null)
  }), delete h[t.id]
}
class P extends(s = _.default.Store) {
  getAllVoiceStates() {
    return h
  }
  getVoiceStateVersion() {
    return S
  }
  getVoiceStates(e) {
    return g(h, null != e ? e : I.ME)
  }
  getVoiceStatesForChannel(e) {
    return g(N, e)
  }
  getVideoVoiceStatesForChannel(e) {
    return g(p, e)
  }
  getVoiceState(e, t) {
    return this.getVoiceStates(e)[t]
  }
  getVoiceStateForChannel(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return null === (t = g(N, e)) || void 0 === t ? void 0 : t[n]
  }
  getVoiceStateForUser(e) {
    return Object.values(g(O, e))[0]
  }
  getVoiceStateForSession(e, t) {
    var n;
    return null != t ? null === (n = g(O, e)) || void 0 === n ? void 0 : n[t] : null
  }
  getUserVoiceChannelId(e, t) {
    var n;
    return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId
  }
  getCurrentClientVoiceChannelId(e) {
    let t = this.getVoiceState(e, i);
    return null != t && null != r && t.sessionId === r ? t.channelId : null
  }
  getUsersWithVideo(e) {
    var t;
    return null !== (t = m.get(e)) && void 0 !== t ? t : A
  }
  isCurrentClientInVoiceChannel() {
    var e;
    return null != r && (null === (e = O[i]) || void 0 === e ? void 0 : e[r]) != null
  }
  isInChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    if (null == e) return !1;
    let n = this.getVoiceStateForChannel(e, t);
    return null != n && (t !== i || null != r && n.sessionId === r)
  }
  hasVideo(e) {
    return Object.values(g(p, e)).length > 0
  }
  getVoicePlatformForChannel(e, t) {
    var n, s;
    let a = null != r && (null === (s = O[i]) || void 0 === s ? void 0 : null === (n = s[r]) || void 0 === n ? void 0 : n.channelId);
    return t === i && e === a ? T.VoicePlatforms.DESKTOP : C[R(t, e)]
  }
  get userHasBeenMovedVersion() {
    return f
  }
}
l = "VoiceStateStore", (o = "displayName") in(a = P) ? Object.defineProperty(a, o, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[o] = l, t.default = new P(c.default, {
  CONNECTION_OPEN: function(e) {
    let {
      user: t,
      sessionId: n
    } = e, s = null != i && i !== t.id;
    return s && (h = {}, N = {}, O = {}, p = {}, m.clear()), i = t.id, r = n, s
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function() {
    h = {}, N = {}, O = {}, p = {}, m.clear()
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      voiceStates: t,
      user: n,
      sessionId: s
    } = e;
    for (let [e, n] of(h = {}, N = {}, O = {}, p = {}, Object.entries(t)))
      for (let [t, i] of Object.entries(n)) D(e, t, () => new E.default(i));
    i = n.id, r = s
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e, [r] = D(t, i, e => null == e ? void 0 : e.set("channelId", n));
    return r
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let [n, i, s] = M(t.guildId, t);
      return n ? (t.sessionId === r && null != i && null != s && s.channelId !== i.channelId && (f += 1), S++, !0) : e
    }, !1)
  },
  GUILD_DELETE: y,
  GUILD_CREATE: y,
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    L(t.id)
  },
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    L(t)
  },
  PASSIVE_UPDATE_V2: function(e) {
    let t = !1;
    for (let n of e.voiceStates) {
      let [i] = M(e.guildId, n);
      t = t || i
    }
    for (let n of e.removedVoiceStateUsers) D(e.guildId, n, () => null), t = !0;
    return t && S++, t
  },
  RTC_CONNECTION_PLATFORM: function(e) {
    let {
      userId: t,
      channelId: n,
      platform: i
    } = e;
    C[R(t, n)] = i
  }
})