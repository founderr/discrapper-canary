var n, i, o, a;
r(444675),
    (i = {}),
    (t.exports = i),
    (n = r(457854)),
    (o = i),
    (a = n),
    (o.toRGBA8 = function (t) {
        var e = t.width,
            r = t.height;
        if (null == t.tabs.acTL) return [o.toRGBA8.decodeImage(t.data, e, r, t).buffer];
        var n = [];
        null == t.frames[0].data && (t.frames[0].data = t.data);
        for (var i, a = new Uint8Array(e * r * 4), s = 0; s < t.frames.length; s++) {
            var u = t.frames[s],
                c = u.rect.x,
                l = u.rect.y,
                h = u.rect.width,
                f = u.rect.height,
                p = o.toRGBA8.decodeImage(u.data, h, f, t);
            if ((0 == s ? (i = p) : 0 == u.blend ? o._copyTile(p, h, f, i, e, r, c, l, 0) : 1 == u.blend && o._copyTile(p, h, f, i, e, r, c, l, 1), n.push(i.buffer), (i = i.slice(0)), 0 == u.dispose));
            else if (1 == u.dispose) o._copyTile(a, h, f, i, e, r, c, l, 0);
            else if (2 == u.dispose) {
                for (var d = s - 1; 2 == t.frames[d].dispose; ) d--;
                i = new Uint8Array(n[d]).slice(0);
            }
        }
        return n;
    }),
    (o.toRGBA8.decodeImage = function (t, e, r, n) {
        var i = e * r,
            a = Math.ceil((e * o.decode._getBPP(n)) / 8),
            s = new Uint8Array(4 * i),
            u = new Uint32Array(s.buffer),
            c = n.ctype,
            l = n.depth,
            h = o._bin.readUshort;
        if (6 == c) {
            var f = i << 2;
            if (8 == l) for (var p = 0; p < f; p++) s[p] = t[p];
            if (16 == l) for (var p = 0; p < f; p++) s[p] = t[p << 1];
        } else if (2 == c) {
            var d = n.tabs.tRNS,
                m = -1,
                v = -1,
                g = -1;
            if ((d && ((m = d[0]), (v = d[1]), (g = d[2])), 8 == l))
                for (var p = 0; p < i; p++) {
                    var y = p << 2,
                        b = 3 * p;
                    (s[y] = t[b]), (s[y + 1] = t[b + 1]), (s[y + 2] = t[b + 2]), (s[y + 3] = 255), -1 != m && t[b] == m && t[b + 1] == v && t[b + 2] == g && (s[y + 3] = 0);
                }
            if (16 == l)
                for (var p = 0; p < i; p++) {
                    var y = p << 2,
                        b = 6 * p;
                    (s[y] = t[b]), (s[y + 1] = t[b + 2]), (s[y + 2] = t[b + 4]), (s[y + 3] = 255), -1 != m && h(t, b) == m && h(t, b + 2) == v && h(t, b + 4) == g && (s[y + 3] = 0);
                }
        } else if (3 == c) {
            var E = n.tabs.PLTE,
                T = n.tabs.tRNS,
                _ = T ? T.length : 0;
            if (1 == l)
                for (var A = 0; A < r; A++) {
                    for (var L = A * a, I = A * e, p = 0; p < e; p++) {
                        var y = (I + p) << 2,
                            S = (t[L + (p >> 3)] >> (7 - ((7 & p) << 0))) & 1,
                            w = 3 * S;
                        (s[y] = E[w]), (s[y + 1] = E[w + 1]), (s[y + 2] = E[w + 2]), (s[y + 3] = S < _ ? T[S] : 255);
                    }
                }
            if (2 == l)
                for (var A = 0; A < r; A++) {
                    for (var L = A * a, I = A * e, p = 0; p < e; p++) {
                        var y = (I + p) << 2,
                            S = (t[L + (p >> 2)] >> (6 - ((3 & p) << 1))) & 3,
                            w = 3 * S;
                        (s[y] = E[w]), (s[y + 1] = E[w + 1]), (s[y + 2] = E[w + 2]), (s[y + 3] = S < _ ? T[S] : 255);
                    }
                }
            if (4 == l)
                for (var A = 0; A < r; A++) {
                    for (var L = A * a, I = A * e, p = 0; p < e; p++) {
                        var y = (I + p) << 2,
                            S = (t[L + (p >> 1)] >> (4 - ((1 & p) << 2))) & 15,
                            w = 3 * S;
                        (s[y] = E[w]), (s[y + 1] = E[w + 1]), (s[y + 2] = E[w + 2]), (s[y + 3] = S < _ ? T[S] : 255);
                    }
                }
            if (8 == l)
                for (var p = 0; p < i; p++) {
                    var y = p << 2,
                        S = t[p],
                        w = 3 * S;
                    (s[y] = E[w]), (s[y + 1] = E[w + 1]), (s[y + 2] = E[w + 2]), (s[y + 3] = S < _ ? T[S] : 255);
                }
        } else if (4 == c) {
            if (8 == l)
                for (var p = 0; p < i; p++) {
                    var y = p << 2,
                        H = p << 1,
                        N = t[H];
                    (s[y] = N), (s[y + 1] = N), (s[y + 2] = N), (s[y + 3] = t[H + 1]);
                }
            if (16 == l)
                for (var p = 0; p < i; p++) {
                    var y = p << 2,
                        H = p << 2,
                        N = t[H];
                    (s[y] = N), (s[y + 1] = N), (s[y + 2] = N), (s[y + 3] = t[H + 2]);
                }
        } else if (0 == c) {
            var m = n.tabs.tRNS ? n.tabs.tRNS : -1;
            if (1 == l)
                for (var p = 0; p < i; p++) {
                    var N = 255 * ((t[p >> 3] >> (7 - (7 & p))) & 1),
                        P = N == 255 * m ? 0 : 255;
                    u[p] = (P << 24) | (N << 16) | (N << 8) | N;
                }
            if (2 == l)
                for (var p = 0; p < i; p++) {
                    var N = 85 * ((t[p >> 2] >> (6 - ((3 & p) << 1))) & 3),
                        P = N == 85 * m ? 0 : 255;
                    u[p] = (P << 24) | (N << 16) | (N << 8) | N;
                }
            if (4 == l)
                for (var p = 0; p < i; p++) {
                    var N = 17 * ((t[p >> 1] >> (4 - ((1 & p) << 2))) & 15),
                        P = N == 17 * m ? 0 : 255;
                    u[p] = (P << 24) | (N << 16) | (N << 8) | N;
                }
            if (8 == l)
                for (var p = 0; p < i; p++) {
                    var N = t[p],
                        P = N == m ? 0 : 255;
                    u[p] = (P << 24) | (N << 16) | (N << 8) | N;
                }
            if (16 == l)
                for (var p = 0; p < i; p++) {
                    var N = t[p << 1],
                        P = h(t, p << 1) == m ? 0 : 255;
                    u[p] = (P << 24) | (N << 16) | (N << 8) | N;
                }
        }
        return s;
    }),
    (o.decode = function (t) {
        for (
            var e = new Uint8Array(t),
                r = 8,
                n = o._bin,
                i = n.readUshort,
                a = n.readUint,
                s = {
                    tabs: {},
                    frames: []
                },
                u = new Uint8Array(e.length),
                c = 0,
                l,
                h = 0,
                f = [137, 80, 78, 71, 13, 10, 26, 10],
                p = 0;
            p < 8;
            p++
        )
            if (e[p] != f[p]) throw 'The input is not a PNG file!';
        for (; r < e.length; ) {
            var d = n.readUint(e, r);
            r += 4;
            var m = n.readASCII(e, r, 4);
            if (((r += 4), 'IHDR' == m)) o.decode._IHDR(e, r, s);
            else if ('IDAT' == m) {
                for (var p = 0; p < d; p++) u[c + p] = e[r + p];
                c += d;
            } else if ('acTL' == m)
                (s.tabs[m] = {
                    num_frames: a(e, r),
                    num_plays: a(e, r + 4)
                }),
                    (l = new Uint8Array(e.length));
            else if ('fcTL' == m) {
                if (0 != h) {
                    var v = s.frames[s.frames.length - 1];
                    (v.data = o.decode._decompress(s, l.slice(0, h), v.rect.width, v.rect.height)), (h = 0);
                }
                var g = {
                        x: a(e, r + 12),
                        y: a(e, r + 16),
                        width: a(e, r + 4),
                        height: a(e, r + 8)
                    },
                    y = i(e, r + 22),
                    b = {
                        rect: g,
                        delay: Math.round(1000 * (y = i(e, r + 20) / (0 == y ? 100 : y))),
                        dispose: e[r + 24],
                        blend: e[r + 25]
                    };
                s.frames.push(b);
            } else if ('fdAT' == m) {
                for (var p = 0; p < d - 4; p++) l[h + p] = e[r + p + 4];
                h += d - 4;
            } else if ('pHYs' == m) s.tabs[m] = [n.readUint(e, r), n.readUint(e, r + 4), e[r + 8]];
            else if ('cHRM' == m) {
                s.tabs[m] = [];
                for (var p = 0; p < 8; p++) s.tabs[m].push(n.readUint(e, r + 4 * p));
            } else if ('tEXt' == m) {
                null == s.tabs[m] && (s.tabs[m] = {});
                var E = n.nextZero(e, r),
                    T = n.readASCII(e, r, E - r),
                    _ = n.readASCII(e, E + 1, r + d - E - 1);
                s.tabs[m][T] = _;
            } else if ('iTXt' == m) {
                null == s.tabs[m] && (s.tabs[m] = {});
                var E = 0,
                    A = r;
                E = n.nextZero(e, A);
                var T = n.readASCII(e, A, E - A);
                e[(A = E + 1)], e[A + 1], (A += 2), (E = n.nextZero(e, A)), n.readASCII(e, A, E - A), (A = E + 1), (E = n.nextZero(e, A)), n.readUTF8(e, A, E - A), (A = E + 1);
                var _ = n.readUTF8(e, A, d - (A - r));
                s.tabs[m][T] = _;
            } else if ('PLTE' == m) s.tabs[m] = n.readBytes(e, r, d);
            else if ('hIST' == m) {
                var L = s.tabs.PLTE.length / 3;
                s.tabs[m] = [];
                for (var p = 0; p < L; p++) s.tabs[m].push(i(e, r + 2 * p));
            } else if ('tRNS' == m) 3 == s.ctype ? (s.tabs[m] = n.readBytes(e, r, d)) : 0 == s.ctype ? (s.tabs[m] = i(e, r)) : 2 == s.ctype && (s.tabs[m] = [i(e, r), i(e, r + 2), i(e, r + 4)]);
            else if ('gAMA' == m) s.tabs[m] = n.readUint(e, r) / 100000;
            else if ('sRGB' == m) s.tabs[m] = e[r];
            else if ('bKGD' == m) 0 == s.ctype || 4 == s.ctype ? (s.tabs[m] = [i(e, r)]) : 2 == s.ctype || 6 == s.ctype ? (s.tabs[m] = [i(e, r), i(e, r + 2), i(e, r + 4)]) : 3 == s.ctype && (s.tabs[m] = e[r]);
            else if ('IEND' == m) {
                if (0 != h) {
                    var v = s.frames[s.frames.length - 1];
                    (v.data = o.decode._decompress(s, l.slice(0, h), v.rect.width, v.rect.height)), (h = 0);
                }
                s.data = o.decode._decompress(s, u, s.width, s.height);
                break;
            }
            (r += d), n.readUint(e, r), (r += 4);
        }
        return delete s.compress, delete s.interlace, delete s.filter, s;
    }),
    (o.decode._decompress = function (t, e, r, n) {
        return 0 == t.compress && (e = o.decode._inflate(e)), 0 == t.interlace ? (e = o.decode._filterZero(e, t, 0, r, n)) : 1 == t.interlace && (e = o.decode._readInterlace(e, t)), e;
    }),
    (o.decode._inflate = function (t) {
        return a.inflate(t);
    }),
    (o.decode._readInterlace = function (t, e) {
        for (var r = e.width, n = e.height, i = o.decode._getBPP(e), a = i >> 3, s = Math.ceil((r * i) / 8), u = new Uint8Array(n * s), c = 0, l = [0, 0, 4, 0, 2, 0, 1], h = [0, 4, 0, 2, 0, 1, 0], f = [8, 8, 8, 4, 4, 2, 2], p = [8, 8, 4, 4, 2, 2, 1], d = 0; d < 7; ) {
            for (var m = f[d], v = p[d], g = 0, y = 0, b = l[d]; b < n; ) (b += m), y++;
            for (var E = h[d]; E < r; ) (E += v), g++;
            var T = Math.ceil((g * i) / 8);
            o.decode._filterZero(t, e, c, g, y);
            for (var _ = 0, A = l[d]; A < n; ) {
                for (var L = h[d], I = (c + _ * T) << 3; L < r; ) {
                    if (1 == i) {
                        var S = t[I >> 3];
                        (S = (S >> (7 - (7 & I))) & 1), (u[A * s + (L >> 3)] |= S << (7 - ((3 & L) << 0)));
                    }
                    if (2 == i) {
                        var S = t[I >> 3];
                        (S = (S >> (6 - (7 & I))) & 3), (u[A * s + (L >> 2)] |= S << (6 - ((3 & L) << 1)));
                    }
                    if (4 == i) {
                        var S = t[I >> 3];
                        (S = (S >> (4 - (7 & I))) & 15), (u[A * s + (L >> 1)] |= S << (4 - ((1 & L) << 2)));
                    }
                    if (i >= 8) {
                        for (var w = A * s + L * a, H = 0; H < a; H++) u[w + H] = t[(I >> 3) + H];
                    }
                    (I += i), (L += v);
                }
                _++, (A += m);
            }
            g * y != 0 && (c += y * (1 + T)), (d += 1);
        }
        return u;
    }),
    (o.decode._getBPP = function (t) {
        return [1, null, 3, 1, 2, null, 4][t.ctype] * t.depth;
    }),
    (o.decode._filterZero = function (t, e, r, n, i) {
        var a = o.decode._getBPP(e),
            s = Math.ceil((n * a) / 8),
            u = o.decode._paeth;
        a = Math.ceil(a / 8);
        for (var c = 0; c < i; c++) {
            var l = r + c * s,
                h = l + c + 1,
                f = t[h - 1];
            if (0 == f) for (var p = 0; p < s; p++) t[l + p] = t[h + p];
            else if (1 == f) {
                for (var p = 0; p < a; p++) t[l + p] = t[h + p];
                for (var p = a; p < s; p++) t[l + p] = (t[h + p] + t[l + p - a]) & 255;
            } else if (0 == c) {
                for (var p = 0; p < a; p++) t[l + p] = t[h + p];
                if (2 == f) for (var p = a; p < s; p++) t[l + p] = 255 & t[h + p];
                if (3 == f) for (var p = a; p < s; p++) t[l + p] = (t[h + p] + (t[l + p - a] >> 1)) & 255;
                if (4 == f) for (var p = a; p < s; p++) t[l + p] = (t[h + p] + u(t[l + p - a], 0, 0)) & 255;
            } else {
                if (2 == f) for (var p = 0; p < s; p++) t[l + p] = (t[h + p] + t[l + p - s]) & 255;
                if (3 == f) {
                    for (var p = 0; p < a; p++) t[l + p] = (t[h + p] + (t[l + p - s] >> 1)) & 255;
                    for (var p = a; p < s; p++) t[l + p] = (t[h + p] + ((t[l + p - s] + t[l + p - a]) >> 1)) & 255;
                }
                if (4 == f) {
                    for (var p = 0; p < a; p++) t[l + p] = (t[h + p] + u(0, t[l + p - s], 0)) & 255;
                    for (var p = a; p < s; p++) t[l + p] = (t[h + p] + u(t[l + p - a], t[l + p - s], t[l + p - a - s])) & 255;
                }
            }
        }
        return t;
    }),
    (o.decode._paeth = function (t, e, r) {
        var n = t + e - r,
            i = Math.abs(n - t),
            o = Math.abs(n - e),
            a = Math.abs(n - r);
        return i <= o && i <= a ? t : o <= a ? e : r;
    }),
    (o.decode._IHDR = function (t, e, r) {
        var n = o._bin;
        (r.width = n.readUint(t, e)), (e += 4), (r.height = n.readUint(t, e)), (e += 4), (r.depth = t[e]), e++, (r.ctype = t[e]), e++, (r.compress = t[e]), e++, (r.filter = t[e]), e++, (r.interlace = t[e]), e++;
    }),
    (o._bin = {
        nextZero: function (t, e) {
            for (; 0 != t[e]; ) e++;
            return e;
        },
        readUshort: function (t, e) {
            return (t[e] << 8) | t[e + 1];
        },
        writeUshort: function (t, e, r) {
            (t[e] = (r >> 8) & 255), (t[e + 1] = 255 & r);
        },
        readUint: function (t, e) {
            return 16777216 * t[e] + ((t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]);
        },
        writeUint: function (t, e, r) {
            (t[e] = (r >> 24) & 255), (t[e + 1] = (r >> 16) & 255), (t[e + 2] = (r >> 8) & 255), (t[e + 3] = 255 & r);
        },
        readASCII: function (t, e, r) {
            for (var n = '', i = 0; i < r; i++) n += String.fromCharCode(t[e + i]);
            return n;
        },
        writeASCII: function (t, e, r) {
            for (var n = 0; n < r.length; n++) t[e + n] = r.charCodeAt(n);
        },
        readBytes: function (t, e, r) {
            for (var n = [], i = 0; i < r; i++) n.push(t[e + i]);
            return n;
        },
        pad: function (t) {
            return t.length < 2 ? '0' + t : t;
        },
        readUTF8: function (t, e, r) {
            for (var n, i = '', a = 0; a < r; a++) i += '%' + o._bin.pad(t[e + a].toString(16));
            try {
                n = decodeURIComponent(i);
            } catch (n) {
                return o._bin.readASCII(t, e, r);
            }
            return n;
        }
    }),
    (o._copyTile = function (t, e, r, n, i, o, a, s, u) {
        for (var c = Math.min(e, i), l = Math.min(r, o), h = 0, f = 0, p = 0; p < l; p++)
            for (var d = 0; d < c; d++)
                if ((a >= 0 && s >= 0 ? ((h = (p * e + d) << 2), (f = ((s + p) * i + a + d) << 2)) : ((h = ((-s + p) * e - a + d) << 2), (f = (p * i + d) << 2)), 0 == u)) (n[f] = t[h]), (n[f + 1] = t[h + 1]), (n[f + 2] = t[h + 2]), (n[f + 3] = t[h + 3]);
                else if (1 == u) {
                    var m = t[h + 3] * (1 / 255),
                        v = t[h] * m,
                        g = t[h + 1] * m,
                        y = t[h + 2] * m,
                        b = n[f + 3] * (1 / 255),
                        E = n[f] * b,
                        T = n[f + 1] * b,
                        _ = n[f + 2] * b,
                        A = 1 - m,
                        L = m + b * A,
                        I = 0 == L ? 0 : 1 / L;
                    (n[f + 3] = 255 * L), (n[f + 0] = (v + E * A) * I), (n[f + 1] = (g + T * A) * I), (n[f + 2] = (y + _ * A) * I);
                } else if (2 == u) {
                    var m = t[h + 3],
                        v = t[h],
                        g = t[h + 1],
                        y = t[h + 2],
                        b = n[f + 3],
                        E = n[f],
                        T = n[f + 1],
                        _ = n[f + 2];
                    m == b && v == E && g == T && y == _ ? ((n[f] = 0), (n[f + 1] = 0), (n[f + 2] = 0), (n[f + 3] = 0)) : ((n[f] = v), (n[f + 1] = g), (n[f + 2] = y), (n[f + 3] = m));
                } else if (3 == u) {
                    var m = t[h + 3],
                        v = t[h],
                        g = t[h + 1],
                        y = t[h + 2],
                        b = n[f + 3],
                        E = n[f],
                        T = n[f + 1],
                        _ = n[f + 2];
                    if (m == b && v == E && g == T && y == _) continue;
                    if (m < 220 && b > 20) return !1;
                }
        return !0;
    }),
    (o.encode = function (t, e, r, n, i, a) {
        null == n && (n = 0), null == a && (a = !1);
        for (var s = new Uint8Array(t[0].byteLength * t.length + 100), u = [137, 80, 78, 71, 13, 10, 26, 10], c = 0; c < 8; c++) s[c] = u[c];
        var l = 8,
            h = o._bin,
            f = o.crc.crc,
            p = h.writeUint,
            d = h.writeUshort,
            m = h.writeASCII,
            v = o.encode.compressPNG(t, e, r, n, a);
        p(s, l, 13), m(s, (l += 4), 'IHDR'), p(s, (l += 4), e), p(s, (l += 4), r), (s[(l += 4)] = v.depth), (s[++l] = v.ctype), (s[++l] = 0), (s[++l] = 0), (s[++l] = 0), p(s, ++l, f(s, l - 17, 17)), p(s, (l += 4), 1), m(s, (l += 4), 'sRGB'), (s[(l += 4)] = 1), p(s, ++l, f(s, l - 5, 5)), (l += 4);
        var g = t.length > 1;
        if ((g && (p(s, l, 8), m(s, (l += 4), 'acTL'), p(s, (l += 4), t.length), p(s, (l += 4), 0), p(s, (l += 4), f(s, l - 12, 12)), (l += 4)), 3 == v.ctype)) {
            var y = v.plte.length;
            p(s, l, 3 * y), m(s, (l += 4), 'PLTE'), (l += 4);
            for (var c = 0; c < y; c++) {
                var b = 3 * c,
                    E = v.plte[c],
                    T = 255 & E,
                    _ = (E >> 8) & 255,
                    A = (E >> 16) & 255;
                (s[l + b + 0] = T), (s[l + b + 1] = _), (s[l + b + 2] = A);
            }
            if ((p(s, (l += 3 * y), f(s, l - 3 * y - 4, 3 * y + 4)), (l += 4), v.gotAlpha)) {
                p(s, l, y), m(s, (l += 4), 'tRNS'), (l += 4);
                for (var c = 0; c < y; c++) s[l + c] = (v.plte[c] >> 24) & 255;
                p(s, (l += y), f(s, l - y - 4, y + 4)), (l += 4);
            }
        }
        for (var L = 0, I = 0; I < v.frames.length; I++) {
            var S = v.frames[I];
            g && (p(s, l, 26), m(s, (l += 4), 'fcTL'), p(s, (l += 4), L++), p(s, (l += 4), S.rect.width), p(s, (l += 4), S.rect.height), p(s, (l += 4), S.rect.x), p(s, (l += 4), S.rect.y), d(s, (l += 4), i[I]), d(s, (l += 2), 1000), (s[(l += 2)] = S.dispose), (s[++l] = S.blend), p(s, ++l, f(s, l - 30, 30)), (l += 4));
            var w = S.cimg,
                y = w.length;
            p(s, l, y + (0 == I ? 0 : 4));
            var H = (l += 4);
            m(s, l, 0 == I ? 'IDAT' : 'fdAT'), (l += 4), 0 != I && (p(s, l, L++), (l += 4));
            for (var c = 0; c < y; c++) s[l + c] = w[c];
            p(s, (l += y), f(s, H, l - H)), (l += 4);
        }
        return p(s, l, 0), m(s, (l += 4), 'IEND'), p(s, (l += 4), f(s, l - 4, 4)), (l += 4), s.buffer.slice(0, l);
    }),
    (o.encode.compressPNG = function (t, e, r, n, i) {
        for (var a = o.encode.compress(t, e, r, n, !1, i), s = 0; s < t.length; s++) {
            var u = a.frames[s],
                c = (u.rect.width, u.rect.height),
                l = u.bpl,
                h = u.bpp,
                f = new Uint8Array(c * l + c);
            u.cimg = o.encode._filterZero(u.img, c, h, l, f);
        }
        return a;
    }),
    (o.encode.compress = function (t, e, r, n, i, a) {
        null == a && (a = !1);
        for (var s = 6, u = 8, c = 4, l = 255, h = 0; h < t.length; h++) {
            for (var f = new Uint8Array(t[h]), p = f.length, d = 0; d < p; d += 4) l &= f[d + 3];
        }
        var m = 255 != l,
            v = {},
            g = [];
        if ((0 != t.length && ((v[0] = 0), g.push(0), 0 != n && n--), 0 != n)) {
            var y = o.quantize(t, n, i);
            t = y.bufs;
            for (var d = 0; d < y.plte.length; d++) {
                var b = y.plte[d].est.rgba;
                null == v[b] && ((v[b] = g.length), g.push(b));
            }
        } else
            for (var h = 0; h < t.length; h++) {
                for (var E = new Uint32Array(t[h]), p = E.length, d = 0; d < p; d++) {
                    var b = E[d];
                    if ((d < e || (b != E[d - 1] && b != E[d - e])) && null == v[b] && ((v[b] = g.length), g.push(b), g.length >= 300)) break;
                }
            }
        var T = !!m && i,
            _ = g.length;
        _ <= 256 && !1 == a && ((u = _ <= 2 ? 1 : _ <= 4 ? 2 : _ <= 16 ? 4 : 8), i && (u = 8), (m = !0));
        for (var A = [], h = 0; h < t.length; h++) {
            var L = new Uint8Array(t[h]),
                I = new Uint32Array(L.buffer),
                S = 0,
                w = 0,
                H = e,
                N = r,
                P = 0;
            if (0 != h && !T) {
                for (var B = i || 1 == h || 2 == A[A.length - 2].dispose ? 1 : 2, R = 0, M = 1000000000, O = 0; O < B; O++) {
                    for (var C = new Uint8Array(t[h - 1 - O]), F = new Uint32Array(t[h - 1 - O]), D = e, U = r, G = -1, k = -1, x = 0; x < r; x++)
                        for (var j = 0; j < e; j++) {
                            var d = x * e + j;
                            I[d] != F[d] && (j < D && (D = j), j > G && (G = j), x < U && (U = x), x > k && (k = x));
                        }
                    var V = -1 == G ? 1 : (G - D + 1) * (k - U + 1);
                    V < M && ((M = V), (R = O), -1 == G ? ((S = w = 0), (H = N = 1)) : ((S = D), (w = U), (H = G - D + 1), (N = k - U + 1)));
                }
                var C = new Uint8Array(t[h - 1 - R]);
                1 == R && (A[A.length - 1].dispose = 2);
                var Z = new Uint8Array(H * N * 4);
                new Uint32Array(Z.buffer), o._copyTile(C, e, r, Z, H, N, -S, -w, 0), o._copyTile(L, e, r, Z, H, N, -S, -w, 3) ? (o._copyTile(L, e, r, Z, H, N, -S, -w, 2), (P = 1)) : (o._copyTile(L, e, r, Z, H, N, -S, -w, 0), (P = 0)), (I = new Uint32Array((L = Z).buffer));
            }
            var K = 4 * H;
            if (_ <= 256 && !1 == a) {
                for (var Z = new Uint8Array((K = Math.ceil((u * H) / 8)) * N), x = 0; x < N; x++) {
                    var d = x * K,
                        X = x * H;
                    if (8 == u) for (var j = 0; j < H; j++) Z[d + j] = v[I[X + j]];
                    else if (4 == u) for (var j = 0; j < H; j++) Z[d + (j >> 1)] |= v[I[X + j]] << (4 - (1 & j) * 4);
                    else if (2 == u) for (var j = 0; j < H; j++) Z[d + (j >> 2)] |= v[I[X + j]] << (6 - (3 & j) * 2);
                    else if (1 == u) for (var j = 0; j < H; j++) Z[d + (j >> 3)] |= v[I[X + j]] << (7 - (7 & j) * 1);
                }
                (L = Z), (s = 3), (c = 1);
            } else if (!1 == m && 1 == t.length) {
                for (var Z = new Uint8Array(H * N * 3), q = H * N, d = 0; d < q; d++) {
                    var z = 3 * d,
                        J = 4 * d;
                    (Z[z] = L[J]), (Z[z + 1] = L[J + 1]), (Z[z + 2] = L[J + 2]);
                }
                (L = Z), (s = 2), (c = 3), (K = 3 * H);
            }
            A.push({
                rect: {
                    x: S,
                    y: w,
                    width: H,
                    height: N
                },
                img: L,
                bpl: K,
                bpp: c,
                blend: P,
                dispose: T ? 1 : 0
            });
        }
        return {
            ctype: s,
            depth: u,
            plte: g,
            gotAlpha: m,
            frames: A
        };
    }),
    (o.encode._filterZero = function (t, e, r, n, i) {
        for (var s = [], u = 0; u < 5; u++)
            if (!(e * n > 500000) || (2 != u && 3 != u && 4 != u)) {
                for (var c = 0; c < e; c++) o.encode._filterLine(i, t, c, n, r, u);
                if ((s.push(a.deflate(i)), 1 == r)) break;
            }
        for (var l, h = 1000000000, f = 0; f < s.length; f++) s[f].length < h && ((l = f), (h = s[f].length));
        return s[l];
    }),
    (o.encode._filterLine = function (t, e, r, n, i, a) {
        var s = r * n,
            u = s + r,
            c = o.decode._paeth;
        if (((t[u] = a), u++, 0 == a)) for (var l = 0; l < n; l++) t[u + l] = e[s + l];
        else if (1 == a) {
            for (var l = 0; l < i; l++) t[u + l] = e[s + l];
            for (var l = i; l < n; l++) t[u + l] = (e[s + l] - e[s + l - i] + 256) & 255;
        } else if (0 == r) {
            for (var l = 0; l < i; l++) t[u + l] = e[s + l];
            if (2 == a) for (var l = i; l < n; l++) t[u + l] = e[s + l];
            if (3 == a) for (var l = i; l < n; l++) t[u + l] = (e[s + l] - (e[s + l - i] >> 1) + 256) & 255;
            if (4 == a) for (var l = i; l < n; l++) t[u + l] = (e[s + l] - c(e[s + l - i], 0, 0) + 256) & 255;
        } else {
            if (2 == a) for (var l = 0; l < n; l++) t[u + l] = (e[s + l] + 256 - e[s + l - n]) & 255;
            if (3 == a) {
                for (var l = 0; l < i; l++) t[u + l] = (e[s + l] + 256 - (e[s + l - n] >> 1)) & 255;
                for (var l = i; l < n; l++) t[u + l] = (e[s + l] + 256 - ((e[s + l - n] + e[s + l - i]) >> 1)) & 255;
            }
            if (4 == a) {
                for (var l = 0; l < i; l++) t[u + l] = (e[s + l] + 256 - c(0, e[s + l - n], 0)) & 255;
                for (var l = i; l < n; l++) t[u + l] = (e[s + l] + 256 - c(e[s + l - i], e[s + l - n], e[s + l - i - n])) & 255;
            }
        }
    }),
    (o.crc = {
        table: (function () {
            for (var t = new Uint32Array(256), e = 0; e < 256; e++) {
                for (var r = e, n = 0; n < 8; n++) 1 & r ? (r = 3988292384 ^ (r >>> 1)) : (r >>>= 1);
                t[e] = r;
            }
            return t;
        })(),
        update: function (t, e, r, n) {
            for (var i = 0; i < n; i++) t = o.crc.table[(t ^ e[r + i]) & 255] ^ (t >>> 8);
            return t;
        },
        crc: function (t, e, r) {
            return 4294967295 ^ o.crc.update(4294967295, t, e, r);
        }
    }),
    (o.quantize = function (t, e, r) {
        for (var n = [], i = 0, a = 0; a < t.length; a++) n.push(o.encode.alphaMul(new Uint8Array(t[a]), r)), (i += t[a].byteLength);
        for (var s = new Uint8Array(i), u = new Uint32Array(s.buffer), c = 0, a = 0; a < n.length; a++) {
            for (var l = n[a], h = l.length, f = 0; f < h; f++) s[c + f] = l[f];
            c += h;
        }
        var p = {
            i0: 0,
            i1: s.length,
            bst: null,
            est: null,
            tdst: 0,
            left: null,
            right: null
        };
        (p.bst = o.quantize.stats(s, p.i0, p.i1)), (p.est = o.quantize.estats(p.bst));
        for (var d = [p]; d.length < e; ) {
            for (var m = 0, v = 0, a = 0; a < d.length; a++) d[a].est.L > m && ((m = d[a].est.L), (v = a));
            if (m < 0.001) break;
            var g = d[v],
                y = o.quantize.splitPixels(s, u, g.i0, g.i1, g.est.e, g.est.eMq255),
                b = {
                    i0: g.i0,
                    i1: y,
                    bst: null,
                    est: null,
                    tdst: 0,
                    left: null,
                    right: null
                };
            (b.bst = o.quantize.stats(s, b.i0, b.i1)), (b.est = o.quantize.estats(b.bst));
            var E = {
                i0: y,
                i1: g.i1,
                bst: null,
                est: null,
                tdst: 0,
                left: null,
                right: null
            };
            E.bst = {
                R: [],
                m: [],
                N: g.bst.N - b.bst.N
            };
            for (var a = 0; a < 16; a++) E.bst.R[a] = g.bst.R[a] - b.bst.R[a];
            for (var a = 0; a < 4; a++) E.bst.m[a] = g.bst.m[a] - b.bst.m[a];
            (E.est = o.quantize.estats(E.bst)), (g.left = b), (g.right = E), (d[v] = b), d.push(E);
        }
        d.sort(function (t, e) {
            return e.bst.N - t.bst.N;
        });
        for (var T = 0; T < n.length; T++) {
            for (var _ = o.quantize.planeDst, A = new Uint8Array(n[T].buffer), L = new Uint32Array(n[T].buffer), I = A.length, a = 0; a < I; a += 4) {
                for (var S = A[a] * (1 / 255), w = A[a + 1] * (1 / 255), H = A[a + 2] * (1 / 255), N = A[a + 3] * (1 / 255), P = p; P.left; ) P = 0 >= _(P.est, S, w, H, N) ? P.left : P.right;
                L[a >> 2] = P.est.rgba;
            }
            n[T] = L.buffer;
        }
        return {
            bufs: n,
            plte: d
        };
    }),
    (o.quantize.getNearest = function (t, e, r, n, i) {
        if (null == t.left) return (t.tdst = o.quantize.dist(t.est.q, e, r, n, i)), t;
        var a = o.quantize.planeDst(t.est, e, r, n, i),
            s = t.left,
            u = t.right;
        a > 0 && ((s = t.right), (u = t.left));
        var c = o.quantize.getNearest(s, e, r, n, i);
        if (c.tdst <= a * a) return c;
        var l = o.quantize.getNearest(u, e, r, n, i);
        return l.tdst < c.tdst ? l : c;
    }),
    (o.quantize.planeDst = function (t, e, r, n, i) {
        var o = t.e;
        return o[0] * e + o[1] * r + o[2] * n + o[3] * i - t.eMq;
    }),
    (o.quantize.dist = function (t, e, r, n, i) {
        var o = e - t[0],
            a = r - t[1],
            s = n - t[2],
            u = i - t[3];
        return o * o + a * a + s * s + u * u;
    }),
    (o.quantize.splitPixels = function (t, e, r, n, i, a) {
        var s = o.quantize.vecDot;
        for (n -= 4; r < n; ) {
            for (; s(t, r, i) <= a; ) r += 4;
            for (; s(t, n, i) > a; ) n -= 4;
            if (r >= n) break;
            var u = e[r >> 2];
            (e[r >> 2] = e[n >> 2]), (e[n >> 2] = u), (r += 4), (n -= 4);
        }
        for (; s(t, r, i) > a; ) r -= 4;
        return r + 4;
    }),
    (o.quantize.vecDot = function (t, e, r) {
        return t[e] * r[0] + t[e + 1] * r[1] + t[e + 2] * r[2] + t[e + 3] * r[3];
    }),
    (o.quantize.stats = function (t, e, r) {
        for (var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = [0, 0, 0, 0], o = e; o < r; o += 4) {
            var a = t[o] * (1 / 255),
                s = t[o + 1] * (1 / 255),
                u = t[o + 2] * (1 / 255),
                c = t[o + 3] * (1 / 255);
            (i[0] += a), (i[1] += s), (i[2] += u), (i[3] += c), (n[0] += a * a), (n[1] += a * s), (n[2] += a * u), (n[3] += a * c), (n[5] += s * s), (n[6] += s * u), (n[7] += s * c), (n[10] += u * u), (n[11] += u * c), (n[15] += c * c);
        }
        return (
            (n[4] = n[1]),
            (n[8] = n[2]),
            (n[12] = n[3]),
            (n[9] = n[6]),
            (n[13] = n[7]),
            (n[14] = n[11]),
            {
                R: n,
                m: i,
                N: (r - e) >> 2
            }
        );
    }),
    (o.quantize.estats = function (t) {
        var e = t.R,
            r = t.m,
            n = t.N,
            i = r[0],
            a = r[1],
            s = r[2],
            u = r[3],
            c = 0 == n ? 0 : 1 / n,
            l = [e[0] - i * i * c, e[1] - i * a * c, e[2] - i * s * c, e[3] - i * u * c, e[4] - a * i * c, e[5] - a * a * c, e[6] - a * s * c, e[7] - a * u * c, e[8] - s * i * c, e[9] - s * a * c, e[10] - s * s * c, e[11] - s * u * c, e[12] - u * i * c, e[13] - u * a * c, e[14] - u * s * c, e[15] - u * u * c],
            h = o.M4,
            f = [0.5, 0.5, 0.5, 0.5],
            p = 0,
            d = 0;
        if (0 != n)
            for (var m = 0; m < 10 && ((f = h.multVec(l, f)), (d = Math.sqrt(h.dot(f, f))), (f = h.sml(1 / d, f)), !(1e-9 > Math.abs(d - p))); m++) {
                p = d;
            }
        var v = [i * c, a * c, s * c, u * c],
            g = h.dot(h.sml(255, v), f),
            y = v[3] < 0.001 ? 0 : 1 / v[3];
        return {
            Cov: l,
            q: v,
            e: f,
            L: p,
            eMq255: g,
            eMq: h.dot(f, v),
            rgba: ((Math.round(255 * v[3]) << 24) | (Math.round(255 * v[2] * y) << 16) | (Math.round(255 * v[1] * y) << 8) | (Math.round(255 * v[0] * y) << 0)) >>> 0
        };
    }),
    (o.M4 = {
        multVec: function (t, e) {
            return [t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3], t[4] * e[0] + t[5] * e[1] + t[6] * e[2] + t[7] * e[3], t[8] * e[0] + t[9] * e[1] + t[10] * e[2] + t[11] * e[3], t[12] * e[0] + t[13] * e[1] + t[14] * e[2] + t[15] * e[3]];
        },
        dot: function (t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
        },
        sml: function (t, e) {
            return [t * e[0], t * e[1], t * e[2], t * e[3]];
        }
    }),
    (o.encode.alphaMul = function (t, e) {
        for (var r = new Uint8Array(t.length), n = t.length >> 2, i = 0; i < n; i++) {
            var o = i << 2,
                a = t[o + 3];
            e && (a = a < 128 ? 0 : 255);
            var s = (1 / 255) * a;
            (r[o + 0] = t[o + 0] * s), (r[o + 1] = t[o + 1] * s), (r[o + 2] = t[o + 2] * s), (r[o + 3] = a);
        }
        return r;
    });
