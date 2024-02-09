"use strict";
n.r(t), n.d(t, {
  thumbHashToApproximateAspectRatio: function() {
    return a
  },
  rgbaToDataURL: function() {
    return r
  },
  thumbHashToDataURL: function() {
    return i
  }
}), n("70102"), n("424973"), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997");

function a(e) {
  let t = e[3],
    n = 128 & e[2],
    a = 128 & e[4];
  return (a ? n ? 5 : 7 : 7 & t) / (a ? 7 & t : n ? 5 : 7)
}

function r(e, t, n) {
  let a = 4 * e + 1,
    r = 6 + t * (5 + a),
    i = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, r >>> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 73, 68, 65, 84, 120, 1],
    l = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
    s = 1,
    u = 0;
  for (let e = 0, r = 0, l = a - 1; e < t; e++, l += a - 1)
    for (i.push(e + 1 < t ? 0 : 1, 255 & a, a >> 8, 255 & ~a, a >> 8 ^ 255, 0), u = (u + s) % 65521; r < l; r++) {
      let e = 255 & n[r];
      i.push(e), u = (u + (s = (s + e) % 65521)) % 65521
    }
  for (let [e, t] of(i.push(u >> 8, 255 & u, s >> 8, 255 & s, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
      [12, 29],
      [37, 41 + r]
    ])) {
    let n = -1;
    for (let a = e; a < t; a++) n ^= i[a], n = (n = n >>> 4 ^ l[15 & n]) >>> 4 ^ l[15 & n];
    n = ~n, i[t++] = n >>> 24, i[t++] = n >> 16 & 255, i[t++] = n >> 8 & 255, i[t++] = 255 & n
  }
  return "data:image/png;base64," + btoa(String.fromCharCode(...i))
}

function i(e) {
  let t = function(e) {
    let {
      PI: t,
      min: n,
      max: r,
      cos: i,
      round: l
    } = Math, s = e[0] | e[1] << 8 | e[2] << 16, u = e[3] | e[4] << 8, o = (63 & s) / 63, d = (s >> 6 & 63) / 31.5 - 1, c = (s >> 12 & 63) / 31.5 - 1, f = s >> 23, h = u >> 15, m = r(3, h ? f ? 5 : 7 : 7 & u), g = r(3, h ? 7 & u : f ? 5 : 7), p = f ? (15 & e[5]) / 15 : 1, v = (e[5] >> 4) / 15, S = f ? 6 : 5, C = 0, E = (t, n, a) => {
      let r = [];
      for (let i = 0; i < n; i++)
        for (let l = i ? 0 : 1; l * n < t * (n - i); l++) r.push(((e[S + (C >> 1)] >> ((1 & C++) << 2) & 15) / 7.5 - 1) * a);
      return r
    }, _ = E(m, g, (s >> 18 & 31) / 31), N = E(3, 3, 1.25 * ((u >> 3 & 63) / 63)), I = E(3, 3, 1.25 * ((u >> 9 & 63) / 63)), O = f && E(5, 5, v), A = a(e), D = l(A > 1 ? 32 : 32 * A), M = l(A > 1 ? 32 / A : 32), y = new Uint8Array(D * M * 4), b = [], x = [];
    for (let e = 0, a = 0; e < M; e++)
      for (let l = 0; l < D; l++, a += 4) {
        let s = o,
          u = d,
          h = c,
          v = p;
        for (let e = 0, n = r(m, f ? 5 : 3); e < n; e++) b[e] = i(t / D * (l + .5) * e);
        for (let n = 0, a = r(g, f ? 5 : 3); n < a; n++) x[n] = i(t / M * (e + .5) * n);
        for (let e = 0, t = 0; e < g; e++)
          for (let n = e ? 0 : 1, a = 2 * x[e]; n * g < m * (g - e); n++, t++) s += _[t] * b[n] * a;
        for (let e = 0, t = 0; e < 3; e++)
          for (let n = e ? 0 : 1, a = 2 * x[e]; n < 3 - e; n++, t++) {
            let e = b[n] * a;
            u += N[t] * e, h += I[t] * e
          }
        if (f)
          for (let e = 0, t = 0; e < 5; e++)
            for (let n = e ? 0 : 1, a = 2 * x[e]; n < 5 - e; n++, t++) v += O[t] * b[n] * a;
        let S = s - 2 / 3 * u,
          C = (3 * s - S + h) / 2,
          E = C - h;
        y[a] = r(0, 255 * n(1, C)), y[a + 1] = r(0, 255 * n(1, E)), y[a + 2] = r(0, 255 * n(1, S)), y[a + 3] = r(0, 255 * n(1, v))
      }
    return {
      w: D,
      h: M,
      rgba: y
    }
  }(e);
  return r(t.w, t.h, t.rgba)
}