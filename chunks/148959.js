"use strict";
n.r(t), n.d(t, {
  GoLiveQualityManagerEvent: function() {
    return i
  },
  default: function() {
    return _
  }
}), n("47120"), n("653041");
var i, r, s = n("392711"),
  a = n.n(s),
  o = n("47770"),
  l = n("562319"),
  u = n("65154");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(r = i || (i = {})).RequestedSSRCsUpdate = "requested-ssrcs-update", r.RequestedStreamsUpdate = "requested-streams-update";
class _ extends o.default {
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
      let [i, r, s, a] = e;
      t[i] = r, t[s] = 0, n.push(i), this.hasEverReceivedFrame() && this.supportsSeamless && (-1 === this.pendingSSRC ? (this.pendingSSRC = i, n.push(s), t[s] = a) : this.pendingSSRC === i ? this.pendingSSRCReceived ? (this.pendingSSRC = -1, this.pendingSSRCReceived = !1) : (n.push(s), t[s] = a) : this.pendingSSRC === s && (this.pendingSSRC = -1))
    } else t[this.videoStreams[0].ssrc] = 100, n.push(this.videoStreams[0].ssrc);
    if (!l.default.isIncomingVideoEnabled())
      for (let e in t) "any" !== e && (t[e] = 0);
    this.emit("requested-ssrcs-update", this.userId, this.audioSSRC, n), this.emit("requested-streams-update", t)
  }
  getQualityConfig() {
    let e = a().minBy(this.videoStreams, e => e.quality),
      t = a().maxBy(this.videoStreams, e => e.quality);
    if (void 0 === e || void 0 === t) return null;
    if (this.debugQualityOverride === u.SimulcastOverrideQuality.LOW) return [e.ssrc, 60, t.ssrc, 100];
    if (this.debugQualityOverride === u.SimulcastOverrideQuality.HIGH) return [t.ssrc, 100, e.ssrc, 60];
    if (this.downgraded) return [e.ssrc, 60, t.ssrc, 100];
    else return [t.ssrc, 100, e.ssrc, 60]
  }
  constructor(e) {
    super(), d(this, "supportsSeamless", void 0), d(this, "userId", void 0), d(this, "videoStreams", void 0), d(this, "audioSSRC", void 0), d(this, "downgraded", void 0), d(this, "debugQualityOverride", void 0), d(this, "pendingSSRC", void 0), d(this, "everReceivedFrame", void 0), d(this, "pendingSSRCReceived", void 0), this.supportsSeamless = e, this.videoStreams = [], this.audioSSRC = 0, this.downgraded = !1, this.debugQualityOverride = u.SimulcastOverrideQuality.NO_OVERRIDE, this.pendingSSRC = -1, this.everReceivedFrame = !1, this.pendingSSRCReceived = !1, l.default.subscribe(() => {
      this.update()
    })
  }
}