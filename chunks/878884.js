"use strict";
n.r(t), n("47120"), n("724458");
var a, l, s, i, r = n("442837"),
  o = n("570140"),
  u = n("189786"),
  d = n("5192"),
  c = n("594174"),
  f = n("979651"),
  h = n("938475"),
  m = n("981631"),
  p = n("354459");
let E = null,
  C = new Map,
  g = new Map;
class S extends(a = r.default.Store) {
  initialize() {
    this.waitFor(f.default, c.default)
  }
  get desyncedVoiceStatesCount() {
    return C.size
  }
  get desyncedVoiceStates() {
    return Array.from(C.values())
  }
  get desyncedParticipants() {
    return Array.from(g.values())
  }
}
i = "RTCConnectionDesyncStore", (s = "displayName") in(l = S) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new S(o.default, {
  CONNECTION_OPEN: function() {
    C = new Map, g = new Map
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      state: t,
      channelId: n
    } = e;
    if (t !== m.RTCConnectionStates.DISCONNECTED && E === n) return !1;
    E = n, C = new Map, g = new Map
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let {
        userId: n,
        channelId: a
      } = t;
      return null != a && a === E ? (C.delete(n), !0) : e
    }, !1)
  },
  RTC_CONNECTION_FLAGS: function(e) {
    let {
      userId: t,
      guildId: n,
      channelId: a
    } = e, l = f.default.getVoiceStateForUser(t);
    if ((null == l ? void 0 : l.channelId) === a && a === E) return !1;
    let s = new u.default({
        userId: t,
        channelId: a
      }),
      i = (0, h.makeSortedVoiceState)(s, null != n ? n : m.ME, t);
    C.set(t, i);
    let r = c.default.getUser(t);
    if (null == r) return;
    let o = {
      type: p.ParticipantTypes.USER,
      user: r,
      id: r.id,
      streamId: null,
      voiceState: new u.default({
        userId: t,
        channelId: a
      }),
      voicePlatform: null,
      speaking: !1,
      lastSpoke: 0,
      soundsharing: !1,
      ringing: !1,
      userNick: d.default.getName(n, a, r),
      localVideoDisabled: !1
    };
    g.set(t, o)
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
    let {
      userId: t
    } = e;
    C.delete(t)
  }
})