    "use strict";
    r.r(t), r.d(t, {
      createThumbhashImageFromPlaceholder: function() {
        return o
      }
    }), r("518263"), r("970173"), r("520712"), r("268111"), r("941497"), r("32026"), r("480839"), r("744285"), r("492257"), r("873817"), r("863942"), r("642549"), r("653041");
    var n = r("788900");

    function o(e) {
      let t = function(e) {
        let {
          detail: t = 1,
          pop: r = 1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
          PI: o,
          min: i,
          max: u,
          cos: a,
          round: f
        } = Math, c = e[0] | e[1] << 8 | e[2] << 16, l = e[3] | e[4] << 8, s = (63 & c) / 63, p = (c >> 6 & 63) / 31.5 - 1, d = (c >> 12 & 63) / 31.5 - 1, h = c >> 23, b = l >> 15, v = u(3, b ? h ? 5 : 7 : 7 & l), m = u(3, b ? 7 & l : h ? 5 : 7), g = h ? (15 & e[5]) / 15 : 1, y = (e[5] >> 4) / 15, O = h ? 6 : 5, j = 0, x = (t, r, n) => {
          let o = [];
          for (let i = 0; i < r; i++)
            for (let u = i ? 0 : 1; u * r < t * (r - i); u++) o.push(((e[O + (j >> 1)] >> ((1 & j++) << 2) & 15) / 7.5 - 1) * n);
          return o
        }, w = x(v, m, (c >> 18 & 31) / 31 / 2), P = x(3, 3, (l >> 3 & 63) / 63 * r), T = x(3, 3, (l >> 9 & 63) / 63 * r), k = h ? x(5, 5, y) : [], S = (0, n.thumbHashToApproximateAspectRatio)(e), _ = f(S > 1 ? 32 : 32 * S), A = f(S > 1 ? 32 / S : 32), M = new Uint8Array(_ * A * 4), C = [], F = [];
        for (let e = 0, r = 0; e < A; e++)
          for (let n = 0; n < _; n++, r += 4) {
            let f = s,
              c = p,
              l = d,
              b = g;
            for (let e = 0, t = u(v, h ? 5 : 3); e < t; e++) C[e] = a(o / _ * (n + .5) * e);
            for (let t = 0, r = u(m, h ? 5 : 3); t < r; t++) F[t] = a(o / A * (e + .5) * t);
            for (let e = 0, r = 0; e < m; e++)
              for (let n = e ? 0 : 1, o = 2 * F[e]; n * m < v * (m - e); n++, r++) !(n > t) && !(e > t) && (f += w[r] * C[n] * o);
            for (let e = 0, t = 0; e < 3; e++)
              for (let r = e ? 0 : 1, n = 2 * F[e]; r < 3 - e; r++, t++) {
                let e = C[r] * n;
                c += P[t] * e, l += T[t] * e
              }
            if (h)
              for (let e = 0, t = 0; e < 5; e++)
                for (let r = e ? 0 : 1, n = 2 * F[e]; r < 5 - e; r++, t++) b += k[t] * C[r] * n;
            let y = f - 2 / 3 * c,
              O = (3 * f - y + l) / 2,
              j = O - l;
            M[r] = u(0, 255 * i(1, O)), M[r + 1] = u(0, 255 * i(1, j)), M[r + 2] = u(0, 255 * i(1, y)), M[r + 3] = u(0, 255 * i(1, b))
          }
        return {
          w: _,
          h: A,
          rgba: M
        }
      }(Uint8Array.from(atob(e), e => e.charCodeAt(0)), {
        detail: 1,
        pop: 1.1
      });
      return (0, n.rgbaToDataURL)(t.w, t.h, t.rgba)
    }