"use strict";
n.r(t), n("724458"), n("47120");
var a, l, s, i, r = n("442837"),
  o = n("570140"),
  u = n("635384"),
  d = n("189786"),
  c = n("5192"),
  f = n("594174"),
  h = n("979651"),
  m = n("938475"),
  p = n("981631"),
  E = n("354459");
let C = [],
  g = [],
  S = new u.default,
  _ = new u.default,
  T = null;

function I(e) {
  let t = S.delete(e),
    n = _.delete(e);
  return t || n
}
class A extends(a = r.default.Store) {
  initialize() {
    this.waitFor(h.default, f.default)
  }
  get desyncedVoiceStatesCount() {
    return S.size()
  }
  getDesyncedVoiceStates(e) {
    return e !== T ? C : S.values()
  }
  getDesyncedParticipants(e) {
    return e !== T ? g : _.values()
  }
}
i = "RTCConnectionDesyncStore", (s = "displayName") in(l = A) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new A(o.default, {
  CONNECTION_OPEN: function() {
    S.clear(), _.clear()
  },
  RTC_CONNECTION_STATE: function(e) {
    let {
      state: t,
      channelId: n
    } = e;
    if (t !== p.RTCConnectionStates.DISCONNECTED && T === n) return !1;
    T = n, S.clear(), _.clear()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return null != T && t.reduce((e, t) => {
      let {
        userId: n,
        channelId: a
      } = t;
      return null != a && a === T && !!I(n) || e
    }, !1)
  },
  RTC_CONNECTION_FLAGS: function(e) {
    let {
      userId: t,
      guildId: n,
      channelId: a
    } = e, l = h.default.getVoiceStateForUser(t);
    if ((null == l ? void 0 : l.channelId) === a && a === T) return !1;
    let s = f.default.getUser(t);
    if (null == s) return !1;
    let i = new d.default({
        userId: t,
        channelId: a
      }),
      r = (0, m.makeSortedVoiceState)(i, null != n ? n : p.ME, t);
    S.set(t, r);
    let o = {
      type: E.ParticipantTypes.USER,
      user: s,
      id: s.id,
      streamId: null,
      voiceState: new d.default({
        userId: t,
        channelId: a
      }),
      voicePlatform: null,
      speaking: !1,
      lastSpoke: 0,
      soundsharing: !1,
      ringing: !1,
      userNick: c.default.getName(n, a, s),
      localVideoDisabled: !1
    };
    _.set(t, o)
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
    let {
      userId: t
    } = e;
    return I(t)
  }
})