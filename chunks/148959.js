"use strict";
n.d(t, {
  Z: function() {
    return d
  },
  y: function() {
    return i
  }
}), n(47120), n(653041);
var i, r, s = n(392711),
  o = n.n(s),
  a = n(47770),
  l = n(562319),
  u = n(65154);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(r = i || (i = {})).RequestedSSRCsUpdate = "requested-ssrcs-update", r.RequestedStreamsUpdate = "requested-streams-update";
class d extends a.Z {
  setUserID(e) {
    this.userId = e
  }
  updateAudioAndVideoStreamInfo(e, t) {
    this.audioSSRC = e, this.videoStreams = t, this.update()
  }
  setGoLiveStreamDowngraded(e) {
    e !== this.downgraded && (this.downgraded = e, this.update())
  }
  setSimulcastDebugOverride(e) {
    this.debugQualityOverride = e, this.update()
  }
  setFirstFrameReceived(e) {
    this.everReceivedFrame = !0, this.pendingSSRC === e && (this.pendingSSRCReceived = !0, this.update())
  }
  hasEverReceivedFrame() {
    return this.everReceivedFrame
  }
  update() {
    if (void 0 === this.userId || null === this.userId) return;
    let e = this.videoStreams.length > 1,
      t = {},
      n = [];
    if (e) {
      let e = this.getQualityConfig();
      if (null === e) return;
      let [i, r, s, o] = e;
      t[i] = r, t[s] = 0, n.push(i), this.hasEverReceivedFrame() && this.supportsSeamless && (-1 === this.pendingSSRC ? (this.pendingSSRC = i, n.push(s), t[s] = o) : this.pendingSSRC === i ? this.pendingSSRCReceived ? (this.pendingSSRC = -1, this.pendingSSRCReceived = !1) : (n.push(s), t[s] = o) : this.pendingSSRC === s && (this.pendingSSRC = -1))
    } else t[this.videoStreams[0].ssrc] = 100, n.push(this.videoStreams[0].ssrc);
    if (!l.Z.isIncomingVideoEnabled())
      for (let e in t) "any" !== e && (t[e] = 0);
    this.emit("requested-ssrcs-update", this.userId, this.audioSSRC, n), this.emit("requested-streams-update", t)
  }
  getQualityConfig() {
    let e = o().minBy(this.videoStreams, e => e.quality),
      t = o().maxBy(this.videoStreams, e => e.quality);
    if (void 0 === e || void 0 === t) return null;
    if (this.debugQualityOverride === u.Z.LOW) return [e.ssrc, 60, t.ssrc, 100];
    if (this.debugQualityOverride === u.Z.HIGH) return [t.ssrc, 100, e.ssrc, 60];
    if (this.downgraded) return [e.ssrc, 60, t.ssrc, 100];
    else return [t.ssrc, 100, e.ssrc, 60]
  }
  constructor(e) {
    super(), _(this, "supportsSeamless", void 0), _(this, "userId", void 0), _(this, "videoStreams", void 0), _(this, "audioSSRC", void 0), _(this, "downgraded", void 0), _(this, "debugQualityOverride", void 0), _(this, "pendingSSRC", void 0), _(this, "everReceivedFrame", void 0), _(this, "pendingSSRCReceived", void 0), this.supportsSeamless = e, this.videoStreams = [], this.audioSSRC = 0, this.downgraded = !1, this.debugQualityOverride = u.Z.NO_OVERRIDE, this.pendingSSRC = -1, this.everReceivedFrame = !1, this.pendingSSRCReceived = !1, l.Z.subscribe(() => {
      this.update()
    })
  }
}