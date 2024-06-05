"use strict";
n.r(t), n("47120"), n("724458");
var a, l = n("442837"),
  s = n("570140"),
  i = n("189786"),
  r = n("251625"),
  o = n("5192"),
  u = n("594174"),
  d = n("979651"),
  c = n("938475"),
  f = n("981631"),
  h = n("354459");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p {
  values() {
    return this.cachedValues(this.version)
  }
  size() {
    return this.data.size
  }
  set(e, t) {
    this.data.get(e) !== t && (this.data.set(e, t), this.version++)
  }
  delete(e) {
    this.data.delete(e) && this.version++
  }
  clear() {
    0 !== this.data.size && (this.data.clear(), this.version++)
  }
  constructor() {
    m(this, "version", 0), m(this, "data", new Map), m(this, "cachedValues", void 0), this.cachedValues = (0, r.cachedFunction)(e => Array.from(this.data.values()))
  }
}
let E = new p,
  C = new p,
  g = null;
class S extends(a = l.default.Store) {
  initialize() {
    this.waitFor(d.default, u.default)
  }
  get desyncedVoiceStatesCount() {
    return E.size()
  }
  get desyncedVoiceStates() {
    return E.values()
  }
  get desyncedParticipants() {
    return C.values()
  }
}
m(S, "displayName", "RTCConnectionDesyncStore"), t.default = new S(s.default, {
  CONNECTION_OPEN: function() {
    E.clear(), C.clear()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      state: t,
      channelId: n
    } = e;
    if (t !== f.RTCConnectionStates.DISCONNECTED && g === n) return !1;
    g = n, E.clear(), C.clear()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return null != g && t.reduce((e, t) => {
      let {
        userId: n,
        channelId: a
      } = t;
      return null != a && a === g ? (E.delete(n), C.delete(n), !0) : e
    }, !1)
  },
  RTC_CONNECTION_FLAGS: function(e) {
    let {
      userId: t,
      guildId: n,
      channelId: a
    } = e, l = d.default.getVoiceStateForUser(t);
    if ((null == l ? void 0 : l.channelId) === a && a === g) return !1;
    let s = new i.default({
        userId: t,
        channelId: a
      }),
      r = (0, c.makeSortedVoiceState)(s, null != n ? n : f.ME, t);
    E.set(t, r);
    let m = u.default.getUser(t);
    if (null == m) return;
    let p = {
      type: h.ParticipantTypes.USER,
      user: m,
      id: m.id,
      streamId: null,
      voiceState: new i.default({
        userId: t,
        channelId: a
      }),
      voicePlatform: null,
      speaking: !1,
      lastSpoke: 0,
      soundsharing: !1,
      ringing: !1,
      userNick: o.default.getName(n, a, m),
      localVideoDisabled: !1
    };
    C.set(t, p)
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
    let {
      userId: t
    } = e;
    E.delete(t)
  }
})