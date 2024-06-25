n.d(t, {
  Z: function() {
    return o
  }
}), n(47120);
var s = n(570140),
  i = n(317770),
  l = n(314897),
  a = n(131951);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class o extends i.Z {
  _initialize() {
    !__OVERLAY__ && (s.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived), s.Z.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally), s.Z.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect), s.Z.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened))
  }
  _terminate() {
    !__OVERLAY__ && (s.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived), s.Z.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally), s.Z.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect), s.Z.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened))
  }
  constructor(...e) {
    super(...e), r(this, "_playSound", function(e) {
      arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && arguments[2], arguments.length > 3 && arguments[3]
    }), r(this, "_stopAndClearSounds", () => {}), r(this, "_handleToggleSelfDeafened", () => {
      a.Z.isDeaf() && this._stopAndClearSounds()
    }), r(this, "_handleSoundboardSoundReceived", e => {
      let {
        soundId: t,
        soundVolume: n,
        userId: s,
        channelId: i
      } = e;
      if (null != t && s !== l.default.getId()) return this._playSound(t, n, s, i)
    }), r(this, "_handleSoundboardSoundPlayLocally", e => {
      let {
        sound: t,
        channelId: n
      } = e, s = l.default.getId();
      return this._playSound(t.soundId, t.volume, s, n)
    }), r(this, "_handleVoiceChannelSelect", () => {
      this._stopAndClearSounds()
    })
  }
}