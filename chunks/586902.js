"use strict";
n.d(t, {
  O: function() {
    return _
  },
  Z: function() {
    return u
  }
});
var i = n(442837),
  r = n(763296),
  s = n(944486),
  o = n(606304),
  a = n(979651);

function l(e, t, n) {
  return e || t || n
}

function u(e) {
  var t, n, l;
  let {
    userId: u,
    checkSoundSharing: _ = !1,
    checkSoundboardSounds: c = !0,
    checkIsMuted: d = !1,
    context: E
  } = e, I = (0, i.e7)([a.Z, s.Z], () => {
    let e = s.Z.getVoiceChannelId();
    return null != e ? a.Z.getVoiceStateForChannel(e, u) : null
  }), T = d && ((null == I ? void 0 : I.mute) || (null == I ? void 0 : I.selfMute)), h = (0, i.e7)([o.Z], () => o.Z.isSpeaking(u, E) && !T), f = (0, i.e7)([o.Z], () => o.Z.isSoundSharing(u) && _), S = (0, i.e7)([r.Z], () => r.Z.isUserPlayingSounds(u) && c);
  return t = h, n = S, l = f, t || n || l
}

function _(e) {
  var t, n, i;
  let {
    userId: l,
    checkSoundSharing: u = !1,
    checkSoundboardSounds: _ = !0,
    checkIsMuted: c = !1,
    context: d
  } = e, E = s.Z.getVoiceChannelId(), I = null != E ? a.Z.getVoiceStateForChannel(E, l) : null, T = c && ((null == I ? void 0 : I.mute) || (null == I ? void 0 : I.selfMute)), h = o.Z.isSpeaking(l, d) && !T, f = o.Z.isSoundSharing(l) && u, S = r.Z.isUserPlayingSounds(l) && _;
  return t = h, n = S, i = f, t || n || i
}