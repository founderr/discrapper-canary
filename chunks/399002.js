t.d(s, {
  B9: function() {
    return d
  },
  Hm: function() {
    return r
  },
  K4: function() {
    return l
  },
  tn: function() {
    return o
  },
  un: function() {
    return _
  },
  vW: function() {
    return c
  }
}), t(47120), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817), t(863942);
var n = t(250683),
  a = t(909766),
  i = t(369541);

function r(e) {
  return 8 * e.clusterSize * 1e3 / e.clusterIntervalMs
}

function o(e) {
  return e.clusterIntervalMs * e.numClusters / 1e3
}

function l(e) {
  return e.direction === i.u_.CLIENT_TO_SERVER ? "Client -> Server" : e.direction === i.u_.SERVER_TO_CLIENT ? "Server -> Client" : e.direction
}

function c(e) {
  return 1e3 / e.clusterIntervalMs
}

function d(e) {
  let s = [...e];
  s.sort((e, s) => e - s);
  let t = s.length;
  return {
    count: t,
    min: s[0],
    p50: s[Math.floor(t / 2)],
    max: s[t - 1]
  }
}

function _(e, s, t) {
  let i = new DataView(Uint8Array.from(n.toByteArray(e)).buffer),
    r = 16,
    o = Math.ceil(s.clusterSize / 1200),
    l = s.numClusters * o,
    c = 0,
    d = 0,
    _ = 0,
    E = null,
    u = null,
    T = null,
    S = null,
    I = null;
  for (let e = 0; e < i.byteLength / r; e++) {
    let s = i.getUint32(4 * (4 * e + 0)),
      n = i.getUint32(4 * (4 * e + 1)),
      a = i.getUint32(4 * (4 * e + 2)),
      r = i.getUint32(4 * (4 * e + 3));
    c++, d += n, _ += n + t, null == u && (u = r), T = r, null == E && (E = a), null == S && (S = s);
    let o = r - (a - E);
    null == I && (I = o), o < I && (I = o)
  }
  let N = new a.b,
    C = null;
  for (let e = 0; e < i.byteLength / r; e++) {
    let s = i.getUint32(4 * (4 * e + 2)),
      t = (i.getUint32(4 * (4 * e + 3)) - (s - E) - I) / 1e3;
    N.addSample(t), null == C && (C = t), t > C && (C = t)
  }
  let m = null != u && null != T ? (T - u) / 1e3 : 0,
    A = 1 - c / l,
    g = 8 * d / m,
    O = 8 * _ / m,
    h = N.getReport([50, 95, 99]);
  return {
    payloadBandwidth: g,
    networkBandwidth: O,
    loss: A,
    iatP50: h.percentiles[50],
    iatP95: h.percentiles[95],
    iatP99: h.percentiles[99],
    iatMax: null != C ? C : 0
  }
}