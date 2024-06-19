n.d(t, {
  Z: function() {
    return m
  }
});
var l, i, s = n(251625),
  a = n(823379),
  r = n(981631),
  o = n(689938);

function c() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
  return e <= 5 ? 3 : e <= 15 ? 10 : 15
}

function u(e, t) {
  let n = {
      packetsSentOrReceived: 0,
      packetsLost: 0,
      packetLossRate: 0,
      frameRate: 0,
      resolution: 0,
      numDatapoints: 0
    },
    l = e.slice(-1 * t).filter(a.lm);
  if (0 === l.length) return {
    type: "streamer",
    ...n
  };
  l.forEach((e, t, l) => {
    n.packetsSentOrReceived += t > 0 ? l[t].packetsSentOrReceived - l[t - 1].packetsSentOrReceived : 0, n.packetsLost += t > 0 ? l[t].packetsLost - l[t - 1].packetsLost : 0, n.frameRate += e.frameRate, n.resolution += e.resolution
  });
  let i = l[0].type,
    s = l.length;
  return {
    type: i,
    packetsSentOrReceived: n.packetsSentOrReceived,
    packetsLost: n.packetsLost,
    packetLossRate: n.packetsLost / (n.packetsLost + n.packetsSentOrReceived),
    frameRate: n.frameRate / s,
    resolution: n.resolution / s,
    numDatapoints: s
  }
}(l = i || (i = {})).PACKET_LOSS = "Packet Loss", l.FRAME_RATE_INPUT = "Frame Rate Encode", l.FRAME_RATE_NETWORK = "Frame Rate Decode", l.SOUNDSHARE_FAILED = "Soundshare Failed", l.BAD_CONNECTION = "Bad Connection";
let d = (0, s.oH)((e, t) => ({
  message: e,
  errorType: t
}));

function h(e, t) {
  if ("streamer" === e.type) {
    if (100 * e.packetLossRate > 10) return d(o.Z.Messages.STREAM_BAD_STREAMER, "Packet Loss");
    if (e.frameRate <= c(t)) return d(o.Z.Messages.STREAM_BAD_STREAMER, "Frame Rate Encode")
  } else {
    if (100 * e.packetLossRate > 10) return d(o.Z.Messages.STREAM_BAD_SPECTATOR, "Packet Loss");
    if (e.frameRate <= c(t)) return d(o.Z.Messages.STREAM_BAD_SPECTATOR, "Frame Rate Decode")
  }
  return null
}

function m(e, t, n, l) {
  if (n) return d(o.Z.Messages.STREAM_SOUNDSHARE_FAILED, "Soundshare Failed");
  if (null != t) {
    let e = u(t, 5),
      n = u(t, 30);
    if (n.numDatapoints >= 5) {
      var i;
      return null !== (i = h(e, null == l ? void 0 : l.maxFrameRate)) && void 0 !== i ? i : h(n, null == l ? void 0 : l.maxFrameRate)
    }
  }
  return e === r.IE4.BAD ? d(o.Z.Messages.STREAM_NETWORK_QUALITY_ERROR, "Bad Connection") : null
}