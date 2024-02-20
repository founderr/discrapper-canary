"use strict";
n.r(t), n.d(t, {
  useShowStageMusicMuteButton: function() {
    return S
  },
  shouldShowStageMusicMuteButton: function() {
    return v
  },
  default: function() {
    return T
  }
}), n("222007");
var a = n("446674"),
  r = n("689988"),
  s = n("42203"),
  i = n("42887"),
  l = n("18494"),
  o = n("800762"),
  u = n("709681"),
  d = n("488464"),
  c = n("567469"),
  f = n("998716"),
  h = n("834052"),
  p = n("274438");
let m = e => e / 400,
  C = !1,
  E = (0, u.createSound)("stage_waiting", "stage_waiting", m(i.default.getOutputVolume()));

function g() {
  let e = l.default.getVoiceChannelId();
  if (null == e) {
    E.stop(), C = !1;
    return
  }
  let t = s.default.getChannel(e);
  if (!(null == t ? void 0 : t.isGuildStageVoice())) {
    E.stop(), C = !1;
    return
  }
  let n = i.default.isSelfDeaf();
  if (n) {
    E.stop(), C = !1;
    return
  }
  let a = p.default.shouldPlay();
  if (a) {
    E.volume = m(i.default.getOutputVolume()), E.loop(), C = !0;
    return
  }
  let r = h.default.isLive(e);
  if (r) {
    E.stop(), C = !1;
    return
  }
  let u = p.default.isMuted();
  if (u) {
    E.pause(), C = !1;
    return
  }
  let d = null != Object.values(o.default.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
  d || C ? d && (E.pause(), C = !1) : (E.volume = m(i.default.getOutputVolume()), E.loop(), C = !0)
}

function S(e) {
  let t = (0, a.useStateFromStores)([l.default], () => l.default.getVoiceChannelId() === e),
    n = (0, c.useStageParticipants)(e, f.StageChannelParticipantNamedIndex.SPEAKER),
    r = null != n.find(e => !e.voiceState.isVoiceMuted()),
    s = (0, a.useStateFromStores)([h.default], () => h.default.getStageInstanceByChannel(e));
  return t && null == s && !r
}

function v(e) {
  let t = l.default.getVoiceChannelId() === e,
    n = d.default.getMutableParticipants(e, f.StageChannelParticipantNamedIndex.SPEAKER),
    a = null != n.find(e => !e.voiceState.isVoiceMuted()),
    r = h.default.getStageInstanceByChannel(e);
  return t && null == r && !a
}
class _ extends r.default {
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    if (null != t) {
      let e = s.default.getChannel(t);
      (null == e ? void 0 : e.isGuildStageVoice()) ? g(): (E.stop(), C = !1)
    } else E.stop(), C = !1
  }
  handleLogout() {
    E.stop(), C = !1
  }
  handlePlay(e) {
    let {
      play: t
    } = e;
    t ? g() : (E.pause(), C = !1)
  }
  handleMute(e) {
    let {
      muted: t
    } = e;
    t ? (E.pause(), C = !1) : g()
  }
  handleVoiceStateUpdates() {
    g()
  }
  handleSetOutputVolume(e) {
    let {
      volume: t
    } = e;
    E.volume = m(t)
  }
  handleToggleSelfDeaf() {
    g()
  }
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
      LOGOUT: this.handleLogout,
      STAGE_MUSIC_MUTE: this.handleMute,
      STAGE_MUSIC_PLAY: this.handlePlay,
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
      AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
    }
  }
}
var T = new _