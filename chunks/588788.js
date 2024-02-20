"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var i = n("862337"),
  a = n("689988"),
  l = n("575365"),
  s = n("42203"),
  r = n("42887"),
  o = n("945956"),
  u = n("568307"),
  d = n("101125"),
  c = n("280168"),
  f = n("316133"),
  E = n("718517"),
  h = n("716241"),
  _ = n("49111");
let C = 1 * E.default.Millis.MINUTE;
class S extends a.default {
  _initialize() {
    __OVERLAY__ ? this.stores = new Map : (this.stores = new Map().set(c.default, () => this._handleSpeakingStoreChanged()).set(o.default, () => this._handleRTCConnectionStoreChanged()), this._reset())
  }
  _reset() {
    this._currentUserSpeaking = !1, this._anyoneElseSpeaking = !1, null != this._reportInterval && (this._reportInterval.stop(), this._reportInterval = null)
  }
  _trackStartSpeaking() {
    if (this._currentUserSpeaking) {
      let e = o.default.getChannelId(),
        t = o.default.getGuildId(),
        n = s.default.getChannel(e),
        i = null == n ? void 0 : n.isBroadcastChannel();
      (0, h.trackWithMetadata)(_.AnalyticEvents.START_SPEAKING, {
        mode: r.default.getMode(),
        priority: c.default.isCurrentUserPrioritySpeaking(),
        channel: e,
        server: t,
        channel_id: e,
        guild_id: t,
        is_broadcast: i,
        rtc_connection_id: o.default.getRTCConnectionId(),
        media_session_id: o.default.getMediaSessionId(),
        voice_state_count: f.default.countVoiceStatesForChannel(this._voiceChannelId),
        ...this.getGameMetadata(),
        ...o.default.getPacketStats()
      })
    }
  }
  _trackStartListening() {
    if (r.default.isDeaf() || !this._anyoneElseSpeaking) return;
    let e = o.default.getChannelId(),
      t = o.default.getGuildId(),
      n = s.default.getChannel(e),
      i = null == n ? void 0 : n.isBroadcastChannel();
    (0, h.trackWithMetadata)(_.AnalyticEvents.START_LISTENING, {
      mute: r.default.isMute(),
      anyone_priority: c.default.isAnyonePrioritySpeaking(),
      channel: e,
      server: t,
      channel_id: e,
      guild_id: t,
      is_broadcast: i,
      rtc_connection_id: o.default.getRTCConnectionId(),
      media_session_id: o.default.getMediaSessionId(),
      voice_state_count: f.default.countVoiceStatesForChannel(this._voiceChannelId),
      ...this.getGameMetadata()
    })
  }
  _terminate() {
    this._reset(), c.default.removeChangeListener(this._handleSpeakingStoreChanged), o.default.removeChangeListener(this._handleRTCConnectionStoreChanged)
  }
  getGameMetadata() {
    let e = d.default.findActivity(e => e.type === _.ActivityTypes.PLAYING),
      t = u.default.getCurrentGameForAnalytics();
    return {
      game_platform: (0, l.default)(e),
      game_name: null != e ? e.name : null,
      game_exe_name: null != t ? t.exeName : null,
      game_id: null != e ? e.application_id : null
    }
  }
  constructor(...e) {
    super(...e), this._currentUserSpeaking = !1, this._anyoneElseSpeaking = !1, this._handleRTCConnectionStoreChanged = () => {
      let e = o.default.getChannelId();
      if (this._voiceChannelId !== e) {
        if (this._voiceChannelId = e, null == e) {
          this._reset();
          return
        }
        null == this._reportInterval && (this._reportInterval = new i.Interval, this._reportInterval.start(C, () => {
          this._trackStartSpeaking(), this._trackStartListening()
        }))
      }
    }, this._handleSpeakingStoreChanged = () => {
      let e = c.default.isCurrentUserSpeaking();
      this._currentUserSpeaking !== e && (this._currentUserSpeaking = e, this._trackStartSpeaking());
      let t = c.default.isAnyoneElseSpeaking();
      this._anyoneElseSpeaking !== t && (this._anyoneElseSpeaking = t, this._trackStartListening())
    }
  }
}
var g = new S