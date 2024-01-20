"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  },
  getIsSpeaking: function() {
    return d
  }
});
var i = n("446674"),
  s = n("235004"),
  r = n("18494"),
  a = n("280168"),
  o = n("800762");

function l(e, t, n) {
  return e || t || n
}

function u(e) {
  var t, n, l;
  let {
    userId: u,
    checkSoundSharing: d = !1,
    checkSoundboardSounds: c = !0,
    checkIsMuted: f = !1,
    context: _
  } = e, h = (0, i.useStateFromStores)([o.default, r.default], () => {
    let e = r.default.getVoiceChannelId();
    return null != e ? o.default.getVoiceStateForChannel(e, u) : null
  }), g = f && ((null == h ? void 0 : h.mute) || (null == h ? void 0 : h.selfMute)), m = (0, i.useStateFromStores)([a.default], () => a.default.isSpeaking(u, _) && !g), E = (0, i.useStateFromStores)([a.default], () => a.default.isSoundSharing(u) && d), p = (0, i.useStateFromStores)([s.default], () => s.default.isUserPlayingSounds(u) && c);
  return t = m, n = p, l = E, t || n || l
}

function d(e) {
  var t, n, i;
  let {
    userId: l,
    checkSoundSharing: u = !1,
    checkSoundboardSounds: d = !0,
    checkIsMuted: c = !1,
    context: f
  } = e, _ = r.default.getVoiceChannelId(), h = null != _ ? o.default.getVoiceStateForChannel(_, l) : null, g = c && ((null == h ? void 0 : h.mute) || (null == h ? void 0 : h.selfMute)), m = a.default.isSpeaking(l, f) && !g, E = a.default.isSoundSharing(l) && u, p = s.default.isUserPlayingSounds(l) && d;
  return t = m, n = p, i = E, t || n || i
}