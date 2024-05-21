"use strict";
n.r(t), n.d(t, {
  GoLiveQualityManagerEvent: function() {
    return i
  },
  default: function() {
    return d
  }
}), n("653041"), n("47120");
var i, r, s = n("392711"),
  a = n.n(s),
  o = n("47770"),
  l = n("562319");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(r = i || (i = {})).RequestedSSRCsUpdate = "requested-ssrcs-update", r.RequestedStreamsUpdate = "requested-streams-update";
class d extends o.default {
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
    let e = this.videoStreams.length > 1,
      t = a().minBy(this.videoStreams, e => e.quality),
      n = a().maxBy(this.videoStreams, e => e.quality);
    if (void 0 === t || void 0 === n) return;
    let i = [],
      r = {
        any: 100
      };
    for (let s of (this.downgraded && e ? (i.push(t.ssrc), this.supportsSeamless && !this.framesReceived.get(t.ssrc) && this.hasEverReceivedFrame() && i.push(n.ssrc)) : (i.push(n.ssrc), this.supportsSeamless && !this.framesReceived.get(n.ssrc) && this.hasEverReceivedFrame() && i.push(t.ssrc)), i)) s === t.ssrc ? r[s] = 60 : s === n.ssrc && (r[s] = 100);
    if (!l.default.isIncomingVideoEnabled())
      for (let e in i = [], r) "any" !== e && (r[e] = 0);
    if (this.hasEverReceivedFrame())
      for (let e of this.videoStreams) !i.includes(e.ssrc) && this.framesReceived.delete(e.ssrc);
    this.emit("requested-ssrcs-update", this.userId, this.audioSSRC, i), this.emit("requested-streams-update", r)
  }
  constructor(e) {
    super(), u(this, "supportsSeamless", void 0), u(this, "userId", void 0), u(this, "videoStreams", void 0), u(this, "audioSSRC", void 0), u(this, "downgraded", void 0), u(this, "framesReceived", void 0), this.supportsSeamless = e, this.videoStreams = [], this.audioSSRC = 0, this.downgraded = !1, this.framesReceived = new Map, l.default.subscribe(() => {
      this.update()
    })
  }
}