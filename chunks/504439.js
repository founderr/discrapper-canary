"use strict";
n.r(t), n.d(t, {
  thumbHashToRGBA: function() {
    return r
  }
}), n("424973"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
var i = n("723251");

function r(e) {
  let {
    detail: t = 1,
    pop: n = 1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
    PI: r,
    min: l,
    max: a,
    cos: s,
    round: o
  } = Math, u = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, d = (63 & u) / 63, f = (u >> 6 & 63) / 31.5 - 1, m = (u >> 12 & 63) / 31.5 - 1, _ = u >> 23, E = c >> 15, T = a(3, E ? _ ? 5 : 7 : 7 & c), I = a(3, E ? 7 & c : _ ? 5 : 7), C = _ ? (15 & e[5]) / 15 : 1, p = (e[5] >> 4) / 15, P = _ ? 6 : 5, S = 0, R = (t, n, i) => {
    let r = [];
    for (let l = 0; l < n; l++)
      for (let a = l ? 0 : 1; a * n < t * (n - l); a++) r.push(((e[P + (S >> 1)] >> ((1 & S++) << 2) & 15) / 7.5 - 1) * i);
    return r
  }, O = R(T, I, (u >> 18 & 31) / 31 / 2), M = R(3, 3, (c >> 3 & 63) / 63 * n), L = R(3, 3, (c >> 9 & 63) / 63 * n), g = _ ? R(5, 5, p) : [], h = (0, i.thumbHashToApproximateAspectRatio)(e), x = o(h > 1 ? 32 : 32 * h), N = o(h > 1 ? 32 / h : 32), A = new Uint8Array(x * N * 4), v = [], U = [];
  for (let e = 0, n = 0; e < N; e++)
    for (let i = 0; i < x; i++, n += 4) {
      let o = d,
        u = f,
        c = m,
        E = C;
      for (let e = 0, t = a(T, _ ? 5 : 3); e < t; e++) v[e] = s(r / x * (i + .5) * e);
      for (let t = 0, n = a(I, _ ? 5 : 3); t < n; t++) U[t] = s(r / N * (e + .5) * t);
      for (let e = 0, n = 0; e < I; e++)
        for (let i = e ? 0 : 1, r = 2 * U[e]; i * I < T * (I - e); i++, n++) !(i > t) && !(e > t) && (o += O[n] * v[i] * r);
      for (let e = 0, t = 0; e < 3; e++)
        for (let n = e ? 0 : 1, i = 2 * U[e]; n < 3 - e; n++, t++) {
          let e = v[n] * i;
          u += M[t] * e, c += L[t] * e
        }
      if (_)
        for (let e = 0, t = 0; e < 5; e++)
          for (let n = e ? 0 : 1, i = 2 * U[e]; n < 5 - e; n++, t++) E += g[t] * v[n] * i;
      let p = o - 2 / 3 * u,
        P = (3 * o - p + c) / 2,
        S = P - c;
      A[n] = a(0, 255 * l(1, P)), A[n + 1] = a(0, 255 * l(1, S)), A[n + 2] = a(0, 255 * l(1, p)), A[n + 3] = a(0, 255 * l(1, E))
    }
  return {
    w: x,
    h: N,
    rgba: A
  }
}