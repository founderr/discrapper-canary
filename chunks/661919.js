"use strict";
n.r(t), n.d(t, {
  graphs: function() {
    return f
  },
  keySection: function() {
    return T
  },
  parseSection: function() {
    return I
  },
  default: function() {
    return R
  }
}), n("222007"), n("424973");
var i = n("446674"),
  r = n("773364"),
  s = n("913144"),
  a = n("673777"),
  o = n("42887"),
  l = n("697218"),
  u = n("49111"),
  c = n("353927");
let d = T(c.MediaEngineContextTypes.DEFAULT, u.RTCDebugSections.TRANSPORT, 0),
  p = d,
  h = {},
  f = {
    availableOutgoingBitrate: !0,
    bitrate: !0,
    bitrateTarget: !0,
    bytesReceived: !0,
    bytesSent: !0,
    encoderQualityPsnr: !0,
    encoderQualityVmaf: !0,
    encodeUsage: !0,
    frameRateDecode: !0,
    frameRateEncode: !0,
    frameRateInput: !0,
    frameRateNetwork: !0,
    frameRateRender: !0,
    inboundBitrateEstimate: !0,
    packetsLost: !0,
    packetsReceived: !0,
    packetsSent: !0,
    ping: !0
  };

function E(e, t, n) {
  return "".concat(e, ":").concat(t, ":").concat(n)
}
class _ {
  static empty() {
    return new _({})
  }
  put(e, t, n, i) {
    if ("" === i) {
      let i = {
        ...this.state
      };
      return delete i[E(e, t, n)], new _(i)
    }
    return new _({
      [E(e, t, n)]: i,
      ...this.state
    })
  }
  get(e, t, n) {
    let i = this.state[E(e, t, n)];
    return null != i ? i : null
  }
  constructor(e) {
    this.state = e
  }
}
let m = _.empty(),
  S = !1,
  g = null;

function T(e, t, n) {
  return "".concat(e, ":").concat(t, ":").concat(n)
}

function I(e) {
  let [t, n] = e.split(":");
  return {
    context: t,
    section: n
  }
}

function v() {
  Object.values(c.MediaEngineContextTypes).forEach(e => {
    h[e] = {}
  })
}
v();

function C() {
  null != g && (g.destroy(), g = null)
}
class A extends i.default.Store {
  getSection() {
    return p
  }
  getStats() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT;
    return h[e][0]
  }
  getAllStats() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT;
    return Object.values(h[e])
  }
  getVideoStreams() {
    return m
  }
  shouldRecordNextConnection() {
    return S
  }
}
A.displayName = "RTCDebugStore";
var R = new A(s.default, {
  RTC_DEBUG_MODAL_OPEN: function(e) {
    var t;
    p = null !== (t = e.section) && void 0 !== t ? t : d
  },
  RTC_DEBUG_MODAL_CLOSE: function() {
    C()
  },
  RTC_DEBUG_MODAL_SET_SECTION: function(e) {
    p = e.section
  },
  RTC_DEBUG_MODAL_UPDATE: function(e) {
    let {
      context: t,
      stats: n,
      index: i
    } = e, r = h[t];
    if (null != n) {
      let [e, s, a] = p.split(":");
      if (e === t && parseInt(a) === i) {
        let e = l.default.getUser(s);
        if (null != e) {
          let {
            rtp: {
              inbound: e
            }
          } = n;
          !Object.keys(e).includes(s) && (p = d)
        }
      }
      r[i] = function e(t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
          r = {};
        for (let [s, a] of Object.entries(t)) {
          let t = n[s];
          if (Array.isArray(a)) {
            if ("object" == typeof a[0]) {
              let n = Array.isArray(t) ? t : [],
                o = r[s] = [];
              for (let t = 0; t < a.length; t++) {
                let r = n[t],
                  s = "object" == typeof r ? r : {};
                o.push(e(a[t], s, i))
              }
            } else r[s] = a
          } else if ("object" == typeof a && null !== a) {
            let n = "object" == typeof t && null !== t ? t : {};
            r[s] = e(a, n, i)
          } else if (s in f && "number" == typeof a) {
            let e = r[s] = Array.isArray(t) ? t : [];
            e.push({
              value: a,
              time: i
            }), e.length > 600 && e.shift()
          } else r[s] = a
        }
        return r
      }(n, r[i])
    } else delete r[i]
  },
  RTC_DEBUG_MODAL_OPEN_REPLAY: function(e) {
    a.chooseReplayPath()
  },
  RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function(e) {
    let {
      path: t
    } = e, n = o.default.getMediaEngine();
    if (C(), !n.supports(c.Features.CONNECTION_REPLAY) || 0 === t.length) return;
    let i = n.createReplayConnection(c.MediaEngineContextTypes.DEFAULT, t);
    null != i && (g = i, i.on(r.BaseConnectionEvent.Video, (e, t, n, r, a) => {
      s.default.dispatch({
        type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
        mediaEngineConnectionId: i.mediaEngineConnectionId,
        userId: e,
        videoSsrc: null != r ? r : 0,
        streamId: null != t ? t : ""
      })
    }), s.default.wait(() => a.open()))
  },
  RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function(e) {
    m = m.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId)
  },
  RTC_DEBUG_SET_RECORDING_FLAG: function(e) {
    let {
      value: t
    } = e;
    S = t
  },
  VOICE_CHANNEL_SELECT: function(e) {
    null != e.channelId && v()
  }
});
o.default.getMediaEngine().on(r.MediaEngineEvent.ConnectionStats, function(e) {
  Object.values(c.MediaEngineContextTypes).forEach(t => {
    e.filter(e => {
      let {
        connection: n
      } = e;
      return n.context === t
    }).forEach((e, n) => {
      s.default.dispatch({
        type: "RTC_DEBUG_MODAL_UPDATE",
        stats: e.stats,
        context: t,
        index: n,
        mediaEngineConnectionId: e.connection.mediaEngineConnectionId
      })
    })
  })
})