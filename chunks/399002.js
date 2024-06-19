t.d(s, {
  B9: function() {
    return E
  },
  Hm: function() {
    return l
  },
  K4: function() {
    return o
  },
  tn: function() {
    return r
  },
  un: function() {
    return d
  },
  vW: function() {
    return c
  }
}), t(47120), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817), t(863942);
var n = t(250683),
  i = t(909766),
  a = t(369541);

function l(e) {
  return 8 * e.clusterSize * 1e3 / e.clusterIntervalMs
}

function r(e) {
  return e.clusterIntervalMs * e.numClusters / 1e3
}

function o(e) {
  return e.direction === a.u_.CLIENT_TO_SERVER ? "Client -> Server" : e.direction === a.u_.SERVER_TO_CLIENT ? "Server -> Client" : e.direction
}

function c(e) {
  return 1e3 / e.clusterIntervalMs
}

function E(e) {
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

function d(e, s, t) {
  let a = new DataView(Uint8Array.from(n.toByteArray(e)).buffer),
    l = 16,
    r = Math.ceil(s.clusterSize / 1200),
    o = s.numClusters * r,
    c = 0,
    E = 0,
    d = 0,
    _ = null,
    T = null,
    S = null,
    u = null,
    I = null;
  for (let e = 0; e < a.byteLength / l; e++) {
    let s = a.getUint32(4 * (4 * e + 0)),
      n = a.getUint32(4 * (4 * e + 1)),
      i = a.getUint32(4 * (4 * e + 2)),
      l = a.getUint32(4 * (4 * e + 3));
    c++, E += n, d += n + t, null == T && (T = l), S = l, null == _ && (_ = i), null == u && (u = s);
    let r = l - (i - _);
    null == I && (I = r), r < I && (I = r)
  }
  let N = new i.b,
    A = null;
  for (let e = 0; e < a.byteLength / l; e++) {
    let s = a.getUint32(4 * (4 * e + 2)),
      t = (a.getUint32(4 * (4 * e + 3)) - (s - _) - I) / 1e3;
    N.addSample(t), null == A && (A = t), t > A && (A = t)
  }
  let C = null != T && null != S ? (S - T) / 1e3 : 0,
    O = 1 - c / o,
    m = 8 * E / C,
    h = 8 * d / C,
    g = N.getReport([50, 95, 99]);
  return {
    payloadBandwidth: m,
    networkBandwidth: h,
    loss: O,
    iatP50: g.percentiles[50],
    iatP95: g.percentiles[95],
    iatP99: g.percentiles[99],
    iatMax: null != A ? A : 0
  }
}