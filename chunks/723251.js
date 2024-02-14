"use strict";
r.r(t), r.d(t, {
  thumbHashToApproximateAspectRatio: function() {
    return n
  },
  rgbaToDataURL: function() {
    return a
  },
  thumbHashToDataURL: function() {
    return u
  }
}), r("70102"), r("424973"), r("222007"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("101997");

function n(e) {
  let t = e[3],
    r = 128 & e[2],
    n = 128 & e[4];
  return (n ? r ? 5 : 7 : 7 & t) / (n ? 7 & t : r ? 5 : 7)
}

function a(e, t, r) {
  let n = 4 * e + 1,
    a = 6 + t * (5 + n),
    u = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, a >>> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 73, 68, 65, 84, 120, 1],
    i = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
    s = 1,
    l = 0;
  for (let e = 0, a = 0, i = n - 1; e < t; e++, i += n - 1)
    for (u.push(e + 1 < t ? 0 : 1, 255 & n, n >> 8, 255 & ~n, n >> 8 ^ 255, 0), l = (l + s) % 65521; a < i; a++) {
      let e = 255 & r[a];
      u.push(e), l = (l + (s = (s + e) % 65521)) % 65521
    }
  for (let [e, t] of(u.push(l >> 8, 255 & l, s >> 8, 255 & s, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
      [12, 29],
      [37, 41 + a]
    ])) {
    let r = -1;
    for (let n = e; n < t; n++) r ^= u[n], r = (r = r >>> 4 ^ i[15 & r]) >>> 4 ^ i[15 & r];
    r = ~r, u[t++] = r >>> 24, u[t++] = r >> 16 & 255, u[t++] = r >> 8 & 255, u[t++] = 255 & r
  }
  return "data:image/png;base64," + btoa(String.fromCharCode(...u))
}

function u(e) {
  let t = function(e) {
    let {
      PI: t,
      min: r,
      max: a,
      cos: u,
      round: i
    } = Math, s = e[0] | e[1] << 8 | e[2] << 16, l = e[3] | e[4] << 8, o = (63 & s) / 63, c = (s >> 6 & 63) / 31.5 - 1, d = (s >> 12 & 63) / 31.5 - 1, f = s >> 23, m = l >> 15, p = a(3, m ? f ? 5 : 7 : 7 & l), E = a(3, m ? 7 & l : f ? 5 : 7), S = f ? (15 & e[5]) / 15 : 1, h = (e[5] >> 4) / 15, _ = f ? 6 : 5, C = 0, I = (t, r, n) => {
      let a = [];
      for (let u = 0; u < r; u++)
        for (let i = u ? 0 : 1; i * r < t * (r - u); i++) a.push(((e[_ + (C >> 1)] >> ((1 & C++) << 2) & 15) / 7.5 - 1) * n);
      return a
    }, T = I(p, E, (s >> 18 & 31) / 31), g = I(3, 3, 1.25 * ((l >> 3 & 63) / 63)), v = I(3, 3, 1.25 * ((l >> 9 & 63) / 63)), N = f && I(5, 5, h), A = n(e), P = i(A > 1 ? 32 : 32 * A), R = i(A > 1 ? 32 / A : 32), L = new Uint8Array(P * R * 4), y = [], x = [];
    for (let e = 0, n = 0; e < R; e++)
      for (let i = 0; i < P; i++, n += 4) {
        let s = o,
          l = c,
          m = d,
          h = S;
        for (let e = 0, r = a(p, f ? 5 : 3); e < r; e++) y[e] = u(t / P * (i + .5) * e);
        for (let r = 0, n = a(E, f ? 5 : 3); r < n; r++) x[r] = u(t / R * (e + .5) * r);
        for (let e = 0, t = 0; e < E; e++)
          for (let r = e ? 0 : 1, n = 2 * x[e]; r * E < p * (E - e); r++, t++) s += T[t] * y[r] * n;
        for (let e = 0, t = 0; e < 3; e++)
          for (let r = e ? 0 : 1, n = 2 * x[e]; r < 3 - e; r++, t++) {
            let e = y[r] * n;
            l += g[t] * e, m += v[t] * e
          }
        if (f)
          for (let e = 0, t = 0; e < 5; e++)
            for (let r = e ? 0 : 1, n = 2 * x[e]; r < 5 - e; r++, t++) h += N[t] * y[r] * n;
        let _ = s - 2 / 3 * l,
          C = (3 * s - _ + m) / 2,
          I = C - m;
        L[n] = a(0, 255 * r(1, C)), L[n + 1] = a(0, 255 * r(1, I)), L[n + 2] = a(0, 255 * r(1, _)), L[n + 3] = a(0, 255 * r(1, h))
      }
    return {
      w: P,
      h: R,
      rgba: L
    }
  }(e);
  return a(t.w, t.h, t.rgba)
}