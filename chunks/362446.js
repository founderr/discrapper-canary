n(724458);
var l, i, s, r, a = n(442837),
  o = n(570140),
  u = n(981631);
let c = {};

function d(e) {
  let t = c[e = null != e ? e : "null"];
  return null == t && (t = c[e] = {
    state: u.hes.DISCONNECTED,
    quality: u.IE4.UNKNOWN,
    pings: [],
    hostname: null,
    lossRate: null
  }), t
}

function h(e, t, n) {
  let l = c[e = null != e ? e : "null"];
  return null != l ? t(l) : n
}
class g extends(l = a.ZP.Store) {
  getConnectionState(e) {
    return h(e, e => {
      let {
        state: t
      } = e;
      return t
    }, u.hes.DISCONNECTED)
  }
  getQuality(e) {
    return h(e, e => {
      let {
        quality: t
      } = e;
      return t
    }, u.IE4.UNKNOWN)
  }
  getHostname(e) {
    return h(e, e => {
      let {
        hostname: t
      } = e;
      return t
    }, null)
  }
  getPings(e) {
    return h(e, e => {
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
    return h(e, e => {
      let {
        lossRate: t
      } = e;
      return t
    }, null)
  }
}
r = "OverlayRTCConnectionStore", (s = "displayName") in(i = g) ? Object.defineProperty(i, s, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = r, t.Z = new g(o.Z, {
  OVERLAY_INITIALIZE: function(e) {
    c = e.rtcConnectionStates
  },
  RTC_CONNECTION_STATE: function(e) {
    if (null != e.streamKey) return !1;
    let t = d(e.lobbyId);
    t.state = e.state, t.hostname = e.hostname
  },
  RTC_CONNECTION_PING: function(e) {
    let t = d(e.lobbyId);
    t.pings = e.pings, t.quality = e.quality
  },
  RTC_CONNECTION_LOSS_RATE: function(e) {
    d(e.lobbyId).lossRate = e.lossRate
  }
})