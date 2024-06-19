n(47120);
var i = n(570140),
  s = n(846027),
  l = n(872810),
  a = n(317770),
  r = n(569545),
  o = n(199902),
  c = n(314897),
  u = n(592125),
  d = n(131951),
  E = n(590415);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class _ extends a.Z {
  _initialize() {
    i.Z.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  _terminate() {
    i.Z.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
  }
  constructor(...e) {
    super(...e), h(this, "handleVoiceStateUpdates", e => {
      let {
        voiceStates: t
      } = e, n = c.default.getId();
      t.forEach(e => {
        var t;
        if (e.userId === n && !!(null === (t = u.Z.getChannel(e.channelId)) || void 0 === t ? void 0 : t.isGuildStageVoice()))(0, E.gf)(e) !== E.xO.ON_STAGE && (this.handleStopStream(e), this.handleStopUserVideo())
      })
    }), h(this, "handleStopStream", e => {
      let t = o.Z.getActiveStreamForUser(e.userId, e.guildId);
      if (null != t)(0, l.g)((0, r.V9)(t), !1)
    }), h(this, "handleStopUserVideo", () => {
      d.Z.isVideoEnabled() && s.Z.setVideoEnabled(!1)
    })
  }
}
t.Z = new _