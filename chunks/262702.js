"use strict";
a.r(t), a("47120");
var n = a("570140"),
  s = a("846027"),
  l = a("872810"),
  i = a("317770"),
  r = a("569545"),
  o = a("199902"),
  u = a("314897"),
  d = a("592125"),
  c = a("131951"),
  f = a("590415");

function E(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class h extends i.default {
  _initialize() {
    n.default.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    n.default.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    super(...e), E(this, "handleVoiceStateUpdates", e => {
      let {
        voiceStates: t
      } = e, a = u.default.getId();
      t.forEach(e => {
        var t;
        if (e.userId === a && !!(null === (t = d.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.isGuildStageVoice()))(0, f.getAudienceRequestToSpeakState)(e) !== f.RequestToSpeakStates.ON_STAGE && (this.handleStopStream(e), this.handleStopUserVideo())
      })
    }), E(this, "handleStopStream", e => {
      let t = o.default.getActiveStreamForUser(e.userId, e.guildId);
      null != t && (0, l.stopStream)((0, r.encodeStreamKey)(t), !1)
    }), E(this, "handleStopUserVideo", () => {
      c.default.isVideoEnabled() && s.default.setVideoEnabled(!1)
    })
  }
}
t.default = new h