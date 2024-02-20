"use strict";
n.r(t), n.d(t, {
  Directions: function() {
    return r
  },
  getDirection: function() {
    return m
  },
  generateSessionDescription: function() {
    return I
  },
  generateUnifiedSessionDescription: function() {
    return v
  },
  extractSDP: function() {
    return A
  },
  truncateSDP: function() {
    return R
  },
  validateSdp: function() {
    return N
  },
  getExtensions: function() {
    return y
  }
}), n("222007"), n("70102"), n("424973"), n("808653"), n("700225");
var i, r, s, a, o = n("773179"),
  l = n.n(o),
  u = n("383536"),
  c = n.n(u),
  d = n("21794"),
  p = n("811022"),
  h = n("353927"),
  f = n("53452");
let E = new p.default("SDP");
(s = i || (i = {})).AUDIO = "a", s.VIDEO = "v", (a = r || (r = {})).SENDRECV = "sendrecv", a.SENDONLY = "sendonly", a.RECVONLY = "recvonly", a.INACTIVE = "inactive";
let _ = "UDP/TLS/RTP/SAVPF";

function m(e) {
  switch (e) {
    case "recvonly":
      return "sendonly";
    case "sendonly":
      return "recvonly";
    case "sendrecv":
      return "sendrecv";
    default:
      return "inactive"
  }
}

function S(e, t, n) {
  let i = "".concat(e, "-").concat(t),
    r = "".concat(n).concat(i);
  return [{
    attribute: "cname",
    id: t,
    value: i
  }, {
    attribute: "msid",
    id: t,
    value: "".concat(i, " ").concat(r)
  }, {
    attribute: "mslabel",
    id: t,
    value: i
  }, {
    attribute: "label",
    id: t,
    value: r
  }]
}

function g(e) {
  return d.write({
    version: 0,
    timing: {
      start: 0,
      stop: 0
    },
    origin: {
      address: "127.0.0.1",
      ipVer: 4,
      netType: "IN",
      sessionId: "1420070400000",
      sessionVersion: 0,
      username: "-"
    },
    name: "-",
    msidSemantic: {
      semantic: "WMS",
      token: "*"
    },
    groups: [{
      type: "BUNDLE",
      mids: e.filter(e => null != e.mid).map(e => e.mid).join(" ")
    }],
    media: e
  })
}

function T(e) {
  let {
    mid: t,
    type: n,
    setup: i,
    direction: r,
    baseSDP: s,
    codec: a,
    payload: o,
    bitrate: u,
    ssrcs: p,
    extensions: E,
    rtxPayload: m,
    sendingVideo: S
  } = e;
  if ("inactive" === r && !f.BROWSER_SUPPORTS_UNIFIED_PLAN) return {
    connection: {
      ip: "0.0.0.0",
      version: 4
    },
    direction: "inactive",
    fmtp: [],
    payloads: o,
    port: 0,
    protocol: _,
    rtp: [{
      codec: "NULL",
      payload: o,
      rate: 0
    }],
    mid: void 0,
    type: n
  };
  let {
    media: [g]
  } = d.parse(s);
  if (g.type = n, g.protocol = _, g.payloads = o, g.setup = i, g.mid = t, g.rtcpMux = "rtcp-mux", g.direction = r, g.ssrcs = p, p.length > 0 && (null != m && (g.ssrcGroups = l(p).chunk(4).map(e => {
      let t = e[0].id;
      return {
        semantics: "FID",
        ssrcs: "".concat(t, " ").concat(t + 1)
      }
    }).value(), g.ssrcs = l(p).chunk(4).map(e => {
      let t = e.map(e => (e = {
        ...e
      }, e.id += 1, e));
      return [...e, ...t]
    }).flatten().value()), f.BROWSER_SUPPORTS_UNIFIED_PLAN || "Firefox" === c.name)) {
    let e = p.find(e => "msid" === e.attribute);
    if (null == e) throw Error("msid missing");
    g.msid = e.value, g.ssrcs = g.ssrcs.filter(e => "cname" === e.attribute)
  }
  switch (n) {
    case "audio":
      "Firefox" === c.name ? g.ext = E.filter(e => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri) : (g.ext = E.filter(e => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri), g.rtcpFb = [{
        type: "transport-cc",
        payload: o
      }]), g.rtp.push({
        codec: a,
        encoding: 2,
        payload: o,
        rate: 48e3
      }), a === h.Codecs.OPUS && g.fmtp.push({
        config: "minptime=10;useinbandfec=1;usedtx=".concat(S ? "0" : "1"),
        payload: o
      }), g.maxptime = 60;
      break;
    case "video":
      g.ext = E.filter(e => "urn:ietf:params:rtp-hdrext:toffset" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.uri || "urn:3gpp:video-orientation" === e.uri || "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri || "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay" === e.uri), g.rtp.push({
        codec: a,
        payload: o,
        rate: 9e4
      });
      let T = "x-google-max-bitrate=".concat(u);
      a === h.Codecs.H264 && (T += ";level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f"), g.fmtp.push({
        config: T,
        payload: o
      }), g.rtcpFb = [{
        type: "ccm",
        subtype: "fir",
        payload: o
      }, {
        type: "nack",
        payload: o
      }, {
        type: "nack",
        subtype: "pli",
        payload: o
      }, {
        type: "goog-remb",
        payload: o
      }, {
        type: "transport-cc",
        payload: o
      }], null != m && (g.rtp.push({
        codec: "rtx",
        payload: m,
        rate: 9e4
      }), g.fmtp.push({
        config: "apt=".concat(o),
        payload: m
      }), g.payloads = "".concat(g.payloads, " ").concat(m))
  }
  return g
}

function I(e) {
  let {
    type: t,
    baseSDP: n,
    direction: i,
    audioCodec: r,
    audioPayloadType: s,
    audioBitRate: a,
    videoCodec: o,
    videoPayloadType: u,
    videoBitRate: d,
    rtxPayloadType: p,
    ssrcs: h,
    extensions: f
  } = e, _ = [];
  if (E.info("generateSessionDescription: ".concat(JSON.stringify(h))), "Firefox" === c.name) {
    let e = "answer" === t ? "passive" : "active";
    h.forEach(t => {
      let [i, l, c, h, E] = t;
      if ("video" !== c || 0 !== u && 0 !== p) _.push(T({
        mid: E,
        type: c,
        setup: e,
        direction: h,
        baseSDP: n,
        codec: "audio" === c ? r : o,
        payload: "audio" === c ? s : u,
        bitrate: "audio" === c ? a : d,
        ssrcs: S(l, i, "audio" === c ? "a" : "v"),
        extensions: f
      }))
    })
  } else {
    let e = "answer" === t ? "passive" : "actpass",
      c = l(h).filter(e => {
        let [t, n, i, r, s] = e;
        return "inactive" !== r && "audio" === i
      }).map(e => {
        let [t, n] = e;
        return S(n, t, "a")
      }).value();
    if (_.push(T({
        mid: "audio",
        type: "audio",
        setup: e,
        direction: i,
        baseSDP: n,
        codec: r,
        payload: s,
        bitrate: a,
        ssrcs: l.flatten(c),
        extensions: f
      })), u > 0) {
      let t = l(h).filter(e => {
        let [t, n, i, r, s] = e;
        return "inactive" !== r && "video" === i
      }).map(e => {
        let [t, n] = e;
        return S(n, t, "v")
      }).value();
      _.push(T({
        mid: "video",
        type: "video",
        setup: e,
        direction: i,
        baseSDP: n,
        codec: o,
        payload: u,
        bitrate: d,
        ssrcs: l.flatten(t),
        extensions: f,
        rtxPayload: p
      }))
    }
  }
  let m = g(_);
  return new RTCSessionDescription({
    type: t,
    sdp: m
  })
}

function v(e) {
  let {
    type: t,
    baseSDP: n,
    audioCodec: i,
    audioPayloadType: r,
    audioBitRate: s,
    videoCodec: a,
    videoPayloadType: o,
    videoBitRate: l,
    sendingVideo: u,
    rtxPayloadType: c,
    ssrcs: d,
    extensions: p
  } = e, h = [], f = "answer" === t ? "passive" : "actpass";
  d.forEach(e => {
    let t, {
      ssrc: d,
      cname: E,
      type: _,
      direction: m,
      mid: g
    } = e;
    "" !== E ? t = S(E, d, "audio" === _ ? "a" : "v") : (t = [], "sendonly" === m ? m = "inactive" : "sendrecv" === m && (m = "recvonly"));
    h.push(T({
      mid: g,
      type: _,
      setup: f,
      direction: m,
      baseSDP: n,
      codec: "audio" === _ ? i : a,
      payload: "audio" === _ ? r : o,
      bitrate: "audio" === _ ? s : l,
      ssrcs: t,
      extensions: p,
      rtxPayload: "audio" === _ ? null : c,
      sendingVideo: u
    }))
  });
  let E = g(h);
  return new RTCSessionDescription({
    type: t,
    sdp: E
  })
}

function C(e, t, n, i, r) {
  let s = l.find(e, {
    codec: i
  });
  if (null == s) return null;
  let a = l.find(t, e => RegExp("^apt=".concat(s.payload)).test(e.config)),
    o = null;
  if (null != a) {
    let t = l.find(e, {
      codec: h.Codecs.RTX,
      payload: a.payload
    });
    null != t && (o = t.payload)
  }
  return {
    type: n,
    name: i,
    priority: r + 1,
    payloadType: s.payload,
    rtxPayloadType: o
  }
}

function A(e) {
  let t = d.parse(e).media.reduce((e, t) => {
    let n, {
      type: i,
      rtp: r,
      ssrcs: s,
      fmtp: a,
      direction: o,
      mid: u
    } = t;
    switch (e.outboundStreams.push({
        type: i,
        direction: o,
        mid: u
      }), i) {
      case "audio":
        [h.Codecs.OPUS].forEach((t, n) => {
          let s = C(r, a, i, t, n);
          null != s && e.codecs.push(s)
        }), "sendrecv" === o && null != (n = l.find(s, {
          attribute: "cname"
        })) && (e.audioSSRC = n.id);
        break;
      case "video":
        [h.Codecs.H264, h.Codecs.VP8, h.Codecs.VP9].forEach((t, n) => {
          let s = C(r, a, i, t, n);
          null != s && e.codecs.push(s)
        }), "sendrecv" === o && (null != (n = l.find(s, {
          attribute: "cname"
        })) && (e.videoSSRC = n.id), null != (n = l.findLast(s, {
          attribute: "cname"
        })) && (n.id === e.videoSSRC && E.warn("Unable to find a unique rtx SSRC!"), e.rtxSSRC = n.id))
    }
    return e
  }, {
    outboundStreams: [],
    codecs: [],
    audioSSRC: 0,
    videoSSRC: 0,
    rtxSSRC: 0
  });
  return t.codecs = l.uniqWith(t.codecs, l.isEqual), t
}

function R(e) {
  var t;
  let {
    codecs: n
  } = A(e), i = n.find(e => e.name === h.Codecs.VP8), r = RegExp("^a=ice|a=extmap|a=fingerprint|opus|VP8|".concat(null !== (t = null == i ? void 0 : i.rtxPayloadType) && void 0 !== t ? t : 0, " rtx"), "i");
  return {
    sdp: l(e).split(/\r\n/).filter(e => r.test(e)).uniq().join("\n"),
    codecs: n
  }
}

function N(e) {
  if (!e.includes("a=fingerprint")) return E.error("Remote SDP does not include fingerprint!"), !1;
  if (!e.includes("a=ice-ufrag")) return E.error("Remote SDP does not include ICE user name!"), !1;
  if (!e.includes("a=ice-pwd")) return E.error("Remote SDP does not include ICE password!"), !1;
  if (!e.includes("a=candidate")) return E.error("Remote SDP does not include ICE candidate!"), !1;
  if (!e.includes("c=")) return E.error("Remote SDP does not include c-line!"), !1;
  let t = e.split("\n").filter(e => e.startsWith("c=")).join().trim();
  return !(t.split(" ").length < 3) || (E.error("Incorrect c-line: ".concat(t)), !1)
}

function y(e) {
  return l(e).split(/\r\n/).filter(e => e.startsWith("a=extmap:")).uniq().map(e => {
    let t = e.split(" "),
      n = t[0].split("/");
    return {
      value: parseInt(n[0].substr(9), 10),
      uri: t[1]
    }
  }).value()
}