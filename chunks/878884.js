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
let p = [],
  E = [];
class C {
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
    let t = this.data.delete(e);
    return t && this.version++, t
  }
  clear() {
    0 !== this.data.size && (this.data.clear(), this.version++)
  }
  constructor() {
    m(this, "version", 0), m(this, "data", new Map), m(this, "cachedValues", void 0), this.cachedValues = (0, r.cachedFunction)(e => Array.from(this.data.values()))
  }
}
let g = new C,
  S = new C,
  _ = null;

function T(e) {
  let t = g.delete(e),
    n = S.delete(e);
  return t || n
}
class I extends(a = l.default.Store) {
  initialize() {
    this.waitFor(d.default, u.default)
  }
  get desyncedVoiceStatesCount() {
    return g.size()
  }
  getDesyncedVoiceStates(e) {
    return e !== _ ? p : g.values()
  }
  getDesyncedParticipants(e) {
    return e !== _ ? E : S.values()
  }
}
m(I, "displayName", "RTCConnectionDesyncStore"), t.default = new I(s.default, {
  CONNECTION_OPEN: function() {
    g.clear(), S.clear()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      state: t,
      channelId: n
    } = e;
    if (t !== f.RTCConnectionStates.DISCONNECTED && _ === n) return !1;
    _ = n, g.clear(), S.clear()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return null != _ && t.reduce((e, t) => {
      let {
        userId: n,
        channelId: a
      } = t;
      return null != a && a === _ && !!T(n) || e
    }, !1)
  },
  RTC_CONNECTION_FLAGS: function(e) {
    let {
      userId: t,
      guildId: n,
      channelId: a
    } = e, l = d.default.getVoiceStateForUser(t);
    if ((null == l ? void 0 : l.channelId) === a && a === _) return !1;
    let s = u.default.getUser(t);
    if (null == s) return !1;
    let r = new i.default({
        userId: t,
        channelId: a
      }),
      m = (0, c.makeSortedVoiceState)(r, null != n ? n : f.ME, t);
    g.set(t, m);
    let p = {
      type: h.ParticipantTypes.USER,
      user: s,
      id: s.id,
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
      userNick: o.default.getName(n, a, s),
      localVideoDisabled: !1
    };
    S.set(t, p)
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
    let {
      userId: t
    } = e;
    return T(t)
  }
})