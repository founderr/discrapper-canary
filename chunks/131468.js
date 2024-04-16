"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
}), a("47120");
var n = a("570140"),
  s = a("317770"),
  l = a("314897"),
  i = a("131951");

function r(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class o extends s.default {
  _initialize() {
    !__OVERLAY__ && (n.default.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived), n.default.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally), n.default.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect), n.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened))
  }
  _terminate() {
    !__OVERLAY__ && (n.default.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived), n.default.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally), n.default.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect), n.default.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened))
  }
  constructor(...e) {
    super(...e), r(this, "_playSound", function(e) {
      arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && arguments[2], arguments.length > 3 && arguments[3]
    }), r(this, "_stopAndClearSounds", () => {}), r(this, "_handleToggleSelfDeafened", () => {
      i.default.isDeaf() && this._stopAndClearSounds()
    }), r(this, "_handleSoundboardSoundReceived", e => {
      let {
        soundId: t,
        soundVolume: a,
        userId: n,
        channelId: s
      } = e;
      if (null != t && n !== l.default.getId()) return this._playSound(t, a, n, s)
    }), r(this, "_handleSoundboardSoundPlayLocally", e => {
      let {
        sound: t,
        channelId: a
      } = e, n = l.default.getId();
      return this._playSound(t.soundId, t.volume, n, a)
    }), r(this, "_handleVoiceChannelSelect", () => {
      this._stopAndClearSounds()
    })
  }
}