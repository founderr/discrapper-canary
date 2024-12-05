i.d(t, {
    xS: function () {
        return l;
    }
});
function l(e) {
    let t = (function (e) {
        let { PI: t, min: i, max: l, cos: r, round: n } = Math,
            s = e[0] | (e[1] << 8) | (e[2] << 16),
            a = e[3] | (e[4] << 8),
            c = (63 & s) / 63,
            o = ((s >> 6) & 63) / 31.5 - 1,
            d = ((s >> 12) & 63) / 31.5 - 1,
            f = s >> 23,
            u = a >> 15,
            h = l(3, u ? (f ? 5 : 7) : 7 & a),
            x = l(3, u ? 7 & a : f ? 5 : 7),
            p = f ? (15 & e[5]) / 15 : 1,
            g = (e[5] >> 4) / 15,
            m = f ? 6 : 5,
            j = 0,
            v = (t, i, l) => {
                let r = [];
                for (let n = 0; n < i; n++) for (let s = n ? 0 : 1; s * i < t * (i - n); s++) r.push((((e[m + (j >> 1)] >> ((1 & j++) << 2)) & 15) / 7.5 - 1) * l);
                return r;
            },
            C = v(h, x, ((s >> 18) & 31) / 31),
            _ = v(3, 3, (((a >> 3) & 63) / 63) * 1.25),
            w = v(3, 3, (((a >> 9) & 63) / 63) * 1.25),
            y = f && v(5, 5, g),
            Z = (function (e) {
                let t = e[3],
                    i = 128 & e[2],
                    l = 128 & e[4];
                return (l ? (i ? 5 : 7) : 7 & t) / (l ? 7 & t : i ? 5 : 7);
            })(e),
            b = n(Z > 1 ? 32 : 32 * Z),
            S = n(Z > 1 ? 32 / Z : 32),
            I = new Uint8Array(b * S * 4),
            N = [],
            M = [];
        for (let e = 0, n = 0; e < S; e++)
            for (let s = 0; s < b; s++, n += 4) {
                let a = c,
                    u = o,
                    g = d,
                    m = p;
                for (let e = 0, i = l(h, f ? 5 : 3); e < i; e++) N[e] = r((t / b) * (s + 0.5) * e);
                for (let i = 0, n = l(x, f ? 5 : 3); i < n; i++) M[i] = r((t / S) * (e + 0.5) * i);
                for (let e = 0, t = 0; e < x; e++) for (let i = e ? 0 : 1, l = 2 * M[e]; i * x < h * (x - e); i++, t++) a += C[t] * N[i] * l;
                for (let e = 0, t = 0; e < 3; e++)
                    for (let i = e ? 0 : 1, l = 2 * M[e]; i < 3 - e; i++, t++) {
                        let e = N[i] * l;
                        (u += _[t] * e), (g += w[t] * e);
                    }
                if (f) for (let e = 0, t = 0; e < 5; e++) for (let i = e ? 0 : 1, l = 2 * M[e]; i < 5 - e; i++, t++) m += y[t] * N[i] * l;
                let j = a - (2 / 3) * u,
                    v = (3 * a - j + g) / 2,
                    Z = v - g;
                (I[n] = l(0, 255 * i(1, v))), (I[n + 1] = l(0, 255 * i(1, Z))), (I[n + 2] = l(0, 255 * i(1, j))), (I[n + 3] = l(0, 255 * i(1, m)));
            }
        return {
            w: b,
            h: S,
            rgba: I
        };
    })(e);
    return (function (e, t, i) {
        let l = 4 * e + 1,
            r = 6 + t * (5 + l),
            n = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, r >>> 24, (r >> 16) & 255, (r >> 8) & 255, 255 & r, 73, 68, 65, 84, 120, 1],
            s = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
            a = 1,
            c = 0;
        for (let e = 0, r = 0, s = l - 1; e < t; e++, s += l - 1)
            for (n.push(e + 1 < t ? 0 : 1, 255 & l, l >> 8, 255 & ~l, (l >> 8) ^ 255, 0), c = (c + a) % 65521; r < s; r++) {
                let e = 255 & i[r];
                n.push(e), (c = (c + (a = (a + e) % 65521)) % 65521);
            }
        for (let [e, t] of (n.push(c >> 8, 255 & c, a >> 8, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130),
        [
            [12, 29],
            [37, 41 + r]
        ])) {
            let i = -1;
            for (let l = e; l < t; l++) (i ^= n[l]), (i = ((i = (i >>> 4) ^ s[15 & i]) >>> 4) ^ s[15 & i]);
            (i = ~i), (n[t++] = i >>> 24), (n[t++] = (i >> 16) & 255), (n[t++] = (i >> 8) & 255), (n[t++] = 255 & i);
        }
        return 'data:image/png;base64,' + btoa(String.fromCharCode(...n));
    })(t.w, t.h, t.rgba);
}
