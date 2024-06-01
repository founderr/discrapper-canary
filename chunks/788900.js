"use strict";
l.r(t), l.d(t, {
  rgbaToDataURL: function() {
    return n
  },
  thumbHashToApproximateAspectRatio: function() {
    return a
  },
  thumbHashToDataURL: function() {
    return s
  }
});

function a(e) {
  let t = e[3],
    l = 128 & e[2],
    a = 128 & e[4];
  return (a ? l ? 5 : 7 : 7 & t) / (a ? 7 & t : l ? 5 : 7)
}

function n(e, t, l) {
  let a = 4 * e + 1,
    n = 6 + t * (5 + a),
    s = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, n >>> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 73, 68, 65, 84, 120, 1],
    i = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
    r = 1,
    u = 0;
  for (let e = 0, n = 0, i = a - 1; e < t; e++, i += a - 1)
    for (s.push(e + 1 < t ? 0 : 1, 255 & a, a >> 8, 255 & ~a, a >> 8 ^ 255, 0), u = (u + r) % 65521; n < i; n++) {
      let e = 255 & l[n];
      s.push(e), u = (u + (r = (r + e) % 65521)) % 65521
    }
  for (let [e, t] of(s.push(u >> 8, 255 & u, r >> 8, 255 & r, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
      [12, 29],
      [37, 41 + n]
    ])) {
    let l = -1;
    for (let a = e; a < t; a++) l ^= s[a], l = (l = l >>> 4 ^ i[15 & l]) >>> 4 ^ i[15 & l];
    l = ~l, s[t++] = l >>> 24, s[t++] = l >> 16 & 255, s[t++] = l >> 8 & 255, s[t++] = 255 & l
  }
  return "data:image/png;base64," + btoa(String.fromCharCode(...s))
}

function s(e) {
  let t = function(e) {
    let {
      PI: t,
      min: l,
      max: n,
      cos: s,
      round: i
    } = Math, r = e[0] | e[1] << 8 | e[2] << 16, u = e[3] | e[4] << 8, o = (63 & r) / 63, d = (r >> 6 & 63) / 31.5 - 1, c = (r >> 12 & 63) / 31.5 - 1, f = r >> 23, m = u >> 15, S = n(3, m ? f ? 5 : 7 : 7 & u), E = n(3, m ? 7 & u : f ? 5 : 7), _ = f ? (15 & e[5]) / 15 : 1, h = (e[5] >> 4) / 15, C = f ? 6 : 5, N = 0, g = (t, l, a) => {
      let n = [];
      for (let s = 0; s < l; s++)
        for (let i = s ? 0 : 1; i * l < t * (l - s); i++) n.push(((e[C + (N >> 1)] >> ((1 & N++) << 2) & 15) / 7.5 - 1) * a);
      return n
    }, p = g(S, E, (r >> 18 & 31) / 31), A = g(3, 3, (u >> 3 & 63) / 63 * 1.25), x = g(3, 3, (u >> 9 & 63) / 63 * 1.25), I = f && g(5, 5, h), R = a(e), T = i(R > 1 ? 32 : 32 * R), v = i(R > 1 ? 32 / R : 32), L = new Uint8Array(T * v * 4), M = [], O = [];
    for (let e = 0, a = 0; e < v; e++)
      for (let i = 0; i < T; i++, a += 4) {
        let r = o,
          u = d,
          m = c,
          h = _;
        for (let e = 0, l = n(S, f ? 5 : 3); e < l; e++) M[e] = s(t / T * (i + .5) * e);
        for (let l = 0, a = n(E, f ? 5 : 3); l < a; l++) O[l] = s(t / v * (e + .5) * l);
        for (let e = 0, t = 0; e < E; e++)
          for (let l = e ? 0 : 1, a = 2 * O[e]; l * E < S * (E - e); l++, t++) r += p[t] * M[l] * a;
        for (let e = 0, t = 0; e < 3; e++)
          for (let l = e ? 0 : 1, a = 2 * O[e]; l < 3 - e; l++, t++) {
            let e = M[l] * a;
            u += A[t] * e, m += x[t] * e
          }
        if (f)
          for (let e = 0, t = 0; e < 5; e++)
            for (let l = e ? 0 : 1, a = 2 * O[e]; l < 5 - e; l++, t++) h += I[t] * M[l] * a;
        let C = r - 2 / 3 * u,
          N = (3 * r - C + m) / 2,
          g = N - m;
        L[a] = n(0, 255 * l(1, N)), L[a + 1] = n(0, 255 * l(1, g)), L[a + 2] = n(0, 255 * l(1, C)), L[a + 3] = n(0, 255 * l(1, h))
      }
    return {
      w: T,
      h: v,
      rgba: L
    }
  }(e);
  return n(t.w, t.h, t.rgba)
}