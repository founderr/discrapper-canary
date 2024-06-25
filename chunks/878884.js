n(724458), n(47120);
var l, i, s, a, r = n(442837),
  o = n(570140),
  c = n(642047),
  u = n(189786),
  d = n(5192),
  h = n(594174),
  m = n(979651),
  E = n(938475),
  p = n(981631),
  g = n(354459);
let f = [],
  C = [],
  _ = [],
  I = new c.Z,
  x = new c.Z,
  T = null;

function N(e) {
  let t = I.delete(e),
    n = x.delete(e);
  return t || n
}
class Z extends(l = r.ZP.Store) {
  initialize() {
    this.waitFor(m.Z, h.default)
  }
  get desyncedVoiceStatesCount() {
    return I.size()
  }
  getDesyncedUserIds(e) {
    return e !== T ? _ : I.keys()
  }
  getDesyncedVoiceStates(e) {
    return e !== T ? f : I.values()
  }
  getDesyncedParticipants(e) {
    return e !== T ? C : x.values()
  }
}
a = "RTCConnectionDesyncStore", (s = "displayName") in(i = Z) ? Object.defineProperty(i, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = a, t.Z = new Z(o.Z, {
  CONNECTION_OPEN: function() {
    I.clear(), x.clear()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      state: t,
      channelId: n
    } = e;
    if (t !== p.hes.DISCONNECTED && T === n) return !1;
    T = n, I.clear(), x.clear()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return null != T && t.reduce((e, t) => {
      let {
        userId: n,
        channelId: l
      } = t;
      return null != l && l === T && !!N(n) || e
    }, !1)
  },
  RTC_CONNECTION_CLIENT_CONNECT: function(e) {
    let {
      userIds: t,
      guildId: n,
      channelId: l
    } = e;
    return t.reduce((e, t) => {
      let i = m.Z.getVoiceStateForUser(t);
      if ((null == i ? void 0 : i.channelId) === l && l === T) return e;
      let s = h.default.getUser(t);
      if (null == s) return e;
      let a = new u.Z({
          userId: t,
          channelId: l
        }),
        r = (0, E.PH)(a, null != n ? n : p.ME, t);
      I.set(t, r);
      let o = {
        type: g.fO.USER,
        user: s,
        id: s.id,
        streamId: null,
        voiceState: new u.Z({
          userId: t,
          channelId: l
        }),
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: d.ZP.getName(n, l, s),
        localVideoDisabled: !1
      };
      return x.set(t, o), !0
    }, !1)
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
    let {
      userId: t
    } = e;
    return N(t)
  }
})