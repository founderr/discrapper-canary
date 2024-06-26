"use strict";
let i, r;
n(47120), n(724458);
var s, o, a, l, u = n(392711),
  _ = n.n(u),
  c = n(442837),
  d = n(570140),
  E = n(189786),
  I = n(981631),
  T = n(354459);
let h = 0,
  f = 0,
  S = {},
  N = new Set,
  A = new Map,
  m = {},
  O = {},
  p = {},
  R = {};

function g(e, t) {
  return "".concat(e, ":").concat(t)
}

function C(e, t) {
  let n = e[t];
  return null == n && (n = {}, e[t] = n), n
}

function v(e) {
  var t;
  let n = null !== (t = S[I.ME]) && void 0 !== t ? t : {},
    i = {};
  _().each(n, (t, n) => {
    t.channelId !== e && (i[n] = t)
  }), S[I.ME] = i
}

function L(e) {
  var t;
  return null !== (t = A.get(e)) && void 0 !== t ? t : new Set
}

function D(e, t, n) {
  let i = C(S, null != e ? e : I.ME),
    r = i[t],
    s = n(r);
  return r === s ? [!1, s, r] : (null != r && (delete i[t], null != r.channelId && (delete C(m, r.channelId)[t], delete C(O, r.channelId)[t]), null != r.sessionId && delete C(p, t)[r.sessionId], ! function(e, t) {
    let n = L(e);
    if (!!n.has(t))(n = new Set(n)).delete(t), 0 === n.size ? A.delete(e) : A.set(e, n)
  }(null != e ? e : I.ME, t)), null != s && (i[t] = s, null != s.channelId && (C(m, s.channelId)[t] = s, s.selfVideo && (C(O, s.channelId)[t] = s, ! function(e, t) {
    let n = L(e);
    if (!n.has(t))(n = new Set(n)).add(t), A.set(e, n)
  }(null != e ? e : I.ME, t))), null != s.sessionId && (C(p, t)[s.sessionId] = s)), [!0, s, r])
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
      return null != e ? e.merge(n) : new E.Z(n)
    }
  })
}

function P(e) {
  let {
    guild: t
  } = e;
  _().forEach(S[t.id], e => {
    D(t.id, e.userId, () => null)
  }), delete S[t.id]
}
class y extends(s = c.ZP.Store) {
  getAllVoiceStates() {
    return S
  }
  getVoiceStateVersion() {
    return f
  }
  getVoiceStates(e) {
    return C(S, null != e ? e : I.ME)
  }
  getVoiceStatesForChannel(e) {
    return C(m, e)
  }
  getVideoVoiceStatesForChannel(e) {
    return C(O, e)
  }
  getVoiceState(e, t) {
    return this.getVoiceStates(e)[t]
  }
  getVoiceStateForChannel(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return null === (t = C(m, e)) || void 0 === t ? void 0 : t[n]
  }
  getVoiceStateForUser(e) {
    return Object.values(C(p, e))[0]
  }
  getVoiceStateForSession(e, t) {
    var n;
    return null != t ? null === (n = C(p, e)) || void 0 === n ? void 0 : n[t] : null
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
    return null !== (t = A.get(e)) && void 0 !== t ? t : N
  }
  isCurrentClientInVoiceChannel() {
    var e;
    return null != r && (null === (e = p[i]) || void 0 === e ? void 0 : e[r]) != null
  }
  isInChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    if (null == e) return !1;
    let n = this.getVoiceStateForChannel(e, t);
    return null != n && (t !== i || null != r && n.sessionId === r)
  }
  hasVideo(e) {
    return Object.values(C(O, e)).length > 0
  }
  getVoicePlatformForChannel(e, t) {
    var n, s;
    let o = null != r && (null === (s = p[i]) || void 0 === s ? void 0 : null === (n = s[r]) || void 0 === n ? void 0 : n.channelId);
    return t === i && e === o ? T.wR.DESKTOP : R[g(t, e)]
  }
  get userHasBeenMovedVersion() {
    return h
  }
}
l = "VoiceStateStore", (a = "displayName") in(o = y) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new y(d.Z, {
  CONNECTION_OPEN: function(e) {
    let {
      user: t,
      sessionId: n
    } = e, s = null != i && i !== t.id;
    return s && (S = {}, m = {}, p = {}, O = {}, A.clear()), i = t.id, r = n, s
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function() {
    S = {}, m = {}, p = {}, O = {}, A.clear()
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      voiceStates: t,
      user: n,
      sessionId: s
    } = e;
    for (let [e, n] of(S = {}, m = {}, p = {}, O = {}, Object.entries(t)))
      for (let [t, i] of Object.entries(n)) D(e, t, () => new E.Z(i));
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
      return n ? (t.sessionId === r && null != i && null != s && s.channelId !== i.channelId && (h += 1), f++, !0) : e
    }, !1)
  },
  GUILD_DELETE: P,
  GUILD_CREATE: P,
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    v(t.id)
  },
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    v(t)
  },
  PASSIVE_UPDATE_V2: function(e) {
    let t = !1;
    for (let n of e.voiceStates) {
      let [i] = M(e.guildId, n);
      t = t || i
    }
    for (let n of e.removedVoiceStateUsers) D(e.guildId, n, () => null), t = !0;
    return t && f++, t
  },
  RTC_CONNECTION_PLATFORM: function(e) {
    let {
      userId: t,
      channelId: n,
      platform: i
    } = e;
    R[g(t, n)] = i
  }
})