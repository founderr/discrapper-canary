"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("702976");
var s, i = n("201876"),
  r = n("56947"),
  a = n("386045"),
  o = n("161454"),
  d = n("584687"),
  u = n("103979"),
  l = n("845579"),
  f = n("373469"),
  _ = n("42203"),
  c = n("42887"),
  g = n("590401"),
  m = n("568734"),
  h = n("49111");
s = class extends i.default {
  get guildId() {
    return this.getState().guildId
  }
  get channelId() {
    return this.getState().channelId
  }
  computeVoiceFlags() {
    var e, t, n;
    let s = 0,
      i = l.ClipsAllowVoiceRecording.getSetting();
    s = (0, m.setFlag)(s, h.VoiceFlags.ALLOW_VOICE_RECORDING, i);
    let _ = a.default.getSettings().clipsEnabled && (0, r.areClipsEnabled)() && ((null === (e = f.default.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === h.ApplicationStreamStates.ACTIVE || (null === (t = f.default.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === h.ApplicationStreamStates.PAUSED),
      {
        enableDecoupledGameClipping: c
      } = d.default.getCurrentConfig({
        location: "computeVoiceFlags"
      }),
      {
        enableViewerClipping: g
      } = u.default.getCurrentConfig({
        location: "computeVoiceFlags"
      }, {
        autoTrackExposure: !1
      });
    g && (s = (0, m.setFlag)(s, h.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS, a.default.getSettings().viewerClipsEnabled));
    let v = a.default.getSettings().decoupledClipsEnabled && (null === (n = o.default.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && c;
    return s = (0, m.setFlag)(s, h.VoiceFlags.CLIPS_ENABLED, _ || v)
  }
  getInitialState() {
    return {
      guildId: null,
      channelId: null,
      selfMute: c.default.isSelfMute(),
      selfDeaf: c.default.isSelfDeaf(),
      selfVideo: c.default.isVideoEnabled(),
      preferredRegion: null,
      videoStreamParameters: null,
      flags: 0
    }
  }
  getNextState(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return {
      guildId: t,
      channelId: n,
      selfMute: c.default.isSelfMute(),
      selfDeaf: c.default.isSelfDeaf(),
      selfVideo: c.default.isVideoEnabled(),
      preferredRegion: g.default.getPreferredRegion(),
      videoStreamParameters: c.default.getVideoStreamParameters(),
      flags: this.computeVoiceFlags()
    }
  }
  shouldCommit() {
    return this.socket.isSessionEstablished()
  }
  didCommit(e) {
    var t;
    let {
      guildId: n,
      channelId: s,
      selfMute: i,
      selfDeaf: r,
      selfVideo: a,
      preferredRegion: o,
      videoStreamParameters: d,
      flags: u = 0
    } = e;
    a && (null === (t = _.default.getChannel(s)) || void 0 === t ? void 0 : t.type) === h.ChannelTypes.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
      guildId: n,
      channelId: s,
      selfMute: i,
      selfDeaf: r,
      selfVideo: a,
      preferredRegion: o,
      videoStreamParameters: d,
      flags: u
    }) : this.socket.voiceStateUpdate({
      guildId: n,
      channelId: s,
      selfMute: i,
      selfDeaf: r,
      selfVideo: a,
      preferredRegion: o,
      flags: u
    })
  }
  constructor(e) {
    super(), this.socket = e
  }
}