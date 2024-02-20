"use strict";
let i, a;
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("808653");
var l = n("446674"),
  s = n("95410"),
  r = n("913144"),
  o = n("42203"),
  u = n("305961");
let d = "hideSuppressWarning",
  c = !1,
  f = !0,
  E = !1;
class h extends l.default.Store {
  initialize() {
    E = s.default.get(d) || E
  }
  isAFKChannel() {
    let e = o.default.getChannel(a);
    if (null == e) return !1;
    let t = u.default.getGuild(e.getGuildId());
    return null != t && e.id === t.afkChannelId
  }
  shouldShowWarning() {
    var e;
    return !(null === (e = o.default.getChannel(a)) || void 0 === e ? void 0 : e.isGuildStageVoice()) && !f
  }
}
h.displayName = "PermissionSpeakStore";
var _ = new h(r.default, {
  CONNECTION_OPEN: function(e) {
    i = e.sessionId, c = !1
  },
  CONNECTION_CLOSED: function() {
    i = null, a = null, f = !0
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => i !== t.sessionId ? e : (c !== t.suppress && (f = !(c = t.suppress)), a !== t.channelId && (a = t.channelId, f = !c), (E || null == t.channelId) && (f = !0), !0), !1)
  },
  PERMISSION_CLEAR_SUPPRESS_WARNING: function(e) {
    let {
      forever: t
    } = e;
    f = !0, t && (E = !0, s.default.set(d, E))
  }
})