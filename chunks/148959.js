"use strict";
n.r(t), n.d(t, {
  GoLiveQualityManagerEvent: function() {
    return i
  },
  default: function() {
    return u
  }
}), n("653041"), n("47120");
var i, r, s = n("392711"),
  a = n.n(s),
  o = n("47770");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(r = i || (i = {})).RequestedSSRCsUpdate = "requested-ssrcs-update", r.RequestedStreamsUpdate = "requested-streams-update";
class u extends o.default {
  setUserID(e) {
    this.userId = e
  }
  updateAudioAndVideoStreamInfo(e, t) {
    this.audioSSRC = e, this.videoStreams = t, this.update()
  }
  setGoLiveStreamDowngraded(e) {
    e !== this.downgraded && (this.downgraded = e, this.update())
  }
  setFirstFrameReceived(e) {
    this.framesReceived.set(e, !0), this.update()
  }
  hasEverReceivedFrame() {
    return this.framesReceived.size > 0
  }
  update() {
    if (void 0 === this.userId || null === this.userId) return;
    let e = a().minBy(this.videoStreams, e => e.quality),
      t = a().maxBy(this.videoStreams, e => e.quality);
    if (void 0 === e || void 0 === t) return;
    let n = [],
      i = {
        any: 100
      };
    for (let r of (this.downgraded ? (n.push(e.ssrc), this.supportsSeamless && !this.framesReceived.get(e.ssrc) && this.hasEverReceivedFrame() && n.push(t.ssrc)) : (n.push(t.ssrc), this.supportsSeamless && !this.framesReceived.get(t.ssrc) && this.hasEverReceivedFrame() && n.push(e.ssrc)), n)) r === e.ssrc ? i[r] = 60 : r === t.ssrc && (i[r] = 100);
    if (this.hasEverReceivedFrame())
      for (let e of this.videoStreams) !n.includes(e.ssrc) && this.framesReceived.delete(e.ssrc);
    this.emit("requested-ssrcs-update", this.userId, this.audioSSRC, n), this.emit("requested-streams-update", i)
  }
  constructor(e) {
    super(), l(this, "supportsSeamless", void 0), l(this, "userId", void 0), l(this, "videoStreams", void 0), l(this, "audioSSRC", void 0), l(this, "downgraded", void 0), l(this, "framesReceived", void 0), this.supportsSeamless = e, this.videoStreams = [], this.audioSSRC = 0, this.downgraded = !1, this.framesReceived = new Map
  }
}