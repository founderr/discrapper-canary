"use strict";
s.r(t), s.d(t, {
  speedTestDirection: function() {
    return o
  },
  speedTestDuration: function() {
    return r
  },
  speedTestFps: function() {
    return d
  },
  speedTestPingInfo: function() {
    return u
  },
  speedTestRate: function() {
    return l
  },
  speedTestSummary: function() {
    return c
  }
}), s("47120"), s("518263"), s("970173"), s("520712"), s("268111"), s("941497"), s("32026"), s("480839"), s("744285"), s("492257"), s("873817"), s("863942");
var a = s("250683"),
  n = s("909766"),
  i = s("369541");

function l(e) {
  return 8 * e.clusterSize * 1e3 / e.clusterIntervalMs
}

function r(e) {
  return e.clusterIntervalMs * e.numClusters / 1e3
}

function o(e) {
  return e.direction === i.SpeedTestDirections.CLIENT_TO_SERVER ? "Client -> Server" : e.direction === i.SpeedTestDirections.SERVER_TO_CLIENT ? "Server -> Client" : e.direction
}

function d(e) {
  return 1e3 / e.clusterIntervalMs
}

function u(e) {
  let t = [...e];
  t.sort((e, t) => e - t);
  let s = t.length;
  return {
    count: s,
    min: t[0],
    p50: t[Math.floor(s / 2)],
    max: t[s - 1]
  }
}

function c(e, t, s) {
  let i = Uint8Array.from(a.toByteArray(e)),
    l = new DataView(i.buffer),
    r = 16,
    o = Math.ceil(t.clusterSize / 1200),
    d = t.numClusters * o,
    u = 0,
    c = 0,
    S = 0,
    E = null,
    T = null,
    _ = null,
    I = null,
    N = null;
  for (let e = 0; e < l.byteLength / r; e++) {
    let t = l.getUint32(4 * (4 * e + 0)),
      a = l.getUint32(4 * (4 * e + 1)),
      n = l.getUint32(4 * (4 * e + 2)),
      i = l.getUint32(4 * (4 * e + 3));
    u++, c += a, S += a + s, null == T && (T = i), _ = i, null == E && (E = n), null == I && (I = t);
    let r = i - (n - E);
    null == N && (N = r), r < N && (N = r)
  }
  let g = new n.Histogram,
    f = null;
  for (let e = 0; e < l.byteLength / r; e++) {
    let t = l.getUint32(4 * (4 * e + 2)),
      s = (l.getUint32(4 * (4 * e + 3)) - (t - E) - N) / 1e3;
    g.addSample(s), null == f && (f = s), s > f && (f = s)
  }
  let m = null != T && null != _ ? (_ - T) / 1e3 : 0,
    A = 1 - u / d,
    C = 8 * c / m,
    O = 8 * S / m,
    h = g.getReport([50, 95, 99]);
  return {
    payloadBandwidth: C,
    networkBandwidth: O,
    loss: A,
    iatP50: h.percentiles[50],
    iatP95: h.percentiles[95],
    iatP99: h.percentiles[99],
    iatMax: null != f ? f : 0
  }
}