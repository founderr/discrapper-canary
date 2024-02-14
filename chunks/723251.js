"use strict";
n.r(t), n.d(t, {
  thumbHashToApproximateAspectRatio: function() {
    return r
  },
  rgbaToDataURL: function() {
    return i
  },
  thumbHashToDataURL: function() {
    return a
  }
}), n("70102"), n("424973"), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997");

function r(e) {
  let t = e[3],
    n = 128 & e[2],
    r = 128 & e[4];
  return (r ? n ? 5 : 7 : 7 & t) / (r ? 7 & t : n ? 5 : 7)
}

function i(e, t, n) {
  let r = 4 * e + 1,
    i = 6 + t * (5 + r),
    a = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
    u = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
    l = 1,
    o = 0;
  for (let e = 0, i = 0, u = r - 1; e < t; e++, u += r - 1)
    for (a.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), o = (o + l) % 65521; i < u; i++) {
      let e = 255 & n[i];
      a.push(e), o = (o + (l = (l + e) % 65521)) % 65521
    }
  for (let [e, t] of(a.push(o >> 8, 255 & o, l >> 8, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
      [12, 29],
      [37, 41 + i]
    ])) {
    let n = -1;
    for (let r = e; r < t; r++) n ^= a[r], n = (n = n >>> 4 ^ u[15 & n]) >>> 4 ^ u[15 & n];
    n = ~n, a[t++] = n >>> 24, a[t++] = n >> 16 & 255, a[t++] = n >> 8 & 255, a[t++] = 255 & n
  }
  return "data:image/png;base64," + btoa(String.fromCharCode(...a))
}

function a(e) {
  let t = function(e) {
    let {
      PI: t,
      min: n,
      max: i,
      cos: a,
      round: u
    } = Math, l = e[0] | e[1] << 8 | e[2] << 16, o = e[3] | e[4] << 8, s = (63 & l) / 63, c = (l >> 6 & 63) / 31.5 - 1, d = (l >> 12 & 63) / 31.5 - 1, E = l >> 23, _ = o >> 15, f = i(3, _ ? E ? 5 : 7 : 7 & o), T = i(3, _ ? 7 & o : E ? 5 : 7), A = E ? (15 & e[5]) / 15 : 1, S = (e[5] >> 4) / 15, R = E ? 6 : 5, I = 0, N = (t, n, r) => {
      let i = [];
      for (let a = 0; a < n; a++)
        for (let u = a ? 0 : 1; u * n < t * (n - a); u++) i.push(((e[R + (I >> 1)] >> ((1 & I++) << 2) & 15) / 7.5 - 1) * r);
      return i
    }, p = N(f, T, (l >> 18 & 31) / 31), C = N(3, 3, 1.25 * ((o >> 3 & 63) / 63)), P = N(3, 3, 1.25 * ((o >> 9 & 63) / 63)), U = E && N(5, 5, S), O = r(e), h = u(O > 1 ? 32 : 32 * O), M = u(O > 1 ? 32 / O : 32), m = new Uint8Array(h * M * 4), L = [], D = [];
    for (let e = 0, r = 0; e < M; e++)
      for (let u = 0; u < h; u++, r += 4) {
        let l = s,
          o = c,
          _ = d,
          S = A;
        for (let e = 0, n = i(f, E ? 5 : 3); e < n; e++) L[e] = a(t / h * (u + .5) * e);
        for (let n = 0, r = i(T, E ? 5 : 3); n < r; n++) D[n] = a(t / M * (e + .5) * n);
        for (let e = 0, t = 0; e < T; e++)
          for (let n = e ? 0 : 1, r = 2 * D[e]; n * T < f * (T - e); n++, t++) l += p[t] * L[n] * r;
        for (let e = 0, t = 0; e < 3; e++)
          for (let n = e ? 0 : 1, r = 2 * D[e]; n < 3 - e; n++, t++) {
            let e = L[n] * r;
            o += C[t] * e, _ += P[t] * e
          }
        if (E)
          for (let e = 0, t = 0; e < 5; e++)
            for (let n = e ? 0 : 1, r = 2 * D[e]; n < 5 - e; n++, t++) S += U[t] * L[n] * r;
        let R = l - 2 / 3 * o,
          I = (3 * l - R + _) / 2,
          N = I - _;
        m[r] = i(0, 255 * n(1, I)), m[r + 1] = i(0, 255 * n(1, N)), m[r + 2] = i(0, 255 * n(1, R)), m[r + 3] = i(0, 255 * n(1, S))
      }
    return {
      w: h,
      h: M,
      rgba: m
    }
  }(e);
  return i(t.w, t.h, t.rgba)
}