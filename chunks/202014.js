"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var i = n("689988"),
  a = n("271938"),
  l = n("42203"),
  s = n("78581"),
  r = n("49111");
class o extends i.default {
  constructor(...e) {
    super(...e), this.prevConnected = !1, this.tempMutedChannel = null, this.handleRTCConnectionState = e => {
      let {
        state: t,
        channelId: n
      } = e, i = t === r.RTCConnectionStates.RTC_CONNECTED, a = i && !this.prevConnected, o = l.default.getChannel(n), u = null == o ? void 0 : o.getGuildId(), d = this.tempMutedChannel === n;
      a && null != u && (d ? this.tempMutedChannel = null : (0, s.maybePlayCustomJoinSound)(u)), this.prevConnected = i
    }, this.handleMute = e => {
      let {
        channelId: t
      } = e;
      this.tempMutedChannel = t
    }, this.handleVoiceStateUpdates = e => {
      let {
        voiceStates: t
      } = e, n = a.default.getId(), i = a.default.getSessionId();
      t.forEach(e => {
        let {
          userId: t,
          channelId: a,
          sessionId: l
        } = e;
        t === n && l !== i && null != a && (this.tempMutedChannel = a)
      })
    }, this.actions = {
      RTC_CONNECTION_STATE: this.handleRTCConnectionState,
      SOUNDBOARD_MUTE_JOIN_SOUND: this.handleMute,
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
    }
  }
}
var u = new o