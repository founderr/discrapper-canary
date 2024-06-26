"use strict";
n.d(t, {
  U5: function() {
    return A
  },
  pp: function() {
    return N
  }
}), n(47120);
var i = n(442837),
  r = n(147913),
  s = n(592125),
  o = n(131951),
  a = n(944486),
  l = n(979651),
  u = n(557177),
  _ = n(565799),
  c = n(431328),
  d = n(501655),
  E = n(427679),
  I = n(754277);
let T = e => e / 400,
  h = !1,
  f = (0, u.tu)("stage_waiting", "stage_waiting", T(o.Z.getOutputVolume()));

function S() {
  let e = a.Z.getVoiceChannelId();
  if (null == e) {
    f.stop(), h = !1;
    return
  }
  let t = s.Z.getChannel(e);
  if (!(null == t ? void 0 : t.isGuildStageVoice()) || o.Z.isSelfDeaf()) {
    f.stop(), h = !1;
    return
  }
  if (I.Z.shouldPlay()) {
    f.volume = T(o.Z.getOutputVolume()), f.loop(), h = !0;
    return
  }
  if (E.Z.isLive(e)) {
    f.stop(), h = !1;
    return
  }
  if (I.Z.isMuted()) {
    f.pause(), h = !1;
    return
  }
  let n = null != Object.values(l.Z.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
  n || h ? n && (f.pause(), h = !1) : (f.volume = T(o.Z.getOutputVolume()), f.loop(), h = !0)
}

function N(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.getVoiceChannelId() === e),
    n = null != (0, c.w8)(e, d.pV.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
    r = (0, i.e7)([E.Z], () => E.Z.getStageInstanceByChannel(e));
  return t && null == r && !n
}

function A(e) {
  let t = a.Z.getVoiceChannelId() === e,
    n = null != _.Z.getMutableParticipants(e, d.pV.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
    i = E.Z.getStageInstanceByChannel(e);
  return t && null == i && !n
}
class m extends r.Z {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    if (null != t) {
      let e = s.Z.getChannel(t);
      (null == e ? void 0 : e.isGuildStageVoice()) ? S(): (f.stop(), h = !1)
    } else f.stop(), h = !1
  }
  handleLogout() {
    f.stop(), h = !1
  }
  handlePlay(e) {
    let {
      play: t
    } = e;
    t ? S() : (f.pause(), h = !1)
  }
  handleMute(e) {
    let {
      muted: t
    } = e;
    t ? (f.pause(), h = !1) : S()
  }
  handleVoiceStateUpdates() {
    S()
  }
  handleSetOutputVolume(e) {
    let {
      volume: t
    } = e;
    f.volume = T(t)
  }
  handleToggleSelfDeaf() {
    S()
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
      LOGOUT: this.handleLogout,
      STAGE_MUSIC_MUTE: this.handleMute,
      STAGE_MUSIC_PLAY: this.handlePlay,
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
      AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.ZP = new m