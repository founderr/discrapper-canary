"use strict";
n.r(t), n.d(t, {
  thumbHashToApproximateAspectRatio: function() {
    return r
  },
  rgbaToDataURL: function() {
    return s
  },
  thumbHashToDataURL: function() {
    return i
  }
}), n("70102"), n("424973"), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997");

function r(e) {
  let t = e[3],
    n = 128 & e[2],
    r = 128 & e[4];
  return (r ? n ? 5 : 7 : 7 & t) / (r ? 7 & t : n ? 5 : 7)
}

function s(e, t, n) {
  let r = 4 * e + 1,
    s = 6 + t * (5 + r),
    i = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, s >>> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, 73, 68, 65, 84, 120, 1],
    a = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
    l = 1,
    o = 0;
  for (let e = 0, s = 0, a = r - 1; e < t; e++, a += r - 1)
    for (i.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), o = (o + l) % 65521; s < a; s++) {
      let e = 255 & n[s];
      i.push(e), o = (o + (l = (l + e) % 65521)) % 65521
    }
  for (let [e, t] of(i.push(o >> 8, 255 & o, l >> 8, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
      [12, 29],
      [37, 41 + s]
    ])) {
    let n = -1;
    for (let r = e; r < t; r++) n ^= i[r], n = (n = n >>> 4 ^ a[15 & n]) >>> 4 ^ a[15 & n];
    n = ~n, i[t++] = n >>> 24, i[t++] = n >> 16 & 255, i[t++] = n >> 8 & 255, i[t++] = 255 & n
  }
  return "data:image/png;base64," + btoa(String.fromCharCode(...i))
}

function i(e) {
  let t = function(e) {
    let {
      PI: t,
      min: n,
      max: s,
      cos: i,
      round: a
    } = Math, l = e[0] | e[1] << 8 | e[2] << 16, o = e[3] | e[4] << 8, u = (63 & l) / 63, c = (l >> 6 & 63) / 31.5 - 1, d = (l >> 12 & 63) / 31.5 - 1, _ = l >> 23, f = o >> 15, E = s(3, f ? _ ? 5 : 7 : 7 & o), C = s(3, f ? 7 & o : _ ? 5 : 7), I = _ ? (15 & e[5]) / 15 : 1, h = (e[5] >> 4) / 15, p = _ ? 6 : 5, A = 0, R = (t, n, r) => {
      let s = [];
      for (let i = 0; i < n; i++)
        for (let a = i ? 0 : 1; a * n < t * (n - i); a++) s.push(((e[p + (A >> 1)] >> ((1 & A++) << 2) & 15) / 7.5 - 1) * r);
      return s
    }, N = R(E, C, (l >> 18 & 31) / 31), T = R(3, 3, 1.25 * ((o >> 3 & 63) / 63)), m = R(3, 3, 1.25 * ((o >> 9 & 63) / 63)), S = _ && R(5, 5, h), L = r(e), P = a(L > 1 ? 32 : 32 * L), M = a(L > 1 ? 32 / L : 32), g = new Uint8Array(P * M * 4), O = [], v = [];
    for (let e = 0, r = 0; e < M; e++)
      for (let a = 0; a < P; a++, r += 4) {
        let l = u,
          o = c,
          f = d,
          h = I;
        for (let e = 0, n = s(E, _ ? 5 : 3); e < n; e++) O[e] = i(t / P * (a + .5) * e);
        for (let n = 0, r = s(C, _ ? 5 : 3); n < r; n++) v[n] = i(t / M * (e + .5) * n);
        for (let e = 0, t = 0; e < C; e++)
          for (let n = e ? 0 : 1, r = 2 * v[e]; n * C < E * (C - e); n++, t++) l += N[t] * O[n] * r;
        for (let e = 0, t = 0; e < 3; e++)
          for (let n = e ? 0 : 1, r = 2 * v[e]; n < 3 - e; n++, t++) {
            let e = O[n] * r;
            o += T[t] * e, f += m[t] * e
          }
        if (_)
          for (let e = 0, t = 0; e < 5; e++)
            for (let n = e ? 0 : 1, r = 2 * v[e]; n < 5 - e; n++, t++) h += S[t] * O[n] * r;
        let p = l - 2 / 3 * o,
          A = (3 * l - p + f) / 2,
          R = A - f;
        g[r] = s(0, 255 * n(1, A)), g[r + 1] = s(0, 255 * n(1, R)), g[r + 2] = s(0, 255 * n(1, p)), g[r + 3] = s(0, 255 * n(1, h))
      }
    return {
      w: P,
      h: M,
      rgba: g
    }
  }(e);
  return s(t.w, t.h, t.rgba)
}