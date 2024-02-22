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
    l = 1,
    s = 0;
  for (let e = 0, n = 0, i = a - 1; e < t; e++, i += a - 1)
    for (u.push(e + 1 < t ? 0 : 1, 255 & a, a >> 8, 255 & ~a, a >> 8 ^ 255, 0), s = (s + l) % 65521; n < i; n++) {
      let e = 255 & r[n];
      u.push(e), s = (s + (l = (l + e) % 65521)) % 65521
    }
  for (let [e, t] of(u.push(s >> 8, 255 & s, l >> 8, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
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
    } = Math, l = e[0] | e[1] << 8 | e[2] << 16, s = e[3] | e[4] << 8, o = (63 & l) / 63, c = (l >> 6 & 63) / 31.5 - 1, d = (l >> 12 & 63) / 31.5 - 1, f = l >> 23, E = s >> 15, m = n(3, E ? f ? 5 : 7 : 7 & s), p = n(3, E ? 7 & s : f ? 5 : 7), S = f ? (15 & e[5]) / 15 : 1, C = (e[5] >> 4) / 15, h = f ? 6 : 5, I = 0, _ = (t, r, a) => {
      let n = [];
      for (let u = 0; u < r; u++)
        for (let i = u ? 0 : 1; i * r < t * (r - u); i++) n.push(((e[h + (I >> 1)] >> ((1 & I++) << 2) & 15) / 7.5 - 1) * a);
      return n
    }, g = _(m, p, (l >> 18 & 31) / 31), T = _(3, 3, 1.25 * ((s >> 3 & 63) / 63)), v = _(3, 3, 1.25 * ((s >> 9 & 63) / 63)), A = f && _(5, 5, C), P = a(e), R = i(P > 1 ? 32 : 32 * P), L = i(P > 1 ? 32 / P : 32), y = new Uint8Array(R * L * 4), N = [], O = [];
    for (let e = 0, a = 0; e < L; e++)
      for (let i = 0; i < R; i++, a += 4) {
        let l = o,
          s = c,
          E = d,
          C = S;
        for (let e = 0, r = n(m, f ? 5 : 3); e < r; e++) N[e] = u(t / R * (i + .5) * e);
        for (let r = 0, a = n(p, f ? 5 : 3); r < a; r++) O[r] = u(t / L * (e + .5) * r);
        for (let e = 0, t = 0; e < p; e++)
          for (let r = e ? 0 : 1, a = 2 * O[e]; r * p < m * (p - e); r++, t++) l += g[t] * N[r] * a;
        for (let e = 0, t = 0; e < 3; e++)
          for (let r = e ? 0 : 1, a = 2 * O[e]; r < 3 - e; r++, t++) {
            let e = N[r] * a;
            s += T[t] * e, E += v[t] * e
          }
        if (f)
          for (let e = 0, t = 0; e < 5; e++)
            for (let r = e ? 0 : 1, a = 2 * O[e]; r < 5 - e; r++, t++) C += A[t] * N[r] * a;
        let h = l - 2 / 3 * s,
          I = (3 * l - h + E) / 2,
          _ = I - E;
        y[a] = n(0, 255 * r(1, I)), y[a + 1] = n(0, 255 * r(1, _)), y[a + 2] = n(0, 255 * r(1, h)), y[a + 3] = n(0, 255 * r(1, C))
      }
    return {
      w: R,
      h: L,
      rgba: y
    }
  }(e);
  return n(t.w, t.h, t.rgba)
}