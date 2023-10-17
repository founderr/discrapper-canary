(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [64572], {
        74971: e => {
            "use strict";
            const o = 2147483647,
                n = 36,
                t = /^xn--/,
                a = /[^\0-\x7E]/,
                r = /[\x2E\u3002\uFF0E\uFF61]/g,
                h = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                C = Math.floor,
                i = String.fromCharCode;

            function p(e) {
                throw new RangeError(h[e])
            }

            function s(e, o) {
                const n = e.split("@");
                let t = "";
                if (n.length > 1) {
                    t = n[0] + "@";
                    e = n[1]
                }
                const a = function(e, o) {
                    const n = [];
                    let t = e.length;
                    for (; t--;) n[t] = o(e[t]);
                    return n
                }((e = e.replace(r, ".")).split("."), o).join(".");
                return t + a
            }

            function u(e) {
                const o = [];
                let n = 0;
                const t = e.length;
                for (; n < t;) {
                    const a = e.charCodeAt(n++);
                    if (a >= 55296 && a <= 56319 && n < t) {
                        const t = e.charCodeAt(n++);
                        if (56320 == (64512 & t)) o.push(((1023 & a) << 10) + (1023 & t) + 65536);
                        else {
                            o.push(a);
                            n--
                        }
                    } else o.push(a)
                }
                return o
            }
            const d = function(e, o) {
                    return e + 22 + 75 * (e < 26) - ((0 != o) << 5)
                },
                c = function(e, o, t) {
                    let a = 0;
                    e = t ? C(e / 700) : e >> 1;
                    e += C(e / o);
                    for (; e > 455; a += n) e = C(e / 35);
                    return C(a + 36 * e / (e + 38))
                },
                l = function(e) {
                    const t = [],
                        a = e.length;
                    let r = 0,
                        h = 128,
                        i = 72,
                        s = e.lastIndexOf("-");
                    s < 0 && (s = 0);
                    for (let o = 0; o < s; ++o) {
                        e.charCodeAt(o) >= 128 && p("not-basic");
                        t.push(e.charCodeAt(o))
                    }
                    for (let d = s > 0 ? s + 1 : 0; d < a;) {
                        let s = r;
                        for (let t = 1, h = n;; h += n) {
                            d >= a && p("invalid-input");
                            const s = (u = e.charCodeAt(d++)) - 48 < 10 ? u - 22 : u - 65 < 26 ? u - 65 : u - 97 < 26 ? u - 97 : n;
                            (s >= n || s > C((o - r) / t)) && p("overflow");
                            r += s * t;
                            const c = h <= i ? 1 : h >= i + 26 ? 26 : h - i;
                            if (s < c) break;
                            const l = n - c;
                            t > C(o / l) && p("overflow");
                            t *= l
                        }
                        const l = t.length + 1;
                        i = c(r - s, l, 0 == s);
                        C(r / l) > o - h && p("overflow");
                        h += C(r / l);
                        r %= l;
                        t.splice(r++, 0, h)
                    }
                    var u;
                    return String.fromCodePoint(...t)
                },
                y = function(e) {
                    const t = [];
                    let a = (e = u(e)).length,
                        r = 128,
                        h = 0,
                        s = 72;
                    for (const o of e) o < 128 && t.push(i(o));
                    let l = t.length,
                        y = l;
                    l && t.push("-");
                    for (; y < a;) {
                        let a = o;
                        for (const o of e) o >= r && o < a && (a = o);
                        const u = y + 1;
                        a - r > C((o - h) / u) && p("overflow");
                        h += (a - r) * u;
                        r = a;
                        for (const a of e) {
                            a < r && ++h > o && p("overflow");
                            if (a == r) {
                                let e = h;
                                for (let o = n;; o += n) {
                                    const a = o <= s ? 1 : o >= s + 26 ? 26 : o - s;
                                    if (e < a) break;
                                    const r = e - a,
                                        h = n - a;
                                    t.push(i(d(a + r % h, 0)));
                                    e = C(r / h)
                                }
                                t.push(i(d(e, 0)));
                                s = c(h, u, y == l);
                                h = 0;
                                ++y
                            }
                        }++h;
                        ++r
                    }
                    return t.join("")
                },
                m = {
                    version: "2.1.0",
                    ucs2: {
                        decode: u,
                        encode: e => String.fromCodePoint(...e)
                    },
                    decode: l,
                    encode: y,
                    toASCII: function(e) {
                        return s(e, (function(e) {
                            return a.test(e) ? "xn--" + y(e) : e
                        }))
                    },
                    toUnicode: function(e) {
                        return s(e, (function(e) {
                            return t.test(e) ? l(e.slice(4).toLowerCase()) : e
                        }))
                    }
                };
            e.exports = m
        },
        181757: function(e, o) {
            "use strict";
            var n = {
                cipher: {},
                hash: {},
                keyexchange: {},
                mode: {},
                misc: {},
                codec: {},
                exception: {
                    corrupt: function(e) {
                        this.toString = function() {
                            return "CORRUPT: " + this.message
                        };
                        this.message = e
                    },
                    invalid: function(e) {
                        this.toString = function() {
                            return "INVALID: " + this.message
                        };
                        this.message = e
                    },
                    bug: function(e) {
                        this.toString = function() {
                            return "BUG: " + this.message
                        };
                        this.message = e
                    },
                    notReady: function(e) {
                        this.toString = function() {
                            return "NOT READY: " + this.message
                        };
                        this.message = e
                    }
                }
            };
            n.cipher.aes = function(e) {
                this.s[0][0][0] || this.O();
                var o, t, a, r, h = this.s[0][4],
                    C = this.s[1],
                    i = 1;
                if (4 !== (o = e.length) && 6 !== o && 8 !== o) throw new n.exception.invalid("invalid aes key size");
                this.b = [a = e.slice(0), r = []];
                for (e = o; e < 4 * o + 28; e++) {
                    t = a[e - 1];
                    (0 == e % o || 8 === o && 4 == e % o) && (t = h[t >>> 24] << 24 ^ h[t >> 16 & 255] << 16 ^ h[t >> 8 & 255] << 8 ^ h[255 & t], 0 == e % o && (t = t << 8 ^ t >>> 24 ^ i << 24, i = i << 1 ^ 283 * (i >> 7)));
                    a[e] = a[e - o] ^ t
                }
                for (o = 0; e; o++, e--) t = a[3 & o ? e : e - 4], r[o] = 4 >= e || 4 > o ? t : C[0][h[t >>> 24]] ^ C[1][h[t >> 16 & 255]] ^ C[2][h[t >> 8 & 255]] ^ C[3][h[255 & t]]
            };
            n.cipher.aes.prototype = {
                encrypt: function(e) {
                    return t(this, e, 0)
                },
                decrypt: function(e) {
                    return t(this, e, 1)
                },
                s: [
                    [
                        [],
                        [],
                        [],
                        [],
                        []
                    ],
                    [
                        [],
                        [],
                        [],
                        [],
                        []
                    ]
                ],
                O: function() {
                    var e, o, n, t, a, r, h, C = this.s[0],
                        i = this.s[1],
                        p = C[4],
                        s = i[4],
                        u = [],
                        d = [];
                    for (e = 0; 256 > e; e++) d[(u[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
                    for (o = n = 0; !p[o]; o ^= t || 1, n = d[n] || 1)
                        for (r = (r = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4) >> 8 ^ 255 & r ^ 99, p[o] = r, s[r] = o, h = 16843009 * (a = u[e = u[t = u[o]]]) ^ 65537 * e ^ 257 * t ^ 16843008 * o, a = 257 * u[r] ^ 16843008 * r, e = 0; 4 > e; e++) C[e][o] = a = a << 24 ^ a >>> 8, i[e][r] = h = h << 24 ^ h >>> 8;
                    for (e = 0; 5 > e; e++) C[e] = C[e].slice(0), i[e] = i[e].slice(0)
                }
            };

            function t(e, o, t) {
                if (4 !== o.length) throw new n.exception.invalid("invalid aes block size");
                var a = e.b[t],
                    r = o[0] ^ a[0],
                    h = o[t ? 3 : 1] ^ a[1],
                    C = o[2] ^ a[2];
                o = o[t ? 1 : 3] ^ a[3];
                var i, p, s, u, d = a.length / 4 - 2,
                    c = 4,
                    l = [0, 0, 0, 0];
                e = (i = e.s[t])[0];
                var y = i[1],
                    m = i[2],
                    f = i[3],
                    g = i[4];
                for (u = 0; u < d; u++) i = e[r >>> 24] ^ y[h >> 16 & 255] ^ m[C >> 8 & 255] ^ f[255 & o] ^ a[c], p = e[h >>> 24] ^ y[C >> 16 & 255] ^ m[o >> 8 & 255] ^ f[255 & r] ^ a[c + 1], s = e[C >>> 24] ^ y[o >> 16 & 255] ^ m[r >> 8 & 255] ^ f[255 & h] ^ a[c + 2], o = e[o >>> 24] ^ y[r >> 16 & 255] ^ m[h >> 8 & 255] ^ f[255 & C] ^ a[c + 3], c += 4, r = i, h = p, C = s;
                for (u = 0; 4 > u; u++) l[t ? 3 & -u : u] = g[r >>> 24] << 24 ^ g[h >> 16 & 255] << 16 ^ g[C >> 8 & 255] << 8 ^ g[255 & o] ^ a[c++], i = r, r = h, h = C, C = o, o = i;
                return l
            }
            n.bitArray = {
                bitSlice: function(e, o, t) {
                    e = n.bitArray.$(e.slice(o / 32), 32 - (31 & o)).slice(1);
                    return void 0 === t ? e : n.bitArray.clamp(e, t - o)
                },
                extract: function(e, o, n) {
                    var t = Math.floor(-o - n & 31);
                    return (-32 & (o + n - 1 ^ o) ? e[o / 32 | 0] << 32 - t ^ e[o / 32 + 1 | 0] >>> t : e[o / 32 | 0] >>> t) & (1 << n) - 1
                },
                concat: function(e, o) {
                    if (0 === e.length || 0 === o.length) return e.concat(o);
                    var t = e[e.length - 1],
                        a = n.bitArray.getPartial(t);
                    return 32 === a ? e.concat(o) : n.bitArray.$(o, a, 0 | t, e.slice(0, e.length - 1))
                },
                bitLength: function(e) {
                    var o = e.length;
                    return 0 === o ? 0 : 32 * (o - 1) + n.bitArray.getPartial(e[o - 1])
                },
                clamp: function(e, o) {
                    if (32 * e.length < o) return e;
                    var t = (e = e.slice(0, Math.ceil(o / 32))).length;
                    o &= 31;
                    0 < t && o && (e[t - 1] = n.bitArray.partial(o, e[t - 1] & 2147483648 >> o - 1, 1));
                    return e
                },
                partial: function(e, o, n) {
                    return 32 === e ? o : (n ? 0 | o : o << 32 - e) + 1099511627776 * e
                },
                getPartial: function(e) {
                    return Math.round(e / 1099511627776) || 32
                },
                equal: function(e, o) {
                    if (n.bitArray.bitLength(e) !== n.bitArray.bitLength(o)) return !1;
                    var t, a = 0;
                    for (t = 0; t < e.length; t++) a |= e[t] ^ o[t];
                    return 0 === a
                },
                $: function(e, o, t, a) {
                    var r;
                    r = 0;
                    for (void 0 === a && (a = []); 32 <= o; o -= 32) a.push(t), t = 0;
                    if (0 === o) return a.concat(e);
                    for (r = 0; r < e.length; r++) a.push(t | e[r] >>> o), t = e[r] << 32 - o;
                    r = e.length ? e[e.length - 1] : 0;
                    e = n.bitArray.getPartial(r);
                    a.push(n.bitArray.partial(o + e & 31, 32 < o + e ? t : a.pop(), 1));
                    return a
                },
                i: function(e, o) {
                    return [e[0] ^ o[0], e[1] ^ o[1], e[2] ^ o[2], e[3] ^ o[3]]
                },
                byteswapM: function(e) {
                    var o, n;
                    for (o = 0; o < e.length; ++o) n = e[o], e[o] = n >>> 24 | n >>> 8 & 65280 | (65280 & n) << 8 | n << 24;
                    return e
                }
            };
            n.codec.utf8String = {
                fromBits: function(e) {
                    var o, t, a = "",
                        r = n.bitArray.bitLength(e);
                    for (o = 0; o < r / 8; o++) 0 == (3 & o) && (t = e[o / 4]), a += String.fromCharCode(t >>> 8 >>> 8 >>> 8), t <<= 8;
                    return decodeURIComponent(escape(a))
                },
                toBits: function(e) {
                    e = unescape(encodeURIComponent(e));
                    var o, t = [],
                        a = 0;
                    for (o = 0; o < e.length; o++) a = a << 8 | e.charCodeAt(o), 3 == (3 & o) && (t.push(a), a = 0);
                    3 & o && t.push(n.bitArray.partial(8 * (3 & o), a));
                    return t
                }
            };
            n.codec.hex = {
                fromBits: function(e) {
                    var o, t = "";
                    for (o = 0; o < e.length; o++) t += (0xf00000000000 + (0 | e[o])).toString(16).substr(4);
                    return t.substr(0, n.bitArray.bitLength(e) / 4)
                },
                toBits: function(e) {
                    var o, t, a = [];
                    t = (e = e.replace(/\s|0x/g, "")).length;
                    e += "00000000";
                    for (o = 0; o < e.length; o += 8) a.push(0 ^ parseInt(e.substr(o, 8), 16));
                    return n.bitArray.clamp(a, 4 * t)
                }
            };
            n.codec.base32 = {
                B: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                X: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                BITS: 32,
                BASE: 5,
                REMAINING: 27,
                fromBits: function(e, o, t) {
                    var a = n.codec.base32.BASE,
                        r = n.codec.base32.REMAINING,
                        h = "",
                        C = 0,
                        i = n.codec.base32.B,
                        p = 0,
                        s = n.bitArray.bitLength(e);
                    t && (i = n.codec.base32.X);
                    for (t = 0; h.length * a < s;) h += i.charAt((p ^ e[t] >>> C) >>> r), C < a ? (p = e[t] << a - C, C += r, t++) : (p <<= a, C -= a);
                    for (; 7 & h.length && !o;) h += "=";
                    return h
                },
                toBits: function(e, o) {
                    e = e.replace(/\s|=/g, "").toUpperCase();
                    var t, a, r = n.codec.base32.BITS,
                        h = n.codec.base32.BASE,
                        C = n.codec.base32.REMAINING,
                        i = [],
                        p = 0,
                        s = n.codec.base32.B,
                        u = 0,
                        d = "base32";
                    o && (s = n.codec.base32.X, d = "base32hex");
                    for (t = 0; t < e.length; t++) {
                        if (0 > (a = s.indexOf(e.charAt(t)))) {
                            if (!o) try {
                                return n.codec.base32hex.toBits(e)
                            } catch (e) {}
                            throw new n.exception.invalid("this isn't " + d + "!")
                        }
                        p > C ? (p -= C, i.push(u ^ a >>> p), u = a << r - p) : u ^= a << r - (p += h)
                    }
                    56 & p && i.push(n.bitArray.partial(56 & p, u, 1));
                    return i
                }
            };
            n.codec.base32hex = {
                fromBits: function(e, o) {
                    return n.codec.base32.fromBits(e, o, 1)
                },
                toBits: function(e) {
                    return n.codec.base32.toBits(e, 1)
                }
            };
            n.codec.base64 = {
                B: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                fromBits: function(e, o, t) {
                    var a = "",
                        r = 0,
                        h = n.codec.base64.B,
                        C = 0,
                        i = n.bitArray.bitLength(e);
                    t && (h = h.substr(0, 62) + "-_");
                    for (t = 0; 6 * a.length < i;) a += h.charAt((C ^ e[t] >>> r) >>> 26), 6 > r ? (C = e[t] << 6 - r, r += 26, t++) : (C <<= 6, r -= 6);
                    for (; 3 & a.length && !o;) a += "=";
                    return a
                },
                toBits: function(e, o) {
                    e = e.replace(/\s|=/g, "");
                    var t, a, r = [],
                        h = 0,
                        C = n.codec.base64.B,
                        i = 0;
                    o && (C = C.substr(0, 62) + "-_");
                    for (t = 0; t < e.length; t++) {
                        if (0 > (a = C.indexOf(e.charAt(t)))) throw new n.exception.invalid("this isn't base64!");
                        26 < h ? (h -= 26, r.push(i ^ a >>> h), i = a << 32 - h) : i ^= a << 32 - (h += 6)
                    }
                    56 & h && r.push(n.bitArray.partial(56 & h, i, 1));
                    return r
                }
            };
            n.codec.base64url = {
                fromBits: function(e) {
                    return n.codec.base64.fromBits(e, 1, 1)
                },
                toBits: function(e) {
                    return n.codec.base64.toBits(e, 1)
                }
            };
            n.hash.sha256 = function(e) {
                this.b[0] || this.O();
                e ? (this.F = e.F.slice(0), this.A = e.A.slice(0), this.l = e.l) : this.reset()
            };
            n.hash.sha256.hash = function(e) {
                return (new n.hash.sha256).update(e).finalize()
            };
            n.hash.sha256.prototype = {
                blockSize: 512,
                reset: function() {
                    this.F = this.Y.slice(0);
                    this.A = [];
                    this.l = 0;
                    return this
                },
                update: function(e) {
                    "string" == typeof e && (e = n.codec.utf8String.toBits(e));
                    var o, t = this.A = n.bitArray.concat(this.A, e);
                    o = this.l;
                    if (9007199254740991 < (e = this.l = o + n.bitArray.bitLength(e))) throw new n.exception.invalid("Cannot hash more than 2^53 - 1 bits");
                    if ("undefined" != typeof Uint32Array) {
                        var r = new Uint32Array(t),
                            h = 0;
                        for (o = 512 + o - (512 + o & 511); o <= e; o += 512) a(this, r.subarray(16 * h, 16 * (h + 1))), h += 1;
                        t.splice(0, 16 * h)
                    } else
                        for (o = 512 + o - (512 + o & 511); o <= e; o += 512) a(this, t.splice(0, 16));
                    return this
                },
                finalize: function() {
                    var e, o = this.A,
                        t = this.F;
                    for (e = (o = n.bitArray.concat(o, [n.bitArray.partial(1, 1)])).length + 2; 15 & e; e++) o.push(0);
                    o.push(Math.floor(this.l / 4294967296));
                    for (o.push(0 | this.l); o.length;) a(this, o.splice(0, 16));
                    this.reset();
                    return t
                },
                Y: [],
                b: [],
                O: function() {
                    function e(e) {
                        return 4294967296 * (e - Math.floor(e)) | 0
                    }
                    for (var o, n, t = 0, a = 2; 64 > t; a++) {
                        n = !0;
                        for (o = 2; o * o <= a; o++)
                            if (0 == a % o) {
                                n = !1;
                                break
                            } n && (8 > t && (this.Y[t] = e(Math.pow(a, .5))), this.b[t] = e(Math.pow(a, 1 / 3)), t++)
                    }
                }
            };

            function a(e, o) {
                var n, t, a, r = e.F,
                    h = e.b,
                    C = r[0],
                    i = r[1],
                    p = r[2],
                    s = r[3],
                    u = r[4],
                    d = r[5],
                    c = r[6],
                    l = r[7];
                for (n = 0; 64 > n; n++) 16 > n ? t = o[n] : (t = o[n + 1 & 15], a = o[n + 14 & 15], t = o[15 & n] = (t >>> 7 ^ t >>> 18 ^ t >>> 3 ^ t << 25 ^ t << 14) + (a >>> 17 ^ a >>> 19 ^ a >>> 10 ^ a << 15 ^ a << 13) + o[15 & n] + o[n + 9 & 15] | 0), t = t + l + (u >>> 6 ^ u >>> 11 ^ u >>> 25 ^ u << 26 ^ u << 21 ^ u << 7) + (c ^ u & (d ^ c)) + h[n], l = c, c = d, d = u, u = s + t | 0, s = p, p = i, C = t + ((i = C) & p ^ s & (i ^ p)) + (i >>> 2 ^ i >>> 13 ^ i >>> 22 ^ i << 30 ^ i << 19 ^ i << 10) | 0;
                r[0] = r[0] + C | 0;
                r[1] = r[1] + i | 0;
                r[2] = r[2] + p | 0;
                r[3] = r[3] + s | 0;
                r[4] = r[4] + u | 0;
                r[5] = r[5] + d | 0;
                r[6] = r[6] + c | 0;
                r[7] = r[7] + l | 0
            }
            n.mode.ccm = {
                name: "ccm",
                G: [],
                listenProgress: function(e) {
                    n.mode.ccm.G.push(e)
                },
                unListenProgress: function(e) {
                    -1 < (e = n.mode.ccm.G.indexOf(e)) && n.mode.ccm.G.splice(e, 1)
                },
                fa: function(e) {
                    var o, t = n.mode.ccm.G.slice();
                    for (o = 0; o < t.length; o += 1) t[o](e)
                },
                encrypt: function(e, o, t, a, r) {
                    var h, C = o.slice(0),
                        i = n.bitArray,
                        p = i.bitLength(t) / 8,
                        s = i.bitLength(C) / 8;
                    r = r || 64;
                    a = a || [];
                    if (7 > p) throw new n.exception.invalid("ccm: iv must be at least 7 bytes");
                    for (h = 2; 4 > h && s >>> 8 * h; h++);
                    h < 15 - p && (h = 15 - p);
                    t = i.clamp(t, 8 * (15 - h));
                    o = n.mode.ccm.V(e, o, t, a, r, h);
                    C = n.mode.ccm.C(e, C, t, o, r, h);
                    return i.concat(C.data, C.tag)
                },
                decrypt: function(e, o, t, a, r) {
                    r = r || 64;
                    a = a || [];
                    var h = n.bitArray,
                        C = h.bitLength(t) / 8,
                        i = h.bitLength(o),
                        p = h.clamp(o, i - r),
                        s = h.bitSlice(o, i - r);
                    i = (i - r) / 8;
                    if (7 > C) throw new n.exception.invalid("ccm: iv must be at least 7 bytes");
                    for (o = 2; 4 > o && i >>> 8 * o; o++);
                    o < 15 - C && (o = 15 - C);
                    t = h.clamp(t, 8 * (15 - o));
                    p = n.mode.ccm.C(e, p, t, s, r, o);
                    e = n.mode.ccm.V(e, p.data, t, a, r, o);
                    if (!h.equal(p.tag, e)) throw new n.exception.corrupt("ccm: tag doesn't match");
                    return p.data
                },
                na: function(e, o, t, a, r, h) {
                    var C = [],
                        i = n.bitArray,
                        p = i.i;
                    a = [i.partial(8, (o.length ? 64 : 0) | a - 2 << 2 | h - 1)];
                    (a = i.concat(a, t))[3] |= r;
                    a = e.encrypt(a);
                    if (o.length)
                        for (65279 >= (t = i.bitLength(o) / 8) ? C = [i.partial(16, t)] : 4294967295 >= t && (C = i.concat([i.partial(16, 65534)], [t])), C = i.concat(C, o), o = 0; o < C.length; o += 4) a = e.encrypt(p(a, C.slice(o, o + 4).concat([0, 0, 0])));
                    return a
                },
                V: function(e, o, t, a, r, h) {
                    var C = n.bitArray,
                        i = C.i;
                    if ((r /= 8) % 2 || 4 > r || 16 < r) throw new n.exception.invalid("ccm: invalid tag length");
                    if (4294967295 < a.length || 4294967295 < o.length) throw new n.exception.bug("ccm: can't deal with 4GiB or more data");
                    t = n.mode.ccm.na(e, a, t, r, C.bitLength(o) / 8, h);
                    for (a = 0; a < o.length; a += 4) t = e.encrypt(i(t, o.slice(a, a + 4).concat([0, 0, 0])));
                    return C.clamp(t, 8 * r)
                },
                C: function(e, o, t, a, r, h) {
                    var C, i = n.bitArray;
                    C = i.i;
                    var p = o.length,
                        s = i.bitLength(o),
                        u = p / 50,
                        d = u;
                    t = i.concat([i.partial(8, h - 1)], t).concat([0, 0, 0]).slice(0, 4);
                    a = i.bitSlice(C(a, e.encrypt(t)), 0, r);
                    if (!p) return {
                        tag: a,
                        data: []
                    };
                    for (C = 0; C < p; C += 4) C > u && (n.mode.ccm.fa(C / p), u += d), t[3]++, r = e.encrypt(t), o[C] ^= r[0], o[C + 1] ^= r[1], o[C + 2] ^= r[2], o[C + 3] ^= r[3];
                    return {
                        tag: a,
                        data: i.clamp(o, s)
                    }
                }
            };
            n.mode.ocb2 = {
                name: "ocb2",
                encrypt: function(e, o, t, a, r, h) {
                    if (128 !== n.bitArray.bitLength(t)) throw new n.exception.invalid("ocb iv must be 128 bits");
                    var C, i = n.mode.ocb2.S,
                        p = n.bitArray,
                        s = p.i,
                        u = [0, 0, 0, 0];
                    t = i(e.encrypt(t));
                    var d, c = [];
                    a = a || [];
                    r = r || 64;
                    for (C = 0; C + 4 < o.length; C += 4) u = s(u, d = o.slice(C, C + 4)), c = c.concat(s(t, e.encrypt(s(t, d)))), t = i(t);
                    d = o.slice(C);
                    o = p.bitLength(d);
                    C = e.encrypt(s(t, [0, 0, 0, o]));
                    d = p.clamp(s(d.concat([0, 0, 0]), C), o);
                    u = s(u, s(d.concat([0, 0, 0]), C));
                    u = e.encrypt(s(u, s(t, i(t))));
                    a.length && (u = s(u, h ? a : n.mode.ocb2.pmac(e, a)));
                    return c.concat(p.concat(d, p.clamp(u, r)))
                },
                decrypt: function(e, o, t, a, r, h) {
                    if (128 !== n.bitArray.bitLength(t)) throw new n.exception.invalid("ocb iv must be 128 bits");
                    r = r || 64;
                    var C, i, p = n.mode.ocb2.S,
                        s = n.bitArray,
                        u = s.i,
                        d = [0, 0, 0, 0],
                        c = p(e.encrypt(t)),
                        l = n.bitArray.bitLength(o) - r,
                        y = [];
                    a = a || [];
                    for (t = 0; t + 4 < l / 32; t += 4) C = u(c, e.decrypt(u(c, o.slice(t, t + 4)))), d = u(d, C), y = y.concat(C), c = p(c);
                    i = l - 32 * t;
                    C = e.encrypt(u(c, [0, 0, 0, i]));
                    C = u(C, s.clamp(o.slice(t), i).concat([0, 0, 0]));
                    d = u(d, C);
                    d = e.encrypt(u(d, u(c, p(c))));
                    a.length && (d = u(d, h ? a : n.mode.ocb2.pmac(e, a)));
                    if (!s.equal(s.clamp(d, r), s.bitSlice(o, l))) throw new n.exception.corrupt("ocb: tag doesn't match");
                    return y.concat(s.clamp(C, i))
                },
                pmac: function(e, o) {
                    var t, a = n.mode.ocb2.S,
                        r = n.bitArray,
                        h = r.i,
                        C = [0, 0, 0, 0],
                        i = h(i = e.encrypt([0, 0, 0, 0]), a(a(i)));
                    for (t = 0; t + 4 < o.length; t += 4) i = a(i),
                        C = h(C, e.encrypt(h(i, o.slice(t, t + 4))));
                    t = o.slice(t);
                    128 > r.bitLength(t) && (i = h(i, a(i)), t = r.concat(t, [-2147483648, 0, 0, 0]));
                    C = h(C, t);
                    return e.encrypt(h(a(h(i, a(i))), C))
                },
                S: function(e) {
                    return [e[0] << 1 ^ e[1] >>> 31, e[1] << 1 ^ e[2] >>> 31, e[2] << 1 ^ e[3] >>> 31, e[3] << 1 ^ 135 * (e[0] >>> 31)]
                }
            };
            n.mode.gcm = {
                name: "gcm",
                encrypt: function(e, o, t, a, r) {
                    var h = o.slice(0);
                    o = n.bitArray;
                    a = a || [];
                    e = n.mode.gcm.C(!0, e, h, a, t, r || 128);
                    return o.concat(e.data, e.tag)
                },
                decrypt: function(e, o, t, a, r) {
                    var h = o.slice(0),
                        C = n.bitArray,
                        i = C.bitLength(h);
                    a = a || [];
                    (r = r || 128) <= i ? (o = C.bitSlice(h, i - r), h = C.bitSlice(h, 0, i - r)) : (o = h, h = []);
                    e = n.mode.gcm.C(!1, e, h, a, t, r);
                    if (!C.equal(e.tag, o)) throw new n.exception.corrupt("gcm: tag doesn't match");
                    return e.data
                },
                ka: function(e, o) {
                    var t, a, r, h, C, i = n.bitArray.i;
                    r = [0, 0, 0, 0];
                    h = o.slice(0);
                    for (t = 0; 128 > t; t++) {
                        (a = 0 != (e[Math.floor(t / 32)] & 1 << 31 - t % 32)) && (r = i(r, h));
                        C = 0 != (1 & h[3]);
                        for (a = 3; 0 < a; a--) h[a] = h[a] >>> 1 | (1 & h[a - 1]) << 31;
                        h[0] >>>= 1;
                        C && (h[0] ^= -520093696)
                    }
                    return r
                },
                j: function(e, o, t) {
                    var a, r = t.length;
                    o = o.slice(0);
                    for (a = 0; a < r; a += 4) o[0] ^= 4294967295 & t[a], o[1] ^= 4294967295 & t[a + 1], o[2] ^= 4294967295 & t[a + 2], o[3] ^= 4294967295 & t[a + 3], o = n.mode.gcm.ka(o, e);
                    return o
                },
                C: function(e, o, t, a, r, h) {
                    var C, i, p, s, u, d, c, l, y = n.bitArray;
                    d = t.length;
                    c = y.bitLength(t);
                    l = y.bitLength(a);
                    i = y.bitLength(r);
                    C = o.encrypt([0, 0, 0, 0]);
                    96 === i ? (r = r.slice(0), r = y.concat(r, [1])) : (r = n.mode.gcm.j(C, [0, 0, 0, 0], r), r = n.mode.gcm.j(C, r, [0, 0, Math.floor(i / 4294967296), 4294967295 & i]));
                    i = n.mode.gcm.j(C, [0, 0, 0, 0], a);
                    u = r.slice(0);
                    a = i.slice(0);
                    e || (a = n.mode.gcm.j(C, i, t));
                    for (s = 0; s < d; s += 4) u[3]++, p = o.encrypt(u), t[s] ^= p[0], t[s + 1] ^= p[1], t[s + 2] ^= p[2], t[s + 3] ^= p[3];
                    t = y.clamp(t, c);
                    e && (a = n.mode.gcm.j(C, i, t));
                    e = [Math.floor(l / 4294967296), 4294967295 & l, Math.floor(c / 4294967296), 4294967295 & c];
                    a = n.mode.gcm.j(C, a, e);
                    p = o.encrypt(r);
                    a[0] ^= p[0];
                    a[1] ^= p[1];
                    a[2] ^= p[2];
                    a[3] ^= p[3];
                    return {
                        tag: y.bitSlice(a, 0, h),
                        data: t
                    }
                }
            };
            n.misc.hmac = function(e, o) {
                this.W = o = o || n.hash.sha256;
                var t, a = [
                        [],
                        []
                    ],
                    r = o.prototype.blockSize / 32;
                this.w = [new o, new o];
                e.length > r && (e = o.hash(e));
                for (t = 0; t < r; t++) a[0][t] = 909522486 ^ e[t], a[1][t] = 1549556828 ^ e[t];
                this.w[0].update(a[0]);
                this.w[1].update(a[1]);
                this.R = new o(this.w[0])
            };
            n.misc.hmac.prototype.encrypt = n.misc.hmac.prototype.mac = function(e) {
                if (this.aa) throw new n.exception.invalid("encrypt on already updated hmac called!");
                this.update(e);
                return this.digest(e)
            };
            n.misc.hmac.prototype.reset = function() {
                this.R = new this.W(this.w[0]);
                this.aa = !1
            };
            n.misc.hmac.prototype.update = function(e) {
                this.aa = !0;
                this.R.update(e)
            };
            n.misc.hmac.prototype.digest = function() {
                var e = this.R.finalize();
                e = new this.W(this.w[1]).update(e).finalize();
                this.reset();
                return e
            };
            n.misc.pbkdf2 = function(e, o, t, a, r) {
                t = t || 1e4;
                if (0 > a || 0 > t) throw new n.exception.invalid("invalid params to pbkdf2");
                "string" == typeof e && (e = n.codec.utf8String.toBits(e));
                "string" == typeof o && (o = n.codec.utf8String.toBits(o));
                e = new(r = r || n.misc.hmac)(e);
                var h, C, i, p, s = [],
                    u = n.bitArray;
                for (p = 1; 32 * s.length < (a || 1); p++) {
                    r = h = e.encrypt(u.concat(o, [p]));
                    for (C = 1; C < t; C++)
                        for (h = e.encrypt(h),
                            i = 0; i < h.length; i++) r[i] ^= h[i];
                    s = s.concat(r)
                }
                a && (s = u.clamp(s, a));
                return s
            };
            n.prng = function(e) {
                this.c = [new n.hash.sha256];
                this.m = [0];
                this.P = 0;
                this.H = {};
                this.N = 0;
                this.U = {};
                this.Z = this.f = this.o = this.ha = 0;
                this.b = [0, 0, 0, 0, 0, 0, 0, 0];
                this.h = [0, 0, 0, 0];
                this.L = void 0;
                this.M = e;
                this.D = !1;
                this.K = {
                    progress: {},
                    seeded: {}
                };
                this.u = this.ga = 0;
                this.I = 1;
                this.J = 2;
                this.ca = 65536;
                this.T = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024];
                this.da = 3e4;
                this.ba = 80
            };
            n.prng.prototype = {
                randomWords: function(e, o) {
                    var t, a, r = [];
                    if ((t = this.isReady(o)) === this.u) throw new n.exception.notReady("generator isn't seeded");
                    if (t & this.J) {
                        t = !(t & this.I);
                        a = [];
                        var h, p = 0;
                        this.Z = a[0] = (new Date).valueOf() + this.da;
                        for (h = 0; 16 > h; h++) a.push(4294967296 * Math.random() | 0);
                        for (h = 0; h < this.c.length && (a = a.concat(this.c[h].finalize()), p += this.m[h], this.m[h] = 0, t || !(this.P & 1 << h)); h++);
                        this.P >= 1 << this.c.length && (this.c.push(new n.hash.sha256), this.m.push(0));
                        this.f -= p;
                        p > this.o && (this.o = p);
                        this.P++;
                        this.b = n.hash.sha256.hash(this.b.concat(a));
                        this.L = new n.cipher.aes(this.b);
                        for (t = 0; 4 > t && (this.h[t] = this.h[t] + 1 | 0, !this.h[t]); t++);
                    }
                    for (t = 0; t < e; t += 4) 0 == (t + 1) % this.ca && C(this), a = i(this), r.push(a[0], a[1], a[2], a[3]);
                    C(this);
                    return r.slice(0, e)
                },
                setDefaultParanoia: function(e, o) {
                    if (0 === e && "Setting paranoia=0 will ruin your security; use it only for testing" !== o) throw new n.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");
                    this.M = e
                },
                addEntropy: function(e, o, t) {
                    t = t || "user";
                    var a, h, C = (new Date).valueOf(),
                        i = this.H[t],
                        p = this.isReady(),
                        s = 0;
                    void 0 === (a = this.U[t]) && (a = this.U[t] = this.ha++);
                    void 0 === i && (i = this.H[t] = 0);
                    this.H[t] = (this.H[t] + 1) % this.c.length;
                    switch (typeof e) {
                        case "number":
                            void 0 === o && (o = 1);
                            this.c[i].update([a, this.N++, 1, o, C, 1, 0 | e]);
                            break;
                        case "object":
                            if ("[object Uint32Array]" === (t = Object.prototype.toString.call(e))) {
                                h = [];
                                for (t = 0; t < e.length; t++) h.push(e[t]);
                                e = h
                            } else
                                for ("[object Array]" !== t && (s = 1), t = 0; t < e.length && !s; t++) "number" != typeof e[t] && (s = 1);
                            if (!s) {
                                if (void 0 === o)
                                    for (t = o = 0; t < e.length; t++)
                                        for (h = e[t]; 0 < h;) o++, h >>>= 1;
                                this.c[i].update([a, this.N++, 2, o, C, e.length].concat(e))
                            }
                            break;
                        case "string":
                            void 0 === o && (o = e.length);
                            this.c[i].update([a, this.N++, 3, o, C, e.length]);
                            this.c[i].update(e);
                            break;
                        default:
                            s = 1
                    }
                    if (s) throw new n.exception.bug("random: addEntropy only supports number, array of numbers or string");
                    this.m[i] += o;
                    this.f += o;
                    p === this.u && (this.isReady() !== this.u && r("seeded", Math.max(this.o, this.f)), r("progress", this.getProgress()))
                },
                isReady: function(e) {
                    e = this.T[void 0 !== e ? e : this.M];
                    return this.o && this.o >= e ? this.m[0] > this.ba && (new Date).valueOf() > this.Z ? this.J | this.I : this.I : this.f >= e ? this.J | this.u : this.u
                },
                getProgress: function(e) {
                    e = this.T[e || this.M];
                    return this.o >= e || this.f > e ? 1 : this.f / e
                },
                startCollectors: function() {
                    if (!this.D) {
                        this.a = {
                            loadTimeCollector: p(this, this.ma),
                            mouseCollector: p(this, this.oa),
                            keyboardCollector: p(this, this.la),
                            accelerometerCollector: p(this, this.ea),
                            touchCollector: p(this, this.qa)
                        };
                        if (window.addEventListener) window.addEventListener("load", this.a.loadTimeCollector, !1), window.addEventListener("mousemove", this.a.mouseCollector, !1), window.addEventListener("keypress", this.a.keyboardCollector, !1), window.addEventListener("devicemotion", this.a.accelerometerCollector, !1), window.addEventListener("touchmove", this.a.touchCollector, !1);
                        else {
                            if (!document.attachEvent) throw new n.exception.bug("can't attach event");
                            document.attachEvent("onload", this.a.loadTimeCollector), document.attachEvent("onmousemove", this.a.mouseCollector), document.attachEvent("keypress", this.a.keyboardCollector)
                        }
                        this.D = !0
                    }
                },
                stopCollectors: function() {
                    this.D && (window.removeEventListener ? (window.removeEventListener("load", this.a.loadTimeCollector, !1), window.removeEventListener("mousemove", this.a.mouseCollector, !1), window.removeEventListener("keypress", this.a.keyboardCollector, !1), window.removeEventListener("devicemotion", this.a.accelerometerCollector, !1),
                        window.removeEventListener("touchmove", this.a.touchCollector, !1)) : document.detachEvent && (document.detachEvent("onload", this.a.loadTimeCollector), document.detachEvent("onmousemove", this.a.mouseCollector), document.detachEvent("keypress", this.a.keyboardCollector)), this.D = !1)
                },
                addEventListener: function(e, o) {
                    this.K[e][this.ga++] = o
                },
                removeEventListener: function(e, o) {
                    var n, t, a = this.K[e],
                        r = [];
                    for (t in a) a.hasOwnProperty(t) && a[t] === o && r.push(t);
                    for (n = 0; n < r.length; n++) delete a[t = r[n]]
                },
                la: function() {
                    h(this, 1)
                },
                oa: function(e) {
                    var o, n;
                    try {
                        o = e.x || e.clientX || e.offsetX || 0, n = e.y || e.clientY || e.offsetY || 0
                    } catch (e) {
                        n = o = 0
                    }
                    0 != o && 0 != n && this.addEntropy([o, n], 2, "mouse");
                    h(this, 0)
                },
                qa: function(e) {
                    e = e.touches[0] || e.changedTouches[0];
                    this.addEntropy([e.pageX || e.clientX, e.pageY || e.clientY], 1, "touch");
                    h(this, 0)
                },
                ma: function() {
                    h(this, 2)
                },
                ea: function(e) {
                    e = e.accelerationIncludingGravity.x || e.accelerationIncludingGravity.y || e.accelerationIncludingGravity.z;
                    if (window.orientation) {
                        var o = window.orientation;
                        "number" == typeof o && this.addEntropy(o, 1, "accelerometer")
                    }
                    e && this.addEntropy(e, 2, "accelerometer");
                    h(this, 0)
                }
            };

            function r(e, o) {
                var t, a = n.random.K[e],
                    r = [];
                for (t in a) a.hasOwnProperty(t) && r.push(a[t]);
                for (t = 0; t < r.length; t++) r[t](o)
            }

            function h(e, o) {
                "undefined" != typeof window && window.performance && "function" == typeof window.performance.now ? e.addEntropy(window.performance.now(), o, "loadtime") : e.addEntropy((new Date).valueOf(), o, "loadtime")
            }

            function C(e) {
                e.b = i(e).concat(i(e));
                e.L = new n.cipher.aes(e.b)
            }

            function i(e) {
                for (var o = 0; 4 > o && (e.h[o] = e.h[o] + 1 | 0, !e.h[o]); o++);
                return e.L.encrypt(e.h)
            }

            function p(e, o) {
                return function() {
                    o.apply(e, arguments)
                }
            }
            n.random = new n.prng(6);
            e: try {
                var s, u, d, c;
                if (c = void 0 !== e && e.exports) {
                    var l;
                    try {
                        l = require("crypto")
                    } catch (e) {
                        l = null
                    }
                    c = u = l
                }
                if (c && u.randomBytes) s = u.randomBytes(128), s = new Uint32Array(new Uint8Array(s).buffer), n.random.addEntropy(s, 1024, "crypto['randomBytes']");
                else if ("undefined" != typeof window && "undefined" != typeof Uint32Array) {
                    d = new Uint32Array(32);
                    if (window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(d);
                    else {
                        if (!window.msCrypto || !window.msCrypto.getRandomValues) break e;
                        window.msCrypto.getRandomValues(d)
                    }
                    n.random.addEntropy(d, 1024, "crypto['getRandomValues']")
                }
            } catch (e) {
                "undefined" != typeof window && window.console && (console.log("There was an error collecting entropy from the browser:"), console.log(e))
            }
            n.json = {
                defaults: {
                    v: 1,
                    iter: 1e4,
                    ks: 128,
                    ts: 64,
                    mode: "ccm",
                    adata: "",
                    cipher: "aes"
                },
                ja: function(e, o, t, a) {
                    t = t || {};
                    a = a || {};
                    var r, h = n.json,
                        C = h.g({
                            iv: n.random.randomWords(4, 0)
                        }, h.defaults);
                    h.g(C, t);
                    t = C.adata;
                    "string" == typeof C.salt && (C.salt = n.codec.base64.toBits(C.salt));
                    "string" == typeof C.iv && (C.iv = n.codec.base64.toBits(C.iv));
                    if (!n.mode[C.mode] || !n.cipher[C.cipher] || "string" == typeof e && 100 >= C.iter || 64 !== C.ts && 96 !== C.ts && 128 !== C.ts || 128 !== C.ks && 192 !== C.ks && 256 !== C.ks || 2 > C.iv.length || 4 < C.iv.length) throw new n.exception.invalid("json encrypt: invalid parameters");
                    "string" == typeof e ? (e = (r = n.misc.cachedPbkdf2(e, C)).key.slice(0, C.ks / 32), C.salt = r.salt) : n.ecc && e instanceof n.ecc.elGamal.publicKey && (r = e.kem(), C.kemtag = r.tag, e = r.key.slice(0, C.ks / 32));
                    "string" == typeof o && (o = n.codec.utf8String.toBits(o));
                    "string" == typeof t && (C.adata = t = n.codec.utf8String.toBits(t));
                    r = new n.cipher[C.cipher](e);
                    h.g(a, C);
                    a.key = e;
                    C.ct = "ccm" === C.mode && n.arrayBuffer && n.arrayBuffer.ccm && o instanceof ArrayBuffer ? n.arrayBuffer.ccm.encrypt(r, o, C.iv, t, C.ts) : n.mode[C.mode].encrypt(r, o, C.iv, t, C.ts);
                    return C
                },
                encrypt: function(e, o, t, a) {
                    var r = n.json,
                        h = r.ja.apply(r, arguments);
                    return r.encode(h)
                },
                ia: function(e, o, t, a) {
                    t = t || {};
                    a = a || {};
                    var r, h, C = n.json;
                    r = (o = C.g(C.g(C.g({}, C.defaults), o), t, !0)).adata;
                    "string" == typeof o.salt && (o.salt = n.codec.base64.toBits(o.salt));
                    "string" == typeof o.iv && (o.iv = n.codec.base64.toBits(o.iv));
                    if (!n.mode[o.mode] || !n.cipher[o.cipher] || "string" == typeof e && 100 >= o.iter || 64 !== o.ts && 96 !== o.ts && 128 !== o.ts || 128 !== o.ks && 192 !== o.ks && 256 !== o.ks || !o.iv || 2 > o.iv.length || 4 < o.iv.length) throw new n.exception.invalid("json decrypt: invalid parameters");
                    "string" == typeof e ? (e = (h = n.misc.cachedPbkdf2(e, o)).key.slice(0, o.ks / 32), o.salt = h.salt) : n.ecc && e instanceof n.ecc.elGamal.secretKey && (e = e.unkem(n.codec.base64.toBits(o.kemtag)).slice(0, o.ks / 32));
                    "string" == typeof r && (r = n.codec.utf8String.toBits(r));
                    h = new n.cipher[o.cipher](e);
                    r = "ccm" === o.mode && n.arrayBuffer && n.arrayBuffer.ccm && o.ct instanceof ArrayBuffer ? n.arrayBuffer.ccm.decrypt(h, o.ct, o.iv, o.tag, r, o.ts) : n.mode[o.mode].decrypt(h, o.ct, o.iv, r, o.ts);
                    C.g(a, o);
                    a.key = e;
                    return 1 === t.raw ? r : n.codec.utf8String.fromBits(r)
                },
                decrypt: function(e, o, t, a) {
                    var r = n.json;
                    return r.ia(e, r.decode(o), t, a)
                },
                encode: function(e) {
                    var o, t = "{",
                        a = "";
                    for (o in e)
                        if (e.hasOwnProperty(o)) {
                            if (!o.match(/^[a-z0-9]+$/i)) throw new n.exception.invalid("json encode: invalid property name");
                            t += a + '"' + o + '":';
                            a = ",";
                            switch (typeof e[o]) {
                                case "number":
                                case "boolean":
                                    t += e[o];
                                    break;
                                case "string":
                                    t += '"' + escape(e[o]) + '"';
                                    break;
                                case "object":
                                    t += '"' + n.codec.base64.fromBits(e[o], 0) + '"';
                                    break;
                                default:
                                    throw new n.exception.bug("json encode: unsupported type")
                            }
                        } return t + "}"
                },
                decode: function(e) {
                    if (!(e = e.replace(/\s/g, "")).match(/^\{.*\}$/)) throw new n.exception.invalid("json decode: this isn't json!");
                    e = e.replace(/^\{|\}$/g, "").split(/,/);
                    var o, t, a = {};
                    for (o = 0; o < e.length; o++) {
                        if (!(t = e[o].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i))) throw new n.exception.invalid("json decode: this isn't json!");
                        null != t[3] ? a[t[2]] = parseInt(t[3], 10) : null != t[4] ? a[t[2]] = t[2].match(/^(ct|adata|salt|iv)$/) ? n.codec.base64.toBits(t[4]) : unescape(t[4]) : null != t[5] && (a[t[2]] = "true" === t[5])
                    }
                    return a
                },
                g: function(e, o, t) {
                    void 0 === e && (e = {});
                    if (void 0 === o) return e;
                    for (var a in o)
                        if (o.hasOwnProperty(a)) {
                            if (t && void 0 !== e[a] && e[a] !== o[a]) throw new n.exception.invalid("required parameter overridden");
                            e[a] = o[a]
                        } return e
                },
                sa: function(e, o) {
                    var n, t = {};
                    for (n in e) e.hasOwnProperty(n) && e[n] !== o[n] && (t[n] = e[n]);
                    return t
                },
                ra: function(e, o) {
                    var n, t = {};
                    for (n = 0; n < o.length; n++) void 0 !== e[o[n]] && (t[o[n]] = e[o[n]]);
                    return t
                }
            };
            n.encrypt = n.json.encrypt;
            n.decrypt = n.json.decrypt;
            n.misc.pa = {};
            n.misc.cachedPbkdf2 = function(e, o) {
                var t, a = n.misc.pa;
                t = (o = o || {}).iter || 1e3;
                (t = (a = a[e] = a[e] || {})[t] = a[t] || {
                    firstSalt: o.salt && o.salt.length ? o.salt.slice(0) : n.random.randomWords(2, 0)
                })[a = void 0 === o.salt ? t.firstSalt : o.salt] = t[a] || n.misc.pbkdf2(e, a, o.iter);
                return {
                    key: t[a].slice(0),
                    salt: a.slice(0)
                }
            };
            void 0 !== e && e.exports && (e.exports = n);
            "function" == typeof define && define([], (function() {
                return n
            }))
        },
        268335: (e, o, n) => {
            "use strict";
            n.d(o, {
                Z: () => t
            });
            const t = [{
                name: "Afghanistan",
                alpha2: "AF",
                phoneCountryCode: "+93",
                phoneCountryCodes: ["+93"]
            }, {
                name: "Aland Islands",
                alpha2: "AX",
                phoneCountryCode: "+358",
                phoneCountryCodes: ["+358"]
            }, {
                name: "Albania",
                alpha2: "AL",
                phoneCountryCode: "+355",
                phoneCountryCodes: ["+355"]
            }, {
                name: "Algeria",
                alpha2: "DZ",
                phoneCountryCode: "+213",
                phoneCountryCodes: ["+213"]
            }, {
                name: "American Samoa",
                alpha2: "AS",
                phoneCountryCode: "+1 684",
                phoneCountryCodes: ["+1 684"]
            }, {
                name: "Andorra",
                alpha2: "AD",
                phoneCountryCode: "+376",
                phoneCountryCodes: ["+376"]
            }, {
                name: "Angola",
                alpha2: "AO",
                phoneCountryCode: "+244",
                phoneCountryCodes: ["+244"]
            }, {
                name: "Anguilla",
                alpha2: "AI",
                phoneCountryCode: "+1 264",
                phoneCountryCodes: ["+1 264"]
            }, {
                name: "Antarctica",
                alpha2: "AQ",
                phoneCountryCode: "+672",
                phoneCountryCodes: ["+672"]
            }, {
                name: "Antigua and Barbuda",
                alpha2: "AG",
                phoneCountryCode: "+1 268",
                phoneCountryCodes: ["+1 268"]
            }, {
                name: "Argentina",
                alpha2: "AR",
                phoneCountryCode: "+54",
                phoneCountryCodes: ["+54"],
                localeForICU: "es-AR",
                currencyCode: "ars"
            }, {
                name: "Armenia",
                alpha2: "AM",
                phoneCountryCode: "+374",
                phoneCountryCodes: ["+374"]
            }, {
                name: "Aruba",
                alpha2: "AW",
                phoneCountryCode: "+297",
                phoneCountryCodes: ["+297"]
            }, {
                name: "Ascension",
                alpha2: "AC",
                phoneCountryCode: "+247",
                phoneCountryCodes: ["+247"]
            }, {
                name: "Australia",
                alpha2: "AU",
                phoneCountryCode: "+61",
                phoneCountryCodes: ["+61"],
                localeForICU: "en-AU",
                currencyCode: "aud"
            }, {
                name: "Austria",
                alpha2: "AT",
                phoneCountryCode: "+43",
                phoneCountryCodes: ["+43"]
            }, {
                name: "Azerbaijan",
                alpha2: "AZ",
                phoneCountryCode: "+994",
                phoneCountryCodes: ["+994"]
            }, {
                name: "Bahamas",
                alpha2: "BS",
                phoneCountryCode: "+1 242",
                phoneCountryCodes: ["+1 242"]
            }, {
                name: "Bahrain",
                alpha2: "BH",
                phoneCountryCode: "+973",
                phoneCountryCodes: ["+973"]
            }, {
                name: "Bangladesh",
                alpha2: "BD",
                phoneCountryCode: "+880",
                phoneCountryCodes: ["+880"]
            }, {
                name: "Barbados",
                alpha2: "BB",
                phoneCountryCode: "+1 246",
                phoneCountryCodes: ["+1 246"]
            }, {
                name: "Belarus",
                alpha2: "BY",
                phoneCountryCode: "+375",
                phoneCountryCodes: ["+375"]
            }, {
                name: "Belgium",
                alpha2: "BE",
                phoneCountryCode: "+32",
                phoneCountryCodes: ["+32"]
            }, {
                name: "Belize",
                alpha2: "BZ",
                phoneCountryCode: "+501",
                phoneCountryCodes: ["+501"]
            }, {
                name: "Benin",
                alpha2: "BJ",
                phoneCountryCode: "+229",
                phoneCountryCodes: ["+229"]
            }, {
                name: "Bermuda",
                alpha2: "BM",
                phoneCountryCode: "+1 441",
                phoneCountryCodes: ["+1 441"]
            }, {
                name: "Bhutan",
                alpha2: "BT",
                phoneCountryCode: "+975",
                phoneCountryCodes: ["+975"]
            }, {
                name: "Bolivia, Plurinational State of",
                alpha2: "BO",
                phoneCountryCode: "+591",
                phoneCountryCodes: ["+591"]
            }, {
                name: "Bonaire, Sint Eustatius and Saba",
                alpha2: "BQ",
                phoneCountryCode: "+599",
                phoneCountryCodes: ["+599"]
            }, {
                name: "Bosnia and Herzegovina",
                alpha2: "BA",
                phoneCountryCode: "+387",
                phoneCountryCodes: ["+387"]
            }, {
                name: "Botswana",
                alpha2: "BW",
                phoneCountryCode: "+267",
                phoneCountryCodes: ["+267"]
            }, {
                name: "Bouvet Island",
                alpha2: "BV",
                phoneCountryCode: "+55",
                phoneCountryCodes: ["+55"]
            }, {
                name: "Brazil",
                alpha2: "BR",
                phoneCountryCode: "+55",
                phoneCountryCodes: ["+55"]
            }, {
                name: "British Indian Ocean Territory",
                alpha2: "IO",
                phoneCountryCode: "+246",
                phoneCountryCodes: ["+246"]
            }, {
                name: "Brunei Darussalam",
                alpha2: "BN",
                phoneCountryCode: "+673",
                phoneCountryCodes: ["+673"]
            }, {
                name: "Bulgaria",
                alpha2: "BG",
                phoneCountryCode: "+359",
                phoneCountryCodes: ["+359"]
            }, {
                name: "Burkina Faso",
                alpha2: "BF",
                phoneCountryCode: "+226",
                phoneCountryCodes: ["+226"]
            }, {
                name: "Burundi",
                alpha2: "BI",
                phoneCountryCode: "+257",
                phoneCountryCodes: ["+257"]
            }, {
                name: "Cambodia",
                alpha2: "KH",
                phoneCountryCode: "+855",
                phoneCountryCodes: ["+855"]
            }, {
                name: "Cameroon",
                alpha2: "CM",
                phoneCountryCode: "+237",
                phoneCountryCodes: ["+237"]
            }, {
                name: "Canada",
                alpha2: "CA",
                phoneCountryCode: "+1",
                phoneCountryCodes: ["+1"]
            }, {
                name: "Cape Verde",
                alpha2: "CV",
                phoneCountryCode: "+238",
                phoneCountryCodes: ["+238"]
            }, {
                name: "Cayman Islands",
                alpha2: "KY",
                phoneCountryCode: "+1 345",
                phoneCountryCodes: ["+1 345"]
            }, {
                name: "Central African Republic",
                alpha2: "CF",
                phoneCountryCode: "+236",
                phoneCountryCodes: ["+236"]
            }, {
                name: "Chad",
                alpha2: "TD",
                phoneCountryCode: "+235",
                phoneCountryCodes: ["+235"]
            }, {
                name: "Chile",
                alpha2: "CL",
                phoneCountryCode: "+56",
                phoneCountryCodes: ["+56"],
                localeForICU: "es-CL",
                currencyCode: "clp"
            }, {
                name: "China",
                alpha2: "CN",
                phoneCountryCode: "+86",
                phoneCountryCodes: ["+86"]
            }, {
                name: "Christmas Island",
                alpha2: "CX",
                phoneCountryCode: "+61",
                phoneCountryCodes: ["+61"]
            }, {
                name: "Cocos (Keeling) Islands",
                alpha2: "CC",
                phoneCountryCode: "+61",
                phoneCountryCodes: ["+61"]
            }, {
                name: "Colombia",
                alpha2: "CO",
                phoneCountryCode: "+57",
                phoneCountryCodes: ["+57"],
                localeForICU: "es-CO",
                currencyCode: "cop"
            }, {
                name: "Comoros",
                alpha2: "KM",
                phoneCountryCode: "+269",
                phoneCountryCodes: ["+269"]
            }, {
                name: "Congo",
                alpha2: "CG",
                phoneCountryCode: "+242",
                phoneCountryCodes: ["+242"]
            }, {
                name: "Congo, The Democratic Republic of the",
                alpha2: "CD",
                phoneCountryCode: "+243",
                phoneCountryCodes: ["+243"]
            }, {
                name: "Cook Islands",
                alpha2: "CK",
                phoneCountryCode: "+682",
                phoneCountryCodes: ["+682"]
            }, {
                name: "Costa Rica",
                alpha2: "CR",
                phoneCountryCode: "+506",
                phoneCountryCodes: ["+506"]
            }, {
                name: "Cote d'Ivoire",
                alpha2: "CI",
                phoneCountryCode: "+225",
                phoneCountryCodes: ["+225"]
            }, {
                name: "Croatia",
                alpha2: "HR",
                phoneCountryCode: "+385",
                phoneCountryCodes: ["+385"]
            }, {
                name: "Cuba",
                alpha2: "CU",
                phoneCountryCode: "+53",
                phoneCountryCodes: ["+53"]
            }, {
                name: "Curacao",
                alpha2: "CW",
                phoneCountryCode: "+599",
                phoneCountryCodes: ["+599"]
            }, {
                name: "Cyprus",
                alpha2: "CY",
                phoneCountryCode: "+357",
                phoneCountryCodes: ["+357"]
            }, {
                name: "Czech Republic",
                alpha2: "CZ",
                phoneCountryCode: "+420",
                phoneCountryCodes: ["+420"]
            }, {
                name: "Denmark",
                alpha2: "DK",
                phoneCountryCode: "+45",
                phoneCountryCodes: ["+45"]
            }, {
                name: "Diego Garcia",
                alpha2: "DG",
                phoneCountryCode: "+246",
                phoneCountryCodes: ["+246"]
            }, {
                name: "Djibouti",
                alpha2: "DJ",
                phoneCountryCode: "+253",
                phoneCountryCodes: ["+253"]
            }, {
                name: "Dominica",
                alpha2: "DM",
                phoneCountryCode: "+1 767",
                phoneCountryCodes: ["+1 767"]
            }, {
                name: "Dominican Republic",
                alpha2: "DO",
                phoneCountryCode: "+1 809",
                phoneCountryCodes: ["+1 809", "+1 829", "+1 849"]
            }, {
                name: "East Timor",
                alpha2: "TP",
                phoneCountryCode: "+670",
                phoneCountryCodes: ["+670"]
            }, {
                name: "Ecuador",
                alpha2: "EC",
                phoneCountryCode: "+593",
                phoneCountryCodes: ["+593"]
            }, {
                name: "Egypt",
                alpha2: "EG",
                phoneCountryCode: "+20",
                phoneCountryCodes: ["+20"]
            }, {
                name: "El Salvador",
                alpha2: "SV",
                phoneCountryCode: "+503",
                phoneCountryCodes: ["+503"]
            }, {
                name: "Equatorial Guinea",
                alpha2: "GQ",
                phoneCountryCode: "+240",
                phoneCountryCodes: ["+240"]
            }, {
                name: "Eritrea",
                alpha2: "ER",
                phoneCountryCode: "+291",
                phoneCountryCodes: ["+291"]
            }, {
                name: "Estonia",
                alpha2: "EE",
                phoneCountryCode: "+372",
                phoneCountryCodes: ["+372"]
            }, {
                name: "Ethiopia",
                alpha2: "ET",
                phoneCountryCode: "+251",
                phoneCountryCodes: ["+251"]
            }, {
                name: "Falkland Islands (Malvinas)",
                alpha2: "FK",
                phoneCountryCode: "+500",
                phoneCountryCodes: ["+500"]
            }, {
                name: "Faroe Islands",
                alpha2: "FO",
                phoneCountryCode: "+298",
                phoneCountryCodes: ["+298"]
            }, {
                name: "Fiji",
                alpha2: "FJ",
                phoneCountryCode: "+679",
                phoneCountryCodes: ["+679"]
            }, {
                name: "Finland",
                alpha2: "FI",
                phoneCountryCode: "+358",
                phoneCountryCodes: ["+358"]
            }, {
                name: "France",
                alpha2: "FR",
                phoneCountryCode: "+33",
                phoneCountryCodes: ["+33"]
            }, {
                name: "French Guiana",
                alpha2: "GF",
                phoneCountryCode: "+594",
                phoneCountryCodes: ["+594"]
            }, {
                name: "French Polynesia",
                alpha2: "PF",
                phoneCountryCode: "+689",
                phoneCountryCodes: ["+689"]
            }, {
                name: "French Southern Territories",
                alpha2: "TF",
                phoneCountryCode: "+262",
                phoneCountryCodes: ["+262"]
            }, {
                name: "Gabon",
                alpha2: "GA",
                phoneCountryCode: "+241",
                phoneCountryCodes: ["+241"]
            }, {
                name: "Gambia",
                alpha2: "GM",
                phoneCountryCode: "+220",
                phoneCountryCodes: ["+220"]
            }, {
                name: "Georgia",
                alpha2: "GE",
                phoneCountryCode: "+995",
                phoneCountryCodes: ["+995"]
            }, {
                name: "Germany",
                alpha2: "DE",
                phoneCountryCode: "+49",
                phoneCountryCodes: ["+49"]
            }, {
                name: "Ghana",
                alpha2: "GH",
                phoneCountryCode: "+233",
                phoneCountryCodes: ["+233"]
            }, {
                name: "Gibraltar",
                alpha2: "GI",
                phoneCountryCode: "+350",
                phoneCountryCodes: ["+350"]
            }, {
                name: "Greece",
                alpha2: "GR",
                phoneCountryCode: "+30",
                phoneCountryCodes: ["+30"]
            }, {
                name: "Greenland",
                alpha2: "GL",
                phoneCountryCode: "+299",
                phoneCountryCodes: ["+299"]
            }, {
                name: "Grenada",
                alpha2: "GD",
                phoneCountryCode: "+1 473",
                phoneCountryCodes: ["+1 473"]
            }, {
                name: "Guadeloupe",
                alpha2: "GP",
                phoneCountryCode: "+590",
                phoneCountryCodes: ["+590"]
            }, {
                name: "Guam",
                alpha2: "GU",
                phoneCountryCode: "+1 671",
                phoneCountryCodes: ["+1 671"]
            }, {
                name: "Guatemala",
                alpha2: "GT",
                phoneCountryCode: "+502",
                phoneCountryCodes: ["+502"]
            }, {
                name: "Guernsey",
                alpha2: "GG",
                phoneCountryCode: "+44",
                phoneCountryCodes: ["+44"]
            }, {
                name: "Guinea",
                alpha2: "GN",
                phoneCountryCode: "+224",
                phoneCountryCodes: ["+224"]
            }, {
                name: "Guinea-Bissau",
                alpha2: "GW",
                phoneCountryCode: "+245",
                phoneCountryCodes: ["+245"]
            }, {
                name: "Guyana",
                alpha2: "GY",
                phoneCountryCode: "+592",
                phoneCountryCodes: ["+592"]
            }, {
                name: "Haiti",
                alpha2: "HT",
                phoneCountryCode: "+509",
                phoneCountryCodes: ["+509"]
            }, {
                name: "Heard Island and McDonald Islands",
                alpha2: "HM",
                phoneCountryCode: "+672",
                phoneCountryCodes: ["+672"]
            }, {
                name: "Holy See (Vatican City State)",
                alpha2: "VA",
                phoneCountryCode: "+39",
                phoneCountryCodes: ["+39"]
            }, {
                name: "Honduras",
                alpha2: "HN",
                phoneCountryCode: "+504",
                phoneCountryCodes: ["+504"]
            }, {
                name: "Hong Kong",
                alpha2: "HK",
                phoneCountryCode: "+852",
                phoneCountryCodes: ["+852"]
            }, {
                name: "Hungary",
                alpha2: "HU",
                phoneCountryCode: "+36",
                phoneCountryCodes: ["+36"]
            }, {
                name: "Iceland",
                alpha2: "IS",
                phoneCountryCode: "+354",
                phoneCountryCodes: ["+354"]
            }, {
                name: "India",
                alpha2: "IN",
                phoneCountryCode: "+91",
                phoneCountryCodes: ["+91"]
            }, {
                name: "Indonesia",
                alpha2: "ID",
                phoneCountryCode: "+62",
                phoneCountryCodes: ["+62"],
                localeForICU: "id",
                currencyCode: "idr"
            }, {
                name: "Iran, Islamic Republic of",
                alpha2: "IR",
                phoneCountryCode: "+98",
                phoneCountryCodes: ["+98"]
            }, {
                name: "Iraq",
                alpha2: "IQ",
                phoneCountryCode: "+964",
                phoneCountryCodes: ["+964"]
            }, {
                name: "Ireland",
                alpha2: "IE",
                phoneCountryCode: "+353",
                phoneCountryCodes: ["+353"]
            }, {
                name: "Isle of Man",
                alpha2: "IM",
                phoneCountryCode: "+44",
                phoneCountryCodes: ["+44"]
            }, {
                name: "Israel",
                alpha2: "IL",
                phoneCountryCode: "+972",
                phoneCountryCodes: ["+972"]
            }, {
                name: "Italy",
                alpha2: "IT",
                phoneCountryCode: "+39",
                phoneCountryCodes: ["+39"]
            }, {
                name: "Jamaica",
                alpha2: "JM",
                phoneCountryCode: "+1 876",
                phoneCountryCodes: ["+1 876"]
            }, {
                name: "Japan",
                alpha2: "JP",
                phoneCountryCode: "+81",
                phoneCountryCodes: ["+81"],
                localeForICU: "jp",
                currencyCode: "jpy"
            }, {
                name: "Jersey",
                alpha2: "JE",
                phoneCountryCode: "+44",
                phoneCountryCodes: ["+44"]
            }, {
                name: "Jordan",
                alpha2: "JO",
                phoneCountryCode: "+962",
                phoneCountryCodes: ["+962"]
            }, {
                name: "Kazakhstan",
                alpha2: "KZ",
                phoneCountryCode: "+7",
                phoneCountryCodes: ["+7"]
            }, {
                name: "Kenya",
                alpha2: "KE",
                phoneCountryCode: "+254",
                phoneCountryCodes: ["+254"]
            }, {
                name: "Kiribati",
                alpha2: "KI",
                phoneCountryCode: "+686",
                phoneCountryCodes: ["+686"]
            }, {
                name: "Kosovo",
                alpha2: "XK",
                phoneCountryCode: "+383",
                phoneCountryCodes: ["+383"]
            }, {
                name: "Korea, Democratic People's Republic of",
                alpha2: "KP",
                phoneCountryCode: "+850",
                phoneCountryCodes: ["+850"]
            }, {
                name: "Korea, Republic of",
                alpha2: "KR",
                phoneCountryCode: "+82",
                phoneCountryCodes: ["+82"]
            }, {
                name: "Kuwait",
                alpha2: "KW",
                phoneCountryCode: "+965",
                phoneCountryCodes: ["+965"]
            }, {
                name: "Kyrgyzstan",
                alpha2: "KG",
                phoneCountryCode: "+996",
                phoneCountryCodes: ["+996"]
            }, {
                name: "Lao People's Democratic Republic",
                alpha2: "LA",
                phoneCountryCode: "+856",
                phoneCountryCodes: ["+856"]
            }, {
                name: "Latvia",
                alpha2: "LV",
                phoneCountryCode: "+371",
                phoneCountryCodes: ["+371"]
            }, {
                name: "Lebanon",
                alpha2: "LB",
                phoneCountryCode: "+961",
                phoneCountryCodes: ["+961"]
            }, {
                name: "Lesotho",
                alpha2: "LS",
                phoneCountryCode: "+266",
                phoneCountryCodes: ["+266"]
            }, {
                name: "Liberia",
                alpha2: "LR",
                phoneCountryCode: "+231",
                phoneCountryCodes: ["+231"]
            }, {
                name: "Libya",
                alpha2: "LY",
                phoneCountryCode: "+218",
                phoneCountryCodes: ["+218"]
            }, {
                name: "Liechtenstein",
                alpha2: "LI",
                phoneCountryCode: "+423",
                phoneCountryCodes: ["+423"]
            }, {
                name: "Lithuania",
                alpha2: "LT",
                phoneCountryCode: "+370",
                phoneCountryCodes: ["+370"]
            }, {
                name: "Luxembourg",
                alpha2: "LU",
                phoneCountryCode: "+352",
                phoneCountryCodes: ["+352"]
            }, {
                name: "Macao",
                alpha2: "MO",
                phoneCountryCode: "+853",
                phoneCountryCodes: ["+853"]
            }, {
                name: "Macedonia, Republic of",
                alpha2: "MK",
                phoneCountryCode: "+389",
                phoneCountryCodes: ["+389"]
            }, {
                name: "Madagascar",
                alpha2: "MG",
                phoneCountryCode: "+261",
                phoneCountryCodes: ["+261"]
            }, {
                name: "Malawi",
                alpha2: "MW",
                phoneCountryCode: "+265",
                phoneCountryCodes: ["+265"]
            }, {
                name: "Malaysia",
                alpha2: "MY",
                phoneCountryCode: "+60",
                phoneCountryCodes: ["+60"],
                localeForICU: "ms",
                currencyCode: "myr"
            }, {
                name: "Maldives",
                alpha2: "MV",
                phoneCountryCode: "+960",
                phoneCountryCodes: ["+960"]
            }, {
                name: "Mali",
                alpha2: "ML",
                phoneCountryCode: "+223",
                phoneCountryCodes: ["+223"]
            }, {
                name: "Malta",
                alpha2: "MT",
                phoneCountryCode: "+356",
                phoneCountryCodes: ["+356"]
            }, {
                name: "Marshall Islands",
                alpha2: "MH",
                phoneCountryCode: "+692",
                phoneCountryCodes: ["+692"]
            }, {
                name: "Martinique",
                alpha2: "MQ",
                phoneCountryCode: "+596",
                phoneCountryCodes: ["+596"]
            }, {
                name: "Mauritania",
                alpha2: "MR",
                phoneCountryCode: "+222",
                phoneCountryCodes: ["+222"]
            }, {
                name: "Mauritius",
                alpha2: "MU",
                phoneCountryCode: "+230",
                phoneCountryCodes: ["+230"]
            }, {
                name: "Mayotte",
                alpha2: "YT",
                phoneCountryCode: "+262",
                phoneCountryCodes: ["+262"]
            }, {
                name: "Mexico",
                alpha2: "MX",
                phoneCountryCode: "+52",
                phoneCountryCodes: ["+52"]
            }, {
                name: "Micronesia, Federated States of",
                alpha2: "FM",
                phoneCountryCode: "+691",
                phoneCountryCodes: ["+691"]
            }, {
                name: "Midway Island",
                alpha2: "MI",
                phoneCountryCode: "+1 808",
                phoneCountryCodes: ["+1 808"]
            }, {
                name: "Moldova, Republic of",
                alpha2: "MD",
                phoneCountryCode: "+373",
                phoneCountryCodes: ["+373"]
            }, {
                name: "Monaco",
                alpha2: "MC",
                phoneCountryCode: "+377",
                phoneCountryCodes: ["+377"]
            }, {
                name: "Mongolia",
                alpha2: "MN",
                phoneCountryCode: "+976",
                phoneCountryCodes: ["+976"]
            }, {
                name: "Montenegro",
                alpha2: "ME",
                phoneCountryCode: "+382",
                phoneCountryCodes: ["+382"]
            }, {
                name: "Montserrat",
                alpha2: "MS",
                phoneCountryCode: "+1664",
                phoneCountryCodes: ["+1664"]
            }, {
                name: "Morocco",
                alpha2: "MA",
                phoneCountryCode: "+212",
                phoneCountryCodes: ["+212"]
            }, {
                name: "Mozambique",
                alpha2: "MZ",
                phoneCountryCode: "+258",
                phoneCountryCodes: ["+258"]
            }, {
                name: "Myanmar",
                alpha2: "MM",
                phoneCountryCode: "+95",
                phoneCountryCodes: ["+95"]
            }, {
                name: "Namibia",
                alpha2: "NA",
                phoneCountryCode: "+264",
                phoneCountryCodes: ["+264"]
            }, {
                name: "Nauru",
                alpha2: "NR",
                phoneCountryCode: "+674",
                phoneCountryCodes: ["+674"]
            }, {
                name: "Nepal",
                alpha2: "NP",
                phoneCountryCode: "+977",
                phoneCountryCodes: ["+977"]
            }, {
                name: "Netherlands",
                alpha2: "NL",
                phoneCountryCode: "+31",
                phoneCountryCodes: ["+31"]
            }, {
                name: "Netherlands Antilles",
                alpha2: "AN",
                phoneCountryCode: "+599",
                phoneCountryCodes: ["+599"]
            }, {
                name: "New Caledonia",
                alpha2: "NC",
                phoneCountryCode: "+687",
                phoneCountryCodes: ["+687"]
            }, {
                name: "New Zealand",
                alpha2: "NZ",
                phoneCountryCode: "+64",
                phoneCountryCodes: ["+64"]
            }, {
                name: "Nicaragua",
                alpha2: "NI",
                phoneCountryCode: "+505",
                phoneCountryCodes: ["+505"]
            }, {
                name: "Niger",
                alpha2: "NE",
                phoneCountryCode: "+227",
                phoneCountryCodes: ["+227"]
            }, {
                name: "Nigeria",
                alpha2: "NG",
                phoneCountryCode: "+234",
                phoneCountryCodes: ["+234"]
            }, {
                name: "Niue",
                alpha2: "NU",
                phoneCountryCode: "+683",
                phoneCountryCodes: ["+683"]
            }, {
                name: "Norfolk Island",
                alpha2: "NF",
                phoneCountryCode: "+672",
                phoneCountryCodes: ["+672"]
            }, {
                name: "Northern Mariana Islands",
                alpha2: "MP",
                phoneCountryCode: "+1 670",
                phoneCountryCodes: ["+1 670"]
            }, {
                name: "Norway",
                alpha2: "NO",
                phoneCountryCode: "+47",
                phoneCountryCodes: ["+47"]
            }, {
                name: "Oman",
                alpha2: "OM",
                phoneCountryCode: "+968",
                phoneCountryCodes: ["+968"]
            }, {
                name: "Pakistan",
                alpha2: "PK",
                phoneCountryCode: "+92",
                phoneCountryCodes: ["+92"]
            }, {
                name: "Palau",
                alpha2: "PW",
                phoneCountryCode: "+680",
                phoneCountryCodes: ["+680"]
            }, {
                name: "Palestine, State of",
                alpha2: "PS",
                phoneCountryCode: "+970",
                phoneCountryCodes: ["+970"]
            }, {
                name: "Panama",
                alpha2: "PA",
                phoneCountryCode: "+507",
                phoneCountryCodes: ["+507"]
            }, {
                name: "Papua New Guinea",
                alpha2: "PG",
                phoneCountryCode: "+675",
                phoneCountryCodes: ["+675"]
            }, {
                name: "Paraguay",
                alpha2: "PY",
                phoneCountryCode: "+595",
                phoneCountryCodes: ["+595"]
            }, {
                name: "Peru",
                alpha2: "PE",
                phoneCountryCode: "+51",
                phoneCountryCodes: ["+51"],
                localeForICU: "es-PE",
                currencyCode: "pen"
            }, {
                name: "Philippines",
                alpha2: "PH",
                phoneCountryCode: "+63",
                phoneCountryCodes: ["+63"],
                localeForICU: "en-PH",
                currencyCode: "php"
            }, {
                name: "Pitcairn",
                alpha2: "PN",
                phoneCountryCode: "+64",
                phoneCountryCodes: ["+64"]
            }, {
                name: "Poland",
                alpha2: "PL",
                phoneCountryCode: "+48",
                phoneCountryCodes: ["+48"]
            }, {
                name: "Portugal",
                alpha2: "PT",
                phoneCountryCode: "+351",
                phoneCountryCodes: ["+351"]
            }, {
                name: "Puerto Rico",
                alpha2: "PR",
                phoneCountryCode: "+1 787",
                phoneCountryCodes: ["+1 787"]
            }, {
                name: "Qatar",
                alpha2: "QA",
                phoneCountryCode: "+974",
                phoneCountryCodes: ["+974"]
            }, {
                name: "Reunion",
                alpha2: "RE",
                phoneCountryCode: "+262",
                phoneCountryCodes: ["+262"]
            }, {
                name: "Romania",
                alpha2: "RO",
                phoneCountryCode: "+40",
                phoneCountryCodes: ["+40"]
            }, {
                name: "Russian Federation",
                alpha2: "RU",
                phoneCountryCode: "+7",
                phoneCountryCodes: ["+7"]
            }, {
                name: "Rwanda",
                alpha2: "RW",
                phoneCountryCode: "+250",
                phoneCountryCodes: ["+250"]
            }, {
                name: "Saint Barthélemy",
                alpha2: "BL",
                phoneCountryCode: "+590",
                phoneCountryCodes: ["+590"]
            }, {
                name: "Saint Helena, Ascension and Tristan da Cunha",
                alpha2: "SH",
                phoneCountryCode: "+290",
                phoneCountryCodes: ["+290"]
            }, {
                name: "Saint Kitts and Nevis",
                alpha2: "KN",
                phoneCountryCode: "+1 869",
                phoneCountryCodes: ["+1 869"]
            }, {
                name: "Saint Lucia",
                alpha2: "LC",
                phoneCountryCode: "+1 758",
                phoneCountryCodes: ["+1 758"]
            }, {
                name: "Saint Martin (French part)",
                alpha2: "MF",
                phoneCountryCode: "+590",
                phoneCountryCodes: ["+590"]
            }, {
                name: "Saint Pierre and Miquelon",
                alpha2: "PM",
                phoneCountryCode: "+508",
                phoneCountryCodes: ["+508"]
            }, {
                name: "Saint Vincent and the Grenadines",
                alpha2: "VC",
                phoneCountryCode: "+1 784",
                phoneCountryCodes: ["+1 784"]
            }, {
                name: "Samoa",
                alpha2: "WS",
                phoneCountryCode: "+685",
                phoneCountryCodes: ["+685"]
            }, {
                name: "San Marino",
                alpha2: "SM",
                phoneCountryCode: "+378",
                phoneCountryCodes: ["+378"]
            }, {
                name: "Sao Tome and Principe",
                alpha2: "ST",
                phoneCountryCode: "+239",
                phoneCountryCodes: ["+239"]
            }, {
                name: "Saudi Arabia",
                alpha2: "SA",
                phoneCountryCode: "+966",
                phoneCountryCodes: ["+966"]
            }, {
                name: "Senegal",
                alpha2: "SN",
                phoneCountryCode: "+221",
                phoneCountryCodes: ["+221"]
            }, {
                name: "Serbia",
                alpha2: "RS",
                phoneCountryCode: "+381",
                phoneCountryCodes: ["+381"]
            }, {
                name: "Seychelles",
                alpha2: "SC",
                phoneCountryCode: "+248",
                phoneCountryCodes: ["+248"]
            }, {
                name: "Sierra Leone",
                alpha2: "SL",
                phoneCountryCode: "+232",
                phoneCountryCodes: ["+232"]
            }, {
                name: "Singapore",
                alpha2: "SG",
                phoneCountryCode: "+65",
                phoneCountryCodes: ["+65"]
            }, {
                name: "Sint Maarten (Dutch part)",
                alpha2: "SX",
                phoneCountryCode: "+1 721",
                phoneCountryCodes: ["+1 721"]
            }, {
                name: "Slovakia",
                alpha2: "SK",
                phoneCountryCode: "+421",
                phoneCountryCodes: ["+421"]
            }, {
                name: "Slovenia",
                alpha2: "SI",
                phoneCountryCode: "+386",
                phoneCountryCodes: ["+386"]
            }, {
                name: "Solomon Islands",
                alpha2: "SB",
                phoneCountryCode: "+677",
                phoneCountryCodes: ["+677"]
            }, {
                name: "Somalia",
                alpha2: "SO",
                phoneCountryCode: "+252",
                phoneCountryCodes: ["+252"]
            }, {
                name: "South Africa",
                alpha2: "ZA",
                phoneCountryCode: "+27",
                phoneCountryCodes: ["+27"]
            }, {
                name: "South Georgia and the South Sandwich Islands",
                alpha2: "GS",
                phoneCountryCode: "+500",
                phoneCountryCodes: ["+500"]
            }, {
                name: "South Sudan",
                alpha2: "SS",
                phoneCountryCode: "+211",
                phoneCountryCodes: ["+211"]
            }, {
                name: "Spain",
                alpha2: "ES",
                phoneCountryCode: "+34",
                phoneCountryCodes: ["+34"]
            }, {
                name: "Sri Lanka",
                alpha2: "LK",
                phoneCountryCode: "+94",
                phoneCountryCodes: ["+94"]
            }, {
                name: "Sudan",
                alpha2: "SD",
                phoneCountryCode: "+249",
                phoneCountryCodes: ["+249"]
            }, {
                name: "Suriname",
                alpha2: "SR",
                phoneCountryCode: "+597",
                phoneCountryCodes: ["+597"]
            }, {
                name: "Svalbard and Jan Mayen",
                alpha2: "SJ",
                phoneCountryCode: "+47",
                phoneCountryCodes: ["+47"]
            }, {
                name: "Swaziland",
                alpha2: "SZ",
                phoneCountryCode: "+268",
                phoneCountryCodes: ["+268"]
            }, {
                name: "Sweden",
                alpha2: "SE",
                phoneCountryCode: "+46",
                phoneCountryCodes: ["+46"]
            }, {
                name: "Switzerland",
                alpha2: "CH",
                phoneCountryCode: "+41",
                phoneCountryCodes: ["+41"]
            }, {
                name: "Syrian Arab Republic",
                alpha2: "SY",
                phoneCountryCode: "+963",
                phoneCountryCodes: ["+963"]
            }, {
                name: "Taiwan",
                alpha2: "TW",
                phoneCountryCode: "+886",
                phoneCountryCodes: ["+886"]
            }, {
                name: "Tajikistan",
                alpha2: "TJ",
                phoneCountryCode: "+992",
                phoneCountryCodes: ["+992"]
            }, {
                name: "Tanzania, United Republic of",
                alpha2: "TZ",
                phoneCountryCode: "+255",
                phoneCountryCodes: ["+255"]
            }, {
                name: "Thailand",
                alpha2: "TH",
                phoneCountryCode: "+66",
                phoneCountryCodes: ["+66"],
                localeForICU: "th",
                currencyCode: "thb"
            }, {
                name: "Timor-Leste",
                alpha2: "TL",
                phoneCountryCode: "+670",
                phoneCountryCodes: ["+670"]
            }, {
                name: "Togo",
                alpha2: "TG",
                phoneCountryCode: "+228",
                phoneCountryCodes: ["+228"]
            }, {
                name: "Tokelau",
                alpha2: "TK",
                phoneCountryCode: "+690",
                phoneCountryCodes: ["+690"]
            }, {
                name: "Tonga",
                alpha2: "TO",
                phoneCountryCode: "+676",
                phoneCountryCodes: ["+676"]
            }, {
                name: "Trinidad and Tobago",
                alpha2: "TT",
                phoneCountryCode: "+1 868",
                phoneCountryCodes: ["+1 868"]
            }, {
                name: "Tunisia",
                alpha2: "TN",
                phoneCountryCode: "+216",
                phoneCountryCodes: ["+216"]
            }, {
                name: "Turkey",
                alpha2: "TR",
                phoneCountryCode: "+90",
                phoneCountryCodes: ["+90"]
            }, {
                name: "Turkmenistan",
                alpha2: "TM",
                phoneCountryCode: "+993",
                phoneCountryCodes: ["+993"]
            }, {
                name: "Turks and Caicos Islands",
                alpha2: "TC",
                phoneCountryCode: "+1 649",
                phoneCountryCodes: ["+1 649"]
            }, {
                name: "Tuvalu",
                alpha2: "TV",
                phoneCountryCode: "+688",
                phoneCountryCodes: ["+688"]
            }, {
                name: "Uganda",
                alpha2: "UG",
                phoneCountryCode: "+256",
                phoneCountryCodes: ["+256"]
            }, {
                name: "Ukraine",
                alpha2: "UA",
                phoneCountryCode: "+380",
                phoneCountryCodes: ["+380"]
            }, {
                name: "United Arab Emirates",
                alpha2: "AE",
                phoneCountryCode: "+971",
                phoneCountryCodes: ["+971"]
            }, {
                name: "United Kingdom",
                alpha2: "GB",
                phoneCountryCode: "+44",
                phoneCountryCodes: ["+44"]
            }, {
                name: "United States",
                alpha2: "US",
                phoneCountryCode: "+1",
                phoneCountryCodes: ["+1"]
            }, {
                name: "United States Minor Outlying Islands",
                alpha2: "UM",
                phoneCountryCode: "+1",
                phoneCountryCodes: ["+1"]
            }, {
                name: "Uruguay",
                alpha2: "UY",
                phoneCountryCode: "+598",
                phoneCountryCodes: ["+598"]
            }, {
                name: "Uzbekistan",
                alpha2: "UZ",
                phoneCountryCode: "+998",
                phoneCountryCodes: ["+998"]
            }, {
                name: "Vanuatu",
                alpha2: "VU",
                phoneCountryCode: "+678",
                phoneCountryCodes: ["+678"]
            }, {
                name: "Venezuela, Bolivarian Republic of",
                alpha2: "VE",
                phoneCountryCode: "+58",
                phoneCountryCodes: ["+58"]
            }, {
                name: "Vietnam",
                alpha2: "VN",
                phoneCountryCode: "+84",
                phoneCountryCodes: ["+84"],
                localeForICU: "vi",
                currencyCode: "vnd"
            }, {
                name: "Virgin Islands, British",
                alpha2: "VG",
                phoneCountryCode: "+1 284",
                phoneCountryCodes: ["+1 284"]
            }, {
                name: "Virgin Islands, U.S.",
                alpha2: "VI",
                phoneCountryCode: "+1 340",
                phoneCountryCodes: ["+1 340"]
            }, {
                name: "Wallis and Futuna",
                alpha2: "WF",
                phoneCountryCode: "+681",
                phoneCountryCodes: ["+681"]
            }, {
                name: "Western Sahara",
                alpha2: "EH",
                phoneCountryCode: "+212",
                phoneCountryCodes: ["+212"]
            }, {
                name: "Yemen",
                alpha2: "YE",
                phoneCountryCode: "+967",
                phoneCountryCodes: ["+967"]
            }, {
                name: "Zambia",
                alpha2: "ZM",
                phoneCountryCode: "+260",
                phoneCountryCodes: ["+260"]
            }, {
                name: "Zimbabwe",
                alpha2: "ZW",
                phoneCountryCode: "+263",
                phoneCountryCodes: ["+263"]
            }]
        },
        284157: (e, o, n) => {
            "use strict";
            n.d(o, {
                n: () => t
            });
            var t;
            ! function(e) {
                e.CONNECT_VOICE = "connect_voice"
            }(t || (t = {}));
            new Set(["connect_voice"])
        },
        349139: (e, o, n) => {
            "use strict";
            n.d(o, {
                o: () => t
            });
            var t;
            ! function(e) {
                e.TRANSFER_EXISTING_CALL = "TRANSFER_EXISTING_CALL";
                e.CREATE_NEW_CALL = "CREATE_NEW_CALL"
            }(t || (t = {}));
            new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"])
        }
    }
]);