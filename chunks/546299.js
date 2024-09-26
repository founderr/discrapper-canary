var r = n(21841),
    i = n(689118);
function a(e, t) {
    return (64512 & e.charCodeAt(t)) == 55296 && !(t < 0) && !(t + 1 >= e.length) && (64512 & e.charCodeAt(t + 1)) == 56320;
}
function o(e, t) {
    if (Array.isArray(e)) return e.slice();
    if (!e) return [];
    var n = [];
    if ('string' == typeof e) {
        if (t) {
            if ('hex' === t) for ((e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (e = '0' + e), i = 0; i < e.length; i += 2) n.push(parseInt(e[i] + e[i + 1], 16));
        } else {
            for (var r = 0, i = 0; i < e.length; i++) {
                var o = e.charCodeAt(i);
                o < 128 ? (n[r++] = o) : (o < 2048 ? (n[r++] = (o >> 6) | 192) : (a(e, i) ? ((o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++i))), (n[r++] = (o >> 18) | 240), (n[r++] = ((o >> 12) & 63) | 128)) : (n[r++] = (o >> 12) | 224), (n[r++] = ((o >> 6) & 63) | 128)), (n[r++] = (63 & o) | 128));
            }
        }
    } else for (i = 0; i < e.length; i++) n[i] = 0 | e[i];
    return n;
}
function s(e) {
    for (var t = '', n = 0; n < e.length; n++) t += c(e[n].toString(16));
    return t;
}
function l(e) {
    return ((e >>> 24) | ((e >>> 8) & 65280) | ((e << 8) & 16711680) | ((255 & e) << 24)) >>> 0;
}
function u(e, t) {
    for (var n = '', r = 0; r < e.length; r++) {
        var i = e[r];
        'little' === t && (i = l(i)), (n += d(i.toString(16)));
    }
    return n;
}
function c(e) {
    return 1 === e.length ? '0' + e : e;
}
function d(e) {
    if (7 === e.length) return '0' + e;
    if (6 === e.length) return '00' + e;
    if (5 === e.length) return '000' + e;
    else if (4 === e.length) return '0000' + e;
    else if (3 === e.length) return '00000' + e;
    else if (2 === e.length) return '000000' + e;
    else if (1 === e.length) return '0000000' + e;
    else return e;
}
function _(e, t, n, i) {
    var a,
        o = n - t;
    r(o % 4 == 0);
    for (var s = Array(o / 4), l = 0, u = t; l < s.length; l++, u += 4) (a = 'big' === i ? (e[u] << 24) | (e[u + 1] << 16) | (e[u + 2] << 8) | e[u + 3] : (e[u + 3] << 24) | (e[u + 2] << 16) | (e[u + 1] << 8) | e[u]), (s[l] = a >>> 0);
    return s;
}
function E(e, t) {
    for (var n = Array(4 * e.length), r = 0, i = 0; r < e.length; r++, i += 4) {
        var a = e[r];
        'big' === t ? ((n[i] = a >>> 24), (n[i + 1] = (a >>> 16) & 255), (n[i + 2] = (a >>> 8) & 255), (n[i + 3] = 255 & a)) : ((n[i + 3] = a >>> 24), (n[i + 2] = (a >>> 16) & 255), (n[i + 1] = (a >>> 8) & 255), (n[i] = 255 & a));
    }
    return n;
}
function f(e, t) {
    return (e >>> t) | (e << (32 - t));
}
function h(e, t) {
    return (e << t) | (e >>> (32 - t));
}
function p(e, t) {
    return (e + t) >>> 0;
}
function m(e, t, n) {
    return (e + t + n) >>> 0;
}
function I(e, t, n, r) {
    return (e + t + n + r) >>> 0;
}
function T(e, t, n, r, i) {
    return (e + t + n + r + i) >>> 0;
}
function g(e, t, n, r) {
    var i = e[t],
        a = (r + e[t + 1]) >>> 0,
        o = (a < r ? 1 : 0) + n + i;
    (e[t] = o >>> 0), (e[t + 1] = a);
}
function S(e, t, n, r) {
    return (((t + r) >>> 0 < t ? 1 : 0) + e + n) >>> 0;
}
function A(e, t, n, r) {
    return (t + r) >>> 0;
}
function v(e, t, n, r, i, a, o, s) {
    var l,
        u = t;
    return (l = 0 + ((u = (u + r) >>> 0) < t ? 1 : 0)), (l += (u = (u + a) >>> 0) < a ? 1 : 0), (e + n + i + o + (l += (u = (u + s) >>> 0) < s ? 1 : 0)) >>> 0;
}
function N(e, t, n, r, i, a, o, s) {
    return (t + r + a + s) >>> 0;
}
function O(e, t, n, r, i, a, o, s, l, u) {
    var c,
        d = t;
    return (c = 0 + ((d = (d + r) >>> 0) < t ? 1 : 0)), (c += (d = (d + a) >>> 0) < a ? 1 : 0), (c += (d = (d + s) >>> 0) < s ? 1 : 0), (e + n + i + o + l + (c += (d = (d + u) >>> 0) < u ? 1 : 0)) >>> 0;
}
function R(e, t, n, r, i, a, o, s, l, u) {
    return (t + r + a + s + u) >>> 0;
}
function C(e, t, n) {
    return ((t << (32 - n)) | (e >>> n)) >>> 0;
}
function y(e, t, n) {
    return ((e << (32 - n)) | (t >>> n)) >>> 0;
}
function L(e, t, n) {
    return e >>> n;
}
function b(e, t, n) {
    return ((e << (32 - n)) | (t >>> n)) >>> 0;
}
(t.inherits = i), (t.toArray = o), (t.toHex = s), (t.htonl = l), (t.toHex32 = u), (t.zero2 = c), (t.zero8 = d), (t.join32 = _), (t.split32 = E), (t.rotr32 = f), (t.rotl32 = h), (t.sum32 = p), (t.sum32_3 = m), (t.sum32_4 = I), (t.sum32_5 = T), (t.sum64 = g), (t.sum64_hi = S), (t.sum64_lo = A), (t.sum64_4_hi = v), (t.sum64_4_lo = N), (t.sum64_5_hi = O), (t.sum64_5_lo = R), (t.rotr64_hi = C), (t.rotr64_lo = y), (t.shr64_hi = L), (t.shr64_lo = b);
