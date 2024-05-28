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
    return i
  },
  speedTestSummary: function() {
    return c
  }
}), s("47120"), s("518263"), s("970173"), s("520712"), s("268111"), s("941497"), s("32026"), s("480839"), s("744285"), s("492257"), s("873817"), s("863942");
var a = s("250683"),
  n = s("909766"),
  l = s("369541");

function i(e) {
  return 8 * e.clusterSize * 1e3 / e.clusterIntervalMs
}

function r(e) {
  return e.clusterIntervalMs * e.numClusters / 1e3
}

function o(e) {
  return e.direction === l.SpeedTestDirections.CLIENT_TO_SERVER ? "Client -> Server" : e.direction === l.SpeedTestDirections.SERVER_TO_CLIENT ? "Server -> Client" : e.direction
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
  let l = Uint8Array.from(a.toByteArray(e)),
    i = new DataView(l.buffer),
    r = 16,
    o = Math.ceil(t.clusterSize / 1200),
    d = t.numClusters * o,
    u = 0,
    c = 0,
    S = 0,
    E = null,
    T = null,
    _ = null,
    f = null,
    m = null;
  for (let e = 0; e < i.byteLength / r; e++) {
    let t = i.getUint32(4 * (4 * e + 0)),
      a = i.getUint32(4 * (4 * e + 1)),
      n = i.getUint32(4 * (4 * e + 2)),
      l = i.getUint32(4 * (4 * e + 3));
    u++, c += a, S += a + s, null == T && (T = l), _ = l, null == E && (E = n), null == f && (f = t);
    let r = l - (n - E);
    null == m && (m = r), r < m && (m = r)
  }
  let I = new n.Histogram,
    g = null;
  for (let e = 0; e < i.byteLength / r; e++) {
    let t = i.getUint32(4 * (4 * e + 2)),
      s = (i.getUint32(4 * (4 * e + 3)) - (t - E) - m) / 1e3;
    I.addSample(s), null == g && (g = s), s > g && (g = s)
  }
  let N = null != T && null != _ ? (_ - T) / 1e3 : 0,
    h = 1 - u / d,
    C = 8 * c / N,
    O = 8 * S / N,
    A = I.getReport([50, 95, 99]);
  return {
    payloadBandwidth: C,
    networkBandwidth: O,
    loss: h,
    iatP50: A.percentiles[50],
    iatP95: A.percentiles[95],
    iatP99: A.percentiles[99],
    iatMax: null != g ? g : 0
  }
}