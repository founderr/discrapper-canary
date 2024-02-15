"use strict";
r.r(t), r.d(t, {
  thumbHashToApproximateAspectRatio: function() {
    return a
  },
  rgbaToDataURL: function() {
    return n
  },
  thumbHashToDataURL: function() {
    return u
  }
}), r("70102"), r("424973"), r("222007"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("101997");

function a(e) {
  let t = e[3],
    r = 128 & e[2],
    a = 128 & e[4];
  return (a ? r ? 5 : 7 : 7 & t) / (a ? 7 & t : r ? 5 : 7)
}

function n(e, t, r) {
  let a = 4 * e + 1,
    n = 6 + t * (5 + a),
    u = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, n >>> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 73, 68, 65, 84, 120, 1],
    i = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
    s = 1,
    l = 0;
  for (let e = 0, n = 0, i = a - 1; e < t; e++, i += a - 1)
    for (u.push(e + 1 < t ? 0 : 1, 255 & a, a >> 8, 255 & ~a, a >> 8 ^ 255, 0), l = (l + s) % 65521; n < i; n++) {
      let e = 255 & r[n];
      u.push(e), l = (l + (s = (s + e) % 65521)) % 65521
    }
  for (let [e, t] of(u.push(l >> 8, 255 & l, s >> 8, 255 & s, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
      [12, 29],
      [37, 41 + n]
    ])) {
    let r = -1;
    for (let a = e; a < t; a++) r ^= u[a], r = (r = r >>> 4 ^ i[15 & r]) >>> 4 ^ i[15 & r];
    r = ~r, u[t++] = r >>> 24, u[t++] = r >> 16 & 255, u[t++] = r >> 8 & 255, u[t++] = 255 & r
  }
  return "data:image/png;base64," + btoa(String.fromCharCode(...u))
}

function u(e) {
  let t = function(e) {
    let {
      PI: t,
      min: r,
      max: n,
      cos: u,
      round: i
    } = Math, s = e[0] | e[1] << 8 | e[2] << 16, l = e[3] | e[4] << 8, o = (63 & s) / 63, c = (s >> 6 & 63) / 31.5 - 1, d = (s >> 12 & 63) / 31.5 - 1, f = s >> 23, m = l >> 15, p = n(3, m ? f ? 5 : 7 : 7 & l), E = n(3, m ? 7 & l : f ? 5 : 7), S = f ? (15 & e[5]) / 15 : 1, h = (e[5] >> 4) / 15, _ = f ? 6 : 5, C = 0, I = (t, r, a) => {
      let n = [];
      for (let u = 0; u < r; u++)
        for (let i = u ? 0 : 1; i * r < t * (r - u); i++) n.push(((e[_ + (C >> 1)] >> ((1 & C++) << 2) & 15) / 7.5 - 1) * a);
      return n
    }, g = I(p, E, (s >> 18 & 31) / 31), T = I(3, 3, 1.25 * ((l >> 3 & 63) / 63)), v = I(3, 3, 1.25 * ((l >> 9 & 63) / 63)), A = f && I(5, 5, h), P = a(e), L = i(P > 1 ? 32 : 32 * P), N = i(P > 1 ? 32 / P : 32), R = new Uint8Array(L * N * 4), y = [], b = [];
    for (let e = 0, a = 0; e < N; e++)
      for (let i = 0; i < L; i++, a += 4) {
        let s = o,
          l = c,
          m = d,
          h = S;
        for (let e = 0, r = n(p, f ? 5 : 3); e < r; e++) y[e] = u(t / L * (i + .5) * e);
        for (let r = 0, a = n(E, f ? 5 : 3); r < a; r++) b[r] = u(t / N * (e + .5) * r);
        for (let e = 0, t = 0; e < E; e++)
          for (let r = e ? 0 : 1, a = 2 * b[e]; r * E < p * (E - e); r++, t++) s += g[t] * y[r] * a;
        for (let e = 0, t = 0; e < 3; e++)
          for (let r = e ? 0 : 1, a = 2 * b[e]; r < 3 - e; r++, t++) {
            let e = y[r] * a;
            l += T[t] * e, m += v[t] * e
          }
        if (f)
          for (let e = 0, t = 0; e < 5; e++)
            for (let r = e ? 0 : 1, a = 2 * b[e]; r < 5 - e; r++, t++) h += A[t] * y[r] * a;
        let _ = s - 2 / 3 * l,
          C = (3 * s - _ + m) / 2,
          I = C - m;
        R[a] = n(0, 255 * r(1, C)), R[a + 1] = n(0, 255 * r(1, I)), R[a + 2] = n(0, 255 * r(1, _)), R[a + 3] = n(0, 255 * r(1, h))
      }
    return {
      w: L,
      h: N,
      rgba: R
    }
  }(e);
  return n(t.w, t.h, t.rgba)
}