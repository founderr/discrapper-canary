"use strict";
n.r(t), n("724458");
var l, a, s, i, r = n("442837"),
  o = n("570140"),
  u = n("981631");
let d = {};

function c(e) {
  let t = d[e = null != e ? e : "null"];
  return null == t && (t = d[e] = {
    state: u.RTCConnectionStates.DISCONNECTED,
    quality: u.RTCConnectionQuality.UNKNOWN,
    pings: [],
    hostname: null,
    lossRate: null
  }), t
}

function f(e, t, n) {
  let l = d[e = null != e ? e : "null"];
  return null != l ? t(l) : n
}
class h extends(l = r.default.Store) {
  getConnectionState(e) {
    return f(e, e => {
      let {
        state: t
      } = e;
      return t
    }, u.RTCConnectionStates.DISCONNECTED)
  }
  getQuality(e) {
    return f(e, e => {
      let {
        quality: t
      } = e;
      return t
    }, u.RTCConnectionQuality.UNKNOWN)
  }
  getHostname(e) {
    return f(e, e => {
      let {
        hostname: t
      } = e;
      return t
    }, null)
  }
  getPings(e) {
    return f(e, e => {
      let {
        pings: t
      } = e;
      return t
    }, [])
  }
  getAveragePing(e) {
    let t = this.getPings(e);
    return 0 === t.length ? 0 : t.reduce((e, t) => e + t.value, 0) / t.length
  }
  getLastPing(e) {
    var t;
    let n = this.getPings(e);
    if (0 === n.length) return 0;
    return null === (t = n[n.length - 1]) || void 0 === t ? void 0 : t.value
  }
  getOutboundLossRate(e) {
    return f(e, e => {
      let {
        lossRate: t
      } = e;
      return t
    }, null)
  }
}
i = "OverlayRTCConnectionStore", (s = "displayName") in(a = h) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = new h(o.default, {
  OVERLAY_INITIALIZE: function(e) {
    d = e.rtcConnectionStates
  },
  RTC_CONNECTION_STATE: function(e) {
    if (null != e.streamKey) return !1;
    let t = c(e.lobbyId);
    t.state = e.state, t.hostname = e.hostname
  },
  RTC_CONNECTION_PING: function(e) {
    let t = c(e.lobbyId);
    t.pings = e.pings, t.quality = e.quality
  },
  RTC_CONNECTION_LOSS_RATE: function(e) {
    c(e.lobbyId).lossRate = e.lossRate
  }
})