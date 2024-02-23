"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l, a, s = n("117362"),
  i = n("449008"),
  r = n("49111"),
  u = n("782340");

function o() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
  return e <= 5 ? 3 : e <= 15 ? 10 : 15
}

function d(e, t) {
  let n = {
      packetsSentOrReceived: 0,
      packetsLost: 0,
      packetLossRate: 0,
      frameRate: 0,
      resolution: 0,
      numDatapoints: 0
    },
    l = e.slice(-1 * t).filter(i.isNotNullish);
  if (0 === l.length) return {
    type: "streamer",
    ...n
  };
  l.forEach((e, t, l) => {
    n.packetsSentOrReceived += t > 0 ? l[t].packetsSentOrReceived - l[t - 1].packetsSentOrReceived : 0, n.packetsLost += t > 0 ? l[t].packetsLost - l[t - 1].packetsLost : 0, n.frameRate += e.frameRate, n.resolution += e.resolution
  });
  let a = l[0].type,
    s = l.length;
  return {
    type: a,
    packetsSentOrReceived: n.packetsSentOrReceived,
    packetsLost: n.packetsLost,
    packetLossRate: n.packetsLost / (n.packetsLost + n.packetsSentOrReceived),
    frameRate: n.frameRate / s,
    resolution: n.resolution / s,
    numDatapoints: s
  }
}(l = a || (a = {})).PACKET_LOSS = "Packet Loss", l.FRAME_RATE_INPUT = "Frame Rate Encode", l.FRAME_RATE_NETWORK = "Frame Rate Decode", l.SOUNDSHARE_FAILED = "Soundshare Failed", l.BAD_CONNECTION = "Bad Connection";
let c = (0, s.cachedFunction)((e, t) => ({
  message: e,
  errorType: t
}));

function f(e, t) {
  if ("streamer" === e.type) {
    if (100 * e.packetLossRate > 10) return c(u.default.Messages.STREAM_BAD_STREAMER, "Packet Loss");
    if (e.frameRate <= o(t)) return c(u.default.Messages.STREAM_BAD_STREAMER, "Frame Rate Encode")
  } else {
    if (100 * e.packetLossRate > 10) return c(u.default.Messages.STREAM_BAD_SPECTATOR, "Packet Loss");
    if (e.frameRate <= o(t)) return c(u.default.Messages.STREAM_BAD_SPECTATOR, "Frame Rate Decode")
  }
  return null
}

function h(e, t, n, l) {
  if (n) return c(u.default.Messages.STREAM_SOUNDSHARE_FAILED, "Soundshare Failed");
  if (null != t) {
    let e = d(t, 5),
      n = d(t, 30);
    if (n.numDatapoints >= 5) {
      var a;
      return null !== (a = f(e, null == l ? void 0 : l.maxFrameRate)) && void 0 !== a ? a : f(n, null == l ? void 0 : l.maxFrameRate)
    }
  }
  return e === r.RTCConnectionQuality.BAD ? c(u.default.Messages.STREAM_NETWORK_QUALITY_ERROR, "Bad Connection") : null
}