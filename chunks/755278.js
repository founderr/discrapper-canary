"use strict";
n.d(t, {
  Z: function() {
    return f
  }
}), n(789020);
var i = n(928801),
  r = n(924557),
  s = n(435064),
  o = n(779618),
  a = n(594190),
  l = n(836157),
  u = n(441167),
  _ = n(695346),
  c = n(199902),
  d = n(592125),
  E = n(131951),
  I = n(936349),
  T = n(630388),
  h = n(981631);
class f extends i.Z {
  get guildId() {
    return this.getState().guildId
  }
  get channelId() {
    return this.getState().channelId
  }
  computeVoiceFlags() {
    var e, t, n;
    let i = 0,
      d = _.tU.getSetting();
    i = (0, T.mB)(i, h.BVn.ALLOW_VOICE_RECORDING, d);
    let I = (0, o.Z)(E.Z),
      f = (0, r.ln)() && s.Z.getSettings().clipsEnabled && ((null === (e = c.Z.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === h.jm8.ACTIVE || (null === (t = c.Z.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === h.jm8.PAUSED),
      {
        enableDecoupledGameClipping: S
      } = l.Z.getCurrentConfig({
        location: "computeVoiceFlags"
      }),
      N = I && s.Z.getSettings().decoupledClipsEnabled && (null === (n = a.ZP.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && S;
    i = (0, T.mB)(i, h.BVn.CLIPS_ENABLED, f || N);
    let {
      enableViewerClipping: A
    } = u.Z.getCurrentConfig({
      location: "computeVoiceFlags"
    }, {
      autoTrackExposure: !1
    }), m = A && I && s.Z.getSettings().viewerClipsEnabled;
    return i = (0, T.mB)(i, h.BVn.ALLOW_ANY_VIEWER_CLIPS, m)
  }
  getInitialState() {
    return {
      guildId: null,
      channelId: null,
      selfMute: E.Z.isSelfMute(),
      selfDeaf: E.Z.isSelfDeaf(),
      selfVideo: E.Z.isVideoEnabled(),
      preferredRegion: null,
      preferredRegions: null,
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
      selfMute: E.Z.isSelfMute(),
      selfDeaf: E.Z.isSelfDeaf(),
      selfVideo: E.Z.isVideoEnabled(),
      preferredRegion: I.Z.getPreferredRegion(),
      preferredRegions: I.Z.getPreferredRegions(),
      videoStreamParameters: E.Z.getVideoStreamParameters(),
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
      channelId: i,
      selfMute: r,
      selfDeaf: s,
      selfVideo: o,
      preferredRegion: a,
      preferredRegions: l,
      videoStreamParameters: u,
      flags: _ = 0
    } = e;
    o && (null === (t = d.Z.getChannel(i)) || void 0 === t ? void 0 : t.type) === h.d4z.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
      guildId: n,
      channelId: i,
      selfMute: r,
      selfDeaf: s,
      selfVideo: o,
      preferredRegion: a,
      preferredRegions: l,
      videoStreamParameters: u,
      flags: _
    }) : this.socket.voiceStateUpdate({
      guildId: n,
      channelId: i,
      selfMute: r,
      selfDeaf: s,
      selfVideo: o,
      preferredRegion: a,
      preferredRegions: l,
      flags: _
    })
  }
  constructor(e) {
    var t, n, i;
    super(), t = this, i = void 0, (n = "socket") in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i, this.socket = e
  }
}