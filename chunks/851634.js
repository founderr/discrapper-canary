"use strict";
let l, a;
n.r(t);
var s, i, r, o, u = n("392711"),
  d = n.n(u),
  c = n("442837"),
  f = n("570140"),
  h = n("189786");
let p = Object.freeze({}),
  C = {};

function m(e) {
  let {
    lobbyId: t
  } = e;
  delete C[t]
}
class g extends(o = c.default.Store) {
  getAllVoiceStates() {
    return C
  }
  getVoiceStates(e) {
    var t;
    return null !== (t = C[e]) && void 0 !== t ? t : p
  }
  getVoiceState(e, t) {
    return this.getVoiceStates(e)[t]
  }
  getLobbyIdsForUser(e) {
    return Object.keys(C).filter(t => null != C[t][e])
  }
}
r = "LobbyVoiceStateStore", (i = "displayName") in(s = g) ? Object.defineProperty(s, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = r, t.default = new g(f.default, {
  CONNECTION_OPEN: function(e) {
    let {
      user: t,
      sessionId: n
    } = e;
    C = {}, l = t.id, a = n
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      lobbyVoiceStates: t,
      user: n,
      sessionId: s
    } = e;
    C = {}, d().each(t, (e, t) => {
      C[t] = {}, d().each(e, (e, n) => {
        C[t][n] = new h.default(e)
      })
    }), l = n.id, a = s
  },
  LOBBY_VOICE_STATE_UPDATE: function(e) {
    var t;
    let n, {
        sessionId: s,
        userId: i,
        lobbyId: r,
        channelId: o,
        mute: u,
        deaf: d,
        selfMute: c,
        selfDeaf: f
      } = e,
      p = i === l && s !== a,
      m = null !== (t = C[r]) && void 0 !== t ? t : {},
      g = m[i];
    if (null != o && !p && (n = null == g ? new h.default({
        userId: i,
        sessionId: s,
        channelId: o,
        mute: u,
        deaf: d,
        selfMute: c,
        selfDeaf: f
      }) : g.merge({
        userId: i,
        sessionId: s,
        channelId: o,
        mute: u,
        deaf: d,
        selfMute: c,
        selfDeaf: f
      })), g === n) return !1;
    null == n ? (m = {
      ...m
    }, delete m[i]) : m = {
      ...m,
      [i]: n
    }, C[r] = m
  },
  LOBBY_DELETE: m,
  LOBBY_DISCONNECT: m
})